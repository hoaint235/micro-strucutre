import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
} from '@material-ui/core';
import { Button, Typography, ButtonProps } from '@atoms';
import { DialogResult } from '@contexts';

export type ConfirmationOptionsProps = {
  confirmationText?: string;
  cancellationText?: string;
  dialogProps?: Omit<DialogProps, 'open'>;
  confirmationButtonProps?: Omit<ButtonProps, 'name' | 'label'>;
  cancellationButtonProps?: Omit<ButtonProps, 'name' | 'label'>;
};

export type ConfirmationProps = {
  title: string;
  description: string;
  open: boolean;
  onClose: (payload: DialogResult | null) => void;
  options: ConfirmationOptionsProps;
};

const ConfirmationDialog = (props: ConfirmationProps) => {
  const { title, description, open, onClose, options } = props;

  const {
    dialogProps,
    confirmationButtonProps,
    cancellationButtonProps,
    confirmationText = 'buttons.confirm',
    cancellationText = 'buttons.cancel',
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
        <Typography.Body label={description} />
      </DialogContent>
      <DialogActions>
        <Button.Default
          name="confirm-default"
          onClick={() => onClose(null)}
          label={cancellationText}
          {...cancellationButtonProps}
        />
        <Button.Default
          name="confirm-submit"
          onClick={() => onClose({ success: true })}
          label={confirmationText}
          {...confirmationButtonProps}
        />
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;
