import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Sobre", href: "/about" },     // Agora aponta para a página /about
  { name: "Projetos", href: "/projects" }, // Agora aponta para a página /projects
  { name: "Contato", href: "mailto:seuemail@gmail.com" },
];

export default function Header() {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-full md:w-auto px-4">
      <nav className="animate-fade-down animate-once animate-duration-1000 animate-delay-100">
        <ul className="flex items-center justify-center gap-1 px-2 py-2 border border-white/10 bg-black/50 backdrop-blur-md rounded-full shadow-lg shadow-black/20">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="relative block px-4 py-2 text-sm text-neutral-400 hover:text-white transition-colors duration-300 rounded-full hover:bg-white/10 font-medium"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}