export interface ICategory {
  id?: string;
  name: string;
  level?: number;
  parent?: ICategory;
}
