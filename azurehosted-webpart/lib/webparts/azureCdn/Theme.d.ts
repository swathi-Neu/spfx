import { SPHttpClient } from "@microsoft/sp-http";
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
    updateTheme(themeName: string, theme: IPartialTheme): Promise<boolean>;
}
export declare class SPThemeService implements ISPThemeService {
    private _siteUrl;
    private _spHttpClient;
    constructor(spHttpClient: SPHttpClient, siteUrl: string);
    /**
     * Adds theme to the tenant.
     * @param themeName Theme name.
     * @param theme Theme partial definition containing palette property.
     */
    addTheme(themeName: string, theme: IPartialTheme): Promise<boolean>;
    /**
     * Gets available tenant themes.
     * @param siteUrl Site URL which will be used to execute query.
     */
    getThemes(): Promise<IThemingOptions>;
    /**
     * Deletes theme.
     * @param themeName Theme name to be deleted.
     */
    deleteTheme(themeName: string): Promise<boolean>;
    /**
     * Apply theme to the site.
     * @param theme Partial theme containing palette property.
     * @param siteUrl
     */
    applyTheme(theme: IThemePreview, siteUrl: string): Promise<boolean>;
    /**
     * Update theme.
     * @param themeName Theme name to be updated.
     * @param theme Partial theme containing palette property.
     */
    updateTheme(themeName: string, theme: IPartialTheme): Promise<boolean>;
}
//# sourceMappingURL=Theme.d.ts.map