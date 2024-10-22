const MaintenancePage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="bg-black shadow-lg rounded-lg p-10 text-center max-w-lg">
        <h1 className="text-4xl font-extrabold text-violet-500">
          Website Under Construction
        </h1>
        <p className="mt-4 text-lg text-white">
          We are currently working on something awesome. Stay tuned!
        </p>
        <div className="mt-8">
          <img
            src="https://img.freepik.com/premium-vector/flat-design-construction-concept_108061-440.jpg"
            alt="Maintenance illustration"
            className="mx-auto rounded-lg size-56"
          />
        </div>
        <p className="mt-6 text-white">
          We&apos;ll be back shortly. Thank you for your patience!
        </p>
        <p className="mt-2 text-gray-400 text-sm">
          Contact <span className=" text-violet-500">hello@thehobit.in</span>{" "}
          for urgent inquiries.
        </p>
      </div>
    </div>
  );
};

export default MaintenancePage;
