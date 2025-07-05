import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="mt-40">
      <h1 className="text-4xl font-bold mb-8">Welcome to Personal Finance Visualiser</h1>
      <Button variant="destructive" >
        Click on me
      </Button>
    </div>
  );
}
