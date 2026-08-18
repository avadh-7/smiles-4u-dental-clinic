import React from "react";
import { verifyAdminSession } from "@/app/actions/auth";
import { getTreatments } from "@/app/actions/treatments";
import { getGalleryItems } from "@/app/actions/gallery";
import AdminDashboardClient from "@/components/admin/AdminDashboardClient";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const isAuthenticated = await verifyAdminSession();

  let treatments: any[] = [];
  let gallery: any[] = [];

  if (isAuthenticated) {
    // Only fetch database records if authenticated for maximum security
    treatments = await getTreatments();
    gallery = await getGalleryItems();
  }

  return (
    <AdminDashboardClient
      isAuthenticated={isAuthenticated}
      initialTreatments={treatments}
      initialGallery={gallery}
    />
  );
}
