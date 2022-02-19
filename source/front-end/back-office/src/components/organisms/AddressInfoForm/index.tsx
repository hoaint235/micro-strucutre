import { Grid } from '@material-ui/core';
import { useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import Form from '@hook-forms';
import { Card } from '@molecules';

type Props = {
  form: UseFormReturn<any>;
};

const AddressInfoForm = (props: Props) => {
  const { form } = props;
  const [isEntering, setIsEntering] = useState(false);

  const handleExpand = () => {
    setIsEntering(!isEntering);
  };

  return (
    <Card
      title={
        <Form.Switch
          name="isEditAddress"
          form={form}
          onChange={handleExpand}
          color="primary"
          label="addUserPage.addressTitle"
        />
      }
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Form.Input
            form={form}
            name="address.houseNumber"
            label="fields.houseNumber"
            disabled={!isEntering}
          />
        </Grid>
        <Grid item xs={12}>
          <Form.Input
            form={form}
            name="address.district"
            label="fields.district"
            disabled={!isEntering}
          />
        </Grid>
        <Grid item xs={12}>
          <Form.Input
            form={form}
            name="address.city"
            label="fields.city"
            disabled={!isEntering}
          />
        </Grid>
      </Grid>
    </Card>
  );
};

export default AddressInfoForm;
