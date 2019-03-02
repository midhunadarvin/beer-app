import { BeerVolume } from './beer-volume';
export interface Beer {
    abv: number;
    attenuation_level: number;
    boil_volume: BeerVolume;
    brewers_tips: string;
    contributed_by: string;
    description: string;
    ebc: number;
    first_brewed: string;
    food_pairing: Array<string>;
    ibu: number;
    id: number;
    image_url: string;
    ingredients: any;
    method: any;
    name: string;
    ph: number;
    srm: number;
    tagline: string;
    target_fg: number;
    target_og: number;
    volume: BeerVolume;
}
