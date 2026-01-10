'use client';

import { useEffect, useState } from 'react';

interface XPNotificationProps {
  amount: number;
  description?: string;
  onComplete?: () => void;
}

export function XPNotification({
  amount,
  description,
  onComplete,
}: XPNotificationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Animate in
    requestAnimationFrame(() => setIsVisible(true));

    // Float up and fade out
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        onComplete?.();
      }, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`
        fixed z-50 pointer-events-none
        transform transition-all duration-500 ease-out
        ${isVisible && !isExiting ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
        ${isExiting ? '-translate-y-8' : ''}
      `}
      style={{
        top: '20%',
        left: '50%',
        transform: `translateX(-50%) ${isExiting ? 'translateY(-32px)' : 'translateY(0)'}`,
      }}
    >
      <div className="flex flex-col items-center">
        {/* XP amount with glow */}
        <div
          className="text-4xl font-bold text-yellow-400 animate-pulse"
          style={{
            textShadow: '0 0 20px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 215, 0, 0.4)',
          }}
        >
          +{amount} XP
        </div>

        {/* Description */}
        {description && (
          <div className="text-sm text-white/70 mt-1">
            {description}
          </div>
        )}
      </div>
    </div>
  );
}

// Container for multiple XP notifications stacking
interface XPNotificationItem {
  id: string;
  amount: number;
  description?: string;
}

interface XPNotificationContainerProps {
  notifications: XPNotificationItem[];
  onRemove: (id: string) => void;
}

export function XPNotificationContainer({
  notifications,
  onRemove,
}: XPNotificationContainerProps) {
  return (
    <>
      {notifications.map((notification, index) => (
        <div
          key={notification.id}
          className="fixed z-50 pointer-events-none"
          style={{
            top: `${20 + index * 8}%`,
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <XPNotification
            amount={notification.amount}
            description={notification.description}
            onComplete={() => onRemove(notification.id)}
          />
        </div>
      ))}
    </>
  );
}

// Hook for managing XP notifications
import { useCallback, useRef } from 'react';

export function useXPNotifications() {
  const [notifications, setNotifications] = useState<XPNotificationItem[]>([]);
  const counterRef = useRef(0);

  const showXPGain = useCallback((amount: number, description?: string) => {
    const id = `xp-${counterRef.current++}`;
    setNotifications((prev) => [...prev, { id, amount, description }]);
  }, []);

  const removeNotification = useCallback((id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);

  return {
    notifications,
    showXPGain,
    removeNotification,
  };
}
