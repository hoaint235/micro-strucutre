import { Button, Grid, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import ContentForm from "../../../components/commons/ContentForm";
import { Cognito } from "@mra/utility";
import { EmailForm, PasswordForm } from "../../../components/forms";
import { useTranslation } from "react-i18next";
import { DefaultPathRedirect } from "../../../utils/constants";

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
  const { t } = useTranslation();
  const classes = useStyles();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const onSignIn = async (data: Certificate) => {
    try {
      const result = await Cognito.signIn(data.email, data.password);
      const status = result.challengeName;

      if (["NEW_PASSWORD_REQUIRED", "SMS_MFA"].includes(status)) {
        const changePasswordRequired = status === "NEW_PASSWORD_REQUIRED";
        props.onNavigateStep({
          status: changePasswordRequired ? "FIRST_LOGIN" : "VERIFY_CODE",
          data: {
            user: result,
          },
        });
        return;
      }

      history.pushState({}, "", DefaultPathRedirect);
    } catch (error) {}
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
              requiredRulePassword={false}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container alignItems="center">
              <Grid item xs={12} className={classes.linkForgotContainer}>
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
