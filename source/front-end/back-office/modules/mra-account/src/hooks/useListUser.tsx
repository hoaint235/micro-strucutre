import React, { useEffect, useState } from "react";
import { API } from "@mra/utility";

type User = {
  id: string;
  email: string;
  status: number;
  isActivate: boolean;
  roles: Array<string>;
  hasPermission: boolean;
};

const useListRole = () => {
  const [data, setData] = useState<ListingResponse<User>>({
    data: [],
    totalItems: 0,
  });

  const fetchUsers = async (
    request: ListingRequest = { limit: 10, offset: 0 }
  ) => {
    const response = await API.get("/account/users", {
      params: { ...request },
    });
    setData({ ...data, ...response.data });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return {
    data,
    fetchUsers,
  };
};

export default useListRole;
