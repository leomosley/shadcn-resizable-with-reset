"use client";

import { useState } from "react";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "./ui/resizable";

export function Demo() {
  const [sizes, setSizes] = useState([40, 20]);

  return (
    <>
      <ResizablePanelGroup
        direction="vertical"
        className="max-w-md min-h-[200px] max-h-[00px] rounded-lg border"
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
