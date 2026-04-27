export const fetchMessages = async (userId: string, contactId: string) => {
  const res = await fetch(
    `http://localhost:4000/messages/${userId}/${contactId}`,
  );
  return await res.json();
};

export const sendMessage = async (msg) => {
  const res = await fetch("http://localhost:4000/messages", {
    method: "POST",
    headers: {
      Content_Type: "application/json",
    },
    body: JSON.stringify(msg),
  });

  return await res.json();
};
