import Link from 'next/link';

import { SITE_NAME } from '../../config/app-config';
import { HeaderStyle } from './styles';

export default function Header() {
  return (
    <HeaderStyle>
      <Link href="/">
        <a>{SITE_NAME}</a>
      </Link>
    </HeaderStyle>
  );
}
