import { registerChaiBlock } from "@chaibuilder/next/runtime";
import dynamic from "next/dynamic";
import { PageCursorBlock } from "./rl-cursor";
//import { HelloWorldBlock } from "./hello-world";
import { FormConfig } from "./form/form-block";

//Important: Dynamic import is required for custom blocks
//const HelloWorld = dynamic(() => import("./hello-world"));
const ChaiForm = dynamic(() => import("./form/form-block"));
const rlCursor = dynamic(() => import("./rl-cursor"));

export const registerCustomBlocks = () => {
  registerChaiBlock(rlCursor, PageCursorBlock);
  //registerChaiBlock(HelloWorld, HelloWorldBlock);
  registerChaiBlock(ChaiForm, FormConfig);
};
