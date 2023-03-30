import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from "./NavBar.module.css";

export default function NavBar(){
  const router = useRouter();
  console.log(router);


  return (
  <nav>
    {/* <Link style={{color: router.pathname==="/" ? "red" : "blue"}} href="/">Home</Link>
    <Link style={{color: router.pathname==="/" ? "red" : "blue"}} href="/about"> about </Link>
     */}
    <Link href="/">
      <a 
        classNAme={`${styles.link} ${router.pathname === "/"? styles.active : ""}`}
      >Home</a>
    </Link>
    <Link href="/about">
    <a
          className={[
            styles.link,
            router.pathname === "/about" ? styles.active : "",
          ].join(" ")}
        >About</a>
    </Link>
  </nav>);
}