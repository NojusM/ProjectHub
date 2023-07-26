export interface SortRange {
  title: string;
  units: string;
  dataMin: number;
  dataMax: number;
  userMin: number;
  userMax: number;
}

export interface GridData {
  name: string;
  img: string;
  info: { value: number; units: string }[];
}

export interface RangesData {
  data: number[];
  title: string;
  units: string;
}
