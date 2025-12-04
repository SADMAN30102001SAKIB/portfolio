'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import { contact } from '@/data/portfolio';

interface EmailCopyContextType {
  copyEmail: () => void;
}

const EmailCopyContext = createContext<EmailCopyContextType | undefined>(undefined);

export function useEmailCopy() {
  const context = useContext(EmailCopyContext);
  if (!context) {
    throw new Error('useEmailCopy must be used within EmailCopyProvider');
  }
  return context;
}

export function EmailCopyProvider({ children }: { children: ReactNode }) {
  const [showToast, setShowToast] = useState(false);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2500);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = contact.email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2500);
    }
  }, []);

  return (
    <EmailCopyContext.Provider value={{ copyEmail }}>
      {children}
      
      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 50, x: '-50%' }}
            className="fixed bottom-6 left-1/2 z-[100] flex items-center gap-3 px-5 py-3 bg-green-500/20 border border-green-500/50 text-green-400 rounded-xl backdrop-blur-md shadow-lg"
          >
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <Check className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="font-medium text-sm">Email copied to clipboard!</p>
              <p className="text-xs text-green-400/70">{contact.email}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </EmailCopyContext.Provider>
  );
}
