import { Grid, Box } from "@material-ui/core";
import { IUser, ListingRequest, ListingResponse } from "model";
import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { Button, Field, HeaderProps } from "../../components/atoms";
import { PagingProps, SortProps } from "../../components/molecules";
import { MainContainer } from "../../components/organisms";
import {
  ListUsers as Users,
  SkeletonTemplate,
} from "../../components/templates";
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
    label: "table.active",
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
    width: 150,
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
  const [data, setData] = useState<ListingResponse<IUser> | null>(null);
  const history = useHistory();

  const fetchUsers = useCallback(async (request?: ListingRequest) => {
    const defaultRequest = {
      limit: 10,
      offset: 0,
    };
    const payload = { ...defaultRequest, ...request };
    const users = await AccountService.getUsers(payload);
    setData({ ...data, ...users });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const onViewDetail = (userId: string) =>
    history.push(`/admin/users/${userId}`);

  const onSearch = async (value: string) => {
    await fetchUsers({ search: value });
  };

  const onPaging = async (data: PagingProps) => {
    await fetchUsers({ limit: data.limit, offset: data.offset });
  };

  const onSort = async (data: SortProps) => {
    await fetchUsers({
      sorts: [
        {
          direction: data.order,
          field: data.orderBy,
        },
      ],
    });
  };

  const navigateAddUserPage = () => history.push("/admin/users/create");

  return (
    <MainContainer title="listUserPage.title">
      {data ? (
        <Grid container item xs={12} alignItems="center">
          <Grid item xs={12} md={4}>
            <Field.Search label="Search user" onSubmit={onSearch} />
          </Grid>
          <Grid item xs={12} container md={8} justifyContent="flex-end">
            <Box mt={{ xs: 2, md: 0 }}>
              <Button.Primary
                name="addUser"
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
                onViewDetail={onViewDetail}
                onPaging={onPaging}
                onSort={onSort}
              />
            </Box>
          </Grid>
        </Grid>
      ) : (
        <SkeletonTemplate.List />
      )}
    </MainContainer>
  );
};

export default ListUsers;
