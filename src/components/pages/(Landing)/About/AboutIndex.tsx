"use client";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function AboutIndex() {
  return (
    <div
      className={cn(
        "max-w-250 flex  flex-col items-start justify-center gap-6 mx-auto py-10 bg-accent px-8 rounded-xl my-10 shadow-lg ",
      )}
    >
      <h3 className={cn("text-2xl font-semibold")}>معرفی کلی</h3>
      <p>
        «ما در [TELCHAT MEGA] تلاش می‌کنیم تجربه‌ای ساده‌تر، سریع‌تر و انسانی‌تر
        را برای شما فراهم کنیم.»
      </p>
      <h3 className={cn("text-2xl font-semibold")}>داستان ما </h3>
      <p>
        «ایده‌ی ساخت این اپ زمانی شکل گرفت که دیدیم بسیاری از کاربران برای [هدف
        اپ شما، مثلاً مدیریت کارها، یادگیری، یا ارتباط] دچار سردرگمی هستند. هدف
        ما ارائه‌ی راهکاری بود که با طراحی مینیمال و عملکرد روان، زندگی دیجیتال
        را راحت‌تر کند.»
      </p>
      <ul>
        <h3
          className="text-2xl font-semibold
"
        >
          ارزش ها و اهداف ما :{" "}
        </h3>
        <li> سادگی در استفاده</li>
        <li>احترام به داده‌ها و حریم خصوصی کاربر</li>
        <li>پشتیبانی مداوم و به‌روز</li>
      </ul>{" "}
      <div className="w-full h-full  flex flex-col tablet:flex-row gap-5 items-center justify-between">
        {" "}
        <div className="relative w-full tablet:w-1/2  aspect-square">
          <Image
            alt="about iamge"
            className="rounded-xl"
            src={"/about.png"}
            fill
          />
        </div>
        <form className="flex flex-col bg-primary-foreground px-10 w-full py-5 tablet:w-1/2 gap-4 rounded-xl">
          <h3>فرم نظر سنجی </h3>
          <label htmlFor="name">شماره تلفن : </label>
          <Input
            type="number"
            placeholder="لطفا  نام  خودرا  وارد کنید  ...."
          ></Input>
          <label htmlFor="name">نام : </label>
          <Input
            type="text"
            placeholder="لطفا  نام  خودرا  وارد کنید  ...."
          ></Input>
          <label htmlFor="name">توضیحات و نظرات : </label>
          <textarea
            className="bg-accent"
            maxLength={100}
            placeholder="حداکثر  100 کاراکتر  استفاده کنید    ...."
          ></textarea>
        </form>
      </div>
    </div>
  );
}
