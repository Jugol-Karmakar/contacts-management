const { useState, useEffect } = require("react");

const useContacts = () => {
  const [allContacts, setAllContacts] = useState([]);

  useEffect(() => {
    fetch("https://contact-management-server-mauve.vercel.app/contacts", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setAllContacts(data));
  }, []);

  return [allContacts, setAllContacts];
};

export default useContacts;
