"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useState, useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Search, X } from "lucide-react"

const professions = [
  { value: "all", label: "All Professions" },
  { value: "registered-nurse", label: "Registered Nurse" },
  { value: "mental-health-nurse", label: "Mental Health Nurse" },
  { value: "healthcare-assistant", label: "Healthcare Assistant" },
  { value: "support-worker", label: "Support Worker" },
  { value: "senior-carer", label: "Senior Carer" },
  { value: "care-coordinator", label: "Care Coordinator" },
]

const locations = [
  { value: "all", label: "All Locations" },
  { value: "london", label: "London" },
  { value: "manchester", label: "Manchester" },
  { value: "birmingham", label: "Birmingham" },
  { value: "leeds", label: "Leeds" },
  { value: "bristol", label: "Bristol" },
  { value: "liverpool", label: "Liverpool" },
  { value: "newcastle", label: "Newcastle" },
]

const jobTypes = [
  { value: "all", label: "All Types" },
  { value: "permanent", label: "Permanent" },
  { value: "temporary", label: "Temporary" },
  { value: "contract", label: "Contract" },
  { value: "part-time", label: "Part Time" },
]

interface JobsFiltersProps {
  currentFilters: {
    profession?: string
    location?: string
    type?: string
    search?: string
  }
}

export function JobsFilters({ currentFilters }: JobsFiltersProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isPending, startTransition] = useTransition()
  
  const [filters, setFilters] = useState({
    profession: currentFilters.profession || "all",
    location: currentFilters.location || "all",
    type: currentFilters.type || "all",
    search: currentFilters.search || "",
  })

  function applyFilters() {
    startTransition(() => {
      const params = new URLSearchParams()
      
      if (filters.profession && filters.profession !== "all") {
        params.set("profession", filters.profession)
      }
      if (filters.location && filters.location !== "all") {
        params.set("location", filters.location)
      }
      if (filters.type && filters.type !== "all") {
        params.set("type", filters.type)
      }
      if (filters.search) {
        params.set("search", filters.search)
      }

      const queryString = params.toString()
      router.push(`/jobs${queryString ? `?${queryString}` : ""}`)
    })
  }

  function clearFilters() {
    setFilters({
      profession: "all",
      location: "all",
      type: "all",
      search: "",
    })
    startTransition(() => {
      router.push("/jobs")
    })
  }

  const hasActiveFilters = 
    filters.profession !== "all" || 
    filters.location !== "all" || 
    filters.type !== "all" || 
    filters.search !== ""

  return (
    <div className="sticky top-24 rounded-xl border bg-card p-6">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-foreground">Filter Jobs</h2>
        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            <X className="mr-1 size-4" />
            Clear
          </Button>
        )}
      </div>

      <div className="mt-6 flex flex-col gap-4">
        {/* Search */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="search">Search</Label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="search"
              placeholder="Job title, keywords..."
              value={filters.search}
              onChange={(e) => setFilters({ ...filters, search: e.target.value })}
              className="pl-9"
            />
          </div>
        </div>

        {/* Profession */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="profession">Profession</Label>
          <Select
            value={filters.profession}
            onValueChange={(value) => setFilters({ ...filters, profession: value })}
          >
            <SelectTrigger id="profession">
              <SelectValue placeholder="Select profession" />
            </SelectTrigger>
            <SelectContent>
              {professions.map((profession) => (
                <SelectItem key={profession.value} value={profession.value}>
                  {profession.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Location */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="location">Location</Label>
          <Select
            value={filters.location}
            onValueChange={(value) => setFilters({ ...filters, location: value })}
          >
            <SelectTrigger id="location">
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((location) => (
                <SelectItem key={location.value} value={location.value}>
                  {location.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Job Type */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="type">Job Type</Label>
          <Select
            value={filters.type}
            onValueChange={(value) => setFilters({ ...filters, type: value })}
          >
            <SelectTrigger id="type">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              {jobTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button onClick={applyFilters} disabled={isPending} className="mt-2">
          {isPending ? "Applying..." : "Apply Filters"}
        </Button>
      </div>
    </div>
  )
}
