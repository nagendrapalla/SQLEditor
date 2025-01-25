export type NodeType = 'database' | 'schema' | 'table' | 'column';

export type ExtendedTreeItemProps = {
    nodeType?: NodeType;
    id: string;
    label: string;
};