// import "@/app/globals.css";
function NavBar() {
  return (
    <nav className="flex justify-between items-center p-5 bg-gray-800">
      <a href="/" className="text-3xl font-serif font-bold text-slate-300">
        Musa Akbar
      </a>
      <div className="flex justify-between">
        <a href="/about" className="px-3 text-xl font-semibold text-sky-200">
          about us
        </a>
        <a
          href="/past-work"
          className="px-3 text-xl font-semibold text-sky-200"
        >
          Past work
        </a>
        <a
          href="/technologies-used"
          className="px-3 text-xl font-semibold text-sky-200"
        >
          Technologies use
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
