import React from "react";
import ContentForm from "../../../components/ContentForm";
import { Cognito } from "@mra/utility";
import { Grid, Typography } from "@material-ui/core";
import { FormFields, InputForm } from "../../../components/forms";
import { useTranslation } from "react-i18next";
import { DEFAULT_REDIRECT_URL } from "../../../utils/constants";
import { useHistory } from "react-router-dom";
import { PrimaryButton } from "../../../theme";

const VerifySMSForm = (props: HandleStepProps<SignInStatus>) => {
  const { t } = useTranslation();
  const history = useHistory();
  const {
    stepObj: {
      data: { user },
    },
  } = props;

  const onSubmit = async ({ otpCode }) => {
    await Cognito.confirmMFACode(user, otpCode);
    history.push(DEFAULT_REDIRECT_URL);
  };

  const renderSubmit = () => {
    return <PrimaryButton type="submit" label="buttons.submit" />;
  };

  return (
    <ContentForm title={t("auth.verifyOtpCodeTitle")}>
      <FormFields onSubmit={onSubmit} renderSubmit={renderSubmit}>
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
            <InputForm label={t("fields.otpCode")} name="otpCode" />
          </Grid>
        </Grid>
      </FormFields>
    </ContentForm>
  );
};

export default VerifySMSForm;
