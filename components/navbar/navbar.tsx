import Link from "next/link";
import Image from "next/image";


export default function Navbar() {
  return (
    <nav className="nv-navbar">
      <Link href='/'>
        <a className="logo" aria-label="homepage">
          <Image src='/assets/logo.svg' width={74} height={74} alt=''></Image>
        </a>
      </Link>
      <ul className="navlink-list">
        <li><Link href='/episodes'><a className="navlink">Episodes</a></Link></li>
        <li><Link href='/about'><a className="navlink">About</a></Link></li>
        <li><Link href='/blog'><a className="navlink">Blog</a></Link></li>
      </ul>
      <ul className="ctalink-list">
         <li><Link href='/recent-episodes'><a className="ctalink secondary">Recent Episodes</a></Link></li>
        <li><Link href='#'><a className="ctalink primary">Subscribe</a></Link></li>
      </ul>
    </nav>
  )
}