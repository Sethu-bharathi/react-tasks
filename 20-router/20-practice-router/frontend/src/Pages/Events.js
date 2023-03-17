import { Link } from "react-router-dom";

const DUMMY_DATA = [
  {
    id: "e1",
    title: "Chess event",
  },
  {
    id: "e2",
    title: "Cricket",
  },
];

const Events = () => {
  return (
    <>
      <h2>Events</h2>
      <ul>
        {DUMMY_DATA.map((event) => (
          <li>
            <Link to={"/events/" + event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Events;
