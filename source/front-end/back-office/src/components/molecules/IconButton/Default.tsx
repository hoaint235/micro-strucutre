import { Tooltip } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import IconButton from '@material-ui/core/IconButton';
import { IconButtonProps } from './IconButton.type';

const Default = (props: IconButtonProps) => {
  const { icon: Icon, label, name, ...restProps } = props;
  const { t } = useTranslation();

  return (
    <Tooltip title={`${t(label || '')}`}>
      <IconButton {...restProps} size="medium" data-testid={name}>
        <Icon />
      </IconButton>
    </Tooltip>
  );
};

export default Default;
