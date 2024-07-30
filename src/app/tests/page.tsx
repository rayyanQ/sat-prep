import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header from "@/components/Header"
import TestCard from "@/components/TestCard"
import { H2 } from "@/components/ui/heading"
import TestIcon from "../../../public/test-icon.svg"
import Image from "next/image"


// Temp Data
const TEST_DATA = [
  {
    name: "Mini-test 1",
  },
  {
    name: "Mini-test 2",
  },
  {
    name: "Full-test 1",
  },
];

// Main Tests page component
const Tests = () => {
  return (
    <>
      <Header />
      <main className="w-full flex flex-col justify-center items-start">
        <TestSection />
      </main>
    </>
  );
}

const TestSection = () => {
  return (
    <section className="container py-6">
        <div className="flex flex-row justify-between items-center pb-2">
          <div>
            <H2>Test List</H2>
          </div>
          <div></div>
        </div>

        <div className="flex flex-row justify-start items-center space-x-10">
          {
            TEST_DATA.map((test, index) => 
              <TestCard key={test.name + index}>
                <Image src={TestIcon} alt="Test Icon" height={100} width={100} className="m-2" />
                <h2>{test.name}</h2>
              </TestCard>
            )
          }
        </div>
      </section>
  );
}


export default Tests;