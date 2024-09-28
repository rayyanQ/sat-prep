"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Circle, CircleCheckBig, ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Question = {
  uid: string
  serial_number: number
  title: string
  section: "English" | "Math"
  domain: string
  topic: string
  difficulty: "Easy" | "Medium" | "Hard"
  //status: "Incomplete" | "Complete"
}

export const columns: ColumnDef<Question>[] = [
  /*{
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return <div className="w-full flex justify-center items-center">
        {
          row.original.status === "Complete" ?
          <CircleCheckBig size={20} /> :
          <Circle size={20} />
        }
      </div>
    }
  },*/
  {
    accessorKey: "serial_number",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Id
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "section",
    header: "Section",
  },
  {
    accessorKey: "domain",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Domain
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "topic",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Topic
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "difficulty",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Difficulty
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
]
