let fruits = [ 
    {id: 1, title: 'Яблоки', price: 20, img: 'https://e1.edimdoma.ru/data/ingredients/0000/2374/2374-ed4_wide.jpg?1487746348'},
    {id: 2, title: 'Апельсин', price: 30, img: 'https://befreshcorp.net/wp-content/uploads/2017/07/product-packshot-Orange-558x600.jpg'},
    {id: 3, title: 'Манго', price: 40, img: 'https://static-eu.insales.ru/images/collections/1/6175/1480735/mango-07.jpg'}
]

const toHTML = fruit => `
    <div class="col">
        <div class="card">
            <img src="${fruit.img}" class="card-img-top" style="height: 300px;" alt="${fruit.title}">
            <div class="card-body">
                <h5 class="card-title">${fruit.title}</h5>
                <a href="#" class="btn btn-primary" data-btn="price" data-id="${fruit.id}">Посмотреть цену</a>
                <a href="#" class="btn btn-danger" data-btn="remove" data-id="${fruit.id}">Удалить</a>
            </div>
        </div>
    </div>
`

function render() {
    const html = fruits.map(toHTML).join('')
    document.querySelector('#fruits').innerHTML = html;
}

render()

const priceModal = $.modal( {
    title: 'Цена на товар',
    closable: true,
    width: '400px',
    footerButtons: [
        {
            text: 'Закрыть', type: 'primary', handler() {
                priceModal.close()
            }
        }
    ]
})




document.addEventListener('click', event => {
    event.preventDefault()
    const btnType = event.target.dataset.btn
    const id = +event.target.dataset.id
    const fruit = fruits.find(f => f.id === id)

    if (btnType === 'price') {

        priceModal.setContent(`
            <p>Цена на ${fruit.title}: <strong>${fruit.price}$</strong></p>
        
        `)
        priceModal.open()
    } else if (btnType === 'remove') {
        $.confirm({
            title: 'Вы уверены?',
            content: `<p>Вы удаляете фрукт: <strong>${fruit.title}</strong></p>`
        }).then( () => {
            fruits = fruits.filter(f => f.id !== id)
            render()
        }).catch( () => {
            console.log('Cancel')
        })
    }
})