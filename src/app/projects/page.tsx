import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavBar"
import Project from "@/components/Project";
import { useState } from "react";

export default function Page(){
  return (
      <div className="flex flex-col w-screen justify-center bg-gradient-radial from-blue0 to-offwhite">

        <div className="justify-center h-full flex bg-background bg-contain">

          <div className="w-4/5 md:w-2/3">
          <NavigationBar />
            <div className="justify-center">

             <Project 
              title="Carpool Organizer" 
              image="bg-carpool_thumbnail"
              caption="React, Node.js, Express, SQLite, Bootstrap, Git, InDesign"
              link=""
              page="/projects/carpool-organizer"
              desc="In-progress full-stack carpool organizer for my 
              local robotics team with over 100 members. Implemented REST API 
              with SQLite and Express to retrieve and store data. Designed 
              mock-ups with InDesign. Currently under mentorship of industry 
              expert Rob Raisch. 
              "/> 
              
              <Project 
              title="Ez-Ed" 
              image="bg-ez_ed_thumbnail"
              caption="Teachable Machine, React, HTML/CSS, Figma"
              link="https://github.com/juliewang617/ez-ed"
              page="/projects/ez-ed"
              desc="Responsive website to educate about global health disparities
              regarding atopic dermatitis (eczema). Implemented a machine
              learning model using Teachable Machine to identify images of 
              eczema for users lacking access to care. Created as submission 
              for Kode with Klossy x Deloitte's Health Equity Challenge."/> 
              
              <Project 
              title="Cattit" 
              image="bg-cattit_thumbnail"
              caption="React Native, Firebase, Firestore, Figma"
              link="https://github.com/juliewang617/Cattit"
              page="/projects/cattit"
              desc="Social media app for cat lovers, built with React Native.
              Users can post on a forum and display images and information 
              about their cats on their profile.  
              User authentication and storage is handled with Firebase and
              Firestore. "/> 

              <Project 
              title="Connect4 & AI Player" 
              image="bg-connect4_thumbnail"
              caption="Python, Flask"
              page="/projects/connect4"
              link="https://github.com/juliewang617/Connect4-with-AI-Player"
              desc="Connect4 web game created with Flask and Python. Includes an 
              AI player that utilizes the minimax algorithm with alpha-beta 
              pruning to calculate moves."/> 

              <Project 
              title="Aliens TD" 
              image="bg-aliens_td_thumbnail"
              caption="C#, Unity"
              page="/projects/aliens-td"
              link="https://plainyoggie.itch.io/aliens-td"
              desc="Collaborated to create an alien tower defense game in C# and 
              Unity. Implemented enemy movement and tower functionality and 
              drew all assets."/> 


            </div>
          </div>
        </div>
      
        <Footer /> 
      </div>
  );
}
