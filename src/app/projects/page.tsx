import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavBar";
import Project from "@/components/Project";
import { useState } from "react";

export default function Page() {
  return (
    <div className="flex flex-col w-screen justify-center bg-background bg-cover">
      <div className="justify-center h-full flex">
        <div className="w-4/5 md:w-2/3">
          <NavigationBar />
          <div className="justify-center">
            <Project
              title="Email to Calendar REST API"
              images={[]}
              caption="October 2024 | Node.js, Express, JavaScript"
              link="https://github.com/juliewang617/gmail-to-calendar"
              desc="Engineered a RESTful API that scans recent emails and 
              intelligently parses events from their content using the Gemini LLM, 
              then seamlessly adds them to the user's Google Calendar, eliminating 
              the need for manual input. Optimized API efficiency with a caching mechanism to minimize API 
              calls to Google Calendar and Gmail."
            />

            <Project
              title="Carpool Organizer"
              images={[["/carpool/1.png", "Carpool organizer UI"]]}
              caption="August 2024 | React, Bootstrap, Git"
              link=""
              desc="Developed a user interface for a full-stack carpool organizer
              for my local robotics team with over 100 members under the mentorship 
              of industry expert Rob Raisch."
            />

            <Project
              title="Ez-Ed"
              images={[
                ["/ez-ed/1.png", "homepage"],
                ["/ez-ed/2.png", "learn more page"],
                ["/ez-ed/3.png", "AI identifier"],
                ["/ez-ed/4.png", "What you can do page"],
              ]}
              caption="July 2024 | Teachable Machine, Tensorflow, React, HTML/CSS, Figma"
              link="https://github.com/juliewang617/ez-ed"
              desc="Responsive website to educate about global health disparities
              regarding atopic dermatitis (eczema). Implemented a machine
              learning model using Teachable Machine and Tensorflow to identify images of 
              eczema for users lacking access to care. Selected as a finalist for
              Deloitte x Kode with Klossy's Health Equity Challenge."
            />

            <Project
              title="Cattit"
              images={[
                ["/cattit/1.png", "Splash screen"],
                ["/cattit/2.png", "Home page"],
                ["/cattit/3.png", "Individual Post"],
                ["/cattit/4.png", "User profile"],
                ["/cattit/5.png", "Viewing another user's profile"],
                ["/cattit/6.png", "Daily cat fact (using Cat Facts API)"],
              ]}
              caption="June 2024 | React Native, Firebase, Firestore, Figma"
              link="https://github.com/juliewang617/Cattit"
              desc="A social media app for cat lovers, built with React Native.
              Users can post on a forum and display images and information 
              about their cats on their profile.  
              User authentication and storage is handled with Firebase and
              Firestore. "
            />

            <Project
              title="Connect4 AI"
              images={[
                ["/connect4/thumbnail.png", "Screenshot of the Connect4 game"],
              ]}
              caption="June 2024 | Python, Flask"
              link="https://github.com/juliewang617/Connect4-with-AI-Player"
              desc="Connect4 web game created with Flask and Python. Includes an 
              AI player that utilizes the minimax algorithm with alpha-beta 
              pruning to calculate moves."
            />

            <Project
              title="Aliens TD"
              images={[
                ["/aliens-td/1.png", "Start screen"],
                ["/aliens-td/2.png", "Background for the game"],
                ["/aliens-td/3.png", "Gameplay"],
                ["/aliens-td/4.png", "Gameplay"],
                ["/aliens-td/5.png", "Gameplay"],
                ["/aliens-td/6.png", "Win screen"],
              ]}
              caption="Feb 2024 | C#, Unity"
              link="https://plainyoggie.itch.io/aliens-td"
              desc="Create an alien tower defense game in C# and 
              Unity. Implemented enemy movement and tower functionality and 
              illustrated all assets."
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
