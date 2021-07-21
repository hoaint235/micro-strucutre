import { Grid } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import Form from "../../../hook-forms";
import { Cognito } from "../../../services";
import { DEFAULT_REDIRECT_URL } from "../../../utils";
import { Typography } from "../../atoms";
import { DefaultContainer } from "../../organisms";

const VerifySMSForm = (props: HandleStepProps<SignInStatus>) => {
  const { t } = useTranslation();
  const history = useHistory();
  const { stepObj } = props;
  const form = useForm({
    mode: "onBlur",
  });
  const { handleSubmit } = form;

  const onSubmit = async ({ otpCode = "" }) => {
    const user = stepObj?.data.user;
    await Cognito.confirmMFACode(user, otpCode);
    history.push(DEFAULT_REDIRECT_URL);
  };

  return (
    <DefaultContainer title="verifyOtpCodePage.title">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography.Subtitle
              label={t("verifyOtpCodePage.subtitle")}
              style={{ textAlign: "center" }}
            />
          </Grid>
          <Grid item xs={12}>
            <Form.Input form={form} label="fields.otpCode" name="otpCode" />
          </Grid>
        </Grid>
      </form>
    </DefaultContainer>
  );
};

export default VerifySMSForm;
