import { Box, Grid } from '@material-ui/core';
import { ManageForm } from 'form';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@atoms';
import { VendorAddressForm, VendorInfoForm } from '@organisms';
import { Errors, Regex } from '@utils';
import { IVendor } from '@models';

const schema = yup.object().shape({
  name: yup.string().trim().required(Errors.required),
  profile: yup.object().shape({
    email: yup.string().email(Errors.formatEmail).required(Errors.required),
    countryCode: yup.object().nullable().required(Errors.required),
    phoneNumber: yup
      .string()
      .trim()
      .required(Errors.required)
      .matches(Regex.phoneNumber, Errors.formatPhoneNumber),
  }),
  address: yup.object().shape({
    city: yup.string().required(Errors.required),
    district: yup.string().required(Errors.required),
    houseNumber: yup.string().required(Errors.required),
  }),
});

const defaultData = {
  name: '',
  address: {
    city: '',
    district: '',
    houseNumber: '',
  },
  profile: {
    countryCode: null,
    email: '',
    phoneNumber: '',
  },
};

const ManageVendorForm = (props: ManageForm<IVendor | any>) => {
  const { onSubmit, onBack, defaultValues } = props;
  const form = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: defaultData,
    resolver: yupResolver(schema),
  });

  const {
    handleSubmit,
    reset,
    formState: { isDirty, isValid },
  } = form;

  useEffect(() => {
    if (defaultValues) {
      reset({ ...defaultValues });
    }
  }, []);

  const preSubmit = (data: any) => {
    const {
      profile: { countryCode, ...restProfile },
      ...restData
    } = data;
    const vendor: IVendor = {
      ...{ ...restData },
      profile: {
        countryCode: countryCode.key,
        ...restProfile,
      },
    };
    onSubmit(vendor);
  };

  return (
    <form onSubmit={handleSubmit(preSubmit)}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={6}>
          <VendorInfoForm form={form} />
        </Grid>

        <Grid item xs={12} md={6}>
          <VendorAddressForm form={form} />
        </Grid>

        <Grid
          item
          xs={12}
          container
          justifyContent="flex-end"
          style={{ display: 'flex' }}
        >
          <Box mr={2}>
            <Button.Default onClick={onBack} label="buttons.back" name="back" />
          </Box>
          <Button.Primary
            name="submit"
            type="submit"
            disabled={!isDirty || !isValid}
            label="buttons.submit"
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default ManageVendorForm;
