import Container from './ui/container';

export default () => {
  return (
    <main>
      <div className='h-screen'>
        <Container>
          <div className='max-w-xl py-10 flex flex-col gap-5 animate-enter'>
            <section>
              <div className='flex flex-col gap-5'>
                <h1>
                  <span className='text-5xl font-semibold sm:text-gray-800'>
                    CSS-only scroll-driven animations are 🔥
                  </span>
                </h1>
                <div className='rounded-lg bg-white/50 backdrop-blur-lg p-5 shadow-lg border-t-[1px] border-t-white/80'>
                  <div className='flex flex-col gap-5 text-xl  sm:text-gray-800 font-semibol'>
                    <p>
                      Scroll-driven animation was something that we used to rely
                      ony JavaScript for, with the help of scroll listeners and
                      intersection observers.
                    </p>
                    <p>
                      Luckily for us, scroll-driven animations are coming to be
                      a CSS feature, and they make life so much simple and more
                      performant.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Container>
      </div>

      <div className='flex flex-col gap-28'>
        <RandomContent />
        <RandomContent />
        <RandomContent />
        <RandomContent />
        <RandomContent />
      </div>
    </main>
  );
};

const RandomContent = () => {
  return (
    <Container>
      <section>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
          expedita ut ipsa! Ipsam asperiores minus consequuntur soluta, deleniti
          quia nesciunt magni, error veniam exercitationem deserunt autem esse,
          est distinctio! Quo!
        </p>
      </section>
    </Container>
  );
};
