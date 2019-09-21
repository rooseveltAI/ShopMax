import React from "react";

export default function Title({ name, title }) {
  return (
    <div>
      <h1 className="title">
        {name} {title}
      </h1>
    </div>
  );
}
