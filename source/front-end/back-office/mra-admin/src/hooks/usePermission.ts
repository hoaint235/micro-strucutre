import { ActionType } from "./../models/ActionType";
import { useEffect, useState } from "react";
import { useStateSelector } from "../store";
import { AccountService } from "../services";

const usePermission = () => {
  const [actions, setActions] = useState<ActionType[]>([]);
  const { currentPermission, currentRole } = useStateSelector(
    (state) => state.appState
  );

  const fetchActions = async () => {
    const result = await AccountService.getCurrentUserActions(
      currentRole,
      currentPermission
    );

    setActions(result);
  };

  useEffect(() => {
    fetchActions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    actions,
  };
};

export default usePermission;
