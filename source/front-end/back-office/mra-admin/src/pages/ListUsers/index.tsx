import { Grid, Box } from "@material-ui/core";
import { IUser, ListingResponse } from "model";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Field, HeaderProps } from "../../components/atoms";
import { MainContainer } from "../../components/organisms";
import { ListUsers as Users } from "../../components/templates";
import { AccountService } from "../../services";

const headers: HeaderProps[] = [
  {
    field: "email",
    label: "table.email",
    sort: true,
    width: 250,
  },
  {
    field: "isActivate",
    label: "table.isActivate",
    width: 100,
  },
  {
    field: "status",
    label: "table.status",
    width: 250,
  },
  {
    field: "roles",
    label: "table.roles",
    width: 100,
  },
  {
    field: "createdDate",
    label: "table.createdDate",
  },
  {
    field: "action",
    label: "table.action",
  },
];

const ListUsers = () => {
  const [data, setData] = useState<ListingResponse<IUser>>({
    data: [],
    totalItems: 0,
  });
  const history = useHistory();

  const fetchUsers = async () => {
    const users = await AccountService.getUsers();
    setData({ ...data, ...users });
  };

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onDeactivate = async (userId: string) => {
    await AccountService.deactivateUser(userId);
    await fetchUsers();
  };

  const onActivate = async (userId: string) => {
    await AccountService.activateUser(userId);
    await fetchUsers();
  };

  const onDelete = async (userId: string) => {
    await AccountService.deleteUser(userId);
    await fetchUsers();
  };

  const onSearch = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      console.log("on search");
    }
  };

  const navigateAddUserPage = () => history.push("/admin/users/create");

  return (
    <MainContainer title="listUserPage.title">
      <Grid container item xs={12} alignItems="center">
        <Grid item xs={12} md={4}>
          <Field.Search label="Search user" onKeyDown={onSearch} />
        </Grid>
        <Grid item xs={12} container md={8} justifyContent="flex-end">
          <Box mt={{ xs: 2, md: 0 }}>
            <Button.Primary
              label="listUserPage.addUser"
              onClick={navigateAddUserPage}
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box mt={2}>
            <Users
              data={data}
              headers={headers}
              onDeactivate={onDeactivate}
              onActivate={onActivate}
              onDelete={onDelete}
            />
          </Box>
        </Grid>
      </Grid>
    </MainContainer>
  );
};

export default ListUsers;
