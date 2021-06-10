interface Autor {
  name: string;
  lastname: string;
}


interface Price {
    currency: string,
    amount: number,
    decimals?: number
}


interface ItemModel {
    autor?:Autor,
    id: string,
    title: string,
    price: Price,
    picture: string,
    condition: string,
    free_shipping: boolean,
    sold_quantity?: number
    description?: string
}


export default ItemModel






