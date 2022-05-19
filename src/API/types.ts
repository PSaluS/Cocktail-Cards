export default interface cocktailFull {
    id: string | null;
    title: string | null;
    elements : Elements;
    img: Img;
    build: Build | null;
    ice: Ice | null;
    content: string | null,
    author: string | null;
};

export type Build = 'shaking' | 'mixing' | 'building' | 'layers';

export type Ice = 'cubes' | 'crushed' | 'frozen' | 'hot';

export type Elements = {
    alcohols: Alcohols[],
    noAlcohols: NoAlcohols[]
};

export type Alcohols = {
    alcoholType: string,
    alcoholVolume: number
};

export type NoAlcohols = {
    noAlcoholType: string,
    noAlcoholVolume: number,
    noAlcoholUnit: string
}

type Img = {
    url: string,
    alt: string | null
}