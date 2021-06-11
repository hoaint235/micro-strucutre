import React, { useEffect, useState } from "react";
import { API } from "@mra/utility";

const useListRole = () => {
  const [data, setData] = useState([]);

  const fetchRoles = async () => {
    const reesponse = await API.get("/account/roles");
    setData(reesponse.data);
  };

  useEffect(() => {
    fetchRoles();
  }, []);

  return {
    data,
  };
};

export default useListRole;
