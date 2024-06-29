import React from "react";

const MapTimes = ({ slot }: { slot: string }) => {
  return (
    <span>
      {parseInt(slot.split(":")[0], 10) >= 12
        ? `${
            parseInt(slot.split(":")[0], 10) === 12
              ? 12
              : parseInt(slot.split(":")[0], 10) - 12
          }:${slot.split(":")[1]} PM`
        : `${slot} AM`}
    </span>
  );
};

export default MapTimes;
