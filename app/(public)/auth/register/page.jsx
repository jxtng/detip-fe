"use client";
import React, { Suspense } from "react";
import RegistrationForm from "@/components/auth/registration-form";
import { Loader2 } from "lucide-react";

const Register = () => {
  return (
    <Suspense fallback={<Loader2 className="animate-spin" />}>
      <RegistrationForm />
    </Suspense>
  );
};

export default Register;
