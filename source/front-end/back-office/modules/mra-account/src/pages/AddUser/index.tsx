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

const AddUser = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const form = useForm({ mode: "onBlur", reValidateMode: "onChange" });
  const {
    handleSubmit,
    formState: { isDirty, isValid },
  } = form;

  const onSubmit = async (data) => {
    const payload: IUser = {
      email: data.email,
      phoneNumber: `${data.countryCode}${data.phoneNumber}`,
      roles: data.roles,
    };
    // await API.post(ApiHelper.createUser(), {...payload});
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
