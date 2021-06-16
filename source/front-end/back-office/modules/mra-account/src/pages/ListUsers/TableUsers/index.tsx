import { Chip, Grid } from "@material-ui/core";
import React from "react";
import { HeaderProps } from "../../../components/controls/DynamicTableHeader/DynamicTableHeader.type";
import useListUser from "../../../hooks/useListUser";
import { useTranslation } from "react-i18next";
import SecondaryButton from "../../../components/controls/SecondaryButton";
import PrimaryButton from "../../../components/controls/PrimaryButton";
import DynamicTable from "../../../components/controls/DynamicTable";
import { Roles } from "../../../utils/constants";

const headers: HeaderProps[] = [
  {
    id: "email",
    label: "table.email",
    sort: true,
  },
  {
    id: "isActivate",
    label: "table.isActivate",
    sort: true,
  },
  {
    id: "status",
    label: "table.status",
  },
  {
    id: "roles",
    label: "table.roles",
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
  const { data: source } = useListUser();

  const renderAction = (data) => {
    return (
      <Grid container spacing={1}>
        <Grid item>
          <PrimaryButton
            onClick={() => history.pushState({}, "", `/user/${data.id}`)}
            disabled={!data.hasPermission}
          >
            {t("buttons.edit")}
          </PrimaryButton>
        </Grid>
        <Grid item>
          <SecondaryButton disabled={!data.hasPermission}>
            {t("buttons.delete")}
          </SecondaryButton>
        </Grid>
      </Grid>
    );
  };

  const renderActivate = (data) => {
    const { isActivate } = data;
    const text = isActivate ? "account.activate" : "account.deactivate";
    return (
      <Chip color={isActivate ? "primary" : "secondary"} label={t(text)} />
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
          <Grid item>
            <Chip
              color="primary"
              variant="outlined"
              label={t("account.roles.master")}
            />
          </Grid>
        )}
        {isAdmin && (
          <Grid item>
            <Chip
              color="primary"
              variant="outlined"
              label={t("account.roles.admin")}
            />
          </Grid>
        )}
        {isUser && (
          <Grid item>
            <Chip
              color="primary"
              variant="outlined"
              label={t("account.roles.user")}
            />
          </Grid>
        )}
      </Grid>
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
      }}
    ></DynamicTable>
  );
};

export default TableUsers;
