import { CartItems } from "@/components/zustand/cartProduct"
import axios from "axios"
import { useState } from "react"
import { useStore } from "zustand"

const apikey = process.env.NEXT_PUBLIC_API_BASE_URL
export async function apiProduct([resource,query] : any){
        try {
                const response = await axios.get(`${apikey}/${resource}?${query}`)
                const result = await response.data
                return result
        }catch{
                console.log("erorr bang")
        }
    
}
export async function apiProductCategory(){
        try {
                const response = await axios.get(`${apikey}/products`)
                const result = await response.data
                return result
        }catch{
                console.log("erorr bang")
        }
    
}
export const fetchSearch = async (searchTerm : string) => {
        try { 
            const response = await axios.get(
                `https://fakestoreapi.com/products?title=${searchTerm}}`
              );           
           const products : CartItems[] = await response.data
           const filteredProducts = products.filter((product)=> product.title.toLowerCase().includes(searchTerm.toLowerCase()) )
           return filteredProducts
         }catch{
           console.log('Error lagi bang')
         }
       }

