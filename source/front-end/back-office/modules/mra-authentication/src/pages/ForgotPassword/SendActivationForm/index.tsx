import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import { Cognito } from "@mra/utility";
import ContentForm from "../../../components/commons/ContentForm";
import { EmailForm } from "../../../components/forms";
import { useTranslation } from "react-i18next";

const SendActivationForm = (props: HandleStepProps<ForgotStatus>) => {
  const { t } = useTranslation();
  const {
    control,
    formState: { errors, isValid, isDirty },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const onSendActivation = async ({ email }) => {
    await Cognito.forgotPassword(email);

    props.onNavigateStep({
      status: "CONFIRMATION_CODE",
      data: {
        email: email,
      },
    });

    // history.pushState({}, '', '/home');
  };

  return (
    <ContentForm title={t("forgotPasswordTitle")}>
      <form onSubmit={handleSubmit(onSendActivation)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              style={{ textAlign: "center" }}
              variant="subtitle1"
              component="h2"
            >
              {t("forgotPasswordSubtitle")}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <EmailForm
              control={control}
              errors={errors}
              label={t("fields.emailAddress")}
              name="email"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              disabled={!isValid && !isDirty}
            >
              {t("buttons.sendActivation")}
            </Button>
          </Grid>
        </Grid>
      </form>
    </ContentForm>
  );
};

export default SendActivationForm;
