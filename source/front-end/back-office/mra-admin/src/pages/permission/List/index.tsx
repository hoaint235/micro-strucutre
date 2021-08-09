import { Box, Grid } from "@material-ui/core";
import { Button, MainContainer, TreeView } from "../../../components";
import { usePermission } from "../../../hooks";

const data: TreeItem[] = [
  {
    id: "2",
    label: "Admin",
    nodes: [
      {
        id: "3",
        label: "Read",
      },
      {
        id: "5",
        label: "Write",
      },
    ],
  },
  {
    id: "6",
    label: "User",
    nodes: [
      {
        id: "3",
        label: "Read",
      },
      {
        id: "5",
        label: "Write",
      },
    ],
  },
];

const ListPermission = () => {
  const { hasEdit } = usePermission();
  return (
    <MainContainer title="permissionPage.title">
      <Grid container spacing={2}>
        <Grid item container xs={12}>
          <Grid item xs={8}></Grid>
          {hasEdit && (
            <Grid item xs={4}>
              <Button.Primary name="edit" label="edit" />
            </Grid>
          )}
        </Grid>
        <Grid item xs={12}>
          <Box mt={2}>
            <TreeView data={data} />
          </Box>
        </Grid>
      </Grid>
    </MainContainer>
  );
};

export default ListPermission;
