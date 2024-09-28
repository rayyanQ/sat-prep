import Image from "next/image";
import Tiptap from "@/components/tiptap";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Kortex Academy</h1>
      <Tiptap />
    </main>
  );
}
