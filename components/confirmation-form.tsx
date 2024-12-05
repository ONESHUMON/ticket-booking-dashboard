"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export function ConfirmationForm() {
  return (
    <Card className="mb-6 p-6">
      <h2 className="mb-6 text-xl font-semibold text-gray-800">Where Should We Send Your Confirmation?</h2>
      
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium">Email Address</label>
          <Input type="email" placeholder="Enter email address" />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium">Phone Number</label>
          <Input type="tel" placeholder="Enter phone number" />
        </div>
      </div>

      <div className="mt-4 flex items-center space-x-2">
        <Checkbox id="terms" />
        <label htmlFor="terms" className="text-sm text-gray-600">
          I accept the Terms on this trip
        </label>
      </div>

      <div className="mt-4 flex items-center space-x-2">
        <Checkbox id="notifications" />
        <label htmlFor="notifications" className="text-sm text-gray-600">
          Send me the best deals by Email
        </label>
      </div>

      <div className="mt-6 flex justify-between">
        <Button size="lg" variant="outline">
          Review and Book Your Trip
        </Button>
        <Button size="lg" className="bg-primary hover:bg-primary/90">
          Buy Now
        </Button>
      </div>
    </Card>
  );
}