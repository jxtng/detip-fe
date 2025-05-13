import React from "react";
import { Button } from "../ui/button";

const applicationSteps = [
  {
    step: 1,
    title: "Select application type",
    description:
      "Select the type of application you want to make (Single or Bulk application).",
  },
  {
    step: 2,
    title: "Fill Application form",
    description: "Fill out the application form with the required information.",
  },
  {
    step: 3,
    title: "Receive Application Confirmation",
    description: "Receive a Confirmation of your application via email.",
  },
  {
    step: 4,
    title: "Application Review and Processing",
    description: "Your application will be reviewed and processed promptly.",
  },
  {
    step: 5,
    title: "Receive Admission letter & Onboarding Credentials",
    description:
      "Check your email for admission letter, Onboarding details and unique student ID.",
  },
  {
    step: 6,
    title: "Begin Your Upskilling Journey",
    description:
      "Complete the onboarding process and start your journey towards upskilling.",
  },
];

const ApplicationProcessSection = () => {
  return (
    <section className="bg-primary bg-opacity-90 relative bg-[url('/images/circuit.png')] bg-center bg-contain">
      <div className="overlay absolute inset-0 w-full h-full bg-black opacity-70" />
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20 text-white">
        <div className="md:w-7/12 space-y-6 grow">
          <h2>Application process</h2>
          <p className="text-sm font-light leading-relaxed">
            Applicants can choose to apply individually or through a Bulk Admin
            process. Individual applicants will fill out a personalized
            application form tailored to their specific course, while those
            applying under a Bulk Admin must obtain a unique Bulk ID from their
            administrator. This ID is crucial for linking their application to
            the group managed by the admin, facilitating efficient tracking of
            multiple applicants.
          </p>
          <p className="text-sm font-light leading-relaxed">
            After selecting their application method, candidates will complete
            the corresponding form, which includes essential fields such as
            personal details, educational background, and course preferences.
            For bulk applicants, the form will also require the Bulk ID to
            verify their association with the submitting admin. It is important
            to provide accurate information to avoid delays in processing.
          </p>
          <p className="text-sm font-light leading-relaxed">
            Once the application is submitted, it is reviewed immediately.
            Successful applicants will receive an official admission letter
            confirming their acceptance, along with onboarding credentials for
            their chosen course. This streamlined process ensures that
            candidates can begin their learning journey without unnecessary
            delays.
          </p>
        </div>
        <div className="md:w-5/12 border border-white border-opacity-30 rounded-md p-6 md:p-8 space-y-6 bg-white/5 backdrop-blur-xs">
          <h3>Steps for Application</h3>
          <ol className="list-inside space-y-4 text-xs font-light">
            {applicationSteps.map(({ step, title, description }) => (
              <li key={step}>
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#A15B00] text-white text-[10px] font-semibold mr-2">
                  {step}
                </span>
                <span className="font-semibold text-white">{title}</span>
                <br />
                <span className="font-light">{description}</span>
              </li>
            ))}
          </ol>
          <Button className="w-full" variant="outline" type="button">
            Proceed to Apply
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcessSection;
