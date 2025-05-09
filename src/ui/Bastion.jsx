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
                      <path d="M33.242 42.402v145.746H55.86V42.402zm19.18 142.313H36.609V45.762h15.813zm0 0"></path>
                      <path d="M52.719 42.402v145.746h22.62V42.402zm19.18 142.313H56.085V45.762h15.812zm0 0"></path>
                      <path d="M72.105 42.586V188.18h22.622V42.586zm19.184 142.16H75.473v-138.8h15.816zm0 0"></path>
                      <path d="M91.469 42.402v145.746h22.617V42.402zm19.18 142.313H94.835V45.762h15.812zm0 0"></path>
                      <path d="M110.828 42.402v145.746h22.621V42.402zm19.18 142.313h-15.813V45.762h15.813zm0 0"></path>
                      <path d="M130.191 42.402v145.746h22.618V42.402zm19.18 142.313H133.56V45.762h15.812zm0 0"></path>
                      <path d="M149.164 42.402v145.746h22.617V42.402zm19.18 142.313H152.53V45.762h15.813zm0 0"></path>
                      <path d="M168.91 42.586V188.18h22.621V42.586zm19.184 142.16h-15.817v-138.8h15.817zm0 0"></path>
                      <path d="M188.21 17.355v190.668h24.4V17.355zm20.962 187.239h-17.594V20.714h17.594zm0 0M12.316 16.914v191.152H36.72V16.914zm20.965 187.719H15.684V20.273H33.28zm0 0"></path>
                      <path d="M191.477 185.52H33.902v22.62h157.575zM37.332 204.703v-15.812h150.785v15.812zm0 0M191.188 17.188H33.516v13.675h157.672zM36.948 27.422v-6.867h150.875v6.867zm0 0"></path>
                      <path
                        d="M36.602 24.012h151.515v15.437H36.602zm0 0"
                        fill="#FFF"
                        stroke="#FFF"
                      ></path>
                      <path d="M190.977 23.832H33.317v21.707h157.66zM36.75 42.098V27.203h150.867v14.895zm0 0"></path>
                    </g>
          </svg>
          <label htmlFor={value}>{label}</label>
        </span>
      </label>
    </section>
  )
}
