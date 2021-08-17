import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { Pages, toastHelper } from '../../../utils';
import { accountService } from '../../../services';
import { ManageUserForm, MainContainer } from '../../../components';
import { IUser } from '../../../models/accounts';

const AddUser = () => {
  const history = useHistory();

  const onSubmit = async (data: IUser) => {
    await accountService.createUser(data);
    toastHelper.success('Create new user success');
    onBackUserList();
  };

  const onBackUserList = () => history.push(Pages.USER);

  return (
    <MainContainer title="addVendorPage.title">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ManageUserForm onBack={onBackUserList} onSubmit={onSubmit} />
        </Grid>
      </Grid>
    </MainContainer>
  );
};

export default AddUser;
