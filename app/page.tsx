"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";


export default function Home() {
  const [text,setText]=useState("");
  const submitBtn=(e: React.FormEvent)=>{
    e.preventDefault();
    alert(`The animal you entered was : ${text}`);
  };
  
  return (
    <main className="py-10 px-6 bg-white">
      <h1 className="text-6xl font-black text-green-400 capitalize bg-stone-800/90 py-20 text-center">
        This is a H1 Tag
      </h1>

      <p className="text-xl text-justify m-10 text-black">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi eaque
        iste consequatur sunt ut consequuntur natus quisquam labore. Ab ullam
        ducimus omnis dolore impedit sit odit aperiam temporibus dignissimos
        eveniet! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Atque ex explicabo vero saepe alias numquam eveniet quis corrupti
        nostrum voluptate, quos dicta molestiae nemo ducimus accusamus dolores
        hic. Exercitationem, tenetur.
      </p>

      
    <div className="bg-slate-400 px-4 py-2">
      <form onSubmit={submitBtn} className="px-4 py-2 flex flex-col items-center space-y-4"> 
        <input className="text-white bg-black w-full p-4 text-xl placeholder:text-green-400" type="text" placeholder="Enter your name" value={text} onChange={(e) => setText(e.target.value)}/> 
        <button type="submit" className="items-center px-7 py-4 text-xl  rounded-xl bg-yellow-400 hover:bg-yellow-500 transition-transform duration-150 transform hover:scale-105">Submit</button>
      </form>
    </div>
     <img src="/download.jpeg" alt="there was an error"  className="rounded-2xl shadow-lg mx-auto my-8"/>

      <div className="flex space-x-4">
         <Link
        className="inline-block px-6 py-3 text-2xl rounded-2xl bg-blue-400 hover:bg-blue-500 transition-transform duration-150 transform hover:scale-105"
        href="/about"
        >
        About us
      </Link>
        <Link 
        className="px-7 py-4 text-2xl rounded-2xl bg-green-400 hover:bg-green-500 transition-transform duration-150 
        transform hover:scale-105" href="/fetchInfo">
          Fetch Info
        </Link>
      </div>
      
      
    </main>
  );
}

