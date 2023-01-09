import { Button } from "flowbite-react";

export default function Skills({ data, colors }) {
  if (data === undefined) {
    return null;
  }

  return (
    <div
      className={"flex flex-wrap flex-row justify-center gap-2 md:gap-4 py-8"}
    >
      {data.map((item, id) => (
        <Button
          className={"text-white cursor-auto"}
          key={id}
          gradientDuoTone={colors[id]}
        >
          {item}
        </Button>
      ))}
    </div>
  );
}
