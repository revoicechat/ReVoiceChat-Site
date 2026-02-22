import { registerChaiBlockProps, stylesProp } from "@chaibuilder/next/runtime";
import {
  ChaiBlockComponentProps,
  ChaiBlockConfig,
  ChaiStyles,
} from "@chaibuilder/next/types";

import FluidCursor from "@/components/FluidCursor/FluidCursor";

type Props = {
  cursorType: string;
};

const PageCursor = (props: ChaiBlockComponentProps<Props>) => {
  const { cursorType } = props;

  switch(cursorType) {
    default:
      return (
        <FluidCursor/>
      );
      break;
  }
};

export const PageCursorBlock: ChaiBlockConfig = {
  type: "rl-cursor",
  label: "Page Cursor",
  group: "ReVoiceChat",
  props: registerChaiBlockProps({
    properties: {
      //styles: stylesProp("text-lg font-bold underline"),
      cursorType: { type: "string", title: "Cursor Style", default: "World" },
    },
  }),
};

export default PageCursor;
