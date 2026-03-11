'use client';
type ChaiStyles = Record<string, string>;

const TableBlock = ({
    blockProps,
    styles,
    children,
    inBuilder,
  }:{
    blockProps: React.HTMLAttributes<HTMLTableElement>;
    styles: ChaiStyles;
    children: React.ReactNode;
    inBuilder: boolean;
}) => {
  return (
    <table {...blockProps} {...styles} className={`relative ${styles?.className || ""} ${blockProps?.className || ""}`}>
      {children as React.ReactNode}
    </table>
  );
};
export default TableBlock;
