"use client";
import * as React from "react";
import ImageModal from "./ImageModal";
import Link from "next/link";

export default function Project({
  title,
  images,
  desc,
  caption,
  link,
}: {
  title: string;
  images: Array<[string, string]>;
  desc: string;
  caption: string;
  link: string;
}) {
  return (
    <div className="grid justify-start bg-white rounded-xl p-4 mb-10 h-auto bg-opacity-10">
      {/* Text */}
      <div className="w-96 w-full">
        <div className="flex flex-row items-center">
          <h1 className="font-rubik font-semibold text-3xl text-white hover:opacity-80">
            {title}
          </h1>
          {link != "" && (
            <Link
              href={link}
              rel="noopener noreferrer"
              target="_blank"
              className="bg-github_logo w-6 h-6 bg-cover ml-4"
            ></Link>
          )}
        </div>
        <div className="font-rubrik text-gray1 mt-4">{caption}</div>
        <p className="mt-4 text-gray0">{desc}</p>
      </div>

      {/* Image Array */}
      <div className="w-full h-auto rounded-xl flex overflow-scroll mt-5">
        {images.map((image, i) => {
          return <ImageModal key={i} image={image} />;
        })}
      </div>
    </div>
  );
}
