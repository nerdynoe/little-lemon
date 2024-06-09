import { useState, useEffect } from "react";
import { fetchAPI } from "../api";

const useAvailableTimes = (restime = "") => {
  const [slots, setSlots] = useState(fetchAPI(new Date()));

  const updateSlots = (availableSlots, timeToRemove) => {
    setSlots([...availableSlots.filter((slot) => slot !== timeToRemove)]);
  };

  useEffect(() => {
    if (restime.length > 0) {
      updateSlots(slots, restime);
    }
  }, [slots, restime]);

  return { slots, updateSlots };
};

export default useAvailableTimes;
