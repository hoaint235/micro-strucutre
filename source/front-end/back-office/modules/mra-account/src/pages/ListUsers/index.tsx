import React from "react";
import MainContainer from "../../components/controls/MainContainer";
import PrimaryButton from "../../components/controls/PrimaryButton";
import { useTranslation } from "react-i18next";
import TableUsers from "./TableUsers";
import { useHistory } from "react-router-dom";

const ListUsers = () => {
  const { t } = useTranslation();
  const history = useHistory();

  const redirectAddUserPage = () => {
    history.push("add-user");
  };

  return (
    <MainContainer
      title="account.listUser.title"
      action={
        <PrimaryButton onClick={redirectAddUserPage}>
          {t("buttons.add")}
        </PrimaryButton>
      }
    >
      <TableUsers />
    </MainContainer>
  );
};

export default ListUsers;
