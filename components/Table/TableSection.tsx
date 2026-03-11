'use client';
type ChaiStyles = Record<string, string>;

const TableSectionBlock = ({
    blockProps,
    styles,
    children,
    inBuilder,
    sectionType,
  }:{
    blockProps: React.HTMLAttributes<HTMLTableSectionElement>;
    styles: ChaiStyles;
    children: React.ReactNode;
    inBuilder: boolean;
    sectionType: string;
}) => {
  switch(sectionType) {
    case 'header':
      return (
        <thead {...blockProps} {...styles} className={`relative ${styles?.className || ""} ${blockProps?.className || ""}`}>
          {children as React.ReactNode}
        </thead>
      );
      break;
    
    case 'footer':
      return (
        <tfoot {...blockProps} {...styles} className={`relative ${styles?.className || ""} ${blockProps?.className || ""}`}>
          {children as React.ReactNode}
        </tfoot>
      );
      break;
    
    default:
      return (
        <tbody {...blockProps} {...styles} className={`relative ${styles?.className || ""} ${blockProps?.className || ""}`}>
          {children as React.ReactNode}
        </tbody>
      );
      break;
  }
};
export default TableSectionBlock;
