import { Box, Grid } from "@material-ui/core";
import { ManageForm } from "form";
import { useForm } from "react-hook-form";
import { Button } from "../../atoms";
import { ProductInfoForm, ProductImagesForm } from "../../organisms";
import * as yup from "yup";
import { Errors } from "../../../utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { IProduct } from "model";

const schema = yup.object().shape({
  name: yup.string().trim().required(Errors.required),
  vendor: yup.object().nullable().required(Errors.required),
  unit: yup.string().required(Errors.required),
  category: yup.string().required(Errors.required),
});

type Props = ManageForm<IProduct> & {
  onVendorAsync: (query: string) => Promise<SelectionProps[]>;
};

const ManageProductForm = (props: Props) => {
  const { onSubmit, onBack, onVendorAsync } = props;
  const form = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      vendor: null,
      unit: "",
      category: "",
      description: "",
    },
  });
  const {
    handleSubmit,
    formState: { isDirty, isValid },
  } = form;

  const preSubmit = (data: any) => {
    const product: IProduct = {
      id: "",
      unit: data.unit,
      name: data.name,
      category: {
        id: data.category,
      },
      description: data.description,
      vendor: data.vendor.key,
    };

    onSubmit(product);
  };

  return (
    <form onSubmit={handleSubmit(preSubmit)}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={6}>
          <ProductInfoForm form={form} onVendorAsync={onVendorAsync} />
        </Grid>

        <Grid item xs={12} md={6}>
          <ProductImagesForm form={form} />
        </Grid>

        <Grid
          item
          xs={12}
          container
          justifyContent="flex-end"
          style={{ display: "flex" }}
        >
          <Box mr={2}>
            <Button.Default onClick={onBack} label="buttons.back" name="back" />
          </Box>
          <Button.Primary
            name="submit"
            type="submit"
            disabled={!isDirty || !isValid}
            label="buttons.submit"
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default ManageProductForm;
