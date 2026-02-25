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
        <div className={cn("")}>
          <Providers>
            <Toaster position="top-center" />

            <div className="">{children}</div>
          </Providers>
        </div>
      </body>
    </html>
  );
}
