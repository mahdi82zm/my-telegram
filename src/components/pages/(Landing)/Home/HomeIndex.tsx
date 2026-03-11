"use client";
import Image from "next/image";
import imageHero from "/hakhamanesh.png";
import { cn } from "@/lib/utils";
import {
  LucideAmpersand,
  LucideBowArrow,
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
import { useTransition } from "react";

export default function HomeIndex() {
  const [isPending, startTransition] = useTransition();

  const services = [
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

  const comments = [
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
    {
      id: 5,
      name: "امیر مرادی",
      avatar: "/avatars/user5.jpg",
      role: "بازاریاب دیجیتال",
      rating: 5,
      comment:
        "پشتیبانی‌تون خیلی سریع جواب داد، حس اعتماد بهم داد. واقعاً ممنون 🌟",
      date: "1402/12/20",
    },
  ];

  const time = () => {
    setTimeout(() => {
      console.log("dfkjgjdlk");
    }, 7000);
  };

  const handleSubmit = () => {
    if (confirm("are  sure  for submitting? ")) startTransition(() => time());
  };

  return (
    <div className="w-full flex  flex-col h-full">
      <div className={cn("relative  w-full h-full grid grid-cols-12 ")}>
        <div className="absolute col-span-4   overflow-hidden flex    h-90    mx-auto  aspect-square items-center justify-center   ">
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
        </div>
        <div className=" col-span-4 mx-auto w-full h-96  ">
          <div className="z-10 absolute aspect-square rounded-full flex translate-60 items-center justify-center animate-bounce h-50 bg-[#FDD835] "></div>{" "}
          <p className="z-50">
            {" "}
            TelChatMega یک اپ مطمئن برای ارتباط با دوستان خود{" "}
          </p>
        </div>
        {/* hero section  */}
      </div>
      {/* خدمات  */}
      <div className="">
        <p className=" border-b-8 border-dotted flex relative items-center justify-center my-10 ">
          <span
            dir="rtl"
            className="absolute flex items-center justify-center text-4xl text-zinc-500 font-semibold bg-background mt-3"
          >
            خدمات Mega
          </span>
        </p>

        {/* carts services */}

        <div className={cn("grid grid-cols-12 gap-3")}>
          {services.map((item) => (
            <div
              key={item.id}
              className={cn(
                "h-40 border border-border rounded shadow-lg bg-accent flex flex-col items-center justify-center  col-span-3",
              )}
            >
              <span className="">{item.icon}</span>
              {item.name}
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className=" border-b-8 border-dotted flex relative items-center justify-center my-10 ">
          <span
            dir="rtl"
            className="absolute flex items-center justify-center text-4xl text-zinc-500 font-semibold bg-background mt-3"
          >
            ارتباط Mega
          </span>
        </p>
      </div>
      {/* فرم تماس */}
      <div className={cn("grid grid-cols-4")}>
        <div className={cn("col-span-3 px-4 flex flex-col gap-3")}>
          <h3 className="font-bold text-2xl">Contact Us</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            ducimus fugiat eaque corporis odio? Qui aliquid autem consequatur
            architecto iusto corrupti, voluptatibus, totam possimus eveniet
            expedita, voluptas ratione soluta unde ipsum explicabo provident
            accusamus dolor. Sunt commodi qui, ea voluptatem saepe quos. Facere
            minima distinctio ea quos sit iure totam? Dolor praesentium enim
            consequuntur similique ex maxime quia labore suscipit, quibusdam
            itaque, odit, a deleniti. Sit, quod, voluptatum consequuntur fugiat,
            illum maxime dolorum nemo perspiciatis officiis molestias eum
            molestiae a sapiente quam sequi? Voluptas, perspiciatis
            reprehenderit. Sunt, consequatur nostrum labore iusto mollitia
            dolorum ab, natus nisi quidem dolor neque laboriosam!
          </p>
        </div>
        {isPending ? (
          <LucideLoader2 />
        ) : (
          <>
            <form
              action={sendData}
              onClick={handleSubmit}
              className={cn(
                "col-span-1 flex flex-col border border-border p-4 py-10 rounded-xl bg-accent  gap-3",
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
                <Input type="text" name="descriptions" />
              </label>
              <Button2></Button2>
            </form>
          </>
        )}
      </div>
      {/* نمونه کارها */}
      <div>
        <p className=" border-b-8 border-dotted flex relative items-center justify-center my-10 ">
          <span
            dir="rtl"
            className="absolute flex items-center justify-center text-4xl text-zinc-500 font-semibold bg-background mt-3"
          >
            Show cases
          </span>
        </p>
      </div>
      {/* نمایش  app  */}
      <div className="monitor-screen ">
        <div className="border-8 border-chart-3 rounded-3xl  w-2/3">
          <iframe
            src="/"
            className={cn("w-full h-90 rounded-2xl")}
            frameBorder="0"
          ></iframe>
        </div>
      </div>
      {/* نظرات   وجامعه کاربران  */}
      <div>
        <p className=" border-b-8 border-dotted flex relative items-center justify-center my-10 ">
          <span
            dir="rtl"
            className="absolute flex items-center justify-center text-4xl text-zinc-500 font-semibold bg-background mt-3"
          >
            Testimotionals
          </span>
        </p>
      </div>
      {/* کارت های نظرات   */}
      <div className={cn("grid  grid-cols-4 grid-rows-1 gap-5   ")}>
        {comments.map((text) => (
          <div
            className={cn(
              "col-span-1 bg-accent rounded-xl h-full row-auto flex flex-col items-center justify-center",
            )}
            key={text.id}
          >
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
        ))}
      </div>
    </div>
  );
}

export function Button2() {
  const { pending } = useFormStatus();

  return <Button>{pending ? "Submitting..." : "Submit"}</Button>;
}
