import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  makeStyles,
} from "@material-ui/core";
import { useCallback, useEffect, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { useTranslation } from "react-i18next";
import Form from "../../../hook-forms";
import { AccountService } from "../../../services";
import { countries, REGEX_PHONE_NUMBER, Roles } from "../../../utils";

type Props = {
  form: UseFormReturn<any>;
};

const useCountryStyles = makeStyles({
  paper: {
    maxHeight: 400,
  },
});

const UserInfoForm = (props: Props) => {
  const { form } = props;
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

  const getCountries = () => {
    return countries.map((item) => ({
      key: item.portalCode,
      value: `${item.portalCode} (${item.countryName})`,
    }));
  };

  return (
    <Accordion expanded={true}>
      <AccordionSummary>
        {t("account.addUserPage.accountTitle")}
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Form.Input
              label={t("fields.firstName")}
              name="firstName"
              maxLength={50}
              form={form}
            />
          </Grid>
          <Grid item xs={12}>
            <Form.Input
              label={t("fields.lastName")}
              name="lastName"
              maxLength={50}
              form={form}
            />
          </Grid>
          <Grid item xs={12}>
            <Form.Email
              label={t("fields.emailAddress")}
              name="email"
              maxLength={100}
              form={form}
            />
          </Grid>
          <Grid item xs={12}>
            <Form.MultipleSelect
              form={form}
              items={getRoles()}
              name="roles"
              label={t("account.addUserPage.roles")}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Form.SingleSelect
                  items={getCountries()}
                  form={form}
                  name="countryCode"
                  label={t("fields.countryCode")}
                  SelectProps={{
                    MenuProps: { classes: { ...countryClasses } },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Form.Input
                  form={form}
                  name="phoneNumber"
                  label={t("fields.phoneNumber")}
                  rules={{
                    pattern: {
                      value: REGEX_PHONE_NUMBER,
                      message: t("errors.invalidPhoneNumber"),
                    },
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default UserInfoForm;
