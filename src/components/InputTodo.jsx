import React from "react";

export const InputTodo = ({ todoText, onChange, onClick, disabled }) => {
  return (
    <div className="input-area">
      <input
        placeholder="TODOを入力"
        type="text"
        disabled={disabled}
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
