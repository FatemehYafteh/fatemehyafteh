import { HiOutlineMail } from "react-icons/hi";
import { LuLinkedin } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Fatemeh, a front-end developer specialized in React and Next.js.",
};

export default function Contact() {
  const contactMethods = [
    {
      id: 1,
      type: "Email",
      value: "fatemmehyafteh@gmail.com",
      link: "mailto:fatemmehyafteh@gmail.com",
      icon:<HiOutlineMail />,
    },
    {
      id: 2,
      type: "LinkedIn",
      value: "linkedin.com/in/fatemeh-yafteh",
      link: "https://www.linkedin.com/in/fatemeh-yafteh",
      icon:  <LuLinkedin />,
    },
    {
      id: 3,
      type: "GitHub",
      value: "github.com/FatemehYafteh",
      link: "https://github.com/FatemehYafteh",
      icon: <FaGithub />,
    },
  ];

  return (
    <section className="section max-w-6xl mx-auto px-2 md:px-6 py-10 md:py-20" id="contact">
      <h2 className="heading mb-12 text-center">Contact Me</h2>
      <div className=" grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
        {contactMethods.map((item) => (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="card max-md:p-4! effect hover:shadow-xl transition flex flex-col items-center justify-center text-center"
          >
            <h3 className="text-xl font-bold mb-2">{item.type}</h3>
            <div className="flex gap-1.5">
              <p className="text-xl shrink-0">{item.icon}</p>
              <p className="text-secondary min-w-0 wrap-anywhere">{item.value}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
