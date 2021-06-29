import { Grid } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import { EmailForm, InputForm, PasswordForm } from "..";
import { FormOptionsProps, FormProps } from "../form-types";

const initOptions: FormOptionsProps = {
  mode: "onBlur",
  reValidateMode: "onChange",
};

const types = [EmailForm, InputForm, PasswordForm];

const FormFields = (props: FormProps) => {
  const {
    children,
    onSubmit,
    renderSubmit,
    renderChildren,
    options = initOptions,
  } = props;
  const form = useForm({ ...options });
  const { handleSubmit } = form;

  const renderHookFormItem = (child) => {
    const isHookFormField = types.some((x) => x.name === child.type.name);
    if (!isHookFormField) {
      return child;
    }
    return React.createElement(child.type, {
      ...{
        ...child.props,
        form,
        key: child.props.name,
      },
    });
  };

  const renderForm = () => {
    let elements = [];

    if (children) {
      elements = [...children];
    }

    if (renderChildren) {
      const {
        props: { children },
      } = renderChildren(form);
      elements = [...elements, ...children];
    }

    return (
      <Grid container spacing={2}>
        {elements.map((child: any, index) => (
          <Grid key={index} item xs={12}>
            {renderHookFormItem(child)}
          </Grid>
        ))}
        {renderSubmit && renderSubmit(form)}
      </Grid>
    );
  };
  return <form onSubmit={handleSubmit(onSubmit)}>{renderForm()}</form>;
};

export default FormFields;
