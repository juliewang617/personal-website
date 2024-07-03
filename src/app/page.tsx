'use client'

import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavBar"

export default function Page(){
  return (
      <div className="flex flex-col w-screen lg:h-screen justify-center bg-gradient-radial from-blue0 to-offwhite">

        <div className="justify-center h-full flex bg-background bg-contain">

          <div className="w-4/5 md:w-2/3">
          <NavigationBar />
            <div className="grid lg:grid-flow-col sm:grid-flow-row justify-center lg:mt-28">

              {/* Image of me */}
              <div className="-rotate-2 bg-background_me bg-cover w-96 h-96 rounded-xl shadow-solid hover:animate-[wiggle_0.75s_ease-in-out]" />

              {/* Text */}
              <div className="md:ml-0 lg:ml-28 w-96 mt-10 lg:mt-0 lg:mb-0 mb-20">
                <h1 className="font-rubik font-semibold text-3xl text-blue3">Julie Wang</h1>
                <p className="mt-5 text-blue2">Hi! My name is Julie, and I’m currently majoring in 
                  computer science at Brown University. I’m a member of the Brown CS Diversity Committee, a 
                  project manager on Full Stack @ Brown, and a TA for an intro CS class (CSCI0170). In 
                  my free time, I love to draw, crochet, and go on walks. I’m also a bit of a 
                  crazy cat lady. Feel free to reach out on any of my socials - I’m always up to connect! </p>
                <div className="space-x-8 flex">
                  <button className="mt-5 h-10 w-10 bg-github_logo bg-contain"
                  onClick={() => window.open('https://github.com/juliewang617')}/>
                  <button className="mt-5 h-10 w-10 bg-linkedin_logo bg-cover"
                  onClick={() => window.open('https://www.linkedin.com/in/juliewang617')}/>
                  <button className="mt-5 h-10 w-10 bg-email_logo bg-cover"
                  onClick={() => window.open('mailto:juliewang617@gmail.com')}/>
                </div>
              </div>

            </div>
          </div>
        </div>
      
        <Footer /> 
      </div>
  );
}
