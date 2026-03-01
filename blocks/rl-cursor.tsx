import { CursorArrowIcon } from "@radix-ui/react-icons";
import { registerChaiBlockProps, stylesProp } from "@chaibuilder/next/runtime";
import {
  ChaiBlockComponentProps,
  ChaiBlockConfig,
  ChaiStyles,
} from "@chaibuilder/next/types";

import FluidCursor from "@/components/Cursor/FluidCursor/FluidCursor";
import BlobCursor from "@/components/Cursor/BlobCursor/BlobCursor";

type Props = {
  cursorType: string;
  inBuilder: boolean;
  children: React.ReactNode;
};

const PageCursor = (props: ChaiBlockComponentProps<Props>) => {
  const { cursorType } = props;

  switch(cursorType) {
    case 'blob':
      return <BlobCursor {...props}/>;
      break;
    
    case 'fluid':
      return <FluidCursor {...props}/>;
      break;
    
      default:
        return <>{props.children as React.ReactNode}</>;
        break;
  }
};

export const PageCursorBlock: ChaiBlockConfig = {
  type: "Page Cursor",
  label: "Page Cursor",
  group: "ReVoiceChat",
  canAcceptBlock: () => !0,
  icon: CursorArrowIcon,
  props: registerChaiBlockProps({
    properties: {
      //styles: stylesProp("text-lg font-bold underline"),
      cursorType: {
        type: "string",
        title: "Cursor Style", 
        default: "default",
        oneOf: [
          { const: "default", title: "Default" },
          { const: "fluid", title: "Fluid" },
          { const: "blob", title: "Blob" },
        ]
      },
    },
  }),
};

export default PageCursor;
