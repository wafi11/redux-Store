import { create } from "zustand"
import Product from "../moviesList/Product/Product"
import React from "react"

export interface CartItems {
    id : number,
    price : number,
    rate : number,
    title : string,
    category : string,
    image : string,
    amount : number 
    description : string
}
export interface CartStore {
    cart : CartItems[] 
    setCart : (carts : any) => void
    amount : number
    setAmount : (amounts : number) => void
    itemAmount : () => any
    totalAmount : () => any
    addToCart : (product : CartItems) => void
    removeCart : (product : CartItems) => void
    clearCart : () => void
    increaseAmount : (product : CartItems) => void
    filterByCategory : (product : CartItems) => void
    decreaseAmount : (product : CartItems,id : number) => void
}

export const useCartStore = create<CartStore>((set,get) => ({
    cart : [] ,
    setCart : (carts : any) => set(() => ({cart : carts})),
    amount : 0,
    setAmount : (amounts : number) => set(() => ({amount : amounts})),
    filterByCategory : (item) => {
        const {cart} = get()
        const filter = cart.findIndex((product) => {
            return item.id === product.id
        })
        console.log(filter)
        if(filter !== -1){
            const updatedCategory = cart.filter((category) => item.category !== category.category )
            console.log(updatedCategory)
        }
        let TempDatas = []
        if(cart.length === 0){
            TempDatas = cart
            console.log(TempDatas) 
        }
    },
    totalAmount : () => {
        const {cart,setCart} = get()
        if(cart){
            // const amount = cart.reduce((total,item) =>{ return  total + item.amount},0)
            const totalAmounts = cart.reduce((total, item) => total + item.price * item.amount, 0);
            return totalAmounts
        }
    },
    itemAmount : () => {
        const {cart,setAmount} = get()
        if(cart){
            const amount = cart.reduce((total,item) =>{ return  total + item.amount},0)
            // const totalAmount = cart.reduce((total, item) => total + item.price * item.amount, 0);
            return setAmount(amount)
        }
    },
    addToCart : (product) => {
        const {cart,setCart,itemAmount} = get()
        const data  = {...product,amount : 1}
        const CartItem = cart.find((item : any) => {
            return item.id === product.id
        })
        console.log(`item ${product.title}`)
        if(CartItem){
            const newCart = [...cart].map((item : any) => {
                if(item.id === product.id){
                    return {...item,amount : CartItem.amount + 1}
                }else{
                    return item
                }
            })
            setCart(newCart)
        }else{
            setCart([...cart,data])
        }
        console.log(cart)
    },
    removeCart : (product)  => {
        const {cart,setCart} = get()
        const newCart = cart.filter((item : any) => {
            return item.id !== product.id
        })
        setCart(newCart)
    },
    clearCart : ()=> {
        const {cart,setCart} = get()
        console.log('testing')
        setCart([])
    },
    increaseAmount : (product) => {
        const {cart,setCart,addToCart} =get()
        console.log(`item telah ditambahkan ${product.amount}`)
        const CartItem = cart.find((item : any) => {
            return item.id === product.id
        })
        console.log(CartItem)
        addToCart(product)
    },
    decreaseAmount : (product,id) => {
        const {cart,setCart,removeCart} = get()
        const CartItem = cart.find((item : any) => {
            return item.id === product.id
        })
        if(CartItem){
            const newCart = cart.map((item : any) => {
                if(item.id === product.id){
                    console.log("sebelum")
                    return {...item,amount : product.amount - 1}
                }else{
                    return item
                }
            })
            setCart(newCart)
        }
        console.log(CartItem)
        if(id < 2){
            const newCart = cart.filter((item : any) => {
                return item.id !== product.id
            })
            setCart(newCart)
        }
        console.log(cart)
    },
}))