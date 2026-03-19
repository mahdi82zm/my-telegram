"use client";

import {
  Divide,
  LucideLogOut,
  LucidePencil,
  LucidePencilLine,
  LucideUserCog,
} from "lucide-react";
import React from "react";
import Image from "next/image";
import { Modal } from "@/app/_components/ui/Modal";
import { useModal } from "@/store/useModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ProfileIndex() {
  const { OpenModal, isOpen, closeModal } = useModal();

  return (
    <div className="relative grid grid-cols-12 gap-4 mt-4 mr-2">
      <div className="relative flex items-start col-span-4 gap-5  border   rounded  px-10 py-5  ">
        <div
          className="relative w-full h-full 
        "
        >
          <Image
            src=""
            className="bg-zinc-700 size-40 rounded-2xl"
            alt="user-setting"
          ></Image>

          <Button
            onClick={() =>
              OpenModal(
                <div className="relative m-10 flex flex-col items-center justify-center">
                  <h3 className="font-bold  text-xl">Edite Info </h3>
                  <LucideLogOut
                    className="absolute left-1 top-1"
                    onClick={closeModal}
                  />
                  <form className="mx-4 my-8 flex  flex-col  gap-7" action="">
                    <div className="flex gap-10 mb-2  items-center justify-between">
                      <label htmlFor="name">New name :</label>
                      <Input className="w-1/2 px-5 py-2"></Input>
                    </div>
                    <div className="flex gap-10 mb-2  items-center justify-between">
                      <label htmlFor="name">Phone number :</label>
                      <Input className="w-1/2 px-5 py-2"></Input>
                    </div>
                    <div className="flex gap-10 mb-2  items-center justify-between">
                      <label htmlFor="name">Bio :</label>
                      <textarea className="w-1/2 min-h-14 bg-accent px-5 py-2  rounded-lg border border-zinc-400" />
                    </div>
                    <div className="flex gap-10 mb-2  items-center justify-between">
                      <label htmlFor="name">New password :</label>
                      <Input className="w-1/2 px-5 py-2"></Input>
                    </div>
                    <Button>Save changes</Button>
                  </form>
                </div>,
              )
            }
            className="absolute -translate-y-10 left-35 "
          >
            <LucidePencilLine />
            {isOpen ? <p>open</p> : ""}
          </Button>
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
