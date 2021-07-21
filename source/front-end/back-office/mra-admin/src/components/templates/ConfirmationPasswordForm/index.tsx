import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Button, Typography } from "../../atoms";
import Form from "../../../hook-forms";
import { DefaultContainer } from "../../organisms";
import { Grid } from "@material-ui/core";
import { CognitoService } from "../../../services";

const ConfirmationForm = (props: HandleStepProps<ForgotStatus>) => {
  const { t } = useTranslation();
  const history = useHistory();
  const form = useForm({
    mode: "onBlur",
  });

  const {
    handleSubmit,
    formState: { isDirty, isValid },
  } = form;

  const { stepObj } = props;
  const email = stepObj?.data?.email;

  const onConfirmationCode = async (data: any) => {
    const { confirmationCode: code, password } = data;
    await CognitoService.forgotPasswordSubmit(email, code, password);

    history.push("/sign-in");
  };

  return (
    <DefaultContainer title="confirmationPasswordPage.title">
      <form onSubmit={handleSubmit(onConfirmationCode)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography.Body
              style={{ textAlign: "center" }}
              label="confirmationPasswordPage.subtitle"
            />
          </Grid>
          <Grid item xs={12}>
            <Form.Input
              form={form}
              defaultValue={email}
              disabled={true}
              label="fields.emailAddress"
              name="email"
            />
          </Grid>
          <Grid item xs={12}>
            <Form.Input
              form={form}
              label="fields.confirmationCode"
              name="confirmationCode"
            />
          </Grid>
          <Grid item xs={12}>
            <Form.Password
              form={form}
              label="fields.password"
              name="password"
            />
          </Grid>
          <Grid item xs={12}>
            <Form.Password
              form={form}
              label="fields.confirmPassword"
              name="confirmPassword"
            />
          </Grid>
          <Grid item xs={12}>
            <Button.Primary
              fullWidth
              size="large"
              type="submit"
              label={t("buttons.submit")}
              disabled={!isDirty || !isValid}
            />
          </Grid>
        </Grid>
      </form>
    </DefaultContainer>
  );
};

export default ConfirmationForm;
