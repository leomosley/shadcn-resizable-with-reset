import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

export default function Home() {
  return (
  <main className="flex justify-center items-center h-screen">
    <ResizablePanelGroup
      direction="vertical"
      className="max-w-md min-h-[200px] max-h-[400px] rounded-lg border"
    >
      <ResizablePanel 
        id="A"
        defaultSize={50} 
        showResetSize={40}
      >
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">A</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel 
        id="B"
        defaultSize={50}
        showResetSize={20}
      >
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">B</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  </main>    
  );
}
