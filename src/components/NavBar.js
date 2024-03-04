"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function NavBar() {
    return (
        <div className="text-pink-950  fixed top-0 left-0 right-0 z-10 ">
            <nav className="bg-white grid grid-cols-2 py-8 px-5">
                <div className="rounded-full  h-8 w-20">
                    <Link href={"/"}>
                        {" "}
                        <Image src={"/2.png"} width={80} height={80} />{" "}
                    </Link>
                </div>
                <div className="grid grid-cols-4 ">
                    <p className="hover:text-orange-700 ">
                        <Link href={"/allitems"}> Allarticles</Link>
                    </p>
                    <p className="hover:text-orange-700 ">
                        <Link href={"/subscription"}>Membership</Link>
                    </p>
                    <p className="hover:text-orange-700 ">
                        <Link href={"/connexion"}> Hello Guest </Link>
                    </p>
                    <p className="hover:text-orange-700 ">
                        <Link href={"/connexion"}> Favoris</Link>
                    </p>
                </div>
            </nav>
        </div>
    );
}
