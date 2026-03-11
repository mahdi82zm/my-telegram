"use server";

import { revalidatePath } from "next/cache";

export async function sendData(formData: FormData) {
  const name = formData.get("name");
  console.log(name);

  revalidatePath("/home");
}
