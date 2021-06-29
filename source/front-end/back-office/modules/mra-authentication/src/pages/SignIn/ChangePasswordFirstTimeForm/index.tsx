import React, { Fragment } from "react";
import ContentForm from "../../../components/ContentForm";
import { Grid, Typography } from "@material-ui/core";
import { UseFormReturn } from "react-hook-form";
import { FormFields, PasswordForm } from "../../../components/forms";
import useMatchPassword from "../../../hooks/useMatchPassword";
import { API, Cognito } from "@mra/utility";
import { useTranslation } from "react-i18next";
import { DEFAULT_REDIRECT_URL } from "../../../utils/constants";
import { PrimaryButton } from "../../../theme";
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
  console.log(user);
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
        <PrimaryButton
          type="submit"
          label="buttons.submit"
          disabled={!isDirty || !isValid}
        />
      </Grid>
    );
  };

  return (
    <ContentForm title={t("auth.changePasswordFirstTimeTitle")}>
      <FormFields
        onSubmit={onSubmit}
        renderSubmit={renderSubmit}
        renderChildren={({ getValues }) => {
          const { password, confirmPassword } = getValues();
          const isMatchPassword = useMatchPassword({
            leftPassword: password,
            rightPassword: confirmPassword,
          });

          return (
            <Fragment>
              <Typography variant="subtitle1" component="h2">
                {t("auth.changePasswordFirstTimeSubtitle")}
              </Typography>
              <PasswordForm
                label="fields.password"
                name="password"
                rules={{
                  validate: {
                    matchPassword: () => isMatchPassword(),
                  },
                }}
              />
              <PasswordForm
                label="fields.confirmPassword"
                name="confirmPassword"
                rules={{
                  validate: {
                    matchPassword: () => isMatchPassword(),
                  },
                }}
              />
            </Fragment>
          );
        }}
      ></FormFields>
    </ContentForm>
  );
};

export default ChangeFirstTimePasswordForm;
