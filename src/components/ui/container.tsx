import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default ({ children }: Props) => {
  return (
    // prettier-ignore
    <div className='mx-auto max-w-2xl px-4 md:px-6 lg:px-8'>
        {children}
    </div>
  );
};
