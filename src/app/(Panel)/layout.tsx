import Sidebar from "@/components/sidebar/Sidebar";
import { cn } from "@/lib/utils";
import { Providers } from "../provider";
import { Toaster } from "react-hot-toast";

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
            <div className="col-span-9">{children}</div>
          </Providers>
        </div>
      </body>
    </html>
  );
}
