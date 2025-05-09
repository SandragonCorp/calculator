"use client";

import { use, useEffect, useState } from "react";

export default function Home() {
  const [basePrice, setBasePrice] = useState(50);
  const [selectedStyle, setSelectedStyle] = useState("Stockade");

  const [selectedMaterial, setSelectedMaterial] = useState("Pressure Treated");
  const [materialPrice, setMaterialPrice] = useState(0);
  const [selectedHeight, setSelectedHeight] = useState("4' (front yard)");
  const [heightPrice, setHeightPrice] = useState(0);
  const [selectedDimensions, setSelectedDimensions] = useState('4" x 4"');
  const [dimensionsPrice, setDimensionsPrice] = useState(0);

  const [isChecked, setIsChecked] = useState(false);
  const [removalPrice, setRemovalPrice] = useState(0);
  const [length, setLength] = useState(0);
  const [gate, setGate] = useState(0);
  const [gatePrice, setGatePrice] = useState(0);

  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [displayPrice, setDisplayPrice] = useState(0);

  function calculateGatePrice() {
    const price = gate * 350;
    setGatePrice(price);
  }

  function calculateSubTotal() {
    const initialSubTotal =
      basePrice + materialPrice + heightPrice + dimensionsPrice;
    const finalSubTotal = initialSubTotal * length;
    setSubTotal(finalSubTotal);
  }

  function calculateTotal() {
    const t = subTotal + removalPrice + gatePrice;
    setTotal(t);
  }

  useEffect(() => {
    calculateGatePrice();
  }, [gate]);

  useEffect(() => {
    calculateSubTotal();
  }, [basePrice, materialPrice, heightPrice, dimensionsPrice, length]);

  useEffect(() => {
    calculateTotal();
  }, [subTotal, removalPrice, gatePrice]);

  useEffect(() => {
    if (total > 1200) {
      setDisplayPrice(total);
    } else {
      setDisplayPrice(1200);
    }
  }, [total]);

  return (
    <section>
      <div className="flex flex-row items-center justify-center min-h-screen p-4">
        <div className="flex flex-col items-center justify-center w-fit p-6 mx-4 bg-white rounded-lg shadow-md">
          <h1 className="mb-4 text-center">
            This estimate includes everything needed for the project: utility
            locates, digging posts, concrete, labour and materials!
          </h1>
          {/* Radio Group */}
          <div className="flex flex-row items-starts w-full justify-items-start gap-36 mb-10">
            {/* Material Option */}
            <div className="flex flex-col">
              <p className="font-semibold">Material</p>
              <label className="flex justify-centers gap-2">
                <input
                  type="radio"
                  name="material"
                  className="h-4 w-4 self-center border-black"
                  checked={selectedMaterial === "Pressure Treated"}
                  onChange={() => {
                    setSelectedMaterial("Pressure Treated");
                    setMaterialPrice(0);
                  }}
                />{" "}
                Pressure Treated
              </label>
              <label className="flex justify-centers gap-2">
                <input
                  type="radio"
                  name="material"
                  className="h-4 w-4 self-center border-black"
                  checked={selectedMaterial === "Cedar"}
                  onChange={() => {
                    setSelectedMaterial("Cedar");
                    setMaterialPrice(25);
                  }}
                />{" "}
                Cedar
              </label>
            </div>
            {/* Fence height Option */}
            <div className="flex flex-col">
              <p className="font-semibold">Fence height</p>
              <label className="flex justify-centers gap-2">
                <input
                  type="radio"
                  name="height"
                  className="h-4 w-4 self-center border-black"
                  checked={selectedHeight === "4' (front yard)"}
                  onChange={() => {
                    setSelectedHeight("4' (front yard)");
                    setHeightPrice(0);
                  }}
                />{" "}
                4' (front yard)
              </label>
              <label className="flex justify-centers gap-2">
                <input
                  type="radio"
                  name="height"
                  className="h-4 w-4 self-center border-black"
                  checked={selectedHeight === "6' (front yard)"}
                  onChange={() => {
                    setSelectedHeight("6' (front yard)");
                    setHeightPrice(6);
                  }}
                />{" "}
                6' (front yard)
              </label>
            </div>
            {/* Post dimensions Option */}
            <div className="flex flex-col">
              <p className="font-semibold">Post dimensions</p>
              <label className="flex justify-centers gap-2">
                <input
                  type="radio"
                  name="dimensions"
                  className="h-4 w-4 self-center border-black"
                  checked={selectedDimensions === '4" x 4"'}
                  onChange={() => {
                    setSelectedDimensions('4" x 4"');
                    setDimensionsPrice(0);
                  }}
                />{" "}
                4" x 4"
              </label>
              <label className="flex justify-centers gap-2">
                <input
                  type="radio"
                  name="dimensions"
                  className="h-4 w-4 self-center border-black"
                  checked={selectedDimensions === '4" x 6"'}
                  onChange={() => {
                    setSelectedDimensions('4" x 6"');
                    setDimensionsPrice(4);
                  }}
                />{" "}
                4" x 6"
              </label>
              <label className="flex justify-centers gap-2">
                <input
                  type="radio"
                  name="dimensions"
                  className="h-4 w-4 self-center border-black"
                  checked={selectedDimensions === '6" x 6"'}
                  onChange={() => {
                    setSelectedDimensions('6" x 6"');
                    setDimensionsPrice(6);
                  }}
                />{" "}
                6" x 6"
              </label>
            </div>
          </div>
          {/* Inputs */}
          <div className="flex flex-row items-starts w-full justify-between">
            <div>
              <p className="font-semibold">Remove existing fence</p>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => {
                    setIsChecked(!isChecked);
                    if (isChecked) {
                      setRemovalPrice(0);
                    } else {
                      setRemovalPrice(450);
                    }
                  }}
                  className="sr-only"
                />
                <div
                  className={`w-14 h-8 rounded-sm flex items-center px-1 transition-colors duration-300 ${
                    isChecked ? "bg-blue-500" : "bg-gray-400"
                  }`}
                >
                  <div
                    className={`w-6 h-6 bg-white rounded-sm shadow-md transform transition-transform duration-300 ${
                      isChecked ? "translate-x-6" : "translate-x-0"
                    }`}
                  ></div>
                </div>
              </label>
            </div>
            <div className="flex flex-row gap-5">
              {/* Length */}
              <div>
                <p className="font-semibold">Length in feet</p>
                <div className="flex flex-row items-center justify-between gap-1">
                  <button
                    className="w-16 h-8 flex items-center justify-center border rounded text-xl bg-black text-white cursor-pointers"
                    onClick={() => {
                      if (length > 0) {
                        setLength(length - 1);
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
                    value={length}
                    onChange={(e) => {
                      const value = parseInt(e.target.value);
                      if (!isNaN(value)) {
                        setLength(value);
                      }
                    }}
                  />
                  <button
                    className="w-16 h-8 flex items-center justify-center border rounded text-xl bg-black text-white cursor-pointers"
                    onClick={() => setLength(length + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              {/* Gate */}
              <div>
                <p className="font-semibold">Number of gates</p>
                <div className="flex flex-row items-center justify-between gap-1">
                  <button
                    className="w-16 h-8 flex items-center justify-center border rounded text-xl bg-black text-white cursor-pointers"
                    onClick={() => {
                      if (gate > 0) {
                        setGate(gate - 1);
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
                    value={gate}
                    onChange={(e) => {
                      const value = parseInt(e.target.value);
                      if (!isNaN(value)) {
                        setGate(value);
                      }
                    }}
                  />
                  <button
                    className="w-16 h-8 flex items-center justify-center border rounded text-xl bg-black text-white cursor-pointers"
                    onClick={() => setGate(gate + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Fence Styles */}
          <div className="flex flex-col justify-items-start w-full mt-10 mb-10">
            <p className="font-semibold">Fence style</p>
            <div className="flex flex-row justify-evenly">
              <label className="flex justify-start items-center cursor-pointer font-normal mt-4">
                <input
                  type="radio"
                  name="style"
                  className="sr-only peer"
                  checked={selectedStyle === "Stockade"}
                  onChange={() => {
                    setSelectedStyle("Stockade");
                    setBasePrice(50);
                  }}
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
                  Stockade
                </span>
              </label>
              <label className="flex justify-start items-center cursor-pointer font-normal mt-4">
                <input
                  type="radio"
                  name="style"
                  className="sr-only peer"
                  checked={selectedStyle === "Bastion"}
                  onChange={() => {
                    setSelectedStyle("Bastion");
                    setBasePrice(52);
                  }}
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
                  Bastion
                </span>
              </label>
              <label className="flex justify-start items-center cursor-pointer font-normal mt-4">
                <input
                  type="radio"
                  name="style"
                  className="sr-only peer"
                  checked={selectedStyle === "Fortress"}
                  onChange={() => {
                    setSelectedStyle("Fortress");
                    setBasePrice(55);
                  }}
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
                        d="M36.773 104.148h151.313v16.692H36.773zm0 0"
                        fill="white"
                      ></path>
                      <path d="M190.977 101.21H33.398v22.622h157.579zM36.828 120.396v-15.813h150.79v15.813zm0 0"></path>
                    </g>
                  </svg>
                  Fortress
                </span>
              </label>
              <label className="flex justify-start items-center cursor-pointer font-normal mt-4">
                <input
                  type="radio"
                  name="style"
                  className="sr-only peer"
                  checked={selectedStyle === "Horizontal"}
                  onChange={() => {
                    setSelectedStyle("Horizontal");
                    setBasePrice(57);
                  }}
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
                  Horizontal
                </span>
              </label>
              <label className="flex justify-start items-center cursor-pointer font-normal mt-4">
                <input
                  type="radio"
                  name="style"
                  className="sr-only peer"
                  checked={selectedStyle === "Shadowbox"}
                  onChange={() => {
                    setSelectedStyle("Shadowbox");
                    setBasePrice(60);
                  }}
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
                  Shadowbox
                </span>
              </label>
            </div>
          </div>
          {/* Final  Total */}
          <input
            type="text"
            className="appearance-none h-15 w-60 rounded px-2 py-1 focus:outline-none text-center bg-black text-white text-2xl"
            value={`$${displayPrice}`}
            readOnly
          />
        </div>
      </div>
    </section>
  );
}
