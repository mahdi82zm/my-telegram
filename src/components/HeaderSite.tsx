"use client";
import React from "react";
import HomeIndex from "./pages/(Landing)/Home/HomeIndex";
import {
  icons,
  LucideArrowBigLeft,
  LucideArrowBigRight,
  LucideBrain,
  LucideCheckSquare,
  LucideHome,
  LucideNewspaper,
} from "lucide-react";
import Link from "next/link";
import BlogIndex from "./pages/(Landing)/Blog/BlogIndex";
import PortfolioIndex from "./pages/(Landing)/Portfolio/PortfolioIndex";
import About from "./pages/(Landing)/About/About";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

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
    <div className={cn("grid   grid-cols-12 gap-5   my-5   ")}>
      <nav
        className={cn(
          "flex gap-4 w-full bg-accent shadow px-8 py-4 rounded col-span-8 items-center justify-between ",
        )}
      >
        {items.map((item) => (
          <Link
            key={item.id}
            className={cn("flex gap-4 items-center justify-center")}
            href={item.ref}
          >
            <span>{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </nav>
      <div className={cn("flex col-span-4 bg-accent shadow px-8 py-4")}>
        <Button onClick={() => router.push  ("/")}>
          ChatMega <LucideArrowBigRight className="bg-accent-foreground" />{" "}
        </Button>
      </div>
    </div>
  );
}
