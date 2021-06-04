import { Button, Grid, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import ContentForm from "../../../components/commons/ContentForm";
import CheckboxField from "../../../components/controls/CheckboxField";
import { t } from "@mra/utility";
import { EmailForm, PasswordForm } from "../../../components/forms";
import { AuthenService } from "../../../services/account.service";

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

  const onSignIn = async (data: Certificate) => {
    const result = await AuthenService.login(data);

    if (result.status === "NEW_PASSWORD_REQUIRED") {
      props.onNavigateStep({
        status: "FIRST_LOGIN",
        data: {
          email: data.email,
          session: result.session,
        },
      });
      return;
    }

    history.pushState({}, "", "/home");
  };

  return (
    <ContentForm title={t("auth.signInTitle")}>
      <form onSubmit={handleSubmit(onSignIn)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <EmailForm
              control={control}
              errors={errors}
              label={t("fields.emailAddress")}
              name="email"
            />
          </Grid>
          <Grid item xs={12}>
            <PasswordForm
              control={control}
              errors={errors}
              label={t("fields.password")}
              name="password"
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container alignItems="center">
              <Grid item xs={12} md={6}>
                <CheckboxField name={t("fields.rememberMe")} />
              </Grid>
              <Grid item xs={12} md={6} className={classes.linkForgotContainer}>
                <a href="/forgot-password" className={classes.linkForgotText}>
                  {t("auth.forgotPasswordLink")}
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
              // disabled={!isDirty || !isValid}
            >
              {t("buttons.signIn")}
            </Button>
          </Grid>
        </Grid>
      </form>
    </ContentForm>
  );
};

export default SignInForm;
