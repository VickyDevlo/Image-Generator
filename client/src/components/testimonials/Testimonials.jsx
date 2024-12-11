import React from "react";
import { assets, testimonialsData } from "../../assets/assets";

const Testimonials = () => {
  return (
    <div className="flex items-center justify-center flex-col my-20 py-12">
      <h1 className="text-3xl text-center sm:text-4xl font-semibold mb-2">
        Customer Testimonials
      </h1>
      <p className="text-center text-gray-500 mb-12">
        What our users are saying
      </p>
      <div className="flex flex-wrap gap-6">
        {testimonialsData.map((testimonial, i) => (
          <div
            key={i}
            className="bg-white/20 p-12 rounded-lg shadow-md border w-80 mx-auto cursor-pointer"
          >
            <div className="flex flex-col items-center">
              <img
                src={testimonial.image}
                alt="testimonial_img"
                className="rounded-full"
              />
              <h2 className="text-xl font-semibold mt-3">{testimonial.name}</h2>
              <p className="text-gray-500 mb-4">{testimonial.role}</p>
              <div className="flex mb-4">
                {Array(testimonial.stars)
                  .fill()
                  .map((_, i) => (
                    <img
                      key={i}
                      src={assets.rating_star}
                      alt={testimonial.name}
                    />
                  ))}
              </div>
              <p className="text-center text-sm text-gray-600">
                {testimonial.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
