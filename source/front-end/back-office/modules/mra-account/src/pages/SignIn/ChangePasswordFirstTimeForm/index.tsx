import React from "react";
import ContentForm from "../../../components/commons/ContentForm";
import { t } from "@mra/utility";
import { Button, Grid, Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { PasswordForm } from "../../../components/forms";

const ChangeFirstTimePasswordForm = (props: HandleStepProps<SignInStatus>) => {
  const {
    control,
    formState: { errors, isValid, isDirty },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const onSubmit = (data: Certificate) => {
    history.pushState({}, "", "/sign-in");
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
            <PasswordForm
              control={control}
              errors={errors}
              label={t("fields.password")}
              name="password"
            />
          </Grid>
          <Grid item xs={12}>
            <PasswordForm
              control={control}
              errors={errors}
              label={t("fields.confirmPassword")}
              name="confirmPassword"
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
