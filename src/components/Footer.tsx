import { cn } from "@/lib/utils";
import {
  LucideContact,
  LucideFacebook,
  LucideInstagram,
  LucideTwitter,
  LucideVault,
  LucideYoutube,
} from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

export default function Footer() {
  const items = [{ id: 1, name: "مجوز ها " }];

  return (
    <div className={cn("w-full h-full flex flex-col  gap-3")}>
      <div
        className={cn(
          "w-full h-full border border-sidebar-border bg-accent rounded-xl  text-primary shadow-lg",
        )}
      >
        <div
          className={cn(
            "grid grid-cols-12  items-start  justify-start gap-3  py-6",
          )}
        >
          <div className={cn("col-span-4  flex flex-col py-2 px-4 h-full ")}>
            <div className="flex  border-b-2">
              <p className="text-2xl ">Validators</p>
              <LucideVault />
            </div>
          </div>

          <div
            className={cn(
              "col-span-4 flex flex-col  gap-4   py-2 px-4 h-full   border-x-2",
            )}
          >
            <div className="flex   border-b-2">
              <p className="text-2xl "> Contact us</p>
              <LucideContact />
            </div>
            <div className="flex flex-col gap-5">
              <Button className="bg-primary size-10">
                <LucideInstagram className="size-8" />
              </Button>
              <Button className="bg-primary size-10">
                <LucideFacebook className="size-8" />
              </Button>
              <Button className="bg-primary size-10">
                <LucideTwitter className="size-8" />
              </Button>
              <Button className="bg-primary size-10">
                <LucideYoutube className="size-8" />
              </Button>
            </div>
          </div>

          <div className={cn("col-span-4 flex flex-col  py-2 px-4  ")}>
            <div className="flex  border-b-2">
              <p className={cn("text-2xl ")}>About us</p>
              <LucideContact />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro,
              molestiae voluptatem! Eligendi provident veritatis, animi cumque
              impedit magnam dolore molestias sed dolorum harum a, culpa ea,
              deleniti perspiciatis laboriosam distinctio odit? Labore nisi
              veniam, incidunt ab laborum dignissimos aliquid similique.
            </p>
          </div>
        </div>
      </div>

      <div>
        <p dir="rtl" className={cn("flex items-center justify-center ")}>
          کلیه حقوق این سایت متعلق به سایت telchatmega میباشد .
        </p>
      </div>
    </div>
  );
}
