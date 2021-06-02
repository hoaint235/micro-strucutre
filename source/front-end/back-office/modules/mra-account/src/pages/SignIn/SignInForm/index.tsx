import { Button, Grid, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import ContentForm from "../../../components/commons/ContentForm";
import CheckboxField from "../../../components/controls/CheckboxField";
import InputForm from "../../../components/forms/InputForm";
import PasswordForm from "../../../components/forms/PasswordForm";

const useStyles = makeStyles((theme: Theme) => ({
  linkForgotContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  linkForgotText: {
    cursor: "pointer",
    color: theme.palette.primary.main,
  },
}));

const SignInForm = () => {
  const classes = useStyles();
  const {
    control,
    formState: { errors, isValid, isDirty },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const onSignIn = (data) => {};

  return (
    <ContentForm title="Sign In with email">
      <form onSubmit={handleSubmit(onSignIn)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <InputForm
              control={control}
              errors={errors}
              label="Email address"
              name="email"
            />
          </Grid>
          <Grid item xs={12}>
            <PasswordForm
              control={control}
              errors={errors}
              label="Password"
              name="password"
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={12} md={6}>
                <CheckboxField />
              </Grid>
              <Grid item xs={12} md={6} className={classes.linkForgotContainer}>
                <a href="/forgot-password" className={classes.linkForgotText}>
                  Forgot password ?
                </a>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth size="large">
              Sign In
            </Button>
          </Grid>
        </Grid>
      </form>
    </ContentForm>
  );
};

export default SignInForm;
