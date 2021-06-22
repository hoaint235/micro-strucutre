import { Grid, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import { Cognito } from "@mra/utility";
import { InputForm, PasswordForm, ContentForm } from "../../../components";
import { useTranslation } from "react-i18next";
import { DefaultPathRedirect } from "../../../utils/constants";
import FormFields from "../../../components/forms/FormFields";
import { useHistory } from "react-router-dom";

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
  const history = useHistory();
  const classes = useStyles();

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

      history.push(DefaultPathRedirect);
    } catch (error) {}
  };

  const navigateForgotPasswordPage = (e) => {
    e.preventDefault();
    history.push("/forgot-password");
  };

  return (
    <ContentForm title={t("auth.signInTitle")}>
      <FormFields
        onSubmit={onSignIn}
        controlOptions={{ label: "buttons.signIn" }}
      >
        <InputForm label={t("fields.emailAddress")} name="email" />
        <PasswordForm
          label={t("fields.password")}
          name="password"
          requiredRulePassword={false}
        />
        <Grid container alignItems="center">
          <Grid item xs={12} className={classes.linkForgotContainer}>
            <a
              href="forgot-password"
              className={classes.linkForgotText}
              onClick={navigateForgotPasswordPage}
            >
              {t("auth.forgotPasswordLink")}
            </a>
          </Grid>
        </Grid>
      </FormFields>
    </ContentForm>
  );
};

export default SignInForm;
