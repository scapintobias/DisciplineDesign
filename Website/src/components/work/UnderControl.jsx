export const meta = {
  title: "UnderControl — Mobile Interface Design",
  slug: "undercontrol-mobile",
  client: "UnderControl",
  summary: "Designing a clear, predictable mobile experience derived from a complex desktop management system.",
  sector: "Enterprise Management",
  featured: false,
  publishedAt: "2024-02-01",
  lang: 'en',
  metrics: [
    { label: "Screens reduced", value: "35%" },
    { label: "Primary workflows covered", value: "3" },
  ],
};

export default function CaseStudy() {
  return (
    <div className="space-y-6">

      <h2>Context</h2>
      <p>
        UnderControl is a cloud platform for managing projects, costs and operational activities. 
        The desktop product is dense and comprehensive: margins, dashboards, Gantt charts, procedures, 
        inspections and advanced consultations. Translating this complexity to mobile did not mean “shrinking”, 
        but deciding what genuinely matters on the move and how to present it without noise.
      </p>

      <h2>Problem</h2>
      <p>
        The existing mobile experience lacked hierarchy and focus. Essential information was hidden among 
        secondary details, and core workflows were fragmented across multiple screens.
      </p>

      <h2>Approach</h2>
      <p>
        We redesigned the mobile IA from first principles: defining which sections belong on mobile, 
        which data must be immediate, and which flows should be consolidated. The experience was 
        deliberately concentrated on three pillars: Expenses, Activities and Project Diary.
      </p>
      <p>
        Colour and typography were rethought to support readability, role clarity and quick scanning. 
        Components and spacing were aligned to create a consistent language across screens.
      </p>

      <h2>Outcome</h2>
      <p>
        The new mobile interface is clearer, faster and more coherent with the desktop ecosystem. 
        Navigation remains reliable even in poor working conditions, and every section feels like 
        part of a unified product rather than a simplified copy.
      </p>
      <p>
        The app does not replace the management platform; it completes it. It provides a focused, 
        well-structured access point designed specifically for mobile use.
      </p>
    </div>
  );
}
