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

type NameUrl = { name?: string; url?: string };
export interface Pokemon {
  id?: number;
  name?: string;
  base_experience?: number;
  height?: number;
  is_default?: boolean;
  order?: number;
  weight?: number;
  abilities?: { is_hidden?: boolean; slot?: number; ability?: NameUrl };
  forms?: NameUrl[];
  game_indices?: { game_index?: number; version?: NameUrl }[];
  held_items?: { item?: NameUrl; version?: { version?: NameUrl; rarity?: number } }[];
  location_area_encounters?: string;
  moves?: {
    move?: NameUrl;
    version_group_details?: { move_learn_method?: NameUrl; version_group?: NameUrl; level_learned_at?: number }[];
  }[];
  past_types?: { generation?: NameUrl; types?: { slot?: number; type?: NameUrl }[] }[];
  sprites?: {
    front_default?: string;
    front_shiny?: string;
    front_female?: string;
    front_shiny_female?: string;
    back_default?: string;
    back_female?: string;
    back_shiny_female?: string;
  };
  species?: NameUrl;
  stats?: { stat?: NameUrl; effort?: number; base_stat?: number }[];
  types?: { slot?: number; type?: NameUrl }[];
}

export interface PokemonApiResponse {
  pokemon?: Pokemon[];
  count?: number;
  next?: string;
  previous?: string;
  results?: NameUrl[];
}
