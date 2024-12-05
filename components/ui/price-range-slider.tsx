"use client";

import * as React from "react";
import { Slider } from "@/components/ui/slider";

export function PriceRangeSlider() {
  const [value, setValue] = React.useState([0, 1000]);

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <span className="text-sm text-gray-600">${value[0]}</span>
        <span className="text-sm text-gray-600">${value[1]}</span>
      </div>
      <Slider
        defaultValue={value}
        max={1000}
        step={1}
        onValueChange={setValue}
        className="w-full"
      />
    </div>
  );
}