import { Grid } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import Form from "../../../hook-forms";
import { CognitoService } from "../../../services";
import { Button, Typography } from "../../atoms";
import { DefaultContainer } from "../../organisms";

const ForgotPasswordForm = (props: HandleStepProps<ForgotStatus>) => {
  const { t } = useTranslation();
  const { onNavigateStep } = props;
  const form = useForm({
    mode: "onBlur",
  });

  const { handleSubmit } = form;

  const onSendActivation = async (data: any) => {
    await CognitoService.forgotPassword(data.email);
    onNavigateStep &&
      onNavigateStep({
        status: "CONFIRMATION_CODE",
        data: {
          email: data.email,
        },
      });
  };

  return (
    <DefaultContainer title="forgotPasswordPage.title">
      <form onSubmit={handleSubmit(onSendActivation)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography.Body label={t("forgotPasswordPage.subtitle")} />
          </Grid>
          <Grid item xs={12}>
            <Form.Email form={form} label="fields.emailAddress" name="email" />
          </Grid>
          <Grid item xs={12}>
            <Button.Primary
              size="large"
              fullWidth
              type="submit"
              label={t("buttons.submit")}
            />
          </Grid>
        </Grid>
      </form>
    </DefaultContainer>
  );
};

export default ForgotPasswordForm;
