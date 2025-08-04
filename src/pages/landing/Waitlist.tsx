import { useEffect, useState } from "react";
import Button from "../../components/ui/Button";

const Waitlist = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // 🛠️ Set your D-DAY here (Year, Month - 1, Day, Hour, Min)
  const targetDate = new Date("2025-12-31T00:00:00");

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer(); // Run once on mount
    const timerId = setInterval(updateTimer, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="w-full pt-20 sm:pt-40 pb-20 px-4">
      <div className="flex flex-col items-center gap-16 max-w-[1200px] mx-auto">
        <div className="text-center max-w-4xl">
          <h1 className="font-semibold text-4xl sm:text-6xl leading-tight capitalize">
            Early access to new investment opportunities
          </h1>
          <p className="text-lg mt-6">Coming soon</p>
        </div>

        <div className="w-full max-w-3xl flex flex-col sm:flex-row gap-4 sm:gap-6">
          <div className="relative w-full sm:w-[65%]">
            <label className="text-sm absolute -top-3 bg-white left-5 px-2 py-0.5 capitalize">
              Email address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-[#F9F9F9] text-xl w-full h-16 border border-gray-300 rounded-lg px-4 outline-none"
            />
          </div>
          <Button
            text="Join The Waitlist"
            textColor="#ffffff"
            borderColor="#007F8E"
            backgroundColor="#007F8E"
            px="px-6"
            py="py-4"
            className="w-fit"
          />
        </div>

        <div className="w-full max-w-5xl mt-16 bg-[#C4E2EA] rounded-xl shadow-xl px-4 py-10">
          <div className="grid grid-cols-4 sm:grid-cols-7 gap-4 justify-items-center text-center">
            <CountdownBlock label="Days" value={timeLeft.days} />
            <Colon />
            <CountdownBlock label="Hours" value={timeLeft.hours} />
            <Colon />
            <CountdownBlock label="Minutes" value={timeLeft.minutes} />
            <Colon />
            <CountdownBlock label="Seconds" value={timeLeft.seconds} />
          </div>
        </div>
      </div>
    </div>
  );
};

interface CountdownBlockProps {
  label: string;
  value: number;
}

const CountdownBlock: React.FC<CountdownBlockProps> = ({ label, value }) => (
  <div className="flex flex-col items-center">
    <span className="text-4xl sm:text-5xl font-semibold text-[#007F8E]">
      {String(value).padStart(2, "0")}
    </span>
    <p className="text-sm sm:text-base font-medium">{label}</p>
  </div>
);

const Colon: React.FC = () => (
  <span className="text-4xl sm:text-5xl font-semibold text-[#007F8E] hidden sm:block">
    :
  </span>
);

export default Waitlist;
