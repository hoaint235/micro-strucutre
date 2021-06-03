import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import ContentForm from "../../../components/commons/ContentForm";
import InputForm from "../../../components/forms/InputForm";

const SendActivationForm = (props: HandleStepProps<ForgotStatus>) => {
  const {
    control,
    formState: { errors, isValid, isDirty },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const onSendActivation = (data) => {
    props.onNavigateStep({
      status: "CONFIRMATION_CODE",
    });

    // history.pushState({}, '', '/home');
  };

  return (
    <ContentForm title="Forgot password?">
      <form onSubmit={handleSubmit(onSendActivation)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              style={{ textAlign: "center" }}
              variant="subtitle1"
              component="h2"
            >
              Enter your email address below and we'll send you password reset
              OTP.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <InputForm
              control={control}
              errors={errors}
              defaultValue="hoai.nt235@gmail.com"
              label="Email address"
              name="email"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              disabled={!isValid && !isDirty}
            >
              Send Activation
            </Button>
          </Grid>
        </Grid>
      </form>
    </ContentForm>
  );
};

export default SendActivationForm;
