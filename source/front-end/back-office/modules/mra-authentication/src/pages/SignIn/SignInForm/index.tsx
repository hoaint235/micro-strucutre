import { Grid, makeStyles, Theme, MButton } from "@mra/theme";
import React from "react";
import { Cognito } from "@mra/utility";
import { PasswordForm, ContentForm, EmailForm } from "../../../components";
import { useTranslation } from "react-i18next";
import { DEFAULT_REDIRECT_URL } from "../../../utils/constants";
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

    history.push(DEFAULT_REDIRECT_URL);
  };

  const navigateForgotPasswordPage = (e) => {
    e.preventDefault();
    history.push("forgot-password");
  };

  return (
    <ContentForm title="auth.signInTitle">
      <FormFields onSubmit={onSignIn}>
        <EmailForm label="fields.emailAddress" name="email" />
        <PasswordForm
          label="fields.password"
          name="password"
          requiredRulePassword={false}
        />
        <Grid container alignItems="center">
          <Grid item xs={12} className={classes.linkForgotContainer}>
            <a
              href="/"
              tabIndex={-1}
              className={classes.linkForgotText}
              onMouseDown={navigateForgotPasswordPage} // Use OnMouseDown to call before OnBlur React-Hook-Form called
            >
              {t("auth.forgotPasswordLink")}
            </a>
          </Grid>
        </Grid>
        <MButton.Primary fullWidth type="submit" label={t("buttons.submit")} />
      </FormFields>
    </ContentForm>
  );
};

export default SignInForm;
