export const meta = {
  title: "UnderControl — Interfaccia Mobile",
  slug: "undercontrol-mobile",
  client: "UnderControl",
  summary: "Un’esperienza mobile chiara e prevedibile, derivata da un sistema gestionale desktop complesso.",
  sector: "Gestionali Enterprise",
  featured: false,
  publishedAt: "2024-02-01",
  lang: 'it',
  metrics: [
    { label: "Schermate ridotte", value: "35%" },
    { label: "Workflow primari coperti", value: "3" },
  ],
};

export default function CaseStudy() {
  return (
    <div className="space-y-6">

      <h2>Contesto</h2>
      <p>
        UnderControl è una piattaforma cloud per gestire progetti, costi e attività operative.
        Il prodotto desktop è denso e completo: margini, dashboard, Gantt, procedure,
        ispezioni e consultazioni avanzate. Trasferire questa complessità su mobile
        non significava “rimpicciolire”, ma decidere cosa conta davvero in mobilità e come presentarlo senza rumore.
      </p>

      <h2>Problema</h2>
      <p>
        L’esperienza mobile esistente mancava di gerarchia e focus. Le informazioni essenziali erano nascoste tra dettagli secondari,
        e i workflow principali erano frammentati in più schermate.
      </p>

      <h2>Approccio</h2>
      <p>
        Abbiamo ripensato l’IA mobile dalle fondamenta: quali sezioni appartengono al mobile, quali dati devono essere immediati,
        quali flussi vanno consolidati. L’esperienza è stata concentrata su tre pilastri: Spese, Attività e Diario di Progetto.
      </p>
      <p>
        Colore e tipografia sono stati rivisti per supportare leggibilità, chiarezza di ruolo e scansione rapida.
        Componenti e spaziatura sono stati allineati per creare un linguaggio coerente tra le schermate.
      </p>

      <h2>Risultato</h2>
      <p>
        La nuova interfaccia mobile è più chiara, veloce e coerente con l’ecosistema desktop.
        La navigazione resta affidabile anche in condizioni operative difficili e ogni sezione sembra parte di un prodotto unico,
        non una copia semplificata.
      </p>
      <p>
        L’app non sostituisce il gestionale; lo completa. Offre un punto di accesso focalizzato e ben strutturato,
        progettato specificamente per l’uso mobile.
      </p>
    </div>
  );
}
