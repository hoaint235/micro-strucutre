import {
  Grid,
  AccordionDetails,
  Accordion,
  AccordionSummary,
  FormControlLabel,
} from "@mra/theme";
import React, { SyntheticEvent } from "react";
import { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { CheckBox, Input } from "../../hook-form";

type Props = {
  form: UseFormReturn<any>;
};

const FormAddress = (props: Props) => {
  const { form } = props;
  const { t } = useTranslation();
  const [isEntering, setIsEntering] = useState(false);

  const handleExpand = async (event: SyntheticEvent) => {
    event.stopPropagation();
    await setIsEntering(!isEntering);
  };

  return (
    <Accordion expanded={true}>
      <AccordionSummary>
        <FormControlLabel
          onClick={handleExpand}
          control={<CheckBox name="isEditAddress" control={form.control} />}
          label="Address Information"
        />
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Input
              form={form}
              useDefaultRules={false}
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
              useDefaultRules={false}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              form={form}
              name="city"
              label={t("fields.city")}
              disabled={!isEntering}
              useDefaultRules={false}
            />
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default FormAddress;
