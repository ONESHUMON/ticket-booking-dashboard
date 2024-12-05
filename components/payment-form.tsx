"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export function PaymentForm() {
  return (
    <Card className="mb-6 p-6">
      <h2 className="mb-6 text-xl font-semibold text-gray-800">How Would You Like to Pay?</h2>
      
      <div className="space-y-6">
        <div className="flex space-x-4">
          <Image src="/payment/paypal.png" alt="PayPal" width={60} height={40} />
          <Image src="/payment/discover.png" alt="Discover" width={60} height={40} />
          <Image src="/payment/mastercard.png" alt="Mastercard" width={60} height={40} />
          <Image src="/payment/visa.png" alt="Visa" width={60} height={40} />
          <Image src="/payment/western-union.png" alt="Western Union" width={60} height={40} />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium">Card Number</label>
            <Input placeholder="0000 0000 0000 0000" />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Name on the Card</label>
            <Input placeholder="Enter name as shown on card" />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Expiry Date</label>
            <Input placeholder="MM/YY" />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">CVV Code</label>
            <Input placeholder="000" type="password" maxLength={3} />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium">Country</label>
            <Input placeholder="Enter your country" />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Billing Address</label>
            <Input placeholder="Enter your billing address" />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">City</label>
            <Input placeholder="Enter city" />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">ZIP Code</label>
            <Input placeholder="Enter ZIP code" />
          </div>
        </div>
      </div>
    </Card>
  );
}