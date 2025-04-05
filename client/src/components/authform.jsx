import { useState } from "react";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const toggleMode = () => setIsLogin(!isLogin);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] px-4 text-white font-sans">
      <div className="backdrop-blur-xl bg-black/70 border border-[#3b82f6] shadow-2xl rounded-2xl p-8 w-full max-w-md transition-all duration-300">
        <h2 className="text-3xl font-extrabold text-center text-blue-400 mb-6 tracking-wide">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        <form className="space-y-5">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 bg-[#1a1a1a] border border-blue-500/40 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 bg-[#1a1a1a] border border-blue-500/40 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 bg-[#1a1a1a] border border-blue-500/40 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white py-2 rounded-xl font-semibold tracking-wide shadow-md hover:shadow-blue-700 transition-all"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              onClick={toggleMode}
              className="ml-2 text-blue-400 hover:text-blue-300 underline transition-colors"
            >
              {isLogin ? "Sign up" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
