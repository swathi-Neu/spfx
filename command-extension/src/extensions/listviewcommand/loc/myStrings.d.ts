declare interface IListviewcommandCommandSetStrings {
  Command1: string;
  Command2: string;
}

declare module 'ListviewcommandCommandSetStrings' {
  const strings: IListviewcommandCommandSetStrings;
  export = strings;
}
