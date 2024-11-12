import ScreenWrapper from "../common-component/screen-wrapper";
import SectionTitle from "../common-component/section-title";
import ServiceCard from "./service-card";
import expoIcon from "@/public/Icon/service-icon/expo.png";
import nextjs from "@/public/Icon/service-icon/Nextjs.png";
import dotnet from "@/public/Icon/service-icon/dotnet.png";
import reactjs from "@/public/Icon/service-icon/reactjs.webp";
import mysql from "@/public/Icon/service-icon/mysql.webp";

export default function MyServiceSection() {
  return (
    <ScreenWrapper>
      <div className="mb-5">
        <SectionTitle subtitle="Providing End-to-End Software Development Services with a Strong Focus on Quality, Performance, and Client Satisfaction Across Every Project">
          What i do
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5 justify-center">
          {service.map((item) => (
            <div key={item.id}>
              <ServiceCard
                title={item.title}
                image={item.imageUrl}
                description={item.description}
                subTitle={item.subTitle}
              />
            </div>
          ))}
        </div>
      </div>
    </ScreenWrapper>
  );
}

const service = [
  {
    id: 1,
    title: "Next.js Development",
    subTitle: "Professional Website Development with Next.js",
    description:
      "Creating high-performance, SEO-optimized websites with Next.js that deliver seamless user experiences and fast load times. Leveraging server-side rendering and static site generation, I ensure your site is responsive, efficient, and primed for search engine visibility. My expertise allows me to build scalable, future-ready solutions, from portfolios to e-commerce platforms and complex web applications.",
    imageUrl: nextjs,
  },

  {
    id: 3,
    title: "React.js Development",
    subTitle: "Dynamic and Interactive Web Applications with React.js",
    description:
      "Building modern, interactive, and responsive web applications with React.js that engage users and enhance brand presence. Utilizing React's component-based architecture, I create scalable, reusable, and high-performance applications tailored to meet unique business requirements, from SPAs to real-time data-driven applications.",
    imageUrl: reactjs,
  },
  {
    id: 4,
    title: "MySQL Database Management",
    subTitle: "Efficient Data Management with MySQL",
    description:
      "Providing reliable MySQL database management and development using SQL to optimize data storage, retrieval, and security. Whether designing complex database schemas or optimizing queries for performance, I ensure your data is well-organized, secure, and easily accessible to support business operations and decision-making processes.",
    imageUrl: mysql,
  },
  {
    id: 5,
    title: "ASP.NET MVC Framework",
    subTitle: "Comprehensive API and Website Development with ASP.NET MVC",
    description:
      "Developing robust RESTful APIs and full-featured web applications with ASP.NET MVC, focusing on performance, scalability, and maintainability. With experience in .NET frameworks, I deliver secure, efficient solutions for various business needs, from content management systems to enterprise-level applications.",
    imageUrl: dotnet,
  },
  {
    id: 6,
    title: "Expo App Development",
    subTitle: "Cross-Platform Mobile Development with Expo",
    description:
      "Specializing in Expo for cross-platform mobile app development, I create Android and iOS applications that offer a smooth and consistent user experience. Using Expo’s ecosystem allows rapid prototyping and efficient development cycles, making it ideal for projects that prioritize time-to-market without compromising quality.",
    imageUrl: expoIcon,
  },
  {
    id: 2,
    title: "React Native Development",
    subTitle: "Android & iOS App Development with React Native",
    description:
      "Developing high-quality, cross-platform mobile applications for Android and iOS using React Native. I focus on creating intuitive, responsive, and efficient mobile apps that offer native-like performance. Whether for startups or established brands, my solutions provide a cohesive user experience that helps you reach a broader audience on both major platforms.",
    imageUrl: reactjs,
  }
];
