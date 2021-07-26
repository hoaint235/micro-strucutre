import { Grid } from "@material-ui/core";
import { UseFormReturn } from "react-hook-form";
import Form from "../../../hook-forms";
import { countries } from "../../../utils";
import { Card } from "../../molecules";

type Props = {
  form: UseFormReturn<any>;
};

const VendorInfoForm = (props: Props) => {
  const { form } = props;
  return (
    <Card title="addVendorPage.vendorInfoTitle">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Form.Input
            label="fields.name"
            name="name"
            maxLength={100}
            form={form}
          />
        </Grid>
        <Grid item xs={12}>
          <Form.Input
            label="fields.emailAddress"
            name="profile.email"
            maxLength={100}
            form={form}
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Form.Autocomplete
                name="profile.countryCode"
                form={form}
                items={countries}
                label="fields.countryCode"
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
    </Card>
  );
};

export default VendorInfoForm;
