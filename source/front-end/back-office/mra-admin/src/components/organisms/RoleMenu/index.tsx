import { useEffect } from "react";
import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { RoleType } from "../../../models";
import { storageService } from "../../../services";
import { useStateSelector } from "../../../store";
import { getCurrentPermissions } from "../../../store/application";
import { Typography } from "../../atoms";
import { IconMenu } from "../../molecules";

const RoleMenu = () => {
  const { currentRoles } = useStateSelector((state) => state.appState);
  const [currentRole, setCurrentRole] = useState("");
  const dispatch = useDispatch();

  const roles = currentRoles.map((role) => ({
    key: role,
    value: role.toString(),
  })) as SelectionProps<RoleType>[];

  const loadPermission = (role: RoleType) => {
    dispatch(getCurrentPermissions(role));
    setCurrentRole(role.toString().toEnum(RoleType).toString());
  };

  useEffect(() => {
    const role = storageService.getCurrentRole();
    if (role) {
      loadPermission(role.toEnum(RoleType));
      return;
    }

    const defaultRole = currentRoles[0];
    if (defaultRole) {
      loadPermission(defaultRole);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentRoles]);

  const selectRole = (item: SelectionProps<RoleType>) => {};
  return (
    <Fragment>
      {roles.length > 1 ? (
        <IconMenu
          items={roles}
          onItemClick={(item) => selectRole(item)}
          renderItem={(item) => <Typography.Body label={item.value} />}
        >
          {currentRole}
        </IconMenu>
      ) : (
        <Typography.Label label={currentRole} color="textPrimary" />
      )}
    </Fragment>
  );
};

export default RoleMenu;
