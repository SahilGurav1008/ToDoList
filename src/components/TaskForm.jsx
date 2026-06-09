import { useState } from "react";

export default function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = () => {
    if (!title || !time) return;

    addTask(title, time);

    setTitle("");
    setTime("");
  };

  return (
    <div className="bg-slate-800 p-5 rounded-xl">

      <input
        className="w-full p-3 rounded bg-slate-700 mb-3"
        placeholder="Task Name"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
      />

      <input
        type="time"
        className="w-full p-3 rounded bg-slate-700 mb-3"
        value={time}
        onChange={(e)=>setTime(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="bg-purple-600 px-5 py-2 rounded"
      >
        Add Task
      </button>

    </div>
  );
}