export interface DataModel {
  date: string;
  hasError: boolean;
  fields: Field[];
}

interface Field {
  id: string;
  prop: string;
  value: string;
  hasError: boolean;
}
