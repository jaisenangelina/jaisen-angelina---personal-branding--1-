import { motion } from "motion/react";
import { ArrowRight, Trophy, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center px-6 relative overflow-hidden bg-yellow-50">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center z-10"
        >
          <span className="bg-red-500 text-white px-4 py-1 font-black text-sm uppercase tracking-widest mb-6 inline-block">
            Currently Studying at SMAK Frateran Surabaya
          </span>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-none mb-8">
            JAISEN <br /> ANGELINA
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-gray-800 max-w-3xl mx-auto mb-12">
            Ambitious mind. Compassionate heart. Professional soul.
          </p>
          <Link to="/portfolio">
            <motion.button 
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white text-2xl font-black px-12 py-6 rounded-none border-4 border-black hover:bg-white hover:text-black transition-colors shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none flex items-center gap-4 mx-auto"
            >
              VIEW MY WORK <ArrowRight />
            </motion.button>
          </Link>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -left-20 w-80 h-80 border-8 border-blue-500/20 rounded-full"
        />
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-20 text-orange-500 opacity-20"
        >
          <Trophy size={120} />
        </motion.div>
      </section>

      {/* About Me Section */}
      <section className="py-32 px-6 bg-white border-y-8 border-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-20 items-center">
          <div className="relative justify-self-center lg:justify-self-start">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-blue-500 border-8 border-black shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
              <img 
                src="uploads/profil.jpeg" 
                alt="Jaisen Angelina" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-yellow-400 p-4 border-4 border-black font-black text-lg rotate-6">
              BASKETBALL LOVER 🏀
            </div>
          </div>
          <div>
            <h2 className="text-6xl font-black mb-8 underline decoration-red-500 underline-offset-8">ABOUT ME</h2>
            <p className="text-2xl font-bold text-gray-700 leading-relaxed mb-8">
              I'm a person who easily socializes with new people. I really enjoy basketball because it's so exciting and teaches time management, teamwork, and trust in others.
            </p>
            <p className="text-2xl font-bold text-gray-700 leading-relaxed">
              I'm also someone who can bring people together to form a solid team. Passionate about fostering team synergy and building meaningful connections through collaborative environments.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 px-6 bg-orange-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-black mb-20 text-center">EXPERIENCE</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Puri Cup - Basketball", date: "2026", color: "bg-red-400" },
              { title: "Nextgen 3x3", date: "2024, 2025", color: "bg-blue-400" },
              { title: "DBL 3x3", date: "2025", color: "bg-yellow-400" }
            ].map((exp, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`${exp.color} p-10 border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]`}
              >
                <Trophy size={48} className="mb-6" />
                <h3 className="text-3xl font-black mb-4">{exp.title}</h3>
                <p className="text-xl font-bold opacity-80">{exp.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
