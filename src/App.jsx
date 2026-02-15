import { useState } from "react";

/* ── Icons (compact) ── */
const ChevronDown=({size=16})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>;
const ChevronRight=({size=16})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>;
const UserIcon=({size=16,color})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color||"currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const BuildingIcon=({size=16,color})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color||"currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/></svg>;
const CheckCircle=({size=16})=><svg width={size} height={size} viewBox="0 0 24 24" fill="#34a853" stroke="white" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><polyline points="9 12 11.5 14.5 16 9.5"/></svg>;
const DocIcon=({size=14,color="#5f6368"})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>;
const PersonalIcon=({size=14})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#5f6368" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>;
const RelatedPartiesIcon=({size=14,color="#5f6368"})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const BusinessInfoIcon=({size=14,complete=false})=>complete?<CheckCircle size={size}/>:<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#5f6368" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/></svg>;
const SearchIcon=()=><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9aa0a6" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>;
const CheckIcon=({size=12})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>;
const AlertIcon=({size=14})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>;
const ClockIcon=({size=12})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
const XIcon=({size=16})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;

/* ── Reusable ── */
const EntityBubble=({type,size=28})=>{const b=type==="business";return<div style={{width:size,height:size,borderRadius:b?6:"50%",background:b?"#e8f0fe":"#e6f4ea",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,color:b?"#1967d2":"#1e8e3e"}}>{b?<BuildingIcon size={size*0.5}/>:<UserIcon size={size*0.5}/>}</div>};
const NavItem=({icon,label,active,indent=0,onClick,count})=><div onClick={onClick} style={{display:"flex",alignItems:"center",gap:8,padding:`7px 12px 7px ${16+indent}px`,fontSize:13,color:active?"#1967d2":"#3c4043",fontWeight:active?600:400,background:active?"#e8f0fe":"transparent",borderLeft:active?"3px solid #1967d2":"3px solid transparent",cursor:"pointer",transition:"background 0.12s"}}><span style={{display:"flex",flexShrink:0}}>{icon}</span><span style={{flex:1}}>{label}</span>{count&&<span style={{fontSize:10,fontWeight:600,color:"#9aa0a6",background:"#f1f3f4",padding:"1px 5px",borderRadius:99}}>{count}</span>}</div>;
const StatusDot=({status})=>{const m={complete:"#34a853",in_progress:"#4285f4",needs_review:"#f9ab00",not_started:"#dadce0"};return<span style={{width:8,height:8,borderRadius:"50%",background:m[status]||"#dadce0",display:"inline-block"}}/>};
const areaStatusIcon=(status)=>{const m={complete:{bg:"#e6f4ea",color:"#1e8e3e",icon:<CheckIcon size={11}/>},in_progress:{bg:"#e8f0fe",color:"#1967d2",icon:<ClockIcon size={11}/>},needs_review:{bg:"#fef7e0",color:"#b06000",icon:<AlertIcon size={11}/>},not_started:{bg:"#f1f3f4",color:"#bdc1c6",icon:<span style={{width:6,height:6,borderRadius:"50%",background:"#dadce0",display:"block"}}/>}};const c=m[status]||m.not_started;return<div style={{width:22,height:22,borderRadius:5,background:c.bg,color:c.color,display:"flex",alignItems:"center",justifyContent:"center"}}>{c.icon}</div>};

/* ══════════════════════════════════════════
   DATA — Complex franchise structure
   ══════════════════════════════════════════ */

const PEOPLE = {
  "peter-cancro": { name: "Peter Cancro", role: "Managing Member / UBO", type: "individual" },
  "maria-cancro": { name: "Maria Cancro", role: "Member / UBO", type: "individual" },
  "tom-burke": { name: "Tom Burke", role: "Operating Manager", type: "individual" },
  "lisa-chen": { name: "Lisa Chen", role: "Minority Member", type: "individual" },
  "david-ross": { name: "David Ross", role: "Minority Member / Manager", type: "individual" },
  "sarah-kim": { name: "Sarah Kim", role: "Operating Manager", type: "individual" },
  "raj-patel": { name: "Raj Patel", role: "Minority Member", type: "individual" },
  "jen-martinez": { name: "Jennifer Martinez", role: "Operating Manager", type: "individual" },
  "mike-walsh": { name: "Mike Walsh", role: "Minority Member", type: "individual" },
  "cancro-family-trust": { name: "Cancro Family Trust", role: "Member", type: "business" },
};

const OPERATING_COS = [
  { id: "gsh-01", name: "GSH Subs I LLC", location: "Edison, NJ", franchise: "#1204", status: "complete",
    owners: [{ person: "peter-cancro", direct: 60, indirect: 0 }, { person: "maria-cancro", direct: 20, indirect: 0 }, { person: "tom-burke", direct: 20, indirect: 0 }] },
  { id: "gsh-02", name: "GSH Subs II LLC", location: "Princeton, NJ", franchise: "#1207", status: "complete",
    owners: [{ person: "peter-cancro", direct: 60, indirect: 0 }, { person: "maria-cancro", direct: 20, indirect: 0 }, { person: "lisa-chen", direct: 20, indirect: 0 }] },
  { id: "gsh-03", name: "GSH Subs III LLC", location: "New Brunswick, NJ", franchise: "#1215", status: "in_progress",
    owners: [{ person: "peter-cancro", direct: 40, indirect: 10 }, { person: "cancro-family-trust", direct: 30, indirect: 0 }, { person: "david-ross", direct: 20, indirect: 0 }] },
  { id: "gsh-04", name: "GSH Subs IV LLC", location: "Morristown, NJ", franchise: "#1221", status: "complete",
    owners: [{ person: "peter-cancro", direct: 51, indirect: 0 }, { person: "sarah-kim", direct: 29, indirect: 0 }, { person: "raj-patel", direct: 20, indirect: 0 }] },
  { id: "gsh-05", name: "GSH Subs V LLC", location: "Red Bank, NJ", franchise: "#1228", status: "needs_review",
    owners: [{ person: "peter-cancro", direct: 0, indirect: 45 }, { person: "cancro-family-trust", direct: 45, indirect: 0 }, { person: "david-ross", direct: 10, indirect: 0 }] },
  { id: "gsh-06", name: "GSH Subs VI LLC", location: "Hoboken, NJ", franchise: "#1233", status: "in_progress",
    owners: [{ person: "peter-cancro", direct: 50, indirect: 0 }, { person: "maria-cancro", direct: 25, indirect: 0 }, { person: "jen-martinez", direct: 25, indirect: 0 }] },
  { id: "gsh-07", name: "GSH Subs VII LLC", location: "Cherry Hill, NJ", franchise: "#1240", status: "not_started",
    owners: [{ person: "peter-cancro", direct: 30, indirect: 20 }, { person: "cancro-family-trust", direct: 20, indirect: 0 }, { person: "mike-walsh", direct: 30, indirect: 0 }] },
  { id: "gsh-08", name: "GSH Subs VIII LLC", location: "Toms River, NJ", franchise: "#1245", status: "complete",
    owners: [{ person: "peter-cancro", direct: 70, indirect: 0 }, { person: "tom-burke", direct: 30, indirect: 0 }] },
  { id: "gsh-09", name: "GSH Subs IX LLC", location: "Wayne, NJ", franchise: "#1251", status: "in_progress",
    owners: [{ person: "peter-cancro", direct: 40, indirect: 0 }, { person: "maria-cancro", direct: 35, indirect: 0 }, { person: "raj-patel", direct: 25, indirect: 0 }] },
  { id: "gsh-10", name: "GSH Subs X LLC", location: "Atlantic City, NJ", franchise: "#1260", status: "not_started",
    owners: [{ person: "peter-cancro", direct: 0, indirect: 50 }, { person: "cancro-family-trust", direct: 50, indirect: 0 }] },
];

/* Compute UBOs across the whole structure */
const computeUBOs = () => {
  const map = {};
  OPERATING_COS.forEach(co => {
    co.owners.forEach(o => {
      const p = PEOPLE[o.person];
      if (!map[o.person]) map[o.person] = { ...p, key: o.person, entities: [], totalDirect: 0, totalIndirect: 0, entityCount: 0 };
      map[o.person].entities.push({ coName: co.name, coId: co.id, direct: o.direct, indirect: o.indirect, effective: o.direct + o.indirect });
      map[o.person].entityCount++;
    });
  });
  return Object.values(map).sort((a, b) => b.entityCount - a.entityCount);
};
const ALL_PARTIES = computeUBOs();
const UBO_THRESHOLD = 25;


/* ══════════════════════════════════════════
   CASE DETAILS VIEW (simplified)
   ══════════════════════════════════════════ */

const CaseDetailsView = () => {
  const completeCos = OPERATING_COS.filter(c => c.status === "complete").length;
  const totalPeople = Object.keys(PEOPLE).length;
  const areas = ["Information", "Documents", "Screening", "EDD"];

  return <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
    {/* Case Metadata */}
    <div style={{ background: "white", borderRadius: 8, border: "1px solid #e0e0e0", overflow: "hidden" }}>
      <div style={{ padding: "14px 16px", borderBottom: "1px solid #e8eaed" }}>
        <h2 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "#202124" }}>Case Details</h2>
      </div>
      <div style={{ padding: "16px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "16px 24px" }}>
          {[
            { label: "Primary Entity", value: "Garden State Holdings LLC", sub: "Commercial Onboarding" },
            { label: "Case Owner", value: "Sarah Chen", sub: "Relationship Manager" },
            { label: "Status", badge: { bg: "#e8f0fe", color: "#1967d2", label: "Open" } },
            { label: "CRA Score", score: { value: 68, tier: "Medium", color: "#f9ab00" } },
            { label: "Case Type", value: "Initial Onboarding" },
            { label: "Operating Companies", value: OPERATING_COS.length + " entities" },
            { label: "Related Individuals", value: totalPeople + " people" },
            { label: "Created", value: "Jan 5, 2026" },
          ].map((f, i) => <div key={i}>
            <div style={{ fontSize: 11, fontWeight: 600, color: "#80868b", textTransform: "uppercase", letterSpacing: 0.4, marginBottom: 4 }}>{f.label}</div>
            {f.badge ? <span style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "3px 10px", borderRadius: 4, fontSize: 13, fontWeight: 600, background: f.badge.bg, color: f.badge.color }}><span style={{ width: 7, height: 7, borderRadius: "50%", background: f.badge.color }} />{f.badge.label}</span>
              : f.score ? <div style={{ display: "flex", alignItems: "center", gap: 8 }}><span style={{ fontSize: 20, fontWeight: 800, color: f.score.color }}>{f.score.value}</span><span style={{ fontSize: 11, fontWeight: 600, padding: "2px 7px", borderRadius: 4, background: "#fef7e0", color: "#b06000" }}>{f.score.tier}</span></div>
              : <div><div style={{ fontSize: 14, fontWeight: 600, color: "#202124" }}>{f.value}</div>{f.sub && <div style={{ fontSize: 11.5, color: "#80868b", marginTop: 1 }}>{f.sub}</div>}</div>}
          </div>)}
        </div>
      </div>
    </div>

    {/* Entity Progress Grid */}
    <div style={{ background: "white", borderRadius: 8, border: "1px solid #e0e0e0", overflow: "hidden" }}>
      <div style={{ padding: "14px 16px", borderBottom: "1px solid #e8eaed", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <h2 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: "#202124" }}>Entity Progress</h2>
          <span style={{ fontSize: 11, fontWeight: 600, color: "#5f6368", background: "#f1f3f4", padding: "2px 7px", borderRadius: 99 }}>{OPERATING_COS.length + 1}</span>
        </div>
        <div style={{ fontSize: 12, color: "#80868b" }}>
          <span style={{ fontWeight: 600, color: "#1e8e3e" }}>{completeCos}</span> of <span style={{ fontWeight: 600 }}>{OPERATING_COS.length + 1}</span> complete
        </div>
      </div>
      {/* Header */}
      <div style={{ display: "grid", gridTemplateColumns: "1.8fr repeat(4, 0.45fr) 0.5fr", padding: "8px 16px", borderBottom: "1px solid #e8eaed", fontSize: 10.5, fontWeight: 600, color: "#80868b", textTransform: "uppercase", letterSpacing: 0.5 }}>
        <div>Entity</div>{areas.map(a => <div key={a} style={{ textAlign: "center" }}>{a}</div>)}<div style={{ textAlign: "center" }}>UBOs</div>
      </div>
      {/* Holding company row */}
      <div style={{ display: "grid", gridTemplateColumns: "1.8fr repeat(4, 0.45fr) 0.5fr", alignItems: "center", padding: "12px 16px", borderBottom: "1px solid #e8eaed", background: "#f8f9fb" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <EntityBubble type="business" size={26} />
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#202124" }}>Garden State Holdings LLC</div>
            <div style={{ fontSize: 10.5, color: "#80868b" }}>Holding Company</div>
          </div>
        </div>
        {["complete", "in_progress", "complete", "in_progress"].map((s, i) => <div key={i} style={{ display: "flex", justifyContent: "center" }}>{areaStatusIcon(s)}</div>)}
        <div style={{ textAlign: "center", fontSize: 12, fontWeight: 700, color: "#1967d2" }}>2</div>
      </div>
      {/* Operating company rows */}
      {OPERATING_COS.map((co, idx) => {
        const uboCount = co.owners.filter(o => (o.direct + o.indirect) >= UBO_THRESHOLD).length;
        const statuses = co.status === "complete" ? ["complete", "complete", "complete", "complete"]
          : co.status === "in_progress" ? ["complete", "in_progress", "complete", "not_started"]
          : co.status === "needs_review" ? ["complete", "complete", "needs_review", "not_started"]
          : ["in_progress", "not_started", "not_started", "not_started"];
        return <div key={idx} style={{
          display: "grid", gridTemplateColumns: "1.8fr repeat(4, 0.45fr) 0.5fr",
          alignItems: "center", padding: "10px 16px",
          borderBottom: idx < OPERATING_COS.length - 1 ? "1px solid #f0f1f3" : "none",
        }} onMouseEnter={e => e.currentTarget.style.background = "#f8f9fa"} onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, paddingLeft: 20 }}>
            <EntityBubble type="business" size={22} />
            <div>
              <div style={{ fontSize: 12.5, fontWeight: 600, color: "#202124" }}>{co.name}</div>
              <div style={{ fontSize: 10.5, color: "#9aa0a6" }}>{co.location} · {co.franchise}</div>
            </div>
          </div>
          {statuses.map((s, i) => <div key={i} style={{ display: "flex", justifyContent: "center" }}>{areaStatusIcon(s)}</div>)}
          <div style={{ textAlign: "center", fontSize: 12, fontWeight: 600, color: "#5f6368" }}>{uboCount}</div>
        </div>;
      })}
    </div>
  </div>;
};


/* ══════════════════════════════════════════
   UBO ROLL-UP VIEW
   ══════════════════════════════════════════ */

const UBORollupView = () => {
  const [expandedPerson, setExpandedPerson] = useState(null);

  return <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
    {/* Summary */}
    <div style={{ background: "white", borderRadius: 8, border: "1px solid #e0e0e0", overflow: "hidden" }}>
      <div style={{ padding: "14px 16px", borderBottom: "1px solid #e8eaed", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <h2 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "#202124" }}>UBO Identification — Case Roll-up</h2>
        </div>
        <div style={{ fontSize: 12, color: "#80868b" }}>Threshold: <span style={{ fontWeight: 700, color: "#202124" }}>25%</span> beneficial ownership per entity</div>
      </div>

      {/* Summary stats */}
      <div style={{ padding: "16px", display: "flex", gap: 16, borderBottom: "1px solid #e8eaed" }}>
        {[
          { label: "Total Individuals", value: ALL_PARTIES.filter(p => p.type === "individual").length, color: "#202124" },
          { label: "UBOs (≥25% in any entity)", value: ALL_PARTIES.filter(p => p.type === "individual" && p.entities.some(e => e.effective >= 25)).length, color: "#1967d2" },
          { label: "Appearing in 3+ entities", value: ALL_PARTIES.filter(p => p.entityCount >= 3).length, color: "#e65100" },
          { label: "Entities with coverage gaps", value: 0, color: "#1e8e3e" },
        ].map((s, i) => <div key={i} style={{ flex: 1, padding: "12px", borderRadius: 6, background: "#f8f9fa", textAlign: "center" }}>
          <div style={{ fontSize: 22, fontWeight: 800, color: s.color }}>{s.value}</div>
          <div style={{ fontSize: 11, color: "#80868b", marginTop: 2 }}>{s.label}</div>
        </div>)}
      </div>

      {/* Person rows */}
      <div>
        {/* Header */}
        <div style={{ display: "grid", gridTemplateColumns: "24px 1.4fr 0.6fr 0.5fr 2fr", padding: "8px 16px", borderBottom: "1px solid #e8eaed", fontSize: 10.5, fontWeight: 600, color: "#80868b", textTransform: "uppercase", letterSpacing: 0.5 }}>
          <div /><div>Person / Entity</div><div>Appears In</div><div>UBO In</div><div>Ownership Across Entities</div>
        </div>

        {ALL_PARTIES.map((person, idx) => {
          const isExpanded = expandedPerson === person.key;
          const uboEntities = person.entities.filter(e => e.effective >= UBO_THRESHOLD);
          const isUBOAnywhere = uboEntities.length > 0 && person.type === "individual";
          const isBiz = person.type === "business";
          const maxEffective = Math.max(...person.entities.map(e => e.effective));

          return <div key={idx} style={{ borderBottom: idx < ALL_PARTIES.length - 1 ? "1px solid #f0f1f3" : "none" }}>
            <div onClick={() => setExpandedPerson(isExpanded ? null : person.key)} style={{
              display: "grid", gridTemplateColumns: "24px 1.4fr 0.6fr 0.5fr 2fr",
              alignItems: "center", padding: "12px 16px", cursor: "pointer",
              background: isExpanded ? "#f8f9fa" : "transparent",
            }}
              onMouseEnter={e => { if (!isExpanded) e.currentTarget.style.background = "#f8f9fa" }}
              onMouseLeave={e => { if (!isExpanded) e.currentTarget.style.background = "transparent" }}
            >
              <div style={{ color: "#9aa0a6" }}>{isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}</div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <EntityBubble type={person.type} size={28} />
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "#202124" }}>{person.name}</span>
                    {isUBOAnywhere && <span style={{ fontSize: 9, fontWeight: 700, padding: "2px 6px", borderRadius: 3, background: "#1a1a2e", color: "white", letterSpacing: 0.5 }}>UBO</span>}
                    {isBiz && <span style={{ fontSize: 9, fontWeight: 600, padding: "1px 5px", borderRadius: 3, background: "#e8f0fe", color: "#1967d2", textTransform: "uppercase", letterSpacing: 0.4 }}>Entity</span>}
                  </div>
                  <div style={{ fontSize: 11, color: "#80868b", marginTop: 1 }}>{person.role}</div>
                </div>
              </div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#202124" }}>{person.entityCount}</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: isUBOAnywhere ? "#1967d2" : "#9aa0a6" }}>{uboEntities.length}</div>
              {/* Mini sparkline showing ownership across entities */}
              <div style={{ display: "flex", alignItems: "center", gap: 3, height: 20 }}>
                {person.entities.map((e, ei) => {
                  const isUBO = e.effective >= UBO_THRESHOLD;
                  return <div key={ei} style={{ position: "relative", flex: 1, height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                    <div style={{
                      height: `${Math.max(e.effective, 4)}%`,
                      background: isUBO ? "#1967d2" : "#dadce0",
                      borderRadius: "2px 2px 0 0",
                      minHeight: 3,
                      opacity: isUBO ? 1 : 0.6,
                    }} />
                  </div>;
                })}
                <span style={{ fontSize: 10, color: "#9aa0a6", marginLeft: 4, whiteSpace: "nowrap" }}>max {maxEffective}%</span>
              </div>
            </div>

            {/* Expanded detail */}
            {isExpanded && <div style={{ background: "#f8f9fb", borderTop: "1px solid #e8eaed", padding: "12px 16px 12px 48px" }}>
              <div style={{ fontSize: 10.5, fontWeight: 700, color: "#5f6368", textTransform: "uppercase", letterSpacing: 0.4, marginBottom: 8 }}>Ownership by Entity</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {person.entities.map((e, ei) => {
                  const isUBO = e.effective >= UBO_THRESHOLD;
                  return <div key={ei} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 160, fontSize: 12, color: "#3c4043", fontWeight: 500, display: "flex", alignItems: "center", gap: 4 }}>
                      <EntityBubble type="business" size={16} />
                      {e.coName}
                    </div>
                    <div style={{ flex: 1, position: "relative", height: 18, background: "#e8eaed", borderRadius: 3 }}>
                      {/* Threshold line */}
                      <div style={{ position: "absolute", left: `${UBO_THRESHOLD}%`, top: -2, bottom: -2, width: 1.5, background: "#ea433566", zIndex: 2 }} />
                      {e.direct > 0 && <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: `${e.direct}%`, background: "#1967d2", borderRadius: e.indirect > 0 ? "3px 0 0 3px" : 3, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {e.direct >= 15 && <span style={{ fontSize: 9, fontWeight: 600, color: "white" }}>{e.direct}%</span>}
                      </div>}
                      {e.indirect > 0 && <div style={{ position: "absolute", left: `${e.direct}%`, top: 0, bottom: 0, width: `${e.indirect}%`, background: "#7b1fa2", borderRadius: e.direct > 0 ? "0 3px 3px 0" : 3, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {e.indirect >= 15 && <span style={{ fontSize: 9, fontWeight: 600, color: "white" }}>{e.indirect}%</span>}
                      </div>}
                    </div>
                    <div style={{ width: 60, textAlign: "right" }}>
                      <span style={{ fontSize: 12, fontWeight: 700, color: isUBO ? "#1967d2" : "#9aa0a6" }}>{e.effective}%</span>
                    </div>
                    {isUBO && <span style={{ fontSize: 9, fontWeight: 700, padding: "1px 5px", borderRadius: 2, background: "#e8f0fe", color: "#1967d2" }}>UBO</span>}
                    {!isUBO && <span style={{ width: 30 }} />}
                  </div>;
                })}
              </div>
              {/* Legend */}
              <div style={{ display: "flex", gap: 12, marginTop: 8, fontSize: 10.5, color: "#9aa0a6" }}>
                <span style={{ display: "flex", alignItems: "center", gap: 4 }}><span style={{ width: 8, height: 8, borderRadius: 2, background: "#1967d2" }} /> Direct</span>
                <span style={{ display: "flex", alignItems: "center", gap: 4 }}><span style={{ width: 8, height: 8, borderRadius: 2, background: "#7b1fa2" }} /> Indirect</span>
                <span style={{ display: "flex", alignItems: "center", gap: 4 }}><span style={{ width: 1, height: 10, background: "#ea433566" }} /> 25% threshold</span>
              </div>
            </div>}
          </div>;
        })}
      </div>
    </div>
  </div>;
};


/* ══════════════════════════════════════════
   OPERATING COMPANY DETAIL VIEW
   ══════════════════════════════════════════ */

const OpCoDetailView = ({ coId }) => {
  const co = OPERATING_COS.find(c => c.id === coId);
  if (!co) return null;
  const totalIdentified = co.owners.reduce((sum, o) => sum + o.direct + o.indirect, 0);
  const gap = 100 - totalIdentified;

  return <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
    {/* Entity info */}
    <div style={{ background: "white", borderRadius: 8, border: "1px solid #e0e0e0", overflow: "hidden" }}>
      <div style={{ padding: "14px 16px", borderBottom: "1px solid #e8eaed" }}>
        <h2 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "#202124" }}>Business Information</h2>
      </div>
      <div style={{ padding: "16px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "12px 24px" }}>
          {[
            { label: "Legal Name", value: co.name },
            { label: "Franchise Location", value: co.location },
            { label: "Franchise #", value: co.franchise },
            { label: "Entity Type", value: "Limited Liability Company" },
            { label: "State", value: "New Jersey" },
            { label: "Parent Entity", value: "Garden State Holdings LLC" },
          ].map((f, i) => <div key={i}><div style={{ fontSize: 11, fontWeight: 600, color: "#80868b", marginBottom: 3 }}>{f.label}</div><div style={{ fontSize: 13.5, color: "#202124", fontWeight: 500 }}>{f.value}</div></div>)}
        </div>
      </div>
    </div>

    {/* UBO Panel for this entity */}
    <div style={{ background: "white", borderRadius: 8, border: "1px solid #e0e0e0", overflow: "hidden" }}>
      <div style={{ padding: "14px 16px", borderBottom: "1px solid #e8eaed", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <h2 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: "#202124" }}>UBO Identification</h2>
          <span style={{ fontSize: 11, fontWeight: 600, padding: "2px 7px", borderRadius: 99, background: gap <= 0 ? "#e6f4ea" : "#fef7e0", color: gap <= 0 ? "#1e8e3e" : "#b06000" }}>
            {co.owners.filter(o => (o.direct + o.indirect) >= UBO_THRESHOLD).length} UBOs
          </span>
        </div>
        <div style={{ fontSize: 12, color: "#80868b" }}>Threshold: <span style={{ fontWeight: 700, color: "#202124" }}>25%</span></div>
      </div>

      {/* Coverage bar */}
      <div style={{ padding: "16px", borderBottom: "1px solid #e8eaed" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: "#202124" }}>Ownership Coverage</span>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            {gap <= 0
              ? <><div style={{ width: 18, height: 18, borderRadius: "50%", background: "#e6f4ea", display: "flex", alignItems: "center", justifyContent: "center", color: "#1e8e3e" }}><CheckIcon size={10} /></div><span style={{ fontSize: 13, fontWeight: 600, color: "#1e8e3e" }}>{totalIdentified}% identified</span></>
              : <><div style={{ width: 18, height: 18, borderRadius: "50%", background: "#fef7e0", display: "flex", alignItems: "center", justifyContent: "center", color: "#b06000" }}><AlertIcon size={10} /></div><span style={{ fontSize: 13, fontWeight: 600, color: "#b06000" }}>{totalIdentified}% identified — {gap}% unaccounted</span></>}
          </div>
        </div>
        <div style={{ position: "relative", height: 28, background: "#f1f3f4", borderRadius: 6, overflow: "hidden" }}>
          <div style={{ position: "absolute", left: `${UBO_THRESHOLD}%`, top: 0, bottom: 0, width: 2, background: "#c5221f", zIndex: 2 }} />
          <div style={{ position: "absolute", left: `${UBO_THRESHOLD}%`, top: -1, transform: "translateX(-50%)", fontSize: 9, fontWeight: 700, color: "#c5221f", background: "white", padding: "0 3px", borderRadius: 2, border: "1px solid #fce8e6" }}>25%</div>
          <div style={{ display: "flex", height: "100%", position: "relative", zIndex: 1 }}>
            {co.owners.map((o, i) => {
              const pct = o.direct + o.indirect;
              const colors = ["#1967d2", "#7b1fa2", "#e65100", "#1e8e3e", "#c5221f"];
              const person = PEOPLE[o.person];
              return <div key={i} style={{ width: `${pct}%`, height: "100%", background: colors[i % colors.length], opacity: 0.75, display: "flex", alignItems: "center", justifyContent: "center", borderRight: i < co.owners.length - 1 ? "2px solid white" : "none" }}>
                {pct >= 12 && <span style={{ fontSize: 9.5, fontWeight: 700, color: "white", textShadow: "0 1px 2px rgba(0,0,0,0.3)", whiteSpace: "nowrap" }}>{person.name.split(" ")[0]} ({pct}%)</span>}
              </div>;
            })}
            {gap > 0 && <div style={{ width: `${gap}%`, height: "100%", background: "repeating-linear-gradient(45deg,#fce8e6,#fce8e6 4px,#f8d7da 4px,#f8d7da 8px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: "#c5221f" }}>? {gap}%</span>
            </div>}
          </div>
        </div>
      </div>

      {/* Per-owner breakdown */}
      {co.owners.map((o, idx) => {
        const person = PEOPLE[o.person];
        const effective = o.direct + o.indirect;
        const isUBO = effective >= UBO_THRESHOLD;
        return <div key={idx} style={{ padding: "12px 16px", borderBottom: idx < co.owners.length - 1 ? "1px solid #f0f1f3" : "none" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <EntityBubble type={person.type} size={28} />
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#202124" }}>{person.name}</span>
                  {isUBO && person.type === "individual" && <span style={{ fontSize: 9, fontWeight: 700, padding: "2px 6px", borderRadius: 3, background: "#1a1a2e", color: "white", letterSpacing: 0.5 }}>UBO</span>}
                  {person.type === "business" && <span style={{ fontSize: 9, fontWeight: 600, padding: "1px 5px", borderRadius: 3, background: "#e8f0fe", color: "#1967d2", textTransform: "uppercase" }}>Entity</span>}
                </div>
                <div style={{ fontSize: 11, color: "#80868b" }}>{person.role}</div>
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 18, fontWeight: 800, color: isUBO ? "#1967d2" : "#9aa0a6" }}>{effective}%</div>
              <div style={{ fontSize: 10.5, color: "#80868b" }}>Effective</div>
            </div>
          </div>
          {effective > 0 && <div style={{ position: "relative", height: 18, background: "#f1f3f4", borderRadius: 4 }}>
            <div style={{ position: "absolute", left: `${UBO_THRESHOLD}%`, top: -2, bottom: -2, width: 1.5, background: "#ea433566", zIndex: 2 }} />
            {o.direct > 0 && <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: `${o.direct}%`, background: "#1967d2", borderRadius: o.indirect > 0 ? "4px 0 0 4px" : 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
              {o.direct >= 15 && <span style={{ fontSize: 9, fontWeight: 600, color: "white" }}>{o.direct}% Direct</span>}
            </div>}
            {o.indirect > 0 && <div style={{ position: "absolute", left: `${o.direct}%`, top: 0, bottom: 0, width: `${o.indirect}%`, background: "#7b1fa2", borderRadius: o.direct > 0 ? "0 4px 4px 0" : 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
              {o.indirect >= 15 && <span style={{ fontSize: 9, fontWeight: 600, color: "white" }}>{o.indirect}% Indirect</span>}
            </div>}
          </div>}
        </div>;
      })}
    </div>
  </div>;
};


/* ══════════════════════════════════════════
   TREE VIEWS per operating company
   ══════════════════════════════════════════ */

const DropdownArrow=({size=12})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>;

const TreeNode=({node,isRoot=false})=>{const isBiz=node.type==="business";const hasChildren=node.children&&node.children.length>0;return<div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>{!isRoot&&<div style={{width:2,height:20,background:"#dadce0"}}/>}{node.ownership&&<div style={{display:"flex",alignItems:"center",gap:6,marginBottom:4}}>{node.ownership.map((o,i)=><div key={i} style={{display:"flex",alignItems:"center",gap:4,fontSize:11,fontWeight:600,color:o.type==="Direct"?"#1967d2":"#7b1fa2"}}><div style={{width:18,height:18,borderRadius:"50%",background:o.type==="Direct"?"#e8f0fe":"#f3e8fd",display:"flex",alignItems:"center",justifyContent:"center"}}><CheckIcon size={10}/></div><span>{o.pct}%</span><span style={{fontWeight:400,fontSize:10,opacity:0.7}}>{o.type}</span></div>)}</div>}<div style={{display:"flex",alignItems:"center",gap:8,padding:"10px 16px",background:"white",border:isRoot?"2px solid #1967d2":"1px solid #dadce0",borderRadius:8,boxShadow:isRoot?"0 2px 8px rgba(25,103,210,0.1)":"0 1px 3px rgba(0,0,0,0.04)",minWidth:140,cursor:"pointer"}}><div style={{width:28,height:28,borderRadius:isBiz?6:"50%",background:isBiz?"#e8f0fe":"#e6f4ea",display:"flex",alignItems:"center",justifyContent:"center"}}>{isBiz?<BuildingIcon size={13} color="#1967d2"/>:<UserIcon size={13} color="#1e8e3e"/>}</div><div><div style={{fontSize:12.5,fontWeight:600,color:"#202124",whiteSpace:"nowrap"}}>{node.name}</div>{node.role&&<div style={{fontSize:10.5,color:"#80868b",marginTop:1}}>Role: {node.role}</div>}</div>{!isRoot&&node.isUBO&&<span style={{fontSize:8,fontWeight:700,padding:"1px 4px",borderRadius:2,background:"#1a1a2e",color:"white",marginLeft:4}}>UBO</span>}</div>{hasChildren&&<><div style={{width:2,height:20,background:"#dadce0"}}/><div style={{display:"flex",gap:24,position:"relative"}}>{node.children.map((child,idx)=><div key={idx} style={{display:"flex",flexDirection:"column",alignItems:"center",position:"relative"}}>{node.children.length>1&&<div style={{position:"absolute",top:-2,left:idx===0?"50%":0,right:idx===node.children.length-1?"50%":0,height:2,background:"#dadce0"}}/>}<TreeNode node={child}/></div>)}</div></>}</div>};

const buildTreeForCo = (co) => {
  return {
    name: co.name, type: "business",
    children: co.owners.map(o => {
      const person = PEOPLE[o.person];
      const effective = o.direct + o.indirect;
      const ownershipArr = [];
      if (o.direct > 0) ownershipArr.push({ pct: o.direct, type: "Direct" });
      if (o.indirect > 0) ownershipArr.push({ pct: o.indirect, type: "Indirect" });
      const node = {
        name: person.name, type: person.type,
        role: person.role, isUBO: effective >= UBO_THRESHOLD,
        ownership: ownershipArr,
        children: [],
      };
      // If it's the trust, show Peter Cancro beneath it
      if (o.person === "cancro-family-trust") {
        node.children = [{
          name: "Peter Cancro", type: "individual", role: "Trustee / Beneficiary",
          isUBO: true, ownership: [{ pct: 100, type: "Direct" }], children: [],
        }];
      }
      return node;
    }),
  };
};

const buildHoldingTree = () => ({
  name: "Garden State Holdings LLC", type: "business",
  children: OPERATING_COS.map(co => ({
    name: co.name.replace("GSH Subs ", "").replace(" LLC", ""), type: "business",
    role: co.location, ownership: [{ pct: 100, type: "Direct" }], children: [],
  })),
});

const OpCoTreeView = ({ coId }) => {
  const co = OPERATING_COS.find(c => c.id === coId);
  if (!co) return null;
  const tree = buildTreeForCo(co);
  return <div style={{ background: "white", borderRadius: 8, border: "1px solid #e0e0e0", overflow: "hidden" }}>
    <div style={{ padding: "14px 16px", borderBottom: "1px solid #e8eaed" }}>
      <h2 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "#202124" }}>Related Parties — {co.name}</h2>
    </div>
    <div style={{ padding: "32px 16px 40px", display: "flex", justifyContent: "center", overflowX: "auto", minHeight: 280 }}>
      <TreeNode node={tree} isRoot />
    </div>
  </div>;
};

const HoldingTreeView = () => {
  const tree = buildHoldingTree();
  return <div style={{ background: "white", borderRadius: 8, border: "1px solid #e0e0e0", overflow: "hidden" }}>
    <div style={{ padding: "14px 16px", borderBottom: "1px solid #e8eaed" }}>
      <h2 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "#202124" }}>Related Parties — Garden State Holdings LLC</h2>
    </div>
    <div style={{ padding: "32px 16px 40px", display: "flex", justifyContent: "center", overflowX: "auto", minHeight: 280 }}>
      <TreeNode node={tree} isRoot />
    </div>
  </div>;
};


/* ══════════════════════════════════════════
   INDIVIDUAL PERSON DETAIL VIEW
   ══════════════════════════════════════════ */

const PERSON_DETAILS = {
  "peter-cancro": { firstName: "Peter", lastName: "Cancro", dob: "Aug 12, 1957", ssn: "***-**-4891", citizenship: "United States", address: "14 Navesink Ave, Rumson, NJ 07760", phone: "(732) 555-0142", email: "pcancro@gshsubs.com",
    kyc: { identity: "complete", sourceOfWealth: "complete", pepSanctions: "complete", addressVerified: "complete", alloyStatus: "Approved (0.97)" } },
  "maria-cancro": { firstName: "Maria", lastName: "Cancro", dob: "Mar 22, 1960", ssn: "***-**-3277", citizenship: "United States", address: "14 Navesink Ave, Rumson, NJ 07760", phone: "(732) 555-0143", email: "mcancro@gshsubs.com",
    kyc: { identity: "complete", sourceOfWealth: "complete", pepSanctions: "complete", addressVerified: "complete", alloyStatus: "Approved (0.95)" } },
  "tom-burke": { firstName: "Tom", lastName: "Burke", dob: "Jan 5, 1982", ssn: "***-**-6614", citizenship: "United States", address: "88 Broad St, Red Bank, NJ 07701", phone: "(732) 555-0201", email: "tburke@gshsubs.com",
    kyc: { identity: "complete", sourceOfWealth: "in_progress", pepSanctions: "complete", addressVerified: "complete", alloyStatus: "Approved (0.99)" } },
  "lisa-chen": { firstName: "Lisa", lastName: "Chen", dob: "Sep 14, 1985", ssn: "***-**-8823", citizenship: "United States", address: "201 Nassau St, Princeton, NJ 08540", phone: "(609) 555-0118", email: "lchen@gshsubs.com",
    kyc: { identity: "complete", sourceOfWealth: "not_started", pepSanctions: "complete", addressVerified: "complete", alloyStatus: "Approved (0.98)" } },
  "david-ross": { firstName: "David", lastName: "Ross", dob: "Nov 30, 1979", ssn: "***-**-5502", citizenship: "United States", address: "42 Georges Rd, New Brunswick, NJ 08901", phone: "(732) 555-0334", email: "dross@gshsubs.com",
    kyc: { identity: "complete", sourceOfWealth: "in_progress", pepSanctions: "needs_review", addressVerified: "complete", alloyStatus: "Manual Review" } },
  "sarah-kim": { firstName: "Sarah", lastName: "Kim", dob: "Jun 8, 1988", ssn: "***-**-1190", citizenship: "United States", address: "7 South St, Morristown, NJ 07960", phone: "(973) 555-0227", email: "skim@gshsubs.com",
    kyc: { identity: "complete", sourceOfWealth: "complete", pepSanctions: "complete", addressVerified: "complete", alloyStatus: "Approved (0.96)" } },
  "raj-patel": { firstName: "Raj", lastName: "Patel", dob: "Feb 17, 1991", ssn: "***-**-7741", citizenship: "United States", address: "330 Main St, Chatham, NJ 07928", phone: "(973) 555-0445", email: "rpatel@gshsubs.com",
    kyc: { identity: "complete", sourceOfWealth: "not_started", pepSanctions: "not_started", addressVerified: "complete", alloyStatus: "Not Run" } },
  "jen-martinez": { firstName: "Jennifer", lastName: "Martinez", dob: "Dec 3, 1984", ssn: "***-**-2209", citizenship: "United States", address: "510 Washington St, Hoboken, NJ 07030", phone: "(201) 555-0163", email: "jmartinez@gshsubs.com",
    kyc: { identity: "in_progress", sourceOfWealth: "not_started", pepSanctions: "not_started", addressVerified: "not_started", alloyStatus: "Not Run" } },
  "mike-walsh": { firstName: "Mike", lastName: "Walsh", dob: "Jul 25, 1976", ssn: "***-**-9934", citizenship: "United States", address: "12 Cherry Ln, Cherry Hill, NJ 08002", phone: "(856) 555-0088", email: "mwalsh@gshsubs.com",
    kyc: { identity: "not_started", sourceOfWealth: "not_started", pepSanctions: "not_started", addressVerified: "not_started", alloyStatus: "Not Run" } },
};

const kycCheckIcon = (status) => {
  if (status === "complete") return <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#e6f4ea", display: "flex", alignItems: "center", justifyContent: "center", color: "#1e8e3e" }}><CheckIcon size={10} /></div>;
  if (status === "in_progress") return <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#e8f0fe", display: "flex", alignItems: "center", justifyContent: "center", color: "#1967d2" }}><ClockIcon size={10} /></div>;
  if (status === "needs_review") return <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#fef7e0", display: "flex", alignItems: "center", justifyContent: "center", color: "#b06000" }}><AlertIcon size={10} /></div>;
  return <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#f1f3f4", display: "flex", alignItems: "center", justifyContent: "center" }}><span style={{ width: 6, height: 6, borderRadius: "50%", background: "#dadce0", display: "block" }} /></div>;
};

const kycStatusLabel = (status) => ({ complete: "Complete", in_progress: "In Progress", needs_review: "Needs Review", not_started: "Not Started" }[status] || "—");

const personKycOverall = (kyc) => {
  const vals = Object.values(kyc).filter(v => typeof v === "string" && ["complete", "in_progress", "needs_review", "not_started"].includes(v));
  if (vals.every(v => v === "complete")) return "complete";
  if (vals.some(v => v === "needs_review")) return "needs_review";
  if (vals.some(v => v === "in_progress")) return "in_progress";
  return "not_started";
};

const PersonDetailView = ({ personKey }) => {
  const person = PEOPLE[personKey];
  const details = PERSON_DETAILS[personKey];
  if (!person || !details) return null;

  // Find which entities this person appears in
  const appearances = [];
  OPERATING_COS.forEach(co => {
    co.owners.forEach(o => {
      if (o.person === personKey) {
        appearances.push({ coName: co.name, coId: co.id, direct: o.direct, indirect: o.indirect, effective: o.direct + o.indirect, isUBO: (o.direct + o.indirect) >= UBO_THRESHOLD });
      }
    });
  });

  return <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
    {/* Personal Information */}
    <div style={{ background: "white", borderRadius: 8, border: "1px solid #e0e0e0", overflow: "hidden" }}>
      <div style={{ padding: "14px 16px", borderBottom: "1px solid #e8eaed" }}>
        <h2 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "#202124" }}>Personal Details</h2>
      </div>
      <div style={{ padding: "16px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px 24px" }}>
          {[
            { label: "First Name", value: details.firstName },
            { label: "Last Name", value: details.lastName },
            { label: "Date of Birth", value: details.dob },
            { label: "SSN", value: details.ssn },
            { label: "Citizenship", value: details.citizenship },
            { label: "Phone", value: details.phone },
            { label: "Email", value: details.email },
            { label: "Address", value: details.address },
            { label: "Role", value: person.role },
          ].map((f, i) => <div key={i}>
            <div style={{ fontSize: 11, fontWeight: 600, color: "#80868b", marginBottom: 3 }}>{f.label}</div>
            <div style={{ fontSize: 13.5, color: "#202124", fontWeight: 500 }}>{f.value}</div>
          </div>)}
        </div>
      </div>
    </div>

    {/* KYC / Verification Status */}
    <div style={{ background: "white", borderRadius: 8, border: "1px solid #e0e0e0", overflow: "hidden" }}>
      <div style={{ padding: "14px 16px", borderBottom: "1px solid #e8eaed", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <h2 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: "#202124" }}>KYC / Verification Status</h2>
        <span style={{ fontSize: 12, fontWeight: 600, padding: "3px 10px", borderRadius: 99,
          background: details.kyc.alloyStatus.startsWith("Approved") ? "#e6f4ea" : details.kyc.alloyStatus === "Manual Review" ? "#fef7e0" : "#f1f3f4",
          color: details.kyc.alloyStatus.startsWith("Approved") ? "#1e8e3e" : details.kyc.alloyStatus === "Manual Review" ? "#e65100" : "#5f6368",
        }}>Alloy: {details.kyc.alloyStatus}</span>
      </div>
      <div style={{ padding: "16px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 24px" }}>
          {[
            { label: "Identity Verification", key: "identity" },
            { label: "Source of Wealth", key: "sourceOfWealth" },
            { label: "PEP / Sanctions Screening", key: "pepSanctions" },
            { label: "Address Verified", key: "addressVerified" },
          ].map((check, i) => <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 10px", borderRadius: 6, background: "#f8f9fa" }}>
            {kycCheckIcon(details.kyc[check.key])}
            <div>
              <div style={{ fontSize: 13, fontWeight: 500, color: "#202124" }}>{check.label}</div>
              <div style={{ fontSize: 11, color: "#80868b" }}>{kycStatusLabel(details.kyc[check.key])}</div>
            </div>
          </div>)}
        </div>
      </div>
    </div>

    {/* Entity Appearances */}
    <div style={{ background: "white", borderRadius: 8, border: "1px solid #e0e0e0", overflow: "hidden" }}>
      <div style={{ padding: "14px 16px", borderBottom: "1px solid #e8eaed", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <h2 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: "#202124" }}>Entity Relationships</h2>
          <span style={{ fontSize: 11, fontWeight: 600, color: "#5f6368", background: "#f1f3f4", padding: "2px 7px", borderRadius: 99 }}>{appearances.length}</span>
        </div>
        <div style={{ fontSize: 12, color: "#80868b" }}>
          UBO in <span style={{ fontWeight: 700, color: "#1967d2" }}>{appearances.filter(a => a.isUBO).length}</span> of {appearances.length} entities
        </div>
      </div>
      {appearances.map((a, idx) => <div key={idx} style={{
        display: "grid", gridTemplateColumns: "1.4fr 1fr 0.5fr",
        alignItems: "center", padding: "12px 16px",
        borderBottom: idx < appearances.length - 1 ? "1px solid #f0f1f3" : "none",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <EntityBubble type="business" size={24} />
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: "#202124" }}>{a.coName}</div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ flex: 1, height: 14, background: "#f1f3f4", borderRadius: 3, position: "relative" }}>
            <div style={{ position: "absolute", left: `${UBO_THRESHOLD}%`, top: -1, bottom: -1, width: 1, background: "#ea433544" }} />
            {a.direct > 0 && <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: `${a.direct}%`, background: "#1967d2", borderRadius: a.indirect > 0 ? "3px 0 0 3px" : 3 }} />}
            {a.indirect > 0 && <div style={{ position: "absolute", left: `${a.direct}%`, top: 0, bottom: 0, width: `${a.indirect}%`, background: "#7b1fa2", borderRadius: a.direct > 0 ? "0 3px 3px 0" : 3 }} />}
          </div>
          <span style={{ fontSize: 12, fontWeight: 700, color: a.isUBO ? "#1967d2" : "#9aa0a6", minWidth: 36, textAlign: "right" }}>{a.effective}%</span>
        </div>
        <div style={{ textAlign: "right" }}>
          {a.isUBO && <span style={{ fontSize: 9, fontWeight: 700, padding: "2px 6px", borderRadius: 3, background: "#1a1a2e", color: "white", letterSpacing: 0.5 }}>UBO</span>}
        </div>
      </div>)}
    </div>
  </div>;
};


/* ══════════════════════════════════════════
   MAIN LAYOUT
   ══════════════════════════════════════════ */

export default function App() {
  const [activeNav, setActiveNav] = useState("case-details");
  const [expandedCos, setExpandedCos] = useState({});

  const toggleCo = (coId) => setExpandedCos(prev => ({ ...prev, [coId]: !prev[coId] }));

  const getContent = () => {
    if (activeNav === "case-details") return <CaseDetailsView />;
    if (activeNav === "ubo-rollup") return <UBORollupView />;
    if (activeNav === "holding-biz") return <div style={{ background: "white", borderRadius: 8, border: "1px solid #e0e0e0", padding: "48px 24px", textAlign: "center" }}><div style={{ fontSize: 14, color: "#80868b" }}>Business Information — Garden State Holdings LLC</div></div>;
    if (activeNav === "holding-rp") return <HoldingTreeView />;
    if (activeNav === "holding-docs") return <div style={{ background: "white", borderRadius: 8, border: "1px solid #e0e0e0", padding: "48px 24px", textAlign: "center" }}><div style={{ fontSize: 14, color: "#80868b" }}>Documents — Garden State Holdings LLC</div></div>;
    // Operating company sub-pages
    const coMatch = activeNav.match(/^(gsh-\d+)-(biz|docs|rp)$/);
    if (coMatch) {
      const coId = coMatch[1]; const page = coMatch[2];
      if (page === "biz") return <OpCoDetailView coId={coId} />;
      if (page === "rp") return <OpCoTreeView coId={coId} />;
      if (page === "docs") return <div style={{ background: "white", borderRadius: 8, border: "1px solid #e0e0e0", padding: "48px 24px", textAlign: "center" }}><div style={{ fontSize: 14, color: "#80868b" }}>Documents — {OPERATING_COS.find(c => c.id === coId)?.name}</div></div>;
    }
    // Person sub-pages
    const personMatch = activeNav.match(/^person-(.+)-(details|docs)$/);
    if (personMatch) {
      const pKey = personMatch[1]; const page = personMatch[2];
      if (page === "details") return <PersonDetailView personKey={pKey} />;
      if (page === "docs") return <div style={{ background: "white", borderRadius: 8, border: "1px solid #e0e0e0", padding: "48px 24px", textAlign: "center" }}><div style={{ fontSize: 14, color: "#80868b" }}>Documents — {PEOPLE[pKey]?.name}</div></div>;
    }
    // Legacy: bare coId clicks go to biz info
    if (activeNav.startsWith("gsh-")) return <OpCoDetailView coId={activeNav} />;
    return <div style={{ background: "white", borderRadius: 8, border: "1px solid #e0e0e0", padding: "48px 24px", textAlign: "center" }}><div style={{ fontSize: 14, color: "#80868b" }}>Select a section</div></div>;
  };

  return <div style={{ fontFamily: "'Salesforce Sans','SF Pro Text',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif", background: "#f3f3f3", minHeight: "100vh", fontSize: 13, color: "#3c4043" }}>
    {/* Top Nav */}
    <div style={{ background: "white", borderBottom: "1px solid #e0e0e0", padding: "0 16px", display: "flex", alignItems: "center", height: 44, gap: 24 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginRight: 8 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,5px)", gap: 3, opacity: 0.4 }}>{[...Array(9)].map((_, i) => <div key={i} style={{ width: 5, height: 5, borderRadius: "50%", background: "#5f6368" }} />)}</div>
        <span style={{ fontWeight: 700, fontSize: 14, color: "#1967d2", letterSpacing: -0.2 }}>nCino</span>
      </div>
      {["Home", "Leads", "Opportunities", "Relationships", "Applications", "Loans", "Deposits", "Onboarding"].map(item => <span key={item} style={{ fontSize: 12.5, color: item === "Onboarding" ? "#1967d2" : "#5f6368", fontWeight: item === "Onboarding" ? 600 : 400, cursor: "pointer", padding: "12px 0", borderBottom: item === "Onboarding" ? "2px solid #1967d2" : "2px solid transparent" }}>{item}</span>)}
      <div style={{ marginLeft: "auto" }}><div style={{ display: "flex", alignItems: "center", gap: 6, padding: "5px 12px", borderRadius: 4, background: "#f1f3f4", fontSize: 12, color: "#80868b" }}><SearchIcon /> Search...</div></div>
    </div>

    {/* Page Header */}
    <div style={{ background: "white", borderBottom: "1px solid #e0e0e0", padding: "16px 24px" }}>
      <div style={{ fontSize: 12, color: "#80868b", marginBottom: 6, display: "flex", alignItems: "center", gap: 5 }}>
        <span style={{ color: "#1967d2", cursor: "pointer" }}>All Onboarding</span><span style={{ color: "#bdc1c6" }}>&gt;</span><span style={{ color: "#1967d2", cursor: "pointer" }}>Garden State Holdings LLC</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#e8f0fe", display: "flex", alignItems: "center", justifyContent: "center" }}><BuildingIcon size={18} color="#1967d2" /></div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 18, fontWeight: 700, color: "#202124" }}>OC-000042</span>
          <span style={{ fontSize: 11, fontWeight: 600, padding: "2px 8px", borderRadius: 4, background: "#e8f0fe", color: "#1967d2" }}>In Progress</span>
        </div>
      </div>
    </div>

    {/* Body */}
    <div style={{ display: "flex", padding: "16px 24px", gap: 16, alignItems: "flex-start" }}>
      {/* Left Nav */}
      <div style={{ width: 250, flexShrink: 0, background: "white", borderRadius: 8, border: "1px solid #e0e0e0", overflow: "hidden", maxHeight: "calc(100vh - 140px)", overflowY: "auto" }}>
        <div style={{ padding: "10px 0 4px" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#5f6368", textTransform: "uppercase", letterSpacing: 0.5, padding: "0 16px 6px" }}>Overview</div>
          <NavItem icon={<DocIcon />} label="Case Details" active={activeNav === "case-details"} onClick={() => setActiveNav("case-details")} />
          <NavItem icon={<RelatedPartiesIcon color={activeNav === "ubo-rollup" ? "#1967d2" : "#5f6368"} />} label="UBO Roll-up" active={activeNav === "ubo-rollup"} onClick={() => setActiveNav("ubo-rollup")} />
        </div>
        <div style={{ height: 1, background: "#e8eaed", margin: "4px 12px" }} />

        {/* Holding Company */}
        <div style={{ padding: "8px 0 4px" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#5f6368", textTransform: "uppercase", letterSpacing: 0.5, padding: "0 16px 6px" }}>Holding Company</div>
          <NavItem icon={<BusinessInfoIcon complete />} label="Business Information" indent={4} active={activeNav === "holding-biz"} onClick={() => setActiveNav("holding-biz")} />
          <NavItem icon={<DocIcon />} label="Documents" indent={4} active={activeNav === "holding-docs"} onClick={() => setActiveNav("holding-docs")} />
          <NavItem icon={<RelatedPartiesIcon color={activeNav === "holding-rp" ? "#1967d2" : "#5f6368"} />} label="Related Parties" indent={4} active={activeNav === "holding-rp"} onClick={() => setActiveNav("holding-rp")} />
        </div>
        <div style={{ height: 1, background: "#e8eaed", margin: "4px 12px" }} />

        {/* Operating Companies */}
        <div style={{ padding: "8px 0 4px" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#5f6368", textTransform: "uppercase", letterSpacing: 0.5, padding: "0 16px 6px" }}>Operating Companies ({OPERATING_COS.length})</div>
          {OPERATING_COS.map(co => {
            const isExpanded = expandedCos[co.id];
            const isActive = activeNav.startsWith(co.id);
            const shortName = co.name.replace("GSH Subs ", "").replace(" LLC", "");
            const uboCount = co.owners.filter(o => (o.direct + o.indirect) >= UBO_THRESHOLD).length;
            return <div key={co.id}>
              {/* Collapsible header */}
              <div onClick={() => { toggleCo(co.id); setActiveNav(co.id + "-biz"); }} style={{
                display: "flex", alignItems: "center", gap: 6,
                padding: "7px 12px 7px 20px", fontSize: 13, cursor: "pointer",
                color: isActive ? "#1967d2" : "#3c4043",
                fontWeight: isActive ? 600 : 400,
                background: isActive && !isExpanded ? "#e8f0fe" : "transparent",
                borderLeft: isActive ? "3px solid #1967d2" : "3px solid transparent",
                transition: "background 0.12s",
              }}>
                <span style={{ display: "flex", color: "#9aa0a6", flexShrink: 0 }}>{isExpanded ? <ChevronDown size={12} /> : <ChevronRight size={12} />}</span>
                <StatusDot status={co.status} />
                <span style={{ flex: 1, fontSize: 12.5 }}>{shortName}</span>
                <span style={{ fontSize: 9.5, fontWeight: 600, color: "#9aa0a6", background: "#f1f3f4", padding: "1px 5px", borderRadius: 99 }}>{uboCount}</span>
              </div>
              {/* Sub-items */}
              {isExpanded && <div style={{ borderLeft: "3px solid transparent" }}>
                <NavItem icon={<BusinessInfoIcon complete={co.status === "complete"} />} label="Business Information" indent={20} active={activeNav === co.id + "-biz"} onClick={() => setActiveNav(co.id + "-biz")} />
                <NavItem icon={<DocIcon />} label="Documents" indent={20} active={activeNav === co.id + "-docs"} onClick={() => setActiveNav(co.id + "-docs")} />
                <NavItem icon={<RelatedPartiesIcon color={activeNav === co.id + "-rp" ? "#1967d2" : "#5f6368"} />} label="Related Parties" indent={20} active={activeNav === co.id + "-rp"} onClick={() => setActiveNav(co.id + "-rp")} />
              </div>}
            </div>;
          })}
        </div>
        <div style={{ height: 1, background: "#e8eaed", margin: "4px 12px" }} />

        {/* Individuals */}
        <div style={{ padding: "8px 0 8px" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#5f6368", textTransform: "uppercase", letterSpacing: 0.5, padding: "0 16px 6px" }}>
            Individuals ({Object.keys(PERSON_DETAILS).length})
          </div>
          {Object.entries(PERSON_DETAILS).map(([pKey, pDetail]) => {
            const person = PEOPLE[pKey];
            if (!person || person.type !== "individual") return null;
            const isExpanded = expandedCos["p-" + pKey];
            const isActive = activeNav.startsWith("person-" + pKey);
            const overall = personKycOverall(pDetail.kyc);
            const entityCount = OPERATING_COS.filter(co => co.owners.some(o => o.person === pKey)).length;
            return <div key={pKey}>
              <div onClick={() => { toggleCo("p-" + pKey); setActiveNav("person-" + pKey + "-details"); }} style={{
                display: "flex", alignItems: "center", gap: 6,
                padding: "7px 12px 7px 20px", fontSize: 13, cursor: "pointer",
                color: isActive ? "#1967d2" : "#3c4043",
                fontWeight: isActive ? 600 : 400,
                background: isActive && !isExpanded ? "#e8f0fe" : "transparent",
                borderLeft: isActive ? "3px solid #1967d2" : "3px solid transparent",
                transition: "background 0.12s",
              }}>
                <span style={{ display: "flex", color: "#9aa0a6", flexShrink: 0 }}>{isExpanded ? <ChevronDown size={12} /> : <ChevronRight size={12} />}</span>
                <StatusDot status={overall} />
                <span style={{ flex: 1, fontSize: 12.5 }}>{person.name}</span>
                <span style={{ fontSize: 9.5, fontWeight: 600, color: "#9aa0a6", background: "#f1f3f4", padding: "1px 5px", borderRadius: 99 }}>{entityCount}</span>
              </div>
              {isExpanded && <div style={{ borderLeft: "3px solid transparent" }}>
                <NavItem icon={<PersonalIcon />} label="Personal Details" indent={20} active={activeNav === "person-" + pKey + "-details"} onClick={() => setActiveNav("person-" + pKey + "-details")} />
                <NavItem icon={<DocIcon />} label="Documents" indent={20} active={activeNav === "person-" + pKey + "-docs"} onClick={() => setActiveNav("person-" + pKey + "-docs")} />
              </div>}
            </div>;
          })}
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, minWidth: 0 }}>
        {getContent()}
      </div>
    </div>
  </div>;
}
