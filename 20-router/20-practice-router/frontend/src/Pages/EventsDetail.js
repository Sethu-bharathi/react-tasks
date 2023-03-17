import { useParams } from "react-router-dom";

const EventsDetail = () => {
  const params = useParams();
  return (
    <>
      <h2>EventsDetail</h2>
      <h3>Event Id {params.eventId}</h3>
    </>
  );
};

export default EventsDetail;
