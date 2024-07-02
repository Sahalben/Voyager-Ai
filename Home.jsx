import React from 'react';
import { Settings, Grid, MapPin } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-cover bg-center text-white" style={{backgroundImage: "C:\Users\LENOVO\Desktop\voyager\Web\rock-staar-XAi6pWVvU_Y-unsplash.jpg"}}>
      <div className="min-h-screen bg-gradient-to-b from-blue-900/70 to-blue-700/70">
        <header className="p-4">
          <nav className="flex justify-between items-center">
            <div className="text-2xl font-bold">VOYAGER.AI</div>
            <ul className="flex space-x-1 bg-blue-800/50 rounded-full px-2 py-1">
              <li className="px-3 py-1 hover:bg-blue-700/50 rounded-full transition-colors cursor-pointer">Home</li>
              <li className="px-3 py-1 hover:bg-blue-700/50 rounded-full transition-colors cursor-pointer">AI assistant</li>
              <li className="px-3 py-1 hover:bg-blue-700/50 rounded-full transition-colors cursor-pointer">My trips</li>
              <li className="px-3 py-1 hover:bg-blue-700/50 rounded-full transition-colors cursor-pointer">Preferences</li>
              <li className="px-3 py-1 hover:bg-blue-700/50 rounded-full transition-colors cursor-pointer">Compare</li>
              <li className="px-3 py-1 hover:bg-blue-700/50 rounded-full transition-colors cursor-pointer">Settings</li>
              <li className="px-3 py-1 hover:bg-blue-700/50 rounded-full transition-colors cursor-pointer">Support</li>
            </ul>
            <div className="flex items-center space-x-2">
              <div className="flex items-center bg-blue-800/50 px-3 py-1 rounded-full">
                <MapPin size={16} className="mr-1" />
                <span className="text-sm">Kochi</span>
              </div>
              <div className="bg-blue-800/50 p-2 rounded-full cursor-pointer">
                <Settings size={20} />
              </div>
              <div className="bg-blue-800/50 p-2 rounded-full cursor-pointer">
                <Grid size={20} />
              </div>
            </div>
          </nav>
        </header>
        
        <main className="container mx-auto px-4 py-16 mt-8">
          <h1 className="text-6xl font-bold mb-6">Welcome To Hassle-Free Travel</h1>
          <div className="flex items-center space-x-4 mb-4">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 18H17V16H7V18ZM16.5 11C15.7 11 15 10.3 15 9.5V8H9V9.5C9 10.3 8.3 11 7.5 11S6 10.3 6 9.5V6C6 4.9 6.9 4 8 4H16C17.1 4 18 4.9 18 6V9.5C18 10.3 17.3 11 16.5 11Z" fill="currentColor"/>
            </svg>
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2C10.67 2 10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z" fill="currentColor"/>
            </svg>
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 14H5V19H7V14ZM19 14H17V19H19V14ZM22 9V19C22 20.1 21.1 21 20 21H4C2.9 21 2 20.1 2 19V9C2 7.9 2.9 7 4 7H7V5C7 3.9 7.9 3 9 3H15C16.1 3 17 3.9 17 5V7H20C21.1 7 22 7.9 22 9ZM15 5H9V7H15V5Z" fill="currentColor"/>
            </svg>
          </div>
          <p className="text-xl mb-8 max-w-2xl">
            Tired of planning trips? Stressed about finding the best itineraries?
            Voyager AI has got your back! Now sit back and relax while our intelligent
            assistant creates the most optimal trip plan for you. Booking and
            scheduling all within few taps.
          </p>
          <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-bold hover:bg-blue-100 transition-colors">
            Let's Plan
          </button>
        </main>
      </div>
    </div>
  );
};

export default LandingPage;
