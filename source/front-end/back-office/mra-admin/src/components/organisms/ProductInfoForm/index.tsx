import { Card, CardContent, CardHeader, Grid } from "@material-ui/core";
import { UseFormReturn } from "react-hook-form";
import Form from "../../../hook-forms";
import { Typography } from "../../atoms";

const units: SelectionProps[] = [
  {
    key: "1",
    value: "Unit 1",
  },
  {
    key: "2",
    value: "Unit 2",
  },
];

const categories: SelectionProps[] = [
  {
    key: "1",
    value: "Category 1",
  },
  {
    key: "2",
    value: "Category 2",
  },
];

type Props = {
  form: UseFormReturn<any>;
  onVendorAsync: (query: string) => Promise<SelectionProps[]>;
  onCategoryAsync: (query: string) => Promise<SelectionProps[]>;
};

const ProductInfoForm = (props: Props) => {
  const { form, onVendorAsync, onCategoryAsync } = props;

  return (
    <Card>
      <CardHeader
        title={<Typography.Body label="addProductPage.productInfo" />}
      />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Form.Input
              name="name"
              label="fields.name"
              form={form}
              maxLength={100}
            />
          </Grid>
          <Grid item xs={12}>
            <Form.SelectAsynchronous
              name="vendor"
              label="Vendor"
              form={form}
              onLoadAsync={async (query: string) => await onVendorAsync(query)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Form.SingleSelect
              name="unit"
              items={units}
              label="fields.unit"
              form={form}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Form.SelectAsynchronous
              name="category"
              label="fields.category"
              form={form}
              onLoadAsync={async (query: string) =>
                await onCategoryAsync(query)
              }
            />
          </Grid>
          <Grid item xs={12}>
            <Form.Input
              name="description"
              label="fields.description"
              form={form}
              multiline
              rows={4}
              maxLength={200}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ProductInfoForm;
