import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-10">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <ul className="flex space-x-6">
          <li><Link href="#home"><a>Home</a></Link></li>
          <li><Link href="#about"><a>About</a></Link></li>
          <li><Link href="#portfolio"><a>Portfolio</a></Link></li>
          <li><Link href="#resume"><a>Resume</a></Link></li>
          <li><Link href="#contact"><a>Contact</a></Link></li>
        </ul>
      </nav>
    </header>
  );
}
