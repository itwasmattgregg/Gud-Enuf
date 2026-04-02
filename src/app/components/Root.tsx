import { Outlet, Link, useLocation } from "react-router";
import { Coffee } from "lucide-react";

export function Root() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <Coffee className="w-7 h-7 text-primary group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-2xl font-bold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Gud Enuf
            </span>
          </Link>

          <div className="flex gap-6">
            <Link
              to="/"
              className={`transition-colors ${isActive("/") && location.pathname === "/" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`transition-colors ${isActive("/about") ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`transition-colors ${isActive("/services") ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              Services
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Coffee className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                © 2026 Gud Enuf. Good enough, by design.
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              <a href="mailto:hello@gudenuf.com" className="hover:text-primary transition-colors">
                hello@gudenuf.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
