export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5 bg-slate-900 border-b border-slate-700">
      <h1 className="text-3xl font-bold text-purple-400">
        SmartFocus
      </h1>

      <div>
        <span className="text-slate-300">
          Productivity Dashboard
        </span>
      </div>
    </nav>
  );
}