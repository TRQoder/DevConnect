import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-500/10 to-emerald-500/10 py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Connect, Collaborate, Create
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Join a community of developers, showcase your projects, and find your next collaboration opportunity.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/developers"
              className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-emerald-500 transition-colors shadow-sm hover:shadow-md"
            >
              Find Developers
            </Link>
            <Link
              to="/projects"
              className="bg-white text-blue-500 border-2 border-blue-500 px-8 py-3 rounded-full hover:bg-blue-500/5 transition-colors"
            >
              Browse Projects
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Why Choose DevConnect?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Create Your Profile
            </h3>
            <p className="text-gray-600">
              Showcase your skills, experience, and projects to the developer community.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Share Projects
            </h3>
            <p className="text-gray-600">
              Display your work, get feedback, and inspire other developers.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Collaborate
            </h3>
            <p className="text-gray-600">
              Find the perfect developers to work with on your next big project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 