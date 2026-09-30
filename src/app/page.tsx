"use client";

import Image from "next/image";
import { Phone, Mail, Instagram, MapPin, Trophy, Users, Clock, Star } from "lucide-react";
import { useState } from "react";
import './landing.css';

type Language = 'pt' | 'en' | 'es';

interface Translations {
  [key: string]: {
    pt: string;
    en: string;
    es: string;
  };
}

const translations: Translations = {
  turnEffort: {
    pt: 'TRANSFORME ESFORÇO',
    en: 'TURN EFFORT',
    es: 'CONVIERTE ESFUERZO'
  },
  intoResults: {
    pt: 'EM RESULTADOS.',
    en: 'INTO RESULTS.',
    es: 'EN RESULTADOS.'
  },
  description: {
    pt: 'Sou Gustavo Basilio, personal trainer apaixonado por capacitar pessoas a alcançarem seus objetivos fitness através de coaching personalizado e suporte.',
    en: 'I am Gustavo Basilio, a personal trainer passionate about empowering people to achieve their fitness goals through personalized coaching and support.',
    es: 'Soy Gustavo Basilio, entrenador personal apasionado por capacitar a las personas para alcanzar sus objetivos de fitness a través de coaching personalizado y apoyo.'
  },
  getStarted: {
    pt: 'Começar Agora',
    en: 'Get Started',
    es: 'Empezar Ahora'
  },
  about: {
    pt: 'Sobre',
    en: 'About',
    es: 'Acerca'
  },
  services: {
    pt: 'Serviços',
    en: 'Services',
    es: 'Servicios'
  },
  contact: {
    pt: 'Contato',
    en: 'Contact',
    es: 'Contacto'
  },
  transformedStudents: {
    pt: 'Alunos Transformados',
    en: 'Transformed Students',
    es: 'Estudiantes Transformados'
  },
  yearsExperience: {
    pt: 'Anos de Experiência',
    en: 'Years of Experience',
    es: 'Años de Experiencia'
  },
  successRate: {
    pt: 'Taxa de Sucesso',
    en: 'Success Rate',
    es: 'Tasa de Éxito'
  },
  onlineSupport: {
    pt: 'Suporte Online',
    en: 'Online Support',
    es: 'Soporte Online'
  },
  aboutMe: {
    pt: 'Sobre Mim',
    en: 'About Me',
    es: 'Acerca de Mí'
  },
  aboutDescription1: {
    pt: 'Com mais de 15 anos de experiência no mundo fitness, dedico minha carreira a transformar vidas através do exercício físico e nutrição adequada.',
    en: 'With over 15 years of experience in the fitness world, I dedicate my career to transforming lives through physical exercise and proper nutrition.',
    es: 'Con más de 15 años de experiencia en el mundo del fitness, dedico mi carrera a transformar vidas a través del ejercicio físico y la nutrición adecuada.'
  },
  aboutDescription2: {
    pt: 'Minha abordagem personalizada combina ciência do exercício, psicologia esportiva e suporte nutricional para garantir que cada cliente alcance seus objetivos de forma sustentável e duradoura.',
    en: 'My personalized approach combines exercise science, sports psychology and nutritional support to ensure each client achieves their goals in a sustainable and lasting way.',
    es: 'Mi enfoque personalizado combina ciencia del ejercicio, psicología deportiva y apoyo nutricional para garantizar que cada cliente alcance sus objetivos de manera sostenible y duradera.'
  },
  certified: {
    pt: 'Certificado',
    en: 'Certified',
    es: 'Certificado'
  },
  specialist: {
    pt: 'Especialista',
    en: 'Specialist',
    es: 'Especialista'
  },
  hypertrophy: {
    pt: 'Hipertrofia',
    en: 'Hypertrophy',
    es: 'Hipertrofia'
  },
  education: {
    pt: 'Formação',
    en: 'Education',
    es: 'Formación'
  },
  physicalEd: {
    pt: 'Ed. Física',
    en: 'Phys. Ed.',
    es: 'Ed. Física'
  },
  experience: {
    pt: 'Experiência',
    en: 'Experience',
    es: 'Experiencia'
  },
  years15: {
    pt: '15+ Anos',
    en: '15+ Years',
    es: '15+ Años'
  },
  myServices: {
    pt: 'Meus Serviços',
    en: 'My Services',
    es: 'Mis Servicios'
  },
  servicesDescription: {
    pt: 'Ofereço soluções completas e personalizadas para transformar seu corpo e sua vida',
    en: 'I offer complete and personalized solutions to transform your body and your life',
    es: 'Ofrezco soluciones completas y personalizadas para transformar tu cuerpo y tu vida'
  },
  personalTraining: {
    pt: 'Personal Training',
    en: 'Personal Training',
    es: 'Entrenamiento Personal'
  },
  personalTrainingDesc: {
    pt: 'Treinos personalizados e acompanhamento individual para máximos resultados',
    en: 'Personalized training and individual monitoring for maximum results',
    es: 'Entrenamientos personalizados y seguimiento individual para máximos resultados'
  },
  onlineConsulting: {
    pt: 'Consultoria Online',
    en: 'Online Consulting',
    es: 'Consultoría Online'
  },
  onlineConsultingDesc: {
    pt: 'Acompanhamento remoto com toda a qualidade do presencial',
    en: 'Remote monitoring with all the quality of in-person training',
    es: 'Seguimiento remoto con toda la calidad del entrenamiento presencial'
  },
  physicalPreparation: {
    pt: 'Preparação Física',
    en: 'Physical Preparation',
    es: 'Preparación Física'
  },
  physicalPreparationDesc: {
    pt: 'Treinamento específico para atletas e competições',
    en: 'Specific training for athletes and competitions',
    es: 'Entrenamiento específico para atletas y competiciones'
  },
  testimonials: {
    pt: 'Depoimentos',
    en: 'Testimonials',
    es: 'Testimonios'
  },
  testimonialsDesc: {
    pt: 'Veja o que meus alunos falam sobre os resultados',
    en: 'See what my students say about the results',
    es: 'Ve lo que dicen mis estudiantes sobre los resultados'
  },
  testimonial1: {
    pt: '"Gustavo transformou completamente minha relação com o exercício. Perdi 15kg em 6 meses e ganhei muito mais disposição!"',
    en: '"Gustavo completely transformed my relationship with exercise. I lost 15kg in 6 months and gained much more energy!"',
    es: '"Gustavo transformó completamente mi relación con el ejercicio. ¡Perdí 15kg en 6 meses y gané mucha más energía!"'
  },
  testimonial2: {
    pt: '"Profissional excepcional! Me ajudou a ganhar massa muscular de forma saudável e sustentável."',
    en: '"Exceptional professional! Helped me gain muscle mass in a healthy and sustainable way."',
    es: '"¡Profesional excepcional! Me ayudó a ganar masa muscular de manera saludable y sostenible."'
  },
  testimonial3: {
    pt: '"Metodologia incrível! Consegui meus objetivos muito mais rápido do que imaginava."',
    en: '"Amazing methodology! I achieved my goals much faster than I imagined."',
    es: '"¡Metodología increíble! Logré mis objetivos mucho más rápido de lo que imaginaba."'
  },
  getInTouch: {
    pt: 'Entre em Contato',
    en: 'Get In Touch',
    es: 'Ponte en Contacto'
  },
  getInTouchDesc: {
    pt: 'Pronto para transformar sua vida? Vamos conversar!',
    en: 'Ready to transform your life? Let\'s talk!',
    es: '¿Listo para transformar tu vida? ¡Hablemos!'
  },
  form: {
    pt: 'Formulário',
    en: 'Form',
    es: 'Formulario'
  },
  footerText: {
    pt: '© 2025 Gustavo Basilio - Personal Trainer. Todos os direitos reservados.',
    en: '© 2025 Gustavo Basilio - Personal Trainer. All rights reserved.',
    es: '© 2025 Gustavo Basilio - Entrenador Personal. Todos los derechos reservados.'
  },
  footerSubtext: {
    pt: 'Transformando vidas através do fitness',
    en: 'Transforming lives through fitness',
    es: 'Transformando vidas a través del fitness'
  },
  // Service items
  completePhysicalAssessment: {
    pt: '• Avaliação física completa',
    en: '• Complete physical assessment',
    es: '• Evaluación física completa'
  },
  personalizedTrainingProgram: {
    pt: '• Programa de treino personalizado',
    en: '• Personalized training program',
    es: '• Programa de entrenamiento personalizado'
  },
  weeklyFollowUp: {
    pt: '• Acompanhamento semanal',
    en: '• Weekly follow-up',
    es: '• Seguimiento semanal'
  },
  basicNutritionalSupport: {
    pt: '• Suporte nutricional básico',
    en: '• Basic nutritional support',
    es: '• Apoyo nutricional básico'
  },
  trainingViaApp: {
    pt: '• Treinos via app',
    en: '• Training via app',
    es: '• Entrenamientos vía app'
  },
  weeklyVideoconferences: {
    pt: '• Videoconferências semanais',
    en: '• Weekly videoconferences',
    es: '• Videoconferencias semanales'
  },
  whatsappSupport: {
    pt: '• Suporte via WhatsApp',
    en: '• WhatsApp support',
    es: '• Soporte vía WhatsApp'
  },
  nutritionalPlanIncluded: {
    pt: '• Plano nutricional incluso',
    en: '• Nutritional plan included',
    es: '• Plan nutricional incluido'
  },
  sportsPeriodization: {
    pt: '• Periodização esportiva',
    en: '• Sports periodization',
    es: '• Periodización deportiva'
  },
  biomechanicalAnalysis: {
    pt: '• Análise biomecânica',
    en: '• Biomechanical analysis',
    es: '• Análisis biomecánico'
  },
  injuryPrevention: {
    pt: '• Prevenção de lesões',
    en: '• Injury prevention',
    es: '• Prevención de lesiones'
  },
  medicalFollowUp: {
    pt: '• Acompanhamento médico',
    en: '• Medical follow-up',
    es: '• Seguimiento médico'
  }
};

export default function Home() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[key]?.[currentLanguage] || key;
  };

  const changeLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Offset para compensar o header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };
  return (
    <div className="landing-container">
      {/* Header/Hero Section */}
      <header className="hero-section">
        {/* Navigation Menu */}
        <nav className="absolute top-8 left-1/2 transform -translate-x-1/2 z-50 main-nav">
          <ul className="flex space-x-6 md:space-x-8">
            <li>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="font-outfit text-white text-sm font-medium hover:text-red-500 transition-colors uppercase tracking-wide cursor-pointer bg-transparent border-none nav-button"
              >
                {t('about')}
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="font-outfit text-white text-sm font-medium hover:text-red-500 transition-colors uppercase tracking-wide cursor-pointer bg-transparent border-none nav-button"
              >
                {t('services')}
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contato')}
                className="font-outfit text-white text-sm font-medium hover:text-red-500 transition-colors uppercase tracking-wide cursor-pointer bg-transparent border-none nav-button"
              >
                {t('contact')}
              </button>
            </li>
          </ul>
        </nav>

        <div className="container mx-auto px-6 lg:px-12 h-screen flex items-center">
          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center w-full max-w-7xl mx-auto">
            {/* Left Content */}
            <div className="text-white space-y-8 lg:pr-8">
              <div className="space-y-4">
                <h1 className="font-oxanium font-bold leading-tight hero-title">
                  <span className="block text-white">{t('turnEffort')}</span>
                  <span className="block text-white">{t('intoResults')}</span>
                </h1>
              </div>
              
              <div className="space-y-6">
                <p className="font-outfit text-gray-300 max-w-lg leading-relaxed hero-description">
                  {t('description')}
                </p>
              </div>

              <div className="pt-4">
                <button className="font-outfit primary-button">
                  {t('getStarted')}
                </button>
              </div>

              {/* Flags */}
              <div className="flex gap-6 pt-8">
                <button 
                  onClick={() => changeLanguage('en')}
                  className={`flag-button ${currentLanguage === 'en' ? 'active' : ''}`}
                >
                  <Image
                    src="/usa.png"
                    alt="USA Flag"
                    width={81}
                    height={54}
                    className="flag-image"
                  />
                </button>
                <button 
                  onClick={() => changeLanguage('pt')}
                  className={`flag-button ${currentLanguage === 'pt' ? 'active' : ''}`}
                >
                  <Image
                    src="/brasil.jpg"
                    alt="Brazil Flag"
                    width={81}
                    height={54}
                    className="flag-image"
                  />
                </button>
                <button 
                  onClick={() => changeLanguage('es')}
                  className={`flag-button ${currentLanguage === 'es' ? 'active' : ''}`}
                >
                  <Image
                    src="/espanha.png"
                    alt="Spain Flag"
                    width={81}
                    height={54}
                    className="flag-image"
                  />
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative lg:h-full flex items-center justify-center">
              <div className="relative">
                <Image
                  src="/cara.png"
                  alt="Gustavo Basilio - Personal Trainer"
                  width={450}
                  height={600}
                  className="object-cover object-center hero-image"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Mobile Layout - Vertical Stack */}
          <div className="lg:hidden flex flex-col items-center text-center space-y-6 w-full px-4 hero-mobile">
            {/* 1. Título */}
            <h1 className="font-oxanium font-bold leading-tight hero-title text-white">
              <span className="block">{t('turnEffort')}</span>
              <span className="block">{t('intoResults')}</span>
            </h1>
            
            {/* 2. Foto do cara */}
            <div className="flex justify-center">
              <Image
                src="/cara.png"
                alt="Gustavo Basilio - Personal Trainer"
                width={450}
                height={600}
                className="object-cover object-center hero-image"
                priority
              />
            </div>

            {/* 3. About (descrição) */}
            <p className="font-outfit text-gray-300 leading-relaxed hero-description">
              {t('description')}
            </p>

            {/* 4. Botão */}
            <button className="font-outfit primary-button">
              {t('getStarted')}
            </button>

            {/* 5. Flags */}
            <div className="flex gap-6 justify-center">
              <button 
                onClick={() => changeLanguage('en')}
                className={`flag-button ${currentLanguage === 'en' ? 'active' : ''}`}
              >
                <Image
                  src="/usa.png"
                  alt="USA Flag"
                  width={81}
                  height={54}
                  className="flag-image"
                />
              </button>
              <button 
                onClick={() => changeLanguage('pt')}
                className={`flag-button ${currentLanguage === 'pt' ? 'active' : ''}`}
              >
                <Image
                  src="/brasil.jpg"
                  alt="Brazil Flag"
                  width={81}
                  height={54}
                  className="flag-image"
                />
              </button>
              <button 
                onClick={() => changeLanguage('es')}
                className={`flag-button ${currentLanguage === 'es' ? 'active' : ''}`}
              >
                <Image
                  src="/espanha.png"
                  alt="Spain Flag"
                  width={81}
                  height={54}
                  className="flag-image"
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="stat-number">200+</div>
              <div className="font-outfit stat-label">{t('transformedStudents')}</div>
            </div>
            <div className="p-6">
              <div className="stat-number">15+</div>
              <div className="font-outfit stat-label">{t('yearsExperience')}</div>
            </div>
            <div className="p-6">
              <div className="stat-number">98%</div>
              <div className="font-outfit stat-label">{t('successRate')}</div>
            </div>
            <div className="p-6">
              <div className="stat-number">24/7</div>
              <div className="font-outfit stat-label">{t('onlineSupport')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="about-section">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="space-y-12">
            <div>
              <h2 className="font-oxanium section-title">
                <span className="primary-color">{t('aboutMe')}</span>
              </h2>
              <div className="max-w-3xl mx-auto">
                <p className="font-outfit text-xl text-gray-300 leading-relaxed section-description">
                  {t('aboutDescription1')}
                </p>
                <p className="font-outfit text-lg text-gray-400 leading-relaxed section-description mt-4">
                  {t('aboutDescription2')}
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="about-card">
                <Trophy className="mx-auto mb-4 primary-color" size={40} />
                <div className="font-outfit about-card-title">{t('certified')}</div>
                <div className="font-outfit about-card-subtitle">CREF Ativo</div>
              </div>
              <div className="about-card">
                <Trophy className="mx-auto mb-4 primary-color" size={40} />
                <div className="font-outfit about-card-title">{t('specialist')}</div>
                <div className="font-outfit about-card-subtitle">{t('hypertrophy')}</div>
              </div>
              <div className="about-card">
                <Trophy className="mx-auto mb-4 primary-color" size={40} />
                <div className="font-outfit about-card-title">{t('education')}</div>
                <div className="font-outfit about-card-subtitle">{t('physicalEd')}</div>
              </div>
              <div className="about-card">
                <Trophy className="mx-auto mb-4 primary-color" size={40} />
                <div className="font-outfit about-card-title">{t('experience')}</div>
                <div className="font-outfit about-card-subtitle">{t('years15')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="services-section">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-oxanium section-title">
              <span className="primary-color">{t('myServices')}</span>
            </h2>
            <p className="font-outfit text-xl text-gray-300 max-w-3xl mx-auto section-description">
              {t('servicesDescription')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="service-card">
              <div className="service-icon">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="font-outfit service-title text-white">{t('personalTraining')}</h3>
              <p className="font-outfit text-gray-400 service-description">
                {t('personalTrainingDesc')}
              </p>
              <ul className="text-left space-y-2 font-outfit text-gray-300 service-list">
                <li>{t('completePhysicalAssessment')}</li>
                <li>{t('personalizedTrainingProgram')}</li>
                <li>{t('weeklyFollowUp')}</li>
                <li>{t('basicNutritionalSupport')}</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <Clock className="text-white" size={32} />
              </div>
              <h3 className="font-outfit service-title text-white">{t('onlineConsulting')}</h3>
              <p className="font-outfit text-gray-400 service-description">
                {t('onlineConsultingDesc')}
              </p>
              <ul className="text-left space-y-2 font-outfit text-gray-300 service-list">
                <li>{t('trainingViaApp')}</li>
                <li>{t('weeklyVideoconferences')}</li>
                <li>{t('whatsappSupport')}</li>
                <li>{t('nutritionalPlanIncluded')}</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <Trophy className="text-white" size={32} />
              </div>
              <h3 className="font-outfit service-title text-white">{t('physicalPreparation')}</h3>
              <p className="font-outfit text-gray-400 service-description">
                {t('physicalPreparationDesc')}
              </p>
              <ul className="text-left space-y-2 font-outfit text-gray-300 service-list">
                <li>{t('sportsPeriodization')}</li>
                <li>{t('biomechanicalAnalysis')}</li>
                <li>{t('injuryPrevention')}</li>
                <li>{t('medicalFollowUp')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-oxanium section-title">
              <span className="primary-color">{t('testimonials')}</span>
            </h2>
            <p className="font-outfit text-xl text-gray-300 section-description">
              {t('testimonialsDesc')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="testimonial-card">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="font-outfit text-gray-300 mb-6 italic testimonial-text">
                {t('testimonial1')}
              </p>
              <div className="flex items-center">
                <div className="testimonial-avatar">
                  <span className="text-white font-bold">M</span>
                </div>
                <div>
                  <div className="font-outfit font-semibold text-white">Maria Silva</div>
                  <div className="font-outfit text-gray-400 text-sm">Empresária</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="font-outfit text-gray-300 mb-6 italic testimonial-text">
                {t('testimonial2')}
              </p>
              <div className="flex items-center">
                <div className="testimonial-avatar">
                  <span className="text-white font-bold">J</span>
                </div>
                <div>
                  <div className="font-outfit font-semibold text-white">João Santos</div>
                  <div className="font-outfit text-gray-400 text-sm">Engenheiro</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="font-outfit text-gray-300 mb-6 italic testimonial-text">
                {t('testimonial3')}
              </p>
              <div className="flex items-center">
                <div className="testimonial-avatar">
                  <span className="text-white font-bold">A</span>
                </div>
                <div>
                  <div className="font-outfit font-semibold text-white">Ana Costa</div>
                  <div className="font-outfit text-gray-400 text-sm">Médica</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="contact-section">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-oxanium section-title">
              <span className="primary-color">{t('getInTouch')}</span>
            </h2>
            <p className="font-outfit text-xl text-gray-300 section-description">
              {t('getInTouchDesc')}
            </p>
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => window.open('https://forms.gle/91xKYLtE1QjwM2dh7', '_blank')}
              className="font-outfit gradient-button"
            >
              {t('form')}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-section">
        <div className="max-w-6xl mx-auto px-4">
          <p className="font-outfit footer-text">{t('footerText')}</p>
          <p className="font-outfit mt-2 text-sm">{t('footerSubtext')}</p>
        </div>
      </footer>
    </div>
  );
}
