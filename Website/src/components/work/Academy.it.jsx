export const meta = {
  title: "Academy — Sistema di Gestione Formazione",
  slug: "academy-training",
  client: "Veneto Lavoro",
  summary: "Sostituire fogli di calcolo, email e passaggi manuali con un sistema di gestione formazione coerente e verificabile.",
  sector: "Settore Pubblico / HR",
  featured: false,
  publishedAt: "2024-01-20",
  lang: 'it',
  metrics: [
    { label: "Ruoli validati", value: "5" },
    { label: "Riduzione del processo", value: "27%" },
  ],
};

export default function CaseStudy() {
  return (
    <div className="space-y-6">

      <h2>Contesto</h2>
      <p>
        Gestire la formazione obbligatoria dei dipendenti pubblici richiedeva una lunga sequenza di
        strumenti scollegati: fogli Excel, moduli Word, registri cartacei, email e aggiornamenti manuali.
        Il processo era frammentato, difficile da controllare e continuamente ricostruito a mano.
      </p>
      <p>
        L’obiettivo di Academy non era “una piattaforma moderna”, ma un unico posto
        dove far vivere l’intero ciclo di vita della formazione.
      </p>

      <h2>Architettura</h2>
      <p>
        Abbiamo definito l’intero ciclo di un corso: creazione, pubblicazione, assegnazione,
        frequenza, validazione e reportistica. Ogni passo ha stati precisi, condizioni esplicite
        e regole verificabili, indipendenti dalle abitudini locali.
      </p>

      <h2>Workflow end-to-end</h2>
      <p>
        Il cuore del prodotto è un flusso continuo end-to-end.
        Dal budget alla chiusura del corso, ogni step produce dati strutturati e alimenta il successivo.
        Niente code sciolte, niente tracciamenti paralleli.
      </p>

      <h2>Dashboard</h2>
      <p>
        La dashboard del dipendente mostra ore completate, ore mancanti e corsi richiesti senza interpretazioni.
        La dashboard dell’amministratore governa budget, corsi attivi, partecipazioni, frequenze, esiti e report—
        tutto allineato dallo stesso modello.
      </p>

      <h2>Automazione</h2>
      <p>
        Le notifiche proteggono il workflow da interruzioni prevedibili: corsi in scadenza, frequenze mancanti,
        ore residue, documenti mancanti o report incompleti. Non comodità—coerenza.
      </p>

      <h2>Per i team di sviluppo</h2>
      <p>
        Stati chiari, ruoli definiti e criteri di validazione espliciti riducono interpretazione,
        rework e patch d’emergenza. I nuovi moduli sanno esattamente dove e come inserirsi nel sistema.
      </p>

      <h2>Conclusione</h2>
      <p>
        Academy non ha sostituito i fogli di calcolo; ha dato struttura a un processo che non l’aveva.
        Il risultato è un sistema stabile e leggibile, costruito per durare, che supporta la gestione
        della formazione tramite design, non improvvisazione.
      </p>
    </div>
  );
}
