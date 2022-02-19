import { Grid } from '@material-ui/core';
import { Delete, Visibility } from '@material-ui/icons';
import { ListingResponse, ICategory } from '@models';
import { HeaderProps } from '@atoms';
import { DataTable, IconButton, SortProps, PagingProps } from '@molecules';

type Props = {
  data: ListingResponse<ICategory>;
  headers: HeaderProps[];
  onDelete: (userId?: string) => void;
  onViewDetail: (userId?: string) => void;
  onPaging: (data: PagingProps) => void;
  onSort: (data: SortProps) => void;
};

const ListCategories = (props: Props) => {
  const { data, headers, onDelete, onViewDetail, onPaging, onSort } = props;

  const renderAction = (data: ICategory) => (
    <Grid container spacing={1}>
      <Grid item>
        <IconButton.Primary
          icon={Visibility}
          name="edit"
          label="buttons.edit"
          onClick={() => onViewDetail(data.id)}
        />
      </Grid>
      <Grid item>
        <IconButton.Secondary
          icon={Delete}
          name="delete"
          label="buttons.delete"
          onClick={() => onDelete(data.id)}
        />
      </Grid>
    </Grid>
  );

  return (
    <DataTable
      headers={headers}
      source={data.data}
      totalItems={data.totalItems}
      noResultFound="table.noResultFound"
      onPaging={onPaging}
      onSort={onSort}
      bodyTemplate={{
        bodyAction: renderAction,
      }}
    />
  );
};

export default ListCategories;
