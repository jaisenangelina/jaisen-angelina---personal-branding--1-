import { Mail, Instagram, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-5xl font-black mb-6">Let's Connect!</h2>
          <p className="text-gray-400 text-xl max-w-md">
            Always open for new opportunities and collaborations. Feel free to reach out!
          </p>
        </div>
        <div className="flex flex-col gap-6 text-2xl font-bold">
          <a href="mailto:jaisenangelina@gmail.com" className="flex items-center gap-4 hover:text-red-500 transition-colors">
            <Mail size={32} /> jaisenangelina@gmail.com
          </a>
          <a href="https://instagram.com/jaisenangelina" target="_blank" className="flex items-center gap-4 hover:text-orange-500 transition-colors">
            <Instagram size={32} /> @jaisenangelina
          </a>
          <a href="https://github.com/jaisenangelina" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-blue-500 transition-colors">
            <Github size={32} /> GitHub
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-800 text-gray-500 font-medium">
        © {new Date().getFullYear()} Jaisen Angelina. Built with Boldness.
      </div>
    </footer>
  );
}
