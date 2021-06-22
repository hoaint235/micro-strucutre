import React from "react";
import { useForm } from "react-hook-form";
import ContentForm from "../../../components/ContentForm";
import { Cognito } from "@mra/utility";
import { Button, Grid, Typography } from "@material-ui/core";
import { InputForm } from "../../../components/forms";
import { useTranslation } from "react-i18next";
import { DefaultPathRedirect } from "../../../utils/constants";

const VerifySMSForm = (props: HandleStepProps<SignInStatus>) => {
  const { t } = useTranslation();

  const {
    stepObj: {
      data: { user },
    },
  } = props;

  const {
    control,
    formState: { errors, isValid, isDirty },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const onSubmit = async ({ otpCode }) => {
    await Cognito.confirmMFACode(user, otpCode);
    history.pushState({}, "", DefaultPathRedirect);
  };

  return (
    <ContentForm title={t("auth.verifyOtpCodeTitle")}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              component="h2"
              style={{ textAlign: "center" }}
            >
              {t("auth.verifyOtpCodeSubtitle")}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <InputForm
              control={control}
              errors={errors}
              label={t("fields.otpCode")}
              name="otpCode"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              // disabled={!isDirty || !isValid}
            >
              {t("buttons.signIn")}
            </Button>
          </Grid>
        </Grid>
      </form>
    </ContentForm>
  );
};

export default VerifySMSForm;
