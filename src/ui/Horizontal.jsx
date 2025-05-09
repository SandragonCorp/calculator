export default function Horizontal({ label, value, checked, onChange }) {
  return (
    <section>
      <label className="flex justify-start items-center cursor-pointer font-normal mt-4">
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
              <path d="M188.105 17.355v190.668h24.403V17.355zm20.961 187.239h-17.593V20.714h17.593zm0 0M12.422 16.914v191.152h24.402V16.914zm20.96 187.719H15.79V20.273h17.594zm0 0"></path>
              <path d="M191.375 23.18H33.797V45.8h157.578zM37.227 42.36V26.546h150.789v15.812zm0 0M191.082 183.16H33.434v17.238h157.648zm-154.215 13.8v-10.433H187.72v10.434zm0 0M191.383 50.012H33.715v13.675h157.668zM37.145 60.25v-6.871H188.02v6.871zm0 0M191.082 66.453H33.445v26.625h157.637zM36.875 89.641V69.82h150.848v19.82zm0 0M191.09 95.953H33.422v13.676H191.09zM36.852 106.187V99.32h150.875v6.868zm0 0M191.383 112.5H33.715v13.676h157.668zM37.145 122.734v-6.867H188.02v6.867zm0 0M191.375 128.836H33.738v26.629h157.637zM37.168 152.023v-19.82h150.848v19.82zm0 0M191.383 158H33.664v21.246h157.719zM37.098 175.805v-14.438H188.02v14.438zm0 0"></path>
            </g>
          </svg>
          <label htmlFor={value}>{label}</label>
        </span>
      </label>
    </section>
  )
}
