"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";

const partners = [
  {
    name: "Egovmetrics",
    logo: "/logos/egovmetrics.svg",
    description: (
      <>
        <p>
          Egovmetrics, also known as eGov Metrics, is a specialized firm located
          in Rizziconi, Italy, founded and led by Dr. Joseph Caristena. The
          company is dedicated to enhancing public sector performance and
          governance through innovative digital solutions. Egovmetrics focuses
          on developing tools and methodologies that measure and improve the
          effectiveness of e-government initiatives, smart city projects, and
          ICT-driven public services.
        </p>
        <p>
          The firm employs a variety of advanced technologies to create its
          solutions, ensuring they are both effective and relevant to the needs
          of modern governance. In addition to its core focus on public sector
          performance, Egovmetrics also engages in e-learning content
          development and workflow process design. This dual approach supports
          comprehensive digital transformation in public services, enabling
          governments and public institutions to leverage technology for
          improved service delivery and enhanced citizen engagement.
        </p>
        <p>
          Egovmetrics aims to empower public sector organizations to navigate
          the complexities of digital transformation, ultimately fostering
          better governance and increased satisfaction among citizens.
        </p>
      </>
    ),
  },
  {
    name: "Skillonline Srl., Italy.",
    description: (
      <>
        <p>
          SkillOnline S.r.l. is an Italian organization established in 1998,
          based in Turin. Currently they hold an international status,
          partnering with over 170 universities across Europe, Asia, America and
          Canada, to deliver specialized distance learning, digital education
          and upskilling, offering certifications, professional development, and
          e-learning tools tailored to modern educational needs. They are
          proudly supported by the European Union(EU).
        </p>
        <p>
          Key Areas of Focus:
          <ol>
            <li>
              Certifications: European standards like ECDL and EQDL for IT and
              digital literacy.
            </li>
            <li>
              Educational Innovation: Tools for interactive learning,
              gamification, and digital content creation.
            </li>
            <li>
              Professional Development: Training for educators and institutions,
              aligned with frameworks like DigCompEdu.
            </li>
          </ol>
        </p>
        Audience: Educators, administrators, and IT professionals seeking
        digital transformation in learning.
      </>
    ),
    logo: "/logos/skillonline.svg",
    className: "h-[20px]",
  },
  {
    name: "Intertek",
    description: (
      <>
        <p>
          Intertek is a global leader in quality assurance, testing, inspection,
          and certification services, founded in 1885. They help industries
          ensure that products, processes, and systems meet health, safety,
          environmental, and regulatory standards. Intertek operates in over
          1,000 locations across 100+ countries, with headquarters in London,
          United Kingdom.
        </p>
        Key Areas of Focus:
        <ol>
          <li>
            Testing and Certification: Ensuring compliance with global safety
            and performance standards across diverse industries.
          </li>
          <li>
            Inspection Services: Providing inspections for products in sectors
            like energy, chemicals, and consumer goods.
          </li>
          <li>
            Sustainability Solutions: Offering environmental testing and
            promoting sustainable practices.
          </li>
          <li>
            Supply Chain Assurance: Ensuring product quality and safety across
            the supply chain.
          </li>
        </ol>
        <p>
          Their global network of laboratories and services supports industries
          from manufacturing to healthcare, helping to minimize risks and
          optimize supply chains. The African representative is the renowned
          Prof. Edmund Ugwu-Agbo
        </p>
      </>
    ),
    logo: "/logos/intertek.svg",
  },
  {
    name: "I.S.F.O.A Telematic University, Switzerland",
    description: (
      <>
        <p>
          I.S.F.O.A Telematic University, located in Switzerland, is a prominent
          institution that offers innovative and flexible higher education
          through online and distance learning. Established to provide
          accessible quality education to a global audience, the university
          offers a diverse range of programs in fields such as business,
          technology, and social sciences.
        </p>
        <p>
          With a student-centered approach, I.S.F.O.A utilizes advanced
          technology to create interactive learning experiences that combine
          theoretical knowledge with practical applications. The university
          fosters a vibrant online community, encouraging collaboration among
          students and faculty from various cultural backgrounds.
        </p>
        <p>
          Committed to continuous improvement and innovation, I.S.F.O.A
          Telematic University ensures its programs remain relevant to industry
          trends, empowering students to achieve their personal and professional
          goals in a dynamic global landscape.
        </p>
      </>
    ),
    logo: "/logos/isfoa.png",
  },
  {
    name: "International Bio-Research Institute (IBI),  Nigeria.",
    description: (
      <>
        <p>
          The International Bio-Research Institute (IBI) is a research
          institution in Europe with a regional office in Enugu, Nigeria,
          approved by the Nigerian Federal Ministry of Education. It focuses on
          interdisciplinary research and education to address global challenges
          in science and technology while promoting bioethical standards.
        </p>
        <p>Key areas include:</p>
        <ol>
          <li>
            Research and Education: Programs in biotechnology, molecular
            biology, and bioethics.
          </li>
          <li>
            Innovation: Support for technological development and
            entrepreneurship through its Technology/Business Incubation Centre.
          </li>
          <li>
            Community Impact: Free medical testing for diabetes and
            hypertension, and youth entrepreneurship support.
          </li>
          <li>
            Collaborative Networks: Partnerships with global institutions.
          </li>
        </ol>
      </>
    ),
    logo: "/logos/ibi.jpg",
  },
  {
    name: "The International Educational and Commercial Consultancy Ltd. (IECC), Nigeria.",
    description: (
      <>
        <p>
          The International Educational and Commercial Consultancy Ltd. was
          established to respond to the dynamic global educational and economic
          landscape. Its Nigerian branch is dedicated to empowering individuals
          and organizations by providing essential skills, knowledge, and
          effective business strategies necessary for success in today’s
          competitive global economy.
        </p>
        <p>
          By leveraging a wide network of partnerships, IECC Nigeria offers
          comprehensive training and consultancy services tailored to meet the
          unique needs of its clients. This branch works in conjunction with its
          European counterpart in Bulgaria, ensuring a cohesive approach to
          education and commerce. Coordinated by the International Legal Consult
          (ILC) in Italy, IECC is committed to delivering high-quality services
          through a robust network of experts and partners, fostering growth and
          development in Nigeria and beyond.
        </p>
      </>
    ),
    logo: "/logos/iecc.jpg",
  },
  {
    name: "Pineapp Solutions LLC. Italy.",
    description: (
      <>
        <p>
          At Pineapp Solutions Limited, we specialize in building enterprise
          level software-as-a-service, with a focus on process automation,
          renewable energy software solutions, e-commerce, ERP, and financial
          payment solutions. Our team of professionals is devoted to creating
          robust and reliable software solutions that help businesses succeed.
        </p>
        <p>
          At PINEAPP Solutions Limited, our mission is to empower businesses
          through innovative software solutions that enhance productivity,
          streamline operations, and foster growth. We are dedicated to
          understanding our clients' unique challenges and delivering tailored
          software products that exceed their expectations. With a focus on
          excellence, integrity, and long-term partnerships, we aim to be a
          trusted advisor and a catalyst for our clients' success in an
          ever-evolving digital landscape
        </p>
      </>
    ),
    logo: "/logos/pineapp.png",
  },
];

const AboutSection = () => {
  const [selectedPartner, setselectedPartner] = useState(partners[0].name);

  const partner = partners.find((partner) => partner.name === selectedPartner);

  return (
    <section id="about">
      <h2 className="mb-6 text-center text-primary">About our Partners</h2>
      <div className="container flex gap-4 md:gap-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={partner?.name}
            className="info basis-1/2 text-justify"
            exit={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <img
              src={partner?.logo}
              alt={partner?.name + " Logo"}
              className={cn("mb-4 h-16", partner?.className)}
            />
            <div className="[&_ol]:list-decimal [&_ol]:list-inside [&_li]:my-2 [&_p]:mb-3">
              {partner?.description}
            </div>
          </motion.div>
        </AnimatePresence>
        <nav className="basis-1/2">
          <ul className="flex md:flex-col flex-wraps justify-center gap-2 md:gap-4">
            {partners.map((partner) => (
              <motion.li
                key={partner.name}
                onClick={() => setselectedPartner(partner.name)}
                className={cn(
                  "font-bold text-primary text-base cursor-pointer border-b-4 md:border-b-0 md:border-l-4 border-transparent px-2 py-6 transition-all",
                  partner.name === selectedPartner &&
                    "border-primary bg-neutral-200 rounded-e-md"
                )}
                layout
              >
                {partner.name}
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default AboutSection;
