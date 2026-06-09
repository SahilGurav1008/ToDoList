import { useEffect, useState } from "react";

export default function DateTimeCard() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-slate-800 rounded-2xl p-5 mb-5">
      <h2 className="text-xl font-bold text-purple-400">
        Today
      </h2>

      <p className="text-2xl mt-2">
        {now.toLocaleDateString("en-US", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>

      <p className="text-4xl font-bold mt-3">
        {now.toLocaleTimeString()}
      </p>
    </div>
  );
}