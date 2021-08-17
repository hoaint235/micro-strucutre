import React, { useCallback, useEffect, useState } from 'react';
import { Box, Grid } from '@material-ui/core';
import sortBy from 'lodash/sortBy';
import {
  SkeletonTemplate,
  ListCategories as Categories,
  ManageCategoryForm,
  MainContainer,
  PagingProps,
  SortProps,
  Button,
  Field,
  HeaderProps,
} from '../../../components';
import { ListingRequest, ListingResponse } from '../../../models';
import { ICategory } from '../../../models/category';
import { categoryService } from '../../../services';

const headers: HeaderProps[] = [
  {
    field: 'name',
    label: 'table.name',
    sort: true,
  },
  {
    field: 'level',
    label: 'table.level',
    sort: true,
  },
  {
    field: 'parent.name',
    label: 'table.parent',
    sort: true,
  },
  {
    field: 'action',
    label: 'table.action',
  },
];

const ListCategories = () => {
  const [data, setData] = useState<ListingResponse<ICategory> | null>(null);
  const [stateForm, setStateForm] = useState<DialogStateProps>({
    mode: 'Add',
    open: false,
  });

  const fetchCategories = useCallback(async (request?: ListingRequest) => {
    const defaultRequest = {
      limit: 10,
      offset: 0,
    };
    const payload = { ...defaultRequest, ...request };
    const categories = await categoryService.getCategories(payload);
    setData({ ...data, ...categories });
  }, []);

  useEffect(() => {
    fetchCategories();
  }, []);

  const onDelete = async (categoryId?: string) => {};

  const onViewDetail = (categoryId?: string) => {
    setStateForm({ open: true, mode: 'Update', params: { id: categoryId } });
  };

  // const onSearch = async (value: string) => {};

  const onPaging = async (data: PagingProps) => {
    await fetchCategories({
      limit: data.limit,
      offset: data.offset / data.limit,
    });
  };

  const onSort = async (options: SortProps) => {
    const { order, orderBy } = options;
    const result =
      order === 'asc'
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
              onSubmit={() => console.log('')}
            />
          </Grid>
          <Grid container item xs={12} md={7} justifyContent="flex-end">
            <Button.Primary
              name="addCategory"
              label="listCategoryPage.addCategory"
              onClick={() => setStateForm({ mode: 'Add', open: true })}
            />
          </Grid>
          <Grid item xs={12}>
            <Box mt={{ xs: 0, md: 2 }}>
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
          onSubmit={(data) => console.log('submit', data)}
        />
      )}
    </MainContainer>
  );
};

export default ListCategories;
