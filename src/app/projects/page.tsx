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
            <div className="justify-center" >

             <Project 
              title="Carpool Organizer" 
              images={[["/carpool/1.png", 'InDesign wireframe of the application, with some notes on design.']]}
              caption="August 2024 | React, Node.js, Express, SQLite, Bootstrap, Git, InDesign"
              link=""
              desc="In-progress full-stack carpool organizer for my 
              local robotics team with over 100 members. Implemented REST API 
              with SQLite and Express to retrieve and store data. Designed 
              mock-ups with InDesign. Currently under mentorship of industry 
              expert Rob Raisch. 
              "/> 
              
              <Project 
              title="Ez-Ed" 
              images={[["/ez-ed/1.png", "homepage"], 
                ["/ez-ed/2.png", "learn more page"], 
                ["/ez-ed/3.png", "AI identifier"], 
                ["/ez-ed/4.png", "What you can do page"]]}
              caption="July 2024 | Teachable Machine, Tensorflow, React, HTML/CSS, Figma"
              link="https://github.com/juliewang617/ez-ed"
              desc="Responsive website to educate about global health disparities
              regarding atopic dermatitis (eczema). Implemented a machine
              learning model using Teachable Machine and Tensorflow to identify images of 
              eczema for users lacking access to care. Created as submission 
              for Kode with Klossy x Deloitte's Health Equity Challenge."/> 
              
              <Project 
              title="Cattit" 
              images={[["/cattit/1.png", "Splash screen"], ["/cattit/2.png", 
                "Home page"], ["/cattit/3.png", "Individual Post"], 
                ["/cattit/4.png", "User profile"], ["/cattit/5.png", 
                  "Viewing another user's profile"], ["/cattit/6.png", 
                    "Daily cat fact (using Cat Facts API)"]]}
              caption="June 2024 | React Native, Firebase, Firestore, Figma"
              link="https://github.com/juliewang617/Cattit"
              desc="Social media app for cat lovers, built with React Native.
              Users can post on a forum and display images and information 
              about their cats on their profile.  
              User authentication and storage is handled with Firebase and
              Firestore. "/> 

              <Project 
              title="Connect4 AI" 
              images={[["/connect4/thumbnail.png", "Screenshot of the Connect4 game"]]}
              caption="June 2024 | Python, Flask"
              link="https://github.com/juliewang617/Connect4-with-AI-Player"
              desc="Connect4 web game created with Flask and Python. Includes an 
              AI player that utilizes the minimax algorithm with alpha-beta 
              pruning to calculate moves."/> 

              <Project
              title="This website!"
              images={[]}
              caption="Mar 2024 | Next.js, React, TypeScript, Tailwind CSS, Figma"
              link="https://github.com/juliewang617/personal-website"
              desc="Created responsive
              website and became familiar with Next.js, TypeScript, and 
              Vercel deployment."
               />


              <Project 
              title="Aliens TD" 
              images={[["/aliens-td/1.png", "Start screen"], 
                ["/aliens-td/2.png", "Background for the game"],
                ["/aliens-td/3.png", "Gameplay"], 
                ["/aliens-td/4.png", "Gameplay"], 
                ["/aliens-td/5.png", "Gameplay"], 
                ["/aliens-td/6.png", "Win screen"], ]}
              caption="Feb 2024 | C#, Unity"
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
