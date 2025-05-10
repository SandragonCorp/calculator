export default function Inputs({ variable, func }) {
  return (
    <div className="flex flex-row items-center justify-between gap-1">
      <button
        className="w-16 md:w-12 lg:w-16 h-8 flex items-center justify-center border rounded text-xl bg-black text-white cursor-pointers"
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
        inputMode="text"
        pattern="[0-9.]*"
        className="appearance-none w-full md:w-50 lg:w-40 border border-gray-400 rounded px-2 py-1 focus:outline-none text-center"
        value={variable === 0 ? "" : variable}
        onChange={(e) => {
          const val = e.target.value;

          if (val === "") {
            func(0);
          } else {
            const num = parseFloat(val, 10);
            if (!isNaN(num)) {
              func(num);
            }
          }
        }}
      />

      <button
        className="w-16 md:w-12 lg:w-16 h-8 flex items-center justify-center border rounded text-xl bg-black text-white cursor-pointers"
        onClick={() => func(variable + 1)}
      >
        +
      </button>
    </div>

  );
}
