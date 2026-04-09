import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Life",
  description: "Beyond academics: Explore the vibrant student life at Vadi Husna Public School through clubs, arts, sports, and cultural events.",
};

export default function StudentLifePage() {

  return (
    <section className="section-padding">
      <div className="container-max">
        <h1 className="heading-secondary mb-4">Student Life</h1>
        <p className="text-body">
          Clubs, events, and activities that enrich our students' experience.
        </p>
      </div>
    </section>
  );
}
