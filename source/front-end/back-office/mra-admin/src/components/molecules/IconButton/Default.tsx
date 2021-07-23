import { Tooltip } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { IconButtonProps } from "./IconButton.type";
import IconButton from "@material-ui/core/IconButton";

const Default = (props: IconButtonProps) => {
  const { icon: Icon, label, ...restProps } = props;
  const { t } = useTranslation();

  return (
    <Tooltip title={`${t(label || "")}`}>
      <IconButton {...restProps}>
        <Icon />
      </IconButton>
    </Tooltip>
  );
};

export default Default;
