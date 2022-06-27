import React, { useEffect, useState } from "react";

const Supply = () => {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://fec-inventory-api.herokuapp.com/product-info"
      );
      const result = await res.json();
      setLists(result);
    }
    fetchData();
  }, []);
  return <div>{lists.length}</div>;
};

export default Supply;
