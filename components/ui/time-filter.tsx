"use client";

import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";

export function TimeFilter() {
  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <Checkbox id="early" />
        <label htmlFor="early" className="text-sm text-gray-600">
          6am - 12pm
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="afternoon" />
        <label htmlFor="afternoon" className="text-sm text-gray-600">
          12pm - 6pm
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="evening" />
        <label htmlFor="evening" className="text-sm text-gray-600">
          After 6pm
        </label>
      </div>
    </div>
  );
}