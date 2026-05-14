import { useState, useEffect, useRef } from 'react';

interface Page2RevelacaoProps {
  onNext: () => void;
}

export default function Page2Revelacao({ onNext }: Page2RevelacaoProps) {
  const [showNotification, setShowNotification] = useState(false);
  const backgroundAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    backgroundAudioRef.current = new Audio('https://megainfo.pro/wp-content/uploads/2026/02/background-music.mp3');
    backgroundAudioRef.current.loop = true;
    backgroundAudioRef.current.volume = 0.7;
    backgroundAudioRef.current.play().catch(error => {
      console.log('Autoplay prevented:', error);
    });

    return () => {
      if (backgroundAudioRef.current) {
        backgroundAudioRef.current.pause();
        backgroundAudioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    // Add a state to history to detect back button
    window.history.pushState(null, '', window.location.href);

    const handlePopState = () => {
      // When user tries to go back, redirect to page 3
      window.history.pushState(null, '', window.location.href);
      if (backgroundAudioRef.current) {
        backgroundAudioRef.current.pause();
      }
      onNext();
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [onNext]);

  const handleJokeButton = () => {
    const button = document.getElementById('joke-btn');
    if (button) {
      button.classList.add('animate-shake');
      setTimeout(() => button.classList.remove('animate-shake'), 500);
    }
  };

  const handleNextButton = () => {
    if (backgroundAudioRef.current) {
      backgroundAudioRef.current.pause();
    }

    const audio = new Audio('https://megainfo.pro/wp-content/uploads/2026/02/msg-sound.mp3');
    audio.play();

    setShowNotification(true);

    setTimeout(() => {
      setShowNotification(false);
      onNext();
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#e3e3e3] relative overflow-hidden">
      {/* Minimal border effect */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f54b29] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f54b29] to-transparent" />
        <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-[#f54b29] to-transparent" />
        <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-[#f54b29] to-transparent" />
      </div>

      {/* Sale Notification */}
      {showNotification && (
        <div className="fixed top-4 left-0 right-0 z-50 flex justify-center animate-[slideDown_0.5s_ease-out] px-4">
          <img
            src="https://megainfo.pro/wp-content/uploads/2026/02/17.webp"
            alt="Venda aprovada"
            className="w-full max-w-[280px] sm:max-w-xs md:max-w-sm h-auto"
            style={{ imageRendering: '-webkit-optimize-contrast' }}
            loading="eager"
          />
        </div>
      )}

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-12 sm:py-20">
        {/* Image */}
        <div className="mb-8 sm:mb-12 w-full max-w-sm md:max-w-md px-4">
          <img
            src="https://megainfo.pro/wp-content/uploads/2026/02/pvs-15.webp"
            alt="Featured"
            className="w-full rounded-2xl border-4 border-[#df6807] shadow-2xl"
          />
        </div>

        {/* Headline */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-6 sm:mb-8 leading-tight max-w-3xl text-[#292929] px-4">
          A verdade é uma só: não é falta de treino, força de vontade ou genética. É o horário errado que está bloqueando seus resultados
        </h1>

        {/* Description */}
        <div className="max-w-2xl text-center mb-8 sm:mb-10 space-y-4 px-4">
          <p className="text-[#292929] text-base sm:text-lg leading-relaxed">
            Você treina. Come "certo". Já tentou whey, dieta da moda, cardápio engessado…
            <br />
            Mesmo assim, o espelho não muda. A calça continua folgada nas pernas. O corpo parece travado no mesmo lugar.
          </p>
          <p className="text-[#292929] text-base sm:text-lg leading-relaxed">
            No fundo, você começa a pensar: "Será que depois dos 40 não dá mais?"
            <br />
            Até que surge o insight que muda tudo: <span className="font-bold">📌 não é o que você come, é QUANDO você come.</span>
          </p>
          <p className="text-[#292929] text-base sm:text-lg leading-relaxed">
            Ao analisar centenas de mulheres 40+, ficou claro que o metabolismo não morreu… Ele apenas responde a estímulos diferentes.
            <br />
            Foi assim que nasceu o <span className="font-bold">Truque da Dieta Anti-Horário</span>, um protocolo simples de 7 dias que reorganiza os horários certos para ativar a resposta muscular, sem sofrimento.
          </p>
          <p className="text-[#292929] text-base sm:text-lg leading-relaxed">
            <span className="font-bold">Resultados práticos relatados pelas alunas:</span>
            <br />
            ⚙️ <span className="font-bold">Pernas e glúteos mais firmes em 7–10 dias</span>
            <br />
            ⚙️ <span className="font-bold">Sensação de "corpo acordando" mesmo com treino leve</span>
            <br />
            ⚙️ <span className="font-bold">Ganho visível de massa sem suplemento caro</span>
          </p>
        </div>

        {/* Question */}
        <p className="text-xl sm:text-2xl md:text-3xl text-[#292929] text-center mb-4 sm:mb-6 font-medium px-4">
          Agora seja sincera…
          <br />
          Se eu liberar esse truque completo por apenas{' '}
          <span className="font-black underline decoration-4 decoration-[#df6807]">R$5,90</span>{' '}
          pra você testar ainda hoje, você aceitaria?
        </p>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-[#292929] text-center mb-8 sm:mb-12 px-4">
          Eu sei, parece pegadinha... <span className="font-bold">Mas não é!</span>
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-2xl px-4">
          <button
            id="joke-btn"
            onClick={handleNextButton}
            className="flex-1 bg-[#000000] text-[#e3e3e3] px-6 sm:px-8 py-4 sm:py-5 rounded-xl text-base sm:text-lg font-semibold border-2 border-[#df6807] hover:border-[#f54b29] transition-all duration-300 hover:bg-[#f54b29]/10"
          >
            🤔 Duvido, mas quero ver
          </button>

          <button
            onClick={handleNextButton}
            className="flex-1 group relative bg-[#f54b29] text-[#e3e3e3] px-6 sm:px-8 py-4 sm:py-5 rounded-xl text-base sm:text-lg font-bold transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">🔥 Quero só se for agora</span>
            <div className="absolute inset-0 rounded-xl bg-[#f54b29] blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
          </button>
        </div>
      </div>
    </div>
  );
}
