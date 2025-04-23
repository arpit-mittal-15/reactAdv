import React from "react";

const EventHandling = () => {
  const handleEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("button clicked", e.currentTarget);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log("mouse entered", e.currentTarget);
  };

  return (
    <div onMouseEnter={handleMouseEnter}>
      <div className="text-3xl font-bold underline bg-red-500 text-blue-700">
        Event handling example
      </div>
      <button onClick={handleEvent}>Click me!</button>
    </div>
  );
};

export default EventHandling;
