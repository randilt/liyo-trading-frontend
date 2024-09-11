import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
          alt="Japanese cityscape with cars"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            About LIYO Trading
          </h1>
          <p className="text-xl md:text-2xl">
            Bringing Japanese Excellence to Your Doorstep
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#1E2738] mb-6">
              Our Story
            </h2>
            <p className="text-gray-700 mb-4">
              Founded in 2010, LIYO Trading was born from a passion for Japanese
              automotive excellence. What started as a dream to bring the finest
              vehicles from Japan to enthusiasts worldwide has grown into a
              trusted name in the industry.
            </p>
            <p className="text-gray-700 mb-4">
              Today, we're proud to have helped thousands of customers import
              their dream vehicles and machinery, turning automotive fantasies
              into driveway realities. Our commitment to quality, transparency,
              and customer satisfaction has made us a leader in the import
              industry.
            </p>
            <Button className="bg-[#E53935] hover:bg-[#D32F2F] text-white">
              Learn More About Our Journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80"
              alt="Luxury Japanese car"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 transform hover:scale-105"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#1E2738] mb-12">
            Our Comprehensive Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Vehicles",
                image:
                  "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
              },
              {
                title: "Parts",
                image:
                  "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
              },
              {
                title: "Motorcycles",
                image:
                  "https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
              },
              {
                title: "Trucks",
                image:
                  "https://images.unsplash.com/photo-1566647387313-9fda80664848?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
              },
              {
                title: "Construction Machinery",
                image:
                  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
              },
              {
                title: "Agricultural Machinery",
                image:
                  "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
              },
              {
                title: "Sports Cars",
                image:
                  "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#1E2738] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    Quality {service.title.toLowerCase()} imported directly from
                    Japan, meeting the highest standards of performance and
                    reliability.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-[#1E2738] to-[#2A3547] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose LIYO Trading?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Unparalleled selection of premium Japanese vehicles and machinery",
              "Transparent, hassle-free import process",
              "Expert guidance from passionate automotive specialists",
              "Competitive pricing and flexible financing options",
              "Dedicated after-sales support and community",
              "100% genuine vehicles and parts",
            ].map((reason, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#E53935] mr-2 flex-shrink-0 mt-1" />
                <p>{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#1E2738] mb-12">
            Our Satisfied Customers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "LIYO Trading turned my dream of owning a Nissan Skyline GT-R into a reality. Their expertise and customer service are unmatched!",
                author: "Alex C., Proud GT-R Owner",
                image:
                  "https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
              },
              {
                quote:
                  "Importing my Toyota Supra through LIYO was a breeze. They handled everything, making the process stress-free and enjoyable.",
                author: "Sarah L., Supra Enthusiast",
                image:
                  "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={96}
                    height={96}
                    objectFit="cover"
                  />
                </div>
                <div>
                  <p className="italic text-gray-700 mb-2">
                    "{testimonial.quote}"
                  </p>
                  <p className="text-right text-gray-500">
                    - {testimonial.author}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#E53935] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8">
            Let's bring your dream vehicle home together.
          </p>
          <Button className="bg-white text-[#E53935] hover:bg-gray-100 text-lg px-8 py-3">
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
