import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogProps,
  DialogTitle,
} from "@material-ui/core";
import React from "react";
import { Button, Typography } from "../../atoms";
import { ButtonProps } from "../../atoms";

export type ConfirmationOptionsProps = {
  title: string;
  description: string;
  confirmationText?: string;
  cancellationText?: string;
  dialogProps?: Omit<DialogProps, "open">;
  confirmationButtonProps?: Omit<ButtonProps, "name" | "label">;
  cancellationButtonProps?: Omit<ButtonProps, "name" | "label">;
};

export type ConfirmationProps = {
  open: boolean;
  onCancel: React.MouseEventHandler<HTMLButtonElement>;
  onConfirm: React.MouseEventHandler<HTMLButtonElement>;
  onClose: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
  options: ConfirmationOptionsProps;
};

const ConfirmationDialog = (props: ConfirmationProps) => {
  const { open, onCancel, onConfirm, onClose, options } = props;

  const {
    title,
    description,
    dialogProps,
    confirmationButtonProps,
    cancellationButtonProps,
    confirmationText,
    cancellationText,
  } = options;

  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      {...dialogProps}
      open={open}
      onClose={onClose}
    >
      <DialogTitle>
        <Typography.Subtitle label={title} />
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography.Body label={description} />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button.Default
          name="confirm-default"
          onClick={onCancel}
          label={cancellationText}
          {...cancellationButtonProps}
        />
        <Button.Secondary
          name="confirm-submit"
          onClick={onConfirm}
          label={confirmationText}
          {...confirmationButtonProps}
        />
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;
