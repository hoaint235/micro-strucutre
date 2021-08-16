import {
  FormControlLabel,
  SwitchProps as Props,
  Switch as DefaultSwitch,
} from "@material-ui/core";
import { useTranslation } from "react-i18next";

type DefaultProps = Omit<Props, "form">;
export type SwitchProps = DefaultProps & {
  label: string;
  name: string;
};

const Switch = (props: SwitchProps) => {
  const { name, label, ...restProps } = props;
  const { t } = useTranslation();

  return (
    <FormControlLabel
      control={
        <DefaultSwitch
          inputProps={{
            // @ts-ignore
            "data-testid": `input-${name}`,
          }}
          {...restProps}
        />
      }
      label={t(label)}
    />
  );
};

export default Switch;
