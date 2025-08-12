'use client';

import { useState } from 'react';

// Simple SVG Icons
const Icons = {
  Shield: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  MapPin: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  AlertTriangle: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
    </svg>
  ),
  Users: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
    </svg>
  ),
  FileText: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  Camera: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  Phone: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
  BookOpen: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  Globe: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Heart: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  Search: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  CheckCircle: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
};

export default function RuralProtection() {
  const [activeTab, setActiveTab] = useState('overview');
  const [emergencyMode, setEmergencyMode] = useState(false);

  const stats = {
    protectedLands: 1247,
    activeCases: 89,
    lawyersRegistered: 156,
    emergencyAlerts: 23
  };

  const lawyers = [
    {
      id: 1,
      name: "Barrister Adebayo Oke",
      expertise: "Land Law, Property Rights",
      languages: ["English", "Yoruba", "Hausa"],
      location: "Lagos",
      rating: 4.8,
      casesWon: 45
    },
    {
      id: 2,
      name: "Barrister Fatima Hassan",
      expertise: "Rural Land Disputes, Legal Aid",
      languages: ["English", "Hausa", "Fulfulde"],
      location: "Kano",
      rating: 4.9,
      casesWon: 32
    }
  ];

  const recentCases = [
    {
      id: 1,
      location: "Ogun State",
      description: "Land grabbing attempt on 5-acre farm",
      status: "Active",
      lawyer: "Barrister Adebayo Oke",
      date: "2024-01-15"
    },
    {
      id: 2,
      location: "Kano State",
      description: "Boundary dispute resolution",
      status: "Resolved",
      lawyer: "Barrister Fatima Hassan",
      date: "2024-01-10"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Icons.Shield className="h-8 w-8" />
                <h1 className="text-2xl font-bold">Rural Land Protection</h1>
              </div>
              <span className="text-sm text-green-100">Legal Aid & Emergency Support</span>
            </div>
            <div className="flex items-center space-x-4">
              {emergencyMode && (
                <div className="bg-red-500 px-3 py-1 rounded-full text-sm font-medium animate-pulse">
                  EMERGENCY MODE
                </div>
              )}
              <button 
                onClick={() => setEmergencyMode(!emergencyMode)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  emergencyMode 
                    ? 'bg-red-500 hover:bg-red-600' 
                    : 'bg-green-500 hover:bg-green-700'
                }`}
              >
                <Icons.AlertTriangle className="h-4 w-4 inline mr-2" />
                Emergency Alert
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {[
              { id: 'overview', label: 'Overview', icon: Icons.Shield },
              { id: 'lawyers', label: 'Find Lawyers', icon: Icons.Users },
              { id: 'register', label: 'Register Land', icon: Icons.MapPin },
              { id: 'education', label: 'Legal Education', icon: Icons.BookOpen },
              { id: 'community', label: 'Community Watch', icon: Icons.Globe }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-green-500 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg border shadow-sm p-6">
                <div className="flex items-center">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Icons.Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Protected Lands</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.protectedLands}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border shadow-sm p-6">
                <div className="flex items-center">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Icons.FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Active Cases</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.activeCases}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border shadow-sm p-6">
                <div className="flex items-center">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Icons.Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Lawyers Registered</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.lawyersRegistered}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border shadow-sm p-6">
                <div className="flex items-center">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <Icons.AlertTriangle className="h-6 w-6 text-red-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Emergency Alerts</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.emergencyAlerts}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Alert System */}
            <div className="bg-white rounded-lg border shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Emergency Alert System</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">24/7 Protection</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center space-x-2">
                      <Icons.CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Instant police notification</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Icons.CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Community leader alerts</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Icons.CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Legal representative contact</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Icons.CheckCircle className="h-4 w-4 text-green-600" />
                      <span>GPS location tracking</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Evidence Collection</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center space-x-2">
                      <Icons.Camera className="h-4 w-4 text-blue-600" />
                      <span>Photo & video documentation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Icons.Phone className="h-4 w-4 text-blue-600" />
                      <span>Voice recording capability</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Icons.FileText className="h-4 w-4 text-blue-600" />
                      <span>Secure evidence storage</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Icons.Shield className="h-4 w-4 text-blue-600" />
                      <span>Court-ready documentation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Recent Cases */}
            <div className="bg-white rounded-lg border shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Cases</h2>
              <div className="space-y-4">
                {recentCases.map((case_) => (
                  <div key={case_.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Icons.FileText className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-gray-900">{case_.description}</h4>
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          case_.status === 'Active' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                        }`}>
                          {case_.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        {case_.location} • {case_.lawyer} • {case_.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Lawyers Tab */}
        {activeTab === 'lawyers' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Find Legal Help</h2>
              <div className="flex space-x-2">
                <div className="relative">
                  <Icons.Search className="h-4 w-4 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="Search lawyers..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option>All Languages</option>
                  <option>English</option>
                  <option>Yoruba</option>
                  <option>Hausa</option>
                  <option>Igbo</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {lawyers.map((lawyer) => (
                <div key={lawyer.id} className="bg-white rounded-lg border shadow-sm p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{lawyer.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">{lawyer.expertise}</p>
                      <p className="text-sm text-gray-600">{lawyer.location}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1">
                        <Icons.Heart className="h-4 w-4 text-red-500" />
                        <span className="text-sm font-medium">{lawyer.rating}</span>
                      </div>
                      <p className="text-xs text-gray-500">{lawyer.casesWon} cases won</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      {lawyer.languages.map((lang) => (
                        <span key={lang} className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button className="w-full mt-4 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                    Contact Lawyer
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Register Land Tab */}
        {activeTab === 'register' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg border shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Register Your Land</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">GPS Land Registration</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Mark your land boundaries digitally to establish legal ownership and enable emergency protection.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Icons.MapPin className="h-4 w-4 text-green-600" />
                      <span className="text-sm">GPS boundary mapping</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icons.Camera className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Photo documentation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icons.FileText className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Legal document upload</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icons.Shield className="h-4 w-4 text-green-600" />
                      <span className="text-sm">24/7 monitoring</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg p-6">
                  <h4 className="font-medium text-gray-900 mb-3">Start Registration</h4>
                  <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors">
                    <Icons.MapPin className="h-4 w-4 inline mr-2" />
                    Mark Land Boundaries
                  </button>
                  <p className="text-xs text-gray-500 mt-2">
                    Use your device's GPS to accurately mark your land boundaries
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Education Tab */}
        {activeTab === 'education' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg border shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Legal Education Center</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-4 border rounded-lg">
                  <Icons.BookOpen className="h-8 w-8 text-blue-600 mb-3" />
                  <h3 className="font-medium text-gray-900 mb-2">Land Rights Guide</h3>
                  <p className="text-sm text-gray-600 mb-3">Understanding your land ownership rights in Nigeria</p>
                  <button className="text-blue-600 text-sm hover:underline">Read Guide →</button>
                </div>
                <div className="p-4 border rounded-lg">
                  <Icons.Users className="h-8 w-8 text-green-600 mb-3" />
                  <h3 className="font-medium text-gray-900 mb-2">Dispute Resolution</h3>
                  <p className="text-sm text-gray-600 mb-3">Steps to resolve land disputes peacefully</p>
                  <button className="text-green-600 text-sm hover:underline">Learn More →</button>
                </div>
                <div className="p-4 border rounded-lg">
                  <Icons.FileText className="h-8 w-8 text-purple-600 mb-3" />
                  <h3 className="font-medium text-gray-900 mb-2">Court Preparation</h3>
                  <p className="text-sm text-gray-600 mb-3">How to prepare for court proceedings</p>
                  <button className="text-purple-600 text-sm hover:underline">Get Ready →</button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">AI Legal Assistant</h2>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-3">
                  Get instant help in your local language. Our AI assistant can help you understand legal processes and prepare for court.
                </p>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Ask a legal question..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                    Ask AI
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Community Watch Tab */}
        {activeTab === 'community' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg border shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Community Watch Network</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Report Land Disputes</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Help protect your community by reporting land disputes and suspicious activities.
                  </p>
                  <button className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors">
                    <Icons.AlertTriangle className="h-4 w-4 inline mr-2" />
                    Report Incident
                  </button>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Risk Heat Map</h3>
                  <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center">
                    <div className="text-center">
                      <Icons.MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500">Interactive Risk Map</p>
                      <p className="text-sm text-gray-400">Showing high-risk areas for land grabbing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
