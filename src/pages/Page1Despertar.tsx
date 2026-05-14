import { useState, useEffect } from 'react';

interface Page1DespertarProps {
  onNext: () => void;
}

export default function Page1Despertar({ onNext }: Page1DespertarProps) {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // Add a state to history to detect back button
    window.history.pushState(null, '', window.location.href);

    const handlePopState = () => {
      // When user tries to go back, redirect to page 2
      window.history.pushState(null, '', window.location.href);
      onNext();
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [onNext]);

  const handleButtonClick = () => {
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
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_50%_50%,rgba(245,75,41,0.15),transparent_50%)]" />

      {/* Sale Notification */}
      {showNotification && (
        <div className="fixed top-4 left-0 right-0 z-50 flex justify-center animate-[slideDown_0.5s_ease-out] px-4">
          <img
            src="https://megainfo.pro/wp-content/uploads/2026/02/16.webp"
            alt="Venda aprovada"
            className="w-full max-w-[280px] sm:max-w-xs md:max-w-sm h-auto"
            style={{ imageRendering: '-webkit-optimize-contrast' }}
            loading="eager"
          />
        </div>
      )}

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-12 sm:py-20">
        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-normal text-center mb-8 sm:mb-12 leading-tight max-w-4xl text-[#292929]">
          Aplique o <strong>Truque da Dieta Anti-Horário</strong> na sua rotina e veja resultados visíveis <span className="font-bold">em até 7 dias</span>
        </h1>

        {/* Avatar space */}
        <div className="mb-8 sm:mb-12 w-full max-w-sm md:max-w-md px-4">
          <img
            src="https://megainfo.pro/wp-content/uploads/2026/02/aline-03.webp"
            alt="Avatar"
            className="w-full rounded-2xl border-4 border-[#f54b29] shadow-2xl"
          />
        </div>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl md:text-2xl text-[#292929] text-center mb-6 sm:mb-8 max-w-2xl px-4">
          O melhor é que <strong>você não precisa</strong> gastar com suplemento, nem marmitinha fit e muito menos trocar de treino <br></br><br></br>Você verá <strong>resultados expressivos em 7 dias</strong> apenas ajustando o que você já faz
          <br /><br />
          O famoso <strong>Truque da Dieta Anti-Horário de R$5,90</strong> está viralizando no Brasil, esse truque alimentar de 7 dias é o responsável em reativar o ganho de massa em mulheres acima dos 40 anos
          <br /><br />
          <strong className="uppercase">MAS ANTES VAMOS COMBINAR UMA COISA?</strong>
          <br /><br />
          ❌ Chega de treinar e não ver mudança no corpo
          <br /><br />
          ❌ Chega de gastar fortunas com suplemento que não funciona
          <br /><br />
          ❌ Chega de achar que "depois dos 40 é assim mesmo"
          <br /><br />
          Agora é sobre destravar seu corpo e ver o <strong>resultado nos próximos 7 dias</strong>
          <br /><br />
          <strong className="uppercase">ACORDO FEITO? ENTÃO VAMOS LÁ 👇</strong>
        </p>


        {/* CTA Button */}
        <button
          onClick={handleButtonClick}
          className="group relative bg-[#f54b29] text-[#e3e3e3] px-8 sm:px-12 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-bold transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95 mx-4"
        >
          <span className="relative z-10 flex items-center gap-2 sm:gap-3">
            CLIQUE AQUI 🔥
          </span>
          <div className="absolute inset-0 rounded-full bg-[#f54b29] blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
        </button>
      </div>
    </div>
  );
}
