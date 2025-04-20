import Navbar from "@/components/Layouts/Navbar";
import WorkshopsCarousel from "@/components/LandingPage/WorkshopsCarousel";
import Footer from "@/components/Layouts/Footer";

export default function Home() {
  return (
    <>
      <div className=" relative min-h-screen bg-slate-100 flex flex-col w-full">
        <Navbar />

        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden ">
          <img
            src="assets/images/banner/home.png"
            alt="Animal Department Banner"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-10" />
          <div className="relative z-10 text-white text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Welcome to the Hope School
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl mb-8">
              Discover the Future of your child's Education
            </p>
            <button className="px-6 py-3 border border-white bg-transparent text-white text-lg hover:bg-[#9771f0ab] rounded">
              Learn More
            </button>
          </div>
        </section>

        <div className="container lg:px-24 md:px-12 px-4 ">
          {/* Learning Areas Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Subjects We Explore</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Science",
                  desc: "Encouraging curiosity and hands-on discovery, our science classes introduce students to basic concepts of biology, physics, and chemistry through fun experiments and activities.",
                  image:
                    "https://cdn.pixabay.com/photo/2016/03/27/22/16/science-1284726_960_720.jpg",
                },
                {
                  name: "Mathematics",
                  desc: "Math is made fun and engaging through puzzles, real-world problem-solving, and visual learning. We build strong foundational skills in numbers, geometry, and logical reasoning.",
                  image:
                    "https://cdn.pixabay.com/photo/2017/03/12/13/41/mathematics-2131183_960_720.jpg",
                },
                {
                  name: "Arts & Crafts",
                  desc: "A space for creativity and self-expression! Students explore painting, drawing, and simple crafts that develop fine motor skills and imaginative thinking.",
                  image:
                    "https://cdn.pixabay.com/photo/2016/11/21/15/46/paint-1843087_960_720.jpg",
                },
                {
                  name: "Language & Literature",
                  desc: "Through storytelling, reading, and writing, students improve communication and language skills while building confidence in self-expression and comprehension.",
                  image:
                    "https://cdn.pixabay.com/photo/2015/09/05/22/46/children-925103_960_720.jpg",
                },
              ].map((area, index) => (
                <div
                  key={index}
                  className="border rounded overflow-hidden shadow-sm bg-white"
                >
                  <img
                    src={`${area.image}`}
                    alt={area.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-3 flex flex-col items-center">
                    <h3 className="text-xl font-bold mb-2">{area.name}</h3>
                    <p className="text-balance mb-3 text-center">{area.desc}</p>
                    <button className="px-4 py-2 border border-gray-300 hover:bg-purple-200 rounded w-full">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Our Vision */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <div className="border bg-top h-[50vh] rounded overflow-hidden flex flex-col md:flex-row">
              <img
                src="https://cdn.pixabay.com/photo/2016/11/29/04/17/classroom-1869527_960_720.jpg"
                alt="School Vision"
                className="md:w-1/2 object-cover"
              />
              <div className="p-8 flex flex-col justify-center items-center md:w-1/2">
                <p className="text-xl text-center font-semibold">
                  To nurture young minds through joyful learning, curiosity, and
                  creativity—building a strong foundation for lifelong success
                  and responsible citizenship.
                </p>
              </div>
            </div>
          </section>

          {/* School Facilities and Equipment */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">
              Facilities and Equipment
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  name: "Classrooms",
                  description:
                    "Bright, spacious, and well-ventilated classrooms equipped with modern teaching aids like smart boards, projectors, and interactive displays to enhance learning and engagement.",
                  image: "/assets/images/School/classroom.jpg",
                },
                {
                  name: "Science Lab",
                  description:
                    "Our science lab offers hands-on learning experiences where students can explore basic experiments safely under guidance. It encourages curiosity and builds a love for discovery.",
                  image: "/assets/images/School/science_lab.jpg",
                },
                {
                  name: "Library",
                  description:
                    "A cozy reading space filled with storybooks, reference materials, and age-appropriate learning resources. It’s the perfect spot for young minds to wander through words and worlds.",
                  image: "/assets/images/School/library.jpg",
                },
                {
                  name: "Playground & Sports Area",
                  description:
                    "A safe and well-maintained outdoor area for physical activity, games, and sports. It includes swings, climbing frames, and space for organized games to promote health and teamwork.",
                  image: "/assets/images/School/playground.jpg",
                },
              ].map((facility) => (
                <div
                  key={facility.name}
                  className="border rounded overflow-hidden shadow-md bg-white"
                >
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">{facility.name}</h3>
                    <p>{facility.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Workshops */}
          <section>
            <WorkshopsCarousel />
          </section>

          {/* About Us */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">About Us</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="border rounded p-6 overflow-hidden">
                <h2 className="text-xl font-semibold mb-4">
                  Our School Environment
                </h2>
                <p className="text-lg mb-4">
                  We believe every child should feel safe, supported, and
                  excited to learn. Our school is designed to create a welcoming
                  space where students can grow, discover, and have fun. Here
                  are some things we focus on:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Clean and bright classrooms</li>
                  <li>Fun and safe playgrounds</li>
                  <li>Encouraging creativity and curiosity</li>
                  <li>Friendly teachers and staff who care</li>
                </ul>
              </div>
              <div className="border rounded p-6 overflow-hidden">
                <h2 className="text-xl font-semibold mb-4">
                  Learning and Values
                </h2>
                <h4 className="mb-4">Helping Every Child Shine</h4>
                <ul className="list-disc pl-5 space-y-5">
                  <li>We follow a strong and exciting curriculum</li>
                  <li>Teachers get regular training to be their best</li>
                  <li>We always look for ways to improve our school</li>
                  <li>We value honesty, kindness, and respect</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact Us */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="border rounded p-6">
                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-indigo-200"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-indigo-200"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-indigo-200"
                    ></textarea>
                  </div>
                  <button className="w-full px-4 py-2 bg-[#9771f0ca] text-white rounded">
                    Send Message
                  </button>
                </form>
              </div>
              <div className="border rounded overflow-hidden">
                <div className="border rounded-lg overflow-hidden bg-black mx-2 my-2 ">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112827.72286363042!2d78.00627689677987!3d27.90607474245019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a3a44d437d1d%3A0x429e21a61f6ddf8!2sBABU%20LAL%20JAIN%20INTER%20COLLEGE!5e0!3m2!1sen!2sin!4v1745134777497!5m2!1sen!2sin"
                    width="600"
                    height="250"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Our Location</h3>
                  <p className="mb-2">
                    main market, 2nd cross road, 1st main road, aligarh, 202001
                  </p>
                  <h4 className="text-lg font-semibold mt-4 mb-2">
                    Contact Information
                  </h4>
                  <ul className="space-y-2">
                    <li>Main Office Phone: 00-123-456-789</li>
                    <li>Email: thehopeschool@gmail.com</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
