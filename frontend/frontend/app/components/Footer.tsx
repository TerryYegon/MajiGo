export default function Footer() {
  return (
    <footer className="bg-blue-600 text-gray-300 py-6 mt-auto">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-3 text-sm">
          <span className="text-gray-400" aria-hidden>
            ©
          </span>
          <span className="font-semibold">MajiGo</span>
          <span>All rights reserved.</span>
        </div>

        <div className="flex space-x-6 text-sm">
          <a href="/privacy" className="hover:underline hover:text-white">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:underline hover:text-white">
            Terms of Service
          </a>
          <a href="/cookies" className="hover:underline hover:text-white">
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
}
