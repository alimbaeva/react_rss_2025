export interface FilterData {
  label: string;
  type: string;
  forInput: string;
}

export interface CuntryData {
  flag: string;
  flags: {
    png: string;
    svg: string;
  };
  name: { common: string };
  population: number;
  region: string;
  continents: string[];
}
