"use  client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LucideArrowBigLeft, LucideArrowBigRight } from "lucide-react";
import Image from "next/image";

const content = [
  {
    id: 1,
    image: (
      <Image
        alt="blogImage"
        className="rounded-2xl"
        fill
        src="/images/blog/pic1.png"
      />
    ),
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus exercitationem ut, voluptatum asperiores doloremque quia dolorem architecto quasi quis expedita dolore dignissimos iste culpa animi magnam, id reiciendis consectetur nihil inventore. Est repudiandae natus accusantium pariatur. Vero repellat magnam, consequatur officiis, quo modi voluptates cupiditate quasi mollitia, quidem maxime officia. ",
  },
  {
    id: 2,
    image: (
      <Image
        alt="blogImage"
        className="rounded-2xl"
        fill
        src="/images/blog/pic2.png"
      />
    ),
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus exercitationem ut, voluptatum asperiores doloremque quia dolorem architecto quasi quis expedita dolore dignissimos iste culpa animi magnam, id reiciendis consectetur nihil inventore. Est repudiandae natus accusantium pariatur. Vero repellat magnam, consequatur officiis, quo modi voluptates cupiditate quasi mollitia, quidem maxime officia. ",
  },
  {
    id: 3,
    image: (
      <Image
        alt="blogImage"
        className="rounded-2xl"
        fill
        src="/images/blog/pic3.png"
      />
    ),
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus exercitationem ut, voluptatum asperiores doloremque quia dolorem architecto quasi quis expedita dolore dignissimos iste culpa animi magnam, id reiciendis consectetur nihil inventore. Est repudiandae natus accusantium pariatur. Vero repellat magnam, consequatur officiis, quo modi voluptates cupiditate quasi mollitia, quidem maxime officia. ",
  },
];

export default function BlogIndex() {
  return (
    <div className=" relative flex flex-col  items-center justify-center ">
      {content.map((item) => (
        <div
          key={item.id}
          className="container p-5 transition-all hover:bg-accent  border border-border rounded-2xl mx-4 mt-12 grid  grid-cols-6 gap-4 items-center"
        >
          <div className="col-span-2  aspect-square relative ">
            {item.image}
          </div>
          <div className="col-span-4 flex flex-col  gap-5 items-end  justify-between h-full ">
            <p className="  font-light line-clamp-3 ">{item.description}</p>
            <Button className={cn('transition-all duration-300 ease-in bg-blue-600 text-white hover:text-primary-foreground  ')}>Read more <LucideArrowBigRight/> </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
