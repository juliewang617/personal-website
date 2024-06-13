import * as React from 'react'

interface IProjectProps {
    title: string;
    image: string; 
    desc: string;
  }

export default function Project(props: IProjectProps){
    const title = props.title; 
    const image = props.image; 
    const desc = props.desc; 

    return(
        <div className="grid lg:grid-flow-col grid-flow-row justify-center mb-20">

        {/* Image */}
        <div className="bg-blue2 w-72 h-72 rounded-xl" />

        {/* Text */}
        <div className="md:ml-0 lg:ml-14 w-96 mt-10 lg:mt-0 w-72 lg:w-5/6">
          <h1 className="font-rubik font-semibold text-3xl text-blue3">{title}</h1>
          <p className="mt-5 text-blue2">{desc}</p>
        </div>

      </div>

    )
}