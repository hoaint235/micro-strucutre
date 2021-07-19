import {
  Grid,
  AccordionDetails,
  Accordion,
  AccordionSummary,
  FormControlLabel,
  Switch,
  makeStyles,
  Theme,
} from "@mra/theme";
import React from "react";
import { useState } from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Input } from "../../hook-form";

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    maxHeight: theme.spacing(8),
  },
}));

type Props = {
  form: UseFormReturn<any>;
};

const FormAddress = (props: Props) => {
  const { form } = props;
  const { t } = useTranslation();
  const classes = useStyles();
  const [isEntering, setIsEntering] = useState(false);

  const handleExpand = () => {
    setIsEntering(!isEntering);
  };

  return (
    <Accordion expanded={true}>
      <AccordionSummary className={classes.header}>
        <Controller
          name="isEditAddress"
          render={({ field: { ref, onChange, ...props } }) => (
            <FormControlLabel
              control={
                <Switch
                  color="primary"
                  onChange={(e) => {
                    onChange(e);
                    handleExpand();
                  }}
                  {...props}
                  inputRef={ref}
                />
              }
              label={t("account.addUserPage.addressTitle")}
            />
          )}
          control={form.control}
        />
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Input
              form={form}
              useDefaultRules={isEntering}
              name="houseNumber"
              label={t("fields.houseNumber")}
              disabled={!isEntering}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              form={form}
              name="district"
              label={t("fields.district")}
              disabled={!isEntering}
              useDefaultRules={isEntering}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              form={form}
              name="city"
              label={t("fields.city")}
              disabled={!isEntering}
              useDefaultRules={isEntering}
            />
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default FormAddress;
