export default async function getServerSideProp() {
  const res = await fetch("http://localhost:3000/users");
  const users = await res.json();
  return { props: { users } };
}



