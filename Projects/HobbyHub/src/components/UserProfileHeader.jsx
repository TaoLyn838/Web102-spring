import React from 'react'

const UserProfileHeader = () => {
  return (
    <div className="flex items-center justify-between px-8 py-5">
      {/* User Info Section */}
      <div className="flex items-center mr-5">
        <div className="mr-5">
          <div className="inline-block relative shrink-0 cursor-pointer rounded-[.95rem]">
            {/* Avatar Image */}
            <img
              className="w-[40px] h-[40px] shrink-0 inline-block rounded-[.95rem]"
              src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/avatars/avatar1.jpg"
              alt="avatar image"
            />
          </div>
        </div>

        {/* User Details */}
        <div className="mr-2">
          <a
            href="#"
            className="dark:hover:text-primary hover:text-primary transition-colors duration-200 ease-in-out text-[1.075rem] font-medium dark:text-neutral-400/90 text-secondary-inverse"
          >
            Robert Jason
          </a>
          <span className="text-secondary-dark dark:text-stone-500 font-medium block text-[0.85rem]">
            SEO Manager
          </span>
        </div>
      </div>

      {/* Button with SVG Icon */}
      <a
        className="inline-flex relative items-center group justify-end text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-[.95rem] transition-colors duration-150 ease-in-out text-dark bg-transparent shadow-none border-0"
        href="#"
      >
        <span className="leading-none transition-colors duration-200 ease-in-out peer shrink-0 group-hover:text-primary text-secondary-dark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01.26-1.43l1.297-2.247a1.125 1.125 0 01-1.369-.49l-1.217-.456"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 06 0z"
            ></path>
          </svg>
        </span>
      </a>
    </div>
  )
}

export default UserProfileHeader
