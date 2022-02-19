import { Grid } from '@material-ui/core';
import { useState, useEffect, useMemo } from 'react';
import {
  Button,
  ListPermissions,
  MainContainer,
  SkeletonTemplate,
  FieldsChecked,
} from '@components';
import { useConfirm, usePermission } from '@hooks';
import { ActionType, PermissionType, RoleType, IListPermission } from '@models';
import { accountService } from '@services';
import { toastHelper } from '@utils';

const ListPermission = () => {
  const { hasEdit } = usePermission();
  const [data, setData] = useState<IListPermission[] | null>(null);
  const [fieldsChecked, setFieldsChecked] = useState<FieldsChecked>({});
  const confirm = useConfirm();

  useEffect(() => {
    (async () => {
      const permissions = await accountService.getPermissions();
      setData(permissions);
    })();
  }, []);

  const onSave = () => {
    confirm({
      title: 'permissionPage.saveTitle',
      description: 'permissionPage.saveDescription',
      onSubmit: async () => {
        const payload = Object.entries(fieldsChecked).map((field) => {
          const fields = field[0].replace('.row', '').split('.');
          return {
            isActive: field[1],
            role: fields[0].toEnum(RoleType),
            permission: fields[1].toEnum(PermissionType),
            action: fields[2].toEnum(ActionType),
          };
        }) as IListPermission[];

        await accountService.updatePermissions(payload);
        toastHelper.success('permissionPage.saveSuccess');
      },
      options: {
        confirmationButtonProps: { color: 'primary' },
      },
    });
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

  return (
    <MainContainer title="permissionPage.title">
      {data ? (
        <Grid container spacing={2}>
          {hasEdit && (
            <Grid item container xs={12} justifyContent="flex-end">
              <Button.Primary
                name="edit"
                label="buttons.save"
                disabled={!(Object.keys(fieldsChecked).length > 0)}
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
