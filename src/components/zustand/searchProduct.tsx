import axios from 'axios'
import { apiProduct } from '../libs/api'
import { CartItems } from '../zustand/cartProduct'
import { create } from 'zustand'

type searchState = {
  searchResults : CartItems[]
  SearchProduct: (query : string) => Promise<void>;
}
export const useStore = create<searchState>((set,get) => ({
  searchResults: [],
  SearchProduct: async (query : string) => {
    try {
      const apikey = process.env.NEXT_PUBLIC_API_BASE_URL
      const response = await axios.get(`${apikey}/products?${query}`);
      const products : CartItems[] =  await response.data
      const filteredProducts = 
      products.filter((product)=> product.title.toLowerCase().includes(query.toLowerCase()))
      return set({searchResults: filteredProducts});
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  },
 
}))



