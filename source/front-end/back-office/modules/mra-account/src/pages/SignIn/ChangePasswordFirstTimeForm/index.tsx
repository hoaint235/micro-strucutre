import React from "react";
import ContentForm from "../../../components/commons/ContentForm";
import { t } from "@mra/utility";
import { Button, Grid, Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { EmailForm, PasswordForm } from "../../../components/forms";
import useMatchPassword from "../../../hooks/useMatchPassword";
import { AuthenService } from "../../../services/account.service";

const ChangeFirstTimePasswordForm = (props: HandleStepProps<SignInStatus>) => {
  const {
    stepObj: {
      data: { email, session },
    },
  } = props;

  const {
    control,
    getValues,
    formState: { errors, isValid, isDirty },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const { password, confirmPassword } = getValues();
  const isMatch = useMatchPassword({
    leftPassword: password,
    rightPassword: confirmPassword,
  });

  const onSubmit = async ({ password, newPassword }) => {
    const payload = {
      session: session,
      certificate: {
        email: email,
        password: password,
      },
    };

    await AuthenService.changePwFirstTime(payload);
    history.pushState({}, "", "/forgot-password");
  };

  return (
    <ContentForm title={t("auth.changePasswordFirstTimeTitle")}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="subtitle1" component="h2">
              {t("auth.changePasswordFirstTimeSubtitle")}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <EmailForm
              disabled
              defaultValue={email}
              control={control}
              errors={errors}
              label={t("fields.emailAddress")}
              name="email"
            />
          </Grid>
          <Grid item xs={12}>
            <PasswordForm
              control={control}
              errors={errors}
              label={t("fields.password")}
              name="password"
              rules={{
                validate: {
                  matchPassword: () => isMatch(),
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <PasswordForm
              control={control}
              errors={errors}
              label={t("fields.confirmPassword")}
              name="confirmPassword"
              rules={{
                validate: {
                  matchPassword: () => isMatch(),
                },
              }}
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
              {t("buttons.submit")}
            </Button>
          </Grid>
        </Grid>
      </form>
    </ContentForm>
  );
};

export default ChangeFirstTimePasswordForm;
