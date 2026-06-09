import { FaTrash } from "react-icons/fa";

export default function TaskCard({
  task,
  deleteTask,
  toggleComplete
}) {

  return (
    <div className="bg-slate-800 p-4 rounded-xl flex justify-between">

      <div>

        <h2
          className={`font-bold text-lg ${
            task.completed
              ? "line-through text-green-400"
              : ""
          }`}
        >
          {task.title}
        </h2>

        <p className="text-slate-400">
          ⏰ {task.time}
        </p>

      </div>

      <div className="flex gap-3">

        <button
          onClick={()=>toggleComplete(task.id)}
          className="bg-green-600 px-3 rounded"
        >
          ✓
        </button>

        <button
          onClick={()=>deleteTask(task.id)}
          className="bg-red-600 px-3 rounded"
        >
          <FaTrash />
        </button>

      </div>

    </div>
  );
}