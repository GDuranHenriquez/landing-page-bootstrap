export const productList : IProduct[] = [
    {
        id: 1,
        name: 'Lavandina',
        price: 10,
        description: 'Botella 1lt'
    },
    {
        id: 2,
        name: 'Limpia vidrio',
        price: 7,
        description: 'Tus vidrios transparentes'
    },
    {
        id: 3,
        name: 'Detergente',
        price: 5,
        description: 'Dura 120 lavados'
    },
    {
        id: 4,
        name: 'Quita Grasa',
        price: 6,
        description: 'Cocina tranquilo, nosotros limpiamos'
    },
    {
        id: 5,
        name: 'Perfumina',
        price: 8,
        description: 'El olor a campo mas realista'
    }
]

export interface IProduct{
    id: number | string,
    name: string,
    price: number,
    description?: string
}