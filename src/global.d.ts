declare namespace __WebpackModuleApi {
    interface RequireContext {
      keys(): string[];
      (id: string): any;
      resolve(id: string): string;
      id: string;
    }
  }
  