const { useState, useEffect } = require("react");

const useContacts = () => {
  const [allContacts, setAllContacts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/contacts", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setAllContacts(data));
  }, []);

  return [allContacts, setAllContacts];
};

export default useContacts;
