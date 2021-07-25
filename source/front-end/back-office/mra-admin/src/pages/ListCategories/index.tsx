import { Box, Grid } from "@material-ui/core";
import sortBy from "lodash/sortBy";
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
    field: "level",
    label: "table.level",
    sort: true,
  },
  {
    field: "parent.name",
    label: "table.parent",
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
        level: 0,
      },
      {
        id: "2",
        name: "category 2",
        level: 1,
        parent: {
          id: "1",
          name: "category 1",
          level: 0,
        },
      },
      {
        id: "3",
        name: "category 3",
        level: 0,
      },
    ],
    totalItems: 3,
  });
  const [stateForm, setStateForm] = useState<DialogStateProps>({
    mode: "Add",
    open: false,
  });

  const onDelete = async (categoryId?: string) => {};

  const onViewDetail = (categoryId?: string) => {
    setStateForm({ open: true, mode: "Update", params: { id: categoryId } });
  };

  const onSearch = async (value: string) => {};

  const onPaging = async (data: PagingProps) => {};

  const onSort = async (options: SortProps) => {
    const { order, orderBy } = options;
    const result =
      order === "asc"
        ? sortBy(data?.data, [orderBy])
        : sortBy(data?.data, [orderBy]).reverse();
    setData({ totalItems: result.length, data: [...result] });
  };

  return (
    <MainContainer title="listCategoryPage.title">
      {data ? (
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <Field.Search
              label="listCategoryPage.searchText"
              onSubmit={() => console.log("")}
            />
          </Grid>
          <Grid container item xs={12} md={7} justifyContent="flex-end">
            <Box mt={{ xs: 2, sm: 0 }}>
              <Button.Primary
                name="addCategory"
                label="listCategoryPage.addCategory"
                onClick={() => setStateForm({ mode: "Add", open: true })}
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
          onClose={() => setStateForm({ ...stateForm, open: false })}
          onSubmit={(data) => console.log("submit", data)}
        />
      )}
    </MainContainer>
  );
};

export default ListCategories;
