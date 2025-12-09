import React from 'react'
import { assets } from '../assets/assets'

const LoadingScreen = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center animate-fadeOut">
      <div className="text-center">
        {/* Logo with pulse animation */}
        <img 
          src={assets.logo} 
          alt="Logo" 
          className="w-48 mb-8 animate-pulse mx-auto"
        />
        
        {/* Loading spinner */}
        <div className="flex justify-center items-center space-x-2">
          <div className="w-3 h-3 bg-black rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-3 h-3 bg-black rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 bg-black rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
        
        {/* Loading text */}
        <p className="mt-6 text-gray-600 text-sm tracking-widest animate-pulse">LOADING...</p>
      </div>
    </div>
  )
}

export default LoadingScreen
