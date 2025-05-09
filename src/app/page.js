"use client";

import { use, useEffect, useState } from "react";
import RadioButton from "@/components/RadioButton";
import Stockade from "@/ui/Stockade";
import Bastion from "@/ui/Bastion";
import Fortress from "@/ui/Fortress";
import Horizontal from "@/ui/Horizontal";
import Shadowbox from "@/ui/Shadowbox";
import Inputs from "@/components/Inputs";
import Toggle from "@/components/Toggle";

export default function Home() {
  const [basePrice, setBasePrice] = useState(50);
  const [selectedStyle, setSelectedStyle] = useState("Stockade");

  const [selectedMaterial, setSelectedMaterial] = useState("Pressure Treated");
  const [materialPrice, setMaterialPrice] = useState(0);
  const [selectedHeight, setSelectedHeight] = useState("4' (front yard)");
  const [heightPrice, setHeightPrice] = useState(0);
  const [selectedDimensions, setSelectedDimensions] = useState('4" x 4"');
  const [dimensionsPrice, setDimensionsPrice] = useState(0);

  const [length, setLength] = useState(0);
  const [removalPrice, setRemovalPrice] = useState(0);
  const [totalRemovalPrice, setTotalRemovalPrice] = useState(0);
  const [gate, setGate] = useState(0);
  const [gatePrice, setGatePrice] = useState(0);

  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [displayPrice, setDisplayPrice] = useState(0);

  function calculateGatePrice() {
    const price = gate * 350;
    setGatePrice(price);
  }

  function calculateTotalRemovalPrice() {
    const removal = removalPrice * length;
    setTotalRemovalPrice(removal);
  }

  function calculateSubTotal() {
    const initialSubTotal =
      basePrice + materialPrice + heightPrice + dimensionsPrice;
    const finalSubTotal = initialSubTotal * length;
    setSubTotal(finalSubTotal);
  }

  function calculateTotal() {
    const t = subTotal + totalRemovalPrice + gatePrice;
    setTotal(t);
  }

  useEffect(() => {
    calculateGatePrice();
  }, [gate]);

  useEffect(() => {
    calculateTotalRemovalPrice();
  }, [removalPrice, length]);

  useEffect(() => {
    calculateSubTotal();
  }, [basePrice, materialPrice, heightPrice, dimensionsPrice, length, removalPrice, totalRemovalPrice]);

  useEffect(() => {
    calculateTotal();
  });

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
        <div className="flex flex-col items-center justify-center p-6 mx-4 bg-white rounded-lg shadow-md max-w-5xl min-w-80">
          <h1 className="mb-4 text-center">
            This estimate includes everything needed for the project: utility
            locates, digging posts, concrete, labour and materials!
          </h1>
          {/* Radio Group */}
          <div className="flex flex-col md:flex-row items-start w-full justify-start gap-5 md:gap-0 md:justify-evenly mb-10">
            {/* Material Option */}
            <div className="flex flex-col">
              <p className="font-semibold">Material</p>
              <div className="flex flex-row md:flex-col gap-6 md:gap-2">
                <RadioButton
                  label={"Pressure Treated"}
                  name={"material"}
                  value={"Pressure Treated"}
                  checked={selectedMaterial === "Pressure Treated"}
                  onChange={() => {
                    setSelectedMaterial("Pressure Treated");
                    setMaterialPrice(0);
                  }}
                />
                <RadioButton
                  label={"Cedar"}
                  name={"material"}
                  value={"Cedar"}
                  checked={selectedMaterial === "Cedar"}
                  onChange={() => {
                    setSelectedMaterial("Cedar");
                    setMaterialPrice(25);
                  }}
                />
              </div>
            </div>
            {/* Fence height Option */}
            <div className="flex flex-col">
              <p className="font-semibold">Fence height</p>
              <div className="flex flex-row md:flex-col gap-6 md:gap-2">
                <RadioButton
                  label={"4' (front yard)"}
                  name={"height"}
                  value={"4' (front yard)"}
                  checked={selectedHeight === "4' (front yard)"}
                  onChange={() => {
                    setSelectedHeight("4' (front yard)");
                    setHeightPrice(0);
                  }}
                />
                <RadioButton
                  label={"6' (front yard)"}
                  name={"height"}
                  value={"6' (front yard)"}
                  checked={selectedHeight === "6' (front yard)"}
                  onChange={() => {
                    setSelectedHeight("6' (front yard)");
                    setHeightPrice(6);
                  }}
                />
              </div>
            </div>
            {/* Post dimensions Option */}
            <div className="flex flex-col">
              <p className="font-semibold">Post dimensions</p>
              <div className="flex flex-row md:flex-col gap-6 md:gap-2">
                <RadioButton
                  label={'4" x 4"'}
                  name={"dimensions"}
                  value={'4" x 4"'}
                  checked={selectedDimensions === '4" x 4"'}
                  onChange={() => {
                    setSelectedDimensions('4" x 4"');
                    setDimensionsPrice(0);
                  }}
                />
                <RadioButton
                  label={'4" x 6"'}
                  name={"dimensions"}
                  value={'4" x 6"'}
                  checked={selectedDimensions === '4" x 6"'}
                  onChange={() => {
                    setSelectedDimensions('4" x 6"');
                    setDimensionsPrice(4);
                  }}
                />
                <RadioButton
                  label={'6" x 6"'}
                  name={"dimensions"}
                  value={'6" x 6"'}
                  checked={selectedDimensions === '6" x 6"'}
                  onChange={() => {
                    setSelectedDimensions('6" x 6"');
                    setDimensionsPrice(6);
                  }}
                />
              </div>
            </div>
          </div>
          {/* Inputs */}
          <div className="flex flex-col items-starts w-full justify-between md:flex-row">
            <Toggle func={setRemovalPrice} />
            <div className="flex flex-col gap-6 md:flex-row">
              {/* Length */}
              <div>
                <p className="font-semibold">Length in feet</p>
                <Inputs variable={length} func={setLength} />
              </div>
              {/* Gate */}
              <div>
                <p className="font-semibold">Number of gates</p>
                <Inputs variable={gate} func={setGate} />
              </div>
            </div>
          </div>
          {/* Fence Styles */}
          <div className="flex flex-col justify-items-start w-full mt-8">
            <p className="font-semibold">Fence style</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-2">
              <Stockade
                label={"Stockade"}
                value={"Stockade"}
                checked={selectedStyle === "Stockade"}
                onChange={() => {
                  setSelectedStyle("Stockade");
                  setBasePrice(50);
                }}
              />
              <Bastion
                label={"Bastion"}
                value={"Bastion"}
                checked={selectedStyle === "Bastion"}
                onChange={() => {
                  setSelectedStyle("Bastion");
                  setBasePrice(52);
                }}
              />
              <Fortress
                label={"Fortress"}
                value={"Fortress"}
                checked={selectedStyle === "Fortress"}
                onChange={() => {
                  setSelectedStyle("Fortress");
                  setBasePrice(55);
                }}
              />
              <Horizontal
                label={"Horizontal"}
                value={"Horizontal"}
                checked={selectedStyle === "Horizontal"}
                onChange={() => {
                  setSelectedStyle("Horizontal");
                  setBasePrice(57);
                }}
              />
              <Shadowbox
                label={"Shadowbox"}
                value={"Shadowbox"}
                checked={selectedStyle === "Shadowbox"}
                onChange={() => {
                  setSelectedStyle("Shadowbox");
                  setBasePrice(60);
                }}
              />
            </div>
          </div>
          {/* Final  Total */}
          <input
            type="text"
            className="appearance-none h-12 w-60 rounded px-2 focus:outline-none text-center bg-black text-white text-2xl"
            value={`$${displayPrice}`}
            readOnly
          />
        </div>
      </div>
    </section>
  );
}
