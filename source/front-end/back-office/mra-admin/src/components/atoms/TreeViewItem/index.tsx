import { Checkbox, FormControlLabel, makeStyles } from "@material-ui/core";
import DefaultTreeItem, {
  TreeItemProps as DefaultProps,
} from "@material-ui/lab/TreeItem";
import { useTranslation } from "react-i18next";

const useStyleTreeItem = makeStyles({
  selected: {
    ">.MuiTreeItem-content .MuiTreeItem-label": {
      backgroundColor: "transparent",
    }
  },
  label: {
    backgroundColor: "transparent",
  },
});

type TreeViewItemProps = Omit<DefaultProps, "nodeId" | "id" | "onChange"> & {
  label: string;
  id: string;
  checked: boolean;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => void;
};

const TreeViewItem = (props: TreeViewItemProps) => {
  const { id, label, checked, onChange, ...restProps } = props;
  const { t } = useTranslation();
  const classesTreeItem = useStyleTreeItem();

  return (
    <DefaultTreeItem
      nodeId={id}
      classes={{ ...classesTreeItem }}
      label={
        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              onChange={onChange}
              onClick={(e) => e.stopPropagation()}
            />
          }
          label={t(label)}
          key={id}
        />
      }
      {...restProps}
    />
  );
};

export default TreeViewItem;
