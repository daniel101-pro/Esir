'use client';

import { useState } from 'react';

// Simple SVG Icons
const Icons = {
  Satellite: ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  MapPin: ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  Users: ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
    </svg>
  ),
  AlertTriangle: ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
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
  Building: ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  FileText: ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  Camera: ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  BarChart3: ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  Settings: ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  Bell: ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4.83 2.83A4 4 0 004 6v10a4 4 0 004 4h8a4 4 0 004-4V6a4 4 0 00-4-4H8a4 4 0 00-.83 1.17z" />
    </svg>
  ),
  Search: ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  Download: ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  ),
  Eye: ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  ),
  Shield: ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  Globe: ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
  )
};

export default function Home() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedDistrict, setSelectedDistrict] = useState('all');

  const stats = {
    totalBuildings: 1247,
    flaggedBuildings: 23,
    resolvedIssues: 156,
    pendingReports: 8,
    greenRating: 89,
    yellowRating: 8,
    redRating: 3
  };

  const recentAlerts = [
    {
      id: 1,
      type: 'new_construction',
      location: 'Downtown District',
      description: 'New rooftop detected - requires inspection',
      severity: 'high',
      timestamp: '2 hours ago'
    },
    {
      id: 2,
      type: 'sewage_overflow',
      location: 'Industrial Zone',
      description: 'Sewage blockage reported by community',
      severity: 'medium',
      timestamp: '4 hours ago'
    },
    {
      id: 3,
      type: 'land_dispute',
      location: 'Residential Area',
      description: 'Illegal land occupation detected',
      severity: 'high',
      timestamp: '6 hours ago'
    }
  ];

  const districts = [
    { id: 'all', name: 'All Districts' },
    { id: 'downtown', name: 'Downtown' },
    { id: 'residential', name: 'Residential' },
    { id: 'industrial', name: 'Industrial' },
    { id: 'commercial', name: 'Commercial' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Icons.Shield className="h-8 w-8 text-blue-600" />
                <h1 className="text-2xl font-bold text-gray-900">CityGuard</h1>
              </div>
              <span className="text-sm text-gray-500">Urban Planning & Construction Monitoring</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Icons.Bell className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Icons.Settings className="h-5 w-5" />
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
              { id: 'dashboard', label: 'Dashboard', icon: Icons.BarChart3 },
              { id: 'satellite', label: 'Satellite Monitoring', icon: Icons.Satellite },
              { id: 'land-records', label: 'Land Records', icon: Icons.FileText },
              { id: 'community', label: 'Community Reports', icon: Icons.Users },
              { id: 'infrastructure', label: 'Infrastructure', icon: Icons.Building },
              { id: 'inspections', label: 'Inspections', icon: Icons.Eye },
              { id: 'rural-protection', label: 'Rural Protection', icon: Icons.Shield, href: '/rural-protection' }
            ].map((tab) => {
              const Icon = tab.icon;
              if (tab.href) {
                return (
                  <a
                    key={tab.id}
                    href={tab.href}
                    className="flex items-center space-x-2 py-4 px-1 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  >
                    <Icon className="h-4 w-4" />
                    <span>{tab.label}</span>
                  </a>
                );
              }
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
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
        {/* Dashboard Overview */}
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg border shadow-sm p-6">
                <div className="flex items-center">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Icons.Building className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Total Buildings</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalBuildings}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border shadow-sm p-6">
                <div className="flex items-center">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <Icons.AlertTriangle className="h-6 w-6 text-red-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Flagged Buildings</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.flaggedBuildings}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border shadow-sm p-6">
                <div className="flex items-center">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Icons.CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Resolved Issues</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.resolvedIssues}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border shadow-sm p-6">
                <div className="flex items-center">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <Icons.Users className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Pending Reports</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.pendingReports}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Safety Ratings */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg border shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Building Safety Ratings</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Green (Safe)</span>
                    </div>
                    <span className="text-sm font-medium">{stats.greenRating}%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Yellow (Warning)</span>
                    </div>
                    <span className="text-sm font-medium">{stats.yellowRating}%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Red (Unsafe)</span>
                    </div>
                    <span className="text-sm font-medium">{stats.redRating}%</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Alerts</h3>
                <div className="space-y-3">
                  {recentAlerts.map((alert) => (
                    <div key={alert.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className={`p-1 rounded-full ${
                        alert.severity === 'high' ? 'bg-red-100' : 'bg-yellow-100'
                      }`}>
                        <Icons.AlertTriangle className={`h-4 w-4 ${
                          alert.severity === 'high' ? 'text-red-600' : 'text-yellow-600'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{alert.description}</p>
                        <p className="text-xs text-gray-500">{alert.location} • {alert.timestamp}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Satellite Monitoring */}
        {activeTab === 'satellite' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Satellite & Drone Monitoring</h2>
              <div className="flex space-x-2">
                <select 
                  value={selectedDistrict} 
                  onChange={(e) => setSelectedDistrict(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-48"
                >
                  {districts.map((district) => (
                    <option key={district.id} value={district.id}>{district.name}</option>
                  ))}
                </select>
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-blue-600 text-white hover:bg-blue-700 h-10 py-2 px-4">
                  <Icons.Download className="h-4 w-4 mr-2" />
                  Export Data
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg border shadow-sm p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Icons.Satellite className="h-5 w-5 text-blue-600" />
                  <h3 className="text-lg font-semibold">AI Analysis</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• New rooftops detection</li>
                  <li>• Construction changes tracking</li>
                  <li>• Rapid build identification</li>
                  <li>• Land encroachment alerts</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg border shadow-sm p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Icons.MapPin className="h-5 w-5 text-green-600" />
                  <h3 className="text-lg font-semibold">Coverage Areas</h3>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Downtown District</p>
                  <p>• Industrial Zone</p>
                  <p>• Residential Areas</p>
                  <p>• Commercial Centers</p>
                </div>
              </div>

              <div className="bg-white rounded-lg border shadow-sm p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Icons.Bell className="h-5 w-5 text-red-600" />
                  <h3 className="text-lg font-semibold">Alert System</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Automated notifications</li>
                  <li>• Urban planning alerts</li>
                  <li>• Inspection scheduling</li>
                  <li>• Real-time monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Land Records */}
        {activeTab === 'land-records' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Land Record Verification</h2>
              <button className="btn btn-primary">
                <Icons.Search className="h-4 w-4 mr-2" />
                Search Records
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg border shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4">Digital Land Registry</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icons.CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm">Plot ownership verification</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icons.CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm">Legal development checks</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icons.CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm">Disputed land flags</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icons.CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm">Digital permit system</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4">Construction Permits</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-2">Required Documents</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Structural design documents</li>
                      <li>• Materials list</li>
                      <li>• Engineer's license number</li>
                      <li>• Site survey report</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-medium text-green-900 mb-2">QR Code System</h4>
                    <p className="text-sm text-green-800">Every building has a unique QR code for instant permit verification</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Recent Land Disputes</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plot ID</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dispute Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">PL-001</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Downtown Block B</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Illegal occupation</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Active</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button className="text-blue-600 hover:text-blue-900">View Details</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Community Reports */}
        {activeTab === 'community' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Community Reporting</h2>
              <button className="btn btn-primary">
                <Icons.Camera className="h-4 w-4 mr-2" />
                Report Issue
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg border shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4">Report Categories</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Icons.Building className="h-4 w-4 text-red-600" />
                    <span className="text-sm">Unapproved construction</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icons.AlertTriangle className="h-4 w-4 text-orange-600" />
                    <span className="text-sm">Sewage blockages</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icons.XCircle className="h-4 w-4 text-yellow-600" />
                    <span className="text-sm">Structural cracks</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icons.Users className="h-4 w-4 text-purple-600" />
                    <span className="text-sm">Public land occupation</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4">Reporting Channels</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Icons.Globe className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">Web Application</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icons.Phone className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Mobile App</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icons.Mail className="h-4 w-4 text-purple-600" />
                    <span className="text-sm">SMS Service</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4">Report Features</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Icons.Camera className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">Photo upload</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icons.MapPin className="h-4 w-4 text-green-600" />
                    <span className="text-sm">GPS location</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icons.FileText className="h-4 w-4 text-purple-600" />
                    <span className="text-sm">Category selection</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Recent Community Reports</h3>
              <div className="space-y-4">
                {[
                  {
                    id: 1,
                    type: 'sewage_overflow',
                    location: 'Residential Area A',
                    description: 'Sewage overflow in main street',
                    reporter: 'Anonymous',
                    timestamp: '2 hours ago',
                    status: 'pending'
                  },
                  {
                    id: 2,
                    type: 'unapproved_construction',
                    location: 'Commercial District',
                    description: 'Construction without visible permit',
                    reporter: 'John Doe',
                    timestamp: '4 hours ago',
                    status: 'investigating'
                  }
                ].map((report) => (
                  <div key={report.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Icons.AlertTriangle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-gray-900">{report.description}</h4>
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          report.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'
                        }`}>
                          {report.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{report.location} • {report.timestamp}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Infrastructure Monitoring */}
        {activeTab === 'infrastructure' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Sewage & Infrastructure Monitoring</h2>
              <button className="btn btn-primary">
                <Icons.BarChart3 className="h-4 w-4 mr-2" />
                View GIS Map
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg border shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4">Infrastructure Coverage</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Sewage Lines</span>
                    <span className="text-sm font-medium">1,247 km</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Manholes</span>
                    <span className="text-sm font-medium">3,456 units</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Drainage Systems</span>
                    <span className="text-sm font-medium">892 locations</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4">Predictive Maintenance</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-medium text-yellow-900 mb-2">High Priority Areas</h4>
                    <p className="text-sm text-yellow-800">Areas with repeated complaints flagged for priority repair</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-medium text-green-900 mb-2">Work Orders</h4>
                    <p className="text-sm text-green-800">Direct assignment to municipal crews with progress tracking</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Maintenance Status</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Issue</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Crew</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Main Street</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Sewage blockage</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">High</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">In Progress</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Crew A</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Inspections */}
        {activeTab === 'inspections' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Inspection & Rating System</h2>
              <button className="btn btn-primary">
                <Icons.Eye className="h-4 w-4 mr-2" />
                Schedule Inspection
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg border shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4">Safety Ratings</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Green - Safe</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm">Yellow - Warning</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                    <span className="text-sm">Red - Unsafe</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4">Enforcement Actions</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Icons.XCircle className="h-4 w-4 text-red-600" />
                    <span className="text-sm">Construction halt for unsafe structures</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icons.MapPin className="h-4 w-4 text-orange-600" />
                    <span className="text-sm">Public listing on unsafe buildings map</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icons.Shield className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">Sale/rental prevention until repairs</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4">Builder Accountability</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Icons.FileText className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">Safe construction tutorials</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icons.AlertTriangle className="h-4 w-4 text-red-600" />
                    <span className="text-sm">Public blacklist for repeat offenders</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icons.CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Rewards for consistent green ratings</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Recent Inspections</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Building ID</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Inspector</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">BLD-001</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Downtown Tower</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Engineer Smith</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Green</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-01-15</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">BLD-002</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Residential Complex</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Engineer Johnson</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Red</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-01-14</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
