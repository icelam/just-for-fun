import { FC, useCallback } from 'react';
import { todoListState } from './../atoms';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import classnames from 'classnames';
import type { AnimationProps } from 'framer-motion';
import { AnimatePresence, motion } from 'framer-motion';
import { ReactComponent as XMark } from '../icons/x.svg';

const fadeInOutAnimation: AnimationProps = {
  initial: { height: 0, opacity: 0 },
  animate: {
    height: 'auto',
    opacity: 1,
  },
  exit: {
    height: 0,
    opacity: 0,
  },
  transition: {
    height: {
      duration: 0.4,
    },
    opacity: {
      duration: 0.35,
      delay: 0.05,
    },
  },
};

const TodoList: FC = () => {
  const todoList = useRecoilValue(todoListState);
  const setTodoList = useSetRecoilState(todoListState);
  const removeTodo = useCallback(
    (id: string) => {
      setTodoList((currentList) => {
        const newList = [...currentList];
        newList.splice(
          newList.findIndex(({ id: itemId }) => itemId === id),
          1,
        );
        return newList;
      });
    },
    [setTodoList],
  );

  const setTodoComplete = useCallback(
    (id: string) => {
      setTodoList((currentList) => {
        const newList = structuredClone(currentList);
        const indexInList = newList.findIndex(
          ({ id: itemId }) => itemId === id,
        );

        newList[indexInList].isCompleted = !newList[indexInList].isCompleted;
        return newList;
      });
    },
    [setTodoList],
  );

  return (
    <div className="todo-list">
      <ul>
        <AnimatePresence>
          {todoList.map(({ id, isCompleted, text }) => (
            <motion.li
              {...fadeInOutAnimation}
              className={classnames('todo-item', {
                'todo-item--completed': isCompleted,
              })}
              key={id}
            >
              <input
                id={id}
                type="checkbox"
                checked={isCompleted}
                onChange={() => {
                  setTodoComplete(id);
                }}
              />
              <label htmlFor={id}>{text}</label>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  removeTodo(id);
                }}
              >
                <XMark />
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default TodoList;
