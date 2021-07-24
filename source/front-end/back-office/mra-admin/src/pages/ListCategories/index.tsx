import { Box, Grid } from "@material-ui/core";
import { ListingResponse, ICategory } from "model";
import { useState } from "react";
import { Button, Field, HeaderProps } from "../../components/atoms";
import { PagingProps, SortProps } from "../../components/molecules";
import { MainContainer } from "../../components/organisms";
import {
  SkeletonTemplate,
  ListCategories as Categories,
  ManageCategoryForm,
} from "../../components/templates";

const headers: HeaderProps[] = [
  {
    field: "name",
    label: "table.name",
    sort: true,
  },
  {
    field: "action",
    label: "table.action",
  },
];

const ListCategories = () => {
  const [data, setData] = useState<ListingResponse<ICategory> | null>({
    data: [
      {
        id: "1",
        name: "category 1",
      },
      {
        id: "2",
        name: "category 2",
      },
      {
        id: "3",
        name: "category 3",
      },
    ],
    totalItems: 3,
  });
  const [stateForm, setStateForm] = useState<DialogStateProps<ICategory>>({
    open: false,
  });

  const onDelete = async (categoryId?: string) => {};

  const onViewDetail = (categoryId?: string) => {
    setStateForm({ open: true, params: { id: categoryId } });
  };

  const onSearch = async (value: string) => {};

  const onPaging = async (data: PagingProps) => {};

  const onSort = async (data: SortProps) => {};

  return (
    <MainContainer title="listUserPage.title">
      {data ? (
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Field.Search
              label="Search user"
              onSubmit={() => console.log("")}
            />
          </Grid>
          <Grid item xs={12} container md={8} justifyContent="flex-end">
            <Box mt={{ xs: 2, md: 0 }}>
              <Button.Primary
                name="addUser"
                label="listUserPage.addUser"
                onClick={() => setStateForm({ open: true })}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box mt={2}>
              {data && (
                <Categories
                  data={data}
                  headers={headers}
                  onDelete={onDelete}
                  onViewDetail={onViewDetail}
                  onPaging={onPaging}
                  onSort={onSort}
                />
              )}
            </Box>
          </Grid>
        </Grid>
      ) : (
        <SkeletonTemplate.List />
      )}
      {stateForm.open && (
        <ManageCategoryForm
          state={stateForm}
          onClose={() => setStateForm({ open: false })}
          onSubmit={(data) => console.log("submit", data)}
        />
      )}
    </MainContainer>
  );
};

export default ListCategories;
