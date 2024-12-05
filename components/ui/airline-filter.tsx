"use client";

import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";

export function AirlineFilter() {
  const airlines = [
    "Air Berlin",
    "Air Canada",
    "Air France",
    "Alitalia",
    "Austrian Airlines"
  ];

  return (
    <div className="space-y-2">
      {airlines.map((airline) => (
        <div key={airline} className="flex items-center space-x-2">
          <Checkbox id={airline.toLowerCase().replace(" ", "-")} />
          <label
            htmlFor={airline.toLowerCase().replace(" ", "-")}
            className="text-sm text-gray-600"
          >
            {airline}
          </label>
        </div>
      ))}
    </div>
  );
}