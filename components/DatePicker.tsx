"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import "react-day-picker/dist/style.css";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks/hooks";
import { setDob } from "@/Redux/reducers/UserReducers";

export function DatePickerDemo() {

  const date = useAppSelector((state) => state.userReducer.dob);

  const [isCalendarOpen, setIsCalendarOpen] = React.useState(false);
  const dispatch = useAppDispatch();

  return (
    <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "md:w-[280px] w-full justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
        
          mode="single"
          selected={date}
          required={true}
          onSelect={(d) => {
            dispatch(setDob(d));
            setIsCalendarOpen(false);
          }}
          captionLayout="dropdown-buttons"
          fromYear={1900}
          
          toYear={2024}
        />
      </PopoverContent>
    </Popover>
  );
}
