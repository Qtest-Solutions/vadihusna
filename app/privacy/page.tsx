import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Vadi Husna Public School. We are committed to protecting the privacy of our students, staff, and visitors.",
};

export default function PrivacyPage() {

  return (
    <section className="section-padding">
      <div className="container-max">
        <h1 className="heading-secondary mb-4">Privacy Policy</h1>
        <p className="text-body">This is a placeholder privacy policy page.</p>
      </div>
    </section>
  );
}
