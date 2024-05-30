import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export async function getEvents(city: string) {
  const events = await prisma.eventoEvent.findMany({
    where: {
      city: capitalize(city),
    },
  });

  return events;
}

export async function getEvent(slug: string) {
  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug: slug,
    },
  });
  return event;
}
