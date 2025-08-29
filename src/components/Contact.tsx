"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import Image from "next/image";
import SocialIcons from "./SocialIcons";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function Contact() {
  const team = [
    {
      id: "C243164",
      name: "Mohammad Abu Aftab Wasih",
      photo: "/images/default-person.png",
      work: "ui home page",
      iconData: [
        {
          name: "LinkedIn",
          icon: <FaLinkedin className="size-full" />,
          hoverColor: "text-[#0A66C2]",
          href: "https://www.linkedin.com/in/",
        },
        {
          name: "GitHub",
          icon: <FaGithub className="size-full" />,
          hoverColor: "text-[#6E5494]",
          href: "https://github.com/",
        },
        {
          name: "Facebook",
          icon: <FaFacebook className="size-full" />,
          hoverColor: "text-[#1877F2]",
          href: "https://www.facebook.com/",
        },

        {
          name: "Email",
          icon: <IoMdMail className="size-full" />,
          hoverColor: "text-[#00B2FF]",
          href: "mailto:a@example.com",
        },
      ],
    },
    {
      id: "C243...",
      name: "Hasan jamil",
      photo: "/images/default-person.png",
      work: "ui home page",
      iconData: [
        {
          name: "LinkedIn",
          icon: <FaLinkedin className="size-full" />,
          hoverColor: "text-[#0A66C2]",
          href: "https://www.linkedin.com/in/",
        },
        {
          name: "GitHub",
          icon: <FaGithub className="size-full" />,
          hoverColor: "text-[#6E5494]",
          href: "https://github.com/",
        },
        {
          name: "Facebook",
          icon: <FaFacebook className="size-full" />,
          hoverColor: "text-[#1877F2]",
          href: "https://www.facebook.com/",
        },

        {
          name: "Email",
          icon: <IoMdMail className="size-full" />,
          hoverColor: "text-[#00B2FF]",
          href: "mailto:a@example.com",
        },
      ],
    },
    {
      id: "C243...",
      name: "Asikuzzaman",
      photo: "/images/default-person.png",
      work: "ui home page",
      iconData: [
        {
          name: "LinkedIn",
          icon: <FaLinkedin className="size-full" />,
          hoverColor: "text-[#0A66C2]",
          href: "https://www.linkedin.com/in/",
        },
        {
          name: "GitHub",
          icon: <FaGithub className="size-full" />,
          hoverColor: "text-[#6E5494]",
          href: "https://github.com/",
        },
        {
          name: "Facebook",
          icon: <FaFacebook className="size-full" />,
          hoverColor: "text-[#1877F2]",
          href: "https://www.facebook.com/",
        },

        {
          name: "Email",
          icon: <IoMdMail className="size-full" />,
          hoverColor: "text-[#00B2FF]",
          href: "mailto:a@example.com",
        },
      ],
    },
    {
      id: "C243...",
      name: "anowar",
      photo: "/images/default-person.png",
      work: "ui home page",
      iconData: [
        {
          name: "LinkedIn",
          icon: <FaLinkedin className="size-full" />,
          hoverColor: "text-[#0A66C2]",
          href: "https://www.linkedin.com/in/",
        },
        {
          name: "GitHub",
          icon: <FaGithub className="size-full" />,
          hoverColor: "text-[#6E5494]",
          href: "https://github.com/",
        },
        {
          name: "Facebook",
          icon: <FaFacebook className="size-full" />,
          hoverColor: "text-[#1877F2]",
          href: "https://www.facebook.com/",
        },

        {
          name: "Email",
          icon: <IoMdMail className="size-full" />,
          hoverColor: "text-[#00B2FF]",
          href: "mailto:a@example.com",
        },
      ],
    },
    {
      id: "C243...",
      name: "arman",
      photo: "/images/default-person.png",
      work: "ui home page",
      iconData: [
        {
          name: "LinkedIn",
          icon: <FaLinkedin className="size-full" />,
          hoverColor: "text-[#0A66C2]",
          href: "https://www.linkedin.com/in/",
        },
        {
          name: "GitHub",
          icon: <FaGithub className="size-full" />,
          hoverColor: "text-[#6E5494]",
          href: "https://github.com/",
        },
        {
          name: "Facebook",
          icon: <FaFacebook className="size-full" />,
          hoverColor: "text-[#1877F2]",
          href: "https://www.facebook.com/",
        },

        {
          name: "Email",
          icon: <IoMdMail className="size-full" />,
          hoverColor: "text-[#00B2FF]",
          href: "mailto:a@example.com",
        },
      ],
    },
  ];

  return (
    <>
      <section id="contact" className="flex flex-col items-center my-5">
        <h2 className="text-4xl font-bold mb-5">Meet Our Team</h2>
        <VerticalTimeline>
          {team.map((member, i) => (
            <VerticalTimelineElement
              key={member.id + i}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "rgba(30, 30, 60, 0.85)", // deep space background
                color: "#fff",
                borderRadius: "1rem",
                boxShadow: "0 0 20px rgba(0, 200, 200, 0.4)", // teal glow
              }}
              contentArrowStyle={{
                borderRight: "7px solid rgba(0, 200, 200, 0.7)", // teal arrow
              }}
              date="2011 - present"
              iconStyle={{
                // background: "linear-gradient(135deg, #6B21A8, #EC4899)", // space purple → pink
                color: "#fff",
                boxShadow: "0 0 15px rgba(236, 72, 153, 0.7)", // pink glow
              }}
              icon={
                <Image
                  src={"/team.svg"}
                  alt={member.name + i}
                  width={48}
                  height={48}
                />
              }
            >
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <h3 className="vertical-timeline-element-title text-space-teal font-bold">
                    {member.name}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle text-gray-300">
                    {member.id}
                  </h4>
                </div>
                <Image
                  src={member.photo}
                  className="rounded-full border-2 border-space-teal shadow-lg"
                  alt={member.name}
                  width={50}
                  height={50}
                />
              </div>

              <p className="text-gray-200">{member.work}</p>

              <motion.div
                className="flex justify-center py-14"
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 1.5 }}
                viewport={{ once: true }}
              >
                <SocialIcons iconData={member.iconData} />
              </motion.div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </section>
    </>
  );
}
