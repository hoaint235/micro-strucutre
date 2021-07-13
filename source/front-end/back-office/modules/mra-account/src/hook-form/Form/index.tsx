import { Grid } from "@mra/theme";
import React from "react";
import { useForm } from "react-hook-form";
import Email from "../Email";
import { FormOptionsProps, HookFormProps } from "../form-type";
import GroupSelect from "../GroupSelect";
import Input from "../Input";
import SingleSelect from "../SingleSelect";
import MultipleSelect from "../MultipleSelect";

const initFormOptions: FormOptionsProps = {
  mode: "onBlur",
  reValidateMode: "onChange",
};

const types = [Input, GroupSelect, Email, SingleSelect, MultipleSelect];

const Form = (props: HookFormProps) => {
  const {
    renderChildren,
    children,
    onSubmit,
    renderSubmit,
    options = initFormOptions,
  } = props;

  const form = useForm({ ...options });

  const renderHookFormItem = (child) => {
    const isHookFormField = types.some((x) => x.name === child.type.name);
    if (!isHookFormField) {
      return child;
    }
    console.log(child.type);
    if (child.type === "MultipleSelect") {
      console.log(
        ...{
          ...child.props,
          form,
          key: child.props.name,
        }
      );
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
      elements = [children];
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

  return <form onSubmit={form.handleSubmit(onSubmit)}>{renderForm()}</form>;
};

export default Form;
