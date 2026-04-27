"use server";


export default async function FetchContact() {

  const res = await fetch("http://localhost:4000/contacts");
  const data = await res.json();
  return data
}
