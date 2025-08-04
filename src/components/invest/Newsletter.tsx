import Button from "../ui/Button";

const Newsletter = () => {
  return (
    <div className="w-full relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px] overflow-hidden">
      {/* Gradient Overlay - Responsive direction change */}
      <div className="absolute inset-0 z-20 
        bg-[linear-gradient(to_bottom,_#007F8E_0%,_#007F8E_70%,_transparent_100%)] 
        sm:bg-[linear-gradient(to_right,_#007F8E_0%,_#007F8E_60%,_transparent_100%)]" />

      {/* Responsive Image */}
      <img
        src="/assets/invest/invest-newsletter.jpg"
        className="w-full h-full sm:w-1/2 sm:h-full absolute right-0 bottom-0 z-0 object-cover"
        alt="Invest in Nigeria's future"
        loading="lazy"
      />

      {/* Text Content - Responsive positioning */}
      <div className="absolute z-30 text-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-28 
        top-1/2 sm:top-[100px] transform -translate-y-1/2 sm:translate-y-0 
        w-full sm:w-[60%] md:w-[55%] lg:w-[60%]">
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
            <h6 className="text-sm sm:text-base md:text-lg font-medium leading-snug">
              Join thousands of investors
            </h6>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-tight sm:leading-snug md:leading-normal">
              Start Investing Today and transform Nigeria&apos;s urban future
            </h2>
          </div>
          
          {/* Responsive Form */}
          <form className="w-full flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5">
            <input
              type="email"
              placeholder="Email Address"
              required
              className="flex-1 min-w-0 rounded-lg border border-white font-medium 
                text-base sm:text-lg md:text-xl leading-snug 
                px-4 sm:px-5 md:px-6 py-3 sm:py-4 md:py-5 
                bg-transparent placeholder:text-white/80 outline-none
                focus:ring-2 focus:ring-white/50"
            />
            <Button
              text="Join Our Newsletter"
              textColor="#000000"
              borderColor="#FFFFFF"
              backgroundColor="#FFFFFF"
              px="px-4 sm:px-5 md:px-6"
              py="py-3 sm:py-4 md:py-5"
              className="w-full sm:w-auto text-center"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;