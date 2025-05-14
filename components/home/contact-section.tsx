"use client";
import React, { useEffect } from "react";
import { Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { stagger, useAnimate, useInView } from "motion/react";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const ContactSection = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true, amount: 0.5 });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    if (isInView) {
      animate(
        ".form-element",
        { x: [30, 0], opacity: [0, 1] },
        { duration: 0.3, delay: stagger(0.1) }
      );
    }
  }, [isInView]);

  const handleFormSubmit: SubmitHandler<
    z.infer<typeof formSchema>
  > = async () => {};

  return (
    <section id="contact" className="bg-neutral-100">
      <div className="container mx-auto">
        <h2 className="my-0">Get In Touch With Us</h2>
        <p className="mb-8">
          Connecting Beyond Boundaries: Reach Out and Get in Touch with Us
          Today.
        </p>

        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="info basis-2/5 space-y-4 [&_p]:mb-2 text-sm sm:text-base">
            <div className="email-section flex gap-2">
              <Mail className="text-primary shrink-0 mt-px" />
              <div className="email-info text-sm sm:text-base">
                <h3 className="text-primary m-0">Email Address</h3>
                <p>emergingtechskill@gmail.com</p>
                <p>enugutechhub@enugustate.gov.ng</p>
              </div>
            </div>
            <div className="location-section flex gap-4">
              <MapPin className="text-primary shrink-0 mt-px" />
              <div className="location-info">
                <h3 className="text-primary m-0">Location</h3>
                <p>
                  International Bioresearch Institute Nigerian office, along
                  Ugwogo, Enugu state, Nigeria
                </p>
                <p>
                  Enugu State Technology Hub NO 2 Upper Presidential road,
                  Independence Layout Enugu, Nigeria
                </p>
              </div>
            </div>
          </div>
          <hr className="border-primary md:hidden" />
          <Form {...form}>
            <form
              ref={scope}
              onSubmit={form.handleSubmit(handleFormSubmit)}
              className="contact-form basis-2/5 flex flex-col gap-4 overflow-x-hidden"
            >
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem className="form-element opacity-0">
                    <FormControl>
                      <Input placeholder="Full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="form-element opacity-0">
                    <FormControl>
                      <Input
                        placeholder="Email Address"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="form-element opacity-0">
                    <FormControl>
                      <Textarea
                        placeholder="Message"
                        // className="bg-neutral-50 border-none resize-none min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                size="lg"
                type="submit"
                className={cn(
                  "form-element opacity-0 transition-all"
                  // submitStatus?.status === "success" &&
                  //   "bg-green-500 !opacity-90",
                  // submitStatus?.status === "error" && "bg-red-500 !opacity-90",
                  // submitStatus?.status === "submitting" && "!opacity-50"
                )}
                // disabled={
                //   submitStatus?.status && submitStatus?.status !== "form_error"
                // }
              >
                {/* {submitStatus?.status === "submitting" ? (
                  <>
                    Sending...
                    <Loader2 className="animate-spin" />
                  </>
                ) : submitStatus?.status === "success" ? (
                  <>
                    Message Sent
                    <MotionCheck />
                  </>
                ) : submitStatus?.status === "error" ? (
                  <>
                    Error sending message
                    <MotionX />
                  </>
                ) : (
                  "Send"
                )} */}
                Send
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
