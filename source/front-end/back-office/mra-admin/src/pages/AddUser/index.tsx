import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { MainContainer } from "../../components/organisms";
import { toastHelper } from "../../utils";
import { AccountService } from "../../services";
import { ManageUserForm } from "../../components/templates";
import { IUser } from "model";

const AddUser = () => {
  const history = useHistory();

  const onSubmit = async (data: IUser) => {
    const payload: IUser = {
      address: { ...data.address },
      isEditAddress: data.isEditAddress,
      roles: data.roles,
      profile: {
        phoneNumber: `${data.profile.countryCode}-${data.profile.phoneNumber}`,
        email: data.profile.email,
        firstName: data.profile.firstName,
        lastName: data.profile.lastName,
      },
    };
    await AccountService.createUser(payload);
    toastHelper.success("Create new user success");
    onBackUserList();
  };

  const onBackUserList = () => history.push("/admin/users");

  return (
    <MainContainer title="addUserPage.title">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ManageUserForm onBack={onBackUserList} onSubmit={onSubmit} />
        </Grid>
      </Grid>
    </MainContainer>
  );
};

export default AddUser;
