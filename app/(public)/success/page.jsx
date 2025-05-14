"use client";
import React, { Suspense } from "react";
import LoadingDialog from "@/components/dialogs/loading-dialog";
import { redirect, useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";

const SuccessfulPayment = () => {
  const searchParams = useSearchParams();

  redirect(`/auth/payment/verify?${searchParams.toString()}`);

  return (
    <LoadingDialog
      open={verifyStatus?.status === "submitting"}
      title="Verifying Payment..."
    />
  );
};

const SuccessWrapper = () => {
  return (
    <Suspense fallback={<Loader2 className="animate-spin" />}>
      <SuccessfulPayment />
    </Suspense>
  );
};

export default SuccessWrapper;
