let mealsState = []

const stringToHTML = (stringHTML) => {
    const parser = new DOMParser()
    const doc = parser.parseFromString(stringHTML,'text/html')
    return doc.body.firstChild

}

const renderItem = (item) => {
    const element = stringToHTML(`<li data-id="${item._id}">${item.name}</li>`)

    element.addEventListener('click',() => {
        const mealsList = document.getElementById('meals-list')
        Array.from(mealsList.children).forEach(e => e.classList.remove('selected'))
        const mealsInput = document.getElementById('meals-id')
        mealsInput.value = item._id;


        element.classList.add('selected')
    })

    return element
}

const renderOrder = (order,meals) => {
    const meal = meals.find(meal => meal._id === order.meal_id)
    const element = stringToHTML(`<li data-id="${order._id}">${meal.name} - ${order.user_id}</li>`)

    return element
}

window.onload = () => {
    const orderForm = document.getElementById('order')
    orderForm.onsubmit = (e) => {
        e.preventDefault()
        const submit = document.getElementById('submit')
        submit.setAttribute('disabled',true)
        const mealId = document.getElementById('meals-id')
        const mealIdValue = mealId.value
        if (!mealIdValue) {
            alert('Debes seleccionar un plato')
            return
        }

        const order = {
            meal_id: mealIdValue,
            user_id: 'chanchito triste'
        }
        fetch('https://serverless.aldohmolina.now.sh/api/orders',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order)
        }).then(x => x.json())
        .then(respuesta => 
            {
                const renderedOrder = renderOrder(respuesta,mealsState)
                const ordersList = document.getElementById('orders-list')
                ordersList.appendChild(renderedOrder)
                submit.removeAttribute('disabled')
            })
    }
    // fetch meals
    fetch('https://serverless.aldohmolina.now.sh/api/meals',
        {method: 'GET',//'POST','PUT','DELETE'
        // mode: 'cors',
        //cache: 'no-cache',
        //credentials: 'same-origin',
        //headers: {
        //    'Content-Type': 'application/json'
        //},
        //redirect: 'follow',
        //body: JSON.stringify({user:'lala', password:'lolo'})
    })
    .then(response => response.json())
    .then(data => {
        mealsState = data
        const mealsList = document.getElementById('meals-list')
        const submit = document.getElementById('submit')
        const listItems = data.map(renderItem)
        // Quitar Cargando
        mealsList.removeChild(mealsList.firstElementChild)
        //Render Consulta Meals
        listItems.forEach(element => mealsList.appendChild(element))
        submit.removeAttribute('disabled')

        fetch('https://serverless.aldohmolina.now.sh/api/orders')
        .then(response => response.json())
        .then(ordersData => {
            const ordersList = document.getElementById('orders-list')
            const listOrders = ordersData.map(orderData => renderOrder(orderData,data))

            ordersList.removeChild(ordersList.firstElementChild)
            listOrders.forEach(element => ordersList.appendChild(element))
        })
    })
}