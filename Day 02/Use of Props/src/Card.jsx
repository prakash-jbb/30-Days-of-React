import React from "react";

function Card(props) {
  return (
    <figure className="flex items-center justify-center mt-3 bg-slate-100 rounded-xl p-8 dark:bg-slate-800 max-w-xl">
      <img
        className="mr-4 w-24 h-24 rounded-full mx-auto"
        src="https://images.pexels.com/photos/16465977/pexels-photo-16465977/free-photo-of-woman-standing-in-a-rapeseed-field.jpeg"
        alt=""
        width="384"
        height="512"
      />
      <div className="pt-6 space-y-4">
        <blockquote>
          <p className="text-lg font-medium text-white">
            “Tailwind CSS is the only framework that I've seen scale on large
            teams. It’s easy to customize, adapts to any design, and the build
            size is tiny.”
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400">
            {props.Engineer_name}
          </div>
          <div className="text-slate-700 dark:text-slate-500"></div>
        </figcaption>
      </div>
    </figure>
  );
}

export default Card;
