import { useEffect } from "react";
import { Outlet, useLoaderData, useSubmit } from "react-router-dom";

import EventsNavigation from "../components/EventsNavigation";
import { getTokenDuration } from "../utils/auth";

function EventsRootLayout() {
  const submit = useSubmit();
  const token = useLoaderData();
  useEffect(() => {
    if (!token) {
      return null;
    }

    if (token === "EXPIRED") {
      submit(null, { action: "/logout", method: "post" });
    }
    const tokenDuration = getTokenDuration();

    setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
    }, tokenDuration);
  }, [token, submit]);
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
}

export default EventsRootLayout;
