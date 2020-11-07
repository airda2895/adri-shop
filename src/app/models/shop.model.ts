export class Shop { 
    shopItems: object;
    
    constructor() {
        this.shopItems = [
            {
                title: 'Portátil',
                description: 'Ideal para aquellos que quieren portabilidad',
                picture: 'assets/img/laptop.png',
                price: 450
            },
            {
                title: 'Sobremesa',
                description: 'Ideal para aquellos que quieren un buen rendimiento',
                picture: 'assets/img/desktop.png',
                price: 789
            },
            {
                title: 'Servidor',
                description: 'Ideal para empresas que necesiten un servidor potente para lo que sea',
                picture: 'assets/img/server.png',
                price: 1632
            }
        ];
    }
}