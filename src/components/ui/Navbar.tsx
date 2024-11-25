import * as React from "react"

import { Button } from "./button"

export const Navbar = () => (
  <nav className="bg-white shadow-lg">
    <div className="container mx-auto px-6 py-4">
      <div className="flex justify-center">
        <div className="inline-flex bg-gray-100 rounded-full px-4 py-2">
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">About</Button>
          <Button variant="ghost">Skills</Button>
          <Button variant="ghost">Education</Button>
          <Button variant="ghost">Contact</Button>
        </div>
      </div>
    </div>
  </nav>
);

