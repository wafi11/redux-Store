import Navbar from "@/components/Navbar";
import Banner from "@/components/moviesList/Banner/Banner";
import BannerMid from "@/components/moviesList/Banner/BannerMid";
import ProductList from "@/components/moviesList/Product/ProductList";
import Service from "@/components/moviesList/Card/Service";
import { getServerSession } from "next-auth";
import { authOptions } from "./utils/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default async function Home() {
  const session = await getServerSession(authOptions)
  console.log(session)
  return (

  
        <>
        <Banner />
        <Service  />
        <ProductList />
        <BannerMid />
      </>

  );
}
