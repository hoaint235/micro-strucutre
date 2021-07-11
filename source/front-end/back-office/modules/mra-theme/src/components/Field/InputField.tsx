import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  FormHelperText,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import InputBase, { InputBaseProps } from "@material-ui/core/InputBase";
import { MTypography } from "..";

export const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
    width: "100%",
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    border: `1px solid #ced4da ${theme.palette.primary.main}`,
    fontSize: 14,
    width: "100%",
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color"]),
    "&:focus": {
      borderColor: theme.palette.primary.main,
    },
  },
  error: {
    "& input, & input:focus": {
      borderColor: theme.palette.error.main,
    },
  },
}))(InputBase);

const useStyles = makeStyles(() => ({
  labelContent: {
    marginBottom: "10px",
  },
}));

export type InputFieldProps = {
  name: string;
  style?: any;
  InputProps?: InputBaseProps;
  label?: string;
  labelRight?: React.ReactNode;
  error?: boolean;
  helperText?: string;
};

const InputField: React.FC<InputFieldProps> = (props: InputFieldProps) => {
  const { style, label, labelRight, error, InputProps, helperText, ...rest } =
    props;
  const classes = useStyles();
  const fieldName = rest.name;

  return (
    <Fragment>
      <Grid
        className={classes.labelContent}
        container
        direction="row"
        justify="space-between"
      >
        <MTypography.Caption label={label} />
      </Grid>
      <BootstrapInput
        tabIndex={-1}
        error={error}
        {...rest}
        {...InputProps}
        inputProps={{
          "data-testid": `input-${fieldName}`,
        }}
        className={style}
      />
      {error && (
        <FormHelperText
          error
          id={`text-error-${fieldName}`}
          data-testid={`text-error-${fieldName}`}
        >
          {helperText}
        </FormHelperText>
      )}
    </Fragment>
  );
};

export default InputField;
