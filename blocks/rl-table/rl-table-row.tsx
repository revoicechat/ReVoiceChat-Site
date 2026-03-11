import { ViewHorizontalIcon } from "@radix-ui/react-icons";
import { registerChaiBlockProps, stylesProp } from "@chaibuilder/next/runtime";
import { ChaiBlockComponentProps, ChaiBlockConfig } from "@chaibuilder/next/types";

import TableRow from "@/components/Table/TableRow";

type ChaiStyles = Record<string, string>;

type TableRowProps = {
  styles: ChaiStyles;
  inBuilder: boolean;
  children: React.ReactNode;
};

const TableRowComponent = (props: ChaiBlockComponentProps<TableRowProps>) => {
  return (
    <TableRow
      {...props}
      blockProps={props.blockProps as React.HTMLAttributes<HTMLTableRowElement>}
    />
  );
};

export const TableRowConfig: ChaiBlockConfig = {
  type: "Table Row",
  label: "Table Row",
  icon: ViewHorizontalIcon,
  group: "ReVoiceChat - Tables",
  blocks: () => [
    { _type: "Table Row", _id: "table_row", styles: "#styles:,hover:bg-white/5 transition-colors" },
    { _type: "Table Cell", _id: "table_cell_1", _parent: "table_row", styles: "#styles:,min-w-[180px] px-6 py-5 font-medium text-slate-300 border-y border-slate-800", cellType:'td' },
    { _type: "Table Cell", _id: "table_cell_2", _parent: "table_row", styles: "#styles:,min-w-[180px] px-6 py-5 text-slate-300 border-y border-slate-800", cellType:'td' },
  ],
  props: registerChaiBlockProps({
    properties: {
      styles: stylesProp("hover:bg-white/5 transition-colors"),
    },
  }),
  canAcceptBlock: (blockType:string) => {
    return ['Table Cell'].includes(blockType);
  },
};

export default TableRowComponent;
