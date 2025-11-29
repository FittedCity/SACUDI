import { Link } from "react-router-dom";

const DeveloperSignUp = () => {
  return (
    <div className="overflow-hidden h-screen w-full flex">
      <div className="w-[50%] overflow-y-auto relative pl-14 scrollbar-hide">
        <Link to={"/"}>
          <img
            src="/assets/logo/sacudi-logo.png"
            className="w-[211px] pt-12"
            alt="logo"
          />
        </Link>

        <div className="mt-14 w-[478px] flex flex-col gap-[18px]">
          <h1 className="font-semibold text-[36px] leading-[100%]">
            Create Your Developers Account
          </h1>
          <p className="font-[400] text-[20px] leading-[30px]">
            Submit a project as a developer
          </p>
        </div>

        <div className="mt-10 py-1">
          <div className="w-[540px] flex flex-col gap-[25px]">
            <div className="flex gap-3 w-full py-3 items-center rounded-[8px] justify-center bg-[#F9F9F9] border-[1px] border-[#E2E2E2]">
              <span className="text-[16px] leading-[24px] font-[400]">
                Continue With Google{" "}
              </span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.36068 0.789433C5.9627 1.62131 3.89469 3.20024 2.46041 5.29431C1.02612 7.38838 0.30116 9.8872 0.392005 12.4237C0.482851 14.9603 1.38472 17.4008 2.96513 19.3869C4.54555 21.373 6.72121 22.8 9.17255 23.4582C11.1599 23.971 13.2421 23.9935 15.2401 23.5238C17.05 23.1173 18.7234 22.2476 20.0963 21.0001C21.5252 19.662 22.5624 17.9597 23.0963 16.0763C23.6767 14.0282 23.7799 11.8743 23.3982 9.78006H12.2382V14.4094H18.7013C18.5721 15.1478 18.2953 15.8525 17.8875 16.4814C17.4796 17.1102 16.949 17.6504 16.3276 18.0694C15.5383 18.5915 14.6487 18.9428 13.7157 19.1007C12.7799 19.2747 11.8202 19.2747 10.8844 19.1007C9.93603 18.9046 9.03886 18.5132 8.25005 17.9513C6.98283 17.0543 6.03132 15.7799 5.5313 14.3101C5.02283 12.8127 5.02283 11.1893 5.5313 9.69193C5.88722 8.64234 6.47561 7.68669 7.25255 6.89631C8.14166 5.97521 9.2673 5.3168 10.506 4.99333C11.7446 4.66985 13.0485 4.6938 14.2744 5.06256C15.2321 5.35654 16.1079 5.87019 16.8319 6.56256C17.5607 5.83756 18.2882 5.11068 19.0144 4.38193C19.3894 3.99006 19.7982 3.61693 20.1676 3.21568C19.0624 2.1872 17.7651 1.38691 16.35 0.860683C13.7732 -0.0749616 10.9538 -0.100106 8.36068 0.789433Z"
                  fill="white"
                />
                <path
                  d="M8.36058 0.789367C10.9535 -0.100776 13.7729 -0.0762934 16.35 0.858742C17.7652 1.38855 19.0619 2.19269 20.1656 3.22499C19.7906 3.62624 19.395 4.00124 19.0125 4.39124C18.285 5.11749 17.5581 5.84124 16.8318 6.56249C16.1078 5.87012 15.232 5.35648 14.2743 5.06249C13.0488 4.69244 11.745 4.66711 10.506 4.98926C9.26699 5.31141 8.14067 5.96861 7.25058 6.88874C6.47364 7.67912 5.88525 8.63477 5.52933 9.68437L1.64246 6.67499C3.03372 3.91604 5.44261 1.80566 8.36058 0.789367Z"
                  fill="#E33629"
                />
                <path
                  d="M0.611279 9.65605C0.820194 8.62067 1.16704 7.61798 1.64253 6.6748L5.5294 9.69168C5.02093 11.1891 5.02093 12.8124 5.5294 14.3098C4.2344 15.3098 2.93878 16.3148 1.64253 17.3248C0.452186 14.9554 0.0891526 12.2557 0.611279 9.65605Z"
                  fill="#F8BD00"
                />
                <path
                  d="M12.2381 9.77832H23.3981C23.7799 11.8726 23.6766 14.0264 23.0963 16.0746C22.5623 17.958 21.5252 19.6602 20.0963 20.9983C18.8419 20.0196 17.5819 19.0483 16.3275 18.0696C16.9494 17.6501 17.4802 17.1094 17.8881 16.4798C18.296 15.8503 18.5726 15.1448 18.7013 14.4058H12.2381C12.2363 12.8646 12.2381 11.3214 12.2381 9.77832Z"
                  fill="#587DBD"
                />
                <path
                  d="M1.64062 17.3251C2.93687 16.3251 4.2325 15.3201 5.5275 14.3101C6.02851 15.7804 6.98138 17.0549 8.25 17.9513C9.04127 18.5106 9.94037 18.8988 10.89 19.0913C11.8257 19.2653 12.7855 19.2653 13.7213 19.0913C14.6542 18.9334 15.5439 18.5821 16.3331 18.0601C17.5875 19.0388 18.8475 20.0101 20.1019 20.9888C18.7292 22.237 17.0558 23.1073 15.2456 23.5144C13.2476 23.9841 11.1655 23.9616 9.17813 23.4488C7.60632 23.0291 6.13814 22.2893 4.86563 21.2757C3.51874 20.2063 2.41867 18.8588 1.64062 17.3251Z"
                  fill="#319F43"
                />
              </svg>
            </div>
            <div className="px-5 relative">
              <div className="h-[1px] bg-[#E2E2E2]" />
              <span className="text-[16px] leading-[24px] text-[#959393] absolute left-[45%] bg-[#ffffff] top-[-0.8rem] px-3">
                Or
              </span>
            </div>
            <div className="flex gap-3 w-full py-3 items-center rounded-[8px] justify-center bg-[#F9F9F9] border-[1px] border-[#E2E2E2]">
              <span className="text-[16px] leading-[24px] font-[400]">
                Continue with Email{" "}
              </span>
              <svg
                width="19"
                height="15"
                viewBox="0 0 19 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 0H16C16.7956 0 17.5587 0.316071 18.1213 0.87868C18.6839 1.44129 19 2.20435 19 3V12C19 12.7956 18.6839 13.5587 18.1213 14.1213C17.5587 14.6839 16.7956 15 16 15H3C2.20435 15 1.44129 14.6839 0.87868 14.1213C0.316071 13.5587 0 12.7956 0 12V3C0 2.20435 0.316071 1.44129 0.87868 0.87868C1.44129 0.316071 2.20435 0 3 0ZM3 1C2.5 1 2.06 1.17 1.72 1.47L9.5 6.5L17.28 1.47C16.94 1.17 16.5 1 16 1H3ZM9.5 7.71L1.13 2.28C1.05 2.5 1 2.75 1 3V12C1 12.5304 1.21071 13.0391 1.58579 13.4142C1.96086 13.7893 2.46957 14 3 14H16C16.5304 14 17.0391 13.7893 17.4142 13.4142C17.7893 13.0391 18 12.5304 18 12V3C18 2.75 17.95 2.5 17.87 2.28L9.5 7.71Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
          <form action="" className="w-[540px] mt-16 pt-2 flex flex-col gap-8">
            <div className="flex items-center gap-[20px]">
              <div className="w-[50%] relative">
                <span className="font-[400px] text-[14px] leading-[14px] absolute top-[-0.7rem] left-[34px] bg-[#ffffff] py-[4px] px-[10px]">
                  First Name
                </span>
                <input
                  type="text"
                  className="border-[1px] w-full border-[#83838380] rounded-[8px] text-lg outline-none py-3 px-4 bg-[#F9F9F9]"
                />
              </div>
              <div className="w-[50%] relative">
                <span className="font-[400px] text-[14px] leading-[14px] absolute top-[-0.7rem] left-[34px] bg-[#ffffff] py-[4px] px-[10px]">
                  Last Name
                </span>
                <input
                  type="text"
                  className="border-[1px] w-full border-[#83838380] rounded-[8px] text-lg outline-none py-3 px-4 bg-[#F9F9F9]"
                />
              </div>
            </div>
            <div className="w-full relative">
              <span className="font-[400px] text-[14px] leading-[14px] absolute top-[-0.7rem] left-[34px] bg-[#ffffff] py-[4px] px-[10px]">
                Role
              </span>
              <div className="border-[1px] w-full border-[#83838380] rounded-[8px] text-lg outline-none py-5 px-6 bg-[#F9F9F9] flex items-center justify-between ">
                <p className="text-[14px] text-[#838383] leading-[19px] font-[400]">
                  Developer
                </p>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.83329 8.33333L9.99996 12.5L14.1666 8.33333"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="flex items-center gap-[20px]">
              <div className="w-[50%] relative">
                <span className="font-[400px] text-[14px] leading-[14px] absolute top-[-0.7rem] left-[34px] bg-[#ffffff] py-[4px] px-[10px]">
                  Organization Name
                </span>
                <input
                  type="text"
                  className="border-[1px] w-full border-[#83838380] rounded-[8px] text-lg outline-none py-3 px-4 bg-[#F9F9F9]"
                />
              </div>
              <div className="w-[50%] relative">
                <span className="font-[400px] text-[14px] leading-[14px] absolute top-[-0.7rem] left-[34px] bg-[#ffffff] py-[4px] px-[10px]">
                  Project Category
                </span>
                <div className="border-[1px] w-full border-[#83838380] rounded-[8px] text-lg outline-none py-5 px-6 bg-[#F9F9F9] flex items-center justify-between ">
                  <p className="text-[14px] text-[#838383] leading-[19px] font-[400]">
                    Developer
                  </p>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.83329 8.33333L9.99996 12.5L14.1666 8.33333"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full relative">
              <span className="font-[400px] text-[14px] leading-[14px] absolute top-[-0.7rem] left-[34px] bg-[#ffffff] py-[4px] px-[10px]">
                Email Address
              </span>
              <input
                type="text"
                className="border-[1px] w-full border-[#83838380] rounded-[8px] text-lg outline-none py-3 px-4 bg-[#F9F9F9]"
              />
            </div>
            <div className="w-full relative">
              <span className="font-[400px] text-[14px] leading-[14px] absolute top-[-0.7rem] left-[34px] bg-[#ffffff] py-[4px] px-[10px]">
                Website
              </span>
              <input
              placeholder="optional"
                type="text"
                className="border-[1px] w-full border-[#83838380] rounded-[8px] text-lg outline-none py-3 px-4 bg-[#F9F9F9] placeholder:text-[#838383] placeholder:pl-10"
              />
            </div>
          </form>
        </div>
      </div>
      <div
        className="w-[50%] h-full bg-center bg-cover relative"
        style={{ backgroundImage: "url('/assets/auth/developer.jpg')" }}
      >
        <div className="w-full h-full bg-[#007F8E66]" />
        <div className="absolute top-10 right-20 text-[#ffffff] flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <h1 className="font-medium text-[40px] leading-[43px] tracking-normal">
              I want to
            </h1>
            <span className="w-[412px] bg-[#ffffff] rounded-[8px] py-[11px] px-[18px] italic text-[40px] leading-[49px] font-[600] text-[#007F8E]">
              Submit a Project for Funding
            </span>
          </div>
          <p className="text-right italic font-[500] text-[20px] leading-[28px]">
            Access capital and support for urban development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeveloperSignUp;
