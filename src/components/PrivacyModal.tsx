import { useEffect, useState } from "react";
import "./PrivacyModal.css";

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  const [content, setContent] = useState("Caricamento in corso...");

  useEffect(() => {
    if (isOpen) {
      fetch("/privacy_policy.html")
        .then((res) => res.text())
        .then((text) => setContent(text))
        .catch(() => setContent("Impossibile caricare la Privacy Policy."));
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
      <div className="bg-white text-black max-w-3xl max-h-[80vh] overflow-y-auto rounded-lg p-6 relative shadow-lg w-full mx-4">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black hover:text-red-600 text-xl"
        >
          &times;
        </button>
        <div className="privacy-policy" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
}
