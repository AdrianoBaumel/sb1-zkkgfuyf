import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const NOTIFICATION_IMAGES = [
  'https://megainfo.pro/wp-content/uploads/2026/02/19.webp',
  'https://megainfo.pro/wp-content/uploads/2026/02/20.webp',
  'https://megainfo.pro/wp-content/uploads/2026/02/18.webp',
];

const FAQ_ITEMS = [
  {
    question: '1️⃣ Preciso entender de dieta ou já ter experiência?',
    answer:
      'Não. O método é passo a passo, feito pra quem nunca seguiu dieta nenhuma.',
  },
  {
    question: '2️⃣ Esse protocolo é seguro pra mulheres 40+ e 50+?',
    answer:
      'Sim. Ele foi criado exatamente para corpos com metabolismo mais lento.',
  },
  {
    question: '3️⃣ Em quanto tempo começo a notar diferença no corpo?',
    answer:
      'A maioria das mulheres relatam mudanças visíveis entre 7 e 10 dias.',
  },
  {
    question:
      '4️⃣ Funciona mesmo pra quem treina há anos e nunca teve resultado?',
    answer: 'Sim. Esse é o perfil que mais vê mudança rápida.',
  },
  {
    question: '5️⃣ Vou precisar mudar toda minha rotina ou treino?',
    answer:
      'Não. Você aplica com o treino que já faz — até em casa.',
  },
  {
    question: '6️⃣ E se não funcionar pra mim?',
    answer:
      'Se você não ver resultado algum em 7 dias, devolvemos seu dinheiro sem nenhuma pergunta.',
  },
  {
    question: '🎁 CLIQUE AQUI 🔒',
    answer: 'special',
    fullContent: `Sei que o Truque da Dieta Anti-Horário já vai te ajudar…
Mas quero te entregar o pacote completo de ativação muscular 40+.

Você recebe agora:

📘 Truque da Dieta Anti-Horário (protocolo 7 dias)
🎁 Lista estratégica de alimentos que funcionam com metabolismo lento
🎁 O horário secreto de ativação muscular feminina
🎁 Cardápio adaptável (sem marmita, sem sofrimento)

Funciona para qualquer mulher 40+, mesmo treinando pouco ou em casa.

Tudo isso por apenas R$10,00.`,
  },
];

export default function Page3Apresentacao() {
  const [showNotification, setShowNotification] = useState(false);
  const [currentNotificationIndex, setCurrentNotificationIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://fast.wistia.com/player.js';
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://fast.wistia.com/embed/jhw3d6waxo.js';
    script2.async = true;
    script2.type = 'module';
    document.head.appendChild(script2);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  useEffect(() => {
    let isFirstNotification = true;
    let audioContext: HTMLAudioElement | null = null;

    const playNotificationSound = () => {
      if (isFirstNotification) {
        const audio = new Audio(
          'https://megainfo.pro/wp-content/uploads/2026/02/msg-sound.mp3'
        );

        const playPromise = audio.play();

        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              audioContext = audio;
            })
            .catch(() => {
              const enableAudio = () => {
                const unlockAudio = new Audio(
                  'https://megainfo.pro/wp-content/uploads/2026/02/msg-sound.mp3'
                );

                unlockAudio
                  .play()
                  .then(() => {
                    unlockAudio.pause();
                    unlockAudio.currentTime = 0;
                    audioContext = unlockAudio;
                  })
                  .catch(() => {});

                document.removeEventListener('touchstart', enableAudio);
                document.removeEventListener('click', enableAudio);
              };

              document.addEventListener('touchstart', enableAudio, {
                once: true,
              });

              document.addEventListener('click', enableAudio, {
                once: true,
              });
            });
        }

        isFirstNotification = false;
      } else {
        const audio = new Audio(
          'https://megainfo.pro/wp-content/uploads/2026/02/msg-sound.mp3'
        );

        audio.play().catch(() => {});
      }
    };

    const showNotificationWithDelay = () => {
      const delay = 20000;

      setTimeout(() => {
        playNotificationSound();
        setShowNotification(true);

        setTimeout(() => {
          setShowNotification(false);

          setCurrentNotificationIndex(
            (prev) => (prev + 1) % NOTIFICATION_IMAGES.length
          );

          showNotificationWithDelay();
        }, 3000);
      }, delay);
    };

    showNotificationWithDelay();

    return () => {
      if (audioContext) {
        audioContext.pause();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#e3e3e3] relative overflow-hidden">
      {/* Sale Notification */}
      {showNotification && (
        <div className="fixed top-4 left-0 right-0 z-50 flex justify-center animate-[slideDown_0.5s_ease-out] px-4">
          <img
            src={NOTIFICATION_IMAGES[currentNotificationIndex]}
            alt="Venda aprovada"
            className="w-full max-w-[280px] sm:max-w-xs md:max-w-sm h-auto"
            style={{ imageRendering: '-webkit-optimize-contrast' }}
            loading="eager"
          />
        </div>
      )}

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#f54b29] rounded-full animate-fall opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-4xl h-[60%] bg-[#f54b29] opacity-[0.03] blur-[100px] rounded-full" />

      {/* Main */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-12 sm:py-20">
        {/* Headline */}
        <h1 className="text-xl sm:text-2xl md:text-4xl font-normal text-center mb-4 sm:mb-6 leading-tight max-w-3xl text-[#292929]">
          Resultado em até <strong>7 DIAS</strong> apenas ajustando o que você já faz
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-[#292929] text-center mb-8 sm:mb-12 max-w-2xl px-4">
          Aperte o Play abaixo
        </p>

        {/* Video */}
        <div className="w-full max-w-4xl mb-6 sm:mb-8 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#f54b29] mx-4">
          <style>{`
            wistia-player[media-id='jhw3d6waxo']:not(:defined) {
              background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/jhw3d6waxo/swatch');
              display: block;
              filter: blur(5px);
              padding-top:177.78%;
            }
          `}</style>

          <wistia-player
            media-id="jhw3d6waxo"
            aspect="0.5625"
          ></wistia-player>
        </div>

        {/* Success Stories */}
        <div className="w-full max-w-4xl mb-12 sm:mb-16 mx-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 text-[#292929]">
            +2mil mulheres transformadas
          </h2>

          <div className="w-full rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://megainfo.pro/wp-content/uploads/2026/02/pack-scaled.webp"
              alt="Mulheres transformadas"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* FAQ */}
        <div className="w-full max-w-3xl px-4 mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-[#292929]">
            F.A.Q - DÚVIDAS FREQUENTES DE QUEM CHEGOU ATÉ AQUI
          </h2>

          <div className="space-y-3">
            {FAQ_ITEMS.slice(0, -1).map((item, index) => (
              <div
                key={index}
                className="border border-[#df6807]/40 rounded-lg overflow-hidden transition-all duration-300 bg-gradient-to-br from-[#df6807]/15 to-[#f54b29]/10"
              >
                <button
                  onClick={() =>
                    setOpenFaqIndex(
                      openFaqIndex === index ? null : index
                    )
                  }
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 flex items-center justify-between text-left hover:bg-[#f54b29]/5 transition-colors"
                >
                  <span className="text-sm sm:text-base font-medium text-[#292929] pr-4">
                    {item.question}
                  </span>

                  <ChevronDown
                    className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transition-transform duration-300 text-[#df6807] ${
                      openFaqIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaqIndex === index
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-4 sm:px-5 pb-3 sm:pb-4 pt-2 text-[#292929] text-sm border-t border-[#df6807]/20">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}

            {/* Special Offer */}
            <div className="border-4 border-[#df6807] rounded-xl overflow-hidden bg-gradient-to-br from-[#f54b29]/30 via-[#df6807]/20 to-[#f54b29]/30 shadow-[0_0_40px_rgba(223,104,7,0.4)] transform hover:scale-[1.02] transition-all duration-300 animate-pulse-glow">
              <button
                onClick={() =>
                  setOpenFaqIndex(
                    openFaqIndex === 6 ? null : 6
                  )
                }
                className="w-full px-4 sm:px-6 py-5 sm:py-6 flex items-center justify-between text-left hover:bg-[#f54b29]/30 transition-colors"
              >
                <span className="text-base sm:text-xl font-bold text-[#000000] pr-4 drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                  {FAQ_ITEMS[FAQ_ITEMS.length - 1].question}
                </span>

                <ChevronDown
                  className={`w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 transition-transform duration-300 text-[#000000] ${
                    openFaqIndex === 6 ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openFaqIndex === 6
                    ? 'max-h-[800px] opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-4">
                  <div className="text-[#292929] text-sm sm:text-base mb-6 leading-relaxed whitespace-pre-line">
                    {FAQ_ITEMS[FAQ_ITEMS.length - 1].fullContent}
                  </div>

                  <div className="space-y-4">
                    <a
                      href="https://pay.lowify.com.br/checkout?product_id=T5wAiZ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-gradient-to-r from-[#f54b29] via-[#df6807] to-[#f54b29] text-[#e3e3e3] px-4 sm:px-8 py-5 sm:py-6 rounded-xl text-base sm:text-xl md:text-2xl font-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,75,41,0.6)] hover:scale-105 active:scale-95 text-center uppercase tracking-wide border-2 border-[#df6807] animate-shimmer bg-[length:200%_100%]"
                    >
                      🔥 Acessar agora por R$10,00
                    </a>

                    <a
                      href="https://google.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center text-[#292929]/70 hover:text-[#292929] text-sm sm:text-base underline transition-all duration-300 py-2"
                    >
                      ❌ Não, quero continuar tentando sozinha
                    </a>
                  </div>

                  <p className="text-center text-[#292929]/60 text-xs sm:text-sm mt-6 italic">
                    ⚡ Oferta exclusiva disponível apenas nesta página
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
                }
