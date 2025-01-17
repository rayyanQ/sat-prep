import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";


const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <MenuIcon size={20} />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Questions</SheetTitle>
          <SheetDescription>
            Browse through all the questions.
          </SheetDescription>
        </SheetHeader>
        <div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>#</TableHead>
                <TableHead>Question</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>1.</TableCell>
                <TableCell>What is the capital of France?</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2.</TableCell>
                <TableCell>What is the capital of Spain?</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>3.</TableCell>
                <TableCell>What is the capital of Germany?</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export { Sidebar };