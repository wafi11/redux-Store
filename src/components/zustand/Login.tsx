import { authOptions } from "@/app/utils/auth";
import { AuthOptions, getServerSession } from "next-auth";
import { create } from "zustand";

interface LoginStore {
    login : [],
    setLoginWithGithuB : (AuthOptions : any) => any
}

export const useLoginStore = create<LoginStore> ((set,get) => ({
    login : [],
    setLoginWithGithuB : async(authOptions : any) => {
        const {login} = get()
        const response = await getServerSession(authOptions)
        console.log(response)
        return response
    }
}))