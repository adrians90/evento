import { EventoEvent } from "@/lib/types";
import Image from "next/image";

type EventCardProps = {
  event: EventoEvent;
};

export default function EventCard({ event }: EventCardProps) {
  return (
    <section className="h-[380px] w-[500px]">
      <Image src={event.imageUrl} alt={event.name} width={500} height={280} />
    </section>
  );
}
