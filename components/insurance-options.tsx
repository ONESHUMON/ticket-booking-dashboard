"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Star, Camera } from "lucide-react";

export function InsuranceOptions() {
  return (
    <Card className="mb-6 p-6">
      <h2 className="mb-6 text-xl font-semibold text-gray-800">Travel Insurance</h2>
      
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border p-4">
          <div className="mb-4 flex justify-center">
            <Heart className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="mb-2 text-center font-medium">No Insurance</h3>
          <ul className="mb-4 space-y-2 text-sm text-gray-500">
            <li>No Medical Coverage</li>
            <li>No Trip Protection</li>
            <li>No Baggage Protection</li>
          </ul>
          <Button variant="outline" className="w-full">
            $0
          </Button>
        </div>

        <div className="rounded-lg border border-primary p-4">
          <div className="mb-4 flex justify-center">
            <Star className="h-8 w-8 text-primary" />
          </div>
          <h3 className="mb-2 text-center font-medium">Travel Basic</h3>
          <ul className="mb-4 space-y-2 text-sm text-gray-500">
            <li>Medical Expenses</li>
            <li>Trip Cancellation</li>
            <li>Lost Baggage</li>
          </ul>
          <Button className="w-full">
            $25
          </Button>
        </div>

        <div className="rounded-lg border p-4">
          <div className="mb-4 flex justify-center">
            <Camera className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="mb-2 text-center font-medium">Travel Plus</h3>
          <ul className="mb-4 space-y-2 text-sm text-gray-500">
            <li>Medical Expenses</li>
            <li>Trip Cancellation</li>
            <li>Lost Baggage</li>
            <li>Air Travel Insurance</li>
            <li>Liability</li>
          </ul>
          <Button variant="outline" className="w-full">
            $35
          </Button>
        </div>
      </div>
    </Card>
  );
}