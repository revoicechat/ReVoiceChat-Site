import { BoxIcon } from "@radix-ui/react-icons";
import { registerChaiBlockProps, stylesProp } from "@chaibuilder/next/runtime";
import { ChaiBlockComponentProps, ChaiBlockConfig } from "@chaibuilder/next/types";

import TableCellBlock from "@/components/Table/TableCell";

type ChaiStyles = Record<string, string>;

type TableCellProps = {
  styles: ChaiStyles;
  inBuilder: boolean;
  children: React.ReactNode;
  cellType: string;
};

const TableCellComponent = (props: ChaiBlockComponentProps<TableCellProps>) => {
  return (
    <TableCellBlock
      {...props}
      blockProps={props.blockProps as React.HTMLAttributes<HTMLElement>}
    />
  );
};

export const TableCellConfig: ChaiBlockConfig = {
  type: "Table Cell",
  label: "Table Cell",
  icon: BoxIcon,
  group: "ReVoiceChat - Tables",
  props: registerChaiBlockProps({
    properties: {
      styles: stylesProp("min-w-[180px] px-6 py-5 text-slate-300 border-y border-slate-800"),
      cellType: {
        type: "string",
        title: "Cell Type", 
        default: "td",
        oneOf: [
          { const: "td", title: "Default" },
          { const: "th", title: "Head" },
        ]
      },
    },
  }),
  canAcceptBlock: () => !0,
  /*canAcceptBlock: (blockType:string) => {
    return ['Table Section'].includes(blockType);
  },*/
};

export default TableCellComponent;
