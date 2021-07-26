import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  makeStyles,
} from "@material-ui/core";
import { UseFormReturn } from "react-hook-form";
import Form from "../../../hook-forms";
import { countries } from "../../../utils";
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

const VendorInfoForm = (props: Props) => {
  const { form, editMode } = props;
  const countryClasses = useCountryStyles();

  const getCountries = () => {
    return countries.map((item) => ({
      key: item.portalCode,
      value: `${item.portalCode} (${item.countryName})`,
    }));
  };

  return (
    <Card>
      <CardHeader
        title={<Typography.Body label="addUserPage.accountTitle" />}
      />
      <CardContent>
        <Grid container spacing={2}>
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
                  items={getCountries()}
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
        </Grid>
      </CardContent>
    </Card>
  );
};

export default VendorInfoForm;
