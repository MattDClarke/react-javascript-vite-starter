import BasicCounter from "./BasicCounter";
import Counter from "./Counter";
import TodoList from "./TodoList";

function ProjectExamples() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <TodoList />
      <Counter />
      <BasicCounter />
    </div>
  );
}

export default ProjectExamples;
