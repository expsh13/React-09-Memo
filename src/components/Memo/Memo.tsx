import { useState } from "react";
import { Editor } from "./Editor";
import { MemoList } from "./MemoList";

export const Memo = () => {
  const [memoList, setMemoList] = useState([]);

  return (
    <div className="flex w-full">
      <div className="w-1/4">
        <MemoList list={memoList} />
      </div>
      <div className="flex-1">
        <Editor />
      </div>
    </div>
  );
};
