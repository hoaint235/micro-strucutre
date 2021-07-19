import {
  Grid,
  AccordionDetails,
  Accordion,
  AccordionSummary,
  makeStyles,
} from "@mra/theme";
import React, { useCallback } from "react";
import { UseFormReturn } from "react-hook-form";
import { Email, Input, MultipleSelect, SingleSelect } from "../../hook-form";
import { Roles } from "../../utils";
import { useTranslation } from "react-i18next";
import { useGetCurrentUserRoles } from "../../hooks";
import { countries, REGEX_PHONE_NUMBER } from "../../utils";

type Props = {
  form: UseFormReturn<any>;
};

const useCountryStyles = makeStyles({
  paper: {
    maxHeight: 400,
  },
});

const FormInfo = (props: Props) => {
  const { form } = props;
  const { t } = useTranslation();
  const { roles } = useGetCurrentUserRoles();
  const countryClasses = useCountryStyles();

  const getRoles = useCallback(() => {
    const result = Object.keys(Roles)
      .filter((x) => x !== "Master")
      .map((key) => ({
        key: Roles[key].toLowerCase(),
        value: t(`roles.${key.toLowerCase()}`),
      }))
      .filter((x) => roles.includes(x.key));
    return result;
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
            <Input
              label={t("fields.firstName")}
              name="firstName"
              maxLength={50}
              form={form}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              label={t("fields.lastName")}
              name="lastName"
              maxLength={50}
              form={form}
            />
          </Grid>
          <Grid item xs={12}>
            <Email
              label={t("fields.emailAddress")}
              name="email"
              maxLength={100}
              form={form}
            />
          </Grid>
          <Grid item xs={12}>
            <MultipleSelect
              form={form}
              items={getRoles()}
              name="roles"
              label={t("account.addUserPage.roles")}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <SingleSelect
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
                <Input
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

export default FormInfo;
