import { Grid } from "@material-ui/core";
import { IVendor } from "model";
import { useHistory } from "react-router-dom";
import { MainContainer, ManageVendorForm } from "../../components";
import { VendorService } from "../../services";
import { toastHelper } from "../../utils";

const AddVendor = () => {
  const history = useHistory();

  const onSubmit = async (data: IVendor) => {
    await VendorService.createVendor(data);
    toastHelper.success("Create new user success");
    onBackVendorList();
  };

  const onBackVendorList = () => history.push("/admin/vendors");

  return (
    <MainContainer title="addUserPage.title">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ManageVendorForm onBack={onBackVendorList} onSubmit={onSubmit} />
        </Grid>
      </Grid>
    </MainContainer>
  );
};

export default AddVendor;
