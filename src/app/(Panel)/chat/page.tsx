import ChatIndex from "@/components/chat/ChatIndex";
export const metadata = {
  title: "Chat",
};

export default function page() {
  return (
    <div className=" h-full">
      <ChatIndex />
    </div>
  );
}
