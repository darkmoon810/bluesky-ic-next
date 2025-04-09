"use client"

import { Input } from "./input"

interface ColorPickerProps {
  color: string
  onChange: (color: string) => void
}

export function ColorPicker({ color, onChange }: ColorPickerProps) {
  return (
    <div className="flex items-center gap-2">
      <div
        className="w-10 h-10 rounded border"
        style={{ backgroundColor: color }}
      />
      <Input
        type="color"
        value={color}
        onChange={(e) => onChange(e.target.value)}
        className="w-20"
      />
      <Input
        type="text"
        value={color}
        onChange={(e) => onChange(e.target.value)}
        className="w-32"
      />
    </div>
  )
}