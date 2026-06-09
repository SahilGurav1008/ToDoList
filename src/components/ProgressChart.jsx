import {
  PieChart,
  Pie,
  Cell,
  Tooltip
} from "recharts";

export default function ProgressChart({
  completed,
  pending
}) {

  const data = [
    { name:"Completed", value:completed },
    { name:"Pending", value:pending }
  ];

  return (
    <div className="bg-slate-800 rounded-xl p-5">

      <h2 className="text-xl font-bold mb-4">
        Progress
      </h2>

      <PieChart width={300} height={250}>
        <Pie
          data={data}
          dataKey="value"
          outerRadius={80}
        >
          <Cell fill="#22c55e" />
          <Cell fill="#ef4444" />
        </Pie>

        <Tooltip />
      </PieChart>

    </div>
  );
}