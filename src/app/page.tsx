import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center py-20">
      <div className="container">
        <div className="w-full h-64 relative">
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl text-center font-bold text-white z-10">
            Repository of SAT Practice Questions
          </h1>
          <Image
            src="/hero.jpg"
            alt="Hero"
            fill
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col justify-start items-center py-10">
          <a href="https://kdjukckera9.typeform.com/to/XRsjn1Y2" target="_blank">
            <Button className="p-10"><h2 className="text-4xl font-bold">Join the waitlist</h2></Button>
          </a>
        </div>
      </div>
    </main>
  );
}
