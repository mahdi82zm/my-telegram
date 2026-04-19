"use client";

import {
  Divide,
  LucideArrowBigRightDash,
  LucideCake,
  LucideLogOut,
  LucideMail,
  LucidePencil,
  LucidePencilLine,
  LucidePhone,
  LucideUserCog,
} from "lucide-react";
import React from "react";
import Image from "next/image";
import { Modal } from "@/app/_components/ui/Modal";
import { useModal } from "@/store/useModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface Book {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  printAuthor(): void;
  printTitle: (message: string) => string;
}

interface ChildBook extends Book 
{
  chldId : number
}

export default function ProfileIndex() {
  const { OpenModal, isOpen, closeModal } = useModal();

  const deepWork: ChildBook = {
    author: "fgklkg",
    isbn: 1,
    chldId: 1,
    printAuthor() {
      console.log("hello");
    },
    printTitle: (message) => `${message}`,
    title: "deep  work ",
    genre: "medical",
  };

  console.log(deepWork.printTitle("heelo"));

  return (
    <div className="relative grid grid-cols-12 gap-4 mt-4 mr-2">
      <div className="relative grid grid-cols-5   items-start col-span-4 gap-5 border  border-border    rounded  px-10 py-5  ">
        <span
          className={cn(
            "absolute z-10 bg-background mx-4  px-2 -top-4 font-semibold text-xl",
          )}
        >
          UserInfo
        </span>

        <div
          className="relative aspect-square flex flex-col   items-center h-full col-span-2
        "
        >
          <Image
            src="/images/profile_01.png"
            fill
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
        <div className="col-span-3">
          <span className="text-2xl ">UserName</span>
          <p>Phone number</p>
          <p>Id name </p>
        </div>
      </div>

      <div className=" relative col-span-8 border rounded  size-full p-4">
        <span
          className={cn(
            "absolute z-10 bg-background px-2 -top-4 font-semibold text-xl",
          )}
        >
          Bio
        </span>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
          unde libero quia quo sequi voluptates quas aliquid labore officia
          mollitia nisi dolor quidem repellendus, velit debitis et illo ipsam
          nobis cupiditate! Eum quas amet nesciunt. Optio illo commodi ad odit
          rem sequi aliquam mollitia reiciendis, aspernatur quidem enim. Est,
          atque?
        </p>
      </div>

      <div className="relative col-span-3 border rounded  size-full ">
        <span
          className={cn(
            "absolute z-10 bg-background px-2 mx-4 -top-4 font-semibold text-xl",
          )}
        >
          Your Info
        </span>
        <div className="flex  flex-col gap-2 mx-4 my-8 ">
          <div className={cn("flex  items-center justify-start gap-5")}>
            <LucidePhone className=" text-primary size-5 " />
            <span>+98 901 614 2943</span>
          </div>
          <div className={cn("flex  items-center justify-start gap-5")}>
            <LucideMail className=" text-primary size-5 " />
            <span>@Mahdi_zb20</span>
          </div>
          <div className={cn("flex  items-center justify-start gap-5")}>
            <LucideCake className=" text-primary size-5 " />
            <span>Oct 11,2003</span>
          </div>
        </div>
      </div>

      <div className="relative col-span-6 border rounded  size-full">
        <span
          className={cn(
            "absolute z-10 bg-background px-2 mx-4 -top-4 font-semibold text-xl",
          )}
        >
          Bio
        </span>
      </div>

      <div className="relative col-span-12 border rounded   h-50">
        {" "}
        <span
          className={cn(
            "absolute z-10 mx-4 bg-background px-2 -top-4 font-semibold text-xl",
          )}
        >
          Bio
        </span>
      </div>
    </div>
  );
}
