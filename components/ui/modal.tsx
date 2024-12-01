'use client'

import { useEffect, useState } from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
    className?: string;
  }
  
  const Modal: React.FC<ModalProps> = ({ 
    isOpen, 
    onClose, 
    children, 
    title, 
    className = '' 
  }) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    // Prevent body scroll when modal is open
    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
          // Slight delay to ensure transition classes are applied
          const timer = setTimeout(() => {
            setIsVisible(true);
            document.body.style.overflow = 'hidden';
          }, 10);
          return () => clearTimeout(timer);
        } else {
          setIsVisible(false);
          const timer = setTimeout(() => {
            document.body.style.overflow = 'unset';
          }, 300); // Match this to transition duration
          return () => clearTimeout(timer);
        }
      }, [isOpen]);
  
    // Close modal on escape key
    useEffect(() => {
      const handleEscapeKey = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          onClose();
        }
      };
  
      if (isOpen) {
        document.addEventListener('keydown', handleEscapeKey);
      }
  
      return () => {
        document.removeEventListener('keydown', handleEscapeKey);
      };
    }, [isOpen, onClose]);
  
    // Prevent event propagation to stop modal from closing when clicking inside
    const handleContentClick = (e: React.MouseEvent) => {
      e.stopPropagation();
    };
  
    if (!isOpen && !isVisible) return null;
  
    return (
        <div 
          className={`
            fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto p-2 
            transition-all duration-300 ease-in-out
            ${isOpen && isVisible 
              ? 'bg-black bg-opacity-50 opacity-100' 
              : 'bg-black bg-opacity-0 opacity-0'
            }
          `}
          onClick={onClose}
        >
          <div 
            className={`
              relative w-auto max-w-3xl mx-auto my-6 max-h-screen p-2
              transform transition-all duration-300 ease-in-out
              ${isOpen && isVisible 
                ? 'scale-100 opacity-100' 
                : 'scale-95 opacity-0'
              }
              ${className}
            `}
            onClick={handleContentClick}
          >
            <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
              {/* Header */}
              {title && (
                <div className="flex items-center justify-between px-2 rounded-t bg-gray-600">
                  <h3 className="font-poppins font-semibold text-white">{title}</h3>
                  <button
                    className="float-right p-1 ml-auto text-2xl font-semibold leading-none text-white bg-transparent border-0 outline-none opacity-50 hover:opacity-75 focus:outline-none"
                    onClick={onClose}
                  >
                    ×
                  </button>
                </div>
              )}
              
              <div className="relative flex-auto px-2 pt-1 pb-2 bg-gray-600 rounded-b">
                {children}
              </div>
            </div>
          </div>
        </div>
      );
  };

  export default Modal