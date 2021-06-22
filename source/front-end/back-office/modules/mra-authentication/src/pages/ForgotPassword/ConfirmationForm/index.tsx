import { Button, Grid, Typography } from "@material-ui/core";
import React, { useCallback, useState } from "react";
import ContentForm from "../../../components/ContentForm";
import { Cognito } from "@mra/utility";
import { FormFields, InputForm, PasswordForm } from "../../../components/forms";
import useMatchPassword from "../../../hooks/useMatchPassword";
import { useTranslation } from "react-i18next";
import { PrimaryButton } from "../../../theme";
import { UseFormReturn } from "react-hook-form";

type MatchProps = () => string | boolean;

const ConfirmationForm = (props: HandleStepProps<ForgotStatus>) => {
  const { t } = useTranslation();
  const [match, setMatch] = useState<MatchProps>();

  const {
    stepObj: {
      data: { email },
    },
  } = props;

  const onConfirmationCode = async (data) => {
    const { confirmationCode: code, password } = data;
    await Cognito.forgotPasswordSubmit(email, code, password);

    history.pushState({}, "", "/sign-in");
  };

  const changeValues = async (values) => {
    const { password, confirmPassword } = values;
    const isMatch = useMatchPassword({
      leftPassword: password,
      rightPassword: confirmPassword,
    });

    await setMatch(isMatch);
  };

  const renderControlSubmit = ({
    formState: { isDirty, isValid },
  }: UseFormReturn<any>) => {
    return (
      <PrimaryButton
        type="submit"
        label="buttons.submit"
        disabled={!isDirty || !isValid}
      />
    );
  };

  return (
    <ContentForm title={t("auth.confirmationCodeTitle")}>
      <FormFields
        onSubmit={onConfirmationCode}
        controlOptions={{ render: renderControlSubmit }}
        onValuesChange={changeValues}
      >
        <Typography
          style={{ textAlign: "center" }}
          variant="subtitle1"
          component="h2"
        >
          {t("auth.confirmationCodeSubtitle")}
        </Typography>
        <InputForm
          defaultValue={email}
          disabled={true}
          label={t("fields.emailAddress")}
          name="email"
        />
        <InputForm
          label={t("fields.confirmationCode")}
          name="confirmationCode"
        />
        <PasswordForm
          label={t("fields.password")}
          name="password"
          rules={{
            validate: {
              matchPassword: match,
            },
          }}
        />
        <PasswordForm
          label={t("fields.confirmPassword")}
          name="confirmPassword"
          rules={{
            validate: {
              matchPassword: match,
            },
          }}
        />
      </FormFields>
    </ContentForm>
  );
};

export default ConfirmationForm;
