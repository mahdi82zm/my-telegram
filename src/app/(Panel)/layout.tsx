import Sidebar from "@/components/sidebar/Sidebar";
import { cn } from "@/lib/utils";
import { Providers } from "../provider";
import { Toaster } from "react-hot-toast";
import Header from "@/components/ui/Header";
import { Modal } from "../_components/ui/Modal";

export const metadata = {
  title: {
    template: "%s -  TelChatMega",
    default: "welcome to the  telchatmega ",
  },
  description:
    "this  app  for contact  with  your  friends in the  world  and  enjoy  of  talk  with  them ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="">
        <Providers>
          <div className={cn("grid grid-cols-12  w-screen h-screen m-auto")}>
            <Toaster position="top-center" />
            <div className="col-span-2  w-full h-full ">
              <Sidebar />
            </div>

            <div className="col-span-10  pt-4 w-full h-full flex flex-col ">
              <div className="">
                <Header />
              </div>

              <div className={cn("w-full h-10/12")}>{children}</div>
            </div>
            <Modal/>
          </div>
        </Providers>
      </body>
    </html>
  );
}
