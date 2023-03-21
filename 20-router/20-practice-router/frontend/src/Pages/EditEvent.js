import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

const EditEvents = () => {
  const data = useRouteLoaderData("event-data");
  return <EventForm event={data.event} method="patch"/>;
};

export default EditEvents;
