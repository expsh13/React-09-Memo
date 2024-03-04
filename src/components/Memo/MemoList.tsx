import { HiOutlineDocumentAdd } from "react-icons/hi";

type PropsType = {
  list: string[];
  onListChange: (list: string[]) => void;
};

export const MemoList = (props: PropsType) => {
  const { list, onListChange } = props;

  return (
    <div className="bg-gray-300 p-2">
      <button className="flex items-center">
        <p>新規メモを追加</p>
        <HiOutlineDocumentAdd size={20} />
      </button>
      <ul className="mt-2 grid gap-1">
        <li className="rounded shadow p-1 box-border bg-gray-500 text-white">
          メモ名
        </li>
        <li className="rounded shadow p-1 box-border bg-white hover:cursor-pointer hover:opacity-80">
          メモ名
        </li>
      </ul>
    </div>
  );
};
