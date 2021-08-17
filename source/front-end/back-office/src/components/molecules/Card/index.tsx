import { Card as Control, CardContent, CardHeader } from '@material-ui/core';
import { Typography } from '../../atoms';

type CardProps = {
  children: React.ReactNode;
  title: React.ReactNode;
};

const Card = (props: CardProps) => {
  const { title, children } = props;

  const getTitle = () =>
    typeof title === 'string' ? <Typography.Body label={title} /> : title;

  return (
    <Control>
      <CardHeader title={getTitle()} />
      <CardContent>{children}</CardContent>
    </Control>
  );
};

export default Card;
