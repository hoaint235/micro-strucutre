import { Grid } from '@material-ui/core';
import { UseFormReturn } from 'react-hook-form';
import Form from '../../../hook-forms';
import { Card } from '../../molecules';

type Props = {
  form: UseFormReturn<any>;
};

const VendorAddressForm = (props: Props) => {
  const { form } = props;

  return (
    <Card title="addVendorPage.vendorAddressTitle">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Form.Input
            form={form}
            name="address.houseNumber"
            label="fields.houseNumber"
          />
        </Grid>
        <Grid item xs={12}>
          <Form.Input
            form={form}
            name="address.district"
            label="fields.district"
          />
        </Grid>
        <Grid item xs={12}>
          <Form.Input form={form} name="address.city" label="fields.city" />
        </Grid>
      </Grid>
    </Card>
  );
};

export default VendorAddressForm;
