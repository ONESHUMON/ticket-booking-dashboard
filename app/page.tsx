import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { PriceRangeSlider } from "@/components/ui/price-range-slider";
import { TimeFilter } from "@/components/ui/time-filter";
import { AirlineFilter } from "@/components/ui/airline-filter";
import { FlightCard } from "@/components/flight-card";
import { FlightSearchHeader } from "@/components/flight-search-header";
import { PassengerForm } from "@/components/passenger-form";
import { InsuranceOptions } from "@/components/insurance-options";
import { PaymentForm } from "@/components/payment-form";
import { ConfirmationForm } from "@/components/confirmation-form";
import { Navbar } from "@/components/navbar";

export default function Home() {
  const flights = [
    {
      airline: "Turkish Airlines",
      logo: "/airlines/turkish.png",
      departureTime: "09:45PM",
      arrivalTime: "12:55AM",
      price: 583,
      departureAirport: "LOS ANGELES LAX",
      arrivalAirport: "ISTANBUL IST",
      stops: 0
    },
    {
      airline: "Emirates",
      logo: "/airlines/emirates.png",
      departureTime: "04:05PM",
      arrivalTime: "01:00AM",
      price: 600,
      departureAirport: "LOS ANGELES LAX",
      arrivalAirport: "ISTANBUL IST",
      stops: 1
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto py-8">
        <FlightSearchHeader />
        
        <div className="grid grid-cols-12 gap-6">
          {/* Filters */}
          <div className="col-span-3">
            <Card className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="mb-4 font-semibold">Price Range</h3>
                  <PriceRangeSlider />
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="mb-4 font-semibold">Depart Time</h3>
                  <TimeFilter />
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="mb-4 font-semibold">Airlines</h3>
                  <AirlineFilter />
                </div>
                
                <Button variant="outline" className="w-full">
                  Reset All Filters
                </Button>
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="col-span-9">
            <div className="mb-4 flex items-center justify-between">
              <div className="text-sm text-gray-600">
                546 Results
              </div>
              <div className="text-sm">
                Sort by: <span className="font-semibold">Price per Adult</span>
              </div>
            </div>

            <div className="space-y-4">
              {flights.map((flight, index) => (
                <FlightCard key={index} {...flight} />
              ))}
            </div>

            <div className="mt-8">
              <PassengerForm />
              <InsuranceOptions />
              <PaymentForm />
              <ConfirmationForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}