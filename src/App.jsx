import { useState, useEffect } from "react";
import DateTimeCard from "./components/DateTimeCard";
import Navbar from "./components/Navbar";
import TaskForm from "./components/TaskForm";
import TaskCard from "./components/TaskCard";
import ProgressChart from "./components/ProgressChart";

export default function App() {

  <DateTimeCard />
  const [tasks, setTasks] = useState([]);

  const addTask = (title,time) => {

    const newTask = {
      id: Date.now(),
      title,
      time,
      completed:false
    };

    setTasks([...tasks,newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t=>t.id!==id));
  };

  const toggleComplete = (id) => {

    setTasks(
      tasks.map(task =>
        task.id===id
          ? {...task,completed:!task.completed}
          : task
      )
    );
  };

  useEffect(()=>{

    const timer = setInterval(()=>{

      const current =
        new Date()
        .toLocaleTimeString([],{
          hour:"2-digit",
          minute:"2-digit",
          hour12:false
        });

      tasks.forEach(task=>{

        if(
          task.time===current &&
          !task.completed
        ){
          alert(`⏰ ${task.title}`);
        }

      });

    },1000);

    return ()=>clearInterval(timer);

  },[tasks]);

  const completed =
    tasks.filter(t=>t.completed).length;

  const pending =
    tasks.length-completed;

  return (
    <div>

      <Navbar />

      <div className="max-w-6xl mx-auto p-5">

        <TaskForm addTask={addTask} />

        <div className="grid gap-4 mt-5">

          {tasks.map(task=>(
            <TaskCard
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              toggleComplete={toggleComplete}
            />
          ))}

        </div>

        <div className="mt-10">

          <ProgressChart
            completed={completed}
            pending={pending}
          />

        </div>

      </div>

    </div>
  );
}