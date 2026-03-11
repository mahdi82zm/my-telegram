import Footer from "@/components/Footer";
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
      <body className={cn(" min-h-screen min-w-screen ")}>
        <div className={cn("felx flex-col px-4 h-full  w-full  ")}>
          <div className="h-20 relative">
            <HeaderSite />
          </div>
          <div className="relative h-full w-full ">{children}</div>
          <div className={cn(" py-10")}>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
