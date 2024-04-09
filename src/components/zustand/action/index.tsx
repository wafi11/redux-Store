import { create } from "zustand"

interface Product {
    id : number
    title : string
    category : string
}
interface ProductStore {
    products : Product[]
    setProducts : (category : boolean) => void
    filterByCategory : (category : string) => void
}
export const useProductStore = create<ProductStore>((set) => ({
    products : [],
    setProducts : (category : any) => set(() => ({products : category})),
    filterByCategory(category : string) {
        console.log('onclick')
        const newCategory = this.products.find((item) => {
            return item.category = category
        })
    },
}))