import Image from "next/image";
import { Phone, Mail, Instagram, MapPin, Trophy, Users, Clock, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header/Hero Section */}
      <header className="relative min-h-screen bg-black overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full max-w-7xl mx-auto">
            {/* Left Content */}
            <div className="text-white space-y-8 lg:pr-8 px-4 lg:px-0">
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
                  <span className="block text-white">TRANSFORM</span>
                  <span className="block text-white">CHALLENGES</span>
                  <span className="block bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                    INTO TRIUMPHS!
                  </span>
                </h1>
              </div>
              
              <div className="space-y-6">
                <p className="text-xl lg:text-2xl text-gray-300 max-w-lg leading-relaxed">
                  Sou <span className="text-red-500 font-semibold">Lucas Basilio</span>, personal trainer apaixonado por 
                  capacitar pessoas a alcançarem seus objetivos fitness através de coaching personalizado e suporte.
                </p>
              </div>

              <div className="pt-4">
                <a 
                  href="#contato" 
                  className="inline-block bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  Começar Agora
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative lg:h-full flex items-center justify-center px-4 lg:px-0">
              <div className="relative w-full max-w-2xl mx-auto">
                <div className="relative w-full h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/lucas.jpg"
                    alt="Lucas Basilio - Personal Trainer"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover object-center"
                    priority
                  />
                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-red-500 mb-2">200+</div>
              <div className="text-gray-300">Alunos Transformados</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-red-500 mb-2">15+</div>
              <div className="text-gray-300">Anos de Experiência</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-red-500 mb-2">98%</div>
              <div className="text-gray-300">Taxa de Sucesso</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-red-500 mb-2">24/7</div>
              <div className="text-gray-300">Suporte Online</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">Minha História</h2>
              <p className="text-lg text-gray-300 mb-6">
                Comecei minha jornada no fitness aos 18 anos, quando descobri o poder transformador do exercício físico. 
                Após anos de estudo e dedicação, me tornei um Personal Trainer certificado pela ACSM e especialista em nutrição esportiva.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Minha missão é ajudar pessoas a alcançarem seus objetivos de forma sustentável e saudável, 
                criando planos personalizados que se adaptam ao estilo de vida de cada aluno.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Trophy className="text-red-500" size={24} />
                  <span className="text-gray-300">Certificado ACSM - Personal Trainer</span>
                </div>
                <div className="flex items-center gap-3">
                  <Trophy className="text-red-500" size={24} />
                  <span className="text-gray-300">Especialização em Nutrição Esportiva</span>
                </div>
                <div className="flex items-center gap-3">
                  <Trophy className="text-red-500" size={24} />
                  <span className="text-gray-300">Curso de Treinamento Funcional</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center">
                <span className="text-8xl text-white">📸</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Meus Serviços</h2>
            <p className="text-xl text-gray-300">Programas personalizados para cada objetivo</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow border border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Personal Training</h3>
              <p className="text-gray-300 mb-6">Treinos individualizados com acompanhamento completo e resultados garantidos.</p>
              <ul className="text-left space-y-2 text-gray-300">
                <li>• Avaliação física completa</li>
                <li>• Plano de treino personalizado</li>
                <li>• Acompanhamento nutricional</li>
                <li>• Suporte 24/7</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow border border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Consultoria Online</h3>
              <p className="text-gray-300 mb-6">Acompanhamento à distância com toda a qualidade do presencial.</p>
              <ul className="text-left space-y-2 text-gray-300">
                <li>• Treinos via app</li>
                <li>• Videochamadas semanais</li>
                <li>• Plano alimentar</li>
                <li>• Grupo VIP no WhatsApp</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow border border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Preparação Física</h3>
              <p className="text-gray-300 mb-6">Treinamento específico para atletas e competições.</p>
              <ul className="text-left space-y-2 text-gray-300">
                <li>• Periodização de treino</li>
                <li>• Análise biomecânica</li>
                <li>• Recuperação ativa</li>
                <li>• Suplementação esportiva</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section id="resultados" className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Transformações Reais</h2>
            <p className="text-xl text-gray-300">Veja os resultados incríveis dos meus alunos</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all">
                <div className="h-64 bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center">
                  <span className="text-6xl text-white">📸</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Cliente {item}</h3>
                  <p className="text-gray-300 text-sm mb-4">-15kg em 4 meses</p>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="text-yellow-400 fill-current" size={16} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">O Que Dizem Sobre Mim</h2>
            <p className="text-xl text-gray-300">Depoimentos reais de alunos satisfeitos</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                "Lucas mudou completamente minha relação com o exercício. Perdi 20kg e ganhei muito mais disposição!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">M</span>
                </div>
                <div>
                  <div className="font-semibold text-white">Maria Silva</div>
                  <div className="text-sm text-gray-400">Empresária</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                "Profissional excepcional! Me ajudou a conquistar o corpo que sempre sonhei de forma saudável."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">J</span>
                </div>
                <div>
                  <div className="font-semibold text-white">João Santos</div>
                  <div className="text-sm text-gray-400">Advogado</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                "Além de um excelente profissional, Lucas é uma pessoa incrível. Recomendo de olhos fechados!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">A</span>
                </div>
                <div>
                  <div className="font-semibold text-white">Ana Costa</div>
                  <div className="text-sm text-gray-400">Professora</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Vamos Começar Sua Transformação?</h2>
            <p className="text-xl text-gray-300">Entre em contato e agende sua avaliação gratuita</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-8">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-600 rounded-full flex items-center justify-center">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold">Telefone/WhatsApp</div>
                    <div className="text-gray-300">(11) 99999-9999</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-600 rounded-full flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold">E-mail</div>
                    <div className="text-gray-300">lucas@personaltrainer.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-600 rounded-full flex items-center justify-center">
                    <Instagram className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold">Instagram</div>
                    <div className="text-gray-300">@lucas.personaltrainer</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-600 rounded-full flex items-center justify-center">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold">Localização</div>
                    <div className="text-gray-300">São Paulo, SP</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Agende Sua Consulta</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full p-4 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="w-full p-4 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="tel"
                  placeholder="Seu telefone"
                  className="w-full p-4 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <textarea
                  placeholder="Conte-me sobre seus objetivos"
                  rows={4}
                  className="w-full p-4 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-center text-gray-400">
        <div className="max-w-6xl mx-auto px-4">
          <p>&copy; 2025 Lucas Basilio - Personal Trainer. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm">Transformando vidas através do fitness</p>
        </div>
      </footer>
    </div>
  );
}
