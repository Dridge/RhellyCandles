export interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Fancy candle',
    price: 90,
    inStock: true,
    description: 'A fancy candle, for fancy people.'
  },
  {
    id: 2,
    name: 'New Candle',
    price: 30,
    inStock: false,
    description: 'A new candle, because who doesn\'t love new?'
  },
  {
    id: 3,
    name: 'Old Candle',
    price: 20,
    inStock: false,
    description: 'An old candle, because the oldies are the besties!'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/