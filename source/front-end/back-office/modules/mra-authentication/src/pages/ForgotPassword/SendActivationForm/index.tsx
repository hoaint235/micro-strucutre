import { Box, Typography } from "@material-ui/core";
import React from "react";
import { Cognito } from "@mra/utility";
import ContentForm from "../../../components/ContentForm";
import { EmailForm } from "../../../components/forms";
import { useTranslation } from "react-i18next";
import FormFields from "../../../components/forms/FormFields";
import { UseFormReturn } from "react-hook-form";
import { PrimaryButton } from "../../../theme";

const SendActivationForm = (props: HandleStepProps<ForgotStatus>) => {
  const { t } = useTranslation();

  const onSendActivation = async ({ email }) => {
    await Cognito.forgotPassword(email);

    props.onNavigateStep({
      status: "CONFIRMATION_CODE",
      data: {
        email: email,
      },
    });
  };

  return (
    <ContentForm title={t("auth.forgotPasswordTitle")}>
      <Box mt={4}>
        <FormFields onSubmit={onSendActivation}>
          <Typography
            style={{ textAlign: "center" }}
            variant="subtitle1"
            component="h2"
          >
            {t("auth.forgotPasswordSubtitle")}
          </Typography>
          <EmailForm label="fields.emailAddress" name="email" />
          <PrimaryButton type="submit" label="buttons.submit" />
        </FormFields>
      </Box>
    </ContentForm>
  );
};

export default SendActivationForm;
