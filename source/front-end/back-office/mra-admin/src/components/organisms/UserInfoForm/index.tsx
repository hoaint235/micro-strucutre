import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  makeStyles,
} from "@material-ui/core";
import { useCallback, useEffect, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { useTranslation } from "react-i18next";
import Form from "../../../hook-forms";
import { AccountService } from "../../../services";
import { countries, Roles } from "../../../utils";
import { Typography } from "../../atoms";

type Props = {
  form: UseFormReturn<any>;
  editMode?: boolean;
};

const useCountryStyles = makeStyles({
  paper: {
    maxHeight: 400,
  },
});

const UserInfoForm = (props: Props) => {
  const { form, editMode } = props;
  const { t } = useTranslation();
  const countryClasses = useCountryStyles();
  const [roles, setRoles] = useState<string[]>([]);

  const fetchRoles = async () => {
    const response = await AccountService.gerCurrentUserRoles();
    setRoles(response);
  };

  useEffect(() => {
    fetchRoles();
  }, []);

  const getRoles = useCallback(() => {
    const result = Object.keys(Roles)
      .filter((x) => x !== "Master")
      .map((key) => ({
        key: Roles[key].toLowerCase(),
        value: t(`roles.${key.toLowerCase()}`),
      }))
      .filter((x) => roles.includes(x.key));
    return result;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roles, t]);

  return (
    <Card>
      <CardHeader
        title={<Typography.Body label="addUserPage.accountTitle" />}
      />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Form.Input
              label="fields.firstName"
              name="profile.firstName"
              maxLength={50}
              form={form}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Form.Input
              label="fields.lastName"
              name="profile.lastName"
              maxLength={50}
              form={form}
            />
          </Grid>
          <Grid item xs={12}>
            <Form.Input
              label="fields.emailAddress"
              name="profile.email"
              disabled={editMode}
              maxLength={100}
              form={form}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Form.SingleSelect
                  items={countries}
                  form={form}
                  name="profile.countryCode"
                  label="fields.countryCode"
                  SelectProps={{
                    MenuProps: { classes: { ...countryClasses } },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Form.Input
                  form={form}
                  name="profile.phoneNumber"
                  label="fields.phoneNumber"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Form.MultipleSelect
              form={form}
              items={getRoles()}
              name="roles"
              label="addUserPage.roles"
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default UserInfoForm;
