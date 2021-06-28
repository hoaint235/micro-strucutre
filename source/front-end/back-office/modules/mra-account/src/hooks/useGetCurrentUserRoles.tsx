import { getCurrentUserRoles } from "@mra/utility";
import { useCallback, useEffect, useState } from "react";

const useGetCurrentUserRoles = () => {
  const [roles, setRoles] = useState([]);

  const fetchRoles = useCallback(async () => {
    const roles = await getCurrentUserRoles();
    setRoles(roles);
  }, [getCurrentUserRoles]);

  useEffect(() => {
    fetchRoles();
  }, [fetchRoles]);

  return {
    roles,
    fetchRoles,
  };
};

export default useGetCurrentUserRoles;
