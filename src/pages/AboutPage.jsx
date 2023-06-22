import React from "react";
import Card from "../components/shared/Card";

export default function AboutPage() {
  return (
    <div className="about">
      <div>About This Project</div>
      <p>This is a react app to leave feedback for a product or service</p>
      <p>Version: 1.0.0</p>
      <p>
        <a href="/">Back to Home</a>
      </p>
    </div>
  );
}
