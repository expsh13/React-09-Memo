import { useState } from "react";
import { Editor } from "./Editor";
import { MemoList } from "./MemoList";

export const Memo = () => {
  const [memoList, setMemoList] = useState<string[]>([]);

  return (
    <div className="flex w-full">
      <div className="w-1/4">
        <MemoList
          list={memoList}
          onListChange={(list: string[]) => setMemoList(list)}
        />
      </div>
      <div className="flex-1">
        <Editor />
      </div>
    </div>
  );
};
