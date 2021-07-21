import { Grid } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { DEFAULT_REDIRECT_URL } from "../../../utils/constants";
import { useHistory } from "react-router-dom";
import { DefaultContainer } from "../../organisms";
import { Cognito } from "../../../services";
import { Button, Typography } from "../../atoms";
import Form from "../../../hook-forms";

const ChangePasswordFirstTimeForm = (props: HandleStepProps<SignInStatus>) => {
  const history = useHistory();
  const { stepObj, onNavigateStep } = props;
  const form = useForm();
  const {
    handleSubmit,
    formState: { isDirty, isValid },
  } = form;

  const onSubmit = async ({ password = "" }) => {
    const user = stepObj?.data.user;

    const {
      challengeParam: {
        userAttributes: { email },
      },
    } = user;
    const result = await Cognito.completeNewPassword(user, password);

    if (result.challengeName && result.challengeName === "SMS_MFA") {
      onNavigateStep &&
        onNavigateStep({
          status: "VERIFY_CODE",
          data: {
            user: user,
          },
        });
    }
    // await API.put("/account/users/status", { email: email, status: 2 });
    history.push(DEFAULT_REDIRECT_URL);
  };

  return (
    <DefaultContainer title="changePasswordFirstTimePage.title">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid>
            <Typography.Subtitle label="changePasswordFirstTimePage.subtitle" />
          </Grid>
          <Grid item xs={12}>
            <Form.Password
              form={form}
              name="password"
              label="fields.confirmPassword"
            />
          </Grid>
          <Grid item xs={12}>
            <Form.Password
              form={form}
              name="confirmPassword"
              label="fields.confirmPassword"
            />
          </Grid>
          <Grid item xs={12}>
            <Button.Primary
              fullWidth
              size="large"
              type="submit"
              label="buttons.submit"
              disabled={!isDirty || !isValid}
            />
          </Grid>
        </Grid>
      </form>
    </DefaultContainer>
  );
};

export default ChangePasswordFirstTimeForm;
