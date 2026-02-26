import Sidebar from "@/components/sidebar/Sidebar";
import { cn } from "@/lib/utils";
import { Providers } from "../provider";
import { Toaster } from "react-hot-toast";
import Header from "@/components/ui/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <div
          className={cn("grid grid-cols-12 justify-between w-full h-full m-0")}
        >
          <div className="col-span-3">
            <Sidebar />
          </div>
          <Providers>
            <Toaster position="top-center" />
            <div className="col-span-9 flex-col pt-4 ">
              <Header  />
              <div>{children}</div>
            </div>
          </Providers>
        </div>
      </body>
    </html>
  );
}
