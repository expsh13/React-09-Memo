import { useState } from "react";
import { Editor } from "./Editor";
import { MemoList } from "./MemoList";

type ListType = {
  id: number;
  active: boolean;
};

export const Memo = () => {
  const [activeMemo, setActiveMemo] = useState<ListType | undefined>(undefined);

  return (
    <div className="flex w-full">
      <div className="w-1/4">
        <MemoList
          list={activeMemo}
          onListChange={(list: ListType[]) => setActiveMemo(list)}
        />
      </div>
      <div className="flex-1">
        <Editor />
      </div>
    </div>
  );
};
