import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import uniq from 'lodash/uniq';
import { RoleType } from '../../../models';
import { IListPermission } from '../../../models/accounts';
import GroupRow, { FieldsChecked } from './GroupRow';
import { useCellStyles } from './ListPermissions.style';

type Props = {
  data: IListPermission[];
  isEdit: boolean;
  onChange: (data: FieldsChecked) => void;
};

const ListPermissions = (props: Props) => {
  const { data, isEdit, onChange } = props;

  const roles = uniq(data.map((x) => x.role)).sort((a, b) => a - b);
  const permissions = uniq(data.map((x) => x.permission)).sort((a, b) => a - b);

  const classesCell = useCellStyles(roles.length + 1)();

  return (
    <Paper>
      <TableContainer>
        <Table stickyHeader size="small">
          <TableHead style={{ height: 48 }}>
            <TableRow>
              <TableCell className={classesCell.root} />
              {roles.map((role) => (
                <TableCell
                  key={`${role}.header`}
                  align="center"
                  className={classesCell.root}
                  style={{ fontWeight: 'bold' }}
                >
                  {role.toString().toEnum(RoleType).toString()}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {permissions.map((permission, index) => (
              <GroupRow
                onChange={onChange}
                isEdit={isEdit}
                key={`${permission}.${index}.groupRow`}
                permission={permission}
                roles={roles}
                data={data.filter((x) => x.permission === permission)}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default ListPermissions;
