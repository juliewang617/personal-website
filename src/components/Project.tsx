'use client'
import * as React from 'react'
import Link from "next/link";

interface IProjectProps {
    title: string;
    image: string; 
    desc: string;
    caption: string; 
    link: string; 
    page: string; 
  }

export default function Project(props: IProjectProps){
    const title = props.title; 
    const image = props.image; 
    const desc = props.desc; 
    const caption = props.caption;
    const link = props.link;
    const page = props.page; 

    return(
        <div className="grid lg:grid-flow-col grid-flow-row justify-center mb-20">

        {/* Image */}
        <Link href={page}>
          <div className={`${image} w-72 h-72 rounded-xl bg-cover bg-center hover:opacity-85`}/>
        </Link>

        {/* Text */}
        <div className="md:ml-0 lg:ml-14 w-96 mt-4 lg:mt-0 w-72 lg:w-5/6">
          <div className="flex flex-row items-center">
            <h1 className="font-rubik font-semibold text-3xl text-blue3">{title}</h1>
            {link != "" && <button className="bg-github_logo w-6 h-6 bg-cover ml-4" onClick={() =>{window.open(link)}}/>}
          </div>
          <div className="font-rubrik text-blue2 mt-4">{caption}</div>
          <p className="mt-4 text-blue3">{desc}</p>
        </div>

      </div>

    )
}