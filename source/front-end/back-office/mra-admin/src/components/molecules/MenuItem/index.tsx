import OnceParent from "./OnceParent";
import ListChildren from "./ListChildren";

const MenuItem = (props: MenuItemProps) => {
  return props.children ? (
    <ListChildren {...props} />
  ) : (
    <OnceParent {...props} />
  );
};

export default MenuItem;
