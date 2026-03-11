import { registerChaiBlock } from "@chaibuilder/next/runtime";
import dynamic from "next/dynamic";
import { PageCursorBlock } from "./rl-cursor";
//import { HelloWorldBlock } from "./hello-world";
import { FormConfig } from "./form/form-block";
import { TableConfig } from "./rl-table/rl-table";
import { TableSectionConfig } from "./rl-table/rl-table-section";
import { TableRowConfig } from "./rl-table/rl-table-row";
import { TableCellConfig } from "./rl-table/rl-table-cell";

//Important: Dynamic import is required for custom blocks
//const HelloWorld = dynamic(() => import("./hello-world"));
const ChaiForm = dynamic(() => import("./form/form-block"));
const rlCursor = dynamic(() => import("./rl-cursor"));
const rlTable = dynamic(() => import("./rl-table/rl-table"));
const rlTableSection = dynamic(() => import("./rl-table/rl-table-section"));
const rlTableRow = dynamic(() => import("./rl-table/rl-table-row"));
const rlTableCell = dynamic(() => import("./rl-table/rl-table-cell"));

export const registerCustomBlocks = () => {
  registerChaiBlock(rlCursor, PageCursorBlock);
  registerChaiBlock(rlTable, TableConfig);
  registerChaiBlock(rlTableSection, TableSectionConfig);
  registerChaiBlock(rlTableRow, TableRowConfig);
  registerChaiBlock(rlTableCell, TableCellConfig);
  //registerChaiBlock(HelloWorld, HelloWorldBlock);
  registerChaiBlock(ChaiForm, FormConfig);
};
