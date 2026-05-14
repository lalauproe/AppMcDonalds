import type { ImageSourcePropType } from 'react-native';
import { AppImages } from './images';

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: ImageSourcePropType;
    ingredients: string[];
}

export interface MenuCategory {
    id: string;
    name: string;
    products: Product[];
}

export interface Restaurant {
    id: string;
    name: string;
    slug: string;
    description: string;
    logo: ImageSourcePropType;
    cover: ImageSourcePropType;
    menuCategories: MenuCategory[];
}

const RESTAURANT: Restaurant = {
    id: 'rest-fsw-donalds',
    name: "McDonald's",
    slug: 'fsw-donalds',
    description: 'O melhor fast food do mundo',
    logo: AppImages.logo,
    cover: AppImages.estabelecimento,
    menuCategories: [
        {
            id: 'cat-combos',
            name: 'Combos',
            products: [
                {
                    id: 'combo-big-mac-duplo',
                    name: 'McOferta Media Big Mac Duplo',
                    description: 'O classico Big Mac com um hambúrguer a mais, acompanhado de batata média e refrigerante médio.',
                    price: 39.90,
                    image: AppImages.combobigmac,
                    ingredients: [
                        'Hambúrguer',
                        'Queijo',
                        'Alface',
                        'Molho especial',
                        'Pão com gergelim',
                        'Batata média',
                        'Refrigerante médio',
                        'cebola',
                        'picles',
                    ],
                },
            ],
        },
    ],
};