import { Grid } from '@material-ui/core';
import {
  CheckCircleOutline,
  Delete,
  HighlightOff,
  Visibility,
} from '@material-ui/icons';
import { ListingResponse } from '../../../models';
import { IUser } from '../../../models/accounts';
import { Roles, Statuses } from '../../../utils';
import { HeaderProps, Status, Typography } from '../../atoms';
import { DataTable, IconButton, SortProps, PagingProps } from '../../molecules';

type Props = {
  data: ListingResponse<IUser>;
  headers: HeaderProps[];
  onActivate: (userId: string) => void;
  onDelete: (userId: string) => void;
  onDeactivate: (userId: string) => void;
  onViewDetail: (userId: string) => void;
  onPaging: (data: PagingProps) => void;
  onSort: (data: SortProps) => void;
};

const ListUsers = (props: Props) => {
  const {
    data,
    headers,
    onActivate,
    onDelete,
    onDeactivate,
    onViewDetail,
    onPaging,
    onSort,
  } = props;

  const renderAction = (data: any) => (
    <Grid container spacing={1}>
      <Grid item>
        <IconButton.Primary
          icon={Visibility}
          name="edit"
          disabled={!data.hasPermission}
          label="buttons.edit"
          onClick={() => onViewDetail(data.id)}
        />
      </Grid>
      {!data.isActivate && (
        <Grid item>
          <IconButton.Primary
            name="activate"
            icon={CheckCircleOutline}
            disabled={!data.hasPermission}
            label="buttons.activate"
            onClick={() => onActivate(data.id)}
          />
        </Grid>
      )}
      {!data.isActivate && (
        <Grid item>
          <IconButton.Secondary
            icon={Delete}
            name="delete"
            disabled={!data.hasPermission}
            label="buttons.delete"
            onClick={() => onDelete(data.id)}
          />
        </Grid>
      )}
      {data.isActivate && (
        <Grid item>
          <IconButton.Secondary
            icon={HighlightOff}
            disabled={!data.hasPermission}
            label="buttons.deactivate"
            name="deactivate"
            onClick={() => onDeactivate(data.id)}
          />
        </Grid>
      )}
    </Grid>
  );

  const renderActivate = (data: any) => {
    const { isActivate } = data;
    const text = isActivate
      ? 'listUserPage.activate'
      : 'listUserPage.deactivate';
    return <Status label={text} color={isActivate ? 'primary' : 'secondary'} />;
  };

  const renderStatus = (data: any) => (
    <Typography.Label color="textPrimary" label={Statuses[data.status]} />
  );

  const renderRole = (data: any) => {
    const { roles: userRoles } = data;

    function checkRole(id: string) {
      return userRoles.includes(id.toLowerCase());
    }

    const isMaster = checkRole(Roles.Master);
    const isAdmin = checkRole(Roles.Admin);
    const isUser = checkRole(Roles.User);

    return (
      <Grid container spacing={2}>
        {isMaster && (
          <Grid item xs={12}>
            <Status label="roles.master" color="primary" />
          </Grid>
        )}
        {isAdmin && (
          <Grid item xs={12}>
            <Status label="roles.admin" color="primary" />
          </Grid>
        )}
        {isUser && (
          <Grid item xs={12}>
            <Status label="roles.user" color="primary" />
          </Grid>
        )}
      </Grid>
    );
  };

  const renderCreatedDate = (data: any) => (
    <Typography.Label
      color="textPrimary"
      label={new Date(data.createdDate).toLocaleDateString()}
    />
  );

  return (
    <DataTable
      headers={headers}
      source={data.data}
      totalItems={data.totalItems}
      noResultFound="table.noResultFound"
      onPaging={onPaging}
      onSort={onSort}
      bodyTemplate={{
        bodyAction: renderAction,
        bodyIsActivate: renderActivate,
        bodyRoles: renderRole,
        bodyStatus: renderStatus,
        bodyCreatedDate: renderCreatedDate,
      }}
    />
  );
};

export default ListUsers;
