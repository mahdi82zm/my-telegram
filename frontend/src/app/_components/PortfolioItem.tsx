"use  client";

import Image from "next/image";
import React, { useState } from "react";

interface PortfolioItemProps {
  thumbnailSrc: string;
  hoverSrc: string;
  projectName: string;
  projectDescription: string;
  projectUrl: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  thumbnailSrc,
  hoverSrc,
  projectName,
  projectDescription,
  projectUrl,
}) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  return (
    <div
      className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* کارت اصلی */}
      <div className="relative w-full h-64 sm:h-72 md:h-80">
        {/* تصویر کوچک (Thumbnail) */}
        <Image
        fill
          src={thumbnailSrc}
          alt={`Thumbnail of ${projectName}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            isHovering ? "opacity-0" : "opacity-100"
          }`}
        />
        {/* تصویر هاور (Hover Image/GIF) */}
        <Image
        fill
          src={hoverSrc}
          alt={`Hover preview of ${projectName}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            isHovering ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* Overlay با متن */}
        <div
          className={`absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center transition-opacity duration-300 ${
            isHovering ? "opacity-50" : "opacity-0"
          }`}
        >
          <div className="text-center p-4">
            <h3 className="text-xl font-bold mb-2">{projectName}</h3>
            <p className="text-sm mb-4">{projectDescription}</p>
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-200"
            >
              مشاهده سایت
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
