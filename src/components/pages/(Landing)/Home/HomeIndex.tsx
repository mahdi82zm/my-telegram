"use client";
import Image from "next/image";
import imageHero from "/hakhamanesh.png";
import { cn } from "@/lib/utils";
import {
  LucideAmpersand,
  LucideAppWindow,
  LucideAppWindowMac,
  LucideArrowDownNarrowWide,
  LucideBowArrow,
  LucideHelpingHand,
  LucideImage,
  LucideLoader2,
  LucideLock,
  LucidePhone,
  LucideRussianRuble,
  Rocket,
  ShieldCheck,
  Users,
  Voicemail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { sendData } from "@/lib/action";
import { useFormStatus } from "react-dom";
import { useState, useTransition } from "react";
import PortfolioItem from "@/app/_components/PortfolioItem";


interface Comment {
  id: number,
  name: string,
  avatar: string , 
  role: string,
  rating: number,
  comment:string , 
  date: string,
}

export default function HomeIndex() {
  const [isPending, startTransition] = useTransition();

  const [hover, setIsHover] = useState<boolean>(false);

  const services : {id:number ,  name: string  ,  icon:React.ReactNode }[] = [
    {
      id: 1,
      name: "امنیت",
      icon: <ShieldCheck className="size-15 text-zinc-500" />,
    },
    {
      id: 2,
      name: "سرعت ",
      icon: <Rocket className="size-15 text-zinc-500" />,
    },
    {
      id: 3,
      name: "CAlls",
      icon: <Voicemail className="size-15 text-zinc-500" />,
    },
    {
      id: 4,
      name: "Group and  channles",
      icon: <Users className="size-15 text-zinc-500" />,
  
      
    },
  ];

  const portfolioItems :{id :number ,  thumbnailSrc : string , hoverSrc:string , projectName: string , projectDescription :string , projectUrl: string  } [] = [
    {
      id: 1,
      thumbnailSrc: "/images/Screenshot.png",
      hoverSrc: "/images/baner1.png",
      projectName: "پروژه وب اپلیکیشن",
      projectDescription: "یک اپلیکیشن مدیریت وظایف پیشرفته.",
      projectUrl: "#", // URL واقعی سایت را اینجا قرار دهید
    },
    {
      id: 2,
      thumbnailSrc: "/images/Screenshot2.png",
      hoverSrc: "/images/baner1.png",
      projectName: "وب‌سایت شرکتی",
      projectDescription: "طراحی وب‌سایت ریسپانسیو برای شرکت X.",
      projectUrl: "#",
    },
    {
      id: 3,
      thumbnailSrc: "/images/Screenshot.png",
      hoverSrc: "/images/baner1.png",
      projectName: "پروژه وب اپلیکیشن",
      projectDescription: "یک اپلیکیشن مدیریت وظایف پیشرفته.",
      projectUrl: "#", // URL واقعی سایت را اینجا قرار دهید
    },
    // آیتم‌های بیشتر...
  ];

  const comments:Comment []   = [
    {
      id: 1,
      name: "مهدی رضایی",
      avatar: "/avatars/user1.jpg",
      role: "کاربر فعال",
      rating: 5,
      comment:
        "واقعاً از ظاهر و سرعت این اپ خوشم اومد، مخصوصاً چت زنده‌اش فوق‌العاده‌ست. UI تمیز و حرفه‌ای 👌",
      date: "1402/12/10",
    },
    {
      id: 2,
      name: "نازنین احمدی",
      avatar: "/avatars/user2.jpg",
      role: "طراح رابط کاربری",
      rating: 4,
      comment:
        "به‌نظرم اگر یه حالت تاریک کامل‌تر (dark mode) اضافه بشه عالی میشه. با این حال خیلی تجربه خوبی بود.",
      date: "1402/12/12",
    },
    {
      id: 3,
      name: "محمد شریفی",
      avatar: "/avatars/user3.jpg",
      role: "توسعه‌دهنده جاوااسکریپت",
      rating: 5,
      comment:
        "از لحاظ فنی خیلی تمیز نوشته شده، حتی روی موبایل هم بدون باگ کار می‌کنه. پیشنهاد می‌کنم استفاده کنید 👏",
      date: "1402/12/15",
    },
    {
      id: 4,
      name: "ریحانه کمالی",
      avatar: "/avatars/user4.jpg",
      role: "کاربر جدید",
      rating: 4,
      comment:
        "همه چیز عالیه فقط کاش قسمت تنظیمات شخصی‌سازی بیشتر داشت، دوست دارم رنگ چت‌ها رو خودم انتخاب کنم.",
      date: "1402/12/18",
    },
  ];

  const time = () => {
    setTimeout(() => {
      console.log("dfkjgjdlk");
    }, 7000);
  };

  const handleSubmit = () => {
    // if (confirm("are  sure  for submitting? ")) startTransition(() => time());
  };

  const hamdleHover = () => {
    setIsHover(true);
  };

  return (
    <div className="relative w-full flex  flex-col h-full">
      <div className={cn("relative  w-full h-full grid grid-cols-12 ")}>
        <div className="relative col-span-4">
          {" "}
          <div className="z-10 absolute aspect-square rounded-xl rotate-45 flex  items-center justify-center -translate-x-1/2 -translate-y-15 h-150 bg-yellowPrimary "></div>{" "}
          <div className="z-10 absolute   overflow-hidden flex  transition-transform ease-in-out duration-300   hover:rotate-12    h-100 translate-y-10 -translate-x-1/4    mx-auto  aspect-square items-center justify-center   ">
            <Image
              alt="Herosection"
              fill
              className="object-cover rounded-full "
              src={"/images/baner2.png"}
            ></Image>

            {/* <Image
           alt="Herosection"
            fill
             className="object-cover rounded-2xl "
           src={"/hakhamanesh.png"}
           ></Image>
           <p className="text-accent text-4xl font-bold  z-5 ">
            TelChatMega یک اپ مطمئن برای ارتباط با دوستان خود{" "}
            </p> */}
          </div>{" "}
        </div>
        <div
          dir="rtl"
          className="relative col-span-8 flex flex-col gap-9 items-center justify-end mx-auto w-full h-96  "
        >
          <h3 dir="rtl" className="   text-5xl font-bold  ">
            {" "}
            TelChatMega یک اپ مطمئن برای ارتباط با دوستان خود{" "}
          </h3>
          <p className="text-2xl ">
            با دانلود و نصب TelChatMega، به دنیایی از امکانات جدید قدم بگذارید.
            تجربه کاربری بی‌نظیر و قابلیت‌های منحصربه‌فرد منتظر شماست.
          </p>
          <div className="flex  justify-between gap-9">
            <Button>
              نسخه ویندوز
              <LucideAppWindow />
            </Button>
            <Button>
              نسخه Android
              <LucideArrowDownNarrowWide />
            </Button>
          </div>
        </div>
        {/* hero section  */}
      </div>
      {/* خدمات  */}
      <div className="relative  w-full h-full">
        <div className="relative   h-25 "></div>

        {/* carts services */}
        <div
          className={cn(
            "z-1000   transition-all ease-linear duration-700  py-10 px-8 rounded-2xl gap-10 grid grid-cols-12 justify-between ",
          )}
        >
          <div
            className={cn(
              "col-span-6 relative h-full flex text-4xl   items-center justify-center  w-full ",
            )}
          >
            <div className="absolute h-full rotate-45 rounded-2xl aspect-square  bg-accent"></div>
            <h2 className="sticky">Services </h2>
          </div>
          <div className=" col-span-6 grid  grid-cols-8 items-center justify-end gap-12">
            {services.map((item) => (
              <div key={item.id} className="relative col-span-4">
                <div className="absolute inset-0 animate-pulse top-10 delay-1000 duration-300 transition-transform ease-in-out  aspect-square h-20 bg-amber-400"></div>
                <div className="absolute animate-pulse  aspect-square right-0 top-20 h-20 bg-blue-600"></div>
                <div
                  key={item.id}
                  className={cn(
                    "h-40 border sticky bg-white/5  transition-all duration-300 backdrop-blur-2xl ease-in hover:text-yellowPrimary hover:text-2xl  border-border rounded shadow-lg  flex flex-col items-center justify-center  ",
                  )}
                >
                  <span className="">{item.icon}</span>
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* فرم تماس */}

      <div
        className={cn(
          "grid grid-cols-5 py-20 px-10 rounded-2xl  items-center gap-20 w-full  bg-accent my-50",
        )}
      >
        <div className={cn("col-span-2 px-4 flex flex-col gap-3")}>
          <p className=" text-accent-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            ducimus fugiat eaque corporis odio? Qui aliquid autem consequatur
            architecto iusto corrupti, voluptatibus, totam possimus eveniet
            expedita, voluptas ratione soluta unde ipsum explicabo provident
            accusamus dolor. Sunt commodi qui, ea voluptatem saepe quos. Facere
            minima distinctio ea quos sit iure totam? Dolor praesentium enim
            consequuntur similique ex maxime quia labore suscipit, quibusdam
            itaque, odit, a deleniti.
          </p>
        </div>

        <div
          className="col-span-2 w-full flex items-end  justify-end
        "
        >
          {isPending ? (
            <LucideLoader2 />
          ) : (
            <div className={cn("relative w-full h-full ")}>
              <div
                className={cn(
                  "absolute rounded translate-8 aspect-square h-30 bg-yellow-500",
                  `${hover ? "animate-bounce " : ""}`,
                )}
              ></div>
              <div
                className={cn(
                  "absolute rounded-full  right-0 top-50  aspect-square h-30 bg-blue-600 ",
                  `${hover ? "animate-bounce " : ""}`,
                )}
              ></div>
              <form
                onMouseLeave={() => setIsHover(false)}
                onMouseEnter={hamdleHover}
                action={sendData}
                onClick={handleSubmit}
                className={cn(
                  `col-span-1 flex flex-col h-full border border-border w-full p-4 py-10 rounded-xl bg-white/10 backdrop-blur-2xl  gap-3   `,
                  ``,
                )}
              >
                <label>
                  name
                  <Input type="text" name="name" />
                </label>
                <label>
                  username
                  <Input type="text" name="username" />
                </label>
                <label>
                  descriptions
                  <textarea  className="flex items-center justify-center w-full rounded-xl border-2 px-2 py-4 border-border  backdrop-blur-2xl shadow-2xl" placeholder="write  your description...." name="descriptions" />
                </label>
                <Button2></Button2>
              </form>
            </div>
          )}
        </div>

        {/* contact us */}

        <div
          className={cn(
            " col-span-1  relative  aspect-square  flex text-4xl right-0   items-center justify-center   ",
          )}
        >
          <div className="absolute h-full rotate-45 rounded-2xl aspect-square  bg-accent"></div>
          <h2 className="sticky">Contact Us </h2>
        </div>
      </div>
      {/* نمونه کارها */}
      {/* <div>
        <p className=" border-b-2    border-dashed flex relative items-center justify-center my-10 ">
          <span
            dir="rtl"
            className="absolute flex items-center justify-center text-4xl text-zinc-500 font-semibold bg-background mt-3"
          >
            Show cases
          </span>
        </p>
      </div> */}

      {/* Divider */}
      <div className="grid  grid-cols-5 w-full  items-center justify-center my-10">
        <hr className="my-5 col-span-2 w-full" />
        <span className=" col-span-1 flex  items-center justify-center text-5xl text-accent">
          Porfolio
        </span>
        <hr className="my-5 col-span-2 w-full" />
      </div>
      <div className={cn("grid  grid-cols-6 gap-3 ")}>
        {portfolioItems.map((item) => (
          <div
            key={item.id}
            className={cn(
              "col-span-2  border-2 border-border shadow shadow-accent   rounded-2xl  ",
            )}
          >
            <PortfolioItem
              thumbnailSrc={item.thumbnailSrc}
              hoverSrc={item.hoverSrc}
              projectName={item.projectName}
              projectDescription={item.projectDescription}
              projectUrl={item.projectUrl}
            />
          </div>
        ))}
      </div>

      {/* نمایش  app  */}
      {/* <div className="monitor-screen ">
        <div className="border-8 border-chart-3 rounded-3xl  w-2/3">
          <iframe
            src="/"
            className={cn("w-full h-90 rounded-2xl")}
            frameBorder="0"
          ></iframe>
        </div>
      </div> */}
      {/* نظرات   وجامعه کاربران  */}
      {/* <div>
        <p className=" border-b-2    border-dashed flex relative items-center justify-center my-10 ">
          <span
            dir="rtl"
            className="absolute flex items-center justify-center text-4xl text-zinc-500 font-semibold bg-background mt-3"
          >
            Testimotionals
          </span>
        </p>
      </div> */}

      <div className="grid  grid-cols-5 w-full  items-center justify-center my-10">
        <hr className="my-5 col-span-2 w-full" />
        <span className=" col-span-1 flex  items-center justify-center text-5xl text-accent">
          Testimotionals
        </span>
        <hr className="my-5 col-span-2 w-full" />
      </div>

      {/* کارت های نظرات   */}
      <div className={cn("grid  grid-cols-4 grid-rows-1 gap-5   ")}>
        {comments.map((text) => (
          <div
            className={cn(
              "relative col-span-1  rounded-xl h-full row-auto flex flex-col items-center justify-center",
            )}
            key={text.id}
          >
            <div className={cn('absolute right-2 aspect-square h-40 bg-chart-4')}></div>
            <div className={cn('absolute left-2 aspect-square h-40 bg-chart-5')}></div>
            <div className={cn("flex flex-col items-center justify-center bg-white/3 rounded-xl backdrop-blur-3xl ")}>
              <LucideImage className={cn("size-31 py-5")} />
              {/* <Image
              alt={text.role}
              className={cn("rounded-full ")}
              width={10}
              height={10}
              src={text.avatar}
            /> */}
              <div dir="rtl" className={cn("px-8 py-4 ")}>
                <p className="text-2xl font-semibold"> {text.name}</p>
                <p className="text-accent-foreground">{text.comment}</p>
              </div>
              <div className="flex gap-3">
                <div className="bg-primary-foreground  flex px-4  items-center justify-center py-2 mx-auto my-4 rounded-2xl">
                  {text.date}
                </div>
                <div className="bg-primary-foreground  flex px-4  items-center justify-center py-2 mx-auto my-4 rounded-2xl">
                  {text.rating}✨
                </div>
              </div>{" "}
              <p
                dir="rtl"
                className={cn(
                  "bg-primary-foreground w-full flex py-2 px-1 rounded-b-xl",
                )}
              >
                {text.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Button2() {
  const { pending } = useFormStatus();

  return <Button>{pending ? "Submitting..." : "Submit"}</Button>;
}
