import { Grid } from "@material-ui/core";
import React from "react";
import { DynamicTable } from "@controls";
import { HeaderProps } from "../../../components/controls/DynamicTableHeader/DynamicTableHeader.type";
import useListRole from "../../../hooks/useListRole";
import { useTranslation } from "react-i18next";
import SecondaryButton from "../../../components/controls/SecondaryButton";
import PrimaryButton from "../../../components/controls/PrimaryButton";

const headers: HeaderProps[] = [
  {
    id: "name",
    label: "table.name",
    sort: true,
  },
  {
    id: "description",
    label: "table.description",
    sort: true,
  },
  {
    id: "action",
    label: "table.action",
  },
];

const TableRoles = () => {
  const { t } = useTranslation();
  const { data } = useListRole();

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

  return (
    <DynamicTable
      keyRow="id"
      defaultOrderBy="name"
      defaultOrder="asc"
      source={data}
      headers={headers}
      totalItems={data.length}
      bodyTemplate={{ bodyAction: renderAction }}
    ></DynamicTable>
  );
};

export default TableRoles;
