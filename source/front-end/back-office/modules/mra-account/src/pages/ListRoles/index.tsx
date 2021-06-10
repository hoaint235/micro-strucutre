import React from "react";
import MainContainer from "../../components/commons/MainContainer";
import { HeaderProps } from "../../components/controls/DynamicTableHeader/DynamicTableHeader.type";
import TableRoles from "./TableRoles";

const ListRoles = () => {
  return (
    <MainContainer title="List Roles">
      <TableRoles />
    </MainContainer>
  );
};

export default ListRoles;
