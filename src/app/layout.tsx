"use client";
import "./globals.css";
import React, { useState, Component } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Error Boundary — catches render errors and shows a friendly inline message.
class ErrorBoundary extends Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 p-8">
          <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="text-5xl mb-4">⚠️</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong</h2>
            <p className="text-sm text-gray-500 mb-6">
              {this.state.error?.message || "An unexpected error occurred."}
            </p>
            <button
              onClick={() => this.setState({ hasError: false, error: null })}
              className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const navLinks = [
  { href: "/", label: "Dashboard" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/experience", label: "Experience" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        {/* Top Navigation Bar */}
        <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="text-xl font-bold text-gray-900">LAM foundation website</Link>
              <nav className="hidden md:flex items-center gap-8">
                {navLinks.filter(l => l.href !== "/").map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-medium transition-colors ${
                      pathname === link.href ? "text-blue-600" : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link href="/contact" className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                  Get in Touch
                </Link>
              </nav>
              <button
                className="md:hidden p-2 text-gray-700"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? "✕" : "☰"}
              </button>
            </div>
          </div>
          {/* Mobile menu */}
          {menuOpen && (
            <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4">
              {navLinks.filter(l => l.href !== "/").map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-gray-700 hover:text-blue-600 font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </header>

        {/* Page content */}
        <main className="pt-16">
          <ErrorBoundary>
            {children}
          </ErrorBoundary>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-xl font-bold mb-3">LAM foundation website</h3>
                <p className="text-gray-400 text-sm max-w-md">Built with care to make a difference. Powered by modern technology.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Pages</h4>
                <div className="space-y-2">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="block text-gray-400 hover:text-white text-sm transition-colors">{link.label}</Link>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Contact</h4>
                <p className="text-gray-400 text-sm">info@example.com</p>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} LAM foundation website. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
