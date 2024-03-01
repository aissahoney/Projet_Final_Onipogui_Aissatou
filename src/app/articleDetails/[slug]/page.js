"use client";

import Image from "next/image";
import React,{ useEffect, useState } from "react";
import { fetchData } from "../../api/fetchData";
import { useRouter } from "next/navigation";
import LoadingLayout from "@/components/LoadingLayout";

export default function Slug({ params }) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
      fetchData(setData,setIsLoading);
      
    }, []);

    const router = useRouter()

    const newdata = data.find((element) => element.id == params.slug);


    return (
        <div className="p-10 min-h-screen flex flex-col gap-y-5 py-60">
            <h1 className="text-4xl" onClick={() => router.push("/")}>
                {" "}
                BACK{" "}
            </h1>
            <span> {newdata?.title} </span>
        
            <Image
                src={newdata?.image_url}
                width={200}
                height={200}
                className="border-black border-solid border-2 "
            />

            {isLoading && <LoadingLayout/>}
        </div>
    );
}
