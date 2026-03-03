import Sidebar from "@/components/sidebar/Sidebar";
import { cn } from "@/lib/utils";
import { Providers } from "../provider";
import { Toaster } from "react-hot-toast";
import Header from "@/components/ui/Header";

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
      <body>
        <div className={cn("grid grid-cols-12  w-screen h-screen m-auto")}>
          <div className="col-span-2  w-full h-full ">
            <Sidebar />
          </div>
          <div className="col-span-10  pt-4 w-full h-full flex flex-col ">
            <Providers>
              <Toaster position="top-center" />

              <Header />

              <div className={cn("")}>{children}</div>
            </Providers>
          </div>
        </div>
      </body>
    </html>
  );
}
