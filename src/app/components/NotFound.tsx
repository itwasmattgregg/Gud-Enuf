import { Link } from "react-router";
import { Home } from "lucide-react";

export function NotFound() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-6xl mb-4">404</h1>
        <h2 className="text-3xl mb-6">Page not found</h2>
        <p className="text-xl text-muted-foreground mb-8">
          Looks like this page doesn&apos;t exist. Or maybe it&apos;s good enough
          that we decided not to build it yet.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Home className="w-5 h-5" />
            Back to home
          </Link>
          <Link
            to="/manifesto"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-primary rounded-lg hover:bg-accent transition-colors"
          >
            Read the manifesto
          </Link>
        </div>
      </div>
    </div>
  );
}
