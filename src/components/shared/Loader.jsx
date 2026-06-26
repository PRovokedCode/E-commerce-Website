import { Loader2 } from "lucide-react";

function Loader() {
  return (
    <div className="fixed inset-0 bg-white z-[9999] flex flex-col items-center justify-center">
      <img
        src="https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/theme/logo.svg"
        alt="Evara"
        className="w-44 mb-6"
      />

      <Loader2
        size={32}
        className="text-primary animate-spin mb-4"
      />

      <p className="text-gray-500 font-medium tracking-wide">
        Loading...
      </p>
    </div>
  );
}

export default Loader;