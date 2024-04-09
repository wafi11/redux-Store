import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github"
import EmailProvider from "next-auth/providers/email"
import {PrismaAdapter} from "@auth/prisma-adapter"
import prisma from "./db";
import { Adapter } from "next-auth/adapters";

export const authOptions = {
    adapter : PrismaAdapter(prisma) as Adapter,
    providers : [
        GithubProvider({
            clientId : process.env.GITHUB_ID as string,
            clientSecret : process.env.GITHUB_SECRET_ID as string
        }),
        EmailProvider ({
            server : {
                host : process.env.EMAIL_SERVER_HOST,
                port : process.env.EMAIL_SERVER_PORT,
                auth : {
                    user : process.env.EMAIL_SERVER_USER,
                    pass : process.env.EMAIL_SERVER_PASSWORD
                },
            },
            from : process.env.EMAIL_FROM
        }),
    ],
    secret : process.env.NEXTAUTH_SECRET 
    
} satisfies NextAuthOptions