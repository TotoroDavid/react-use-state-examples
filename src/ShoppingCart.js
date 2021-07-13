import React, { useState } from 'react'

const initialCart = [
    {
        id: 1,
        title: 'product',
        description: 'Desc'
    },
    {
        id: 2,
        title: 'product2',
        description: 'Desc2'
    }
]

const ShoppingCart = () => {

    const [cart, setCart] = useState(initialCart)

    const deleteProduct = (productId) => {
        const changedCart = cart.filter(product => product.id !== productId)
        setCart(changedCart)
    }

    const addProduct = (newProduct) => {
        newProduct.id = Date.now()
        const changedCart = [
            newProduct,
            ...cart
        ]
        setCart(changedCart)
    }

    const updateProduct = (editProduct) => {
        const changedCart = cart.map(product => (
            product.id === editProduct.id
                ? editProduct
                : product
        ))
        setCart(changedCart)
    }

    return (
        <div>

            <button onClick={() => addProduct({
                title: 'new title',
                description: 'new description'
            })}>
                Add
            </button>

            <button onClick={() => updateProduct({
                id: 1,
                title: 'edit title',
                description: 'edit description'
            })}>
                Update
            </button>

            {cart.map(product => (
                <div key={product.id}>
                    <p>{product.id}</p>
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <button onClick={() => deleteProduct(product.id)}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    )
}

export default ShoppingCart
