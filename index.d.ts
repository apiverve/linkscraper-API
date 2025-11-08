declare module '@apiverve/linkscraper' {
  export interface linkscraperOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface linkscraperResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class linkscraperWrapper {
    constructor(options: linkscraperOptions);

    execute(callback: (error: any, data: linkscraperResponse | null) => void): Promise<linkscraperResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: linkscraperResponse | null) => void): Promise<linkscraperResponse>;
    execute(query?: Record<string, any>): Promise<linkscraperResponse>;
  }
}
