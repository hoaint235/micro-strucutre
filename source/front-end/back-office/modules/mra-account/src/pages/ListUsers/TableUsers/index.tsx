import { Chip, Grid, Typography } from "@material-ui/core";
import React, { Fragment } from "react";
import { HeaderProps } from "../../../components/controls/DynamicTableHeader/DynamicTableHeader.type";
import useListUser from "../../../hooks/useListUser";
import { useTranslation } from "react-i18next";
import SecondaryButton from "../../../components/controls/SecondaryButton";
import PrimaryButton from "../../../components/controls/PrimaryButton";
import DynamicTable from "../../../components/controls/DynamicTable";
import { t } from "@mra/utility";
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
          >
            {t("buttons.edit")}
          </PrimaryButton>
        </Grid>
        <Grid item>
          <SecondaryButton>{t("buttons.delete")}</SecondaryButton>
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
    const isAdmin = userRoles.find((x) => x === Roles.Admin.toUpperCase());
    const isUser = userRoles.find((x) => x === Roles.User.toUpperCase());
    return (
      <Grid container spacing={1}>
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
