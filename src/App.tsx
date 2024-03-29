import Header from './components/header';
import Main from './components/main';

export default () => {
  return (
    <div className='h-full overflow-y-auto overflow-x-hidden relative'>
      <div className='sticky top-0 z-[9999]'>
        <div className='--scroll-watcher'></div>
      </div>
      <img
        alt='bg'
        src='./mountain.jpeg'
        className='absolute inset-0 pointer-events-none -z-[1] mx-auto max-h-full'
        draggable={false}
      />
      <div className='flex flex-col gap-5 pt-5 pb-32'>
        <div className='sticky top-0 pt-5 z-[9999]'>
          <Header />
        </div>
        <Main />
      </div>
    </div>
  );
};
