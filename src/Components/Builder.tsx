import TemplateBuilder from "./TemplateBuilder";
import Toolbar from "./Toolbar";
import { DragDropContext } from "react-beautiful-dnd";

const Builder = () => {
  const dragEnd = (): void => {
    // TODO
  };

  return (
    <DragDropContext onDragEnd={dragEnd}>
      <div className="builder grid gap-3 sm:grid-cols-4">
        <Toolbar />
        <TemplateBuilder />
      </div>
    </DragDropContext>
  );
};

export default Builder;
