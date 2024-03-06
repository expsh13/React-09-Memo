import { useState } from "react";

export const MemoListItem = () => {
  const [text, setText] = useState("");

  return (
    <li className="rounded shadow p-1 box-border bg-gray-500">
      <input
        onChange={(e) => setText(e.target.value)}
        type="text"
        value={text}
      />
    </li>
  );
};
