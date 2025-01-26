export type NodeType = "database" | "schema" | "table" | "column";

export type ExtendedTreeItemProps = {
  nodeType?: NodeType;
  id: string;
  label: string;
};

export interface Tab {
  id: number;
  label: string;
}

export interface DatabaseConnection {
  dbName: string;
  host: string;
  port: string;
  username: string;
  password: string;
}
