"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LucideLoader } from "lucide-react";
import { useOptimistic, useRef, useState } from "react";
import toast from "react-hot-toast";

async function addTaskToServer(TaskTest) {
  await new Promise((res) => setTimeout(res, 2000));

  console.log(`Task "${TaskTest}" sent  to  server`);

  return { id: Date.now(), text: TaskTest, done: false, optimistic: false };
}

function ToDoIndex() {
  const [toDo, setToDo] = useState([
    { id: 1, text: "یادگیری useOptimistic", done: false, optimistic: false },
    { id: 2, text: "ساختن مثال", done: true, optimistic: false },
  ]);

  const [loading, setISloading] = useState(false);

  const [optimisticToDo, addoptimisticToDo] = useOptimistic(
    toDo,
    (curState, newTask) => [
      ...curState,
      {
        id: Math.random(),
        text: String(newTask),
        done: false,
        optimistic: true,
      },
    ],
  );
  const inputRef = useRef(null);

  const handleAddTask = async () => {
    if (inputRef.current && inputRef.current.value.trim()) {
      const newTaskText = inputRef.current.value.trim();

      inputRef.current.value = "";

      addoptimisticToDo(newTaskText);

      try {
        setISloading(true);
        const addedTask = await addTaskToServer(newTaskText);

        setToDo((prev) => [
          ...prev.filter(
            (todo) => !(todo.optimistic && todo.text === newTaskText),
          ),
          { ...addedTask, optimistic: false },
        ]);

        console.log("tssk added  succcesfully", addedTask);
      } catch (error) {
        toast.error("failed  to add  task ", error);

        setToDo((currToDo) =>
          currToDo.filter(
            (todo) => !todo.optimistic || todo.text !== newTaskText,
          ),
        );
      } finally {
        setISloading(false);
      }
    }
  };

  return (
    <div className="w-1/3  flex  flex-col gap-5 mx-auto py-12">
      <h2>لیست وظایف</h2>
      <Input type="text" ref={inputRef} placeholder="وظیفه جدید..." />
      <Button onClick={handleAddTask}>
        {loading ? <LucideLoader className="animate-spin" /> : "افزودن وظیفه"}
      </Button>

      <ul>
        {optimisticToDo.map((todo) => (
          <li
            className="text-primary"
            key={todo.id}
            style={{
              textDecoration: todo.done ? "line-through" : "none",
              fontStyle: todo.optimistic ? "italic" : "normal", // نمایش وظایف خوش‌بینانه به صورت ایتالیک
            }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoIndex;
