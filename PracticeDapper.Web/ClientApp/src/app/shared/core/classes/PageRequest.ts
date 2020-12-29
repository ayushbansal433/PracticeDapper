export class PageRequest<T=any>{
    pageNumber: number = 1;
    pageSize: number = 10;
    totalNumberOfRecords: number;
    isException?: boolean;
    isCustomTimeZone?: boolean;
    filterCollection: T;
  
    constructor(data?: Partial<PageRequest>) {
      Object.assign(this, data);
    }
}