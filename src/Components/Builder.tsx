import TemplateBuilder from "./TemplateBuilder";
import Toolbar from "./Toolbar";

const Builder = () => {
  return (
    <div className="builder grid gap-3 sm:grid-cols-4">
      <Toolbar />
      <TemplateBuilder />
    </div>
  );
};

export default Builder;
