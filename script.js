const d = portfolioData;
const el = (id) => document.getElementById(id);
const safe = (value) => String(value ?? "");
const make = (tag, className, html) => { const n=document.createElement(tag); if(className)n.className=className; if(html!==undefined)n.innerHTML=html; return n; };

el("heroName").textContent=d.name;
el("heroHeadline").textContent=d.headline;
el("heroEyebrow").textContent=d.eyebrow;
el("heroIntro").textContent=d.intro;
el("aboutLead").textContent=d.aboutLead;
el("aboutText").textContent=d.about;
el("year").textContent=new Date().getFullYear();

if(d.cvUrl){el("cvButton").href=d.cvUrl;el("cvButton").hidden=false;}
const meta=[d.location,d.email].filter(Boolean);
el("heroMeta").textContent=meta.join("  ·  ");

d.skills.forEach(s=>el("skillTags").append(make("span","tag",safe(s))));

d.experience.forEach(item=>{
  const card=make("article","timeline-item");
  card.append(make("h3","",safe(item.role)));
  card.append(make("div","timeline-meta",`${safe(item.organisation)} · ${safe(item.period)} · ${safe(item.place)}`));
  card.append(make("p","",safe(item.description)));
  el("experienceList").append(card);
});
d.education.forEach(item=>{
  const card=make("article","info-card");
  card.append(make("div","card-icon","▤"));
  card.append(make("h3","",safe(item.qualification)));
  card.append(make("div","card-meta",safe(item.institution)));
  card.append(make("p","",`${safe(item.period)}${item.detail ? " · "+safe(item.detail) : ""}`));
  el("educationList").append(card);
});
d.publications.forEach((item,i)=>{
  const card=make("article","publication");
  card.append(make("div","pub-number",String(i+1).padStart(2,"0")));
  const body=make("div");
  body.append(make("h3","",safe(item.title)));
  body.append(make("p","",`${safe(item.journal)} · ${safe(item.date)}`));
  if(item.doi){const a=make("a");a.href=item.doi.startsWith("http")?item.doi:"https://doi.org/"+item.doi;a.target="_blank";a.rel="noopener";a.textContent="View publication ↗";body.append(a);}
  card.append(body);el("publicationList").append(card);
});
const fp=d.featuredProject;
const featured=make("div","featured-project");
const fbody=make("div");fbody.append(make("h3","",safe(fp.title)));fbody.append(make("p","",safe(fp.description)));
const fLink=make("a","btn",fp.url?"Launch application ↗":"Add app URL to data.js");
if(fp.url){fLink.href=fp.url;fLink.target="_blank";fLink.rel="noopener";}else{fLink.href="#contact";fLink.classList.add("disabled");fLink.setAttribute("aria-label","Application link not configured yet");}
featured.append(fbody,fLink);el("featuredProject").append(featured);
d.projects.forEach(item=>{
  const card=make("article","info-card");card.append(make("div","card-icon","↗"));card.append(make("h3","",safe(item.title)));
  card.append(make("div","card-meta",safe(item.period)));card.append(make("p","",safe(item.description)));el("projectList").append(card);
});
d.certifications.forEach(item=>{
  const card=make("article","info-card");card.append(make("div","card-icon","✦"));card.append(make("h3","",safe(item.title)));card.append(make("div","card-meta",safe(item.provider)));el("certificationList").append(card);
});
d.skillGroups.forEach(item=>{
  const card=make("article","skill-group");card.append(make("h3","",safe(item.title)));card.append(make("p","",safe(item.items)));el("skillsList").append(card);
});
const contacts=[
  d.email?{label:"Email: "+d.email,url:"mailto:"+d.email}:null,
  d.linkedin?{label:"LinkedIn profile ↗",url:d.linkedin}:null,
  d.github?{label:"GitHub profile ↗",url:d.github}:null
].filter(Boolean);
contacts.forEach(c=>{const a=make("a","",safe(c.label));a.href=c.url;if(c.url.startsWith("http")){a.target="_blank";a.rel="noopener";}el("contactLinks").append(a);});
const toggle=el("menuToggle"), nav=el("mainNav");
toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");toggle.setAttribute("aria-expanded","false");}));
