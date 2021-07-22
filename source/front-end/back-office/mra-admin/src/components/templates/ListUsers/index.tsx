import { Grid } from "@material-ui/core";
import { IUser, ListingResponse } from "model";
import { Roles, Statuses } from "../../../utils";
import { Button, HeaderProps, Status, Typography } from "../../atoms";
import { DataTable } from "../../molecules";

type Props = {
  data: ListingResponse<IUser>;
  headers: HeaderProps[];
  onActivate: (userId: string) => void;
  onDelete: (userId: string) => void;
  onDeactivate: (userId: string) => void;
  onViewDetail: (userId: string) => void;
};

const ListUsers = (props: Props) => {
  const { data, headers, onActivate, onDelete, onDeactivate, onViewDetail } =
    props;

  const renderAction = (data: any) => {
    return (
      <Grid container spacing={1}>
        <Grid item>
          <Button.Primary
            disabled={!data.hasPermission}
            label="buttons.edit"
            onClick={() => onViewDetail(data.id)}
          />
        </Grid>
        {!data.isActivate && (
          <Grid item>
            <Button.Default
              disabled={!data.hasPermission}
              label="buttons.activate"
              onClick={() => onActivate(data.id)}
            />
          </Grid>
        )}
        {!data.isActivate && (
          <Grid item>
            <Button.Secondary
              disabled={!data.hasPermission}
              label="buttons.delete"
              onClick={() => onDelete(data.id)}
            />
          </Grid>
        )}
        {data.isActivate && (
          <Grid item>
            <Button.Secondary
              disabled={!data.hasPermission}
              label="buttons.deactivate"
              onClick={() => onDeactivate(data.id)}
            />
          </Grid>
        )}
      </Grid>
    );
  };

  const renderActivate = (data: any) => {
    const { isActivate } = data;
    const text = isActivate
      ? "listUserPage.activate"
      : "listUserPage.deactivate";
    return <Status label={text} />;
  };

  const renderStatus = (data: any) => {
    return (
      <Typography.Label color="textPrimary" label={Statuses[data.status]} />
    );
  };

  const renderRole = (data: any) => {
    const { roles: userRoles } = data;

    function checkRole(id: string) {
      return userRoles.includes(id.toLowerCase());
    }

    const isMaster = checkRole(Roles.Master);
    const isAdmin = checkRole(Roles.Admin);
    const isUser = checkRole(Roles.User);

    return (
      <Grid container spacing={1}>
        {isMaster && (
          <Grid item xs={12}>
            <Status label="roles.master" />
          </Grid>
        )}
        {isAdmin && (
          <Grid item xs={12}>
            <Status label="roles.admin" />
          </Grid>
        )}
        {isUser && (
          <Grid item xs={12}>
            <Status label="roles.user" />
          </Grid>
        )}
      </Grid>
    );
  };

  const renderCreatedDate = (data: any) => {
    return (
      <Typography.Label
        color="textPrimary"
        label={new Date(data.createdDate).toLocaleDateString()}
      />
    );
  };

  return (
    <DataTable
      headers={headers}
      source={data.data}
      totalItems={data.totalItems}
      noResultFound="table.noResultFound"
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
