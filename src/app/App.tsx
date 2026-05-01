import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Calendar, FileText, Download, Mail, ArrowRight, MessageCircle } from 'lucide-react';
import ecosLogo from '../imports/ECOSS_logo.png';
import tuAerial from '../imports/TU_aerial_shot.jpeg';
import ecosTeam from '../imports/ECOSS_Team_image.jpg';

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Set favicon
    const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = '/favicon.png';
    document.getElementsByTagName('head')[0].appendChild(link);

    // Set page title
    document.title = 'ECOSS - Economics Students\' Society | Tribhuvan University';
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-[#1a1a1a]/95 backdrop-blur-md border-b border-border">
        <nav className="max-w-[1400px] mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={ecosLogo} alt="ECOSS" className="h-12 w-12 object-contain" />
            <span className="text-2xl tracking-tight" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--maroon)' }}>
              ECOSS
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="uppercase text-sm tracking-wide hover:text-[#8A1538] transition-colors" style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}>
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="uppercase text-sm tracking-wide hover:text-[#8A1538] transition-colors" style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}>
              About
            </button>
            <button onClick={() => scrollToSection('resources')} className="uppercase text-sm tracking-wide hover:text-[#8A1538] transition-colors" style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}>
              Resources
            </button>
            <button onClick={() => scrollToSection('resources')} className="uppercase text-sm tracking-wide hover:text-[#8A1538] transition-colors" style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}>
              Events
            </button>
            <button onClick={() => scrollToSection('leadership')} className="uppercase text-sm tracking-wide hover:text-[#8A1538] transition-colors" style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}>
              Leadership
            </button>
            <button onClick={() => scrollToSection('contact')} className="uppercase text-sm tracking-wide hover:text-[#8A1538] transition-colors" style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}>
              Contact
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2.5 hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2.5 hover:bg-muted transition-colors"
              aria-label="Menu"
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-border bg-white dark:bg-[#1a1a1a]">
            <div className="px-6 py-6 space-y-4">
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="block w-full text-left uppercase text-sm tracking-wide hover:text-[#8A1538] transition-colors" style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}>
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left uppercase text-sm tracking-wide hover:text-[#8A1538] transition-colors" style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}>
                About
              </button>
              <button onClick={() => scrollToSection('resources')} className="block w-full text-left uppercase text-sm tracking-wide hover:text-[#8A1538] transition-colors" style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}>
                Resources
              </button>
              <button onClick={() => scrollToSection('resources')} className="block w-full text-left uppercase text-sm tracking-wide hover:text-[#8A1538] transition-colors" style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}>
                Events
              </button>
              <button onClick={() => scrollToSection('leadership')} className="block w-full text-left uppercase text-sm tracking-wide hover:text-[#8A1538] transition-colors" style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}>
                Leadership
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left uppercase text-sm tracking-wide hover:text-[#8A1538] transition-colors" style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}>
                Contact
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${tuAerial})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <h1
            className="text-white mb-6 leading-[1.1] tracking-tight"
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 900,
              fontSize: 'clamp(2.5rem, 8vw, 6rem)',
              textTransform: 'uppercase',
              letterSpacing: '-0.02em'
            }}
          >
            ECONOMICS STUDENTS<br />SOCIETY
          </h1>
          <p
            className="text-white/90 mb-4 max-w-2xl mx-auto"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              lineHeight: 1.6
            }}
          >
            Central Department of Economics (CEDECON)
          </p>
          <p
            className="text-[#C5A059] mb-10 max-w-2xl mx-auto"
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 600,
              fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)',
              letterSpacing: '0.05em'
            }}
          >
            Faculty of Humanities and Social Sciences, Tribhuvan University
          </p>
          <button
            onClick={() => scrollToSection('about')}
            className="inline-flex items-center gap-3 bg-[#8A1538] hover:bg-[#6d1028] text-white px-8 py-4 transition-all duration-300 uppercase tracking-wider"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.875rem' }}
          >
            Learn More
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-[#8A1538] py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2
            className="text-white text-center mb-16 leading-tight tracking-tight"
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 900,
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              textTransform: 'uppercase'
            }}
          >
            EMPOWERING ECONOMICS<br />STUDENTS SINCE 1985
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
            {[
              { number: '4', label: 'Academic Semesters', sublabel: 'Two-Year Program' },
              { number: '15', label: 'Executive Members', sublabel: 'Dedicated Leadership' },
              { number: '2', label: 'Active Semesters', sublabel: '1st & 3rd Currently Running' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="mb-4">
                  <div
                    className="text-[#C5A059] leading-none"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 900,
                      fontSize: 'clamp(3rem, 8vw, 5rem)'
                    }}
                  >
                    {stat.number}
                  </div>
                </div>
                <div className="h-px w-24 mx-auto bg-white/30 mb-4" />
                <h3
                  className="text-white mb-2 uppercase tracking-wide"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: 'clamp(1rem, 2vw, 1.25rem)'
                  }}
                >
                  {stat.label}
                </h3>
                <p className="text-white/70" style={{ fontFamily: 'var(--font-body)' }}>
                  {stat.sublabel}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-32 bg-white dark:bg-[#1a1a1a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="h-1 w-20 bg-[#8A1538] mb-8" />
              <h2
                className="mb-8 leading-tight tracking-tight"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  textTransform: 'uppercase'
                }}
              >
                About ECOSS
              </h2>
              <p
                className="text-lg mb-6 leading-relaxed"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Founded in 1985, the Economics Students' Society (ECOSS) is an autonomous, non-profit, non-political, and non-governmental social organization at the Central Department of Economics (CEDECON), Tribhuvan University. We are dedicated to improving educational standards and professional knowledge of economics students.
              </p>
              <p
                className="text-lg mb-8 leading-relaxed"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Our mission includes promoting research-based education, fostering coordination between professors and students, increasing interaction with national and international stakeholders, and conducting educational activities to support institutional excellence.
              </p>
              <button
                onClick={() => scrollToSection('unique')}
                className="inline-flex items-center gap-3 bg-[#8A1538] hover:bg-[#6d1028] text-white px-7 py-3.5 transition-all duration-300 uppercase tracking-wider"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.875rem' }}
              >
                Read More
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] bg-muted overflow-hidden">
                <img
                  src={ecosTeam}
                  alt="ECOSS Team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white text-center" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}>
                  ECOSS Executive Committee 2025/26
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes ECOSS Unique */}
      <section id="unique" className="py-20 lg:py-32 bg-[#F5F5F5] dark:bg-[#2a2a2a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2
            className="text-center mb-20 leading-tight tracking-tight"
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 900,
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              textTransform: 'uppercase'
            }}
          >
            What Makes ECOSS Unique?
          </h2>

          <div className="space-y-16">
            {[
              {
                number: '01',
                title: 'Academic Excellence',
                points: [
                  'Comprehensive study materials for all 4 semesters',
                  'Organized resources for 1st and 3rd semester students',
                  'Research-based education and knowledge sharing'
                ]
              },
              {
                number: '02',
                title: 'Professional Development',
                points: [
                  'Guest lectures from economists and industry experts',
                  'Coordination between professors and students',
                  'National and international stakeholder interactions'
                ]
              },
              {
                number: '03',
                title: 'Student Support',
                points: [
                  'Educational programs and institutional assistance',
                  'Democratic governance through General Assembly',
                  'Inclusive membership for all economics students'
                ]
              }
            ].map((section, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                  idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`lg:col-span-7 ${idx % 2 === 1 ? 'lg:col-start-6' : ''}`}>
                  <h3
                    className="mb-6 tracking-tight"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 800,
                      fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                      textTransform: 'uppercase'
                    }}
                  >
                    {section.title}
                  </h3>
                  <ul className="space-y-4">
                    {section.points.map((point, pidx) => (
                      <li key={pidx} className="flex items-start gap-4">
                        <div className="h-2 w-2 bg-[#8A1538] mt-2 flex-shrink-0" />
                        <span
                          className="text-lg leading-relaxed"
                          style={{ fontFamily: 'var(--font-body)' }}
                        >
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`lg:col-span-5 flex justify-center ${idx % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div
                    className="flex items-center justify-center"
                    style={{
                      width: 'clamp(120px, 20vw, 200px)',
                      height: 'clamp(120px, 20vw, 200px)',
                      border: '4px solid var(--maroon)'
                    }}
                  >
                    <span
                      className="text-[#8A1538]"
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 900,
                        fontSize: 'clamp(3rem, 8vw, 5rem)'
                      }}
                    >
                      {section.number}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources & Events Grid */}
      <section id="resources" className="py-20 lg:py-32 bg-white dark:bg-[#1a1a1a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Academic Resources */}
            <div className="bg-[#F5F5F5] dark:bg-[#2a2a2a] p-10 lg:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-12 w-1 bg-[#8A1538]" />
                <h2
                  className="tracking-tight"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 800,
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    textTransform: 'uppercase'
                  }}
                >
                  Academic Resources
                </h2>
              </div>

              <div className="space-y-4">
                {[
                  { name: '1st Semester - Section A', desc: 'Introduction to Economics & Statistics', link: 'https://drive.google.com/drive/folders/1FCQ5mj0k0T1iDP4WLaT3l7FwCCnHqT72' },
                  { name: '1st Semester - Section B', desc: 'Introduction to Economics & Statistics', link: 'https://drive.google.com/drive/folders/1TikFHWWUM8_8QjYA2St8rAo3MpXIfNRY' },
                  { name: '3rd Semester', desc: 'Intermediate Economic Theory', link: 'https://drive.google.com/drive/folders/1-729Gowt5KVHL1Wwcx17E-rPxDqZdfP7' }
                ].map((resource, idx) => (
                  <a
                    key={idx}
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-5 bg-white dark:bg-[#1a1a1a] hover:bg-[#8A1538] hover:text-white dark:hover:bg-[#8A1538] group transition-all duration-300"
                  >
                    <div>
                      <h3
                        className="mb-1"
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontWeight: 700,
                          fontSize: '1.125rem'
                        }}
                      >
                        {resource.name}
                      </h3>
                      <p className="text-sm opacity-70" style={{ fontFamily: 'var(--font-body)' }}>
                        {resource.desc}
                      </p>
                    </div>
                    <Download className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-[#8A1538] p-10 lg:p-12 text-white">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-12 w-1 bg-[#C5A059]" />
                <h2
                  className="tracking-tight"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 800,
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    textTransform: 'uppercase'
                  }}
                >
                  Upcoming Events
                </h2>
              </div>

              <div className="space-y-6">
                {[
                  { date: 'May TBA, 2026', title: 'Beginner Excel Workshop', speaker: 'Presenter Yet to Be Decided' },
                  { date: 'May TBA, 2026', title: 'Advance Excel Workshop', speaker: 'Presenter Yet to Be Decided' },
                  { date: 'May TBA, 2026', title: 'Pre-Budeget Discussion FY 2083/84', speaker: 'Multiple Budget Experts' }
                ].map((event, idx) => (
                  <div key={idx} className="border-l-4 border-[#C5A059] pl-6 py-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4 text-[#C5A059]" />
                      <span className="text-sm text-[#C5A059]" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}>
                        {event.date}
                      </span>
                    </div>
                    <h3
                      className="mb-1"
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 700,
                        fontSize: '1.125rem'
                      }}
                    >
                      {event.title}
                    </h3>
                    <p className="text-sm text-white/80" style={{ fontFamily: 'var(--font-body)' }}>
                      {event.speaker}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Decisions Section */}
          <div className="mt-8 bg-[#F5F5F5] dark:bg-[#2a2a2a] p-10 lg:p-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-1 bg-[#8A1538]" />
                  <h2
                    className="tracking-tight"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 800,
                      fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                      textTransform: 'uppercase'
                    }}
                  >
                    ECOSS Decisions
                  </h2>
                </div>
                <p className="text-lg" style={{ fontFamily: 'var(--font-body)' }}>
                  Access official meeting minutes and organizational decisions
                </p>
              </div>

              <div className="flex flex-col gap-3">
                {['Meeting Minutes #24', 'Meeting Minutes #23', 'Meeting Minutes #22'].map((doc, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-[#1a1a1a] hover:bg-[#8A1538] hover:text-white dark:hover:bg-[#8A1538] transition-all duration-300"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}
                  >
                    <FileText className="h-5 w-5" />
                    {doc}
                  </a>
                ))}

                <a
                  href="#"
                  className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#8A1538] text-[#8A1538] hover:bg-[#8A1538] hover:text-white transition-all duration-300 mt-2"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}
                >
                  View Past Decisions
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Committee */}
      <section id="leadership" className="py-20 lg:py-32 bg-[#F5F5F5] dark:bg-[#2a2a2a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2
            className="text-center mb-20 leading-tight tracking-tight"
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 900,
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              textTransform: 'uppercase'
            }}
          >
            Executive Committee
          </h2>

          {/* Leadership Row */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 mb-12">
            {[
              { name: 'Sarishma Chaulagain', role: 'President' },
              { name: 'Kapil Joshi', role: 'Vice President' },
              { name: 'Prakriti Chaulagain', role: 'Secretary' },
              { name: 'Rijohn Shrestha', role: 'Joint Secretary' },
              { name: 'Durga Ghimire', role: 'Treasurer' }
            ].map((member, idx) => (
              <div key={idx} className="text-center">
                <div className="mb-6 mx-auto bg-gradient-to-br from-[#8A1538] to-[#C5A059] flex items-center justify-center text-white aspect-square" style={{ width: 'clamp(120px, 100%, 180px)' }}>
                  <span className="text-6xl">👤</span>
                </div>
                <h3
                  className="mb-2 tracking-tight"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: 'clamp(1rem, 2vw, 1.25rem)'
                  }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-[#8A1538] uppercase tracking-wide"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 600,
                    fontSize: '0.875rem'
                  }}
                >
                  {member.role}
                </p>
              </div>
            ))}
          </div>

          {/* Executive Members */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
            {[
              'Beeja Bohara',
              'Dinesh Pant',
              'Piyush Bohara',
              'Radha Kharel',
              'Sandeep Bhandari',
              'Tek Prasad Regmi'
            ].map((name, idx) => (
              <div key={idx} className="text-center">
                <div className="mb-4 mx-auto bg-gradient-to-br from-[#8A1538] to-[#C5A059] flex items-center justify-center text-white aspect-square" style={{ width: 'clamp(100px, 100%, 140px)' }}>
                  <span className="text-4xl">👤</span>
                </div>
                <h4
                  className="mb-1 tracking-tight"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 600,
                    fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
                  }}
                >
                  {name}
                </h4>
                <p
                  className="text-muted-foreground uppercase tracking-wide"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 500,
                    fontSize: '0.75rem'
                  }}
                >
                  Executive Member
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#1a1a1a] text-white border-t-4 border-[#8A1538]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img src={ecosLogo} alt="ECOSS" className="h-12 w-12 object-contain" />
                <span
                  className="text-2xl tracking-tight"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    color: '#C5A059'
                  }}
                >
                  ECOSS
                </span>
              </div>
              <p className="text-white/70 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                Economics Students' Society<br />
                Central Department of Economics (CEDECON)<br />
                Faculty of Humanities and Social Sciences<br />
                Tribhuvan University, Kirtipur-10, Kathmandu
              </p>
            </div>

            <div>
              <h3
                className="mb-6 uppercase tracking-wide"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: '0.875rem'
                }}
              >
                Quick Links
              </h3>
              <ul className="space-y-3">
                {[
                  { label: 'About Us', section: 'about' },
                  { label: 'Resources', section: 'resources' },
                  { label: 'Events', section: 'resources' },
                  { label: 'Leadership', section: 'leadership' },
                  { label: 'Contact', section: 'contact' }
                ].map((link, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => scrollToSection(link.section)}
                      className="text-white/70 hover:text-[#C5A059] transition-colors"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3
                className="mb-6 uppercase tracking-wide"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: '0.875rem'
                }}
              >
                Resources
              </h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection('resources')}
                    className="text-white/70 hover:text-[#C5A059] transition-colors"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Study Materials
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('resources')}
                    className="text-white/70 hover:text-[#C5A059] transition-colors"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Past Papers
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('resources')}
                    className="text-white/70 hover:text-[#C5A059] transition-colors"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Meeting Minutes
                  </button>
                </li>
                <li>
                  <a
                    href="https://cdec.tu.edu.np/publications"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-[#C5A059] transition-colors"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Research Papers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3
                className="mb-6 uppercase tracking-wide"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: '0.875rem'
                }}
              >
                Connect With Us
              </h3>

              <div className="space-y-4 mb-6">
                <a
                  href="https://www.facebook.com/ecoss.cedecon.tu.edu.np"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/80 hover:text-[#C5A059] transition-colors"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  <div className="h-10 w-10 flex items-center justify-center bg-white/10 hover:bg-[#8A1538] transition-all duration-300">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <span>Facebook</span>
                </a>

                <a
                  href="https://chat.whatsapp.com/IIxLkvRjgZy77HrtHRUHPj?mode=gi_t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/80 hover:text-[#C5A059] transition-colors"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  <div className="h-10 w-10 flex items-center justify-center bg-white/10 hover:bg-[#8A1538] transition-all duration-300">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <span>WhatsApp Group</span>
                </a>

                <a
                  href="mailto:ecossofficial1@gmail.com"
                  className="flex items-center gap-3 text-white/80 hover:text-[#C5A059] transition-colors"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  <div className="h-10 w-10 flex items-center justify-center bg-white/10 hover:bg-[#8A1538] transition-all duration-300">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span>Email Us</span>
                </a>
              </div>

              <p className="text-[#C5A059] text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                ecossofficial1@gmail.com
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              © 2026 ECOSS - Economics Students' Society, Tribhuvan University. All rights reserved.
            </p>
            <p className="text-white/60 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              Website by <span className="text-[#C5A059]">Piyush Bohara</span>, Executive Member
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
