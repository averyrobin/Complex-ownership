import { useState } from "react";

/* ── Icons ── */
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
const ArrowLeft=({size=16})=><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>;

/* ── Reusable ── */
const EntityBubble=({type,size=28,color})=>{const b=type==="business";return<div style={{width:size,height:size,borderRadius:b?6:"50%",background:b?(color||"#e8f0fe"):(color||"#e6f4ea"),display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,color:b?"#1967d2":"#1e8e3e"}}>{b?<BuildingIcon size={size*0.5}/>:<UserIcon size={size*0.5}/>}</div>};
const NavItem=({icon,label,active,indent=0,onClick,badge})=><div onClick={onClick} style={{display:"flex",alignItems:"center",gap:8,padding:`7px 12px 7px ${16+indent}px`,fontSize:13,color:active?"#1967d2":"#3c4043",fontWeight:active?600:400,background:active?"#e8f0fe":"transparent",borderLeft:active?"3px solid #1967d2":"3px solid transparent",cursor:"pointer",transition:"background 0.12s"}}><span style={{display:"flex",flexShrink:0}}>{icon}</span><span style={{flex:1}}>{label}</span>{badge&&<span style={{fontSize:10,fontWeight:600,color:"#9aa0a6",background:"#f1f3f4",padding:"1px 5px",borderRadius:99}}>{badge}</span>}</div>;
const StatusDot=({status})=>{const m={complete:"#34a853",in_progress:"#4285f4",needs_review:"#f9ab00",not_started:"#dadce0"};return<span style={{width:8,height:8,borderRadius:"50%",background:m[status]||"#dadce0",display:"inline-block",flexShrink:0}}/>};
const areaIcon=(s)=>{const m={complete:{bg:"#e6f4ea",c:"#1e8e3e",i:<CheckIcon size={10}/>},in_progress:{bg:"#e8f0fe",c:"#1967d2",i:<ClockIcon size={10}/>},needs_review:{bg:"#fef7e0",c:"#b06000",i:<AlertIcon size={10}/>},not_started:{bg:"#f1f3f4",c:"#bdc1c6",i:<span style={{width:5,height:5,borderRadius:"50%",background:"#dadce0",display:"block"}}/>}};const x=m[s]||m.not_started;return<div style={{width:20,height:20,borderRadius:4,background:x.bg,color:x.c,display:"flex",alignItems:"center",justifyContent:"center"}}>{x.i}</div>};
const kycIcon=(s)=>{if(s==="complete")return<div style={{width:20,height:20,borderRadius:"50%",background:"#e6f4ea",display:"flex",alignItems:"center",justifyContent:"center",color:"#1e8e3e"}}><CheckIcon size={10}/></div>;if(s==="in_progress")return<div style={{width:20,height:20,borderRadius:"50%",background:"#e8f0fe",display:"flex",alignItems:"center",justifyContent:"center",color:"#1967d2"}}><ClockIcon size={10}/></div>;if(s==="needs_review")return<div style={{width:20,height:20,borderRadius:"50%",background:"#fef7e0",display:"flex",alignItems:"center",justifyContent:"center",color:"#b06000"}}><AlertIcon size={10}/></div>;return<div style={{width:20,height:20,borderRadius:"50%",background:"#f1f3f4",display:"flex",alignItems:"center",justifyContent:"center"}}><span style={{width:6,height:6,borderRadius:"50%",background:"#dadce0",display:"block"}}/></div>};
const kycLabel=(s)=>({complete:"Complete",in_progress:"In Progress",needs_review:"Needs Review",not_started:"Not Started"}[s]||"—");
const kycOverall=(kyc)=>{const v=Object.entries(kyc).filter(([k])=>k!=="alloyStatus").map(([,v])=>v);if(v.every(x=>x==="complete"))return"complete";if(v.some(x=>x==="needs_review"))return"needs_review";if(v.some(x=>x==="in_progress"))return"in_progress";return"not_started"};

const UBO_THRESHOLD = 25;

/* ══════════════════════════════════════════
   DATA — 3 Holding Companies
   ══════════════════════════════════════════ */

const PEOPLE = {
  "peter-cancro":   { name: "Peter Cancro",       role: "Managing Member / UBO", type: "individual", kyc: { identity:"complete", sow:"complete", pep:"complete", addr:"complete", alloyStatus:"Approved (0.97)" }},
  "maria-cancro":   { name: "Maria Cancro",        role: "Member / UBO",          type: "individual", kyc: { identity:"complete", sow:"complete", pep:"complete", addr:"complete", alloyStatus:"Approved (0.95)" }},
  "tom-burke":      { name: "Tom Burke",            role: "Operating Manager",     type: "individual", kyc: { identity:"complete", sow:"in_progress", pep:"complete", addr:"complete", alloyStatus:"Approved (0.99)" }},
  "lisa-chen":      { name: "Lisa Chen",            role: "Minority Member",       type: "individual", kyc: { identity:"complete", sow:"not_started", pep:"complete", addr:"complete", alloyStatus:"Approved (0.98)" }},
  "david-ross":     { name: "David Ross",           role: "Minority Member",       type: "individual", kyc: { identity:"complete", sow:"in_progress", pep:"needs_review", addr:"complete", alloyStatus:"Manual Review" }},
  "sarah-kim":      { name: "Sarah Kim",            role: "Operating Manager",     type: "individual", kyc: { identity:"complete", sow:"complete", pep:"complete", addr:"complete", alloyStatus:"Approved (0.96)" }},
  "raj-patel":      { name: "Raj Patel",            role: "Minority Member",       type: "individual", kyc: { identity:"complete", sow:"not_started", pep:"not_started", addr:"complete", alloyStatus:"Not Run" }},
  "jen-martinez":   { name: "Jennifer Martinez",    role: "Operating Manager",     type: "individual", kyc: { identity:"in_progress", sow:"not_started", pep:"not_started", addr:"not_started", alloyStatus:"Not Run" }},
  "mike-walsh":     { name: "Mike Walsh",           role: "Minority Member",       type: "individual", kyc: { identity:"not_started", sow:"not_started", pep:"not_started", addr:"not_started", alloyStatus:"Not Run" }},
  "tony-deluca":    { name: "Tony DeLuca",          role: "Operating Manager",     type: "individual", kyc: { identity:"complete", sow:"complete", pep:"complete", addr:"complete", alloyStatus:"Approved (0.94)" }},
  "nina-rossi":     { name: "Nina Rossi",           role: "Member / UBO",          type: "individual", kyc: { identity:"complete", sow:"in_progress", pep:"complete", addr:"complete", alloyStatus:"Approved (0.91)" }},
  "frank-marino":   { name: "Frank Marino",         role: "Minority Member",       type: "individual", kyc: { identity:"complete", sow:"not_started", pep:"not_started", addr:"complete", alloyStatus:"Not Run" }},
  "james-park":     { name: "James Park",           role: "Property Manager",      type: "individual", kyc: { identity:"complete", sow:"complete", pep:"complete", addr:"complete", alloyStatus:"Approved (0.99)" }},
  "cancro-trust":   { name: "Cancro Family Trust",  role: "Member",                type: "business",   kyc: { identity:"complete", sow:"complete", pep:"complete", addr:"complete", alloyStatus:"Approved" }},
};

const HOLDINGS = [
  {
    id: "subs", name: "Garden State Subs Holdings LLC", color: "#1967d2", bgColor: "#e8f0fe",
    type: "Franchise — Jersey Mike's", state: "NJ", entityCount: 10, status: "in_progress",
    opcos: [
      { id:"s01",name:"GSH Subs I LLC",loc:"Edison, NJ",fran:"#1204",status:"complete",owners:[{p:"peter-cancro",d:60,i:0},{p:"maria-cancro",d:20,i:0},{p:"tom-burke",d:20,i:0}]},
      { id:"s02",name:"GSH Subs II LLC",loc:"Princeton, NJ",fran:"#1207",status:"complete",owners:[{p:"peter-cancro",d:60,i:0},{p:"maria-cancro",d:20,i:0},{p:"lisa-chen",d:20,i:0}]},
      { id:"s03",name:"GSH Subs III LLC",loc:"New Brunswick, NJ",fran:"#1215",status:"in_progress",owners:[{p:"peter-cancro",d:40,i:10},{p:"cancro-trust",d:30,i:0},{p:"david-ross",d:20,i:0}]},
      { id:"s04",name:"GSH Subs IV LLC",loc:"Morristown, NJ",fran:"#1221",status:"complete",owners:[{p:"peter-cancro",d:51,i:0},{p:"sarah-kim",d:29,i:0},{p:"raj-patel",d:20,i:0}]},
      { id:"s05",name:"GSH Subs V LLC",loc:"Red Bank, NJ",fran:"#1228",status:"needs_review",owners:[{p:"peter-cancro",d:0,i:45},{p:"cancro-trust",d:45,i:0},{p:"david-ross",d:10,i:0}]},
      { id:"s06",name:"GSH Subs VI LLC",loc:"Hoboken, NJ",fran:"#1233",status:"in_progress",owners:[{p:"peter-cancro",d:50,i:0},{p:"maria-cancro",d:25,i:0},{p:"jen-martinez",d:25,i:0}]},
      { id:"s07",name:"GSH Subs VII LLC",loc:"Cherry Hill, NJ",fran:"#1240",status:"not_started",owners:[{p:"peter-cancro",d:30,i:20},{p:"cancro-trust",d:20,i:0},{p:"mike-walsh",d:30,i:0}]},
      { id:"s08",name:"GSH Subs VIII LLC",loc:"Toms River, NJ",fran:"#1245",status:"complete",owners:[{p:"peter-cancro",d:70,i:0},{p:"tom-burke",d:30,i:0}]},
      { id:"s09",name:"GSH Subs IX LLC",loc:"Wayne, NJ",fran:"#1251",status:"in_progress",owners:[{p:"peter-cancro",d:40,i:0},{p:"maria-cancro",d:35,i:0},{p:"raj-patel",d:25,i:0}]},
      { id:"s10",name:"GSH Subs X LLC",loc:"Atlantic City, NJ",fran:"#1260",status:"not_started",owners:[{p:"peter-cancro",d:0,i:50},{p:"cancro-trust",d:50,i:0}]},
    ],
  },
  {
    id: "pizza", name: "Garden State Pizza Holdings LLC", color: "#e65100", bgColor: "#fff3e0",
    type: "Franchise — Pizza", state: "NJ", entityCount: 6, status: "in_progress",
    opcos: [
      { id:"p01",name:"GSP Pizza I LLC",loc:"Newark, NJ",fran:"#801",status:"complete",owners:[{p:"peter-cancro",d:40,i:0},{p:"tony-deluca",d:35,i:0},{p:"nina-rossi",d:25,i:0}]},
      { id:"p02",name:"GSP Pizza II LLC",loc:"Jersey City, NJ",fran:"#805",status:"complete",owners:[{p:"peter-cancro",d:50,i:0},{p:"tony-deluca",d:30,i:0},{p:"frank-marino",d:20,i:0}]},
      { id:"p03",name:"GSP Pizza III LLC",loc:"Paterson, NJ",fran:"#812",status:"in_progress",owners:[{p:"peter-cancro",d:30,i:15},{p:"cancro-trust",d:15,i:0},{p:"nina-rossi",d:40,i:0}]},
      { id:"p04",name:"GSP Pizza IV LLC",loc:"Elizabeth, NJ",fran:"#818",status:"in_progress",owners:[{p:"peter-cancro",d:45,i:0},{p:"maria-cancro",d:30,i:0},{p:"tony-deluca",d:25,i:0}]},
      { id:"p05",name:"GSP Pizza V LLC",loc:"Trenton, NJ",fran:"#823",status:"not_started",owners:[{p:"peter-cancro",d:0,i:50},{p:"cancro-trust",d:50,i:0}]},
      { id:"p06",name:"GSP Pizza VI LLC",loc:"Camden, NJ",fran:"#830",status:"not_started",owners:[{p:"nina-rossi",d:51,i:0},{p:"frank-marino",d:29,i:0},{p:"tony-deluca",d:20,i:0}]},
    ],
  },
  {
    id: "prop", name: "Shore Properties LLC", color: "#7b1fa2", bgColor: "#f3e8fd",
    type: "Commercial Real Estate", state: "NJ", entityCount: 4, status: "needs_review",
    opcos: [
      { id:"r01",name:"Shore Properties — Asbury",loc:"Asbury Park, NJ",fran:"CRE",status:"complete",owners:[{p:"peter-cancro",d:50,i:0},{p:"maria-cancro",d:30,i:0},{p:"james-park",d:20,i:0}]},
      { id:"r02",name:"Shore Properties — LBI",loc:"Long Beach Island, NJ",fran:"CRE",status:"complete",owners:[{p:"peter-cancro",d:60,i:0},{p:"james-park",d:40,i:0}]},
      { id:"r03",name:"Shore Properties — Cape May",loc:"Cape May, NJ",fran:"CRE",status:"needs_review",owners:[{p:"peter-cancro",d:35,i:15},{p:"cancro-trust",d:15,i:0},{p:"maria-cancro",d:35,i:0}]},
      { id:"r04",name:"Shore Properties — Belmar",loc:"Belmar, NJ",fran:"CRE",status:"in_progress",owners:[{p:"peter-cancro",d:40,i:0},{p:"james-park",d:30,i:0},{p:"david-ross",d:30,i:0}]},
    ],
  },
];

const allOpcos = HOLDINGS.flatMap(h => h.opcos.map(o => ({ ...o, holdingId: h.id, holdingName: h.name })));
const allIndividuals = Object.entries(PEOPLE).filter(([,p]) => p.type === "individual");

/* For each person, compute which entities they appear in across ALL holdings */
const personAppearances = (pKey) => {
  const apps = [];
  HOLDINGS.forEach(h => h.opcos.forEach(co => co.owners.forEach(o => {
    if (o.p === pKey) apps.push({ holdingId: h.id, holdingName: h.name, holdingColor: h.color, coName: co.name, coId: co.id, d: o.d, i: o.i, eff: o.d + o.i, isUBO: (o.d + o.i) >= UBO_THRESHOLD });
  })));
  return apps;
};


/* ══════════════════════════════════════════
   CASE DASHBOARD (Hub)
   ══════════════════════════════════════════ */

const CaseDashboard = ({ onNavigateToHolding, onNavigateToIndividuals }) => {
  const totalEntities = HOLDINGS.reduce((s, h) => s + h.opcos.length + 1, 0);
  const totalPeople = allIndividuals.length;
  const totalUBOs = new Set();
  HOLDINGS.forEach(h => h.opcos.forEach(co => co.owners.forEach(o => { if ((o.d + o.i) >= UBO_THRESHOLD && PEOPLE[o.p]?.type === "individual") totalUBOs.add(o.p); })));

  return <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
    {/* Case metadata */}
    <div style={{ background: "white", borderRadius: 8, border: "1px solid #e0e0e0", overflow: "hidden" }}>
      <div style={{ padding: "14px 16px", borderBottom: "1px solid #e8eaed" }}>
        <h2 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "#202124" }}>Case Details</h2>
      </div>
      <div style={{ padding: "16px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "16px 24px" }}>
          {[
            { label: "Client Group", value: "Cancro Enterprise Group", sub: "Commercial Onboarding" },
            { label: "Case Owner", value: "Sarah Chen", sub: "Relationship Manager" },
            { label: "Status", badge: { bg: "#e8f0fe", c: "#1967d2", l: "Open" } },
            { label: "CRA Score", score: { v: 64, t: "Medium", c: "#f9ab00" } },
            { label: "Holding Companies", value: HOLDINGS.length.toString() },
            { label: "Total Entities", value: totalEntities.toString() },
            { label: "Individuals", value: totalPeople.toString() },
            { label: "Unique UBOs", value: totalUBOs.size.toString() },
          ].map((f, i) => <div key={i}>
            <div style={{ fontSize: 11, fontWeight: 600, color: "#80868b", textTransform: "uppercase", letterSpacing: 0.4, marginBottom: 4 }}>{f.label}</div>
            {f.badge ? <span style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "3px 10px", borderRadius: 4, fontSize: 13, fontWeight: 600, background: f.badge.bg, color: f.badge.c }}><span style={{ width: 7, height: 7, borderRadius: "50%", background: f.badge.c }} />{f.badge.l}</span>
              : f.score ? <div style={{ display: "flex", alignItems: "center", gap: 8 }}><span style={{ fontSize: 20, fontWeight: 800, color: f.score.c }}>{f.score.v}</span><span style={{ fontSize: 11, fontWeight: 600, padding: "2px 7px", borderRadius: 4, background: "#fef7e0", color: "#b06000" }}>{f.score.t}</span></div>
              : <div><div style={{ fontSize: 14, fontWeight: 600, color: "#202124" }}>{f.value}</div>{f.sub && <div style={{ fontSize: 11.5, color: "#80868b", marginTop: 1 }}>{f.sub}</div>}</div>}
          </div>)}
        </div>
      </div>
    </div>

    {/* Holding Company Cards */}
    <div>
      <div style={{ fontSize: 15, fontWeight: 700, color: "#202124", marginBottom: 12 }}>Holding Companies</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14 }}>
        {HOLDINGS.map(h => {
          const completeCos = h.opcos.filter(c => c.status === "complete").length;
          const uboSet = new Set();
          h.opcos.forEach(co => co.owners.forEach(o => { if ((o.d + o.i) >= UBO_THRESHOLD && PEOPLE[o.p]?.type === "individual") uboSet.add(o.p); }));
          return <div key={h.id} onClick={() => onNavigateToHolding(h.id)} style={{
            background: "white", borderRadius: 10, border: "1px solid #e0e0e0", overflow: "hidden", cursor: "pointer",
            transition: "box-shadow 0.15s, transform 0.15s",
          }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.08)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}
          >
            {/* Color bar */}
            <div style={{ height: 4, background: h.color }} />
            <div style={{ padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <EntityBubble type="business" size={36} color={h.bgColor} />
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#202124" }}>{h.name}</div>
                  <div style={{ fontSize: 11.5, color: "#80868b" }}>{h.type}</div>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
                {[
                  { label: "Entities", value: h.opcos.length, color: "#202124" },
                  { label: "Complete", value: `${completeCos}/${h.opcos.length}`, color: "#1e8e3e" },
                  { label: "UBOs", value: uboSet.size, color: "#1967d2" },
                ].map((s, i) => <div key={i} style={{ textAlign: "center", padding: "8px 4px", borderRadius: 6, background: "#f8f9fa" }}>
                  <div style={{ fontSize: 16, fontWeight: 800, color: s.color }}>{s.value}</div>
                  <div style={{ fontSize: 10, color: "#9aa0a6", marginTop: 1 }}>{s.label}</div>
                </div>)}
              </div>
              {/* Mini status bar */}
              <div style={{ display: "flex", gap: 3, marginTop: 12 }}>
                {h.opcos.map((co, i) => <div key={i} style={{
                  flex: 1, height: 6, borderRadius: 3,
                  background: co.status === "complete" ? "#34a853" : co.status === "in_progress" ? "#4285f4" : co.status === "needs_review" ? "#f9ab00" : "#e8eaed",
                }} />)}
              </div>
            </div>
          </div>;
        })}
      </div>
    </div>

    {/* Individuals Summary */}
    <div style={{ background: "white", borderRadius: 8, border: "1px solid #e0e0e0", overflow: "hidden" }}>
      <div style={{ padding: "14px 16px", borderBottom: "1px solid #e8eaed", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <h2 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: "#202124" }}>Individuals</h2>
          <span style={{ fontSize: 11, fontWeight: 600, color: "#5f6368", background: "#f1f3f4", padding: "2px 7px", borderRadius: 99 }}>{allIndividuals.length}</span>
        </div>
        <button onClick={onNavigateToIndividuals} style={{ padding: "5px 12px", borderRadius: 4, border: "1px solid #dadce0", background: "white", color: "#1967d2", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>View All →</button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 0.5fr 0.5fr 0.5fr 0.5fr 0.6fr", padding: "8px 16px", borderBottom: "1px solid #e8eaed", fontSize: 10.5, fontWeight: 600, color: "#80868b", textTransform: "uppercase", letterSpacing: 0.5 }}>
        <div>Person</div><div style={{textAlign:"center"}}>Identity</div><div style={{textAlign:"center"}}>SoW</div><div style={{textAlign:"center"}}>PEP</div><div style={{textAlign:"center"}}>Address</div><div style={{textAlign:"center"}}>Entities</div>
      </div>
      {allIndividuals.map(([pKey, person], idx) => {
        const apps = personAppearances(pKey);
        const uboCount = apps.filter(a => a.isUBO).length;
        return <div key={pKey} style={{ display: "grid", gridTemplateColumns: "1.4fr 0.5fr 0.5fr 0.5fr 0.5fr 0.6fr", alignItems: "center", padding: "10px 16px", borderBottom: idx < allIndividuals.length - 1 ? "1px solid #f0f1f3" : "none" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <EntityBubble type="individual" size={24} />
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 13, fontWeight: 600, color: "#202124" }}>
                {person.name}
                {uboCount > 0 && <span style={{ fontSize: 8.5, fontWeight: 700, padding: "1px 5px", borderRadius: 3, background: "#1a1a2e", color: "white" }}>UBO</span>}
              </div>
              <div style={{ fontSize: 11, color: "#80868b" }}>{person.role}</div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>{kycIcon(person.kyc.identity)}</div>
          <div style={{ display: "flex", justifyContent: "center" }}>{kycIcon(person.kyc.sow)}</div>
          <div style={{ display: "flex", justifyContent: "center" }}>{kycIcon(person.kyc.pep)}</div>
          <div style={{ display: "flex", justifyContent: "center" }}>{kycIcon(person.kyc.addr)}</div>
          <div style={{ textAlign: "center" }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: "#202124" }}>{apps.length}</span>
            {uboCount > 0 && <span style={{ fontSize: 10, color: "#1967d2", marginLeft: 4 }}>({uboCount} UBO)</span>}
          </div>
        </div>;
      })}
    </div>
  </div>;
};


/* ══════════════════════════════════════════
   HOLDING COMPANY SUB-VIEW
   ══════════════════════════════════════════ */

const HoldingView = ({ holdingId, onBack, onNavPerson }) => {
  const h = HOLDINGS.find(x => x.id === holdingId);
  if (!h) return null;
  const [activeTab, setActiveTab] = useState("overview");
  const [expandedCo, setExpandedCo] = useState(null);

  const areas = ["Information", "Documents", "Screening", "EDD"];

  return <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
    {/* Sub-nav */}
    <div style={{ width: 230, flexShrink: 0, background: "white", borderRadius: 8, border: "1px solid #e0e0e0", overflow: "hidden", maxHeight: "calc(100vh - 180px)", overflowY: "auto" }}>
      {/* Back button */}
      <div onClick={onBack} style={{ display: "flex", alignItems: "center", gap: 6, padding: "10px 16px", cursor: "pointer", color: "#1967d2", fontSize: 13, fontWeight: 600, borderBottom: "1px solid #e8eaed" }}>
        <ArrowLeft size={14} /> Back to Case
      </div>
      <div style={{ padding: "8px 0 4px" }}>
        <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5, padding: "0 16px 6px", color: h.color }}>{h.name.replace(" Holdings LLC", "").replace(" LLC", "")}</div>
        <NavItem icon={<DocIcon />} label="Overview" active={activeTab === "overview"} onClick={() => setActiveTab("overview")} />
        <NavItem icon={<BusinessInfoIcon complete />} label="Holding Co Info" active={activeTab === "holding-biz"} onClick={() => setActiveTab("holding-biz")} />
      </div>
      <div style={{ height: 1, background: "#e8eaed", margin: "4px 12px" }} />
      <div style={{ padding: "8px 0 4px" }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: "#5f6368", textTransform: "uppercase", letterSpacing: 0.5, padding: "0 16px 6px" }}>Entities ({h.opcos.length})</div>
        {h.opcos.map(co => {
          const isExp = expandedCo === co.id;
          const isActive = activeTab.startsWith(co.id);
          const uboCount = co.owners.filter(o => (o.d + o.i) >= UBO_THRESHOLD).length;
          return <div key={co.id}>
            <div onClick={() => { setExpandedCo(isExp ? null : co.id); setActiveTab(co.id + "-biz"); }} style={{
              display: "flex", alignItems: "center", gap: 6, padding: "6px 12px 6px 20px", fontSize: 12.5, cursor: "pointer",
              color: isActive ? "#1967d2" : "#3c4043", fontWeight: isActive ? 600 : 400,
              background: isActive && !isExp ? "#e8f0fe" : "transparent",
              borderLeft: isActive ? `3px solid ${h.color}` : "3px solid transparent",
            }}>
              <span style={{ color: "#9aa0a6", display: "flex" }}>{isExp ? <ChevronDown size={11} /> : <ChevronRight size={11} />}</span>
              <StatusDot status={co.status} />
              <span style={{ flex: 1 }}>{co.name.replace("GSH Subs ","").replace("GSP Pizza ","").replace("Shore Properties — ","").replace(" LLC","")}</span>
              <span style={{ fontSize: 9, fontWeight: 600, color: "#9aa0a6", background: "#f1f3f4", padding: "1px 4px", borderRadius: 99 }}>{uboCount}</span>
            </div>
            {isExp && <div>
              <NavItem icon={<BusinessInfoIcon complete={co.status==="complete"} />} label="Business Info" indent={20} active={activeTab===co.id+"-biz"} onClick={()=>setActiveTab(co.id+"-biz")} />
              <NavItem icon={<DocIcon />} label="Documents" indent={20} active={activeTab===co.id+"-docs"} onClick={()=>setActiveTab(co.id+"-docs")} />
              <NavItem icon={<RelatedPartiesIcon color={activeTab===co.id+"-rp"?h.color:"#5f6368"} />} label="Related Parties" indent={20} active={activeTab===co.id+"-rp"} onClick={()=>setActiveTab(co.id+"-rp")} />
            </div>}
          </div>;
        })}
      </div>
    </div>

    {/* Content */}
    <div style={{ flex: 1, minWidth: 0 }}>
      {activeTab === "overview" && <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {/* Entity progress */}
        <div style={{ background: "white", borderRadius: 8, border: "1px solid #e0e0e0", overflow: "hidden" }}>
          <div style={{ padding: "14px 16px", borderBottom: "1px solid #e8eaed", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 4, height: 16, borderRadius: 2, background: h.color }} />
              <h2 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: "#202124" }}>{h.name}</h2>
            </div>
            <div style={{ fontSize: 12, color: "#80868b" }}>{h.opcos.filter(c => c.status === "complete").length} of {h.opcos.length} complete</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1.6fr repeat(4, 0.45fr) 0.5fr", padding: "8px 16px", borderBottom: "1px solid #e8eaed", fontSize: 10.5, fontWeight: 600, color: "#80868b", textTransform: "uppercase", letterSpacing: 0.5 }}>
            <div>Entity</div>{areas.map(a => <div key={a} style={{ textAlign: "center" }}>{a}</div>)}<div style={{ textAlign: "center" }}>UBOs</div>
          </div>
          {h.opcos.map((co, idx) => {
            const uboCount = co.owners.filter(o => (o.d + o.i) >= UBO_THRESHOLD).length;
            const statuses = co.status === "complete" ? ["complete","complete","complete","complete"] : co.status === "in_progress" ? ["complete","in_progress","complete","not_started"] : co.status === "needs_review" ? ["complete","complete","needs_review","not_started"] : ["in_progress","not_started","not_started","not_started"];
            return <div key={idx} style={{ display: "grid", gridTemplateColumns: "1.6fr repeat(4, 0.45fr) 0.5fr", alignItems: "center", padding: "10px 16px", borderBottom: idx < h.opcos.length - 1 ? "1px solid #f0f1f3" : "none", cursor: "pointer" }}
              onClick={() => { setExpandedCo(co.id); setActiveTab(co.id + "-biz"); }}
              onMouseEnter={e => e.currentTarget.style.background = "#f8f9fa"} onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <EntityBubble type="business" size={22} /><div><div style={{ fontSize: 12.5, fontWeight: 600, color: "#202124" }}>{co.name}</div><div style={{ fontSize: 10.5, color: "#9aa0a6" }}>{co.loc}</div></div>
              </div>
              {statuses.map((s, i) => <div key={i} style={{ display: "flex", justifyContent: "center" }}>{areaIcon(s)}</div>)}
              <div style={{ textAlign: "center", fontSize: 12, fontWeight: 600, color: "#5f6368" }}>{uboCount}</div>
            </div>;
          })}
        </div>
      </div>}

      {activeTab === "holding-biz" && <div style={{ background: "white", borderRadius: 8, border: "1px solid #e0e0e0", padding: "48px 24px", textAlign: "center" }}><div style={{ fontSize: 14, color: "#80868b" }}>Business Information — {h.name}</div></div>}

      {/* OpCo pages */}
      {activeTab.endsWith("-biz") && activeTab !== "holding-biz" && (() => {
        const coId = activeTab.replace("-biz", "");
        const co = h.opcos.find(c => c.id === coId);
        if (!co) return null;
        const totalOwnership = co.owners.reduce((s, o) => s + o.d + o.i, 0);
        const gap = 100 - totalOwnership;
        return <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ background: "white", borderRadius: 8, border: "1px solid #e0e0e0", overflow: "hidden" }}>
            <div style={{ padding: "14px 16px", borderBottom: "1px solid #e8eaed" }}><h2 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "#202124" }}>{co.name}</h2></div>
            <div style={{ padding: "16px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "12px 24px" }}>
                {[{ l: "Location", v: co.loc }, { l: "Franchise", v: co.fran }, { l: "Entity Type", v: "LLC" }, { l: "Parent", v: h.name }].map((f, i) => <div key={i}><div style={{ fontSize: 11, fontWeight: 600, color: "#80868b", marginBottom: 3 }}>{f.l}</div><div style={{ fontSize: 13.5, fontWeight: 500, color: "#202124" }}>{f.v}</div></div>)}
              </div>
            </div>
          </div>
          {/* UBO panel */}
          <div style={{ background: "white", borderRadius: 8, border: "1px solid #e0e0e0", overflow: "hidden" }}>
            <div style={{ padding: "14px 16px", borderBottom: "1px solid #e8eaed", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}><h2 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: "#202124" }}>UBO Identification</h2><span style={{ fontSize: 11, fontWeight: 600, padding: "2px 7px", borderRadius: 99, background: gap <= 0 ? "#e6f4ea" : "#fef7e0", color: gap <= 0 ? "#1e8e3e" : "#b06000" }}>{co.owners.filter(o => (o.d + o.i) >= UBO_THRESHOLD).length} UBOs</span></div>
              <span style={{ fontSize: 12, color: "#80868b" }}>Threshold: <strong>25%</strong></span>
            </div>
            {/* Coverage bar */}
            <div style={{ padding: "14px 16px", borderBottom: "1px solid #e8eaed" }}>
              <div style={{ position: "relative", height: 24, background: "#f1f3f4", borderRadius: 5, overflow: "hidden" }}>
                <div style={{ position: "absolute", left: "25%", top: 0, bottom: 0, width: 2, background: "#c5221f", zIndex: 2 }} />
                <div style={{ display: "flex", height: "100%", zIndex: 1, position: "relative" }}>
                  {co.owners.map((o, i) => { const pct = o.d + o.i; const colors = ["#1967d2", "#7b1fa2", "#e65100", "#1e8e3e", "#c5221f"]; const person = PEOPLE[o.p]; return <div key={i} style={{ width: `${pct}%`, height: "100%", background: colors[i % colors.length], opacity: 0.75, display: "flex", alignItems: "center", justifyContent: "center", borderRight: "2px solid white" }}>{pct >= 15 && <span style={{ fontSize: 9, fontWeight: 700, color: "white", whiteSpace: "nowrap" }}>{person.name.split(" ")[0]} {pct}%</span>}</div>; })}
                </div>
              </div>
            </div>
            {/* Owners */}
            {co.owners.map((o, idx) => { const person = PEOPLE[o.p]; const eff = o.d + o.i; const isUBO = eff >= UBO_THRESHOLD; return <div key={idx} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 16px", borderBottom: idx < co.owners.length - 1 ? "1px solid #f0f1f3" : "none" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <EntityBubble type={person.type} size={26} />
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "#202124" }}>{person.name}</span>
                    {isUBO && person.type === "individual" && <span style={{ fontSize: 8.5, fontWeight: 700, padding: "1px 5px", borderRadius: 3, background: "#1a1a2e", color: "white" }}>UBO</span>}
                  </div>
                  <div style={{ fontSize: 11, color: "#80868b" }}>{person.role}</div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 100, height: 12, background: "#f1f3f4", borderRadius: 3, position: "relative" }}>
                  <div style={{ position: "absolute", left: "25%", top: -1, bottom: -1, width: 1, background: "#ea433544" }} />
                  {o.d > 0 && <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: `${o.d}%`, background: "#1967d2", borderRadius: o.i > 0 ? "3px 0 0 3px" : 3 }} />}
                  {o.i > 0 && <div style={{ position: "absolute", left: `${o.d}%`, top: 0, bottom: 0, width: `${o.i}%`, background: "#7b1fa2", borderRadius: o.d > 0 ? "0 3px 3px 0" : 3 }} />}
                </div>
                <span style={{ fontSize: 13, fontWeight: 700, color: isUBO ? "#1967d2" : "#9aa0a6", minWidth: 36, textAlign: "right" }}>{eff}%</span>
              </div>
            </div>; })}
          </div>
        </div>;
      })()}

      {activeTab.endsWith("-rp") && (() => {
        const coId = activeTab.replace("-rp", "");
        const co = h.opcos.find(c => c.id === coId);
        if (!co) return null;
        return <div style={{ background: "white", borderRadius: 8, border: "1px solid #e0e0e0", overflow: "hidden" }}>
          <div style={{ padding: "14px 16px", borderBottom: "1px solid #e8eaed" }}><h2 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "#202124" }}>Related Parties — {co.name}</h2></div>
          <div style={{ padding: "24px 16px 32px", display: "flex", justifyContent: "center", overflowX: "auto" }}>
            {/* Simple tree */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ padding: "10px 20px", border: "2px solid " + h.color, borderRadius: 8, background: "white", fontWeight: 700, fontSize: 13, color: "#202124", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>{co.name}</div>
              <div style={{ width: 2, height: 20, background: "#dadce0" }} />
              <div style={{ display: "flex", gap: 20 }}>
                {co.owners.map((o, i) => {
                  const person = PEOPLE[o.p]; const eff = o.d + o.i;
                  return <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }}>
                    {co.owners.length > 1 && <div style={{ position: "absolute", top: -2, left: i === 0 ? "50%" : 0, right: i === co.owners.length - 1 ? "50%" : 0, height: 2, background: "#dadce0" }} />}
                    <div style={{ width: 2, height: 20, background: "#dadce0" }} />
                    <div style={{ fontSize: 11, fontWeight: 600, color: "#1967d2", marginBottom: 4 }}>{eff}%</div>
                    <div style={{ padding: "8px 14px", border: "1px solid #dadce0", borderRadius: 8, background: "white", display: "flex", alignItems: "center", gap: 6 }}>
                      <EntityBubble type={person.type} size={22} />
                      <div>
                        <div style={{ fontSize: 12, fontWeight: 600, color: "#202124", whiteSpace: "nowrap" }}>{person.name}</div>
                        <div style={{ fontSize: 10, color: "#80868b" }}>{person.role}</div>
                      </div>
                      {eff >= UBO_THRESHOLD && person.type === "individual" && <span style={{ fontSize: 7.5, fontWeight: 700, padding: "1px 4px", borderRadius: 2, background: "#1a1a2e", color: "white" }}>UBO</span>}
                    </div>
                  </div>;
                })}
              </div>
            </div>
          </div>
        </div>;
      })()}

      {activeTab.endsWith("-docs") && <div style={{ background: "white", borderRadius: 8, border: "1px solid #e0e0e0", padding: "48px 24px", textAlign: "center" }}><div style={{ fontSize: 14, color: "#80868b" }}>Documents</div></div>}
    </div>
  </div>;
};


/* ══════════════════════════════════════════
   INDIVIDUALS VIEW (case-level)
   ══════════════════════════════════════════ */

const IndividualsView = ({ onSelectPerson }) => {
  const [expandedPerson, setExpandedPerson] = useState(null);
  return <div style={{ background: "white", borderRadius: 8, border: "1px solid #e0e0e0", overflow: "hidden" }}>
    <div style={{ padding: "14px 16px", borderBottom: "1px solid #e8eaed" }}>
      <h2 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "#202124" }}>All Individuals</h2>
    </div>
    {allIndividuals.map(([pKey, person], idx) => {
      const apps = personAppearances(pKey);
      const uboCount = apps.filter(a => a.isUBO).length;
      const isExp = expandedPerson === pKey;
      return <div key={pKey} style={{ borderBottom: idx < allIndividuals.length - 1 ? "1px solid #f0f1f3" : "none" }}>
        <div onClick={() => setExpandedPerson(isExp ? null : pKey)} style={{ display: "grid", gridTemplateColumns: "24px 1.3fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr", alignItems: "center", padding: "12px 16px", cursor: "pointer" }}
          onMouseEnter={e => e.currentTarget.style.background = "#f8f9fa"} onMouseLeave={e => e.currentTarget.style.background = isExp ? "#f8f9fa" : "transparent"}>
          <div style={{ color: "#9aa0a6" }}>{isExp ? <ChevronDown size={13} /> : <ChevronRight size={13} />}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <EntityBubble type="individual" size={26} />
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 13, fontWeight: 600, color: "#202124" }}>
                {person.name}
                {uboCount > 0 && <span style={{ fontSize: 8.5, fontWeight: 700, padding: "1px 5px", borderRadius: 3, background: "#1a1a2e", color: "white" }}>UBO in {uboCount}</span>}
              </div>
              <div style={{ fontSize: 11, color: "#80868b" }}>{person.role}</div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>{kycIcon(person.kyc.identity)}</div>
          <div style={{ display: "flex", justifyContent: "center" }}>{kycIcon(person.kyc.sow)}</div>
          <div style={{ display: "flex", justifyContent: "center" }}>{kycIcon(person.kyc.pep)}</div>
          <div style={{ display: "flex", justifyContent: "center" }}>{kycIcon(person.kyc.addr)}</div>
          <div style={{ textAlign: "center", fontSize: 12, fontWeight: 600, color: "#5f6368" }}>{apps.length} entities</div>
        </div>
        {/* Expanded: show entity appearances grouped by holding */}
        {isExp && <div style={{ background: "#f8f9fb", borderTop: "1px solid #e8eaed", padding: "12px 16px 12px 48px" }}>
          {HOLDINGS.map(h => {
            const hApps = apps.filter(a => a.holdingId === h.id);
            if (hApps.length === 0) return null;
            return <div key={h.id} style={{ marginBottom: 10 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
                <div style={{ width: 4, height: 12, borderRadius: 2, background: h.color }} />
                <span style={{ fontSize: 11, fontWeight: 700, color: "#5f6368" }}>{h.name}</span>
              </div>
              {hApps.map((a, ai) => <div key={ai} style={{ display: "flex", alignItems: "center", gap: 10, padding: "4px 0 4px 10px" }}>
                <span style={{ fontSize: 12, color: "#3c4043", width: 180 }}>{a.coName}</span>
                <div style={{ width: 80, height: 10, background: "#e8eaed", borderRadius: 3, position: "relative" }}>
                  <div style={{ position: "absolute", left: "25%", top: -1, bottom: -1, width: 1, background: "#ea433522" }} />
                  {a.d > 0 && <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: `${a.d}%`, background: "#1967d2", borderRadius: a.i > 0 ? "3px 0 0 3px" : 3 }} />}
                  {a.i > 0 && <div style={{ position: "absolute", left: `${a.d}%`, top: 0, bottom: 0, width: `${a.i}%`, background: "#7b1fa2", borderRadius: a.d > 0 ? "0 3px 3px 0" : 3 }} />}
                </div>
                <span style={{ fontSize: 11, fontWeight: 700, color: a.isUBO ? "#1967d2" : "#9aa0a6", minWidth: 30 }}>{a.eff}%</span>
                {a.isUBO && <span style={{ fontSize: 8, fontWeight: 700, padding: "1px 4px", borderRadius: 2, background: "#e8f0fe", color: "#1967d2" }}>UBO</span>}
              </div>)}
            </div>;
          })}
        </div>}
      </div>;
    })}
    {/* Column headers (rendered as footer legend) */}
    <div style={{ padding: "8px 16px", borderTop: "1px solid #e8eaed", display: "flex", gap: 12, fontSize: 10.5, color: "#9aa0a6" }}>
      <span style={{ display: "flex", alignItems: "center", gap: 4 }}>{kycIcon("complete")} Complete</span>
      <span style={{ display: "flex", alignItems: "center", gap: 4 }}>{kycIcon("in_progress")} In Progress</span>
      <span style={{ display: "flex", alignItems: "center", gap: 4 }}>{kycIcon("needs_review")} Needs Review</span>
      <span style={{ display: "flex", alignItems: "center", gap: 4 }}>{kycIcon("not_started")} Not Started</span>
    </div>
  </div>;
};


/* ══════════════════════════════════════════
   MAIN LAYOUT
   ══════════════════════════════════════════ */

export default function App() {
  // Navigation: "dashboard" | { holding: "subs" } | "individuals"
  const [view, setView] = useState("dashboard");

  const isHolding = typeof view === "object" && view.holding;

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
        <span style={{ color: "#1967d2", cursor: "pointer" }} onClick={() => setView("dashboard")}>All Onboarding</span>
        <span style={{ color: "#bdc1c6" }}>&gt;</span>
        <span style={{ color: isHolding ? "#1967d2" : "#3c4043", cursor: isHolding ? "pointer" : "default" }} onClick={() => setView("dashboard")}>Cancro Enterprise Group</span>
        {isHolding && <><span style={{ color: "#bdc1c6" }}>&gt;</span><span style={{ color: "#3c4043" }}>{HOLDINGS.find(h => h.id === view.holding)?.name}</span></>}
        {view === "individuals" && <><span style={{ color: "#bdc1c6" }}>&gt;</span><span style={{ color: "#3c4043" }}>Individuals</span></>}
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
    <div style={{ padding: "16px 24px" }}>
      {view === "dashboard" && <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
        {/* Dashboard nav */}
        <div style={{ width: 220, flexShrink: 0, background: "white", borderRadius: 8, border: "1px solid #e0e0e0", overflow: "hidden" }}>
          <div style={{ padding: "10px 0 4px" }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#5f6368", textTransform: "uppercase", letterSpacing: 0.5, padding: "0 16px 6px" }}>Case</div>
            <NavItem icon={<DocIcon />} label="Dashboard" active onClick={() => setView("dashboard")} />
          </div>
          <div style={{ height: 1, background: "#e8eaed", margin: "4px 12px" }} />
          <div style={{ padding: "8px 0 4px" }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#5f6368", textTransform: "uppercase", letterSpacing: 0.5, padding: "0 16px 6px" }}>Holdings</div>
            {HOLDINGS.map(h => <NavItem key={h.id} icon={<div style={{ width: 8, height: 8, borderRadius: 2, background: h.color, flexShrink: 0 }} />} label={h.name.replace(" Holdings LLC", "").replace(" LLC", "")} onClick={() => setView({ holding: h.id })} badge={h.opcos.length} />)}
          </div>
          <div style={{ height: 1, background: "#e8eaed", margin: "4px 12px" }} />
          <div style={{ padding: "8px 0 8px" }}>
            <NavItem icon={<RelatedPartiesIcon />} label="All Individuals" onClick={() => setView("individuals")} badge={allIndividuals.length} />
          </div>
        </div>
        {/* Dashboard content */}
        <div style={{ flex: 1, minWidth: 0 }}><CaseDashboard onNavigateToHolding={id => setView({ holding: id })} onNavigateToIndividuals={() => setView("individuals")} /></div>
      </div>}

      {isHolding && <HoldingView holdingId={view.holding} onBack={() => setView("dashboard")} />}

      {view === "individuals" && <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
        <div style={{ width: 220, flexShrink: 0, background: "white", borderRadius: 8, border: "1px solid #e0e0e0", overflow: "hidden" }}>
          <div onClick={() => setView("dashboard")} style={{ display: "flex", alignItems: "center", gap: 6, padding: "10px 16px", cursor: "pointer", color: "#1967d2", fontSize: 13, fontWeight: 600, borderBottom: "1px solid #e8eaed" }}><ArrowLeft size={14} /> Back to Case</div>
          <div style={{ padding: "8px 0 4px" }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#5f6368", textTransform: "uppercase", letterSpacing: 0.5, padding: "0 16px 6px" }}>Individuals</div>
            {allIndividuals.map(([pKey, person]) => {
              const overall = kycOverall(person.kyc);
              return <NavItem key={pKey} icon={<StatusDot status={overall} />} label={person.name} indent={4} />;
            })}
          </div>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}><IndividualsView /></div>
      </div>}
    </div>
  </div>;
}
