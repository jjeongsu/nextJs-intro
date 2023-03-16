import Link from 'next/link';

export default function NavBar(){
  return (<nav>
    <Link href="/">
      Home
    </Link>
    <Link href="/about">
      About
    </Link>
  </nav>)
}

/***
 * 근데 왜 애러 메세지가 안뜨는 거지? ㅇㅅㅇa
 */