export default function Inputs({ variable, func }) {
  return (
    <div className="flex flex-row items-center justify-between gap-1">
      <button
        className="w-16 h-8 flex items-center justify-center border rounded text-xl bg-black text-white cursor-pointers"
        onClick={() => {
          if (variable > 0) {
            func(variable - 1);
          }
        }}
      >
        -
      </button>
      <input
        type="number"
        inputMode="numeric"
        pattern="[0-9]*"
        className="appearance-none w-40 border border-gray-400 rounded px-2 py-1 focus:outline-none text-center"
        value={variable}
        onChange={(e) => {
          const value = parseInt(e.target.value);
          if (!isNaN(value)) {
            func(value);
          }
        }}
      />
      <button
        className="w-16 h-8 flex items-center justify-center border rounded text-xl bg-black text-white cursor-pointers"
        onClick={() => func(variable + 1)}
      >
        +
      </button>
    </div>

  );
}
