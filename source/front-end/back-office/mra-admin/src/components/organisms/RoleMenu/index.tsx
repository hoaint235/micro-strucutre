import { SwapHoriz } from "@material-ui/icons";
import { useEffect } from "react";
import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { useConfirm } from "../../../hooks";
import { RoleType } from "../../../models";
import { storageService } from "../../../services";
import { useStateSelector } from "../../../store";
import {
  getPermissions,
  getRoles,
  setCurrentRole as setRole,
} from "../../../store/application";
import { Typography } from "../../atoms";
import { IconMenu } from "../../molecules";
import lowerFirst from "lodash/lowerFirst";

const RoleMenu = () => {
  const { roles } = useStateSelector((state) => state.appState);
  const [currentRole, setCurrentRole] = useState("");
  const dispatch = useDispatch();
  const confirm = useConfirm();

  const rolesTransfer = roles.map((role) => ({
    key: role,
    value: `roles.${lowerFirst(RoleType[role].toString())}`,
  })) as SelectionProps<RoleType>[];

  const loadPermission = (role: RoleType) => {
    dispatch(setRole(role));
    dispatch(getPermissions(role));
    storageService.setCurrentRole(role);
    setCurrentRole(role.toString().toEnum(RoleType).toString());
  };

  useEffect(() => {
    dispatch(getRoles());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (roles.length === 0) {
      return;
    }

    const role = storageService.getCurrentRole();
    if (role) {
      loadPermission(role.toEnum(RoleType));
      return;
    }

    const defaultRole = roles[0];
    if (defaultRole) {
      loadPermission(defaultRole);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roles]);

  const selectRole = (item: SelectionProps<RoleType>) => {
    if (currentRole === item.key.toString().toEnum(RoleType).toString()) {
      return;
    }

    confirm({
      title: "Are you sure",
      description: `Do you want switch to role ${item.value}`,
      onSubmit: () => {
        loadPermission(item.key);
      },
    });
  };

  return (
    <Fragment>
      {roles.length > 1 ? (
        <IconMenu
          items={rolesTransfer}
          onItemClick={(item) => selectRole(item)}
          renderItem={(item) => <Typography.Body label={item.value} />}
        >
          <SwapHoriz />
        </IconMenu>
      ) : (
        <Typography.Label label={currentRole} color="textPrimary" />
      )}
    </Fragment>
  );
};

export default RoleMenu;
