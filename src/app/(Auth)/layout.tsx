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
        <div className={cn("")}>
          <Providers>
            <div className="">{children}</div>
          </Providers>
        </div>
      </body>
    </html>
  );
}
