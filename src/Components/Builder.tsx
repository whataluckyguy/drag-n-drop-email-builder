import TemplateBuilder from "./TemplateBuilder";
import Toolbar from "./Toolbar";

const Builder = () => {
  return (
    <div
      className="builder grid gap-3 sm:grid-cols-4 bg-slate-100"
      style={{ height: "93%" }}
    >
      <Toolbar />
      <TemplateBuilder />
    </div>
  );
};

export default Builder;
