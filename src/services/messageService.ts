import { createClient } from "@/lib/supabase/client";
import { Message } from "@/type/Message";
import toast from "react-hot-toast";

interface MessageData {
  sender_id: string;
  recive_id: string;
  create_at: string;
  content: string;
  id: string;
}

export const sendMssageTosupabase = async (
  messageData: MessageData,
): Promise<Message> => {
  const supabase = createClient();
  const { error, data } = await supabase
    .from("messages")
    .insert({
      sender_id: messageData.sender_id,
      reciver_id: messageData.recive_id,
      content: messageData.content,
    })
    .select()
    .single();

  if (error) {
    toast.error(error.message + "خطا  در ارسال  پیام ");
  }

  return data as Message;
};
