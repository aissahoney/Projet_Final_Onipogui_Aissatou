"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function NavBar() {
    const { isLoggedIn} = useSelector((state) => state.auth);
    console.log(isLoggedIn)
    
    return (
        <div className="text-pink-950  fixed top-0 left-0 right-0 z-10 ">
            <nav className="bg-white grid grid-cols-2 py-8 px-5">
                <div className="rounded-full  h-8 w-20 flex items-center">
                    <Link href={"/"}>
                        {" "}
                        <Image src={"/2.png"} width={80} height={80} className="rounded-full"/>{" "}
                    </Link>
                </div>
                <div className="grid grid-cols-5 ">
                    <p className="hover:text-orange-700 ">
                        
                        {/* <Link href={"/"}>home</Link> */}
                    </p>
                    <p className="hover:text-orange-700 ">
                        <Link href={"/allitems"}> Books</Link>
                    </p>
                    {isLoggedIn === false && <p className="hover:text-orange-700 ">
                        <Link href={"/subscription"}>Membership</Link>
                    </p>}
                    
                    <p className="hover:text-orange-700 ">
                    {isLoggedIn === true ? <Link href={"/"}> Sign Out </Link> : <Link href={"/connexion"}> Log In </Link> }
                        
                    </p>
                    <p className="hover:text-orange-700 ">
                        <Link href={"/favoris"}> ♥️ Favorites </Link>
                    </p>
                </div>
            </nav>
        </div>
    );
}
