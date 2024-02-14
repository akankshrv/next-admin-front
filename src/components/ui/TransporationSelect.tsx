"use client"

import * as React from "react"
import { PiCaretUpDown } from "react-icons/pi";
import { CiCircleCheck } from "react-icons/ci";

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const transportations = [
  {
    value: "air",
    label: "Air",
  },
  {
    value: "sea",
    label: "Sea",
  },
  {
    value: "land",
    label: "Land",
  },
]

export function TransportationSelect() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? transportations.find((transportation) => transportation.value === value)?.label
            : "Select transportation..."}
          <PiCaretUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search transportation..." className="h-9" />
          <CommandEmpty>No transportation found.</CommandEmpty>
          <CommandGroup>
            {transportations.map((transportation) => (
              <CommandItem
                key={transportation.value}
                value={transportation.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue)
                  setOpen(false)
                }}
              >
                {transportation.label}
                <CiCircleCheck
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === transportation.value ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
