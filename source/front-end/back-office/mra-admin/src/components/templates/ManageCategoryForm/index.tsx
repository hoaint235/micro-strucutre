import { yupResolver } from "@hookform/resolvers/yup";
import {
  Dialog,
  Grid,
  DialogContent,
  DialogTitle,
  DialogActions,
  Box,
} from "@material-ui/core";
import { ICategory } from "model";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Form from "../../../hook-forms";
import { Errors } from "../../../utils";
import { Button, Typography } from "../../atoms";

const schema = yup.object().shape({
  name: yup.string().trim().required(Errors.required),
});

const ManageCategoryForm = (props: DialogFormProps<ICategory>) => {
  const {
    state: { open, params = {} },
    onSubmit,
    onClose,
  } = props;
  const form = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const { handleSubmit } = form;

  const fetchCategory = () => {
    const categoryId = params?.categoryId;
    if (categoryId) {
      // TODO: fetch data
    }
  };

  useEffect(() => {
    fetchCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSave = async (data: ICategory) => {
    await onSubmit(data);
    onClose();
  };

  return (
    <Dialog open={open} maxWidth="xs" fullWidth>
      <DialogTitle>
        <Typography.Body label="Manage Category" />
      </DialogTitle>
      <DialogContent dividers>
        <form id="form" onSubmit={handleSubmit(onSave)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Form.Input form={form} name="name" label="fields.name" />
            </Grid>
          </Grid>
        </form>
      </DialogContent>
      <DialogActions>
        <Box pr={2}>
          <Grid container item justifyContent="flex-end" spacing={2}>
            <Grid item>
              <Button.Default
                name="cancel"
                label="buttons.cancel"
                onClick={onClose}
              />
            </Grid>
            <Grid item>
              <Button.Primary
                name="submit"
                type="submit"
                label="buttons.submit"
                form="form"
              />
            </Grid>
          </Grid>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default ManageCategoryForm;
