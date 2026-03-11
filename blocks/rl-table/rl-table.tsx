import { TableIcon } from "@radix-ui/react-icons";
import { registerChaiBlockProps, stylesProp } from "@chaibuilder/next/runtime";
import { ChaiBlockComponentProps, ChaiBlockConfig } from "@chaibuilder/next/types";

import TableBlock from "@/components/Table/Table";

type ChaiStyles = Record<string, string>;

type TableProps = {
  styles: ChaiStyles;
  inBuilder: boolean;
  children: React.ReactNode;
};

const TableComponent = (props: ChaiBlockComponentProps<TableProps>) => {
  return (
    <TableBlock
      {...props}
      blockProps={props.blockProps as React.HTMLAttributes<HTMLTableElement>}
    />
  );
};

export const TableConfig: ChaiBlockConfig = {
  type: "Table Block",
  label: "Table Block",
  icon: TableIcon,
  group: "ReVoiceChat - Tables",
  blocks: () => [
    { _type: "Table Block", _id: "table", styles: "#styles:,w-full text-left border-collapse bg-background" },
    
    { _type: "Table Section", _id: "table_section_head", _parent: "table", styles: "#styles:,", sectionType:'header' },
    { _type: "Table Row", _id: "table_row_head", _parent: "table_section_head", styles: "#styles:,bg-slate-800/50 hover:bg-slate-800/70 transition-colors" },
    { _type: "Table Cell", _id: "table_cell_head_1", _parent: "table_row_head", styles: "#styles:,min-w-[180px] px-6 py-5 text-sm font-semibold text-slate-300 border-y border-slate-800", cellType:'th' },
    { _type: "Table Cell", _id: "table_cell_head_2", _parent: "table_row_head", styles: "#styles:,min-w-[180px] px-6 py-5 text-sm font-semibold text-slate-300 border-y border-slate-800", cellType:'th' },
    
    { _type: "Table Section", _id: "table_section_body", _parent: "table", styles: "#styles:,divide-y divide-slate-800", sectionType:'body' },
    { _type: "Table Row", _id: "table_row_body_1", _parent: "table_section_body", styles: "#styles:,hover:bg-white/5 transition-colors" },
    { _type: "Table Cell", _id: "table_cell_body_1_1", _parent: "table_row_body_1", styles: "#styles:,min-w-[180px] px-6 py-5 font-medium text-slate-300 border-y border-slate-800", cellType:'td' },
    { _type: "Table Cell", _id: "table_cell_body_1_2", _parent: "table_row_body_1", styles: "#styles:,min-w-[180px] px-6 py-5 text-slate-300 border-y border-slate-800", cellType:'td' },
    { _type: "Table Row", _id: "table_row_body_2", _parent: "table_section_body", styles: "#styles:,hover:bg-white/5 transition-colors" },
    { _type: "Table Cell", _id: "table_cell_body_2_1", _parent: "table_row_body_2", styles: "#styles:,min-w-[180px] px-6 py-5 font-medium text-slate-300 border-y border-slate-800", cellType:'td' },
    { _type: "Table Cell", _id: "table_cell_body_2_2", _parent: "table_row_body_2", styles: "#styles:,min-w-[180px] px-6 py-5 text-slate-300 border-y border-slate-800", cellType:'td' },
    
    { _type: "Table Section", _id: "table_section_foot", _parent: "table", styles: "#styles:,", sectionType:'footer' },
    { _type: "Table Row", _id: "table_row_foot", _parent: "table_section_foot", styles: "#styles:,bg-slate-800/50 hover:bg-slate-800/70 transition-colors" },
    { _type: "Table Cell", _id: "table_cell_foot_1", _parent: "table_row_foot", styles: "#styles:,min-w-[180px] px-6 py-5 text-sm font-semibold text-slate-300 border-y border-slate-800", cellType:'th' },
    { _type: "Table Cell", _id: "table_cell_foot_2", _parent: "table_row_foot", styles: "#styles:,min-w-[180px] px-6 py-5 text-sm font-semibold text-slate-300 border-y border-slate-800", cellType:'td' },
  ],
  props: registerChaiBlockProps({
    properties: {
      styles: stylesProp("w-full text-left border-collapse bg-background"),
    },
  }),
  canAcceptBlock: (blockType:string) => {
    return ['Table Section', 'Table Row'].includes(blockType);
  },
};

export default TableComponent;
