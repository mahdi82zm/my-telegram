import { LucidePencil, LucidePencilLine, LucideUserCog } from "lucide-react";
import React from "react";
import Image from "next/image";

export default function ProfileIndex() {
  return (
    <div className=" grid grid-cols-12 gap-4 mt-4 mr-2">
      <div className="flex items-start col-span-4 gap-5  border   rounded  px-10 py-5  ">
        <div>
          <Image
            src=""
            className="bg-zinc-400 size-40 rounded-full"
            alt="user-setting"
          >
          </Image>
          <LucidePencilLine className="size-10 absolute -translate-y-10 translate-x-24 rounded-full bg-accent p-1" />
        </div>
        <div>
          <h3 className="text-2xl">UserName</h3>
          <p>Phone number</p>
          <p>Id name </p>
        </div>
      </div>

      <div className="col-span-8 border rounded  size-full p-4">
        <h4>Bio :</h4>
        <p>
          
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
          unde libero quia quo sequi voluptates quas aliquid labore officia
          mollitia nisi dolor quidem repellendus, velit debitis et illo ipsam
          nobis cupiditate! Eum quas amet nesciunt. Optio illo commodi ad odit
          rem sequi aliquam mollitia reiciendis, aspernatur quidem enim. Est,
          atque?
        </p>
      </div>

      <div className="col-span-6 border rounded  size-full h-30"></div>

      <div className="col-span-6 border rounded  size-full"></div>

      <div className="col-span-12 border rounded   h-50"></div>
    </div>
  );
}
