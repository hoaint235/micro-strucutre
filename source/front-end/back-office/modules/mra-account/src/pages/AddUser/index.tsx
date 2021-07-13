import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  MButton,
  MSelect,
} from "@mra/theme";
import { API } from "@mra/utility";
import React, { Fragment, useCallback } from "react";
import { UseFormReturn } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { MainContainer } from "../../components";
import { Email, Form, Input } from "../../hook-form";
import { ApiHelper, REGEX_PHONE_NUMBER, Roles } from "../../utils";
import { useGetCurrentUserRoles } from "../../hooks";
import { useHistory } from "react-router-dom";
import MultipleSelect from "../../hook-form/MultipleSelect";

const AddUser = () => {
  const { t } = useTranslation();
  const { roles } = useGetCurrentUserRoles();
  const history = useHistory();

  const getSource = useCallback(() => {
    const result = Object.keys(Roles)
      .filter((x) => x !== "Master")
      .map((key) => ({
        key: Roles[key].toLowerCase(),
        value: t(`roles.${key.toLowerCase()}`),
      }))
      .filter((x) => roles.includes(x.key));
    return result;
  }, [roles, t]);

  const onSubmit = async (data) => {
    await API.post(ApiHelper.createUser(), data);
  };

  const renderSubmit = ({
    formState: { isDirty, isValid },
  }: UseFormReturn<any>) => {
    return (
      <Grid item xs={12} justify="flex-end" style={{ display: "flex" }}>
        <Box mr={2}>
          <MButton.Default
            onClick={() => history.push("/users")}
            label={t("buttons.cancel")}
            size="large"
          />
        </Box>
        <MButton.Primary
          type="submit"
          size="large"
          disabled={!isDirty || !isValid}
          label={t("buttons.submit")}
        />
      </Grid>
    );
  };

  return (
    <MainContainer title="account.addUserPage.title">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Form
            onSubmit={onSubmit}
            renderSubmit={renderSubmit}
            renderChildren={(form) => (
              <Fragment>
                <Email label={t("fields.emailAddress")} name="email" />
                <Input
                  label={t("fields.phoneNumber")}
                  name="phoneNumber"
                  rules={{
                    pattern: {
                      value: REGEX_PHONE_NUMBER,
                      message: t("errors.invalidPhoneNumber"),
                    },
                  }}
                />
                <MultipleSelect
                  items={getSource()}
                  name="roles"
                  label={t("account.addUserPage.roles")}
                />
                {/* <GroupContainer title="account.addUserPage.roles">
                  <GroupSelect source={getSource()} name="roles" form={form} />
                </GroupContainer> */}
              </Fragment>
            )}
          />
        </Grid>
      </Grid>
    </MainContainer>
  );
};

export default AddUser;
