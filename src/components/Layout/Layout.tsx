import SideMenu from "@/components/SideMenu";
import scss from "./Layout.module.scss";
import { useSession } from "next-auth/react";
import React from "react";
import Head from "next/head";
import Footer from "@/components/Footer";
import Header from "../Header/Header";

const Layout = (props: any) => {
  //const { data: session } = useSession();
  const session = true;
  return (
    <>
      <Head>
        <title>DataSoft - Data Dashboard</title>
        <meta name="description" content="Data Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={scss.layout}
        //style={{ padding: session ? "0 24px 0 80px" : 0 }}
        style={{ padding: "0 24px 0 80px" }}
      >

         {session && <SideMenu />} 
       
        {props.children}
        
      </main>
    </>
  );
};

export default Layout;
