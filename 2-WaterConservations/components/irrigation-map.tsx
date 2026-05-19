"use client";

import { useState, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Droplets, Sun, Trash2, RotateCcw } from "lucide-react";

type ZoneType = "empty" | "wet" | "dry";

interface Cell {
  id: string;
  zone: ZoneType;
}

const GRID_SIZE = 8;

export function IrrigationMap() {
  const [grid, setGrid] = useState<Cell[][]>(() =>
    Array.from({ length: GRID_SIZE }, (_, row) =>
      Array.from({ length: GRID_SIZE }, (_, col) => ({
        id: `${row}-${col}`,
        zone: "empty" as ZoneType,
      }))
    )
  );
  const [selectedTool, setSelectedTool] = useState<ZoneType>("wet");
  const [isDrawing, setIsDrawing] = useState(false);

  const getZoneStats = useCallback(() => {
    let wet = 0;
    let dry = 0;
    let empty = 0;
    grid.forEach((row) =>
      row.forEach((cell) => {
        if (cell.zone === "wet") wet++;
        else if (cell.zone === "dry") dry++;
        else empty++;
      })
    );
    const total = GRID_SIZE * GRID_SIZE;
    return {
      wet,
      dry,
      empty,
      wetPercent: Math.round((wet / total) * 100),
      dryPercent: Math.round((dry / total) * 100),
    };
  }, [grid]);

  const handleCellClick = (row: number, col: number) => {
    setGrid((prev) => {
      const newGrid = prev.map((r) => r.map((c) => ({ ...c })));
      newGrid[row][col].zone = newGrid[row][col].zone === selectedTool ? "empty" : selectedTool;
      return newGrid;
    });
  };

  const handleCellEnter = (row: number, col: number) => {
    if (isDrawing) {
      setGrid((prev) => {
        const newGrid = prev.map((r) => r.map((c) => ({ ...c })));
        newGrid[row][col].zone = selectedTool;
        return newGrid;
      });
    }
  };

  const resetGrid = () => {
    setGrid(
      Array.from({ length: GRID_SIZE }, (_, row) =>
        Array.from({ length: GRID_SIZE }, (_, col) => ({
          id: `${row}-${col}`,
          zone: "empty" as ZoneType,
        }))
      )
    );
  };

  const stats = getZoneStats();

  return (
    <Card className="border-2 border-border/50 shadow-lg">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <CardTitle className="text-xl font-semibold text-foreground">Interactive Irrigation Map</CardTitle>
            <CardDescription className="mt-1">
              Mark wet and dry zones on your field to visualize water distribution
            </CardDescription>
          </div>
          <Button variant="outline" size="sm" onClick={resetGrid} className="gap-2">
            <RotateCcw className="h-4 w-4" />
            Reset
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Tool Selection */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm font-medium text-muted-foreground">Select Zone Type:</span>
          <div className="flex gap-2">
            <Button
              variant={selectedTool === "wet" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTool("wet")}
              className="gap-2"
            >
              <Droplets className="h-4 w-4" />
              Wet Zone
            </Button>
            <Button
              variant={selectedTool === "dry" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTool("dry")}
              className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90"
              style={selectedTool === "dry" ? { backgroundColor: "var(--dry)", color: "var(--accent-foreground)" } : {}}
            >
              <Sun className="h-4 w-4" />
              Dry Zone
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedTool("empty")}
              className="gap-2"
            >
              <Trash2 className="h-4 w-4" />
              Erase
            </Button>
          </div>
        </div>

        {/* Grid */}
        <div
          className="mx-auto w-full max-w-md aspect-square bg-secondary/30 rounded-lg p-3 border border-border"
          onMouseLeave={() => setIsDrawing(false)}
        >
          <div
            className="grid gap-1 h-full"
            style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)` }}
          >
            {grid.map((row, rowIndex) =>
              row.map((cell, colIndex) => (
                <button
                  key={cell.id}
                  className={`
                    rounded-sm transition-all duration-150 border border-border/30
                    hover:scale-105 hover:shadow-md cursor-pointer
                    ${cell.zone === "wet" ? "bg-wet" : ""}
                    ${cell.zone === "dry" ? "bg-dry" : ""}
                    ${cell.zone === "empty" ? "bg-card hover:bg-muted" : ""}
                  `}
                  onMouseDown={() => {
                    setIsDrawing(true);
                    handleCellClick(rowIndex, colIndex);
                  }}
                  onMouseUp={() => setIsDrawing(false)}
                  onMouseEnter={() => handleCellEnter(rowIndex, colIndex)}
                  aria-label={`Cell ${rowIndex + 1}, ${colIndex + 1}: ${cell.zone}`}
                />
              ))
            )}
          </div>
        </div>

        {/* Legend & Stats */}
        <div className="flex flex-wrap justify-center gap-6 pt-2">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-wet border border-border/50" />
            <span className="text-sm text-muted-foreground">Wet Zone</span>
            <Badge variant="secondary" className="ml-1">
              {stats.wetPercent}%
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-dry border border-border/50" />
            <span className="text-sm text-muted-foreground">Dry Zone</span>
            <Badge variant="secondary" className="ml-1">
              {stats.dryPercent}%
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-card border border-border" />
            <span className="text-sm text-muted-foreground">Unmarked</span>
          </div>
        </div>

        {/* Recommendations */}
        {stats.dryPercent > 30 && (
          <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
            <p className="text-sm text-foreground">
              <strong>Recommendation:</strong> Over {stats.dryPercent}% of your field is marked as dry. 
              Consider increasing irrigation coverage or adjusting sprinkler placement in those areas.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
