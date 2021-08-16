import { ChevronRight, ExpandMore } from "@material-ui/icons";
import DefaultTreeView, { TreeViewProps } from "@material-ui/lab/TreeView";
import { useState } from "react";
import { TreeViewItem } from "../../atoms";

type Props = TreeViewProps & {
  data: TreeItem[];
};

const TreeView = (props: Props) => {
  const { data } = props;
  const [selected, setSelected] = useState<string[]>([]);

  const getChildById = (node: TreeItem, id: string) => {
    let array: string[] = [];

    const getAllChild = (nodes: TreeItem | null) => {
      if (nodes === null) return [];
      array.push(nodes.id);

      if (Array.isArray(nodes.nodes)) {
        nodes.nodes.forEach((node) => {
          array = [...array, ...getAllChild(node)];
          array = array.filter((v, i) => array.indexOf(v) === i);
        });
      }
      return array;
    };

    const getNodeById = (nodes: TreeItem, id: string) => {
      if (nodes.id === id) {
        return nodes;
      }

      if (Array.isArray(nodes.nodes)) {
        let result = null;
        nodes.nodes.forEach((node) => {
          if (!!getNodeById(node, id)) {
            result = getNodeById(node, id);
          }
        });
        return result;
      }

      return null;
    };

    return getAllChild(getNodeById(node, id));
  };

  function getOnChange(checked: boolean, nodes: TreeItem) {
    const allNode: string[] = getChildById(nodes, nodes.id);

    let array = checked
      ? [...selected, ...allNode]
      : selected.filter((value) => !allNode.includes(value));
    array = array.filter((v, i) => array.indexOf(v) === i);

    setSelected(array);
  }

  const TreeItem = (nodes: TreeItem) => (
    <TreeViewItem
      id={nodes.id}
      label={nodes.label}
      checked={selected.some((item) => item === nodes.id)}
      onChange={(_, value) => getOnChange(value, nodes)}
    >
      {Array.isArray(nodes.nodes) && nodes.nodes.map((node) => TreeItem(node))}
    </TreeViewItem>
  );

  return (
    <DefaultTreeView
      defaultCollapseIcon={<ExpandMore />}
      defaultExpandIcon={<ChevronRight />}
    >
      {data.map((item) => TreeItem(item))}
    </DefaultTreeView>
  );
};

export default TreeView;
