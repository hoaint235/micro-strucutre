import { Box, Grid } from "@material-ui/core";
import { ManageForm } from "form";
import { IVendor } from "model";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../atoms";
import { VendorInfoForm } from "../../organisms";

const defaultData = {
  name: "",
  address: {
    city: "",
    district: "",
    houseNumber: "",
  },
  profile: {
    countryCode: null,
    email: "",
    phoneNumber: "",
  },
};

const ManageVendorForm = (props: ManageForm<IVendor | any>) => {
  const { onSubmit, onBack, defaultValues } = props;
  const form = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: defaultData,
  });

  const {
    handleSubmit,
    reset,
    formState: { isDirty, isValid },
  } = form;

  useEffect(() => {
    if (defaultValues) {
      reset({ ...defaultValues });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const preSubmit = (data: any) => {
    const {
      profile: { countryCode, ...restProfile },
      ...restData
    } = data;
    const vendor: IVendor = {
      ...{ ...restData },
      profile: {
        countryCode: countryCode.key,
        ...restProfile,
      },
    };
    onSubmit(vendor);
  };

  return (
    <form onSubmit={handleSubmit(preSubmit)}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={6}>
          <VendorInfoForm form={form} />
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

export default ManageVendorForm;
