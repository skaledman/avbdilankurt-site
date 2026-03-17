"use client";

import { Suspense } from "react";
import CourtDecisionsPageClient from "@/components/CourtDecisionsPageClient";

export default function CourtDecisionsPage() {
  return (
    <Suspense>
      <CourtDecisionsPageClient />
    </Suspense>
  );
}