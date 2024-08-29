import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Abhinav Dholi's Portfolio",
  description: "I am Abhinav Dholi, a dynamic and inquisitive Software Development Engineer with a strong foundation in computational design principles. My expertise lies in Full Stack Development, Cloud and Container technologies, and Generative AI. I am passionate about leveraging technology to solve complex problems and create innovative solutions. With a background in Product Management and Agile methodologies, I bring a holistic approach to development that combines technical excellence with strategic vision.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
