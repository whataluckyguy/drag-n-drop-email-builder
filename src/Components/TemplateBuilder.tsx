import React, { useState } from "react";

const TemplateBuilder = () => {
  const [data, setData] = useState<string[]>([]);

  const handleOnDrop = (e: React.DragEvent) => {
    const d = e.dataTransfer.getData("Name") as string;
    setData([...data, d]);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div
      onDrop={handleOnDrop}
      onDragOver={handleDragOver}
      className="h-dvh p-1 bg-orange-400 rounded-md col-span-3"
    >
      {data.map((item, index) => (
        <div key={index} className=" m-2 bg-slate-300 rounded-lg">
          {item}
        </div>
      ))}
    </div>
  );
};

export default TemplateBuilder;
