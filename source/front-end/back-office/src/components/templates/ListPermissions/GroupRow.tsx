import {
  Checkbox,
  Collapse,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@material-ui/core';
import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';
import { useCallback, useState } from 'react';
import uniq from 'lodash/uniq';
import { ActionType, PermissionType, RoleType, IListPermission } from '@models';
import { Typography } from '@atoms';
import { useCellStyles, useRowStyles } from './ListPermissions.style';

export type FieldsChecked = { [x: string]: boolean };
export type GroupRowProps = {
  roles: RoleType[];
  permission: PermissionType;
  data: IListPermission[];
  isEdit: boolean;
  onChange: (data: FieldsChecked) => void;
};

const GroupRow = (props: GroupRowProps) => {
  const { roles, permission, data, isEdit, onChange } = props;
  const classesCell = useCellStyles(5)();
  const classes = useRowStyles();
  const [open, setOpen] = useState(false);
  const actions = uniq(data.map((x) => x.action)).sort((a, b) => a - b);

  const getRow = (
    role: RoleType,
    permission: PermissionType,
    action: ActionType
  ) => `${role}.${permission}.${action}.row`;

  const getDefaultValue = useCallback(() => {
    let defaultValue: FieldsChecked = {};
    for (let x = 0; x < actions.length; x++) {
      const action = actions[x];
      for (let y = 0; y < roles.length; y++) {
        const role = roles[y];
        defaultValue = {
          ...defaultValue,
          [getRow(role, permission, action)]:
            data.find((x) => x.action === action && x.role === role)
              ?.isActive || false,
        };
      }
    }
    return defaultValue;
  }, []);

  const [fieldsChecked, setFieldsChecked] = useState<FieldsChecked>(
    getDefaultValue()
  );

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fieldSelected = { [event.target.name]: event.target.checked };
    const checked = {
      ...fieldsChecked,
      ...fieldSelected,
    };
    setFieldsChecked(checked);
    onChange(fieldSelected);
  };

  const getActionRoles = (nameGroup: string) =>
    actions.map((action) => nameGroup.replace('.group', `.${action}.row`));

  const handleAllCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fieldsSelected = Object.assign(
      {},
      ...getActionRoles(event.target.name).map((role) => ({
        [role]: event.target.checked,
      }))
    ) as FieldsChecked;
    const checked = { ...fieldsChecked, ...fieldsSelected };
    setFieldsChecked(checked);
    onChange(fieldsSelected);
  };

  return (
    <>
      <TableRow className={classes.root}>
        <TableCell className={classesCell.root}>
          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              <IconButton size="small" onClick={() => setOpen(!open)}>
                {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
              </IconButton>
            </Grid>
            <Grid item>
              <Typography.Label
                color="textPrimary"
                label={permission.toString().toEnum(PermissionType).toString()}
              />
            </Grid>
          </Grid>
        </TableCell>
        {roles.map((role, index) => {
          const ckbName = `${role}.${permission}.group`;
          const fields = Object.entries(fieldsChecked)
            .filter((field) => field[1])
            .map((item) => item[0]);

          return (
            <TableCell
              key={`${ckbName}.${index}`}
              className={classesCell.root}
              align="center"
            >
              <Checkbox
                name={ckbName}
                color="primary"
                disabled={!isEdit}
                onChange={handleAllCheck}
                checked={
                  getActionRoles(ckbName).every((item) =>
                    fields.includes(item)
                  ) || false
                }
              />
            </TableCell>
          );
        })}
      </TableRow>
      <TableRow>
        <TableCell style={{ padding: 0 }} colSpan={5}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Table size="small">
              <TableBody>
                {actions.map((action, index) => (
                  <TableRow key={`${action}.${index}`}>
                    <TableCell
                      className={classesCell.root}
                      style={{ paddingLeft: 60 }}
                      align="left"
                    >
                      {action.toString().toEnum(ActionType).toString()}
                    </TableCell>
                    {roles.map((role, index) => {
                      const ckbName = getRow(role, permission, action);
                      return (
                        <TableCell
                          key={`${ckbName}.${index}`}
                          className={classesCell.root}
                          align="center"
                        >
                          <Checkbox
                            name={ckbName}
                            color="primary"
                            disabled={!isEdit}
                            onChange={handleCheck}
                            checked={!!fieldsChecked[ckbName]}
                          />
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default GroupRow;
