import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavBar"

export default function Page(){
  return (
      <div className="flex flex-col w-screen h-screen justify-center bg-gradient-radial from-blue0 to-offwhite">

        <div className="justify-center h-full flex bg-background bg-cover">

          <div className="w-4/5 md:w-2/3">
          <NavigationBar />
            <div className="justify-center"> 
                Here are some things I do in my free time! 

            </div>
          </div>
        </div>
      
        <Footer /> 
      </div>
  );
}
