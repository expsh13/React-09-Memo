import { useState } from "react";
import { Editor } from "./Editor";
import { MemoList } from "./MemoList";

type ListType = {
  id: number;
  active: boolean;
};

export const Memo = () => {
  const [memoList, setMemoList] = useState<ListType[]>([]);

  return (
    <div className="flex w-full">
      <div className="w-1/4">
        <MemoList
          list={memoList}
          onListChange={(list: ListType[]) => setMemoList(list)}
        />
      </div>
      <div className="flex-1">
        <Editor />
      </div>
    </div>
  );
};
