"use client";

import Image from "next/image";
import { Menu, X, Phone, Mail, Instagram, MapPin, Trophy, Users, Clock, Star } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#1F1F1F' }}>
      {/* Header/Hero Section */}
      <header className="relative min-h-screen overflow-hidden" style={{ backgroundColor: '#1F1F1F' }}>
        {/* Hamburger Menu */}
        <div className="absolute top-6 right-6 z-50">
          <button onClick={toggleMenu} className="p-2">
            {isMenuOpen ? (
              <X size={32} style={{ color: '#FF2332' }} />
            ) : (
              <Menu size={32} style={{ color: '#FF2332' }} />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-95 z-40 flex items-center justify-center">
            <nav className="text-center">
              <ul className="space-y-8">
                <li>
                  <a 
                    href="#sobre" 
                    className="font-outfit text-white text-2xl hover:text-red-500 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sobre
                  </a>
                </li>
                <li>
                  <a 
                    href="#servicos" 
                    className="font-outfit text-white text-2xl hover:text-red-500 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Serviços
                  </a>
                </li>
                <li>
                  <a 
                    href="#contato" 
                    className="font-outfit text-white text-2xl hover:text-red-500 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}

        <div className="container mx-auto px-6 lg:px-12 h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full max-w-7xl mx-auto">
            {/* Left Content */}
            <div className="text-white space-y-8 lg:pr-8 px-4 lg:px-0">
              <div className="space-y-4">
                <h1 className="font-oxanium font-bold leading-tight" style={{ fontSize: '80px' }}>
                  <span className="block text-white">TURN EFFORT</span>
                  <span className="block text-white">INTO RESULTS.</span>
                </h1>
              </div>
              
              <div className="space-y-6">
                <p className="font-outfit text-gray-300 max-w-lg leading-relaxed" style={{ fontSize: '24px' }}>
                  Sou Lucas Basilio, personal trainer apaixonado por 
                  capacitar pessoas a alcançarem seus objetivos fitness através de coaching 
                  personalizado e suporte.
                </p>
              </div>

              <div className="pt-4">
                <button 
                  className="font-outfit text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                  style={{ backgroundColor: '#FF2332', fontSize: '24px' }}
                >
                  Get Started
                </button>
              </div>

              {/* Flags */}
              <div className="flex gap-6 pt-8">
                <Image
                  src="/usa.png"
                  alt="USA Flag"
                  width={81}
                  height={54}
                  className="object-cover"
                />
                <Image
                  src="/brasil.jpg"
                  alt="Brazil Flag"
                  width={81}
                  height={54}
                  className="object-cover"
                />
                <Image
                  src="/espanha.png"
                  alt="Spain Flag"
                  width={81}
                  height={54}
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Image */}
            <div className="relative lg:h-full flex items-center justify-center px-4 lg:px-0">
              <div className="relative">
                <Image
                  src="/lucas.jpg"
                  alt="Lucas Basilio - Personal Trainer"
                  width={544}
                  height={572}
                  className="object-cover object-center"
                  style={{ borderRadius: '30px' }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-16" style={{ backgroundColor: '#2A2A2A' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold mb-2" style={{ color: '#FF2332' }}>200+</div>
              <div className="font-outfit text-gray-300" style={{ fontSize: '24px' }}>Alunos Transformados</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold mb-2" style={{ color: '#FF2332' }}>15+</div>
              <div className="font-outfit text-gray-300" style={{ fontSize: '24px' }}>Anos de Experiência</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold mb-2" style={{ color: '#FF2332' }}>98%</div>
              <div className="font-outfit text-gray-300" style={{ fontSize: '24px' }}>Taxa de Sucesso</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold mb-2" style={{ color: '#FF2332' }}>24/7</div>
              <div className="font-outfit text-gray-300" style={{ fontSize: '24px' }}>Suporte Online</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20" style={{ backgroundColor: '#1F1F1F' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="font-oxanium text-5xl font-bold mb-6">
                  <span style={{ color: '#FF2332' }}>Sobre Mim</span>
                </h2>
                <p className="font-outfit text-xl text-gray-300 leading-relaxed mb-6" style={{ fontSize: '24px' }}>
                  Com mais de 15 anos de experiência no mundo fitness, dedico minha carreira a transformar vidas através do exercício físico e nutrição adequada.
                </p>
                <p className="font-outfit text-lg text-gray-400 leading-relaxed" style={{ fontSize: '24px' }}>
                  Minha abordagem personalizada combina ciência do exercício, psicologia esportiva e suporte nutricional para garantir que cada cliente alcance seus objetivos de forma sustentável e duradoura.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gray-900 rounded-xl">
                  <Trophy className="mx-auto mb-4" style={{ color: '#FF2332' }} size={40} />
                  <div className="font-outfit text-2xl font-bold text-white mb-2">Certificado</div>
                  <div className="font-outfit text-gray-400" style={{ fontSize: '24px' }}>CREF Ativo</div>
                </div>
                <div className="text-center p-6 bg-gray-900 rounded-xl">
                  <Trophy className="mx-auto mb-4" style={{ color: '#FF2332' }} size={40} />
                  <div className="font-outfit text-2xl font-bold text-white mb-2">Especialista</div>
                  <div className="font-outfit text-gray-400" style={{ fontSize: '24px' }}>Hipertrofia</div>
                </div>
                <div className="text-center p-6 bg-gray-900 rounded-xl">
                  <Trophy className="mx-auto mb-4" style={{ color: '#FF2332' }} size={40} />
                  <div className="font-outfit text-2xl font-bold text-white mb-2">Formação</div>
                  <div className="font-outfit text-gray-400" style={{ fontSize: '24px' }}>Ed. Física</div>
                </div>
                <div className="text-center p-6 bg-gray-900 rounded-xl">
                  <Trophy className="mx-auto mb-4" style={{ color: '#FF2332' }} size={40} />
                  <div className="font-outfit text-2xl font-bold text-white mb-2">Experiência</div>
                  <div className="font-outfit text-gray-400" style={{ fontSize: '24px' }}>15+ Anos</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/lucas2.jpg"
                  alt="Lucas Basilio treinando"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20" style={{ backgroundColor: '#2A2A2A' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-oxanium text-5xl font-bold mb-6">
              <span style={{ color: '#FF2332' }}>Meus Serviços</span>
            </h2>
            <p className="font-outfit text-xl text-gray-300 max-w-3xl mx-auto" style={{ fontSize: '24px' }}>
              Ofereço soluções completas e personalizadas para transformar seu corpo e sua vida
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-2xl text-center group hover:bg-gray-700 transition-all duration-300">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'linear-gradient(135deg, #FF2332, #FF6B47)' }}>
                <Users className="text-white" size={32} />
              </div>
              <h3 className="font-outfit text-2xl font-bold mb-4 text-white">Personal Training</h3>
              <p className="font-outfit text-gray-400 mb-6" style={{ fontSize: '24px' }}>
                Treinos personalizados e acompanhamento individual para máximos resultados
              </p>
              <ul className="text-left space-y-2 font-outfit text-gray-300" style={{ fontSize: '24px' }}>
                <li>• Avaliação física completa</li>
                <li>• Programa de treino personalizado</li>
                <li>• Acompanhamento semanal</li>
                <li>• Suporte nutricional básico</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl text-center group hover:bg-gray-700 transition-all duration-300">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'linear-gradient(135deg, #FF2332, #FF6B47)' }}>
                <Clock className="text-white" size={32} />
              </div>
              <h3 className="font-outfit text-2xl font-bold mb-4 text-white">Consultoria Online</h3>
              <p className="font-outfit text-gray-400 mb-6" style={{ fontSize: '24px' }}>
                Acompanhamento remoto com toda a qualidade do presencial
              </p>
              <ul className="text-left space-y-2 font-outfit text-gray-300" style={{ fontSize: '24px' }}>
                <li>• Treinos via app</li>
                <li>• Videoconferências semanais</li>
                <li>• Suporte via WhatsApp</li>
                <li>• Plano nutricional incluso</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl text-center group hover:bg-gray-700 transition-all duration-300">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'linear-gradient(135deg, #FF2332, #FF6B47)' }}>
                <Trophy className="text-white" size={32} />
              </div>
              <h3 className="font-outfit text-2xl font-bold mb-4 text-white">Preparação Física</h3>
              <p className="font-outfit text-gray-400 mb-6" style={{ fontSize: '24px' }}>
                Treinamento específico para atletas e competições
              </p>
              <ul className="text-left space-y-2 font-outfit text-gray-300" style={{ fontSize: '24px' }}>
                <li>• Periodização esportiva</li>
                <li>• Análise biomecânica</li>
                <li>• Prevenção de lesões</li>
                <li>• Acompanhamento médico</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20" style={{ backgroundColor: '#1F1F1F' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-oxanium text-5xl font-bold mb-6">
              <span style={{ color: '#FF2332' }}>Depoimentos</span>
            </h2>
            <p className="font-outfit text-xl text-gray-300" style={{ fontSize: '24px' }}>
              Veja o que meus alunos falam sobre os resultados
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="font-outfit text-gray-300 mb-6 italic" style={{ fontSize: '24px' }}>
                "Lucas transformou completamente minha relação com o exercício. Perdi 15kg em 6 meses e ganhei muito mais disposição!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ background: 'linear-gradient(135deg, #FF2332, #FF6B47)' }}>
                  <span className="text-white font-bold">M</span>
                </div>
                <div>
                  <div className="font-outfit font-semibold text-white">Maria Silva</div>
                  <div className="font-outfit text-gray-400 text-sm">Empresária</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="font-outfit text-gray-300 mb-6 italic" style={{ fontSize: '24px' }}>
                "Profissional excepcional! Me ajudou a ganhar massa muscular de forma saudável e sustentável."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ background: 'linear-gradient(135deg, #FF2332, #FF6B47)' }}>
                  <span className="text-white font-bold">J</span>
                </div>
                <div>
                  <div className="font-outfit font-semibold text-white">João Santos</div>
                  <div className="font-outfit text-gray-400 text-sm">Engenheiro</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="font-outfit text-gray-300 mb-6 italic" style={{ fontSize: '24px' }}>
                "Metodologia incrível! Consegui meus objetivos muito mais rápido do que imaginava."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ background: 'linear-gradient(135deg, #FF2332, #FF6B47)' }}>
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
      <section id="contato" className="py-20" style={{ backgroundColor: '#2A2A2A' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-oxanium text-5xl font-bold mb-6">
              <span style={{ color: '#FF2332' }}>Entre em Contato</span>
            </h2>
            <p className="font-outfit text-xl text-gray-300" style={{ fontSize: '24px' }}>
              Pronto para transformar sua vida? Vamos conversar!
            </p>
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => window.location.href = '/forms'}
              className="py-6 px-12 rounded-lg font-outfit font-semibold transition-all transform hover:scale-105 text-white text-center"
              style={{ background: 'linear-gradient(135deg, #FF2332, #FF6B47)', fontSize: '32px' }}
            >
              Formulário
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400" style={{ backgroundColor: '#1F1F1F' }}>
        <div className="max-w-6xl mx-auto px-4">
          <p className="font-outfit" style={{ fontSize: '24px' }}>&copy; 2025 Lucas Basilio - Personal Trainer. Todos os direitos reservados.</p>
          <p className="font-outfit mt-2 text-sm">Transformando vidas através do fitness</p>
        </div>
      </footer>
    </div>
  );
}
