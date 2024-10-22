import { Card } from "flowbite-react";

export default function QuestionCard() {
  return (
    <Card
      href="#"
      className="max-w-sm p-8 bg-black border border-gray-800 rounded-lg my-8 hover:bg-dark"
    >
      <h5 className="text-2xl font-bold tracking-tight text-white ">
        How do I Search for properties on Estatein?
      </h5>
      <p className="font-normal text-gray-400 ">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est dolorum
        accusantium quis tempora magnam eveniet, recusandae quo aliquam saepe
        molestiae?
      </p>
      <button className="bg-gray-700 text-white px-4 py-2 rounded-lg text-lg my-2 hover:bg-gray-600 ">
        Read More
      </button>
    </Card>
  );
}
