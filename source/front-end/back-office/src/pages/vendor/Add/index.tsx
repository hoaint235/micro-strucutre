import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { MainContainer, ManageVendorForm } from "../../../components";
import { IVendor } from "../../../models/vendors";
import { vendorService } from "../../../services";
import { Pages, toastHelper } from "../../../utils";

const AddVendor = () => {
  const history = useHistory();

  const onSubmit = async (data: IVendor) => {
    await vendorService.createVendor(data);
    toastHelper.success("Create new vendor success");
    onBackVendorList();
  };

  const onBackVendorList = () => history.push(Pages.VENDOR);

  return (
    <MainContainer title="addVendorPage.title">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ManageVendorForm onBack={onBackVendorList} onSubmit={onSubmit} />
        </Grid>
      </Grid>
    </MainContainer>
  );
};

export default AddVendor;
