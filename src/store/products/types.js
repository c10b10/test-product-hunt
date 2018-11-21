// @flow
export type ProductData = {
  id: string,
  name: string,
  date: string,
  tagline: string,
  url: string,
  thumbnail: string,
  user: string
};

export type ProductsState = {
  data: {
    entities: { products: { [string]: ProductData } },
    result: Array<string>
  },
  isLoading: boolean
};

export type ProductsApiParams = {
  "search[featured_year]": number
};
