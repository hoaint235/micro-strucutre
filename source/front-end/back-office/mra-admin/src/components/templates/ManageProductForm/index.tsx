import { Box, Grid } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { Button } from "../../atoms";

type Props = {
  onBack: () => void;
  onSubmit: (data: any) => void;
};

const ManageProductForm = (props: Props) => {
  const { onSubmit, onBack } = props;
  const form = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
  });
  const {
    handleSubmit,
    formState: { isDirty, isValid },
  } = form;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={6}></Grid>

        <Grid item xs={12} md={6}></Grid>

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
