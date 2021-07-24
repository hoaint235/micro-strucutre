import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Box, Grid } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { AddressInfoForm, UserInfoForm } from "../index";
import { Button } from "../../atoms";
import { IUser } from "model";
import { Errors, Regex } from "../../../utils";
import { useEffect, useState } from "react";

const schema = yup.object().shape({
  profile: yup.object().shape({
    email: yup.string().email(Errors.formatEmail).required(Errors.required),
    firstName: yup.string().trim().required(Errors.required),
    lastName: yup.string().trim().required(Errors.required),
    countryCode: yup.string().trim().required(Errors.required),
    phoneNumber: yup
      .string()
      .trim()
      .required(Errors.required)
      .matches(Regex.phoneNumber, Errors.formatPhoneNumber),
  }),
  roles: yup.array().min(1, Errors.required),
  address: yup.object().when("isEditAddress", {
    is: true,
    then: yup.object({
      city: yup.string().required(Errors.required),
      district: yup.string().required(Errors.required),
      houseNumber: yup.string().required(Errors.required),
    }),
  }),
});

const defaultData: IUser = {
  isEditAddress: false,
  profile: {
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    countryCode: "",
  },
  roles: [],
  address: {
    city: "",
    district: "",
    houseNumber: "",
  },
};

type Props = {
  defaultUser?: IUser;
  onBack: () => void;
  onSubmit: (data: IUser) => void;
};

const ManageUserForm = (props: Props) => {
  const { onSubmit, onBack, defaultUser } = props;
  const [editMode, setEditMode] = useState<boolean>(false);
  const form = useForm<IUser>({
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: defaultData,
    resolver: yupResolver(schema),
  });

  const {
    handleSubmit,
    reset,
    formState: { isDirty, isValid },
  } = form;

  useEffect(() => {
    if (defaultUser) {
      reset({ ...defaultUser });
      setEditMode(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={6}>
          <UserInfoForm form={form} editMode={editMode} />
        </Grid>

        <Grid item xs={12} md={6}>
          <AddressInfoForm form={form} />
        </Grid>

        <Grid
          item
          xs={12}
          container
          justifyContent="flex-end"
          style={{ display: "flex" }}
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

export default ManageUserForm;
