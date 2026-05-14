"use client";

export default function CareerHeader({
  title,
  description,
}) {

  return (

    <div className="mb-8">

      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">

        {title}

      </h1>

      <p className="text-slate-500 mt-2 text-lg max-w-3xl">

        {description}

      </p>

    </div>

  );
}