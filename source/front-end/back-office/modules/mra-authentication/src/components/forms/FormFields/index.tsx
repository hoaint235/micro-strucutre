import { Grid } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import { PrimaryButton } from "../../../theme";
import { FormOptionsProps, FormProps } from "../form-types";

const initOptions: FormOptionsProps = {
  mode: "onBlur",
  reValidateMode: "onChange",
};

const FormFields = (props: FormProps) => {
  const {
    children,
    onSubmit,
    onValuesChange,
    controlOptions,
    options = initOptions,
  } = props;
  const form = useForm({ ...options });
  const {
    control,
    getValues,
    formState: { errors },
    handleSubmit,
  } = form;

  const renderForm = (child) => {
    const name = child.props.name;
    child.props.error = errors[name]?.message;
    return React.createElement(child.type, {
      ...{
        ...child.props,
        control,
        errors,
      },
    });
  };

  const onFormChange = () => {
    if (onValuesChange) {
      const values = getValues();
      onValuesChange(values);
    }
  };

  if (!Array.isArray(children)) {
    return <form onSubmit={handleSubmit(onSubmit)}>{children(form)}</form>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} onChange={onFormChange}>
      <Grid container spacing={2}>
        {children.map((child: any, index) => (
          <Grid key={index} item xs={child.props.gridProps || 12}>
            {child.props.name ? renderForm(child) : child}
          </Grid>
        ))}
        <Grid item xs={12}>
          {controlOptions.render ? (
            controlOptions.render(form)
          ) : (
            <PrimaryButton
              label={controlOptions.label}
              type="submit"
              {...controlOptions.options}
            />
          )}
        </Grid>
      </Grid>
    </form>
  );
};

export default FormFields;
