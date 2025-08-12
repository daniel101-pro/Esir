'use client';

import { useState } from 'react';

// Simple SVG Icons
const Icons = {
  Camera: ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  MapPin: ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  Send: ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
  ),
  ArrowLeft: ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
  ),
  AlertTriangle: ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
    </svg>
  ),
  Building: ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  Users: ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
    </svg>
  ),
  FileText: ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  CheckCircle: ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  XCircle: ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Phone: ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
  Mail: ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  Globe: ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
};

export default function MobileApp() {
  const [activeTab, setActiveTab] = useState('report');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [reportText, setReportText] = useState('');
  const [location, setLocation] = useState('');

  const categories = [
    { id: 'construction', label: 'Unapproved Construction', icon: Icons.Building, color: 'red' },
    { id: 'sewage', label: 'Sewage Blockage', icon: Icons.AlertTriangle, color: 'orange' },
    { id: 'cracks', label: 'Structural Cracks', icon: Icons.XCircle, color: 'yellow' },
    { id: 'occupation', label: 'Public Land Occupation', icon: Icons.Users, color: 'purple' },
    { id: 'garbage', label: 'Garbage Dumping', icon: Icons.AlertTriangle, color: 'brown' }
  ];

  const recentReports = [
    {
      id: 1,
      category: 'sewage',
      description: 'Sewage overflow in main street',
      location: 'Downtown Area',
      status: 'pending',
      timestamp: '2 hours ago'
    },
    {
      id: 2,
      category: 'construction',
      description: 'Construction without permit visible',
      location: 'Commercial District',
      status: 'investigating',
      timestamp: '4 hours ago'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white">
        <div className="px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button className="p-2">
                <Icons.ArrowLeft className="h-5 w-5" />
              </button>
              <div>
                <h1 className="text-xl font-bold">CityGuard</h1>
                <p className="text-sm text-blue-100">Community Reporting</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2">
                <Icons.Phone className="h-4 w-4" />
              </button>
              <button className="p-2">
                <Icons.Mail className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white border-b">
        <div className="flex">
          <button
            onClick={() => setActiveTab('report')}
            className={`flex-1 py-3 px-4 text-sm font-medium ${
              activeTab === 'report'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500'
            }`}
          >
            Report Issue
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`flex-1 py-3 px-4 text-sm font-medium ${
              activeTab === 'history'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500'
            }`}
          >
            My Reports
          </button>
          <button
            onClick={() => setActiveTab('info')}
            className={`flex-1 py-3 px-4 text-sm font-medium ${
              activeTab === 'info'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500'
            }`}
          >
            Info
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="p-4">
        {/* Report Issue Tab */}
        {activeTab === 'report' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Report an Issue</h2>
              
              {/* Category Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Select Issue Category
                </label>
                <div className="grid grid-cols-1 gap-3">
                  {categories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`flex items-center space-x-3 p-3 rounded-lg border-2 transition-colors ${
                          selectedCategory === category.id
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className={`p-2 rounded-full bg-${category.color}-100`}>
                          <Icon className={`h-5 w-5 text-${category.color}-600`} />
                        </div>
                        <span className="text-sm font-medium text-gray-900">{category.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Location Input */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter location or use GPS"
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-10"
                  />
                  <Icons.MapPin className="h-4 w-4 text-gray-400 absolute left-3 top-3" />
                </div>
                <button className="mt-2 text-sm text-blue-600 hover:text-blue-800">
                  Use Current Location
                </button>
              </div>

              {/* Description */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={reportText}
                  onChange={(e) => setReportText(e.target.value)}
                  placeholder="Describe the issue in detail..."
                  rows={4}
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                />
              </div>

              {/* Photo Upload */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Add Photos (Optional)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Icons.Camera className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Tap to add photos</p>
                  <p className="text-xs text-gray-500">Max 5 photos</p>
                </div>
              </div>

              {/* Submit Button */}
              <button className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-blue-600 text-white hover:bg-blue-700 h-10 py-2 px-4">
                <Icons.Send className="h-4 w-4 mr-2" />
                Submit Report
              </button>
            </div>

            {/* Quick Report Options */}
            <div className="bg-white rounded-lg p-4">
              <h3 className="text-md font-semibold text-gray-900 mb-3">Quick Report</h3>
              <div className="space-y-2">
                <button className="w-full text-left p-3 bg-red-50 rounded-lg border border-red-200">
                  <div className="flex items-center space-x-2">
                    <Icons.AlertTriangle className="h-4 w-4 text-red-600" />
                    <span className="text-sm font-medium text-red-900">Emergency Issue</span>
                  </div>
                </button>
                <button className="w-full text-left p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="flex items-center space-x-2">
                    <Icons.Building className="h-4 w-4 text-yellow-600" />
                    <span className="text-sm font-medium text-yellow-900">Construction Violation</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* My Reports Tab */}
        {activeTab === 'history' && (
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">My Reports</h2>
              
              {recentReports.map((report) => (
                <div key={report.id} className="border-b border-gray-200 last:border-b-0 py-4">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Icons.AlertTriangle className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{report.description}</h4>
                      <p className="text-sm text-gray-600 mt-1">{report.location}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          report.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'
                        }`}>
                          {report.status}
                        </span>
                        <span className="text-xs text-gray-500">{report.timestamp}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-lg p-4">
              <h3 className="text-md font-semibold text-gray-900 mb-3">Report Statistics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">12</p>
                  <p className="text-sm text-gray-600">Total Reports</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">8</p>
                  <p className="text-sm text-gray-600">Resolved</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Info Tab */}
        {activeTab === 'info' && (
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">About CityGuard</h2>
              <p className="text-sm text-gray-600 mb-4">
                CityGuard is your platform for reporting urban planning and construction issues. 
                Help keep your city safe and compliant.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icons.CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-gray-700">Anonymous reporting available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icons.CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-gray-700">Real-time status updates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icons.CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-gray-700">Government response tracking</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4">
              <h3 className="text-md font-semibold text-gray-900 mb-3">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icons.Phone className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-gray-700">Emergency: 911</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icons.Phone className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-gray-700">City Services: 311</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icons.Mail className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-gray-700">reports@cityguard.gov</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icons.Globe className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-gray-700">www.cityguard.gov</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4">
              <h3 className="text-md font-semibold text-gray-900 mb-3">Report Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <div key={category.id} className="flex items-center space-x-3">
                      <Icon className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-700">{category.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t">
        <div className="flex justify-around py-2">
          <button className="flex flex-col items-center p-2">
            <Icons.Camera className="h-5 w-5 text-blue-600" />
            <span className="text-xs text-blue-600">Report</span>
          </button>
          <button className="flex flex-col items-center p-2">
            <Icons.FileText className="h-5 w-5 text-gray-400" />
            <span className="text-xs text-gray-400">History</span>
          </button>
          <button className="flex flex-col items-center p-2">
            <Icons.Globe className="h-5 w-5 text-gray-400" />
            <span className="text-xs text-gray-400">Info</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
