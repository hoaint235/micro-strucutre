import { Grid, MTypography, MButton, MDataTable } from "@mra/theme";
import React from "react";
import { useTranslation } from "react-i18next";
import { Roles, Statuses } from "../../../utils/constants";
import { Status } from "../../../components";
import { useListUser } from "../../../hooks";
import { API } from "@mra/utility";
import { ApiHelper } from "../../../utils";

const TableUsers = () => {
  const { t } = useTranslation();
  const { data: source, fetchUsers } = useListUser();

  const headers = [
    {
      id: "email",
      label: t("table.email"),
      sort: true,
      width: 250,
    },
    {
      id: "isActivate",
      label: t("table.isActivate"),
      width: 100,
    },
    {
      id: "status",
      label: t("table.status"),
      width: 250,
    },
    {
      id: "roles",
      label: t("table.roles"),
      width: 100,
    },
    {
      id: "createdDate",
      label: t("table.createdDate"),
    },
    {
      id: "action",
      label: t("table.action"),
    },
  ];

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
  };

  const renderAction = (data) => {
    return (
      <Grid container spacing={1}>
        {!data.isActivate && (
          <Grid item>
            <MButton.Default
              disabled={!data.hasPermission}
              label={t("buttons.activate")}
              onClick={() => onActivate(data.id)}
            />
          </Grid>
        )}
        {!data.isActivate && (
          <Grid item>
            <MButton.Secondary
              disabled={!data.hasPermission}
              label={t("buttons.delete")}
              onClick={() => onDelete(data.id)}
            />
          </Grid>
        )}
        {data.isActivate && (
          <Grid item>
            <MButton.Secondary
              disabled={!data.hasPermission}
              label={t("buttons.deactivate")}
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
      <MTypography.Body
        color="textPrimary"
        label={t(Statuses[data.status]).toUpperCase()}
      />
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
      <MTypography.Body
        color="textPrimary"
        label={new Date(data.createdDate).toLocaleDateString()}
      />
    );
  };

  return (
    <MDataTable
      keyRow="id"
      defaultOrderBy="name"
      defaultOrder="asc"
      source={source.data}
      headers={headers}
      totalItems={source.totalItems}
      noResultFound={t("table.noResultFound")}
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

export default TableUsers;
