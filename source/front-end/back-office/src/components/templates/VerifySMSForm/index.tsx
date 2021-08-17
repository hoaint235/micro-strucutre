import { Grid } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Form from '../../../hook-forms';
import { SignInStatus } from '../../../models';
import { cognitoService } from '../../../services';
import { Pages } from '../../../utils';
import { Typography } from '../../atoms';
import { DefaultContainer } from '../../organisms';

const VerifySMSForm = (props: HandleStepProps<SignInStatus>) => {
  const history = useHistory();
  const { stepObj } = props;
  const form = useForm({
    mode: 'onBlur',
  });
  const { handleSubmit } = form;

  const onSubmit = async ({ otpCode = '' }) => {
    const user = stepObj?.data?.user;
    await cognitoService.confirmMFACode(user, otpCode);
    history.push(Pages.DEFAULT);
  };

  return (
    <DefaultContainer title="verifyOtpCodePage.title">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography.Subtitle
              label="verifyOtpCodePage.subtitle"
              style={{ textAlign: 'center' }}
            />
          </Grid>
          <Grid item xs={12}>
            <Form.Input form={form} label="fields.otpCode" name="otpCode" />
          </Grid>
        </Grid>
      </form>
    </DefaultContainer>
  );
};

export default VerifySMSForm;
