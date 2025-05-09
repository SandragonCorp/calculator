export default function RadioButton({ label, name, value, checked, onChange }) {
  return (
    <div className="flex flex-col">
      <label className="flex justify-centers gap-2">
        <input
          type="radio"
          id={value}
          name={name}
          value={value}
          className="h-4 w-4 self-center border-black"
          checked={checked}
          onChange={onChange}
        />
        <label htmlFor={value}>{label}</label>
      </label>
    </div>
  );
}
