import { Grid } from "@material-ui/core";
import {
  CheckCircleOutline,
  Delete,
  HighlightOff,
  Visibility,
} from "@material-ui/icons";
import { ListingResponse } from "../../../models";
import { IVendor } from "../../../models/vendors";
import { HeaderProps, Status } from "../../atoms";
import { DataTable, IconButton, SortProps } from "../../molecules";
import { PagingProps } from "../../molecules";

type Props = {
  data: ListingResponse<IVendor>;
  headers: HeaderProps[];
  onActivate: (userId: string) => void;
  onDelete: (userId: string) => void;
  onDeactivate: (userId: string) => void;
  onViewDetail: (userId: string) => void;
  onPaging: (data: PagingProps) => void;
  onSort: (data: SortProps) => void;
};

const ListVendors = (props: Props) => {
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

  const renderAction = (data: IVendor) => {
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

  const renderActive = (data: IVendor) => {
    const { active } = data;
    const text = active ? "statuses.activate" : "statuses.deactivate";
    return <Status label={text} color={active ? "primary" : "secondary"} />;
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
        bodyAction: renderAction,
        bodyActive: renderActive,
      }}
    />
  );
};

export default ListVendors;
