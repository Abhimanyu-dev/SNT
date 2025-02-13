"use client";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="text-gray-500 px-4 py-5 max-w-screen-xl mx-auto md:px-8 border-t flex flex-col items-center justify-center">
      <div className="mt-8 items-center justify-between flex flex-col gap-2">
        <div className="mt-4 sm:mt-0">&copy; BCS IITK All rights reserved.</div>
        <div className="mt-6 sm:mt-0 text-gray-400">
          <ul className="flex items-center space-x-4">
            {/* Facebook */}
            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <Link href="https://www.facebook.com/bcs.iitk" target="_blank">
                <svg
                  className="w-6 h-6 hover:text-blue-500 duration-150"
                  fill="none"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#a)">
                    <path
                      fill="currentColor"
                      d="M48 24C48 10.745 37.255 0 24 0S0 10.745 0 24c0 11.979 8.776 21.908 20.25 23.708v-16.77h-6.094V24h6.094v-5.288c0-6.014 3.583-9.337 9.065-9.337 2.625 0 5.372.469 5.372.469v5.906h-3.026c-2.981 0-3.911 1.85-3.911 3.75V24h6.656l-1.064 6.938H27.75v16.77C39.224 45.908 48 35.978 48 24z"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h48v48H0z" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </li>

            {/* GitHub */}
            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <Link href="https://github.com/bcs-iitk" target="_blank">
                <svg
                  className="w-6 h-6 text-gray-300 hover:text-gray-500 duration-150"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.38.6.12.82-.26.82-.58v-2.1c-3.34.72-4.04-1.6-4.04-1.6-.54-1.38-1.32-1.74-1.32-1.74-1.08-.74.08-.72.08-.72 1.2.08 1.82 1.24 1.82 1.24 1.06 1.8 2.78 1.28 3.46.98.1-.76.42-1.28.76-1.58-2.67-.3-5.46-1.34-5.46-5.96 0-1.32.47-2.4 1.24-3.24-.12-.3-.54-1.52.12-3.16 0 0 1.02-.32 3.34 1.24a11.5 11.5 0 013.04-.42c1.02 0 2.06.14 3.04.42 2.32-1.56 3.34-1.24 3.34-1.24.66 1.64.24 2.86.12 3.16.78.84 1.24 1.92 1.24 3.24 0 4.64-2.8 5.66-5.46 5.96.44.38.82 1.14.82 2.3v3.42c0 .32.22.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </Link>
            </li>

            {/* Twitter */}
            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <Link href="https://x.com/bcs_IITK" target="_blank">
                <svg
                  className="w-6 h-6 hover:text-blue-500 duration-150"
                  fill="currentColor"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_twitter)">
                    <path d="M48 9.076a19.932 19.932 0 01-5.714 1.567 10.005 10.005 0 004.38-5.523 19.92 19.92 0 01-6.337 2.416 9.968 9.968 0 00-17.015 9.1 28.276 28.276 0 01-20.532-10.413A10.005 10.005 0 003.196 11.7a9.966 9.966 0 004.427-1.256 9.97 9.97 0 00-8.012 9.893 9.98 9.98 0 004.442-.94A10.003 10.003 0 016.8 24.063a9.97 9.97 0 01-4.523.172 9.997 9.997 0 009.322 6.944A19.988 19.988 0 010 38.392a28.221 28.221 0 0015.297 4.483c18.359 0 28.41-15.213 28.41-28.409 0-.432-.009-.864-.029-1.285A20.262 20.262 0 0048 9.076z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_twitter">
                      <path d="M0 0h48v48H0z" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </li>

            {/* Mail */}
            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <Link href="mailto:bcs.iitk@gmail.com" target="_blank">
                <svg
                  className="w-6 h-6 hover:text-gray-500 duration-150"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26c.55.37 1.22.37 1.77 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </Link>
            </li>

            {/* LinkedIn */}
            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <Link href="https://www.linkedin.com/company/brain-and-cognitive-society-iit-kanpur/" target="_blank">
                <svg
                  className="w-6 h-6 hover:text-blue-500 duration-150"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.105-.895-2-2-2s-2 .895-2 2v5.5h-3v-10h3v1.5c.596-.895 1.767-1.5 3-1.5 2.206 0 4 1.794 4 4v5.5z" />
                </svg>
              </Link>
            </li>

            {/* Discord */}
            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <Link
                href="https://discord.com/invite/Xjrg9Qj6uS"
                target="_blank"
              >
                <svg
                  className="w-6 h-6 text-gray-300 hover:text-violet-500 duration-150"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <path d="M19.54 5.34A17.3 17.3 0 0016.27 4c-.2.36-.4.74-.58 1.12a16.2 16.2 0 00-4.3 0c-.18-.38-.38-.76-.58-1.12A17.3 17.3 0 004.46 5.34C1.74 9.3.84 13.12 1.12 16.86c1.8 1.32 3.98 2.32 6.32 2.84.5-.64.94-1.32 1.3-2.06-1.4-.52-2.72-1.3-3.92-2.3a8.42 8.42 0 00.64-.52c3.68 2.5 8.6 2.5 12.28 0 .2.18.42.36.64.52a13.6 13.6 0 01-3.92 2.3c.36.74.8 1.42 1.3 2.06 2.34-.52 4.52-1.52 6.32-2.84.3-3.74-.62-7.56-3.34-11.52zM9.5 14.92c-1.16 0-2.1-.98-2.1-2.18s.94-2.18 2.1-2.18 2.1.98 2.1 2.18-.94 2.18-2.1 2.18zm5 0c-1.16 0-2.1-.98-2.1-2.18s.94-2.18 2.1-2.18 2.1.98 2.1 2.18-.94 2.18-2.1 2.18z" />
                </svg>
              </Link>
            </li>

            {/* YouTube */}
            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <Link href="https://www.youtube.com/channel/UC3vBBqgKjAfRZQ0di-Oy6yQ" target="_blank">
                <svg
                  className="w-6 h-6 hover:text-red-500 duration-150"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a2.986 2.986 0 00-2.104-2.115C19.756 3.5 12 3.5 12 3.5s-7.756 0-9.394.571a2.986 2.986 0 00-2.104 2.115C0 7.852 0 12 0 12s0 4.148.502 5.814a2.986 2.986 0 002.104 2.115C4.244 20.5 12 20.5 12 20.5s7.756 0 9.394-.571a2.986 2.986 0 002.104-2.115C24 16.148 24 12 24 12s0-4.148-.502-5.814zM9.75 15.5v-7l6 3.5-6 3.5z" />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>{`
        .svg-icon path,
        .svg-icon polygon,
        .svg-icon rect {
          fill: currentColor;
        }
      `}</style>
    </footer>
  );
};
