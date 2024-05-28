import { EventoEvent } from "@/lib/types";

type EventsListProps = {
  events: EventoEvent[];
};

export default function EventsList({ events }: EventsListProps) {
  return (
    <section>
      {events.map((event) => (
        <section key={event.id}>{event.name}</section>
      ))}
    </section>
  );
}
