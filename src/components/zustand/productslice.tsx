import {create }from 'zustand';
import axios from 'axios';
import { useEffect } from 'react';
import { CartItems } from './cartProduct';


type FilteredCategoryState = {
    products: CartItems[];
    details : CartItems[]
    searchResults : CartItems[]
    searchQuery : string
    setSearchQuery : (query : string) => void
    category : string | null
    setFilteredCategory : (category : string | null) => void
    fetchProducts: () => Promise<void>;
    fetchDetails: (productId : number) => Promise<void>;
}

export const useFilteredCategoryStore = create<FilteredCategoryState>((set,get) => ({
    products: [],
    details : [],
    category : null,
    searchResults : [],
    searchQuery : '',
    setSearchQuery: (query : string) => {
        set({searchQuery : query})
        
    },
    setFilteredCategory : (category) => set({category }),
    fetchProducts: async () => {
        const {category}= get()
            try {
                    const apikey = process.env.NEXT_PUBLIC_API_BASE_URL
                    const response = await axios.get(`${apikey}/products`);
                    const results : CartItems[] = await response.data
                    const filteredItems = category ? results.filter((item) => item.category === category) : results
                    set({ products: filteredItems});
                } catch (error) {
                        console.error('Error fetching products:', error);
                    }
        },
    fetchDetails: async (productId : number) => {
            try {
                    const apikey = process.env.NEXT_PUBLIC_API_BASE_URL
                    const response = await axios.get(`${apikey}/products?${productId}`);
                    set({details: response.data });
                } catch (error) {
                        console.error('Error fetching products:', error);
                    }
        },
   
}))