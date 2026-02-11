import { useState, useEffect } from 'react';

export default function CartNotification() {
  const [notification, setNotification] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleCartAdded = (event) => {
      setNotification({
        message: `✓ ${event.detail.quantity}x ${event.detail.menu} ditambahkan ke keranjang`,
        visible: true
      });

      setIsVisible(true);

      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => {
          setNotification(null);
        }, 300);
      }, 1000);

      return () => clearTimeout(timer);
    };

    window.addEventListener('cart:added', handleCartAdded);

    return () => {
      window.removeEventListener('cart:added', handleCartAdded);
    };
  }, []);

  if (!notification || !isVisible) return null;

  return (
    <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-sm">
      <div className={`bg-linear-to-r from-green-500 to-emerald-600 text-white px-5 py-4 rounded-xl shadow-2xl border border-white/20 flex items-center gap-3 mx-4 transition-all duration-300 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}`}>
        <div className="flex-1">
          <p className="font-medium text-sm">{notification.message}</p>
        </div>
      </div>
    </div>
  );
}