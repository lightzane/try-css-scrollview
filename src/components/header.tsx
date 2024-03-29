import Container from './ui/container';

export default () => {
  return (
    <header>
      <Container>
        <div className='flex justify-center'>
          <div className='select-none w-14 h-14 p-2 flex justify-center pointer-events-none rounded-full bg-gray-700'>
            <img
              className='--logo'
              draggable={false}
              alt='logo'
              src='./react.svg'
            />
          </div>
        </div>
      </Container>
    </header>
  );
};
