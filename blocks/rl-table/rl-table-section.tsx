import { GridIcon } from "@radix-ui/react-icons";
import { registerChaiBlockProps, stylesProp } from "@chaibuilder/next/runtime";
import { ChaiBlockComponentProps, ChaiBlockConfig } from "@chaibuilder/next/types";

import TableSectionBlock from "@/components/Table/TableSection";

type ChaiStyles = Record<string, string>;

type TableSectionProps = {
  styles: ChaiStyles;
  inBuilder: boolean;
  children: React.ReactNode;
  sectionType: string;
};

const TableSectionComponent = (props: ChaiBlockComponentProps<TableSectionProps>) => {
  return (
    <TableSectionBlock
      {...props}
      blockProps={props.blockProps as React.HTMLAttributes<HTMLElement>}
    />
  );
};

export const TableSectionConfig: ChaiBlockConfig = {
  type: "Table Section",
  label: "Table Section",
  icon: GridIcon,
  group: "ReVoiceChat - Tables",
  blocks: () => [
    { _type: "Table Section", _id: "table_section", styles: "#styles:,divide-y divide-slate-800", sectionType:'body' },
    { _type: "Table Row", _id: "table_row", _parent: "table_section", styles: "#styles:,hover:bg-white/5 transition-colors" },
    { _type: "Table Cell", _id: "table_cell_1", _parent: "table_row", styles: "#styles:,min-w-[180px] px-6 py-5 font-medium text-slate-300 border-y border-slate-800", cellType:'td' },
    { _type: "Table Cell", _id: "table_cell_2", _parent: "table_row", styles: "#styles:,min-w-[180px] px-6 py-5 text-slate-300 border-y border-slate-800", cellType:'td' },
  ],
  props: registerChaiBlockProps({
    properties: {
      styles: stylesProp("divide-y divide-slate-800"),
      sectionType: {
        type: "string",
        title: "Section Type", 
        default: "body",
        oneOf: [
          { const: "header", title: "Header" },
          { const: "body", title: "Body" },
          { const: "footer", title: "Footer" },
        ]
      },
    },
  }),
  canAcceptBlock: (blockType:string) => {
    return ['Table Row'].includes(blockType);
  },
};

export default TableSectionComponent;
