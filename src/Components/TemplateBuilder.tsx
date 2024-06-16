import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const tools = [
  {
    Name: "Heading",
    component: <h1 className="text-5xl w-full">Heading</h1>,
  },
  {
    Name: "Paragraph",
    component: <p>Hello para</p>,
  },
  {
    Name: "Button",
    component: <button onClick={() => alert("pressed")}>Options</button>,
  },
  {
    Name: "Divider",
    component: <hr />,
  },
  {
    Name: "Spacer",
    component: <br />,
  },
  {
    Name: "Image",
    component: <img src="path/to/default-image.jpg" alt="Default Image" />,
  },
  {
    Name: "Logo",
    component: <img src="path/to/default-logo.jpg" alt="Company Logo" />,
  },
  {
    Name: "Video",
    component: <video controls src="path/to/sample-video.mp4" />,
  },
];

interface dataIt {
  objID: string;
  Component: JSX.Element;
  hide: boolean;
}

const TemplateBuilder = () => {
  const [data, setData] = useState<dataIt[]>([]);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const handleOnDrop = (e: React.DragEvent, index?: number) => {
    e.preventDefault();
    const transferType = e.dataTransfer.types[0];
    const itemData = e.dataTransfer.getData(transferType);

    if (transferType === "internal") {
      if (draggedIndex === null || typeof index !== "number") {
        // console.error("Invalid state or index:", draggedIndex, index);
        return;
      }

      const newData = [...data];
      console.log(
        "Before operation - Index:",
        index,
        "Dragged Index:",
        draggedIndex,
        "Data:",
        newData
      );

      // Ensure draggedIndex is valid
      if (draggedIndex < 0 || draggedIndex >= newData.length) {
        console.error("Invalid dragged index");
        return;
      }

      const itemToMove = newData.splice(draggedIndex, 1)[0];
      newData.splice(index, 0, itemToMove);

      setData(newData);
      setDraggedIndex(null);
    } else {
      // Handle new item addition
      const newItem = tools.find((tool) => tool.Name === itemData)
        ?.component as JSX.Element;
      // setData((prev) => [...prev, newItem]);
      setData((prev) => [
        ...prev,
        { objID: uuidv4(), Component: newItem, hide: true },
      ]);
      console.log("Data array: ", data);
    }
  };

  const handleDragStart = (index: number) => (e: React.DragEvent) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("internal", String(index));
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleComponentClick = (item: dataIt) => {
    setData((prevData) => {
      return prevData.map((dataItem) => {
        if (dataItem.objID === item.objID) {
          return { ...dataItem, hide: false };
        }
        return dataItem;
      });
    });
  };

  return (
    <div
      onDrop={(e) => handleOnDrop(e)}
      onDragOver={handleDragOver}
      className=" m-2 bg-slate-200 rounded-lg col-span-3 overflow-x-auto"
    >
      {data.map((dataItem, index) => {
        return (
          <div
            draggable
            onDragStart={handleDragStart(index)}
            onDrop={(e) => handleOnDrop(e, index)}
            key={index}
            className=" m-2 p-5 bg-transparent rounded-lg cursor-pointer flex-1 shadow shadow-slate-400"
            onClick={() => handleComponentClick(dataItem)}
          >
            {dataItem.Component}
            {dataItem.hide ? (
              <></>
            ) : (
              <div className="w-5 h-5 bg-red-500 rounded-full"></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TemplateBuilder;
