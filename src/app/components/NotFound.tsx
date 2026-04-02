import { Link } from "react-router";
import { Home } from "lucide-react";

export function NotFound() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-6xl mb-4">404</h1>
        <h2 className="text-3xl mb-6">Page not found</h2>
        <p className="text-xl text-gray-600 mb-8">
          Looks like this page doesn't exist. Or maybe it's good enough that we decided not to build it yet.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          <Home className="w-5 h-5" />
          Back to home
        </Link>
      </div>
    </div>
  );
}
