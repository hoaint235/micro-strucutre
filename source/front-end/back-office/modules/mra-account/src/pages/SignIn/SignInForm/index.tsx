import { Button, Grid, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import ContentForm from "../../../components/commons/ContentForm";
import CheckboxField from "../../../components/controls/CheckboxField";
import InputForm from "../../../components/forms/InputForm";
import PasswordForm from "../../../components/forms/PasswordForm";
import { API } from "@mra/utility";

const useStyles = makeStyles((theme: Theme) => ({
  linkForgotContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  linkForgotText: {
    cursor: "pointer",
    color: theme.palette.primary.main,
    textDecoration: "none",
  },
}));

const SignInForm = (props: HandleStepProps<SignInStatus>) => {
  const classes = useStyles();
  const {
    control,
    formState: { errors, isValid, isDirty },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const onSignIn = (data: Certificate) => {
    props.onNavigateStep({
      status: "FIRST_LOGIN",
    });

    // history.pushState({}, '', '/home');
  };

  return (
    <ContentForm title="Sign In with email">
      <form onSubmit={handleSubmit(onSignIn)}>
        <Grid container spacing={2}>
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
            <PasswordForm
              control={control}
              errors={errors}
              defaultValue="@Lavender235"
              label="Password"
              name="password"
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container alignItems="center">
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
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              disabled={!isValid && !isDirty}
            >
              Sign In
            </Button>
          </Grid>
        </Grid>
      </form>
    </ContentForm>
  );
};

export default SignInForm;
