import { FaArrowRight } from "react-icons/fa";

export default function AdminSection() {
  return (
    <section className="w-full py-12 flex flex-wrap justify-center  bg-black border-y-2 border-gray-900 gap-8">
      <div className="mx-8">
        <h1 className="text-3xl font-bold text-white">
          Want to list and manage your property on Hobit Homes?
        </h1>
        <p className="text-md text-gray-500 mt-4">
          {" "}
          Sign up to Admin panel to List and Manage Properties with Ease(Focuses
          on user-friendliness)
        </p>
      </div>
      <div>
        <button className="text-white text-lg p-2 border-none rounded-lg bg-violet-500 hover:bg-violet-700 flex items-center">
          Admin Panel <FaArrowRight className="ml-2" />
        </button>
      </div>
    </section>
  );
}
