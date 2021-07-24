import { Chip, ChipProps, makeStyles, Theme } from "@material-ui/core";
import { useTranslation } from "react-i18next";

const useStyleChip = makeStyles((theme: Theme) => ({
  root: {
    borderRadius: 4,
    minWidth: theme.spacing(10),
  },
}));

const Status = (props: ChipProps) => {
  const { label, ...restProps } = props;
  const { t } = useTranslation();
  const classesStyleChip = useStyleChip();
  return (
    <Chip
      classes={{ ...classesStyleChip }}
      variant="outlined"
      {...restProps}
      label={t(`${label}`)}
    />
  );
};

export default Status;
