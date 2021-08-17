import { useCallback, useEffect, useState } from 'react';
import { ActionType } from '../models';
import { useStateSelector } from '../store';
import { accountService } from '../services';

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
    const result = await accountService.getCurrentUserActions(
      currentRole,
      currentPermission
    );

    setActions(result);
  };

  useEffect(() => {
    fetchActions();
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
