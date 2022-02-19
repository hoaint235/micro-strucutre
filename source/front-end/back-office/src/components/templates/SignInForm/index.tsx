import { Grid, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Form from '../../../hook-forms';
import { cognitoService } from '../../../services';
import { Errors, Pages } from '../../../utils';
import { Button } from '../../atoms';
import { DefaultContainer } from '../../organisms';
import { SignInStatus } from '../../../models';
import { Certificate } from '../../../models/accounts';

const useStyles = makeStyles((theme: Theme) => ({
  linkForgotContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  linkForgotText: {
    cursor: 'pointer',
    color: theme.palette.primary.main,
    textDecoration: 'none',
  },
}));

const schema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required(Errors.required)
    .email(Errors.formatEmail),
  password: yup.string().trim().required(Errors.required),
});

const SignInForm = (props: HandleStepProps<SignInStatus>) => {
  const { onNavigateStep } = props;
  const { t } = useTranslation();
  const history = useHistory();
  const classes = useStyles();

  const form = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });
  const { handleSubmit } = form;

  const onSignIn = async (data: Certificate) => {
    const result = await cognitoService.signIn(data.email, data.password);
    const status = result.challengeName;

    if (['NEW_PASSWORD_REQUIRED', 'SMS_MFA'].includes(status)) {
      const changePasswordRequired = status === 'NEW_PASSWORD_REQUIRED';
      onNavigateStep &&
        onNavigateStep({
          status: changePasswordRequired ? 'FIRST_LOGIN' : 'VERIFY_CODE',
          data: {
            user: result,
          },
        });
      return;
    }

    history.push(Pages.MAIN);
  };

  const navigateForgotPasswordPage = (e: React.SyntheticEvent) => {
    e.preventDefault();
    history.push(Pages.FORGOT_PASSWORD);
  };

  return (
    <DefaultContainer title="signInPage.title">
      <form onSubmit={handleSubmit(onSignIn)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Form.Input label="fields.emailAddress" form={form} name="email" />
          </Grid>
          <Grid item xs={12}>
            <Form.Password
              label="fields.password"
              form={form}
              name="password"
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container alignItems="center">
              <Grid item xs={12} className={classes.linkForgotContainer}>
                <a
                  href="/"
                  tabIndex={-1}
                  className={classes.linkForgotText}
                  onMouseDown={navigateForgotPasswordPage} // Use OnMouseDown to call before OnBlur React-Hook-Form called
                >
                  {t('signInPage.forgotPasswordLink')}
                </a>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Button.Primary
              name="submit"
              size="large"
              fullWidth
              type="submit"
              label="buttons.submit"
            />
          </Grid>
        </Grid>
      </form>
    </DefaultContainer>
  );
};

export default SignInForm;
