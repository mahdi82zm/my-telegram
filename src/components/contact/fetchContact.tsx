import { supabaseServer } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import Image from "next/image";

export default async function FetchContact() {
  const cookieStore = await cookies();

  const supabase = supabaseServer(cookieStore);

  const { data: profile } = await supabase.from("Profile").select("*");
  console.log(profile);
  return (
    <div>
      {JSON.stringify(profile)}
      {profile?.map((prof) => (
        <div key={prof.id}>
          <Image
            alt={String(prof.username)}
            src={`${prof.avatar_url}`}
            width={300}
            height={300}
          ></Image>
          <p>{prof.username}</p>
          <p>{prof.created_at}</p>
        </div>
      ))}
    </div>
  );
}
