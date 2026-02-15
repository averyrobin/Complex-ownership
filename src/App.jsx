import { useState, useEffect } from "react";

/* ── Icons ── */
const UserIcon=({size=16,color})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color||"currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const BuildingIcon=({size=16,color})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color||"currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/></svg>;
const CheckIcon=({size=12})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>;
const AlertIcon=({size=14})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>;
const SearchIcon=({size=14})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>;
const UploadIcon=({size=20})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/></svg>;
const FileIcon=({size=16})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>;
const LinkIcon=({size=12})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>;
const PlusIcon=({size=12})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>;
const XIcon=({size=14})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;
const SpinnerIcon=({size=16})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{animation:"spin 1s linear infinite"}}><style>{`@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}`}</style><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>;
const ChevronDown=({size=14})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>;
const ChevronRight=({size=14})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>;
const ArrowRight=({size=14})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>;

const EntityBubble=({type,size=28})=>{const b=type==="business";return<div style={{width:size,height:size,borderRadius:b?6:"50%",background:b?"#e8f0fe":"#e6f4ea",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,color:b?"#1967d2":"#1e8e3e"}}>{b?<BuildingIcon size={size*0.5}/>:<UserIcon size={size*0.5}/>}</div>};

/* ══════════════════════════════════════════
   SIMULATED DATA
   ══════════════════════════════════════════ */

const UPLOADED_FILES = [
  { name: "Garden_State_Holdings_1065_2025.pdf", pages: 42 },
  { name: "GSH_K1_Schedule_All_Partners.pdf", pages: 28 },
  { name: "GSH_Subs_I_1065_2025.pdf", pages: 18 },
  { name: "GSH_Subs_II_1065_2025.pdf", pages: 16 },
  { name: "GSH_Subs_III_1065_2025.pdf", pages: 20 },
];

const EXTRACTED_ENTITIES = [
  { id: "e1", name: "Garden State Holdings LLC", type: "business", ein: "27-4918523", state: "NJ", address: "100 Main St, Red Bank, NJ 07701", role: "Primary Entity", ownership: null,
    match: { type: "none" } },
  { id: "e2", name: "GSH Subs I LLC", type: "business", ein: "82-1204556", state: "NJ", address: "1420 Oak Tree Rd, Edison, NJ 08820", role: "Subsidiary", ownership: 100, parent: "e1",
    match: { type: "exact", confidence: 99, existing: { id: "001xR00000ABC", name: "GSH Subs I LLC", ein: "82-1204556", lastActivity: "Loan originated Jun 2024" } } },
  { id: "e3", name: "GSH Subs II LLC", type: "business", ein: "82-1207891", state: "NJ", address: "22 Nassau St, Princeton, NJ 08540", role: "Subsidiary", ownership: 100, parent: "e1",
    match: { type: "none" } },
  { id: "e4", name: "GSH Subs III LLC", type: "business", ein: "82-1215334", state: "NJ", address: "78 George St, New Brunswick, NJ 08901", role: "Subsidiary", ownership: 100, parent: "e1",
    match: { type: "none" } },
];

const EXTRACTED_INDIVIDUALS = [
  { id: "i1", name: "Peter Cancro", type: "individual", ssn: "***-**-4891", dob: "08/12/1957", address: "14 Navesink Ave, Rumson, NJ 07760",
    ownerships: [
      { entity: "e1", pct: 65, role: "Managing Member" },
      { entity: "e2", pct: 60, role: "Member" },
      { entity: "e3", pct: 60, role: "Member" },
      { entity: "e4", pct: 40, role: "Member" },
    ],
    match: { type: "exact", confidence: 99, existing: { id: "003xR00000XYZ", name: "Peter Cancro", ssn: "***-**-4891", lastActivity: "Existing borrower — 3 active relationships" } } },
  { id: "i2", name: "Maria Cancro", type: "individual", ssn: "***-**-3277", dob: "03/22/1960", address: "14 Navesink Ave, Rumson, NJ 07760",
    ownerships: [
      { entity: "e1", pct: 20, role: "Member" },
      { entity: "e2", pct: 20, role: "Member" },
      { entity: "e3", pct: 20, role: "Member" },
    ],
    match: { type: "probable", confidence: 85, existing: { id: "003xR00000DEF", name: "Maria T. Cancro", ssn: "—", lastActivity: "Guarantor on GSH Subs I loan" } } },
  { id: "i3", name: "Tom Burke", type: "individual", ssn: "***-**-6614", dob: "01/05/1982", address: "88 Broad St, Red Bank, NJ 07701",
    ownerships: [
      { entity: "e2", pct: 20, role: "Member" },
    ],
    match: { type: "none" } },
  { id: "i4", name: "David Ross", type: "individual", ssn: "***-**-5502", dob: "11/30/1979", address: "42 Georges Rd, New Brunswick, NJ 08901",
    ownerships: [
      { entity: "e4", pct: 20, role: "Member" },
    ],
    match: { type: "possible", confidence: 62, existing: { id: "003xR00000GHI", name: "David M. Ross", ssn: "—", lastActivity: "Deposit account opened 2023" } } },
  { id: "i5", name: "Cancro Family Trust", type: "business", ein: "61-7823001", address: "14 Navesink Ave, Rumson, NJ 07760",
    ownerships: [
      { entity: "e1", pct: 15, role: "Member" },
      { entity: "e4", pct: 30, role: "Member" },
    ],
    match: { type: "exact", confidence: 98, existing: { id: "001xR00000JKL", name: "Cancro Family Trust", ein: "61-7823001", lastActivity: "Existing trust record" } } },
  { id: "i6", name: "Lisa Chen", type: "individual", ssn: "***-**-8823", dob: "09/14/1985", address: "201 Nassau St, Princeton, NJ 08540",
    ownerships: [
      { entity: "e3", pct: 20, role: "Member" },
    ],
    match: { type: "none" } },
];

const ALL_EXTRACTED = [...EXTRACTED_ENTITIES, ...EXTRACTED_INDIVIDUALS];

/* ══════════════════════════════════════════
   STEP COMPONENTS
   ══════════════════════════════════════════ */

const StepIndicator = ({ current, steps }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 0, marginBottom: 24 }}>
    {steps.map((step, i) => {
      const isComplete = i < current;
      const isCurrent = i === current;
      return <div key={i} style={{ display: "flex", alignItems: "center", flex: i < steps.length - 1 ? 1 : "none" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{
            width: 32, height: 32, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
            background: isComplete ? "#1967d2" : isCurrent ? "white" : "#f1f3f4",
            border: isCurrent ? "2px solid #1967d2" : "none",
            color: isComplete ? "white" : isCurrent ? "#1967d2" : "#9aa0a6",
            fontSize: 13, fontWeight: 700,
          }}>
            {isComplete ? <CheckIcon size={14} /> : i + 1}
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: isCurrent ? 700 : 500, color: isCurrent ? "#1967d2" : isComplete ? "#1e8e3e" : "#9aa0a6" }}>{step}</div>
          </div>
        </div>
        {i < steps.length - 1 && <div style={{ flex: 1, height: 2, background: isComplete ? "#1967d2" : "#e8eaed", margin: "0 12px" }} />}
      </div>;
    })}
  </div>
);

/* Step 1: Upload */
const UploadStep = ({ onNext }) => {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const simulateUpload = () => {
    setUploading(true);
    setTimeout(() => {
      setFiles(UPLOADED_FILES);
      setUploading(false);
    }, 1500);
  };

  return <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
    <div>
      <h2 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: "#202124" }}>Upload Tax Returns</h2>
      <p style={{ margin: "6px 0 0", fontSize: 13, color: "#5f6368", lineHeight: 1.5 }}>
        Upload the partnership's Form 1065 and Schedule K-1s. We'll extract entities, individuals, ownership percentages, and identifying information automatically.
      </p>
    </div>

    {/* Drop zone */}
    {files.length === 0 && <div
      onClick={simulateUpload}
      style={{
        border: "2px dashed #dadce0", borderRadius: 12, padding: "48px 24px",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 12,
        cursor: "pointer", transition: "border-color 0.15s, background 0.15s",
        background: uploading ? "#f8f9fa" : "white",
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = "#1967d2"; e.currentTarget.style.background = "#f8faff"; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = "#dadce0"; e.currentTarget.style.background = uploading ? "#f8f9fa" : "white"; }}
    >
      {uploading ? <>
        <SpinnerIcon size={28} />
        <div style={{ fontSize: 14, fontWeight: 600, color: "#1967d2" }}>Uploading documents...</div>
      </> : <>
        <UploadIcon size={36} />
        <div style={{ fontSize: 14, fontWeight: 600, color: "#202124" }}>Drop tax return files here</div>
        <div style={{ fontSize: 12, color: "#80868b" }}>Form 1065, Schedule K-1s, and supporting schedules</div>
        <div style={{ fontSize: 12, color: "#80868b" }}>PDF, up to 50MB each</div>
      </>}
    </div>}

    {/* Uploaded files list */}
    {files.length > 0 && <div>
      <div style={{ fontSize: 13, fontWeight: 600, color: "#202124", marginBottom: 8 }}>Uploaded Documents ({files.length})</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {files.map((f, i) => <div key={i} style={{
          display: "flex", alignItems: "center", gap: 10, padding: "10px 14px",
          background: "#f8f9fa", borderRadius: 8, border: "1px solid #e8eaed",
        }}>
          <FileIcon size={18} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 500, color: "#202124" }}>{f.name}</div>
            <div style={{ fontSize: 11, color: "#80868b" }}>{f.pages} pages</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 4, color: "#1e8e3e", fontSize: 12, fontWeight: 600 }}>
            <CheckIcon size={12} /> Uploaded
          </div>
        </div>)}
      </div>

      {/* Supported documents hint */}
      <div style={{ marginTop: 16, padding: "12px 14px", background: "#e8f0fe", borderRadius: 8, fontSize: 12, color: "#1967d2" }}>
        <strong>Tip:</strong> For multi-layered structures, upload the 1065 for each partnership entity. We'll automatically detect parent-subsidiary relationships from the K-1 partner information and build the full hierarchy.
      </div>
    </div>}

    {files.length > 0 && <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <button onClick={onNext} style={{
        display: "flex", alignItems: "center", gap: 6,
        padding: "10px 24px", borderRadius: 8, border: "none",
        background: "#1967d2", color: "white", fontSize: 14, fontWeight: 600, cursor: "pointer",
      }}>
        Extract Entities <ArrowRight size={14} />
      </button>
    </div>}
  </div>;
};

/* Step 2: Extraction */
const ExtractionStep = ({ onNext, onBack }) => {
  const [extracting, setExtracting] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!extracting) return;
    const steps = [
      { pct: 15, delay: 600 },
      { pct: 35, delay: 800 },
      { pct: 55, delay: 700 },
      { pct: 75, delay: 900 },
      { pct: 90, delay: 600 },
      { pct: 100, delay: 500 },
    ];
    let i = 0;
    const run = () => {
      if (i >= steps.length) { setExtracting(false); return; }
      setTimeout(() => { setProgress(steps[i].pct); i++; run(); }, steps[i].delay);
    };
    run();
  }, []);

  const labels = ["Reading Form 1065...", "Parsing K-1 schedules...", "Extracting entity information...", "Extracting individual partners...", "Calculating ownership percentages...", "Extraction complete"];
  const labelIdx = progress < 20 ? 0 : progress < 40 ? 1 : progress < 60 ? 2 : progress < 80 ? 3 : progress < 100 ? 4 : 5;

  return <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
    <div>
      <h2 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: "#202124" }}>Extracting Data</h2>
      <p style={{ margin: "6px 0 0", fontSize: 13, color: "#5f6368" }}>Analyzing tax return documents to identify entities, individuals, and ownership structure.</p>
    </div>

    {extracting ? <div style={{ padding: "40px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
      <SpinnerIcon size={32} />
      <div style={{ fontSize: 14, fontWeight: 600, color: "#1967d2" }}>{labels[labelIdx]}</div>
      <div style={{ width: 300, height: 6, background: "#e8eaed", borderRadius: 99, overflow: "hidden" }}>
        <div style={{ width: `${progress}%`, height: "100%", background: "#1967d2", borderRadius: 99, transition: "width 0.4s ease" }} />
      </div>
      <div style={{ fontSize: 12, color: "#9aa0a6" }}>{progress}%</div>
    </div>
    : <div>
      {/* Summary cards */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 12, marginBottom: 20 }}>
        {[
          { label: "Entities Found", value: EXTRACTED_ENTITIES.length, icon: <BuildingIcon size={16} color="#1967d2" />, bg: "#e8f0fe" },
          { label: "Individuals Found", value: EXTRACTED_INDIVIDUALS.filter(i => i.type === "individual").length, icon: <UserIcon size={16} color="#1e8e3e" />, bg: "#e6f4ea" },
          { label: "Ownership Links", value: EXTRACTED_INDIVIDUALS.reduce((s, i) => s + i.ownerships.length, 0), icon: <LinkIcon size={16} />, bg: "#f3e8fd" },
          { label: "Potential Matches", value: ALL_EXTRACTED.filter(e => e.match.type !== "none").length, icon: <AlertIcon size={16} />, bg: "#fef7e0" },
        ].map((s, i) => <div key={i} style={{ padding: "16px", borderRadius: 8, background: "white", border: "1px solid #e0e0e0", display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 36, height: 36, borderRadius: 8, background: s.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>{s.icon}</div>
          <div><div style={{ fontSize: 20, fontWeight: 800, color: "#202124" }}>{s.value}</div><div style={{ fontSize: 11, color: "#80868b" }}>{s.label}</div></div>
        </div>)}
      </div>

      {/* Extracted hierarchy preview */}
      <div style={{ background: "white", borderRadius: 8, border: "1px solid #e0e0e0", overflow: "hidden", marginBottom: 20 }}>
        <div style={{ padding: "12px 16px", borderBottom: "1px solid #e8eaed", fontSize: 14, fontWeight: 700, color: "#202124" }}>Extracted Structure</div>
        <div style={{ padding: "16px" }}>
          {/* Primary entity */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <EntityBubble type="business" size={30} />
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#202124" }}>Garden State Holdings LLC</div>
              <div style={{ fontSize: 11, color: "#80868b" }}>EIN: 27-4918523 · Red Bank, NJ</div>
            </div>
          </div>
          {/* Subsidiaries */}
          <div style={{ paddingLeft: 20, borderLeft: "2px solid #e8eaed" }}>
            {EXTRACTED_ENTITIES.filter(e => e.parent).map((e, i) => <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 0 8px 12px" }}>
              <EntityBubble type="business" size={24} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#202124" }}>{e.name}</div>
                <div style={{ fontSize: 11, color: "#80868b" }}>EIN: {e.ein} · {e.address.split(",").slice(-2).join(",").trim()}</div>
              </div>
              <span style={{ fontSize: 11, fontWeight: 600, color: "#1967d2", background: "#e8f0fe", padding: "2px 8px", borderRadius: 99 }}>100% owned</span>
            </div>)}
          </div>
          {/* Individuals summary */}
          <div style={{ marginTop: 16, paddingTop: 12, borderTop: "1px solid #e8eaed" }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#5f6368", marginBottom: 8 }}>Partners Identified from K-1s</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {EXTRACTED_INDIVIDUALS.map((ind, i) => {
                const uboIn = ind.ownerships.filter(o => o.pct >= 25).length;
                return <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 10px", borderRadius: 6, background: "#f8f9fa", border: "1px solid #e8eaed" }}>
                  <EntityBubble type={ind.type} size={20} />
                  <span style={{ fontSize: 12, fontWeight: 500, color: "#202124" }}>{ind.name}</span>
                  {ind.type === "individual" && <span style={{ fontSize: 10, color: "#80868b" }}>{ind.ssn}</span>}
                  {ind.type === "business" && <span style={{ fontSize: 10, color: "#80868b" }}>{ind.ein}</span>}
                  <span style={{ fontSize: 10, fontWeight: 600, color: "#1967d2" }}>{ind.ownerships.length} entities</span>
                  {uboIn > 0 && <span style={{ fontSize: 8.5, fontWeight: 700, padding: "1px 5px", borderRadius: 3, background: "#1a1a2e", color: "white" }}>UBO</span>}
                </div>;
              })}
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button onClick={onBack} style={{ padding: "10px 20px", borderRadius: 8, border: "1px solid #dadce0", background: "white", color: "#3c4043", fontSize: 14, fontWeight: 500, cursor: "pointer" }}>Back</button>
        <button onClick={onNext} style={{ display: "flex", alignItems: "center", gap: 6, padding: "10px 24px", borderRadius: 8, border: "none", background: "#1967d2", color: "white", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
          Review Matches <ArrowRight size={14} />
        </button>
      </div>
    </div>}
  </div>;
};

/* Step 3: Dedup & Match Resolution */
const MatchStep = ({ onNext, onBack }) => {
  const [resolutions, setResolutions] = useState({});

  const allItems = ALL_EXTRACTED.filter(e => e.match.type !== "none");
  const noMatchItems = ALL_EXTRACTED.filter(e => e.match.type === "none");
  const resolvedCount = Object.keys(resolutions).length;
  const allResolved = resolvedCount === allItems.length;

  const matchColors = {
    exact: { bg: "#e6f4ea", border: "#34a853", color: "#1e8e3e", label: "Exact Match", sub: "EIN/SSN matched" },
    probable: { bg: "#fef7e0", border: "#f9ab00", color: "#b06000", label: "Probable Match", sub: "Name + address matched" },
    possible: { bg: "#fff3e0", border: "#e65100", color: "#e65100", label: "Possible Match", sub: "Name partially matched" },
  };

  const resolve = (itemId, action) => setResolutions(prev => ({ ...prev, [itemId]: action }));

  return <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
    <div>
      <h2 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: "#202124" }}>Review Matches</h2>
      <p style={{ margin: "6px 0 0", fontSize: 13, color: "#5f6368", lineHeight: 1.5 }}>
        We found {allItems.length} potential matches with existing records in nCino. Review each match and decide whether to link to the existing record or create a new one.
      </p>
    </div>

    {/* Progress */}
    <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", background: allResolved ? "#e6f4ea" : "#f8f9fa", borderRadius: 8, border: "1px solid " + (allResolved ? "#34a853" : "#e8eaed") }}>
      {allResolved ? <CheckIcon size={16} /> : <AlertIcon size={16} />}
      <span style={{ fontSize: 13, fontWeight: 600, color: allResolved ? "#1e8e3e" : "#5f6368" }}>
        {allResolved ? "All matches resolved" : `${resolvedCount} of ${allItems.length} matches resolved`}
      </span>
      <span style={{ fontSize: 12, color: "#80868b", marginLeft: "auto" }}>{noMatchItems.length} new records will be created</span>
    </div>

    {/* Match cards */}
    {allItems.map((item, idx) => {
      const mc = matchColors[item.match.type];
      const resolution = resolutions[item.id];
      const isResolved = !!resolution;
      return <div key={item.id} style={{
        background: "white", borderRadius: 10, border: `1px solid ${isResolved ? "#e8eaed" : mc.border}`,
        overflow: "hidden", opacity: isResolved ? 0.7 : 1, transition: "opacity 0.2s",
      }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", borderBottom: "1px solid #e8eaed", background: isResolved ? "#f8f9fa" : mc.bg }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <EntityBubble type={item.type} size={28} />
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#202124" }}>{item.name}</div>
              <div style={{ fontSize: 11, color: "#80868b" }}>
                {item.type === "business" ? `EIN: ${item.ein || "—"}` : `SSN: ${item.ssn || "—"}`}
                {item.dob && ` · DOB: ${item.dob}`}
              </div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {isResolved && <span style={{
              fontSize: 12, fontWeight: 600, padding: "4px 10px", borderRadius: 99,
              background: resolution === "link" ? "#e6f4ea" : "#e8f0fe",
              color: resolution === "link" ? "#1e8e3e" : "#1967d2",
              display: "flex", alignItems: "center", gap: 4,
            }}>
              {resolution === "link" ? <><LinkIcon size={11} /> Linked</> : <><PlusIcon size={11} /> Create New</>}
            </span>}
            <span style={{ fontSize: 11, fontWeight: 600, padding: "3px 8px", borderRadius: 99, background: mc.bg, color: mc.color }}>
              {mc.label} · {item.match.confidence}%
            </span>
          </div>
        </div>

        {/* Comparison */}
        {!isResolved && <div style={{ padding: "14px 16px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 16, alignItems: "start" }}>
            {/* Extracted */}
            <div style={{ padding: "12px", borderRadius: 8, background: "#f8f9fa", border: "1px solid #e8eaed" }}>
              <div style={{ fontSize: 10.5, fontWeight: 700, color: "#80868b", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 8 }}>From Tax Return</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#202124", marginBottom: 4 }}>{item.name}</div>
              <div style={{ fontSize: 12, color: "#5f6368" }}>{item.type === "business" ? `EIN: ${item.ein}` : `SSN: ${item.ssn}`}</div>
              {item.dob && <div style={{ fontSize: 12, color: "#5f6368" }}>DOB: {item.dob}</div>}
              <div style={{ fontSize: 12, color: "#5f6368" }}>{item.address}</div>
            </div>

            {/* Arrow */}
            <div style={{ display: "flex", alignItems: "center", paddingTop: 30, color: "#dadce0" }}>
              <ArrowRight size={20} />
            </div>

            {/* Existing record */}
            <div style={{ padding: "12px", borderRadius: 8, background: mc.bg, border: `1px solid ${mc.border}44` }}>
              <div style={{ fontSize: 10.5, fontWeight: 700, color: mc.color, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 8 }}>Existing in nCino</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#202124", marginBottom: 4 }}>{item.match.existing.name}</div>
              <div style={{ fontSize: 12, color: "#5f6368" }}>{item.type === "business" ? `EIN: ${item.match.existing.ein || "—"}` : `SSN: ${item.match.existing.ssn || "—"}`}</div>
              <div style={{ fontSize: 12, color: "#5f6368" }}>ID: {item.match.existing.id}</div>
              <div style={{ fontSize: 11, color: mc.color, fontWeight: 500, marginTop: 6 }}>{item.match.existing.lastActivity}</div>
            </div>
          </div>

          {/* Action buttons */}
          <div style={{ display: "flex", gap: 10, marginTop: 14, justifyContent: "flex-end" }}>
            <button onClick={() => resolve(item.id, "new")} style={{
              display: "flex", alignItems: "center", gap: 5,
              padding: "8px 16px", borderRadius: 6, border: "1px solid #dadce0",
              background: "white", color: "#5f6368", fontSize: 13, fontWeight: 500, cursor: "pointer",
            }}>
              <PlusIcon size={12} /> Create New Record
            </button>
            <button onClick={() => resolve(item.id, "link")} style={{
              display: "flex", alignItems: "center", gap: 5,
              padding: "8px 16px", borderRadius: 6, border: "none",
              background: "#1967d2", color: "white", fontSize: 13, fontWeight: 600, cursor: "pointer",
            }}>
              <LinkIcon size={12} /> Link to Existing
            </button>
          </div>
        </div>}
      </div>;
    })}

    {/* New records (no match) */}
    {noMatchItems.length > 0 && <div style={{ background: "white", borderRadius: 8, border: "1px solid #e0e0e0", overflow: "hidden" }}>
      <div style={{ padding: "12px 16px", borderBottom: "1px solid #e8eaed", display: "flex", alignItems: "center", gap: 8 }}>
        <PlusIcon size={14} />
        <span style={{ fontSize: 14, fontWeight: 700, color: "#202124" }}>New Records</span>
        <span style={{ fontSize: 11, fontWeight: 600, color: "#5f6368", background: "#f1f3f4", padding: "2px 7px", borderRadius: 99 }}>{noMatchItems.length}</span>
        <span style={{ fontSize: 12, color: "#80868b", marginLeft: 8 }}>No existing matches found — these will be created as new records</span>
      </div>
      {noMatchItems.map((item, idx) => <div key={item.id} style={{
        display: "flex", alignItems: "center", gap: 10, padding: "10px 16px",
        borderBottom: idx < noMatchItems.length - 1 ? "1px solid #f0f1f3" : "none",
      }}>
        <EntityBubble type={item.type} size={24} />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#202124" }}>{item.name}</div>
          <div style={{ fontSize: 11, color: "#80868b" }}>{item.type === "business" ? `EIN: ${item.ein}` : `SSN: ${item.ssn}`}</div>
        </div>
        <span style={{ fontSize: 11, fontWeight: 600, color: "#1967d2", background: "#e8f0fe", padding: "2px 8px", borderRadius: 99 }}>New</span>
      </div>)}
    </div>}

    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <button onClick={onBack} style={{ padding: "10px 20px", borderRadius: 8, border: "1px solid #dadce0", background: "white", color: "#3c4043", fontSize: 14, fontWeight: 500, cursor: "pointer" }}>Back</button>
      <button onClick={onNext} disabled={!allResolved} style={{
        display: "flex", alignItems: "center", gap: 6,
        padding: "10px 24px", borderRadius: 8, border: "none",
        background: allResolved ? "#1967d2" : "#dadce0", color: allResolved ? "white" : "#9aa0a6",
        fontSize: 14, fontWeight: 600, cursor: allResolved ? "pointer" : "default",
      }}>
        Review Case <ArrowRight size={14} />
      </button>
    </div>
  </div>;
};

/* Step 4: Review & Confirm */
const ReviewStep = ({ onBack, onConfirm }) => {
  const [creating, setCreating] = useState(false);
  const [created, setCreated] = useState(false);

  const handleCreate = () => {
    setCreating(true);
    setTimeout(() => { setCreating(false); setCreated(true); }, 2000);
  };

  if (created) {
    return <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, padding: "60px 24px" }}>
      <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#e6f4ea", display: "flex", alignItems: "center", justifyContent: "center", color: "#1e8e3e" }}><CheckIcon size={28} /></div>
      <div style={{ fontSize: 20, fontWeight: 700, color: "#202124" }}>Case Created Successfully</div>
      <div style={{ fontSize: 14, color: "#5f6368", textAlign: "center", maxWidth: 400 }}>
        Onboarding case OC-000042 has been created for Cancro Enterprise Group with {EXTRACTED_ENTITIES.length} entities and {EXTRACTED_INDIVIDUALS.length} related parties.
      </div>
      <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
        <button style={{ padding: "10px 24px", borderRadius: 8, border: "1px solid #dadce0", background: "white", color: "#3c4043", fontSize: 14, fontWeight: 500, cursor: "pointer" }}>View Case →</button>
      </div>
    </div>;
  }

  return <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
    <div>
      <h2 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: "#202124" }}>Review & Create Case</h2>
      <p style={{ margin: "6px 0 0", fontSize: 13, color: "#5f6368" }}>Review the case structure before creating. All entities and ownership relationships will be established.</p>
    </div>

    {/* Case summary */}
    <div style={{ background: "white", borderRadius: 8, border: "1px solid #e0e0e0", overflow: "hidden" }}>
      <div style={{ padding: "14px 16px", borderBottom: "1px solid #e8eaed" }}>
        <div style={{ fontSize: 15, fontWeight: 700, color: "#202124" }}>Case Summary</div>
      </div>
      <div style={{ padding: "16px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "12px 24px" }}>
          {[
            { l: "Primary Entity", v: "Garden State Holdings LLC" },
            { l: "Case Type", v: "Commercial Onboarding" },
            { l: "Total Entities", v: EXTRACTED_ENTITIES.length.toString() },
            { l: "Related Parties", v: EXTRACTED_INDIVIDUALS.length.toString() },
            { l: "Linked to Existing", v: ALL_EXTRACTED.filter(e => e.match.type !== "none").length.toString() },
            { l: "New Records", v: ALL_EXTRACTED.filter(e => e.match.type === "none").length.toString() },
            { l: "UBOs Identified", v: "2" },
            { l: "Ownership Links", v: EXTRACTED_INDIVIDUALS.reduce((s, i) => s + i.ownerships.length, 0).toString() },
          ].map((f, i) => <div key={i}><div style={{ fontSize: 11, fontWeight: 600, color: "#80868b", marginBottom: 3 }}>{f.l}</div><div style={{ fontSize: 14, fontWeight: 600, color: "#202124" }}>{f.v}</div></div>)}
        </div>
      </div>
    </div>

    {/* Structure preview */}
    <div style={{ background: "white", borderRadius: 8, border: "1px solid #e0e0e0", overflow: "hidden" }}>
      <div style={{ padding: "14px 16px", borderBottom: "1px solid #e8eaed" }}>
        <div style={{ fontSize: 15, fontWeight: 700, color: "#202124" }}>Ownership Structure</div>
      </div>
      <div style={{ padding: "16px" }}>
        {/* Primary entity */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 0", marginBottom: 4 }}>
          <EntityBubble type="business" size={28} />
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#202124" }}>Garden State Holdings LLC</div>
            <div style={{ fontSize: 11, color: "#80868b" }}>EIN: 27-4918523 · Primary Entity</div>
          </div>
        </div>

        {/* Partners of holding company */}
        <div style={{ paddingLeft: 16, borderLeft: "2px solid #e8eaed", marginBottom: 16 }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: "#80868b", marginBottom: 6, paddingLeft: 8 }}>Partners</div>
          {EXTRACTED_INDIVIDUALS.filter(ind => ind.ownerships.some(o => o.entity === "e1")).map((ind, i) => {
            const ow = ind.ownerships.find(o => o.entity === "e1");
            return <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 8px" }}>
              <EntityBubble type={ind.type} size={22} />
              <span style={{ fontSize: 12.5, fontWeight: 500, color: "#202124", flex: 1 }}>{ind.name}</span>
              <span style={{ fontSize: 12, fontWeight: 700, color: ow.pct >= 25 ? "#1967d2" : "#9aa0a6" }}>{ow.pct}%</span>
              {ow.pct >= 25 && ind.type === "individual" && <span style={{ fontSize: 8, fontWeight: 700, padding: "1px 4px", borderRadius: 2, background: "#1a1a2e", color: "white" }}>UBO</span>}
              {ind.match.type !== "none" && <span style={{ fontSize: 9, fontWeight: 600, padding: "1px 5px", borderRadius: 3, background: "#e6f4ea", color: "#1e8e3e" }}>Linked</span>}
            </div>;
          })}
        </div>

        {/* Subsidiaries */}
        {EXTRACTED_ENTITIES.filter(e => e.parent).map((entity, ei) => <div key={ei} style={{ marginBottom: 14 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 0" }}>
            <EntityBubble type="business" size={24} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#202124" }}>{entity.name}</div>
              <div style={{ fontSize: 11, color: "#80868b" }}>EIN: {entity.ein}</div>
            </div>
            {entity.match.type !== "none" && <span style={{ fontSize: 9, fontWeight: 600, padding: "2px 6px", borderRadius: 3, background: "#e6f4ea", color: "#1e8e3e" }}>Linked to existing</span>}
          </div>
          <div style={{ paddingLeft: 24, borderLeft: "2px solid #f0f1f3" }}>
            {EXTRACTED_INDIVIDUALS.filter(ind => ind.ownerships.some(o => o.entity === entity.id)).map((ind, i) => {
              const ow = ind.ownerships.find(o => o.entity === entity.id);
              return <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, padding: "4px 8px" }}>
                <EntityBubble type={ind.type} size={18} />
                <span style={{ fontSize: 12, fontWeight: 500, color: "#3c4043", flex: 1 }}>{ind.name}</span>
                <span style={{ fontSize: 11, fontWeight: 600, color: ow.pct >= 25 ? "#1967d2" : "#9aa0a6" }}>{ow.pct}%</span>
                {ow.pct >= 25 && ind.type === "individual" && <span style={{ fontSize: 7.5, fontWeight: 700, padding: "1px 4px", borderRadius: 2, background: "#1a1a2e", color: "white" }}>UBO</span>}
              </div>;
            })}
          </div>
        </div>)}
      </div>
    </div>

    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <button onClick={onBack} style={{ padding: "10px 20px", borderRadius: 8, border: "1px solid #dadce0", background: "white", color: "#3c4043", fontSize: 14, fontWeight: 500, cursor: "pointer" }}>Back</button>
      <button onClick={handleCreate} disabled={creating} style={{
        display: "flex", alignItems: "center", gap: 6,
        padding: "10px 28px", borderRadius: 8, border: "none",
        background: "#1967d2", color: "white", fontSize: 14, fontWeight: 600, cursor: "pointer",
      }}>
        {creating ? <><SpinnerIcon size={14} /> Creating Case...</> : <>Create Case <CheckIcon size={14} /></>}
      </button>
    </div>
  </div>;
};


/* ══════════════════════════════════════════
   MAIN LAYOUT
   ══════════════════════════════════════════ */

export default function App() {
  const [step, setStep] = useState(0);
  const steps = ["Upload Documents", "Extract Data", "Match & Dedup", "Review & Create"];

  return <div style={{ fontFamily: "'Salesforce Sans','SF Pro Text',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif", background: "#f3f3f3", minHeight: "100vh", fontSize: 13, color: "#3c4043" }}>
    {/* Top Nav */}
    <div style={{ background: "white", borderBottom: "1px solid #e0e0e0", padding: "0 16px", display: "flex", alignItems: "center", height: 44, gap: 24 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginRight: 8 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,5px)", gap: 3, opacity: 0.4 }}>{[...Array(9)].map((_, i) => <div key={i} style={{ width: 5, height: 5, borderRadius: "50%", background: "#5f6368" }} />)}</div>
        <span style={{ fontWeight: 700, fontSize: 14, color: "#1967d2", letterSpacing: -0.2 }}>nCino</span>
      </div>
      {["Home", "Leads", "Opportunities", "Relationships", "Applications", "Loans", "Deposits", "Onboarding"].map(item => <span key={item} style={{ fontSize: 12.5, color: item === "Onboarding" ? "#1967d2" : "#5f6368", fontWeight: item === "Onboarding" ? 600 : 400, cursor: "pointer", padding: "12px 0", borderBottom: item === "Onboarding" ? "2px solid #1967d2" : "2px solid transparent" }}>{item}</span>)}
      <div style={{ marginLeft: "auto" }}><div style={{ display: "flex", alignItems: "center", gap: 6, padding: "5px 12px", borderRadius: 4, background: "#f1f3f4", fontSize: 12, color: "#80868b" }}><SearchIcon size={14} /> Search...</div></div>
    </div>

    {/* Page Header */}
    <div style={{ background: "white", borderBottom: "1px solid #e0e0e0", padding: "16px 24px" }}>
      <div style={{ fontSize: 12, color: "#80868b", marginBottom: 4 }}>
        <span style={{ color: "#1967d2", cursor: "pointer" }}>All Onboarding</span>
        <span style={{ color: "#bdc1c6", margin: "0 5px" }}>&gt;</span>
        <span>New Case</span>
      </div>
      <div style={{ fontSize: 18, fontWeight: 700, color: "#202124" }}>Create Onboarding Case</div>
    </div>

    {/* Content */}
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "24px" }}>
      <StepIndicator current={step} steps={steps} />

      <div style={{ background: "white", borderRadius: 10, border: "1px solid #e0e0e0", padding: "24px", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
        {step === 0 && <UploadStep onNext={() => setStep(1)} />}
        {step === 1 && <ExtractionStep onNext={() => setStep(2)} onBack={() => setStep(0)} />}
        {step === 2 && <MatchStep onNext={() => setStep(3)} onBack={() => setStep(1)} />}
        {step === 3 && <ReviewStep onBack={() => setStep(2)} />}
      </div>
    </div>
  </div>;
}
