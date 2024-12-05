import { Button } from "@/components/ui/button";
import { Plane } from "lucide-react";

export function Navbar() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <Plane className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">FlyEase</span>
        </div>
        <nav className="hidden space-x-6 md:flex">
          <a className="text-sm font-medium hover:text-primary" href="#">
            Flights
          </a>
          <a className="text-sm font-medium hover:text-primary" href="#">
            Hotels
          </a>
          <a className="text-sm font-medium hover:text-primary" href="#">
            Car Rental
          </a>
          <a className="text-sm font-medium hover:text-primary" href="#">
            Deals
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost">Sign In</Button>
          <Button>Register</Button>
        </div>
      </div>
    </header>
  );
}