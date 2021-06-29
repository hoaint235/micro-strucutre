import { Grid, Typography } from "@material-ui/core";
import React, { Fragment, useCallback } from "react";
import ContentForm from "../../../components/ContentForm";
import { Cognito } from "@mra/utility";
import { FormFields, InputForm, PasswordForm } from "../../../components/forms";
import { useMatchPassword } from "../../../hooks";
import { useTranslation } from "react-i18next";
import { PrimaryButton } from "../../../theme";
import { UseFormReturn } from "react-hook-form";
import { useHistory } from "react-router-dom";

const ConfirmationForm = (props: HandleStepProps<ForgotStatus>) => {
  const { t } = useTranslation();
  const history = useHistory();

  // const isMatchPassword = useCallback(({ password, confirmPassword }) => {
  //   return useMatchPassword({
  //     leftPassword: password,
  //     rightPassword: confirmPassword,
  //   });
  // }, []);

  const {
    stepObj: {
      data: { email },
    },
  } = props;

  const onConfirmationCode = async (data) => {
    const { confirmationCode: code, password } = data;
    await Cognito.forgotPasswordSubmit(email, code, password);

    history.push("sign-in");
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
    <ContentForm title="auth.confirmationCodeTitle">
      <FormFields
        onSubmit={onConfirmationCode}
        renderSubmit={renderSubmit}
        renderChildren={({ getValues }) => {
          // const { password, confirmPassword } = getValues();

          return (
            <Fragment>
              <Typography
                style={{ textAlign: "center" }}
                variant="subtitle1"
                component="h2"
              >
                {t("auth.confirmationCodeSubtitle")}
              </Typography>
              <InputForm
                defaultValue={email}
                disabled={true}
                label="fields.emailAddress"
                name="email"
              />
              <InputForm
                label="fields.confirmationCode"
                name="confirmationCode"
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

export default ConfirmationForm;
