import React, { useState } from 'react'

const initialProduct = {
    title: 'this is a new title',
    description: 'description'
}

const CounterApp = () => {

    const [product, setProduct] = useState(initialProduct)

    const updateProduct = (prop, value) => {
        setProduct({
            ...product,
            [prop]: value
        })
    }

    return (
        <div>
            <button onClick={() => updateProduct('title', 'new description')}>
                update
            </button>
            <h1>{product.title}</h1>
            <h1>{product.description}</h1>
            <pre>
                {JSON.stringify(product, null, 2)}
            </pre>

        </div>
    )
}

export default CounterApp
