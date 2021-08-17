import { Box, Grid } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Errors, Pages, Regex } from '../../../utils';
import { DefaultContainer } from '../../organisms';
import { accountService, cognitoService } from '../../../services';
import { Button, Typography } from '../../atoms';
import Form from '../../../hook-forms';
import { SignInStatus } from '../../../models';

const schema = yup.object().shape({
  password: yup
    .string()
    .trim()
    .required(Errors.required)
    .matches(Regex.password, Errors.formatPassword),
  confirmPassword: yup
    .string()
    .trim()
    .required(Errors.required)
    .matches(Regex.password, Errors.formatPassword)
    .oneOf([yup.ref('password'), null], Errors.matchingPassword),
});

const ChangePasswordFirstTimeForm = (props: HandleStepProps<SignInStatus>) => {
  const history = useHistory();
  const { stepObj, onNavigateStep } = props;

  const form = useForm({
    mode: 'onBlur',
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
    resolver: yupResolver(schema),
  });
  const {
    handleSubmit,
    formState: { isDirty, isValid },
  } = form;

  const onSubmit = async ({ password = '' }) => {
    const user = stepObj?.data?.user;

    const {
      challengeParam: {
        userAttributes: { email },
      },
    } = user;
    const result = await cognitoService.completeNewPassword(user, password);

    if (result.challengeName && result.challengeName === 'SMS_MFA') {
      onNavigateStep &&
        onNavigateStep({
          status: 'VERIFY_CODE',
          data: {
            user,
          },
        });
    }

    await accountService.updateStatus(email, 2);
    history.push(Pages.DEFAULT);
  };

  return (
    <DefaultContainer title="changePasswordFirstTimePage.title">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box mb={2}>
              <Typography.Body label="changePasswordFirstTimePage.subtitle" />
            </Box>
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
              name="submit"
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
