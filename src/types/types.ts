export interface Weight {
  imperial: string;
  metric: string;
}

export interface CatBreedExtra {
  reference_image_id: string;
}

export interface BreedExtra {
  description: string;
  temperament: string;
  vcahospitals_url: string;
  vetstreet_url: string;
}

export interface BreedAllInfo {
  id: string;
  name: string;
  origin: string;
  life_span: string;
  cfa_url: string;
  wikipedia_url: string;
  country_code: string;
  country_codes: string;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  dog_friendly: number;
  energy_level: number;
  grooming: number;
  health_issues: number;
  hypoallergenic: number;
  indoor: number;
  intelligence: number;
  lap: number;
  natural: number;
  rare: number;
  shedding_level: number;
  short_legs: number;
  social_needs: number;
  stranger_friendly: number;
  suppressed_tail: number;
  vocalisation: number;
  weight: Weight;
  alt_names: string;
  experimental: number;
  hairless: number;
}

export interface CatBreed extends BreedAllInfo, BreedExtra {}

export interface Cats extends BreedAllInfo, CatBreedExtra {}

export interface CatsDataType {
  breeds: CatBreed[];
  height: number;
  id: string;
  url: string;
  width: number;
}

export interface CatItemType {
  id: string;
  description: string;
  name: string;
  origin: string;
}

export interface Breed {
  id: string;
  name: string;
}

export interface SearchStateType {
  searchValue: string;
  limit: number;
}
