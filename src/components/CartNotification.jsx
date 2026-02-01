import { useState, useEffect } from 'react';

export default function CartNotification (){
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const handleCartAdded = (event) => {
      setNotification({
        message: `✓ ${event.detail.quantity}x ${event.detail.menu} ditambahkan ke keranjang`,
        visible: true
      });

      setTimeout(() => {
        setNotification(prev => ({ ...prev, visible: false }));
      }, 3000);
    };

    window.addEventListener('cart:added', handleCartAdded);

    return () => {
      window.removeEventListener('cart:added', handleCartAdded);
    };
  }, []);

  if (!notification || !notification.visible) return null;

  return (
    <>
    <div className="fixed top-4 right-4 z-50 animate-fade-in-down">
      <div className="bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-2">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span>{notification.message}</span>
      </div>
    </div>
    </>
  )
}