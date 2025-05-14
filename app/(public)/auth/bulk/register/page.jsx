import React, { Suspense } from "react";
import BulkRegistrationForm from "@/components/auth/bulk-registration-form";
import { Loader2 } from "lucide-react";

const Bulk = () => {
  return (
    <Suspense fallback={<Loader2 className="animate-spin" />}>
      <BulkRegistrationForm />
    </Suspense>
  );
};

export default Bulk;
