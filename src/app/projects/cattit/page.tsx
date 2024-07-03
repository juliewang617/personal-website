import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavBar"
import Project from "@/components/Project";
import { useState } from "react";

export default function Page(){
  return (
      <div className="flex flex-col w-screen h-screen justify-center bg-gradient-radial from-blue0 to-offwhite">

        <div className="justify-center h-full flex bg-background bg-contain">

          <div className="w-4/5 md:w-2/3">
          <NavigationBar />
            <div className="justify-center">

                TBD

            </div>
          </div>
        </div>
      
        <Footer /> 
      </div>
  );
}
