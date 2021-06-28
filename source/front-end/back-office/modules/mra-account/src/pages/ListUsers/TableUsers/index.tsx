import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { useTranslation } from "react-i18next";
import DynamicTable from "../../../theme/components/DynamicTable";
import { Roles, Statuses } from "../../../utils/constants";
import { HeaderProps, PrimaryButton } from "../../../theme";
import { Status } from "../../../components";
import { useListUser } from "../../../hooks";
import { API } from "@mra/utility";
import { ApiHelper } from "../../../utils";

const headers: HeaderProps[] = [
  {
    id: "email",
    label: "table.email",
    sort: true,
  },
  {
    id: "isActivate",
    label: "table.isActivate",
    width: 100,
  },
  {
    id: "status",
    label: "table.status",
    width: 250,
  },
  {
    id: "roles",
    label: "table.roles",
    width: 100,
  },
  {
    id: "createdDate",
    label: "table.createdDate",
  },
  {
    id: "action",
    label: "table.action",
  },
];

const TableUsers = () => {
  const { t } = useTranslation();
  const { data: source, fetchUsers } = useListUser();

  const onDeactivate = async (userId) => {
    await API.put(ApiHelper.deactivateUser(userId), {});
    await fetchUsers();
  };

  const onActivate = async (userId) => {
    await API.put(ApiHelper.activateUser(userId), {});
    await fetchUsers();
  };

  const onDelete = async (userId) => {
    await API.delete(ApiHelper.deleteUser(userId), {});
    await fetchUsers();
  }

  const renderAction = (data) => {
    return (
      <Grid container spacing={1}>
        {!data.isActivate && (
          <Grid item>
            <PrimaryButton
              color="default"
              disabled={!data.hasPermission}
              label="buttons.activate"
              onClick={() => onActivate(data.id)}
            />
          </Grid>
        )}
         {!data.isActivate && (
          <Grid item>
            <PrimaryButton
              color="secondary"
              disabled={!data.hasPermission}
              label="buttons.delete"
              onClick={() => onDelete(data.id)}
            />
          </Grid>
        )}
        {data.isActivate && (
          <Grid item>
            <PrimaryButton
              color="secondary"
              disabled={!data.hasPermission}
              label="buttons.deactivate"
              onClick={() => onDeactivate(data.id)}
            />
          </Grid>
        )}
      </Grid>
    );
  };

  const renderActivate = (data) => {
    const { isActivate } = data;
    const text = isActivate ? "account.activate" : "account.deactivate";
    return <Status label={text} />;
  };

  const renderStatus = (data) => {
    return (
      <Typography component="p" variant="subtitle1" color="textPrimary">
        {t(Statuses[data.status]).toUpperCase()}
      </Typography>
    );
  };

  const renderRole = (data) => {
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

  const renderCreatedDate = (data) => {
    return (
      <Typography component="p" variant="subtitle2" color="textPrimary">
        {new Date(data.createdDate).toLocaleDateString()}
      </Typography>
    );
  };

  return (
    <DynamicTable
      keyRow="id"
      defaultOrderBy="name"
      defaultOrder="asc"
      source={source.data}
      headers={headers}
      totalItems={source.totalItems}
      bodyTemplate={{
        bodyAction: renderAction,
        bodyIsActivate: renderActivate,
        bodyRoles: renderRole,
        bodyStatus: renderStatus,
        bodyCreatedDate: renderCreatedDate,
      }}
    ></DynamicTable>
  );
};

export default TableUsers;
