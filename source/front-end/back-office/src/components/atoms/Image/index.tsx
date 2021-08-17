import { CardMedia } from '@material-ui/core';

type ImageProps = {
  src: string;
  className?: string;
  style?: React.CSSProperties;
};

const Image = (props: ImageProps) => {
  const { src, ...restProps } = props;

  return <CardMedia component="img" image={src} {...restProps} />;
};

export default Image;
