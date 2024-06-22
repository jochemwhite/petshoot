import type { Link as TLink } from "@/components/layout/header";
import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const ItemsVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

interface NavigationProps {
  Links: TLink[];
  toggleMenu: () => void;
}

export const Navigation = ({ Links, toggleMenu }: NavigationProps) => (
  <motion.ul variants={variants} className="w-full h-full flex flex-col justify-center items-center ">
    {Links.map((link, i) => (
      <motion.li variants={ItemsVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} key={i} className="text-3xl my-4" onClick={toggleMenu}>
        <Link href={link.href}>{link.name}</Link>
      </motion.li>
    ))}
  </motion.ul>
);

