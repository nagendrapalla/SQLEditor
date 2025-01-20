import { TreeViewBaseItem } from "@mui/x-tree-view/models";
import { UseTreeItem2Parameters } from "@mui/x-tree-view/useTreeItem2";

export type NodeType = 'database' | 'schema' | 'table' | 'column';

export type ExtendedTreeItemProps = {
    nodeType?: NodeType;
    id: string;
    label: string;
};

export interface CustomTreeItemProps
    extends Omit<UseTreeItem2Parameters, 'rootRef'>,
    Omit<React.HTMLAttributes<HTMLLIElement>, 'onFocus'> { }

export type DatabaseExplorerProps = {
    data: TreeViewBaseItem<ExtendedTreeItemProps>[]
}