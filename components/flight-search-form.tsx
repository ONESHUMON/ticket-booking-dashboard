"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Plane, Users } from "lucide-react";
import { useState } from "react";

export function FlightSearchForm() {
  const [date, setDate] = useState<Date>();

  return (
    <Card className="p-6 shadow-lg">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">From</label>
          <div className="relative">
            <Plane className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
            <Input className="pl-9" placeholder="Departure city" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">To</label>
          <div className="relative">
            <Plane className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
            <Input className="pl-9" placeholder="Arrival city" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Date</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Passengers</label>
          <div className="relative">
            <Users className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
            <Input className="pl-9" type="number" placeholder="Number of passengers" />
          </div>
        </div>
      </div>

      <Button className="mt-6 w-full bg-primary hover:bg-primary/90">
        Search Flights
      </Button>
    </Card>
  );
}