import HeaderSite from "@/components/HeaderSite";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "welcome  to the  TelChatMega wepsite ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={cn("mx-5 ")}>
        <div>
          <HeaderSite />
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
