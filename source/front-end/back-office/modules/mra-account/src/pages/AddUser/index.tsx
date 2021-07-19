import { Box, Grid, MButton } from "@mra/theme";
import React from "react";
import { useTranslation } from "react-i18next";
import { MainContainer } from "../../components";
import { useHistory } from "react-router-dom";
import FormInfo from "./FormInfo";
import FormAddress from "./FormAddress";
import { useForm } from "react-hook-form";
import { ApiHelper } from "../../utils";
import { API, toastHelper } from "@mra/utility";

export type FormData = {
  email: string;
  firstName: string;
  lastName: string;
  countryCode: string;
  phoneNumber: string;
  roles: string[];
  isEditAddress?: boolean;
  houseNumber?: string;
  district?: string;
  city?: string;
};

const AddUser = () => {
  const { t } = useTranslation();
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

    await API.post(ApiHelper.createUser(), { ...payload });
    toastHelper.success("Create new user success");
    history.push("/users");
  };

  return (
    <MainContainer title="account.addUserPage.title">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2} justify="center">
              <Grid item xs={12} md={6}>
                <FormInfo form={form} />
              </Grid>

              <Grid item xs={12} md={6}>
                <FormAddress form={form} />
              </Grid>

              <Grid item xs={12} justify="flex-end" style={{ display: "flex" }}>
                <Box mr={2}>
                  <MButton.Default
                    onClick={() => history.push("/users")}
                    label={t("buttons.cancel")}
                  />
                </Box>
                <MButton.Primary
                  type="submit"
                  disabled={!isDirty || !isValid}
                  label={t("buttons.submit")}
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
