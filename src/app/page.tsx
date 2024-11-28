"use client";

import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavBar";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col w-screen lg:h-screen bg-background bg-cover justify-center">
      <div className="justify-center h-full flex">
        <div className="w-4/5 md:w-2/3">
          <NavigationBar />
          <div className="grid lg:grid-flow-col sm:grid-flow-row justify-center lg:mt-28">
            {/* Image of me */}
            <div className="m-auto bg-background_me background-size-120 bg-cover w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full hover:animate-[wiggle_0.75s_ease-in-out]" />

            {/* Text */}
            <div className="md:ml-0 lg:ml-16 w-72 sm:w-96 mt-10 lg:mt-0 lg:mb-0 mb-20">
              <h1 className="font-rubik font-semibold text-3xl text-gray0 sm:text-left text-center">
                Julie Wang
              </h1>
              <p className="mt-5 text-white">
                Hi! My name is Julie, and I&apos;m currently studying computer
                science at Brown University. I&apos;m interested in software
                engineering and improving gender diversity in the technology
                field. On campus, I&apos;ve been a member of the Brown CS
                Diversity Committee, a project manager on Full Stack @ Brown,
                and a TA for intro CS and DS&A. In my free time, I love to draw,
                crochet, and go on walks. Feel free to reach out on any of my
                socials - I&apos;m always up to connect!{" "}
              </p>
              <div className="mt-5 space-x-8 flex justify-center align-center sm:justify-start">
                <button
                  className="h-10 w-10 bg-github_logo bg-contain"
                  onClick={() => window.open("https://github.com/juliewang617")}
                />
                <button
                  className="h-10 w-10 bg-linkedin_logo bg-cover"
                  onClick={() =>
                    window.open("https://www.linkedin.com/in/juliewang617")
                  }
                />
                <button
                  className="h-10 w-11 bg-email_logo bg-cover"
                  onClick={() => window.open("mailto:julie_wang2@brown.edu")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
