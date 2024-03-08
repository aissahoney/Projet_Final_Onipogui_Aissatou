"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { signOut } from "@/app/lib/features/AuthSlice";
import { UserRound,LogOut  } from 'lucide-react';

export default function NavBar() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  console.log(isLoggedIn);

  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <div className="text-pink-950  fixed top-0 left-0 right-0 z-10">
      <nav className="bg-white grid grid-cols-2 py-8  px-10  shadow md:gap-96  sm:gap-32">
        <div className="rounded-full  h-8 w-20 flex items-center justify-center sm:pt-10 md:pt-10">
          <Link href={"/"}>
            {" "}
            <Image
              src={"/2.png"}
              width={80}
              height={80}
              className="rounded-full"
            />{" "}
          </Link>
        </div>
        <div
          className="grid grid-cols-5  gap-0  md:gap-x-60
        md:grid-cols-1 sm:grid-cols-1"
        >
          <p className="hover:text-orange-700 ">
            {/* <Link href={"/"}>home</Link> */}
          </p>
          <p className="hover:text-orange-700 ">
            <Link href={"/allitems"}> Books</Link>
          </p>
          {isLoggedIn === false && (
            <p className="hover:text-orange-700 ">
              <Link href={"/subscription"}>Membership</Link>
            </p>
          )}

          <p className="hover:text-orange-700 ">
            {isLoggedIn === true ? (
              <Link href={"/"}>
                {" "}
                <button onClick={() => dispatch(signOut())}>
                  {" "}
                  <LogOut width={30}/>
                </button>{" "}
              </Link>
            ) : (
              <Link href={"/connexion"}> Log-In <UserRound width={30}/> </Link>
            )}
          </p>
          <p className="hover:text-orange-700 ">
            <Link href={"/favoris"}> ♥️ Favorites </Link>
          </p>
        </div>
      </nav>
    </div>
  );
}
