export default function AboutUs() {
  return (
    <div className="bg-gray-900 text-white py-12 mt-24 mb-8">
      <div className="container mx-auto px-6 lg:px-16">
        <h1 className="text-4xl font-bold text-center mb-8 text-violet-500">
          About Us - Hobit Homes
        </h1>

        <p className="text-lg text-center mb-8">
          Welcome to <strong>Hobit Homes</strong>, your go-to solution for
          managing flats, properties, hostels, and PGs. We are dedicated to
          providing a hassle-free experience for property owners and tenants
          alike, ensuring comfort and convenience in every step of the process.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Managing Flats Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-violet-500">
              Managing Flats
            </h2>
            <p className="text-base">
              At Hobit Homes, we take pride in offering end-to-end management
              services for flats, ensuring that your property is well-maintained
              and efficiently rented out. Our team handles everything from
              tenant screening to maintenance, leaving you stress-free.
            </p>
          </div>

          {/* Property Management Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-violet-500">
              Property Management
            </h2>
            <p className="text-base">
              Whether you own a single property or multiple real estate assets,
              our property management services are tailored to fit your needs.
              We provide leasing, maintenance, and rental management services
              that ensure your investment is always in good hands.
            </p>
          </div>

          {/* Hostel Management Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-violet-500">
              Hostel Management
            </h2>
            <p className="text-base">
              We specialize in managing hostels with a focus on providing safe,
              secure, and comfortable accommodations. Our services cater to
              students and professionals looking for an affordable and
              convenient living experience in prime locations.
            </p>
          </div>

          {/* PG Management Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-violet-500">
              PG Management
            </h2>
            <p className="text-base">
              Our PG management services ensure that tenants have access to
              clean, well-maintained, and fully serviced accommodations. From
              rent collection to housekeeping, Hobit Homes manages every aspect
              of the PG experience.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-violet-500 mb-4">
            Why Choose Hobit Homes?
          </h3>
          <p className="text-base max-w-2xl mx-auto mb-6">
            At Hobit Homes, we are committed to simplifying the property
            management experience for both owners and tenants. Our team of
            experts ensures that your property is managed efficiently, allowing
            you to focus on other important aspects of your life.
          </p>
          <a
            href="/contact"
            className="bg-violet-500 hover:bg-violet-700 text-white py-3 px-6 rounded-lg font-bold"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
