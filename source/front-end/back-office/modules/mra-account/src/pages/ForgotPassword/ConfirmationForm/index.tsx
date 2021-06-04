import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import ContentForm from "../../../components/commons/ContentForm";
import { t } from "@mra/utility";
import { InputForm, PasswordForm } from "../../../components/forms";
import { useForm } from "react-hook-form";
import useMatchPassword from "../../../hooks/useMatchPassword";

const ConfirmationForm = () => {
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

  const onConfirmationCode = (data) => {};

  return (
    <ContentForm title={t("auth.confirmationCodeTitle")}>
      <form onSubmit={handleSubmit(onConfirmationCode)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              style={{ textAlign: "center" }}
              variant="subtitle1"
              component="h2"
            >
              {t("auth.confirmationCodeSubtitle")}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <InputForm
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
              // disabled={!isValid && !isDirty}
            >
              {t("buttons.submit")}
            </Button>
          </Grid>
        </Grid>
      </form>
    </ContentForm>
  );
};

export default ConfirmationForm;
