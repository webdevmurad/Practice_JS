const fruits = [ 
    {id: 1, title: 'Яблоки', price: 20, img: 'https://e1.edimdoma.ru/data/ingredients/0000/2374/2374-ed4_wide.jpg?1487746348'},
    {id: 2, title: 'Апельсин', price: 30, img: 'https://befreshcorp.net/wp-content/uploads/2017/07/product-packshot-Orange-558x600.jpg'},
    {id: 3, title: 'Манго', price: 40, img: 'https://static-eu.insales.ru/images/collections/1/6175/1480735/mango-07.jpg'}

]


const modal = $.modal( {
    title: 'Murad Modal',
    closable: true,
    content: `<h4>Modal is working</h4>`,
    width: '400px',
    footerButtons: [
        {
            text: 'OK', type: 'primary', handler() {
                console.log('Primary btn clicked')
                modal.close()
            }
        },
        {
            text: 'Cancel', type: 'danger', handler() {
                console.log('Danger btn clicked')
                modal.close()
            }
        }
    ]
})