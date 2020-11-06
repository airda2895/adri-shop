export class Shop { 
    shopItems: object;
    
    constructor() {
        this.shopItems = [
            {
                title: 'Portátil',
                desc: 'Ideal para aquellos que quieren portabilidad',
                picture: 'laptop.jpg',
                price: 450
            },
            {
                title: 'Sobremesa',
                desc: 'Ideal para aquellos que quieren un buen rendimiento',
                picture: 'desktop.jpg',
                price: 789
            },
            {
                title: 'Servidor',
                desc: 'Ideal para empresas que necesiten un servidor potente para lo que sea',
                picture: 'server.jpg',
                price: 1632
            }
        ];
    }
}