"use client";

import React, { useEffect, useState } from "react";


interface CardInterface{
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export default function FetchedInfo() {
    const [gotData,setGotData]=useState<CardInterface[]>([]);
    useEffect(() => {
    const fetchInfo = async() => {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data: CardInterface[] = await response.json();
        setGotData(data);
    };
    fetchInfo();
},[]);
    return(
        <main className="bg-white">
            <h1 className="text-6xl font-black text-green-400 capitalize bg-stone-800/90 py-20 text-center">
                Fetched Data
            </h1>
            <div className="  grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            {gotData.map((item)=>(
                <div key={item.id} className="bg-red-500 p-4 border rounded hover:bg-grey-100 transition" >
                    <h2 className="font-semibold">ID:{item.id}</h2>
                    <p>Title : {item.title}</p>
                    <p>Status : {item.completed ? "completed" : "Pending"}</p>
                </div>
            ))}
        </div>
        </main>
    )
}


