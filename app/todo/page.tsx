"use client"
import { addTodo } from "@/lib/features/Todo/todoSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hook"
import clsx from "clsx";
import { useState } from "react";
import { MdDone } from "react-icons/md";
import { TiDelete } from "react-icons/ti";

export default function TodoPage() {
    const [inputValue, setInputValue] = useState("");

    const dispatch = useAppDispatch();
    const ToDoList = useAppSelector(state => state.todosSlice.todos);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleAddTodo = () => {
        if (inputValue.trim() === "") return;
        dispatch(addTodo(inputValue));
        setInputValue("");
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleAddTodo();
        }
    };

    return (
        <div className='w-full flex flex-col items-center gap-10'>
            <h1 className='text-3xl text-primary font-bold tracking-wide'>TO DO LIST APPLICATION</h1>
            <section className="w-60 min-h-80">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    className="w-full px-4 py-3 rounded-md bg-secondary text-primary text-lg font-light placeholder:text-primary/80"
                    placeholder="Add a new task..."
                />
                <ul className="w-full h-full mt-4 flex flex-col gap-2">
                    {ToDoList.map((todo) => (
                        <li
                            key={todo.id}
                            className={clsx(" flex items-center justify-between w-full pl-3 pr-2 p-1.5 border border-secondary rounded font-medium text-sm text-primary hover:bg-secondary/60 ", {
                                "line-through": todo.isDone,
                            })}>
                            <span className="max-w-36 overflow-hidden text-ellipsis">{todo.title}</span>
                            <div className="flex items-center gap-2">
                                <MdDone
                                    className="flex-shrink-0 size-6 text-secondary/30 duration-override hover:text-green-500 cursor-pointer" />
                                <TiDelete
                                    className="flex-shrink-0 size-6 text-secondary/30 duration-override hover:text-red-500 cursor-pointer" />
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
