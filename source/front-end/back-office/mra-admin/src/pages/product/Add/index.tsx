import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Pages, toastHelper } from "../../../utils";
import { AccountService, VendorService } from "../../../services";
import { ManageProductForm, MainContainer } from "../../../components";
import { IProduct } from "model";

const AddProduct = () => {
  const history = useHistory();

  const onSubmit = async (data: IProduct) => {
    console.log(data);
    // await AccountService.createUser(data);
    // toastHelper.success("Create new product success");
    // onBackProductList();
  };

  const onLoadVendor = async (query: string) => {
    const vendors = await VendorService.loadSuggest(query);
    const result = vendors.map((item: any) => {
      return {
        key: item.id,
        value: item.name,
      };
    }) as SelectionProps[];
    return result;
  };

  const onBackProductList = () => {
    console.log("back");
    history.push(Pages.PRODUCT);
  };

  return (
    <MainContainer title="addProductPage.title">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ManageProductForm
            onBack={onBackProductList}
            onSubmit={onSubmit}
            onVendorAsync={onLoadVendor}
          />
        </Grid>
      </Grid>
    </MainContainer>
  );
};

export default AddProduct;
