import { Grid } from "@material-ui/core";
import {
  CheckCircleOutline,
  Delete,
  HighlightOff,
  Visibility,
} from "@material-ui/icons";
import { IProduct, ListingResponse } from "model";
import { HeaderProps } from "../../atoms";
import { DataTable, IconButton, SortProps } from "../../molecules";
import { PagingProps } from "../../molecules";

type Props = {
  data: ListingResponse<IProduct>;
  headers: HeaderProps[];
  onActivate: (productId: string) => void;
  onDelete: (productId: string) => void;
  onDeactivate: (productId: string) => void;
  onViewDetail: (productId: string) => void;
  onPaging: (data: PagingProps) => void;
  onSort: (data: SortProps) => void;
};

const ListProducts = (props: Props) => {
  const {
    data,
    headers,
    onActivate,
    onDelete,
    onDeactivate,
    onViewDetail,
    onPaging,
    onSort,
  } = props;

  const renderAction = (data: IProduct) => {
    return (
      <Grid container spacing={1}>
        <Grid item>
          <IconButton.Primary
            icon={Visibility}
            name="edit"
            label="buttons.edit"
            onClick={() => onViewDetail(data.id)}
          />
        </Grid>
        {!data.active && (
          <Grid item>
            <IconButton.Primary
              name="activate"
              icon={CheckCircleOutline}
              label="buttons.activate"
              onClick={() => onActivate(data.id)}
            />
          </Grid>
        )}
        {data.active && (
          <Grid item>
            <IconButton.Secondary
              icon={HighlightOff}
              label="buttons.deactivate"
              name="deactivate"
              onClick={() => onDeactivate(data.id)}
            />
          </Grid>
        )}
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
  };

  return (
    <DataTable
      headers={headers}
      source={data.data}
      totalItems={data.totalItems}
      noResultFound="table.noResultFound"
      onPaging={onPaging}
      onSort={onSort}
      bodyTemplate={{
        bodyAction: renderAction
      }}
    />
  );
};

export default ListProducts;
