import {
  Bars3BottomLeftIcon,
  CubeTransparentIcon,
  CursorArrowRaysIcon,
  MinusIcon,
  PhotoIcon,
  SparklesIcon,
  VideoCameraIcon,
  WindowIcon,
} from "@heroicons/react/24/solid";
// import React, { useState } from "react";

const tools = [
  { Name: "Heading", icon: <WindowIcon className="size-8" />, id: "heading" },
  {
    Name: "Paragraph",
    icon: <Bars3BottomLeftIcon className="size-8" />,
    id: "paragraph",
  },
  {
    Name: "Button",
    icon: <CursorArrowRaysIcon className="size-8" />,
    id: "button",
  },
  { Name: "Divider", icon: <MinusIcon className="size-8" />, id: "divider" },
  {
    Name: "Spacer",
    icon: <CubeTransparentIcon className="size-8" />,
    id: "spacer",
  },
  { Name: "Image", icon: <PhotoIcon className="size-8" />, id: "image" },
  { Name: "Logo", icon: <SparklesIcon className="size-8" />, id: "logo" },
  { Name: "Video", icon: <VideoCameraIcon className="size-8" />, id: "video" },
];

const Toolbar = () => {
  // const [data, setData] = useState<string[]>([]);

  const handleOnDrag = (e: React.DragEvent, Name: string) => {
    e.dataTransfer.setData("Name", Name);
  };

  return (
    <div className="h-dvh col-span-1 p-1 rounded-md">
      <div className="grid gap-4 sm:grid-cols-2 h-dvh ">
        {tools.map(({ Name, icon }, index) => (
          <div
            draggable
            onDragStart={(e) => handleOnDrag(e, Name)}
            key={index}
            className="bg-red-300 rounded-lg flex flex-col-reverse justify-center items-center"
          >
            <h1 className="font-bold">{Name}</h1>
            <span>{icon}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toolbar;
