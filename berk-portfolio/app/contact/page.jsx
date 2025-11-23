"use client"

import { Suspense } from "react";
import Contact from "@/components/Contact";

export default function Home() {
  return (
     <Suspense fallback={<div>Loading...</div>}>
      <Contact />
    </Suspense>

  );
}