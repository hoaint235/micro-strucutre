import { SwapHoriz } from '@material-ui/icons';
import { Fragment, useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import lowerFirst from 'lodash/lowerFirst';
import { useTranslation } from 'react-i18next';
import { useDialog } from '@hooks';
import { RoleType } from '@models';
import { storageService } from '@services';
import { useStateSelector } from '@store';
import {
  getPermissions,
  getRoles,
  setCurrentRole as setRole,
} from '@store/application';
import { Typography } from '@atoms';
import { IconMenu } from '@molecules';

const RoleMenu = () => {
  const { roles } = useStateSelector((state) => state.appState);
  const [currentRole, setCurrentRole] = useState('');
  const dispatch = useDispatch();
  const dialog = useDialog();
  const { t } = useTranslation();

  const renderRoles = useMemo(() => (
    roles.map((role) => ({
      key: role,
      value: t(`roles.${lowerFirst(RoleType[role].toString())}`),
    })) as SelectionProps<RoleType>[]
  ), [roles, t]);

  const loadPermission = (role: string) => {
    const parseRole = role.toEnum(RoleType);
    dispatch(setRole(parseRole));
    dispatch(getPermissions(parseRole));
    storageService.setCurrentRole(parseRole);
    setCurrentRole(parseInt(role) > 0 ? role.toEnum(RoleType).toString() : role);
  };

  useEffect(() => {
    dispatch(getRoles());
  }, []);

  useEffect(() => {
    if (roles.length === 0) {
      return;
    }

    const role = storageService.getCurrentRole();
    if (role) {
      loadPermission(role);
      return;
    }

    const defaultRole = roles[0];
    if (defaultRole) {
      loadPermission(defaultRole.toString());
    }
  }, [roles]);

  const selectRole = async (item: SelectionProps<RoleType>) => {
    if (currentRole === item.key.toString().toEnum(RoleType).toString()) {
      return;
    }

    const result = await dialog.confirm(
      'commons.switchRole.title',
      t('commons.switchRole.description', { role: item.value }), {
      cancellationText: 'buttons.no',
      confirmationText: 'buttons.yes',
    });

    if (result.success) {
      loadPermission(item.key.toString());
    }
  };

  return (
    <Fragment>
      {roles.length > 1 ? (
        <IconMenu
          items={renderRoles}
          onItemClick={selectRole}
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
