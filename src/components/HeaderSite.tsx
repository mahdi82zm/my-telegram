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
import { useModal } from "@/store/useModal";
import { Input } from "./ui/input";

export default function HeaderSite() {
  const { OpenModal } = useModal();

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
          "fixed top-0 z-50 grid justify-center px-10 w-full grid-cols-12 gap-5 my-5 ",
        )}
      >
        <nav
          className={cn(
            "flex gap-4 w-full bg-white/4 z-1000 backdrop-blur-2xl  shadow px-8 py-4 rounded-2xl col-span-8 items-center justify-between",
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

        <div className="flex bg-white/4 z-1000 backdrop-blur-2xl justify-end gap-5 rounded-2xl col-span-4  shadow px-8 py-4">
          <Button onClick={() => router.push("/")}>
            ChatMega <LucideSend className="bg-accent-foreground" />{" "}
          </Button>
          <Button
            onClick={() =>
              OpenModal(
                <div>
                  <form
                    className="flex flex-col gap-10 text-primary      items-center justify-center"
                    action=""
                  >
                    <h3 className="text-2xl px-8 py-6 rounded-xl bg-primary-foreground w-full flex items-center justify-center">
                      Login
                    </h3>
                    <div
                      className={cn(
                        "flex w-full flex-col items-center justify-center gap-10 px-8 py-4",
                      )}
                    >
                      <div className="flex w-full justify-between gap-10 items-center">
                        <label htmlFor="">Username</label>
                        <Input className="bg-accent w-1/2 " type="text" />
                      </div>
                      <div className="flex w-full justify-between gap-10 items-center">
                        <label htmlFor="">Password</label>
                        <Input className="bg-accent w-1/2 " type="password" />
                      </div>
                      <Button className="w-full">Login</Button>
                    </div>
                  </form>
                </div>,
              )
            }
          >
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
