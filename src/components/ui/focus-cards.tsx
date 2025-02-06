"use client";
import Image from "next/image";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/utils";
import { Member } from "@/app/people/page";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { GithubIcon } from "lucide-react";

interface ModalContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
  details: Member | null;
  setDetails: (details: Member | null) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState<Member | null>(null);

  return (
    <ModalContext.Provider value={{ open, setOpen, details, setDetails }}>
      {children}
    </ModalContext.Provider>
  );
};

const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

const Overlay = ({ className }: { className?: string }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        backdropFilter: "blur(10px)",
      }}
      exit={{
        opacity: 0,
        backdropFilter: "blur(0px)",
      }}
      className={`fixed inset-0 h-full w-full bg-black bg-opacity-50 z-50 ${className}`}
    ></motion.div>
  );
};

function Modal({ children }: { children: ReactNode }) {
  return <ModalProvider>{children}</ModalProvider>;
}

const ModalBody = () => {
  const { open, details } = useModal();
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  const modalRef = useRef(null);
  const { setOpen } = useModal();
  useOutsideClick(modalRef, () => setOpen(false));

  if (details == null) return <></>;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            backdropFilter: "blur(10px)",
          }}
          exit={{
            opacity: 0,
            backdropFilter: "blur(0px)",
          }}
          className="fixed [perspective:800px] [transform-style:preserve-3d] inset-0 h-full w-full flex items-center justify-center z-50"
        >
          <Overlay />
          <motion.div
            ref={modalRef}
            className={cn(
              "h-[80%] m-8 md:max-w-[50%] lg:max-w-[30%] bg-white dark:bg-neutral-950 border border-transparent dark:border-neutral-800 rounded-2xl relative z-50 flex flex-col items-start justify-end flex-1 overflow-hidden"
            )}
            initial={{
              opacity: 0,
              scale: 0.5,
              rotateX: 40,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotateX: 0,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              rotateX: 10,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 15,
            }}
          >
            <CloseIcon />
            <Image
              src={
                details.post === "Secretary" || details.post === "Coordinator"
                  ? `/images/team/current/${details.img}`
                  : `/images/team/Ex-Leaders/${details.img}`
              }
              alt={details.firstname}
              height={1080}
              width={1080}
              className="object-cover object-center absolute top-0 h-[60%] md:h-[70%] inset-0"
            />
            <div
              className={cn(
                "relative flex flex-col items-start justify-end py-4 px-4 transition-opacity duration-300 overflow-auto max-h-[40%] md:max-h-[30%]"
              )}
            >
              <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-100">
                {details.firstname} {details.lastname}
              </div>
              <div className="text-lg md:text-xl font-small bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
                {details.post}
              </div>
              <div className="text-lg md:text-xl font-small overflow-auto max-h-32">
                {details.about}
              </div>
              <ul className="flex items-center space-x-4 mt-1">
                <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                  <Link
                    href={`https://www.facebook.com/${details.fb}`}
                    target="_blank"
                  >
                    <svg
                      className="w-6 h-6 hover:text-gray-500 duration-150"
                      fill="none"
                      viewBox="0 0 48 48"
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
                <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                  <Link
                    href={`https://www.github.com/${details.github}`}
                    target="_blank"
                  >
                    <svg
                      className="w-6 h-6 hover:text-gray-500 duration-150"
                      fill="none"
                      viewBox="0 0 48 48"
                    >
                      <g fill="currentColor" clipPath="url(#clip0_910_44)">
                        <path
                          fillRule="evenodd"
                          d="M24 1A24.086 24.086 0 008.454 6.693 23.834 23.834 0 00.319 21.044a23.754 23.754 0 003.153 16.172 23.98 23.98 0 0012.938 10.29c1.192.221 1.641-.518 1.641-1.146 0-.628-.024-2.45-.032-4.442-6.676 1.443-8.087-2.817-8.087-2.817-1.089-2.766-2.663-3.493-2.663-3.493-2.178-1.478.163-1.45.163-1.45 2.413.17 3.68 2.461 3.68 2.461 2.138 3.648 5.616 2.593 6.983 1.976.215-1.545.838-2.596 1.526-3.193-5.333-.6-10.937-2.647-10.937-11.791a9.213 9.213 0 012.472-6.406c-.246-.6-1.069-3.026.234-6.322 0 0 2.015-.64 6.602 2.446a22.904 22.904 0 0112.017 0c4.583-3.086 6.594-2.446 6.594-2.446 1.307 3.288.484 5.714.238 6.322a9.194 9.194 0 012.476 6.414c0 9.163-5.615 11.183-10.957 11.772.859.742 1.626 2.193 1.626 4.421 0 3.193-.028 5.762-.028 6.548 0 .636.433 1.38 1.65 1.146a23.98 23.98 0 0012.938-10.291 23.754 23.754 0 003.151-16.175A23.834 23.834 0 0039.56 6.69 24.086 24.086 0 0024.009 1H24z"
                          clipRule="evenodd"
                        />
                        <path d="M9.089 35.264c-.052.119-.243.154-.398.071-.155-.083-.27-.237-.214-.36.056-.122.242-.154.397-.07.155.082.274.24.215.359zM10.063 36.343a.4.4 0 01-.493-.11c-.155-.167-.187-.396-.068-.499.12-.102.334-.055.489.11.155.167.19.396.072.499zM11.008 37.714c-.147.103-.397 0-.536-.206a.395.395 0 010-.569c.147-.098.397 0 .537.202.139.202.143.47 0 .573zM12.292 39.042c-.131.146-.397.106-.616-.091-.219-.198-.27-.467-.139-.609.131-.142.397-.102.624.091.226.194.27.466.131.609zM14.092 39.816c-.06.186-.33.269-.6.19-.27-.08-.449-.3-.397-.49.051-.19.326-.277.6-.19.274.087.449.297.397.49zM16.056 39.95c0 .194-.223.36-.509.364-.286.004-.52-.154-.52-.348 0-.193.222-.36.508-.363.286-.004.52.15.52.347zM17.884 39.646c.036.194-.163.395-.45.443-.285.047-.536-.067-.572-.257-.035-.19.171-.395.45-.447.278-.05.536.068.572.261z" />
                      </g>
                      <defs>
                        <clipPath id="clip0_910_44">
                          <path fill="#fff" d="M0 0h48v48H0z" />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                </li>
                <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                  <Link href={`mailto:${details.mail}`} target="_blank">
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
              </ul>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
const CloseIcon = () => {
  const { setOpen } = useModal();
  return (
    <button
      onClick={() => setOpen(false)}
      className="absolute top-4 right-4 group z-50 cursor-pointer bg-gray-800 rounded-full p-1"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-black dark:text-white h-4 w-4 group-hover:scale-125 group-hover:rotate-3 transition duration-200"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M18 6l-12 12" />
        <path d="M6 6l12 12" />
      </svg>
    </button>
  );
};

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: Member;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => {
    const { setOpen, setDetails } = useModal();
    const imageVariants = {
      hidden: { opacity: 0, y: 50 },
      show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };
    return (
      <motion.div
        variants={imageVariants}
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        onClick={() => {
          setOpen(true);
          setDetails(card);
        }}
        className={cn(
          "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-60 md: transition-all duration-300 ease-out cursor-pointer",
          hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
        )}
      >
        <Image
          src={
            card.post === "Secretary" || card.post === "Coordinator"
              ? `/images/team/current/${card.img}`
              : `/images/team/Ex-Leaders/${card.img}`
          }
          alt={card.firstname}
          fill
          className="object-cover absolute inset-0"
        />
        <div
          className={cn(
            "absolute inset-0 flex flex-col items-start justify-end py-4 px-4 transition-opacity duration-300 bg-gradient-to-b from-black/0 to-black/40",
            hovered === index ? "opacity-0" : "opacity-100"
          )}
        >
          <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-100">
            {card.firstname} {card.lastname}
          </div>
          <div className="text-lg md:text-xl font-small bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
            {card.post}
          </div>
        </div>
        <div
          className={cn(
            "absolute inset-0 bg-black/50 flex flex-col items-start justify-end py-4 px-4 transition-opacity duration-300",
            hovered === index ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
            {card.firstname} {card.lastname}
          </div>
          <div className="text-lg md:text-xl font-small bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
            {card.post}
          </div>
        </div>
      </motion.div>
    );
  }
);

Card.displayName = "Card";

export function FocusCards({ cards }: { cards: Member[] | undefined }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div 
    variants={containerVariants}
    initial="hidden"
    whileInView="show"
    viewport={{once: true, amount: 0.2}}
    className="flex flex-wrap items-center justify-center gap-10 max-w-5xl my-10 mx-auto md:px-8 w-full">
      <Modal>
        {cards?.map((card, index) => (
          <Card
            key={card.firstname}
            card={card}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
          />
        ))}
        <ModalBody />
      </Modal>
    </motion.div>
  );
}
