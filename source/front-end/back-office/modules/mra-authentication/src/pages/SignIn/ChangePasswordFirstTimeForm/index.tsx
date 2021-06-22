import React, { useCallback, useMemo, useState } from "react";
import ContentForm from "../../../components/ContentForm";
import { Typography } from "@material-ui/core";
import { UseFormReturn } from "react-hook-form";
import { FormFields, PasswordForm } from "../../../components/forms";
import useMatchPassword from "../../../hooks/useMatchPassword";
import { Cognito } from "@mra/utility";
import { useTranslation } from "react-i18next";
import { DefaultPathRedirect } from "../../../utils/constants";
import { PrimaryButton } from "../../../theme";

type MatchProps = () => string | boolean;

const ChangeFirstTimePasswordForm = (props: HandleStepProps<SignInStatus>) => {
  const { t } = useTranslation();
  const [match, setMatch] = useState<MatchProps>();
  const {
    stepObj: {
      data: { user },
    },
    onNavigateStep,
  } = props;

  // const { password, confirmPassword } = getValues();
  // const isMatch = useMatchPassword({
  //   leftPassword: password,
  //   rightPassword: confirmPassword,
  // });

  const changeValues = useCallback((values) => {
    const { password, confirmPassword } = values;
    const isMatch = useMatchPassword({
      leftPassword: password,
      rightPassword: confirmPassword,
    });

    setMatch(isMatch);
  }, []);

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

    history.pushState({}, "", DefaultPathRedirect);
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
    <ContentForm title={t("auth.changePasswordFirstTimeTitle")}>
      <FormFields
        onSubmit={onSubmit}
        controlOptions={{
          render: renderControlSubmit,
        }}
        onValuesChange={changeValues}
      >
        <Typography variant="subtitle1" component="h2">
          {t("auth.changePasswordFirstTimeSubtitle")}
        </Typography>
        <PasswordForm
          label="fields.password"
          name="password"
          rules={{
            validate: {
              matchPassword: () => match(),
            },
          }}
        />
        <PasswordForm
          label="fields.confirmPassword"
          name="confirmPassword"
          // rules={{
          //   validate: {
          //     matchPassword: () => isMatch(),
          //   },
          // }}
        />
      </FormFields>
    </ContentForm>
  );
};

export default ChangeFirstTimePasswordForm;
