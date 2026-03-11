'use client';
type ChaiStyles = Record<string, string>;

const TableRowBlock = ({
    blockProps,
    styles,
    children,
    inBuilder,
  }:{
    blockProps: React.HTMLAttributes<HTMLTableRowElement>;
    styles: ChaiStyles;
    children: React.ReactNode;
    inBuilder: boolean;
}) => {
  return (
    <tr {...blockProps} {...styles} className={`relative ${styles?.className || ""} ${blockProps?.className || ""}`}>
      {children as React.ReactNode}
    </tr>
  );
};
export default TableRowBlock;
