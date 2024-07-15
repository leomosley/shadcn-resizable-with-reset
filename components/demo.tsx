"use client";

import { ChangeEvent, useState } from "react";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "./ui/resizable";
import { Input } from "./ui/input";

export function Demo() {
  const [sizes, setSizes] = useState([40, 20]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = Number(e.currentTarget.value);
    setSizes(prev => prev.map((v, i) => (i === index ? value : v)));
  } 

  return (
    <>
      <div className="flex gap-2 ">
        {[...Array(2)].map((_, index) => (
          <div key={index} className="flex-1 text-center">
            <span className="font-semibold">{index === 0 ? "A" : "B"}</span>
            <Input 
              value={sizes[index]}
              onChange={(e) => handleChange(e, index)}
              type="number"
              min={0}
              max={100}
            />
          </div>
        ))}
      </div>
      <ResizablePanelGroup
        direction="vertical"
        className="max-w-md min-h-[200px] max-h-[500px] rounded-lg border"
      >
        <ResizablePanel 
          id="A"
          defaultSize={50} 
          showResetSize={sizes[0]}
        >
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">A</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel 
          id="B"
          defaultSize={50}
          showResetSize={sizes[1]}
        >
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">B</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
}
