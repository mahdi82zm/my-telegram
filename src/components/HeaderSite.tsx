"use client";
import React from "react";
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

export default function HeaderSite() {
  const router = useRouter();

  const items = [
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
          "sticky top-0 z-50 grid justify-center w-full grid-cols-12 gap-5 my-5 bg-transparent backdrop-blur-sm",
        )}
      >
        <nav
          className={cn(
            "flex gap-4 w-full bg-accent shadow px-8 py-4 rounded-2xl col-span-8 items-center justify-between",
          )}
        >
          {items.map((item) => (
            <Link
              key={item.id}
              href={item.ref}
              className="flex gap-4 items-center justify-center hover:text-chart-1 transition-all duration-200 hover:border-b-2 hover:translate-y-1 w-full h-full"
            >
              <span>{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex justify-end gap-5 rounded-2xl col-span-4 bg-accent shadow px-8 py-4">
          <Button onClick={() => router.push("/")}>
            ChatMega <LucideSend className="bg-accent-foreground" />{" "}
          </Button>
          <Button>
            <LucideUser className="size-5" />
          </Button>
          <ThemeButton />
          <Button>
            <LucideAlignRight className="size-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
