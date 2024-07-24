import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header from "@/components/Header"
import TestCard from "@/components/TestCard"
import { Payment, columns } from "@/components/TestTable/columns"
import { DataTable } from "@/components/TestTable/data-table"
import TestIcon from "../../public/test-icon.svg"
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
 
const payment: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
  // ...
]

// Main Home page component
const Home = () => {
  return (
    <>
      <Header loggedin={false} />
      <main className="w-full flex flex-col justify-center items-start">
        <TestSection />
        <QuestionSection />
      </main>
    </>
  );
}

const TestSection = () => {
  return (
    <section className="container py-6">
        <div className="flex flex-row justify-between items-center pb-2">
          <div>
            <h3 className="text-2xl font-bold">Recommended Tests</h3>
          </div>
          <div>
            <a href="#">See all tests</a>
          </div>
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

const QuestionSection = () => {
  return (
    <section className="container py-6">
      <div className="flex flex-row justify-between items-center pb-2">
        <div>
          <h3 className="text-2xl font-bold">Questions</h3>
          <Tabs></Tabs>
        </div>
        <div>
          <a href="#">See all questions</a>
        </div>
      </div>

      <div className="flex flex-row justify-start items-center space-x-10">
        <DataTable columns={columns} data={payment} />
      </div>
    </section>
  );
}

export default Home;