import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import fs from "fs"
import matter from "gray-matter"
import {remark} from "remark"
import html from 'remark-html'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


