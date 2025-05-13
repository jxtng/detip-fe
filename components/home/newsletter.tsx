"use client";
import { useState } from "react";
import { Loader2, Mail, Rss } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { MotionCheck, MotionX } from "../icons";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type FormValues = z.infer<typeof formSchema>;

const Newsletter = () => {
  const [submitStatus, setSubmitStatus] = useState<{
    status?: "submitting" | "success" | "error" | "form_error";
    error?: { email?: string };
  }>({});

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleSubscription = async (values: FormValues) => {
    setSubmitStatus({ status: "submitting" });
    try {
      // Add your subscription logic here
      console.log(values);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated API call
      setSubmitStatus({ status: "success" });
      form.reset();
    } catch (error) {
      setSubmitStatus({ status: "error" });
    }
  };

  return (
    <section
      className="newsletter text-white"
      style={{
        background:
          "url(/images/newsletter-bg.svg) fixed no-repeat center center / cover",
      }}
    >
      <div className="container flex flex-col items-center text-center">
        <Rss className="size-20 text-neutral-400 mb-4" />
        <h2>SUBSCRIBE TO NEWSLETTER</h2>
        <p>News . Opportunities . Information . & More </p>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubscription)}
            className="flex flex-col sm:flex-row gap-4 my-4 w-full max-w-md"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-white h-4 w-4" />
                      <Input
                        placeholder="Email Address"
                        className="pl-9 h-12 text-white placeholder:text-white"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="sm:text-left" />
                </FormItem>
              )}
            />

            <Button
              size="lg"
              type="submit"
              className={cn(
                "mx-auto w-[80%] sm:w-auto h-12 border border-white/50",
                submitStatus?.status === "success" &&
                  "bg-green-500 !opacity-90",
                submitStatus?.status === "error" && "bg-red-500 !opacity-90",
                submitStatus?.status === "submitting" && "!opacity-50"
              )}
              disabled={
                submitStatus?.status && submitStatus?.status !== "form_error"
              }
            >
              {submitStatus?.status === "submitting" ? (
                <>
                  Subscribing...
                  <Loader2 className="animate-spin ml-2" />
                </>
              ) : submitStatus?.status === "success" ? (
                <MotionCheck />
              ) : submitStatus?.status === "error" ? (
                <>
                  Subscription failed
                  <MotionX />
                </>
              ) : (
                "Subscribe"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default Newsletter;
