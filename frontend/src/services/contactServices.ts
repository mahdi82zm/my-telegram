export const fetchContact = async () => {
  const res = await fetch("http://localhost:4000/contacts" , {
    cache : 'no-store'
  });


  if(!res.ok) throw new Error('failed to fetch contacts')
  return await res.json();
};
