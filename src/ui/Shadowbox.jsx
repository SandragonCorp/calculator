export default function Shadowbox({ label, value, checked, onChange }) {
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
              <path d="M64.203 23.582v178.996h22.621V23.582zm19.18 175.566H67.57V26.941h15.813zm0 0M102.926 23.582v179.297h22.62V23.582zm19.18 175.863h-15.813v-172.5h15.812zm0 0M141.262 23.582v179.297h22.617V23.582zm19.18 175.863h-15.813v-172.5h15.812zm0 0"></path>
              <path d="M194.195 41.23H31.227v22.622h162.968zM34.66 60.414V44.602h156.176v15.812zm0 0M194.2 153.672H30.628v22.621h163.57zm-160.137 19.18v-15.813h156.773v15.813zm0 0"></path>
              <path
                d="M47.914 21.086h16.32v179.86h-16.32zm0 0"
                fill="#FFF"
              ></path>
              <path d="M44.816 19.27v186.484h22.618V19.27zm19.18 183.054H48.184V22.63h15.812zm0 0"></path>
              <path
                d="M86.777 21.086h16.18v179.883h-16.18zm0 0"
                fill="#FFF"
              ></path>
              <path d="M83.566 19.27v186.484h22.618V19.27zm19.18 183.054H86.934V22.63h15.812zm0 0"></path>
              <path
                d="M125.5 21.082h15.793v179.863H125.5zm0 0"
                fill="#FFF"
              ></path>
              <path d="M122.285 19.27v186.484h22.621V19.27zm19.184 183.054h-15.817V22.63h15.817zm0 0"></path>
              <path
                d="M163.836 21.086h15.984v179.93h-15.984zm0 0"
                fill="#FFF"
              ></path>
              <path d="M160.594 19.45v186.335h22.617V19.45zm19.18 182.905H163.96V22.813h15.812zm0 0"></path>
            </g>
          </svg>
          <label htmlFor={value}>{label}</label>
        </span>
      </label>
    </section>
  )
}
