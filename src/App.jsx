import React, { useMemo, useState } from "react";
import { Search, BookOpen, HelpCircle, Home, CheckCircle2, XCircle, ShoppingBag, Download } from "lucide-react";

// ---------------------------------------------
// SIMPLE, NOOB‑FRIENDLY STUDY WEBSITE (Single file)
// - Notes + MCQs (no backend)
// - Tailwind styling (no imports needed here)
// - Add your own chapters by extending the `catalog` below
// - Safe: original summaries + practice MCQs (no official PDFs)
// ---------------------------------------------

// === SAMPLE DATA (Edit/Extend) ===
const catalog = {
  "Class 10": {
    Science: [
      {
        id: "c10-sci-ch1",
        title: "Chemical Reactions & Equations (Ch-1)",
        notes: {
          summary:
            "Types of chemical reactions, balancing equations, and identifying changes during reactions (gas, precipitate, heat/light).",
          bullets: [
            "Chemical reaction = process where reactants → products with new properties.",
            "Equation parts: reactants + → products; use symbols (s), (l), (g), (aq).",
            "Balancing: count atoms on both sides → add coefficients (smallest whole numbers).",
            "Types: Combination, Decomposition, Displacement, Double Displacement, Oxidation–Reduction, Neutralisation, Precipitation.",
            "Exothermic releases heat; Endothermic absorbs heat.",
            "Oxidation: gain of oxygen / loss of hydrogen; Reduction: loss of oxygen / gain of hydrogen.",
            "Corrosion & Rancidity: surface oxidation of metals; oxidation of fats leading to bad smell/taste.",
          ],
          formulas: [
            "Mg + O₂ → 2MgO (Combination)",
            "2KClO₃ → 2KCl + 3O₂ (Decomposition)",
            "Zn + CuSO₄ → ZnSO₄ + Cu (Displacement)",
            "AgNO₃ + NaCl → AgCl↓ + NaNO₃ (Double Displacement)",
          ],
          tip: "Balance equations using coefficients only. Never change subscripts inside a chemical formula.",
        },
        quiz: [
          {
            q: "Which statement about a balanced chemical equation is TRUE?",
            options: [
              "Total mass of reactants ≠ total mass of products",
              "Number of atoms of each element is same on both sides",
              "Subscripts are changed to balance",
              "Coefficients can be fractions only",
            ],
            answer: 1,
            explain: "Law of conservation of mass ⇒ same number of atoms of each element on both sides. We balance by changing coefficients, not subscripts.",
          },
          {
            q: "2KClO₃ → 2KCl + 3O₂ is an example of:",
            options: ["Combination", "Decomposition", "Displacement", "Neutralisation"],
            answer: 1,
            explain: "A single compound breaks into simpler substances (KCl and O₂).",
          },
          {
            q: "Identify the precipitate in: AgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq)",
            options: ["AgNO₃", "NaCl", "AgCl", "NaNO₃"],
            answer: 2,
            explain: "AgCl is an insoluble solid formed — the precipitate.",
          },
          {
            q: "Which is oxidation?",
            options: [
              "Gain of hydrogen",
              "Loss of oxygen",
              "Gain of oxygen",
              "Loss of electrons only",
            ],
            answer: 2,
            explain: "In school-level context: oxidation often described as gain of oxygen / loss of hydrogen.",
          },
          {
            q: "Zn + CuSO₄ → ZnSO₄ + Cu: Zn is…",
            options: ["Oxidised; reducing agent", "Reduced; oxidising agent", "Neither", "Catalyst"],
            answer: 0,
            explain: "Zn → Zn²⁺ (oxidation). The species that gets oxidised acts as the reducing agent.",
          },
          {
            q: "During rancidity of oils, the main process is:",
            options: ["Hydrolysis", "Oxidation", "Saponification", "Polymerisation"],
            answer: 1,
            explain: "Rancidity is due to oxidation of fats/oils causing unpleasant odour/taste.",
          },
          {
            q: "Which change indicates a chemical reaction?",
            options: ["Melting of ice", "Evaporation of water", "Formation of gas from vinegar + baking soda", "Boiling of water"],
            answer: 2,
            explain: "CO₂ formation indicates a new substance — a chemical change.",
          },
          {
            q: "Choose the correctly balanced equation:",
            options: [
              "Fe + O₂ → Fe₂O₃",
              "4Fe + 3O₂ → 2Fe₂O₃",
              "2Fe + O₂ → Fe₂O₃",
              "Fe + 3O₂ → Fe₂O₃",
            ],
            answer: 1,
            explain: "4Fe + 3O₂ → 2Fe₂O₃ balances Fe and O on both sides.",
          },
          {
            q: "Neutralisation produces:",
            options: ["Acid + base", "Salt + water", "Only salt", "Only water"],
            answer: 1,
            explain: "Acid + Base → Salt + Water (often exothermic).",
          },
          {
            q: "Which prevents corrosion effectively for iron?",
            options: ["Painting/Galvanising", "Keeping it wet", "Adding salt", "Heating it daily"],
            answer: 0,
            explain: "Coating (paint/zinc) prevents contact with oxygen and moisture.",
          },
        ],
      },
    ],
  },
  "Class 12": {
    Physics: [
      {
        id: "c12-phy-ch1",
        title: "Electric Charges & Fields (Quick Revision)",
        notes: {
          summary:
            "Coulomb's law, electric field, field lines, superposition, and conductors/insulators recap.",
          bullets: [
            "Coulomb's law: F = k |q₁q₂|/r² (inverse-square).",
            "Electric field (E) at a point = force per unit positive test charge.",
            "Field lines start on +, end on –; never intersect.",
            "Superposition: vector sum of fields from all charges.",
            "Conductor in electrostatic equilibrium: E = 0 inside bulk; excess charge on surface.",
          ],
          formulas: [
            "k = 1/(4πϵ₀)",
            "E (point charge) = kq/r²",
            "E (infinite line) = λ/(2πϵ₀r)",
          ],
          tip: "Draw neat diagrams of field lines; resolve vectors carefully.",
        },
        quiz: [
          {
            q: "According to Coulomb's law, the force between two charges is proportional to:",
            options: ["r²", "1/r", "1/r²", "1/r³"],
            answer: 2,
            explain: "Inverse-square dependence: F ∝ 1/r².",
          },
          {
            q: "Direction of electric field is the direction of force on:",
            options: ["Negative test charge", "Positive test charge", "Any charge", "Neutral body"],
            answer: 1,
            explain: "By definition, E direction corresponds to force on a + test charge.",
          },
          {
            q: "At electrostatic equilibrium, the electric field inside a conductor is:",
            options: ["Maximum", "Zero", "Equal to surface charge density", "Undefined"],
            answer: 1,
            explain: "Charges rearrange to cancel internal field ⇒ E = 0 inside.",
          },
        ],
      },
    ],
  },
  "Govt Exams": {
    "SSC (Reasoning)": [
      {
        id: "ssc-reas-analogy",
        title: "Analogy — Quick Practice Set",
        notes: {
          summary: "Identify pair relationships (synonymy, part–whole, cause–effect).",
          bullets: [
            "Look for relation type first (e.g., tool–user, material–product).",
            "Eliminate options with different relation category.",
          ],
          formulas: [],
          tip: "Convert pairs to A:B :: C: ? and test relation invariance.",
        },
        quiz: [
          {
            q: "Book : Reader :: Food : ?",
            options: ["Cook", "Eater", "Restaurant", "Waiter"],
            answer: 1,
            explain: "User/consumer relation: Reader consumes book; Eater consumes food.",
          },
          {
            q: "Wheel : Car :: Wing : ?",
            options: ["Animal", "Bird", "Air", "Feather"],
            answer: 1,
            explain: "Part–whole: Wheel is part of car; Wing is part of bird.",
          },
        ],
      },
    ],
  },
};

// === COMPONENTS ===
function Header({ onSearch }) {
  return (
    <header className="sticky top-0 z-20 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-3 p-3">
        <div className="flex items-center gap-2">
          <BookOpen className="h-6 w-6" />
          <h1 className="text-xl font-bold">StudyHub — Notes & MCQs</h1>
        </div>
        <div className="ml-auto flex w-full max-w-lg items-center gap-2 rounded-xl border px-3 py-1.5">
          <Search className="h-4 w-4 opacity-60" />
          <input
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search chapters, subjects, exams…"
            className="w-full bg-transparent outline-none"
          />
        </div>
        <a
          href="#premium"
          className="rounded-xl border px-3 py-1.5 text-sm font-semibold hover:bg-gray-50"
        >
          Premium Packs
        </a>
      </div>
    </header>
  );
}

function Sidebar({ items, currentId, onSelect }) {
  return (
    <aside className="w-full max-w-xs border-r p-3">
      <div className="mb-3 flex items-center gap-2 font-semibold">
        <Home className="h-4 w-4" />
        Browse
      </div>
      <div className="space-y-4">
        {Object.entries(items).map(([section, subjects]) => (
          <div key={section}>
            <div className="mb-1 text-xs uppercase tracking-wide text-gray-500">{section}</div>
            {Object.entries(subjects).map(([subject, chapters]) => (
              <details key={subject} className="group">
                <summary className="cursor-pointer select-none rounded-lg px-2 py-1.5 text-sm font-medium hover:bg-gray-50">
                  {subject} <span className="text-gray-400">({chapters.length})</span>
                </summary>
                <ul className="mt-1 space-y-1 pl-3">
                  {chapters.map((ch) => (
                    <li key={ch.id}>
                      <button
                        onClick={() => onSelect(ch)}
                        className={`w-full rounded-lg px-2 py-1.5 text-left text-sm hover:bg-gray-50 ${
                          currentId === ch.id ? "bg-gray-100" : ""
                        }`}
                      >
                        {ch.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        ))}
      </div>
    </aside>
  );
}

function NotesView({ chapter }) {
  const { summary, bullets, formulas, tip } = chapter.notes;
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-lg font-semibold">
        <BookOpen className="h-5 w-5" /> Notes — {chapter.title}
      </div>
      <p className="rounded-xl bg-amber-50 p-3 text-sm">{summary}</p>
      {formulas?.length > 0 && (
        <div className="rounded-xl border p-3">
          <div className="mb-2 text-sm font-semibold">Key Equations</div>
          <ul className="list-inside list-disc text-sm">
            {formulas.map((f, i) => (
              <li key={i}>
                <code>{f}</code>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="rounded-xl border p-3">
        <div className="mb-2 text-sm font-semibold">Important Points</div>
        <ul className="list-inside list-disc text-sm">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
      {tip && (
        <div className="flex items-start gap-2 rounded-xl border p-3 text-sm">
          <HelpCircle className="mt-0.5 h-4 w-4" /> <span className="italic">Exam Tip:</span>
          <span>{tip}</span>
        </div>
      )}
      <div className="flex gap-2">
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 rounded-xl border px-3 py-2 text-sm hover:bg-gray-50"
          title="Print / Save as PDF"
        >
          <Download className="h-4 w-4" /> Download PDF (Print)
        </button>
      </div>
    </div>
  );
}

function QuizView({ chapter }) {
  const [responses, setResponses] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => {
    if (!submitted) return 0;
    return chapter.quiz.reduce((acc, q, i) => (responses[i] === q.answer ? acc + 1 : acc), 0);
  }, [submitted, responses, chapter.quiz]);

  const onSelect = (qi, oi) => setResponses((r) => ({ ...r, [qi]: oi }));

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-lg font-semibold">
        <HelpCircle className="h-5 w-5" /> MCQ Quiz — {chapter.title}
      </div>
      <ol className="space-y-4">
        {chapter.quiz.map((q, qi) => {
          const chosen = responses[qi];
          const correct = submitted ? q.answer : null;
          return (
            <li key={qi} className="rounded-xl border p-3">
              <div className="mb-2 text-sm font-medium">
                Q{qi + 1}. {q.q}
              </div>
              <div className="space-y-1">
                {q.options.map((opt, oi) => {
                  const isCorrect = submitted && oi === correct;
                  const isWrong = submitted && chosen === oi && oi !== correct;
                  return (
                    <label
                      key={oi}
                      className={`flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1 text-sm ${
                        isCorrect ? "bg-green-50" : isWrong ? "bg-red-50" : "hover:bg-gray-50"
                      }`}
                    >
                      <input
                        type="radio"
                        name={`q-${qi}`}
                        className="h-4 w-4"
                        checked={chosen === oi}
                        onChange={() => onSelect(qi, oi)}
                        disabled={submitted}
                      />
                      <span>{String.fromCharCode(65 + oi)}. {opt}</span>
                      {submitted && isCorrect && <CheckCircle2 className="ml-auto h-4 w-4" />}
                      {submitted && isWrong && <XCircle className="ml-auto h-4 w-4" />}
                    </label>
                  );
                })}
              </div>
              {submitted && (
                <div className="mt-2 rounded-lg bg-gray-50 p-2 text-xs text-gray-700">
                  <span className="font-semibold">Explain: </span>{q.explain}
                </div>
              )}
            </li>
          );
        })}
      </ol>
      {!submitted ? (
        <button
          onClick={() => setSubmitted(true)}
          className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
        >
          Submit Quiz
        </button>
      ) : (
        <div className="flex items-center gap-3 rounded-xl border p-3 text-sm">
          <span className="font-semibold">Score:</span> {score} / {chapter.quiz.length}
          <button
            onClick={() => {
              setResponses({});
              setSubmitted(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="ml-auto rounded-xl border px-3 py-1.5 hover:bg-gray-50"
          >
            Retry
          </button>
        </div>
      )}
    </div>
  );
}

function PremiumPacks() {
  return (
    <div id="premium" className="space-y-4">
      <div className="flex items-center gap-2 text-lg font-semibold">
        <ShoppingBag className="h-5 w-5" /> Premium Packs (Optional)
      </div>
      <p className="text-sm text-gray-700">
        Keep your site free for most students and offer affordable premium PDFs / full mock-test bundles. Example packs:
      </p>
      <ul className="list-inside list-disc text-sm">
        <li>Class 10 Science — All Chapters Revision + 500 MCQs — ₹299</li>
        <li>Class 12 Physics — 10 Full Mock Tests + Solutions — ₹299</li>
        <li>SSC Reasoning — 20 Practice Sets with Explanations — ₹249</li>
      </ul>
      <div className="rounded-xl border p-3 text-sm">
        <div className="mb-2 font-semibold">How to enable payments:</div>
        <ol className="list-inside list-decimal space-y-1">
          <li>Create a Razorpay Payment Link (or Instamojo/Gumroad).</li>
          <li>After payment, redirect buyers to a Google Drive folder or email the PDF automatically (Gumroad does this).</li>
          <li>Paste your payment link below.</li>
        </ol>
        <a
          href="#"
          className="mt-2 inline-block rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
        >
          Buy Now (Add your Razorpay link)
        </a>
      </div>
    </div>
  );
}

export default function StudyHub() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(() => catalog["Class 10"].Science[0]);
  const [mode, setMode] = useState("notes"); // "notes" | "quiz" | "premium"

  const filtered = useMemo(() => {
    if (!query.trim()) return catalog;
    const q = query.toLowerCase();
    const out = {};
    for (const [section, subjects] of Object.entries(catalog)) {
      const subOut = {};
      for (const [subject, chapters] of Object.entries(subjects)) {
        const matched = chapters.filter((c) => c.title.toLowerCase().includes(q));
        if (matched.length) subOut[subject] = matched;
      }
      if (Object.keys(subOut).length) out[section] = subOut;
    }
    return out;
  }, [query]);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header onSearch={setQuery} />
      <main className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-[260px_1fr]">
        <Sidebar items={filtered} currentId={selected?.id} onSelect={(ch) => { setSelected(ch); setMode("notes"); }} />
        <section className="p-4 md:p-6">
          <div className="mb-3 flex flex-wrap gap-2">
            <button
              onClick={() => setMode("notes")}
              className={`rounded-xl border px-3 py-1.5 text-sm ${mode === "notes" ? "bg-gray-100" : "hover:bg-gray-50"}`}
            >
              Notes
            </button>
            <button
              onClick={() => setMode("quiz")}
              className={`rounded-xl border px-3 py-1.5 text-sm ${mode === "quiz" ? "bg-gray-100" : "hover:bg-gray-50"}`}
            >
              MCQ Quiz
            </button>
            <button
              onClick={() => setMode("premium")}
              className={`rounded-xl border px-3 py-1.5 text-sm ${mode === "premium" ? "bg-gray-100" : "hover:bg-gray-50"}`}
            >
              Premium Packs
            </button>
          </div>

          {mode === "premium" ? (
            <PremiumPacks />
          ) : selected ? (
            <div className="space-y-6">
              {mode === "notes" && <NotesView chapter={selected} />}
              {mode === "quiz" && <QuizView chapter={selected} />}
            </div>
          ) : (
            <div className="rounded-xl border p-6 text-sm">
              Select a chapter from the left to view notes or start a quiz.
            </div>
          )}

          <footer className="mt-10 border-t pt-4 text-center text-xs text-gray-500">
            © {new Date().getFullYear()} StudyHub. All rights reserved. Educational use only. Sources: official syllabi referenced; content © you.
          </footer>
        </section>
      </main>
    </div>
  );
}
