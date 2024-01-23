'use client'
import Image from "next/image";

export default function Home() {
  const openPopup = () => {
    const websiteURL = "https://checkout-eight-pink.vercel.app/";
    
  
    const popupProperties = {
      width: 1280,  
      height: 600, 
      top: 100,   
      left: 100,  
    };

    // Construct the window features string
    const windowFeatures = Object.entries(popupProperties)
      .map(([key, value]) => `${key}=${value}`)
      .join(',');

    // Open the popup window
    window.open(websiteURL, "_blank", windowFeatures);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <button
        className="bg-black text-white text-xl font-bold tracking-wider rounded p-3"
        onClick={openPopup}
      >
        Open Popup
      </button>
    </main>
  );
}
