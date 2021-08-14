import { ActionType } from "./../models";
import { useCallback, useEffect, useState } from "react";
import { useStateSelector } from "../store";
import { AccountService } from "../services";

const usePermission = () => {
  const [actions, setActions] = useState<ActionType[]>([]);
  const { currentPermission, currentRole } = useStateSelector(
    (state) => state.appState
  );

  const hasPermission = useCallback(
    (action: ActionType) => actions.includes(action),
    [actions]
  );
  const hasView = hasPermission(ActionType.View);
  const hasAdd = hasPermission(ActionType.Add);
  const hasEdit = hasPermission(ActionType.Edit);
  const hasDelete = hasPermission(ActionType.Delete);

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
  }, [currentRole, currentPermission]);

  return {
    actions,
    hasView,
    hasAdd,
    hasEdit,
    hasDelete,
  };
};

export default usePermission;
