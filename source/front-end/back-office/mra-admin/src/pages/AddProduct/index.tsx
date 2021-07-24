import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { toastHelper } from "../../utils";
import { AccountService } from "../../services";
import { ManageProductForm, MainContainer } from "../../components";
import { IUser } from "model";

const AddProduct = () => {
  const history = useHistory();

  const onSubmit = async (data: IUser) => {
    await AccountService.createUser(data);
    toastHelper.success("Create new product success");
    onBackProductList();
  };

  const onBackProductList = () => history.push("/admin/products");

  return (
    <MainContainer title="addProductPage.title">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ManageProductForm onBack={onBackProductList} onSubmit={onSubmit} />
        </Grid>
      </Grid>
    </MainContainer>
  );
};

export default AddProduct;
