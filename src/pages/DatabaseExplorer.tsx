import * as React from 'react';
import clsx from 'clsx';
import { animated, useSpring } from '@react-spring/web';
import { styled } from '@mui/material/styles';
import { TransitionProps } from '@mui/material/transitions';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import StorageIcon from '@mui/icons-material/StorageOutlined';
import SchemaIcon from '@mui/icons-material/SchemaOutlined';
import TableChartIcon from '@mui/icons-material/TableChartOutlined';
import ViewColumnIcon from '@mui/icons-material/ViewColumnOutlined';
import { RichTreeView } from '@mui/x-tree-view/RichTreeView';
import { useTreeItem2, UseTreeItem2Parameters } from '@mui/x-tree-view/useTreeItem2';
import {
    TreeItem2Content,
    TreeItem2Label
} from '@mui/x-tree-view/TreeItem2';
import { TreeItem2Provider } from '@mui/x-tree-view/TreeItem2Provider';
import { DatabaseExplorerProps, NodeType } from '../utils/types';

const CustomTreeItemContent = styled(TreeItem2Content)(() => ({
    padding: "3px 0",
}));

const AnimatedCollapse = animated(Collapse);

const TransitionComponent = (props: TransitionProps) => {
    const style = useSpring({
        to: {
            transform: `translate3d(0,${props.in ? 0 : 10}px,0)`,
            paddingLeft: "10px"
        },
    });

    return <AnimatedCollapse style={style} {...props} />;
}

interface CustomLabelProps {
    children: React.ReactNode;
    icon?: React.ElementType;
    expandable?: boolean;
}

const CustomLabel = ({
    icon: Icon,
    expandable,
    children,
    ...other
}: CustomLabelProps) => {
    return (
        <TreeItem2Label
            {...other}
            sx={{
                display: 'flex',
                alignItems: 'center',
            }}
        >
            {Icon && (
                <Box
                    component={Icon}
                    className="labelIcon"
                    color="inherit"
                    sx={{ mr: 1, fontSize: '1rem' }}
                />
            )}

            <div>{children}</div>
            {expandable}
        </TreeItem2Label>
    );
}

const isExpandable = (reactChildren: React.ReactNode) => {
    if (Array.isArray(reactChildren)) {
        return reactChildren.length > 0 && reactChildren.some(isExpandable);
    }
    return Boolean(reactChildren);
};

const getIconFromFileType = (fileType: NodeType) => {
    switch (fileType) {
        case 'database':
            return StorageIcon;
        case 'schema':
            return SchemaIcon;
        case 'table':
            return TableChartIcon;
        case 'column':
            return ViewColumnIcon;
        default:
            return StorageIcon;
    }
};

interface CustomTreeItemProps
    extends Omit<UseTreeItem2Parameters, 'rootRef'>,
    Omit<React.HTMLAttributes<HTMLLIElement>, 'onFocus'> { }

const CustomTreeItem = React.forwardRef(function CustomTreeItem(
    props: CustomTreeItemProps,
    ref: React.Ref<HTMLLIElement>,
) {
    const { id, itemId, label, disabled, children } = props;

    const {
        getContentProps,
        getLabelProps,
        getGroupTransitionProps,
        status,
        publicAPI,
    } = useTreeItem2({ id, itemId, children, label, disabled, rootRef: ref });

    const item = publicAPI.getItem(itemId);
    const expandable = isExpandable(children);
    let icon = getIconFromFileType(item.nodeType);

    return (
        <TreeItem2Provider itemId={itemId}>
            <div style={{ marginLeft: "10px" }} >
                <CustomTreeItemContent
                    {...getContentProps({
                        className: clsx('content', {
                            'Mui-expanded': status.expanded,
                            'Mui-selected': status.selected,
                            'Mui-focused': status.focused,
                            'Mui-disabled': status.disabled,
                        }),
                    })}
                >
                    <CustomLabel
                        {...getLabelProps({ icon, expandable: expandable && status.expanded })}
                    />
                </CustomTreeItemContent>
                {children && <TransitionComponent {...getGroupTransitionProps()} />}
            </div>
        </TreeItem2Provider>
    );
});

const DatabaseExplorer: React.FC<DatabaseExplorerProps> = ({ data }) => {
    return (
        <RichTreeView
            items={data}
            sx={{ height: 'fit-content', flexGrow: 1, maxWidth: 400 }}
            slots={{ item: CustomTreeItem }}
        />
    );
}

export default DatabaseExplorer;
