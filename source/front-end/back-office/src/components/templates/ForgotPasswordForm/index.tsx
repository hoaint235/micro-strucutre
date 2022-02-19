import { Grid } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import ReCAPTCHA from 'react-google-recaptcha';
import { useState } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Form from '@hook-forms';
import { cognitoService } from '@services';
import { Button, Typography } from '@atoms';
import { DefaultContainer } from '@organisms';
import { Errors } from '@utils';
import { ForgotStatus } from '@models';

const schema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required(Errors.required)
    .email(Errors.formatEmail),
});

const ForgotPasswordForm = (props: HandleStepProps<ForgotStatus>) => {
  const { t } = useTranslation();
  const { onNavigateStep } = props;
  const form = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: yupResolver(schema),
  });
  const [validRecaptcha, setValidRecaptcha] = useState(false);

  const {
    handleSubmit,
    formState: { isValid, isDirty },
  } = form;

  const onSendActivation = async (data: any) => {
    await cognitoService.forgotPassword(data.email);
    onNavigateStep &&
      onNavigateStep({
        status: 'CONFIRMATION_CODE',
        data: {
          email: data.email,
        },
      });
  };

  const onChange = (value: any) => {
    setValidRecaptcha(!!value);
  };

  return (
    <DefaultContainer title="forgotPasswordPage.title">
      <form onSubmit={handleSubmit(onSendActivation)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography.Body label={t('forgotPasswordPage.subtitle')} />
          </Grid>
          <Grid item xs={12}>
            <Form.Input form={form} label="fields.emailAddress" name="email" />
          </Grid>
          <Grid item xs={12}>
            <ReCAPTCHA
              sitekey={`${process.env.REACT_APP_SITE_KEY_RECAPTCHA}`}
              onChange={onChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button.Primary
              size="large"
              name="submit"
              fullWidth
              type="submit"
              disabled={!validRecaptcha || !isValid || !isDirty}
              label={t('buttons.submit')}
            />
          </Grid>
        </Grid>
      </form>
    </DefaultContainer>
  );
};

export default ForgotPasswordForm;
