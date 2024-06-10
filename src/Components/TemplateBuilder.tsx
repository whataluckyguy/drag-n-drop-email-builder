import { Droppable } from "react-beautiful-dnd";

const TemplateBuilder = () => {
  return (
    <Droppable droppableId="template">
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="h-dvh p-1 bg-orange-400 rounded-md col-span-3"
        >
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TemplateBuilder;
