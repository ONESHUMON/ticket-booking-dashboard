"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

interface FlightCardProps {
  airline: string;
  logo: string;
  departureTime: string;
  arrivalTime: string;
  price: number;
  departureAirport: string;
  arrivalAirport: string;
  stops?: number;
}

export function FlightCard({
  airline,
  logo,
  departureTime,
  arrivalTime,
  price,
  departureAirport,
  arrivalAirport,
  stops = 0
}: FlightCardProps) {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative h-8 w-8">
            <Image src={logo} alt={airline} fill className="object-contain" />
          </div>
          <span className="text-sm text-gray-600">{airline}</span>
        </div>
        <div className="text-right">
          <span className="text-lg font-semibold">${price}</span>
          <Button size="sm" className="ml-4">
            Book
          </Button>
        </div>
      </div>
      
      <div className="mt-4 flex items-center justify-between">
        <div className="text-center">
          <div className="text-lg font-semibold">{departureTime}</div>
          <div className="text-sm text-gray-500">{departureAirport}</div>
        </div>
        
        <div className="flex-1 px-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            {stops > 0 && (
              <div className="relative flex justify-center">
                <span className="bg-white px-2 text-xs text-gray-500">
                  {stops} stop{stops > 1 ? "s" : ""}
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="text-center">
          <div className="text-lg font-semibold">{arrivalTime}</div>
          <div className="text-sm text-gray-500">{arrivalAirport}</div>
        </div>
      </div>
    </Card>
  );
}