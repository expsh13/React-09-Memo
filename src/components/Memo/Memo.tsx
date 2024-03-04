import { Editor } from "./Editor";
import { MemoList } from "./MemoList";

export const Memo = () => {
  return (
    <div className="flex w-full">
      <div className="w-1/4">
        <MemoList />
      </div>
      <div className="flex-1">
        <Editor />
      </div>
    </div>
  );
};
