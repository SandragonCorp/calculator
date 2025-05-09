export default function Stockade({ label, value, checked, onChange }) {
  return (
    <section>
      <label className="flex justify-start items-center cursor-pointer font-normal">
        <input
          type="radio"
          id={value}
          name={value}
          className="sr-only peer"
          checked={checked}
          onChange={onChange}
        />
        <span className="flex flex-col items-center justify-center w-36 h-36 border-2 border-transparent peer-checked:border-black rounded-sm mb-5">
          <svg
            fill="currentColor"
            height="1em"
            stroke="currentColor"
            version="1.2"
            viewBox="0 0 224.88 225"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            className="size-40"
          >
            <g>
              <path d="M33.527 20.738V204.23h22.618V20.738zm19.18 180.063H36.895V24.098h15.812zm0 0"></path>
              <path d="M53.004 20.738V204.23H75.62V20.738zm19.18 180.063H56.37V24.098h15.813zm0 0"></path>
              <path d="M72.39 20.71v183.345h22.622V20.71zm19.18 179.911H75.758V24.074H91.57zm0 0"></path>
              <path d="M91.754 20.738V204.23h22.617V20.738zm19.18 180.063H95.12V24.098h15.813zm0 0"></path>
              <path d="M111.113 20.738V204.23h22.621V20.738zm19.18 180.063H114.48V24.098h15.813zm0 0"></path>
              <path d="M130.473 20.738V204.23h22.62V20.738zm19.183 180.063H133.84V24.098h15.816zm0 0"></path>
              <path d="M149.45 20.738V204.23h22.616V20.738zm19.179 180.063h-15.813V24.098h15.813zm0 0"></path>
              <path d="M168.781 20.922v183.34h22.617V20.922zm19.18 179.91h-15.813V24.282h15.813zm0 0"></path>
            </g>
          </svg>
          <label htmlFor={value}>{label}</label>
        </span>
      </label>
    </section>
  )
}
