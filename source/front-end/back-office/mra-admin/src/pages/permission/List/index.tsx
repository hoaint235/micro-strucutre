import { Box, Grid } from "@material-ui/core";
import { MainContainer, TreeView } from "../../../components";

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
  return (
    <MainContainer title="permissionPage.title">
      <Grid container spacing={2}>
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
