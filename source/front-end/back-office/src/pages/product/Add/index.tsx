import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { Pages } from '../../../utils';
import { vendorService, categoryService } from '../../../services';
import { ManageProductForm, MainContainer } from '../../../components';
import { IProduct } from '../../../models/product';

const AddProduct = () => {
  const history = useHistory();

  const onSubmit = async (data: IProduct) => {
    console.log(data);
  };

  const onLoadVendor = async (query: string) => {
    const vendors = await vendorService.loadSuggest(query);
    const result = vendors.map((item: any) => ({
      key: item.id,
      value: item.name,
    })) as SelectionProps[];
    return result;
  };

  const onLoadCategory = async (query: string) => {
    const categories = await categoryService.loadSuggest(query);
    const result = categories.map((item: any) => ({
      key: item.id,
      value: item.name,
    })) as SelectionProps[];
    return result;
  };

  const onBackProductList = () => history.push(Pages.PRODUCT);

  return (
    <MainContainer title="addProductPage.title">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ManageProductForm
            onBack={onBackProductList}
            onSubmit={onSubmit}
            onVendorAsync={onLoadVendor}
            onCategoryAsync={onLoadCategory}
          />
        </Grid>
      </Grid>
    </MainContainer>
  );
};

export default AddProduct;
