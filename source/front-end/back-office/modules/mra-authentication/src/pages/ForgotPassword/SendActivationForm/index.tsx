import { MButton, MTypography } from "@mra/theme";
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
    <ContentForm title="auth.forgotPasswordTitle">
      <FormFields onSubmit={onSendActivation}>
        <MTypography.Body label={t("auth.forgotPasswordSubtitle")} />
        <EmailForm label="fields.emailAddress" name="email" />
        <MButton.Primary
          size="large"
          fullWidth
          type="submit"
          label={t("buttons.submit")}
        />
      </FormFields>
    </ContentForm>
  );
};

export default SendActivationForm;
