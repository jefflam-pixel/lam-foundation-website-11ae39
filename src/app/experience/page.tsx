"use client";

import { useState, useEffect } from "react";

export default function ExperiencePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dubaiTime, setDubaiTime] = useState("");

  useEffect(() => {
    const updateDubaiTime = () => {
      const now = new Date();
      const dubaiTime = new Date(now.toLocaleString("en-US", {timeZone: "Asia/Dubai"}));
      setDubaiTime(dubaiTime.toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      }));
    };

    updateDubaiTime();
    const interval = setInterval(updateDubaiTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h2 className="text-2xl font-bold text-blue-600">LAM Foundation</h2>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-300">Home</a>
                <a href="/portfolio" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-300">Portfolio</a>
                <a href="/experience" className="text-blue-600 px-3 py-2 text-sm font-medium">Experience</a>
                <a href="/about" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-300">About</a>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span>Dubai Time: {dubaiTime}</span>
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium">
                Get Started
              </button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-900 hover:text-blue-600 transition-colors duration-300"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
                <a href="/" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors duration-300">Home</a>
                <a href="/portfolio" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors duration-300">Portfolio</a>
                <a href="/experience" className="text-blue-600 block px-3 py-2 text-base font-medium">Experience</a>
                <a href="/about" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors duration-300">About</a>
                <div className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span>Dubai Time: {dubaiTime}</span>
                </div>
                <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium mt-4">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main className="pt-16">
        <section className="min-h-[80vh] bg-gradient-to-br from-blue-600 to-purple-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <div className="mb-8 inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span className="text-lg font-medium">Dubai Time: {dubaiTime}</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Enhanced User Experience
                <span className="block text-blue-200">Features & Functionality</span>
              </h1>
              <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
                Discover how Light Ahead Movement delivers exceptional user experiences through thoughtful design, real-time functionality, and intuitive features that keep you connected across time zones.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg">
                  Explore Features
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold text-lg">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Real-Time Global Connectivity</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay synchronized with Dubai's business hours through our integrated time display, ensuring seamless communication and project coordination.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <article className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Live Time Synchronization</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our website displays Dubai time (GMT+4) in real-time, helping you coordinate meetings, deadlines, and communications with our team across different time zones.
                </p>
              </article>

              <article className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Seamless Navigation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Experience intuitive navigation designed for lead generation, with clear calls-to-action and smooth transitions that guide you toward meaningful engagement.
                </p>
              </article>

              <article className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">User-Centric Design</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every element is crafted with purpose, from mobile-responsive layouts to accessibility features that ensure an exceptional experience for all users.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Portfolio-Driven Lead Generation</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our website serves as a comprehensive portfolio showcase, strategically designed to convert visitors into qualified leads through compelling case studies, testimonials, and clear value propositions.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="currentColor">
                        <path d="M10 3L4.5 8.5L2 6"/>
                      </svg>
                    </div>
                    <p className="text-gray-700">Interactive portfolio galleries showcasing work samples and capabilities</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="currentColor">
                        <path d="M10 3L4.5 8.5L2 6"/>
                      </svg>
                    </div>
                    <p className="text-gray-700">Strategic call-to-action placement to maximize lead conversion</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="currentColor">
                        <path d="M10 3L4.5 8.5L2 6"/>
                      </svg>
                    </div>
                    <p className="text-gray-700">Real-time Dubai time display for global client coordination</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center text-gray-500 text-lg">
                Portfolio Showcase Preview
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Enhanced User Experience Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the thoughtful functionality and design elements that make Light Ahead Movement's website both powerful and intuitive.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Clock</h3>
                <p className="text-gray-600 text-sm">Real-time Dubai time display for seamless global coordination</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Lead Capture</h3>
                <p className="text-gray-600 text-sm">Strategic forms and CTAs designed for maximum conversion</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Portfolio Focus</h3>
                <p className="text-gray-600 text-sm">Showcase capabilities through compelling work samples</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Responsive Design</h3>
                <p className="text-gray-600 text-sm">Optimized for all devices and screen sizes</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience the LAM Foundation Difference?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Discover how our enhanced user experience features can transform your digital presence and drive meaningful results for your organization.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg inline-flex items-center space-x-2">
              <span>Start Your Project Today</span>
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">LAM Foundation</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Light Ahead Movement - Delivering exceptional user experiences through innovative web solutions and portfolio-driven lead generation.
              </p>
              <div className="flex items-center space-x-2 text-gray-300">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span>Dubai Time: {dubaiTime}</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-300 hover:text-white transition-colors duration-300">Home</a></li>
                <li><a href="/portfolio" className="text-gray-300 hover:text-white transition-colors duration-300">Portfolio</a></li>
                <li><a href="/experience" className="text-gray-300 hover:text-white transition-colors duration-300">Experience</a></li>
                <li><a href="/about" className="text-gray-300 hover:text-white transition-colors duration-300">About</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">LinkedIn</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Twitter</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Instagram</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 LAM Foundation - Light Ahead Movement. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}