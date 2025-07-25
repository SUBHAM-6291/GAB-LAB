'use client';

export default function WhyChooseUs() {
  return (
    <section className="bg-zinc-900 text-white px-6 py-20 md:flex md:items-center md:justify-between">
      {/* Left Text Section */}
      <div
        className="md:w-1/2 space-y-6"
        style={{
          animation: 'fadeInLeft 0.8s ease-out',
        }}
      >
        <h2 className="text-4xl font-extrabold">Why Choose Us?</h2>
        <ul className="space-y-4 text-lg leading-relaxed">
          <li>
            <span className="font-semibold">Central Location:</span> Conveniently located in the heart of Barcelona, our classes are easily accessible for locals and tourists alike.
          </li>
          <li>
            <span className="font-semibold">Small Group Sizes:</span> Enjoy personalized attention and guidance in our intimate class settings.
          </li>
          <li>
            <span className="font-semibold">Memorable Experience:</span> Create lasting memories as you bond with fellow food enthusiasts and savor the flavors of Spain.
          </li>
        </ul>
        <button className="mt-6 px-6 py-3 bg-white text-black font-bold rounded-md hover:bg-zinc-200 transition">
          Become an Partner
        </button>
      </div>

      {/* Right Image Section */}
      <div
        className="md:w-1/2 mt-10 md:mt-0 md:pl-10"
        style={{
          animation: 'fadeInRight 0.8s ease-out',
        }}
      >
        <img
          src="https://static.wixstatic.com/media/45a33e_01684b958b2643d8a04f940d1b7c2c47~mv2.jpg/v1/fill/w_426,h_576,fp_0.46_0.41,lg_1,q_80,enc_avif,quality_auto/ryanthomas001_as_students_standing_around_a_cooking_school_tabl_568506dfd8f44c2b98424f0a34.jpg"
          alt="Cooking Class"
          className="rounded-xl shadow-2xl w-full h-auto"
        />
      </div>

      {/* Inline Keyframes Style Block */}
      <style jsx>{`
        @keyframes fadeInLeft {
          0% {
            opacity: 0;
            transform: translateX(-30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          0% {
            opacity: 0;
            transform: translateX(30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
