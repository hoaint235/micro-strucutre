import { Box, Dialog, Grid } from '@material-ui/core';
import { useState, useEffect, useMemo } from 'react';
import {
  Button,
  ListPermissions,
  MainContainer,
  SkeletonTemplate,
  FieldsChecked,
} from '@components';
import { useDialog, usePermission } from '@hooks';
import { ActionType, PermissionType, RoleType, IListPermission } from '@models';
import { accountService } from '@services';
import { toastHelper } from '@utils';

const ListPermission = () => {
  const { hasEdit } = usePermission();
  const [data, setData] = useState<IListPermission[] | null>(null);
  const [fieldsChecked, setFieldsChecked] = useState<FieldsChecked>({});
  const dialog = useDialog();

  useEffect(() => {
    (async () => {
      const permissions = await accountService.getPermissions();
      setData(permissions);
    })();
  }, []);

  const onSave = async () => {
    const result = await dialog.confirm(
      'permissionPage.saveTitle',
      'permissionPage.saveDescription', {
      confirmationButtonProps: { color: 'primary' },
    },
    );

    if (result.success) {
      const payload = Object.entries(fieldsChecked).map((field) => {
        const [permissions, isActive] = field;
        const [role, permission, action] = permissions.replace('.row', '').split('.');
        return {
          isActive,
          role: role.toEnum(RoleType),
          permission: permission.toEnum(PermissionType),
          action: action.toEnum(ActionType),
        };
      }) as IListPermission[];

      await accountService.updatePermissions(payload);
      toastHelper.success('permissionPage.saveSuccess');
    }
  };

  const Permissions = useMemo(
    () => (
      <ListPermissions
        data={data || []}
        isEdit={hasEdit}
        onChange={(data) =>
          setFieldsChecked((prevData) => ({ ...prevData, ...data }))
        }
      />
    ),
    [data, hasEdit]
  );

  const hasChange = useMemo(() => Object.keys(fieldsChecked).length > 0, [fieldsChecked]);

  return (
    <MainContainer title="permissionPage.title">
      {data ? (
        <Grid container spacing={2}>
          {hasEdit && (
            <Grid item container xs={12} justifyContent="flex-end">
              <Button.Primary
                name="edit"
                label="buttons.save"
                disabled={!hasChange}
                onClick={onSave}
              />
            </Grid>
          )}
          <Grid item xs={12}>
            {Permissions}
          </Grid>
        </Grid>
      ) : (
        <SkeletonTemplate.List />
      )}
    </MainContainer>
  );
};

export default ListPermission;
