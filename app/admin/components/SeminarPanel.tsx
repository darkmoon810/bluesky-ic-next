"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function SeminarPanel() {
  const [registrations, setRegistrations] = useState([])
  const [loading, setLoading] = useState(true)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Seminar Registrations</h2>
        <Button>Export to CSV</Button>
      </div>

      <Card>
        <CardContent className="p-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Seminar</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* Registrations will be mapped here */}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}