export const meta = {
  title: "SILS — Unified Social Services Information System",
  slug: "sils-system",
  client: "Regione Veneto",
  summary: "Creating a single system where nine separate organisations previously followed different rules and workflows.",
  sector: "Public Sector / Social Services",
  featured: true,
  publishedAt: "2024-03-10",
  lang: 'en',
  metrics: [
    { label: "Local organisations unified", value: "9" },
    { label: "Processes covered", value: "End-to-end" },
  ],
};

export default function CaseStudy() {
  return (
    <div className="space-y-6">

      <h2>Context</h2>
      <p>
        Before SILS, each Local Health Authority in Veneto managed Social Policies with its own 
        tools, formats and procedures. Not due to lack of competence, but due to territorial autonomy. 
        With nine parallel systems, fragmentation was inevitable and visibility across the region 
        was limited.
      </p>
      <p>
        The project was not born to “redo everything”, but to establish a shared foundation: 
        clear roles, coherent workflows and a system that does not require interpretation.
      </p>

      <h2>Architecture</h2>
      <p>
        The first step was to design a single model shared by all organisations: identical states, 
        rules, validations and lifecycle logic. We reconstructed the backbone of the system, defining 
        who does what, when, and under which constraints. User lifecycle, pathways, activities and 
        reporting were designed as a readable, verifiable sequence.
      </p>

      <h2>Unified Workflow</h2>
      <p>
        The most significant change was the creation of one continuous flow. 
        From intake to closure, every step—verification, ownership, services, activities, documents, 
        disbursements and monitoring—is connected. No jumps, no ambiguities.
      </p>
      <p>
        The system no longer relies on tacit knowledge. The flow makes what must happen, and when, explicit.
      </p>

      <h2>Reporting</h2>
      <p>
        Reporting, previously the most painful part, is now a natural consequence of the workflow. 
        Data is collected while the process unfolds. Nothing needs reconstruction; nothing depends on 
        external memory or parallel tracking.
      </p>

      <h2>Monitoring</h2>
      <p>
        The regional level now has a complete, ordered view: active pathways, ongoing activities, 
        funding trends, service workloads and available budgets — all supported by a stable data model.
      </p>

      <h2>For Software Teams</h2>
      <p>
        For developers, SILS means predictability. When modules follow the same logic and roles leave 
        no ambiguity, development becomes linear. Integrations require no archaeology and new features 
        do not trigger domino effects.
      </p>

      <h2>Conclusion</h2>
      <p>
        SILS was not created to be a “new regional software”, but to bring order where it was needed. 
        The result is not flashy; it is solid. A reliable foundation built to last, supporting policy, 
        operators and development without friction.
      </p>
    </div>
  );
}
	
