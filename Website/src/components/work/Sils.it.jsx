export const meta = {
  title: "SILS — Sistema Informativo Unificato per i Servizi Sociali",
  slug: "sils-system",
  client: "Regione Veneto",
  summary: "Un sistema unico dove prima nove enti seguivano regole e flussi differenti.",
  sector: "Settore Pubblico / Servizi Sociali",
  featured: true,
  publishedAt: "2024-03-10",
  lang: 'it',
  metrics: [
    { label: "Enti locali unificati", value: "9" },
    { label: "Processi coperti", value: "End-to-end" },
  ],
};

export default function CaseStudy() {
  return (
    <div className="space-y-6">
      <h2>Contesto</h2>
      <p>
        Prima di SILS, ogni ULSS in Veneto gestiva le Politiche Sociali con strumenti, formati e procedure proprie.
        Non per incompetenza, ma per autonomia territoriale. Con nove sistemi paralleli, la frammentazione era inevitabile
        e la visibilità regionale limitata.
      </p>
      <p>
        L’obiettivo non era “rifare tutto”, ma costruire una base condivisa: ruoli chiari, workflow coerenti e un sistema che non richieda interpretazioni.
      </p>

      <h2>Architettura</h2>
      <p>
        Il primo passo è stato progettare un unico modello condiviso da tutti gli enti: stati identici, regole, validazioni e logica di ciclo di vita.
        Abbiamo ricostruito la spina dorsale del sistema, definendo chi fa cosa, quando e con quali vincoli.
        Lifecycle utente, percorsi, attività e reportistica sono stati progettati come una sequenza leggibile e verificabile.
      </p>

      <h2>Workflow Unificato</h2>
      <p>
        Il cambiamento più significativo è la creazione di un flusso continuo.
        Dall’ingresso alla chiusura, ogni passo—verifica, presa in carico, servizi, attività, documenti,
        erogazioni e monitoraggio—è collegato. Niente salti, niente ambiguità.
      </p>
      <p>
        Il sistema non si basa più su conoscenze tacite. Il flusso rende esplicito cosa deve accadere e quando.
      </p>

      <h2>Reportistica</h2>
      <p>
        La reportistica, prima la parte più dolorosa, è ora una conseguenza naturale del workflow.
        I dati vengono raccolti mentre il processo si svolge. Nulla va ricostruito; nulla dipende da memoria esterna o tracciamenti paralleli.
      </p>

      <h2>Monitoraggio</h2>
      <p>
        Il livello regionale ha ora una vista completa e ordinata: percorsi attivi, attività in corso,
        trend di finanziamento, carichi di servizio e budget disponibili — tutto supportato da un modello dati stabile.
      </p>

      <h2>Per i team di sviluppo</h2>
      <p>
        Per gli sviluppatori, SILS significa prevedibilità. Quando i moduli seguono la stessa logica e i ruoli non lasciano ambiguità,
        lo sviluppo diventa lineare. Le integrazioni non richiedono archeologia e le nuove feature non innescano effetti domino.
      </p>

      <h2>Conclusione</h2>
      <p>
        SILS non è nato per essere “un nuovo software regionale”, ma per portare ordine dove serviva.
        Il risultato non è appariscente; è solido. Una base affidabile pensata per durare, a supporto di policy,
        operatori e sviluppo senza attriti.
      </p>
    </div>
  );
}
