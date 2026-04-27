'use client';
import { useEffect, useState } from 'react';

export default function AvailabilityClock() {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [workingHours, setWorkingHours] = useState<'online' | 'available' | 'offline'>('available');

  useEffect(() => {
    const tick = () => {
      // Get current time in IST (UTC+5:30)
      const now = new Date();
      const istOffset = 5.5 * 60; // minutes
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const ist = new Date(utc + istOffset * 60000);

      // Format time
      const hours = ist.getHours();
      const minutes = ist.getMinutes().toString().padStart(2, '0');
      const seconds = ist.getSeconds().toString().padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const display12 = hours % 12 || 12;
      setTime(`${display12}:${minutes}:${seconds} ${ampm}`);

      // Format date
      const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
      const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      setDate(`${days[ist.getDay()]}, ${months[ist.getMonth()]} ${ist.getDate()}`);

      // Working hours logic
      const dayOfWeek = ist.getDay(); // 0=Sun, 6=Sat
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
      if (isWeekend) {
        setWorkingHours('available'); // available on weekends for async
      } else if (hours >= 9 && hours < 19) {
        setWorkingHours('online'); // working hours IST
      } else if (hours >= 19 && hours < 22) {
        setWorkingHours('available'); // evening, responsive
      } else {
        setWorkingHours('offline'); // sleeping
      }
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  const statusConfig = {
    online: { label: 'In working hours · Likely responsive', dot: '#22C55E', text: 'text-green-400' },
    available: { label: 'Available · Will respond within hours', dot: '#C9A96E', text: 'text-[#C9A96E]' },
    offline: { label: 'Offline · Will respond next morning IST', dot: '#6B7280', text: 'text-white/40' },
  };

  const status = statusConfig[workingHours as keyof typeof statusConfig];

  return (
    <div className="flex flex-col items-center gap-3 py-8">
      {/* Clock display */}
      <div className="font-['Cormorant_Garamond'] text-5xl md:text-6xl font-semibold text-goldLight tracking-tight tabular-nums">
        {time}
      </div>

      {/* Date + timezone */}
      <div className="flex items-center gap-2 text-white/35 text-[11px] tracking-widest uppercase">
        <span>{date}</span>
        <span className="text-gold/30">·</span>
        <span>IST · UTC+5:30</span>
        <span className="text-gold/30">·</span>
        <span>West Bengal, India</span>
      </div>

      {/* Status indicator */}
      <div className="flex items-center gap-2 mt-1">
        <span
          className="w-2 h-2 rounded-full inline-block"
          style={{
            backgroundColor: status.dot,
            boxShadow: `0 0 6px ${status.dot}`,
            animation: workingHours === 'online' ? 'pulse 2s infinite' : 'none'
          }}
        />
        <span className={`text-[11px] tracking-wide ${status.text}`}>
          {status.label}
        </span>
      </div>

      {/* Timezone converter hint */}
      <div className="text-white/20 text-[10px] mt-1 tracking-wide">
        San Francisco (PST) · New York (EST) · London (GMT) · Berlin (CET) · Singapore (SGT)
      </div>
    </div>
  );
}

