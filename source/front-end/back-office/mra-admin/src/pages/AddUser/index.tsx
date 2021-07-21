import { Box, Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button } from "../../components/atoms";
import { IAddress, IProfile, IUser } from "model";
import { MainContainer } from "../../components/organisms";
import { AddressInfoForm, UserInfoForm } from "../../components/templates";
import { toastHelper } from "../../utils";
import { AccountService } from "../../services";

export type FormData = {
  email: string;
  firstName: string;
  lastName: string;
  countryCode: string;
  phoneNumber: string;
  roles: string[];
  isEditAddress: boolean;
  houseNumber?: string;
  district?: string;
  city?: string;
};

const AddUser = () => {
  const history = useHistory();
  const form = useForm<FormData>({
    mode: "onBlur",
    reValidateMode: "onChange",
  });
  const {
    handleSubmit,
    formState: { isDirty, isValid },
  } = form;

  const onSubmit = async (data: FormData) => {
    const profile: IProfile = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phoneNumber: `${data.countryCode}${data.phoneNumber}`,
    };

    let address: IAddress = {};
    if (data.isEditAddress) {
      address = {
        city: data.city,
        houseNumber: data.houseNumber,
        district: data.district,
      };
    }

    const payload: IUser = {
      roles: data.roles,
      profile: profile,
      address: address,
      isEditAddress: data.isEditAddress,
    };

    await AccountService.createUser(payload);
    toastHelper.success("Create new user success");
    history.push("/admin/users");
  };

  return (
    <MainContainer title="account.addUserPage.title">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} md={6}>
                <UserInfoForm form={form} />
              </Grid>

              <Grid item xs={12} md={6}>
                <AddressInfoForm form={form} />
              </Grid>

              <Grid
                item
                xs={12}
                container
                justifyContent="flex-end"
                style={{ display: "flex" }}
              >
                <Box mr={2}>
                  <Button.Default
                    onClick={() => history.push("/users")}
                    label="buttons.cancel"
                  />
                </Box>
                <Button.Primary
                  type="submit"
                  disabled={!isDirty || !isValid}
                  label="buttons.submit"
                />
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </MainContainer>
  );
};

export default AddUser;
