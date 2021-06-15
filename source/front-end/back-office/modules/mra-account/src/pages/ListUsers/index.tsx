import React from "react";
import MainContainer from "../../components/controls/MainContainer";
import PrimaryButton from "../../components/controls/PrimaryButton";
import { useTranslation } from "react-i18next";
import TableUsers from "./TableUsers";

const ListUsers = () => {
  const { t } = useTranslation();
  return (
    <MainContainer
      title="account.listUser.title"
      action={<PrimaryButton>{t("buttons.add")}</PrimaryButton>}
    >
      <TableUsers />
    </MainContainer>
  );
};

export default ListUsers;
