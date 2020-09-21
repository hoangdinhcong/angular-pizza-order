export enum PizzaSize {
    small,
    medium,
    large
}

export class Pizza {
    id: string;
    name: string;
    description?: string;
    thumbnail: string;
    images?: string[];

    price?: number;
    currency?: string;
    size: PizzaSize[];
}
