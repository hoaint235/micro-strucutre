import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
} from '@material-ui/core';
import { Button, Typography, ButtonProps } from '../../atoms';

export type ConfirmationOptionsProps = {
  confirmationText?: string;
  cancellationText?: string;
  dialogProps?: Omit<DialogProps, 'open'>;
  confirmationButtonProps?: Omit<ButtonProps, 'name' | 'label'>;
  cancellationButtonProps?: Omit<ButtonProps, 'name' | 'label'>;
};

export type InformationConfirmationProps = {
  title: string;
  description: string;
};

export type ConfirmationProps = {
  info: InformationConfirmationProps;
  open: boolean;
  onCancel: React.MouseEventHandler<HTMLButtonElement>;
  onConfirm: React.MouseEventHandler<HTMLButtonElement>;
  onClose: (event: {}, reason: 'backdropClick' | 'escapeKeyDown') => void;
  options: ConfirmationOptionsProps;
};

const ConfirmationDialog = (props: ConfirmationProps) => {
  const { info, open, onCancel, onConfirm, onClose, options } = props;

  const {
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
        <Typography.Subtitle label={info.title} />
      </DialogTitle>
      <DialogContent>
        <Typography.Body label={info.description} />
      </DialogContent>
      <DialogActions>
        <Button.Default
          name="confirm-default"
          onClick={onCancel}
          label={cancellationText}
          {...cancellationButtonProps}
        />
        <Button.Default
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
