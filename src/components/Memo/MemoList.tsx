import { HiOutlineDocumentAdd } from "react-icons/hi";
import { MemoListItem } from "./MemoListItem";

type ListType = {
  id: number;
};

type PropsType = {
  list: ListType[];
  onListChange: (list: ListType[]) => void;
};

export const MemoList = (props: PropsType) => {
  const { list, onListChange } = props;

  return (
    <div className="bg-gray-300 p-2">
      <button
        className="flex items-center"
        onClick={() => onListChange([...list, { id: list.length + 1 }])}
      >
        <p>新規メモを追加</p>
        <HiOutlineDocumentAdd size={20} />
      </button>
      <ul className="mt-2 grid gap-1">
        {list.map((item) => (
          <MemoListItem key={item.id} />
        ))}
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
