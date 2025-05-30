"use client";
import React, { useState } from "react";
import { AllInput } from "../form-elements";
import { Button } from "@/components/ui/button";
import { handleFormSubmitHelper } from "@/lib/form-utils";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import ErrorDialog from "@/components/dialogs/error-dialog";
import SuccessDialog from "@/components/dialogs/success-dialog";
import Link from "next/link";

const inputs = [
  {
    label: "Full Name",
    name: "fullname",
    placeholder: "Eg. John Doe",
  },
  {
    label: "Email Address",
    name: "email",
    placeholder: "Enter your email",
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    placeholder: "........",
  },
  { label: "Province", name: "province", placeholder: "Enter your province" },
  {
    label: "Phone Number",
    name: "phone",
    placeholder: "Enter your phone number",
  },
].map((input) => ({
  ...input,
  required: true,
  classes: {
    input: `${
      input.type !== "file"
        ? "py-6 border-0 shadow-none rounded-none focus-visible:ring-0"
        : ""
    } border-b border-neutral-500 ${input.classes?.input}`,
  },
}));

const BulkCreationForm = () => {
  const [formData, setFormData] = useState();
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formSchema = z.object({
      fullname: z.string().min(1, { message: "Name is required" }),
      email: z
        .string()
        .min(1, { message: "Email is required" })
        .email("Invalid email address"),
      password: z.string().min(1, { message: "Password is required" }),
      province: z.string().min(1, { message: "Province is required" }),
      phone: z.string().min(1, { message: "Phone number is required" }),
    });

    handleFormSubmitHelper({
      formSchema,
      formData,
      endPoint: "/v1/bulk-admin/create",
      setSubmitStatus,
      axiosConfig: {
        headers: {
          "Content-Type": "application/json",
        },
      },
      onError(formStatus) {
        console.log("Error creating bulk", formStatus);
      },
    });
  };

  const lookingForRegisteration = (
    <Link
      href="/auth/bulk/login"
      className="text-center text-blue-400 hover:underline"
    >
      Already have a bulk? Click here to login.
    </Link>
  );

  return (
    <form className="section" method="post" onSubmit={handleFormSubmit}>
      <div className="container mx-auto">
        <h1 className="text-3xl text-center mb-12">Bulk Creation Form</h1>
        <div className="max-w-[800px] mx-auto flex flex-col gap-4">
          {lookingForRegisteration}
          <AllInput
            inputs={inputs}
            formData={formData}
            setFormData={setFormData}
            className="p-4 rounded-lg bg-neutral-50 border"
            errors={submitStatus?.status === "form_error" && submitStatus.error}
          />
          <Button
            size="xl"
            className="w-full"
            type="submit"
            disabled={submitStatus?.status === "submitting"}
          >
            Create Bulk
            {submitStatus?.status === "submitting" && (
              <Loader2 className="animate-spin" />
            )}
          </Button>
          {lookingForRegisteration}
        </div>
      </div>

      <SuccessDialog
        open={submitStatus?.status === "success"}
        onOpenChange={() => {
          setSubmitStatus(null);
        }}
        title="Bulk Created Successful"
        description={submitStatus?.response?.data?.message || ""}
        controls={
          <Button className="mx-auto">
            <Link href="/auth/bulk/login">Go to bulk</Link>
          </Button>
        }
      />
      <ErrorDialog
        open={submitStatus?.status === "error"}
        onOpenChange={() => {
          setSubmitStatus(null);
        }}
        title="Bulk Creation Failed"
        description={
          submitStatus?.error ||
          "An Error Occured. Try again. If error persists, contact us."
        }
        classes={{ body: "text-center" }}
      />
    </form>
  );
};

export default BulkCreationForm;
