import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
} from "@material-ui/core";
import { API } from "@mra/utility";
import React, { Fragment } from "react";
import { UseFormReturn } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { GroupContainer } from "../../../components";
import { Email, Form, GroupSelect, Input, Number } from "../../../hook-form";
import { PrimaryButton } from "../../../theme";
import { ApiHelper, REGEX_PHONE_NUMBER, Roles } from "../../../utils";

const source = Object.keys(Roles).map((key) => ({
  key: Roles[key],
  value: `roles.${key.toLowerCase()}`,
})) as SelectProps<string>[];

const AddUser = (props: DialogProps) => {
  const { isOpen, onClose } = props;
  const { t } = useTranslation();

  const onSubmit = async (data) => {
    await API.post(ApiHelper.createUser(), data);
  };

  const renderSubmit = ({
    formState: { isDirty, isValid },
  }: UseFormReturn<any>) => {
    return (
      <Grid item xs={12} justify="flex-end" style={{ display: "flex" }}>
        <Box mr={2}>
          <PrimaryButton color="default" onClick={onClose} label="buttons.cancel"/>
        </Box>
        <PrimaryButton
          color="primary"
          type="submit"
          disabled={!isDirty || !isValid}
          label="buttons.submit"
        />
      </Grid>
    );
  };

  return (
    <Dialog maxWidth="xs" open={isOpen} disableBackdropClick={true}>
      <DialogTitle id="alert-dialog-title">
        {t("account.addUserDialog.title")}
      </DialogTitle>
      <DialogContent>
        <Form
          onSubmit={onSubmit}
          renderSubmit={renderSubmit}
          renderChildren={(form) => (
            <Fragment>
              <Email label="fields.emailAddress" name="email" />
              <Input
                label="fields.phoneNumber"
                name="phoneNumber"
                rules={{
                  pattern: {
                    value: REGEX_PHONE_NUMBER,
                    message: t("errors.invalidPhoneNumber"),
                  },
                }}
              />
              <GroupContainer title="account.addUserDialog.roles">
                <GroupSelect source={source} name="roles" form={form} />
              </GroupContainer>
            </Fragment>
          )}
        />
      </DialogContent>
    </Dialog>
  );
};

export default AddUser;
