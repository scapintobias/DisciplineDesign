export const meta = {
  title: "Academy — Training Management System",
  slug: "academy-training",
  client: "Veneto Lavoro",
  summary: "Replacing fragmented spreadsheets, emails and manual steps with a coherent, verifiable training management system.",
  sector: "Public Sector / HR",
  featured: false,
  publishedAt: "2024-01-20",
  lang: 'en',
  metrics: [
    { label: "Validated roles", value: "5" },
    { label: "Process reduction", value: "27%" },
  ],
};

export default function CaseStudy() {
  return (
    <div className="space-y-6">

      <h2>Context</h2>
      <p>
        Managing mandatory training for public employees required a long sequence of 
        disconnected tools: spreadsheets, Word forms, paper registers, emails and 
        manual updates. The process was fragmented, difficult to control and 
        constantly reconstructed by hand.
      </p>
      <p>
        The goal of the Academy was not “a modern platform”, but a single place 
        where the entire training lifecycle could live.
      </p>

      <h2>Architecture</h2>
      <p>
        We defined the full lifecycle of a course: creation, publication, assignment, 
        attendance, validation and reporting. Each step has precise states, explicit 
        conditions and verifiable rules, independent of local habits.
      </p>

      <h2>End-to-End Workflow</h2>
      <p>
        The heart of the product is a continuous, end-to-end flow. 
        From budget allocation to course closure, every step produces structured data 
        and feeds the next one. No loose ends, no parallel tracking.
      </p>

      <h2>Dashboards</h2>
      <p>
        The employee dashboard shows hours completed, remaining hours and required courses 
        without interpretation. The administrator dashboard governs budgets, active courses, 
        participation, attendance, outcomes and reporting—all aligned by the same model.
      </p>

      <h2>Automation</h2>
      <p>
        Notifications protect the workflow from predictable interruptions: expiring courses, 
        missing attendance, remaining hours, missing documents or incomplete reporting. 
        Not convenience—coherence.
      </p>

      <h2>For Software Teams</h2>
      <p>
        Clear states, defined roles and explicit validation criteria reduce interpretation, 
        rework and emergency patches. New modules know exactly where and how to fit into the system.
      </p>

      <h2>Conclusion</h2>
      <p>
        The Academy did not replace spreadsheets; it gave structure to a process that 
        never had one. The result is a stable, readable system built to last, supporting 
        training management through design, not improvisation.
      </p>
    </div>
  );
}
