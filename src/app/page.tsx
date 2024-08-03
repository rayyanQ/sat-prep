import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header from "@/components/Header"
import TestCard from "@/components/TestCard"
import { Question, columns } from "@/components/TestTable/columns"
import { DataTable } from "@/components/TestTable/data-table"
import { H2 } from "@/components/ui/heading"
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
 
const questions: Question[] = [
  {
    uid: "al56d",
    id: 1,
    title: "Algebra word problem",
    section: "Math",
    domain: "Algebra",
    topic: "Linear equation in 1 variable",
    difficulty: "Easy",
    status: "Incomplete",
  },
  {
    uid: "al9sx",
    id: 2,
    title: "Algebra word problem 2",
    section: "Math",
    domain: "Algebra",
    topic: "Linear functions",
    difficulty: "Easy",
    status: "Complete",
  },
  {
    uid: "al56d",
    id: 3,
    title: "Purpose of underlined text",
    section: "English",
    domain: "Craft and Structure",
    topic: "-",
    difficulty: "Easy",
    status: "Incomplete",
  },
  {
    uid: "al56d",
    id: 4,
    title: "Algebra word problem",
    section: "Math",
    domain: "Algebra",
    topic: "Linear equation in 1 variable",
    difficulty: "Easy",
    status: "Incomplete",
  },
  {
    uid: "al9sx",
    id: 5,
    title: "Algebra word problem 2",
    section: "Math",
    domain: "Algebra",
    topic: "Linear functions",
    difficulty: "Easy",
    status: "Complete",
  },
  {
    uid: "al56d",
    id: 6,
    title: "Purpose of underlined text",
    section: "English",
    domain: "Craft and Structure",
    topic: "-",
    difficulty: "Easy",
    status: "Incomplete",
  },
]

// Main Home page component
const Home = () => {
  return (
    <>
      <Header />
      <main className="w-full flex flex-col justify-center items-start">
        <QuestionSection />
      </main>
    </>
  );
}

const QuestionSection = () => {
  return (
    <section className="container py-6">
      <div className="flex flex-row justify-start items-center pb-2">
        <div>
          <H2>Question Bank</H2>
          <Tabs></Tabs>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <DataTable columns={columns} data={questions} />
      </div>
    </section>
  );
}

export default Home;