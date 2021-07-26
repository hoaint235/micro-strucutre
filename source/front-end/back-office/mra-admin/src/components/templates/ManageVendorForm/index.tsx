import { Box, Grid } from "@material-ui/core";
import { ManageForm } from "form";
import { IVendor } from "model";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Form from "../../../hook-forms";
import { Button } from "../../atoms";
import { VendorInfoForm } from "../../organisms";

const ManageVendorForm = (props: ManageForm<IVendor>) => {
  const { onSubmit, onBack, defaultValues } = props;
  const form = useForm<IVendor>({
    mode: "onBlur",
    reValidateMode: "onChange",
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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
