import React from "react";
import ContentForm from "../../../components/commons/ContentForm";
import { Button, Grid, Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { InputForm, PasswordForm } from "../../../components/forms";
import useMatchPassword from "../../../hooks/useMatchPassword";
import { Cognito, t } from "@mra/utility";

const ChangeFirstTimePasswordForm = (props: HandleStepProps<SignInStatus>) => {
  const {
    stepObj: {
      data: { user },
    },
    onNavigateStep,
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

  const onSubmit = async ({ password }) => {
    const result = await Cognito.completeNewPassword(user, password);

    if (result.challengeName && result.challengeName === "SMS_MFA") {
      onNavigateStep({
        status: "VERIFY_CODE",
        data: {
          user: user,
        },
      });
    }

    history.pushState({}, "", "/home");
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
          {/* <Grid item xs={12}>
            <InputForm
              control={control}
              errors={errors}
              label={t("fields.phoneNumber")}
              name="phoneNumber"
            />
          </Grid> */}
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
