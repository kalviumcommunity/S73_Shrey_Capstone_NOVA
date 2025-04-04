import React from "react";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
        <h1 className="text-5xl font-bold m-3 text-cyan-500">Nova</h1>
      <h1 className="text-4xl font-bold mb-4 text-amber-400">🚀 Student Co-Working & Innovation Hub</h1>
      <p className="text-lg text-center max-w-2xl mb-6 text-pink-300">
        A platform for students to showcase innovations, collaborate on projects, find mentors, and monetize their skills.
      </p>
      <div className="bg-gray-800 p-4 rounded-lg shadow-md max-w-lg">
        <h2 className="text-2xl font-semibold mb-2">💡 Features:</h2>
        <ul className="list-disc pl-6 space-y-1 text-gray-300">
          <li>✅ Share & showcase projects</li>
          <li>✅ Collaborate & network with peers</li>
          <li>✅ AI-powered mentorship & feedback</li>
          <li>✅ Gamification with XP & rewards</li>
          <li>✅ AI-powered job & internship matching</li>
        </ul>
      </div>
    </div>
  );
}


export default Home