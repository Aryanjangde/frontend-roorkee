import { useRouter } from "next/router";
import { FaRegFileAlt } from "react-icons/fa";
import { HiOutlineBriefcase } from "react-icons/hi";
import { PiCurrencyInr } from "react-icons/pi";

const HomePage = () => {
  const router = useRouter();

  const handleSchemesClick = () => {
    router.push("/HeroPage");
  };

  const iconStyle = "w-[33.173px] h-[33.173px] flex-shrink-0 opacity-50";

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black " style={{ maxWidth: "80%", margin: "0 auto" }}>
        {/* First Child */}
        <div className="text-center mt-[-200px] py-8">
          <h1
            className="text-3xl font-bold mb-"
            style={{
              color: "var(--Gray-100, #0A0A0A)",
              fontFamily: "Inter",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "normal",
              textAlign: "center",
            }}
          >
            Welcome <span></span>
          </h1>
          <p
            className="text-lg"
            style={{
              alignSelf: "stretch",
              color: "var(--Gray-100, #0A0A0A)",
              textAlign: "center",
              fontFamily: "Inter",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "28.8px", // 180%
            }}
          >
            Find the right govt benefit, employment opportunity and scholarships
            for you here.
          </p>
          <div className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="428"
              height="7"
              viewBox="0 0 428 7"
              fill="none"
            >
              <path
                d="M175.484 1.37751C176.595 1.32243 177.791 1.27523 179.159 1.32261C181.523 1.40356 183.745 1.44903 185.824 1.28565C186.109 1.26203 186.907 1.25224 187.391 1.26016C189.1 1.28392 190.525 1.25053 192.148 1.2073C193.345 1.17586 195.025 1.17401 196.478 1.16427C203.599 1.12143 210.522 0.956434 217.842 1.03773C220.577 1.06748 223.483 1.03617 226.303 1.01272C229.892 0.983429 233.424 0.954131 237.042 0.995763C237.754 1.00369 238.609 1.00376 239.264 0.986071C242.995 0.87798 246.727 0.949174 250.459 0.978993C252.652 0.996881 254.845 1.05811 256.896 0.928227C257.438 0.892803 258.691 0.904712 259.631 0.906749C264.929 0.924859 270.199 0.950851 275.469 0.965018C277.15 0.969079 279.03 0.973151 280.511 0.927943C283.132 0.845384 285.724 0.865275 288.288 0.89304C291.45 0.928729 294.555 0.917129 297.717 0.897653C300.879 0.876208 304.126 0.866587 307.202 0.955464C308.228 0.985089 309.424 0.991085 310.507 1.0148C313.469 1.07806 316.403 1.09797 319.337 0.991795C320.391 1.03915 321.274 1.09044 322.271 1.12204C323.61 1.16548 325.12 1.23257 326.459 1.22084C329.051 1.20133 331.301 1.23104 333.523 1.31394C335.375 1.385 337.483 1.37136 338.907 1.28872C341.528 1.13523 344.205 1.18074 346.94 1.22427C351.384 1.29552 355.885 1.3116 360.385 1.3198C361.895 1.32188 363.319 1.31213 364.772 1.35755C365.969 1.3931 367.336 1.41684 368.618 1.4189C372.065 1.42506 374.742 1.52966 377.107 1.68942C377.135 1.72685 377.249 1.76626 377.192 1.80369C377.021 1.91992 377.847 1.96726 379.442 1.96737C380.155 2.04426 380.981 2.10145 382.604 2.0602C381.835 1.94784 380.325 2.00487 379.271 1.97524C378.531 1.88062 377.819 1.78404 377.107 1.68745C378.274 1.71314 379.357 1.80187 380.667 1.70346C382.206 1.59127 383.886 1.63473 385.225 1.71364C386.649 1.79648 387.789 1.90295 389.042 1.99958L389.184 1.98777C388.444 1.99166 387.732 1.99555 386.963 2.0014C386.963 2.07824 386.963 2.13931 386.963 2.20827C385.624 2.29092 384.171 2.23565 382.747 2.21388C379.642 2.1644 376.736 2.05978 373.318 2.09696C372.463 2.10675 371.381 2.00029 369.928 1.92138C369.273 1.92133 367.963 1.91927 366.681 1.92115C364.459 1.92493 356.967 1.80224 354.859 1.72723C354.517 1.71538 354.147 1.6858 353.919 1.6917C351.07 1.7506 348.307 1.68539 345.516 1.67337C344.975 1.67136 344.319 1.67919 343.892 1.69886C338.651 1.93294 332.925 1.80447 327.399 1.79816C325.319 1.71132 322.955 1.7545 320.733 1.73267C317.001 1.69694 313.184 1.7538 309.481 1.67079C308.655 1.653 307.573 1.66475 306.69 1.68241C302.673 1.7629 298.941 1.65427 294.811 1.63822C296.349 1.52012 296.349 1.52012 304.696 1.48526C302.759 1.4339 301.106 1.38649 299.454 1.34697C298.543 1.32524 294.013 1.42145 292.703 1.47652C288.06 1.67517 283.046 1.75756 277.606 1.69413C276.495 1.68026 275.298 1.66638 274.33 1.62888C271.795 1.52822 269.174 1.54576 266.639 1.60075C264.759 1.64198 262.992 1.64974 261.055 1.62793C259.004 1.60414 256.925 1.59414 254.902 1.65507C254.247 1.67472 253.364 1.69239 252.681 1.68052C247.382 1.58558 242.112 1.68765 236.928 1.71486C230.006 1.74983 223.027 1.76115 216.162 1.86705C212.516 1.92392 208.613 1.91379 204.853 1.91155C200.096 1.90924 195.396 1.91678 190.809 2.01496C189.727 2.03853 188.559 2.05618 187.448 2.05413C179.415 2.03582 171.781 2.20668 163.947 2.27705C160.016 2.31223 156.057 2.35726 152.097 2.36879C146.884 2.38221 142.156 2.52963 137.171 2.60217C132.755 2.66687 128.368 2.75128 123.982 2.8278C122.158 2.85919 120.364 2.8965 118.569 2.92789C117.287 2.94947 115.92 2.99075 114.724 2.97687C112.103 2.94516 109.881 2.99228 107.716 3.08275C107.232 3.10242 106.748 3.12603 106.206 3.13781C101.022 3.25762 95.8375 3.3794 90.6246 3.4933C85.2408 3.61309 79.8285 3.71515 74.6155 3.87239C69.9439 4.01194 64.9873 4.10418 60.2302 4.2319C56.8973 4.32032 53.65 4.42844 50.4311 4.53657C45.6739 4.69384 40.9168 4.85506 36.1881 5.02021C30.6334 5.21486 25.5059 5.45879 20.4639 5.71061C18.0141 5.83258 15.5928 5.9585 13.0006 6.06273C11.1205 6.13746 9.72471 6.22996 8.61376 6.35597C7.44583 6.48788 5.93607 6.60796 4.36934 6.75364C3.4578 6.70432 2.46081 6.67863 2.14747 6.63133C-0.359252 6.27258 0.580793 6.09731 5.8507 5.69774C7.10408 5.60326 8.89866 5.54232 10.3799 5.45968C12.26 5.35539 14.0546 5.25702 15.4789 5.10739C17.6723 4.87507 21.5464 4.75319 25.2496 4.66086C28.1836 4.58818 30.7474 4.49773 32.9977 4.35013C33.8238 4.297 34.7354 4.23402 35.7609 4.21439C39.4356 4.14176 42.4836 3.97845 45.9303 3.87625C51.4851 3.71115 57.3247 3.59336 62.5946 3.38096C63.3637 3.3495 64.5031 3.322 65.2723 3.33781C67.2663 3.37736 67.0668 3.22367 68.3487 3.19618C69.1463 3.21003 70.0579 3.22586 71.2258 3.24564C74.1599 3.02322 78.4327 2.9861 82.4207 2.92728C86.3803 2.86846 90.0265 2.77218 93.5302 2.64437C93.5302 2.67195 93.5587 2.6956 93.5587 2.72121C93.5302 2.69757 93.5017 2.67392 93.4733 2.6483C94.1284 2.62077 94.6981 2.57944 95.4103 2.56767C97.9455 2.52254 100.652 2.50894 103.045 2.44212C105.409 2.37531 107.688 2.34001 110.194 2.35989C111.59 2.37181 112.758 2.34628 113.812 2.2774C115.436 2.1731 117.572 2.13385 119.623 2.15173C122.443 2.17557 124.836 2.10679 127.286 2.04589C130.334 1.97124 133.325 1.89265 136.601 1.87909C137.541 1.87522 138.509 1.8615 139.364 1.83594C143.437 1.72 147.568 1.63361 152.04 1.65954C152.581 1.66352 153.237 1.65765 153.692 1.63798C157.253 1.48654 161.298 1.51835 165.172 1.49301C165.742 1.48911 166.454 1.50493 166.824 1.48525C169.502 1.35541 172.635 1.42656 175.541 1.38342C175.74 1.3795 175.911 1.37557 176.082 1.37165C176.225 1.36772 176.339 1.36181 176.481 1.35788C176.168 1.35983 175.826 1.36966 175.484 1.37751ZM364.601 1.5053C364.145 1.49344 363.519 1.45794 362.949 1.46381C361.667 1.47554 361.24 1.55037 361.354 1.63116C361.382 1.65677 361.981 1.69819 362.379 1.70019C363.633 1.70816 364.772 1.61761 364.601 1.5053ZM316.46 1.55702C315.492 1.38752 314.324 1.39138 313.042 1.45433C312.643 1.474 312.415 1.50945 311.931 1.5567C313.526 1.55681 314.78 1.5569 316.46 1.55702ZM281.081 1.20972C280.198 1.17616 279.685 1.14263 279.4 1.15049C278.944 1.16031 278.403 1.19967 278.346 1.22922C278.318 1.25483 279.087 1.31005 279.286 1.30416C279.856 1.29041 280.283 1.25497 281.081 1.20972ZM203.229 1.22189C202.432 1.20607 201.947 1.18633 201.52 1.19221C201.121 1.19612 200.808 1.22762 200.466 1.24533C200.893 1.25915 201.321 1.28676 201.748 1.28482C202.147 1.28485 202.546 1.25336 203.229 1.22189ZM337.711 1.5546C337.454 1.5467 337.198 1.53486 336.942 1.5309C336.828 1.52893 336.657 1.53876 336.514 1.54466C336.657 1.56044 336.856 1.59 336.97 1.58804C337.226 1.58412 337.454 1.5664 337.711 1.5546ZM369.358 1.67113C369.387 1.65931 369.415 1.64947 369.444 1.63765C369.131 1.63565 368.846 1.63169 368.532 1.6297C368.504 1.64152 368.447 1.66122 368.475 1.66122C368.76 1.66518 369.045 1.66914 369.358 1.67113ZM330.02 1.42796C329.877 1.42204 329.763 1.41612 329.621 1.4102C329.564 1.42005 329.421 1.43186 329.478 1.43778C329.535 1.44566 329.735 1.44961 329.849 1.45553C329.906 1.44765 329.963 1.43781 330.02 1.42796ZM324.038 1.37828C323.895 1.37827 323.753 1.37629 323.61 1.37628C323.753 1.38417 323.867 1.39403 324.009 1.40192C324.009 1.39404 324.038 1.38616 324.038 1.37828ZM345.231 1.46648L344.832 1.45069L344.775 1.47827L345.231 1.46648ZM105.637 2.54476L105.295 2.55655L105.637 2.5684L105.637 2.54476Z"
                fill="#151280"
              />
              <path
                d="M400.095 2.02402C401.405 2.19748 404.339 2.15828 407.358 2.26686C404.311 2.26664 402.317 2.27044 400.323 2.26439C398.072 2.25832 395.822 2.23845 393.6 2.23238C391.15 2.2263 389.783 2.13951 389.27 1.97989L389.128 1.99171C390.808 1.95636 392.489 1.96042 394.113 2.00979C396.107 2.06904 398.129 2.07509 400.209 2.02993L400.095 2.02402Z"
                fill="#151280"
              />
              <path
                d="M405.25 2.44205C408.555 2.44229 410.577 2.43455 412.543 2.44651C413.255 2.45051 413.91 2.50769 414.822 2.55306C410.919 2.62568 408.925 2.60781 405.25 2.44205Z"
                fill="#151280"
              />
              <path
                d="M427.583 2.70174C423.937 2.78028 423.937 2.78029 422.228 2.57133C423.823 2.55765 423.823 2.55765 427.583 2.70174Z"
                fill="#151280"
              />
            </svg>
          </div>
        </div>

        <h1 className="py-8">Choose what you want to explore further</h1>

        {/* Second Child */}
        <div className="flex flex-row items-center justify-center gap-4">
          <div className="flex flex-col items-stretch">
            <button
              className="relative flex flex-col items-start justify-center p-8 gap-4 flex-1 text-[#3431BB] font-semibold border border-[#3431BB] bg-white rounded-lg hover:bg-[#3431BB] group"
              onClick={handleSchemesClick}
            >
              <div className="absolute top-4 left-4 flex items-center justify-center w-16 h-16 p-[15.36px] rounded-full bg-[#EEF] group-hover:bg-white">
                <FaRegFileAlt
                  className={`${iconStyle} group-hover:text-blue-500`}
                />
              </div>
              <span className="mt-16 text-2xl font-semibold leading-normal group-hover:text-white">
                Govt. Benefits
              </span>
              <span className="text-[#616161] text-lg font-medium leading-[1.8] group-hover:text-gray-400">
                Browse 1000+ govt schemes at one place.
              </span>
            </button>
          </div>

          <div className="flex flex-col items-stretch">
            <button
              className="relative flex flex-col items-start justify-center p-8 gap-4 flex-1 text-[#3431BB] font-semibold border border-[#3431BB] bg-white rounded-lg hover:bg-[#3431BB] group"
              onClick={handleSchemesClick}
            >
              <div className="absolute top-4 left-4 flex items-center justify-center w-16 h-16 p-[15.36px] rounded-full bg-[#EEF] group-hover:bg-white">
                <HiOutlineBriefcase
                  className={`${iconStyle} group-hover:text-blue-500`}
                />
              </div>
              <span className="mt-16 text-2xl font-semibold leading-normal group-hover:text-white">
                Employment Opportunities
              </span>
              <span className="text-[#616161] text-lg font-medium leading-[1.8] group-hover:text-gray-400">
                Apply to job openings across 50+ departments.
              </span>
            </button>
          </div>

          <div className="flex flex-col items-stretch">
            <button
              className="relative flex flex-col items-start justify-center p-8 gap-4 flex-1 text-[#3431BB] font-semibold border border-[#3431BB] bg-white rounded-lg hover:bg-[#3431BB] group"
              onClick={handleSchemesClick}
            >
              <div className="absolute top-4 left-4 flex items-center justify-center w-16 h-16 p-[15.36px] rounded-full bg-[#EEF] group-hover:bg-white">
                <PiCurrencyInr
                  className={`${iconStyle} group-hover:text-blue-500`}
                />
              </div>
              <span className="mt-16 text-2xl font-semibold leading-normal group-hover:text-white">
                Scholarships
              </span>
              <span className="text-[#616161] text-lg font-medium leading-[1.8] group-hover:text-gray-400">
                Get govt scholarships for your education.
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
