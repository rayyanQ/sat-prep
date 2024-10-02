"use client"

import * as React from "react"
import { Check, CirclePlus } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Badge } from "@/components/ui/badge"

type Option = {
  label: string;
  value: string;
}


export function FilterDropdown({ title, options, onChange } : { title: string, options: Option[], onChange: (values: string[]) => void }) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState<string[]>([])

  /**
   * if 0 - show nothing
   * if 1 to 3 - show selected items
   * if more than 3 - show count
   */
  /**
   * TODO
   * - Add a button to clear all selected items
   * - Pass values
   * - Pass title
   * - Pass onChange
   */

  return (
    <Popover open={open} onOpenChange={setOpen}>

      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="flex items-center space-x-2 rounded-md"
        >
          <CirclePlus className="h-4 w-4" />
          <span>{title}</span>        
            {
              value.length > 3 ?
                <span> | <Badge>{value.length} selected</Badge></span> :
                <span className="flex items-center space-x-2">
                  {value.length ? <p>|</p> : <></>}
                  {value.map((v, i) => (
                    <Badge key={i}>{v}</Badge>
                  ))}
                </span>
            }
        </Button>
      </PopoverTrigger>

      <PopoverContent align="start" className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={(currentValue) => {
                    value.includes(currentValue) ? setValue(value.filter((v) => v!=currentValue)) : setValue([currentValue, ...value])
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value.includes(option.value) ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
