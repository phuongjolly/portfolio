import { Button } from "flowbite-react";

export default function Skills({ data, colors }) {
  if (data === undefined) {
    return null;
  }

  console.log(data);

  return (
    <div className={"flex flex-row gap-4 justify-center py-8"}>
      {data.map((item, id) => (
        <Button className={"text-white"} key={id} gradientDuoTone={colors[id]}>
          {item}
        </Button>
      ))}
    </div>
  );
}
