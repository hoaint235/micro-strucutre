import { SwapHoriz } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import lowerFirst from 'lodash/lowerFirst';
import { useTranslation } from 'react-i18next';
import { useConfirm } from '../../../hooks';
import { RoleType } from '../../../models';
import { storageService } from '../../../services';
import { useStateSelector } from '../../../store';
import {
  getPermissions,
  getRoles,
  setCurrentRole as setRole,
} from '../../../store/application';
import { Typography } from '../../atoms';
import { IconMenu } from '../../molecules';

const RoleMenu = () => {
  const { roles } = useStateSelector((state) => state.appState);
  const [currentRole, setCurrentRole] = useState('');
  const dispatch = useDispatch();
  const confirm = useConfirm();
  const { t } = useTranslation();

  const rolesTransfer = roles.map((role) => ({
    key: role,
    value: t(`roles.${lowerFirst(RoleType[role].toString())}`),
  })) as SelectionProps<RoleType>[];

  const loadPermission = (role: RoleType) => {
    dispatch(setRole(role));
    dispatch(getPermissions(role));
    storageService.setCurrentRole(role);
    setCurrentRole(role.toString().toEnum(RoleType).toString());
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
      loadPermission(role.toEnum(RoleType));
      return;
    }

    const defaultRole = roles[0];
    if (defaultRole) {
      loadPermission(defaultRole);
    }
  }, [roles]);

  const selectRole = (item: SelectionProps<RoleType>) => {
    if (currentRole === item.key.toString().toEnum(RoleType).toString()) {
      return;
    }

    confirm({
      title: 'commons.switchRole.title',
      description: t('commons.switchRole.description', { role: item.value }),
      onSubmit: () => {
        loadPermission(item.key);
      },
      options: {
        cancellationText: 'buttons.no',
        confirmationText: 'buttons.yes',
      },
    });
  };

  return (
    <>
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
    </>
  );
};

export default RoleMenu;
