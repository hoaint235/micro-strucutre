import React from "react";
import MainContainer from "../../components/commons/MainContainer";
import TableRoles from "./TableRoles";
import PrimaryButton from "../../components/controls/PrimaryButton";
import { useTranslation } from "react-i18next";

const ListRoles = () => {
  const { t } = useTranslation();
  return (
    <MainContainer
      title="listRoles.title"
      action={
        <PrimaryButton>
          {t('buttons.add')}
        </PrimaryButton>
      }
    >
      <TableRoles />
    </MainContainer>
  );
};

export default ListRoles;
