import { getImgPath } from '@/utils/image';
import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {

  return (
    <Link href="/">
      <Image
        src={getImgPath("/images/logo/d2s.png")}
        alt="logo"
        width={130}
        height={30}
        quality={100}
        className='dark:hidden'
      />
      <Image
        src={getImgPath("/images/logo/logo-white.png")}
        alt="logo"
        width={130}
        height={30}
        quality={100}
        className='dark:block hidden'
      />
    </Link>
  );
};

export default Logo;
