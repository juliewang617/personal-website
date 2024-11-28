"use client";

import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavBar";
import ImageModal from "@/components/ImageModal";

export default function Page() {
  const crochetImages: Array<[string, string]> = [
    ["/crochet/1.jpg", ""],
    ["/crochet/2.jpg", ""],
    ["/crochet/3.jpg", ""],
    ["/crochet/4.jpg", ""],
  ];

  const artworkImages: Array<[string, string]> = [
    ["/artwork/1.jpg", ""],
    ["/artwork/2.jpg", ""],
    ["/artwork/3.jpg", ""],
    ["/artwork/4.png", ""],
    ["/artwork/5.png", ""],
  ];

  const sceneryImages: Array<[string, string]> = [
    ["/scenery/1.png", "Cape Cod, Massachusetts"],
    ["/scenery/2.jpg", "Miami, Florida"],
    ["/scenery/3.jpg", "Brown University, Providence, Rhode Island"],
    ["/scenery/4.jpg", "Malmo, Sweden"],
    ["/scenery/5.jpg", "Helsingborg, Sweden"],
  ];

  return (
    <div className="flex flex-col w-screen h-full justify-center bg-background bg-cover">
      <div className="justify-center h-full flex">
        <div className="w-4/5 md:w-2/3">
          <NavigationBar />
          <div className="justify-center text-center text-gray1 mb-5">
            In my free time, I love to crochet, paint, draw, go on walks, train
            at the gym, and more! Here is a collection of photos if you would
            like to learn more about me.
          </div>
          <div>
            <div className="w-full h-full flex flex-col p-5 bg-white bg-opacity-10 rounded-xl mb-5">
              <div className="margin-auto flex flex-col text-center justify-center mb-5">
                <b className="text-white mb-2">Crochet</b>
                <p className="text-gray0">
                  I picked up crochet during finals season of my first semester.
                  I love crocheting amigurumi (plushies), and clothing
                  accessories like bags or scarves!
                </p>
              </div>
              <div className="flex flex-row overflow-scroll">
                {crochetImages.map((image, i) => {
                  return <ImageModal key={i} image={image} />;
                })}
              </div>
            </div>

            <div className="w-full h-full flex flex-col p-5 bg-white bg-opacity-10 rounded-xl mb-5">
              <div className="margin-auto flex flex-col text-center justify-center mb-5">
                <b className="text-white mb-2">Artwork</b>
                <p className="text-gray0">
                  I&apos;ve been drawing and painting since I was five. I&apos;m
                  experienced with many mediums, from watercolor to acrylic to
                  pencil to digital art. I especially love working with color!
                  As you can tell, I really love to portray cats.
                </p>
              </div>
              <div className="flex flex-row overflow-scroll">
                {artworkImages.map((image, i) => {
                  return <ImageModal key={i} image={image} />;
                })}
              </div>
            </div>

            <div className="w-full h-full flex flex-col p-5 bg-white bg-opacity-10 px-5 rounded-xl mb-24">
              <div className="margin-auto flex flex-col text-center justify-center mb-5">
                <b className="text-white mb-2">Travels</b>
                <p className="text-gray0">
                  Here is a collection of pretty pictures I&apos;ve taken
                  outside.
                </p>
              </div>
              <div className="flex flex-row overflow-scroll">
                {sceneryImages.map((image, i) => {
                  return <ImageModal key={i} image={image} />;
                })}
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
