"use client";

import { useEffect, useState } from "react";
import {
  DollarSign,
  Euro,
  PoundSterling,
  TrendingUp,
  Coins,
  CreditCard,
  BadgeIndianRupee,
  Banknote,
} from "lucide-react";

export function FinanceBackground() {
  const [items, setItems] = useState<any[]>([]);
  const [mounted, setMounted] = useState(false);

  const icons = [
    DollarSign,
    Euro,
    PoundSterling,
    BadgeIndianRupee,
    TrendingUp,
    Coins,
  ];

  useEffect(() => {
    setMounted(true);
    const colors = [
      "text-blue-500",
      "text-emerald-500",
      "text-purple-500",
      "text-cyan-500",
      "text-indigo-500",
    ];
    const newItems = [...Array(25)].map((_, i) => ({
      id: i,
      Icon: icons[Math.floor(Math.random() * icons.length)],
      left: Math.floor(Math.random() * 100),
      delay: Math.floor(Math.random() * 20),
      duration: 20 + Math.floor(Math.random() * 20),
      size: 8 + Math.floor(Math.random() * 20),
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setItems(newItems);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="fixed inset-0 z-50 pointer-events-none overflow-hidden select-none"
      aria-hidden="true"
    >
      {items.map((item) => {
        const Icon = item.Icon;
        return (
          <div
            key={item.id}
            className="absolute animate-float-up opacity-[0.015] dark:opacity-[0.03]"
            style={{
              left: `${item.left}%`,
              bottom: "-100px",
              animationDelay: `${item.delay}s`,
              animationDuration: `${item.duration}s`,
            }}
          >
            <Icon
              style={{
                width: item.size,
                height: item.size,
              }}
              className={item.color}
            />
          </div>
        );
      })}
      <style jsx>{`
        @keyframes float-up {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.05;
          }
          90% {
            opacity: 0.05;
          }
          100% {
            transform: translateY(-120vh) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-float-up {
          animation-name: float-up;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
}
