import React, { Fragment } from "react";
import ContentForm from "../../../components/ContentForm";
import { Grid, MButton, MTypography } from "@mra/theme";
import { UseFormReturn } from "react-hook-form";
import { FormFields, PasswordForm } from "../../../components/forms";
import { API, Cognito } from "@mra/utility";
import { useTranslation } from "react-i18next";
import { DEFAULT_REDIRECT_URL } from "../../../utils/constants";
import { useHistory } from "react-router-dom";

const ChangeFirstTimePasswordForm = (props: HandleStepProps<SignInStatus>) => {
  const { t } = useTranslation();
  const history = useHistory();
  const {
    stepObj: {
      data: { user },
    },
    onNavigateStep,
  } = props;

  // const isMatchPassword = useCallback(({ password, confirmPassword }) => {
  //   return useMatchPassword({
  //     leftPassword: password,
  //     rightPassword: confirmPassword,
  //   });
  // }, []);

  const onSubmit = async ({ password }) => {
    const {
      challengeParam: {
        userAttributes: { email },
      },
    } = user;
    const result = await Cognito.completeNewPassword(user, password);

    if (result.challengeName && result.challengeName === "SMS_MFA") {
      onNavigateStep({
        status: "VERIFY_CODE",
        data: {
          user: user,
        },
      });
    }
    await API.put("/account/users/status", { email: email, status: 2 });
    history.push(DEFAULT_REDIRECT_URL);
  };

  const renderSubmit = ({
    formState: { isDirty, isValid },
  }: UseFormReturn<any>) => {
    return (
      <Grid item xs={12}>
        <MButton.Primary
          fullWidth
          type="submit"
          label={t("buttons.submit")}
          disabled={!isDirty || !isValid}
        />
      </Grid>
    );
  };

  return (
    <ContentForm title="auth.changePasswordFirstTimeTitle">
      <FormFields
        onSubmit={onSubmit}
        renderSubmit={renderSubmit}
        renderChildren={({ getValues }) => {
          return (
            <Fragment>
              <MTypography.Subtitle
                label={t("auth.changePasswordFirstTimeSubtitle")}
              />
              <PasswordForm
                label="fields.password"
                name="password"
                // rules={{
                //   validate: {
                //     matchPassword: isMatchPassword({
                //       password,
                //       confirmPassword,
                //     }),
                //   },
                // }}
              />
              <PasswordForm
                label="fields.confirmPassword"
                name="confirmPassword"
                // rules={{
                //   validate: {
                //     matchPassword: isMatchPassword({
                //       password,
                //       confirmPassword,
                //     }),
                //   },
                // }}
              />
            </Fragment>
          );
        }}
      ></FormFields>
    </ContentForm>
  );
};

export default ChangeFirstTimePasswordForm;
