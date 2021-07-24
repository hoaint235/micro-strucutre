import { Box, Grid } from "@material-ui/core";
import sortBy from "lodash/sortBy";
import { ListingResponse, IProductView } from "model";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Field, HeaderProps } from "../../components/atoms";
import { PagingProps, SortProps } from "../../components/molecules";
import { MainContainer } from "../../components/organisms";
import {
  SkeletonTemplate,
  ListProducts as Products,
} from "../../components/templates";

const headers: HeaderProps[] = [
  {
    field: "name",
    label: "table.name",
    sort: true,
  },
  {
    field: "active",
    label: "table.active",
  },
  {
    field: "category.name",
    label: "table.category",
  },
  {
    field: "unit",
    label: "table.unit",
  },
  {
    field: "retailPrice",
    label: "table.retailPrice",
    align: "right",
    width: 150,
  },
  {
    field: "wholesalePrice",
    label: "table.wholesalePrice",
    align: "right",
    width: 150,
  },
  {
    field: "action",
    label: "table.action",
  },
];

const ListProducts = () => {
  const [data, setData] = useState<ListingResponse<IProductView> | null>({
    data: [
      {
        id: "1",
        name: "product 1",
        active: true,
        category: {
          id: "1",
          name: "category 1",
        },
        retailPrice: 150000,
        wholesalePrice: 100000,
        unit: "cái",
      },
      {
        id: "2",
        name: "product 2",
        active: false,
        category: {
          id: "1",
          name: "category 2",
        },
        retailPrice: 200000,
        wholesalePrice: 100000,
        unit: "thùng",
      },
    ],
    totalItems: 2,
  });
  const history = useHistory();

  const onDelete = async (productId: string) => {};

  const onViewDetail = (productId: string) => {};

  const onDeactivate = (productId: string) => {};

  const onActivate = (productId: string) => {};

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

  const navigateToAddProduct = () => history.push("/admin/products/create");

  return (
    <MainContainer title="listProductPage.title">
      {data ? (
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Field.Search
              label="listProductPage.searchText"
              onSubmit={() => console.log("")}
            />
          </Grid>
          <Grid item xs={12} container md={8} justifyContent="flex-end">
            <Box mt={{ xs: 2, md: 0 }}>
              <Button.Primary
                name="addCategory"
                label="listProductPage.addProduct"
                onClick={navigateToAddProduct}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box mt={2}>
              <Products
                data={data}
                headers={headers}
                onDelete={onDelete}
                onViewDetail={onViewDetail}
                onPaging={onPaging}
                onSort={onSort}
                onDeactivate={onDeactivate}
                onActivate={onActivate}
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

export default ListProducts;
