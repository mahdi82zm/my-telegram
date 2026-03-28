"use client";
import React, { useState } from "react";
import HomeIndex from "./pages/(Landing)/Home/HomeIndex";
import {
  icons,
  LucideAlignRight,
  LucideArrowBigLeft,
  LucideArrowBigRight,
  LucideBrain,
  LucideCheckSquare,
  LucideHome,
  LucideNewspaper,
  LucidePanelLeftOpen,
  LucideSend,
  LucideUser,
} from "lucide-react";
import Link from "next/link";
import BlogIndex from "./pages/(Landing)/Blog/BlogIndex";
import PortfolioIndex from "./pages/(Landing)/Portfolio/PortfolioIndex";
import About from "./pages/(Landing)/About/AboutIndex";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import ThemeButton from "./ui/themeButton";
import { useModal } from "@/store/useModal";
import { Input } from "./ui/input";
import RegisterIndex from "./(Auth)/register/RegisterIndex";
import { SignUpForm } from "./sign-up-form";
import headerModal from "./headerModal";
import HeaderModal from "./headerModal";

interface Items {
  id: number;
  name: string;
  icon: React.ReactNode;
  comp: React.ReactNode;
  ref: string;
}

export default function HeaderSite() {
  const [open, setIsOpen] = useState(false);

  const { OpenModal } = useModal();

  const router = useRouter();

  const items: Items[] = [
    {
      id: 1,
      name: "Home",
      icon: <LucideHome />,
      comp: <HomeIndex />,
      ref: "/home",
    },
    {
      id: 2,
      name: "Blog",
      icon: <LucideNewspaper />,
      comp: <BlogIndex />,
      ref: "/blog",
    },
    {
      id: 3,
      name: "portfolio",
      icon: <LucideCheckSquare />,
      comp: <PortfolioIndex />,
      ref: "/portfolio",
    },
    {
      id: 4,
      name: "about us ",
      icon: <LucideBrain />,
      comp: <About />,
      ref: "/about",
    },
  ];

  return (
    <div className="relative ">
      <div
        className={cn(
          "fixed top-0 z-50 grid justify-center px-10 w-full grid-cols-12 gap-5 my-5 ",
        )}
      >
        <nav
          className={cn(
            "hidden laptop:flex gap-4 w-full bg-white/4 z-1000 backdrop-blur-2xl   shadow px-8 py-4 rounded-2xl col-span-8 items-center justify-between",
          )}
        >
          {items.map((item) => (
            <Link
              key={item.id}
              href={item.ref}
              className="flex gap-4 items-center justify-center hover:text-chart-4 transition-all duration-200 hover:border-b-2 hover:translate-y-1 w-full h-full"
            >
              <span>{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </nav>

        {open ? (
          <div className="z-2000 fixed -translate-5 h-screen w-screen bg-white/3 backdrop-blur-3xl">
            <nav
              className={cn(
                "fixed translate-3  z-3000 rounded-2xl px-4 py-2 w-2/3   gap-1 items-center justify-center bg-primary-foreground backdrop-blur-3xl h-[90vh]",
              )}
            >
              <LucidePanelLeftOpen
                className="my-6"
                onClick={() => setIsOpen(false)}
              />
              <div className="flex flex-col gap-4 items-start justify-center ">
                {items.map((item) => (
                  <Link
                    key={item.id}
                    href={item.ref}
                    className="flex gap-4   hover:text-chart-4 transition-all duration-200 hover:border-b-2 hover:translate-y-1 w-full h-full"
                  >
                    <span>{item.icon}</span>
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        ) : (
          ""
        )}

        <div className="flex bg-white/4 z-1000 backdrop-blur-2xl justify-end gap-5 rounded-2xl col-span-12 laptop:col-span-4  shadow px-8 py-4">
          <Button onClick={() => router.push("/")}>
            ChatMega <LucideSend className="bg-accent-foreground" />{" "}
          </Button>
          <Button onClick={() => OpenModal(<HeaderModal />)}>
            <LucideUser className="size-5" />
          </Button>
          <ThemeButton />

          <Button
            onClick={() => setIsOpen((prev) => !prev)}
            className={cn("laptop:hidden")}
          >
            <LucideAlignRight className="size-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
