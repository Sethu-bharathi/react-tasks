import { Suspense } from "react";
import { defer, json, useLoaderData, Await } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const { events } = useLoaderData();
  if (events.isError) {
    return <p>{events.message}</p>;
  }
  return (
    <Suspense fallback={<p>Data is loading</p>}>
      <Await resolve={events}>
        {(loadedEvents) => {
          console.log(loadedEvents);
          return <EventsList events={loadedEvents} />;
        }}
      </Await>
    </Suspense>
  );
}

export default EventsPage;
async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");
  if (response.ok) {
    const data = await response.json();
    return data.events;
  } else {
    // return {
    //   isError: true,
    //   message: "Could not fetch data",
    // };
    // throw new Response(JSON.stringify({ message: "Could not fetch data" }),{status:500});
    throw json({ message: "Could not fetch events" }, { status: 500 });
  }
}
export const loader = () => {
  return defer({
    events: loadEvents(),
  });
};
