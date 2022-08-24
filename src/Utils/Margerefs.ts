import { MutableRefObject } from "react";
const mergeRefs = <T>(...refs: MutableRefObject<T>[]) => {
  return (node: T) => {
    for (const ref of refs) {
      ref.current = node;
    }
  };
};
export default mergeRefs;

// zahid add some thing
