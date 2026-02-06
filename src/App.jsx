import { useState, useEffect } from 'react';
import JSConfetti from 'js-confetti';

import mixpanel from './lib/mixpanel';

function App() {
  const jsConfetti = new JSConfetti();
  const [randomValor, setRandomValor] = useState({});

  const [valueSi, setValueSi] = useState(false);

  const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0 });
  const [position, setPosition] = useState('relative');

  let random = [
    {
      id: 1,
      description: 'Que...?💔',
      img: 'https://media.tenor.com/Y4_Mqd45GDYAAAAj/instant-heartbreak-heartbreak.gif',
    },
    {
      id: 1,
      description: 'PORRR???',
      img: 'https://media.tenor.com/ofSLMrJam7QAAAAi/milk-and-mocha.gif',
    },
    {
      id: 2,
      description: 'Creo que te equivocaste de botón jaja',
      img: 'https://media.tenor.com/-GBAbJiMuQUAAAAM/newtooth-newt00th-newt00th.gif',
    },
    {
      id: 3,
      description: 'Por favor...',
      img: 'https://media.tenor.com/Qu6GUg0Yx90AAAAj/mocha-cry.gif',
    },
    {
      id: 4,
      description: 'Pero seria muy lindo amor💔',
      img: 'https://media.tenor.com/67jSZL8qnl8AAAAi/milk-and-mocha.gif',
    },
    {
      id: 5,
      description: 'Dale no seas mala :c',
      img: 'https://i.pinimg.com/736x/0a/a6/68/0aa66825819790b5fee1d46fd5cadad6.jpg',
    },
    {
      id: 6,
      description: 'DALE PONE QUE SI',
      img: 'https://i.pinimg.com/736x/af/9d/20/af9d20b4d873b36e6eb05c605584d1f7.jpg',
    },
    {
      id: 7,
      description: 'Hai...',
      img: 'https://media.tenor.com/P7LyTvDSvDIAAAAi/milk-and-mocha.gif',
    },
    {
      id: 8,
      description: 'POR FAVORRRRRRRRRRRR',
      img: 'https://media.tenor.com/YX3gy4zfJGQAAAAi/milk-and-mocha.gif',
    },
    {
      id: 9,
      description: 'DALEEEEE💔💔💔',
      img: 'https://media.tenor.com/k-qmjdw6ClkAAAAi/milk-and-mocha-milk.gif',
    },
    {
      id: 10,
      description: 'Dale amorchito yo se que queres...',
      img: 'https://cdn.cdnstep.com/0XdyfapPCObwGktlkcak/0.png',
    },
    {
      id: 11,
      description: 'DEJATE PUESSS',
      img: 'https://media.tenor.com/Qu6GUg0Yx90AAAAj/mocha-cry.gif',
    },
    {
      id: 12,
      description: 'Que mala...',
      img: 'https://media.tenor.com/Qu6GUg0Yx90AAAAj/mocha-cry.gif',
    },
  ];

  const randomResponse = () => {
    mixpanel.track('Boton No Clickeado');

    let randX = Math.random() * 70;
    let randY = Math.random() * 80;

    let index = Math.floor(Math.random() * random.length);
    setPosition('absolute');
    setButtonPosition({ top: randY, left: randX });
    setRandomValor(random[index]);
  };

  useEffect(() => {
    mixpanel.track('Pagina Cargada');
  }, []);

  return (
    <main
      id="canvas"
      className="w-screen relative h-screen bg-no-repeat bg-cover flex items-center justify-center bg-center "
    >
      {!valueSi ? (
        <div className="p-5">
          <h1 className="font-bold text-5xl text-center">
            ¿Queres ser mi San Valentin?
          </h1>
          <img
            src={
              Object.keys(randomValor).length === 0
                ? 'https://i.pinimg.com/originals/db/aa/c1/dbaac13f6278b91a15e480752b8a7242.gif'
                : randomValor.img
            }
            alt="San Valentin"
            className="mx-auto object-cover h-[200px]"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-5 items-center">
            <button
              onClick={() => {
                mixpanel.track('Boton Si Clickeado');

                setValueSi(true);

                jsConfetti.addConfetti({
                  emojis: ['💗', '💕', '❣️', '💞'],
                  emojiSize: 70,
                  confettiNumber: 200,
                });
              }}
              className={`bg-green-500 text-white font-bold p-2 rounded-md text-xl`}
            >
              Si
            </button>
            <button
              className="bg-red-500 text-white min-w-48 font-bold p-2 rounded-md text-xl"
              onMouseOver={randomResponse}
              style={{
                position: position,
                top: `${buttonPosition.top}%`,
                left: `${buttonPosition.left}%`,
              }}
            >
              {Object.keys(randomValor).length === 0
                ? 'No'
                : randomValor.description}
              <span hidden>
                {
                  (document.title =
                    Object.keys(randomValor).length === 0
                      ? '¿Queres ser mi San Valentin?'
                      : randomValor.description)
                }
              </span>
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center flex-col space-y-10">
          <h1 className="text-4xl font-bold">
            JEJEJE YEYYYYYYY!
          </h1>
          <img
            src="https://i.pinimg.com/originals/9b/dc/c6/9bdcc6206c1d36a37149d31108c6bb41.gif"
            alt=""
            className="mx-auto"
          />
          <span hidden>{(document.title = 'JEJEJE YEYYYYYYY!')}</span>
        </div>
      )}
    </main>
  );
}

export default App;
