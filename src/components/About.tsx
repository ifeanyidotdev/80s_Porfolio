import React from "react";
import { Code, Briefcase, Award } from "lucide-react";

const About: React.FC = () => {
  const experiences = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "Meghee LLC.",
      period: "2024 - Present",
      description:
        "Mentored and guided junior developers on mobile development best practices, state management principles, and API integration, resulting in improved team productivity and high-quality codebases. Developed file-handling features for backend systems, including secure file uploads, voice file processing, and dependency resolution to ensure seamless integration and conflict-free operations.Optimized backend services for network efficiency by introducing caching mechanisms, implementing efficient data retrieval strategies, and managing pagination for large datasets, leading to reduced response times and improved system scalability.",
    },
    {
      id: 2,
      title: "Founding Backend Developer",
      company: "Blucera Inc",
      period: "2022 - 2024",
      description:
        "Designed and implemented a robust, scalable backend using Django, backed by PostgreSQL for relational data and Redis for caching and task queuing. Leveraged Apache Kafka to build an asynchronous, event-driven system enabling seamless communication across various microservices. Integrated secure and modular payment services supporting multiple gateways and transaction workflows. Developed APIs and data models for a flexible B2B/B2C marketplace supporting listings, transactions, and user engagement. Engineered backend logic for file-based data processing and valuation algorithms. Built features to support small business operations, including scheduling, analytics, and learning management systems. Contributed to CI/CD pipelines, containerization (Docker), and monitoring, ensuring high availability and low latency across services.",
    },
    {
      id: 3,
      title: "Lead Mobile Developer",
      company: "Dora",
      period: "2024 - 2024 contract",
      description:
        "Developed and maintained the company’s primary mobile application using Flutter, delivering a consistent experience on both Android and iOS. Implemented features allowing riders to view and accept parcel pickup tasks, update statuses, and manage daily delivery workflows. Integrated GPS and location services to enable real-time rider tracking during delivery, enhancing transparency and reliability for users. Built secure delivery confirmation flows, including one-time PIN verification, digital signatures, and delivery photo capture. Applied effective state management solutions (e.g., Provider, Riverpod, or Bloc depending on actual use) to ensure a responsive and stable app experience. Contributed to release cycles through rigorous testing, bug fixes, and performance tuning to maintain high app quality.",
    },
    {
      id: 3,
      title: "Lead Mobile Developer",
      company: "KaboCash",
      period: "2023 - 2024 contract",
      description:
        "Cross-Platform App Development: Built and maintained a high-performance, user-friendly mobile application using Flutter, enabling seamless money transfers across multiple African regions. Designed intuitive user interfaces for sending and receiving money, viewing transaction histories, and managing recipient contacts. Helped abstract currency conversion complexities, providing users with a local-feel experience regardless of where they send funds. Integrated secure authentication and transaction verification methods (e.g., OTP, biometrics) to protect user data and financial operations. Implemented push notifications and real-time updates to keep users informed of transaction statuses. Worked closely with product and backend teams to ensure accurate API integration and smooth release cycles.",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="section-container">
        <h2 className="section-title" data-text="About Me">
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="retro-card p-6">
              <h3 className="text-2xl font-bold mb-4 cursive-font flex items-center">
                <Code className="mr-2 h-6 w-6 text-purple-400" />
                My Story
              </h3>
              <p className="mb-4 text-gray-300">
                I'm a passionate fullstack developer with over half a decade of
                experience building web and mobile applications. My journey in
                software development began before college, where I discovered my
                love for creating interactive digital experiences.
              </p>
              <p className="text-gray-300">
                I specialize in building robust, scalable applications using
                modern frameworks and best practices. My goal is to create
                software that not only functions flawlessly but also provides an
                exceptional user experience.
              </p>
            </div>
            {/* EDUCATION CENTER */}
            {/* <div className="retro-card p-6">
              <h3 className="text-2xl font-bold mb-4 cursive-font flex items-center">
                <GraduationCap className="mr-2 h-6 w-6 text-purple-400" />
                Education
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold">Master's in Computer Science</h4>
                  <p className="text-purple-400">Stanford University, 2016</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Bachelor's in Software Engineering</h4>
                  <p className="text-purple-400">MIT, 2014</p>
                </div>
              </div>
            </div> */}
          </div>

          <div>
            <div className="retro-card p-6">
              <h3 className="text-2xl font-bold mb-6 cursive-font flex items-center">
                <Briefcase className="mr-2 h-6 w-6 text-purple-400" />
                Experience
              </h3>
              <div className="space-y-8">
                {experiences.map((exp) => (
                  <div
                    key={exp.id}
                    className="relative pl-6 border-l-2 border-purple-500"
                  >
                    <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-purple-500"></div>
                    <h4 className="text-lg font-semibold">{exp.title}</h4>
                    <p className="text-purple-400 mb-1">
                      {exp.company} | {exp.period}
                    </p>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="retro-card p-6 mt-6">
              <h3 className="text-2xl font-bold mb-4 cursive-font flex items-center">
                <Award className="mr-2 h-6 w-6 text-purple-400" />
                Achievements
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Got my CyberSecurity Certification from Google</li>
                <li>Speaker at Flutter Conference 2024</li>
                <li>Open-source contributor</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
