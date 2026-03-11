'use client';
type ChaiStyles = Record<string, string>;

const TableCellBlock = ({
    blockProps,
    styles,
    children,
    inBuilder,
    cellType,
  }:{
    blockProps: React.HTMLAttributes<HTMLTableCellElement>;
    styles: ChaiStyles;
    children: React.ReactNode;
    inBuilder: boolean;
    cellType: string;
}) => {
  switch(cellType) {
    case 'th':
      return (
        <th {...blockProps} {...styles} className={`relative ${styles?.className || ""} ${blockProps?.className || ""}`}>
          {children as React.ReactNode}
        </th>
      );
      break;
    
    default:
      return (
        <td {...blockProps} {...styles} className={`relative ${styles?.className || ""} ${blockProps?.className || ""}`}>
          {children as React.ReactNode}
        </td>
      );
      break;
  }
};
export default TableCellBlock;
