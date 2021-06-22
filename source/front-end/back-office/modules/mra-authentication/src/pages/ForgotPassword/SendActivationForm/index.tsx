import { Box, Typography } from "@material-ui/core";
import React from "react";
import { Cognito } from "@mra/utility";
import ContentForm from "../../../components/ContentForm";
import { EmailForm } from "../../../components/forms";
import { useTranslation } from "react-i18next";
import FormFields from "../../../components/forms/FormFields";

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
        <FormFields
          onSubmit={onSendActivation}
          controlOptions={{ label: "buttons.sendActivation" }}
        >
          <Typography
            style={{ textAlign: "center" }}
            variant="subtitle1"
            component="h2"
          >
            {t("auth.forgotPasswordSubtitle")}
          </Typography>
          <EmailForm label={t("fields.emailAddress")} name="email" />
        </FormFields>
      </Box>
    </ContentForm>
  );
};

export default SendActivationForm;
