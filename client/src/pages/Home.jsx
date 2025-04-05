import React from "react";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-6 py-12">
      {/* Brand Name */}
      <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 drop-shadow mb-4">
        Nova
      </h1>

      {/* Tagline */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-4 text-center">
        Student Co-Working & Innovation Hub
      </h2>

      {/* Description */}
      <p className="text-base md:text-lg text-center max-w-2xl text-blue-100 mb-10 leading-relaxed">
        A platform designed for students to showcase their innovations, collaborate on real-world projects, connect with mentors, and turn their skills into opportunities.
      </p>

      {/* Features Box */}
      <div className="bg-black/70 backdrop-blur-md border border-blue-500/40 rounded-2xl p-8 w-full max-w-xl shadow-lg">
        <h3 className="text-xl font-semibold text-blue-300 mb-4">Core Features</h3>
        <ul className="list-none space-y-3 text-gray-300 text-sm md:text-base tracking-wide">
          <li>- Share and showcase innovative projects with the community</li>
          <li>- Collaborate with peers on real-time academic and tech projects</li>
          <li>- AI-driven mentorship and personalized project feedback</li>
          <li>- XP-based gamification system with achievements and badges</li>
          <li>- Internship and job matching tailored to student skillsets</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
