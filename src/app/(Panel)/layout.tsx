import Sidebar from "@/components/sidebar/Sidebar";
import { cn } from "@/lib/utils";
import { Providers } from "../provider";

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
            <div className="col-span-9">{children}</div>
          </Providers>
        </div>
      </body>
    </html>
  );
}
