import Image from 'next/image'
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/ui/Navbar";

export default function LandingPage() {
  return (
    <div>
      {/* Navbar Section */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-white min-h-screen flex items-center justify-center px-12">
        {/* Flex container with gap */}
        <div className="flex items-center justify-between w-full max-w-5xl gap-8">
          {/* Left column for text */}
          <div className="w-1/2">
            <p className="text-lg text-gray-500">My Name is</p>
            <h6 className="text-5xl font-bold mb-4">
              Irawan A P
            </h6>
            <p className="text-lg text-gray-600 mb-6">
              I am a Web Developer!
            </p>
            {/* Corrected Button Variant */}
            <Button variant="primary">Download CV</Button>
          </div>

          {/* Right column for image */}
          <div className="w-1/2 flex justify-center">
            {/* Fixed Image component with width and height */}
            <Image 
              src="/photo.png"
              alt="photo"
              width={288} // Equivalent to w-72 in Tailwind (72 * 4px)
              height={288} // Equivalent to h-72 in Tailwind (72 * 4px)
              className="object-cover rounded-full shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
