import { motion } from "motion/react";
import { CheckCircle2, MessageCircle, Users, ShieldAlert, Zap } from "lucide-react";

export default function Portfolio() {
 
  const projects = [
    {
      id: 1,
      title: "Puri cup - basketball 2026",
      description: "A thrilling basketball tournament experience.",
      image_url: "uploads/puri.jpeg", 
      category: "Basketball"
    },
    {
      id: 2,
      title: "Nextgen 3x3 2024, 2025",
      description: "Competing in the Nextgen 3x3 series.",
      image_url: "uploads/next.jpeg", // GANTI LINK INI
      category: "Basketball"
    },
    {
      id: 3,
      title: "DBL 3x3 2025",
      description: "The prestigious DBL 3x3 competition.",
      image_url: "uploads/dbl.jpeg", // GANTI LINK INI
      category: "Basketball"
    },
    
  ];

  const skills = [
    { name: "Team Building & Leadership", icon: <Users size={32} />, color: "bg-red-400" },
    { name: "Effective Communication", icon: <MessageCircle size={32} />, color: "bg-blue-400" },
    { name: "Teamwork & Collaboration", icon: <CheckCircle2 size={32} />, color: "bg-yellow-400" },
    { name: "Conflict Resolution", icon: <ShieldAlert size={32} />, color: "bg-orange-400" },
    { name: "Discipline & Consistency", icon: <Zap size={32} />, color: "bg-green-400" }
  ];

  return (
    <div className="pt-20 bg-white min-h-screen">
      {/* Skills Section */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black mb-16 text-center">CORE COMPETENCIES</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {skills.map((skill, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.1, rotate: i % 2 === 0 ? 2 : -2 }}
                className={`${skill.color} text-black p-8 border-4 border-white flex items-center gap-4 font-black text-xl shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)]`}
              >
                {skill.icon} {skill.name}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-7xl font-black tracking-tighter">PORTFOLIO</h2>
            <p className="text-2xl font-bold text-gray-500 mt-4">A showcase of my journey and achievements.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((project) => (
              <motion.div 
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -15 }}
                className="group border-8 border-black bg-white overflow-hidden shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] hover:shadow-[25px_25px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <div className="aspect-video overflow-hidden border-b-8 border-black">
                  <img 
                    src={project.image_url} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <span className="text-sm font-black uppercase tracking-widest text-red-500 mb-2 block">{project.category}</span>
                  <h3 className="text-3xl font-black mb-4">{project.title}</h3>
                  <p className="text-lg font-bold text-gray-600">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
