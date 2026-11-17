const emailRe=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const clean=(v,n)=>typeof v==='string'?v.trim().replace(/[\u0000-\u001f\u007f]/g,' ').slice(0,n+1):'';
export default async function handler(req,res){
  res.setHeader('Cache-Control','no-store');
  res.setHeader('X-Content-Type-Options','nosniff');
  if(req.method!=='POST')return res.status(405).json({error:'Method not allowed.'});
  if(!String(req.headers['content-type']||'').startsWith('application/json'))return res.status(415).json({error:'JSON required.'});
  if(Number(req.headers['content-length']||0)>12000)return res.status(413).json({error:'Request too large.'});
  const body=req.body;
  if(!body||typeof body!=='object'||Array.isArray(body))return res.status(400).json({error:'Invalid request.'});
  if(body.website)return res.status(200).json({ok:true});
  const name=clean(body.name,120),email=clean(body.email,254),company=clean(body.company,120),project=clean(body.project,3000);
  if(name.length<2||name.length>120||!emailRe.test(email)||email.length>254||company.length>120||project.length<10||project.length>3000)return res.status(400).json({error:'Please check your name, email and project details.'});
  const {RESEND_API_KEY,LEADS_TO_EMAIL,LEADS_FROM_EMAIL}=process.env;
  if(!RESEND_API_KEY||!LEADS_TO_EMAIL||!LEADS_FROM_EMAIL)return res.status(503).json({error:'Contact form is being configured. Please email directly.'});
  try{
    const response=await fetch('https://api.resend.com/emails',{method:'POST',headers:{Authorization:'Bearer '+RESEND_API_KEY,'Content-Type':'application/json'},body:JSON.stringify({from:LEADS_FROM_EMAIL,to:[LEADS_TO_EMAIL],reply_to:email,subject:'Masar Tech — Consultation',text:'Name: '+name+'\nEmail: '+email+'\nCompany: '+company+'\nProject:\n'+project}),signal:AbortSignal.timeout(9000)});
    if(!response.ok)return res.status(502).json({error:'Email delivery failed. Please email directly.'});
    return res.status(200).json({ok:true});
  }catch{return res.status(502).json({error:'Email delivery unavailable. Please email directly.'});}
}