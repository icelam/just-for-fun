import { FC, useCallback } from 'react';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { v4 as uuidv4 } from 'uuid';
import { todoListState } from './../atoms';
import { ReactComponent as PlusIcon } from '../icons/plus.svg';

const AddItemForm: FC = () => {
  const [todo, setTodo] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const addTodo = useCallback(() => {
    if (!todo) {
      return;
    }

    setTodoList((currentList) => [
      {
        id: uuidv4(),
        text: todo,
        isCompleted: false,
      },
      ...currentList,
    ]);

    setTodo('');
  }, [setTodoList, todo]);

  const onInputEnter: React.KeyboardEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      if (event.key !== 'Enter') {
        return;
      }

      addTodo();
    },
    [addTodo],
  );

  return (
    <div className="add-item-form">
      <input
        type="text"
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
        placeholder="Enter a To-do item"
        onKeyPress={onInputEnter}
      />
      <button type="button" onClick={addTodo} disabled={!todo}>
        <PlusIcon />
      </button>
    </div>
  );
};

export default AddItemForm;
