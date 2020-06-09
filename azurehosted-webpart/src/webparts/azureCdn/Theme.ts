import { SPHttpClient, SPHttpClientResponse } from "@microsoft/sp-http";
import { IPartialTheme } from "@uifabric/styling/lib";

export interface IThemingOptions {
  '@odata.context': string;
  hideDefaultThemes: boolean;
  themePreviews: IThemePreview[];
}

export interface IThemePreview {
  /**
   * Name od the SP theme
   */
  name: string;
  /**
   * JSON representing theme.
   */
  themeJson: string;
}

export interface ISPThemeService {
  addTheme(themeName: string, theme: IPartialTheme): Promise<boolean>;
  getThemes(): Promise<IThemingOptions>;
  deleteTheme(themeName: string): Promise<boolean>;

  applyTheme(theme: IThemePreview, siteUrl: string): Promise<boolean>;
  updateTheme(themeName: string, theme: IPartialTheme): Promise<boolean>
}

export class SPThemeService implements ISPThemeService {
  private _siteUrl: string;
  private _spHttpClient: SPHttpClient;

  constructor(spHttpClient: SPHttpClient, siteUrl: string) {
    this._spHttpClient = spHttpClient;
    this._siteUrl = siteUrl;
  }

  /**
   * Adds theme to the tenant.
   * @param themeName Theme name.
   * @param theme Theme partial definition containing palette property.
   */
  public async addTheme(themeName: string, theme: IPartialTheme): Promise<boolean> {
    try {
      let url = `${this._siteUrl}/_api/thememanager/AddTenantTheme`;
      const body = JSON.stringify({
        name: themeName,
        themeJson: JSON.stringify(theme)
      });
      let addThemeResponse: SPHttpClientResponse = await this._spHttpClient.post(url, SPHttpClient.configurations.v1, {
        body: body
      });

      if (!addThemeResponse || !addThemeResponse.ok) {
        throw new Error(`Something went wrong when add theme. ThemeName=${themeName}.`);
      }
      const addThemeJSONResult = await addThemeResponse.json();
      if (!addThemeJSONResult) {
        throw new Error(`Cannot read JSON result when add theme. ThemeName=${themeName}.`)
      }

      return addThemeJSONResult.value;
    } catch (err) {
      console.log(`[Error][SPThemeService.addTheme] :  + ${err.message}`);
      return false;
    }
  }

  /**
   * Gets available tenant themes.
   * @param siteUrl Site URL which will be used to execute query.
   */
  public async getThemes(): Promise<IThemingOptions> {
    try {
      let url = `${this._siteUrl}/_api/thememanager/GetTenantThemingOptions`;
      let getThemesResponse: SPHttpClientResponse = await this._spHttpClient.get(url, SPHttpClient.configurations.v1);

      if (!getThemesResponse || !getThemesResponse.ok) {
        throw new Error(`Something went wrong when obtaining tenant themes.`);
      }
      const themesJSONResult = await getThemesResponse.json() as IThemingOptions;
      if (!themesJSONResult) {
        throw new Error("Cannot read JSON result when obtaining themes. ")
      }

      return themesJSONResult;
    } catch (err) {
      console.log(`[Error][SPThemeService.getThemes] : ${err.message}`);
      return null;
    }
  }

  /**
   * Deletes theme.
   * @param themeName Theme name to be deleted.
   */
  public async deleteTheme(themeName: string): Promise<boolean> {
    try {
      let url = `${this._siteUrl}/_api/thememanager/DeleteTenantTheme`;
      let deleteResult: SPHttpClientResponse = await this._spHttpClient.post(url, SPHttpClient.configurations.v1, {
        body: JSON.stringify({
          name: themeName
        })
      });

      if (!deleteResult || !deleteResult.ok) {
        throw new Error(`Something went wrong when delete theme. ThemeName=${themeName}.`);
      }

      return true;
    } catch (err) {
      console.log(`[Error][SPThemeService.deleteTheme] : ${err.message}`);
      return false;
    }
  }

  /**
   * Apply theme to the site.
   * @param theme Partial theme containing palette property.
   * @param siteUrl
   */
  public async applyTheme(theme: IThemePreview, siteUrl: string): Promise<boolean> {
    try {
      let url = `${siteUrl}/_api/ThemeManager/ApplyTheme`;
      let applyThemeResult: SPHttpClientResponse = await this._spHttpClient.post(url, SPHttpClient.configurations.v1, {
        body: JSON.stringify({
          name: theme.name,
          themeJson: theme.themeJson
        })
      });

      if (!applyThemeResult || !applyThemeResult.ok) {
        throw new Error("Something went wrong when applying theme.");
      }

      let applyThemeResultJson = await applyThemeResult.json();
      if (!applyThemeResultJson) {
        throw new Error("Cannot read answer when applying theme..");
      }

      return true;
    } catch (err) {
      console.log(`[Error][SPThemeService.applyTheme] : ${err.message}`);
      return false;
    }
  }

  /**
   * Update theme.
   * @param themeName Theme name to be updated.
   * @param theme Partial theme containing palette property.
   */
  public async updateTheme(themeName: string, theme: IPartialTheme): Promise<boolean> {
    try {
      let url = `${this._siteUrl}/_api/thememanager/UpdateTenantTheme`;

      const body = JSON.stringify({
        name: themeName,
        themeJson: JSON.stringify(theme)
      });
      let updateThemeResponse: SPHttpClientResponse = await this._spHttpClient.post(url, SPHttpClient.configurations.v1, {
        body: body
      });

      if (!updateThemeResponse || !updateThemeResponse.ok) {
        throw new Error(`Something went wrong when update theme. ThemeName=${themeName}.`);
      }
      const updateThemeJSONResult = await updateThemeResponse.json();
      if (!updateThemeJSONResult) {
        throw new Error(`Cannot read JSON result when update theme. ThemeName=${themeName}.`)
      }

      return updateThemeJSONResult.value;
    } catch (err) {
      console.log(`[Error][SPThemeService.updateTheme] : ${err.message}`);
      return false;
    }
  }
}