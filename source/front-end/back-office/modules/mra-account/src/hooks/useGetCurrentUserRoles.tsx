import { getCurrentUserRoles } from "@mra/utility";
import { useEffect, useState } from "react";

const useGetCurrentUserRoles = () => {
  const [roles, setRoles] = useState([]);

  const fetchRoles = async () => {
    const roles = await getCurrentUserRoles();
    setRoles(roles);
  };

  useEffect(() => {
    fetchRoles();
  }, []);

  return {
    roles,
    fetchRoles,
  };
};

export default useGetCurrentUserRoles;
