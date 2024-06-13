import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavBar"
import Project from "@/components/Project";
import { useState } from "react";

export default function Page(){
  return (
      <div className="flex flex-col w-screen justify-center bg-gradient-radial from-blue0 to-offwhite">

        <div className="justify-center h-full flex bg-background bg-contain">

          <div className="w-4/5 sm:w-2/3">
          <NavigationBar />
            <div className="justify-center">

             <Project 
              title="Connect 4 and AI Player" 
              image="hi"
              desc="Developed a playable Connect4 game using Flask and Python. 
              Built an AI player that utilizes the minimax algorithm with alpha-beta pruning."/> 
              
              <Project 
              title="Carpool App" 
              image="hi"
              desc="Hi! My name is Julie Wang, and I’m currently majoring in 
              computer science at Brown University. Lorem ipsum dolor sit 
              amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
              veniam, quis nostrud exercitation ullamco laboris."/> 
              
              <Project 
              title="Aliens TD" 
              image="hi"
              desc="Hi! My name is Julie Wang, and I’m currently majoring in 
              computer science at Brown University. Lorem ipsum dolor sit 
              amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
              veniam, quis nostrud exercitation ullamco laboris."/> 

              


            </div>
          </div>
        </div>
      
        <Footer /> 
      </div>
  );
}
