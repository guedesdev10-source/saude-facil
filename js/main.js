// Saúde Fácil: interações demonstrativas em JavaScript puro.
// Conteúdo educativo. Não realiza diagnóstico, prescrição, agendamento ou atendimento real.
const categorias = [
  {icone:"✚", titulo:"Serviços do SUS", descricao:"Entenda a função de UBS, UPA e outros serviços."},
  {icone:"▣", titulo:"Vacinação", descricao:"Consulte orientações e calendários oficiais."},
  {icone:"♡", titulo:"Prevenção", descricao:"Informações educativas sobre hábitos de cuidado."},
  {icone:"⌕", titulo:"Encontrar atendimento", descricao:"Teste a busca demonstrativa por tipo de serviço."}
];
const servicesContainer = document.querySelector("#servicos-container");
if (servicesContainer) categorias.forEach((item) => {
  const card=document.createElement("a"); card.className="service-card"; card.href="pages/solucao.html";
  const icon=document.createElement("div"); icon.className="service-icon"; icon.setAttribute("aria-hidden","true"); icon.textContent=item.icone;
  const title=document.createElement("h3"); title.textContent=item.titulo;
  const desc=document.createElement("p"); desc.textContent=item.descricao;
  const action=document.createElement("span"); action.className="service-card-action"; action.textContent="Explorar →";
  card.append(icon,title,desc,action); servicesContainer.appendChild(card);
});
const purposeToggle=document.querySelector("#purpose-toggle"), purposeContent=document.querySelector("#purpose-content");
if(purposeToggle&&purposeContent) purposeToggle.addEventListener("click",()=>{
  const open=purposeToggle.getAttribute("aria-expanded")==="true"; purposeToggle.setAttribute("aria-expanded",String(!open)); purposeContent.hidden=open;
  purposeToggle.querySelector(".toggle-icon").textContent=open?"＋":"−";
  purposeToggle.querySelector(".toggle-label").textContent=open?"Conheça nossa proposta":"Fechar proposta";
});

const orientacoesSaude=[
 {id:"sus",pergunta:"Como funciona o SUS?",icone:"heart",resumo:"O Sistema Único de Saúde (SUS) oferece ações e serviços públicos de saúde, incluindo prevenção, vacinação, consultas, exames e atendimento de urgência.",quem:"O SUS é um sistema público e universal. Todas as pessoas podem buscar atendimento na rede, conforme a organização local dos serviços.",etapas:["Para acompanhamento, vacinação e necessidades de rotina, procure a Unidade Básica de Saúde (UBS) de referência.","Leve documento de identificação e, se tiver, Cartão Nacional de Saúde e registros relevantes.","Em caso de urgência, procure uma UPA ou pronto-socorro. Em emergência com risco à vida, ligue 192 (SAMU)."],link:"https://www.gov.br/saude/pt-br",linkTexto:"Acessar o Ministério da Saúde",nota:"A organização dos fluxos pode variar entre municípios. Em situação urgente, não espere orientação por esta plataforma."},
 {id:"ubs",pergunta:"Para que serve uma UBS?",icone:"hospital",resumo:"A Unidade Básica de Saúde é um serviço de Atenção Primária. É uma referência para acompanhamento contínuo, prevenção, vacinação e cuidados de saúde comuns.",quem:"Moradores da área de abrangência podem procurar a UBS de referência. A equipe local orienta sobre cadastro, acolhimento e horários.",etapas:["Identifique a UBS de referência do seu território pelos canais da Secretaria Municipal de Saúde.","Confirme horários e necessidade de agendamento diretamente com a unidade.","Leve documento de identificação e informações de saúde relevantes, se disponíveis."],link:"https://www.gov.br/saude/pt-br/composicao/saps",linkTexto:"Conhecer a Atenção Primária à Saúde",nota:"Esta orientação é geral. A oferta de serviços e o modo de acesso dependem da rede municipal."},
 {id:"upa",pergunta:"Quando procurar uma UPA?",icone:"alert",resumo:"A Unidade de Pronto Atendimento atende situações de urgência, como quadros agudos que precisam de avaliação sem demora, e funciona como parte da rede de atenção às urgências.",quem:"Pessoas com necessidade de avaliação de urgência podem procurar uma UPA. A equipe realiza acolhimento e classificação de risco.",etapas:["Em situações de urgência, dirija-se a uma UPA ou serviço de pronto atendimento.","Se houver risco imediato à vida ou impossibilidade de deslocamento seguro, ligue 192 (SAMU).", "Para consultas de rotina e acompanhamento, procure preferencialmente a UBS."],link:"https://www.gov.br/saude/pt-br/composicao/saes/samu-192",linkTexto:"Consultar informações sobre urgência e emergência",nota:"Em emergência, ligue 192. Não use esta página para avaliar sintomas ou decidir se uma situação é grave."},
 {id:"samu",pergunta:"Quando ligar para o SAMU 192?",icone:"phone",resumo:"O SAMU 192 atende ocorrências de urgência e emergência que exigem orientação e/ou envio de equipe especializada.",quem:"Qualquer pessoa pode acionar o serviço em uma situação de urgência ou emergência. A central regula o atendimento conforme as informações recebidas.",etapas:["Ligue 192 em situações de emergência, como acidentes graves, perda de consciência ou dificuldade intensa para respirar.","Informe o endereço exato, um ponto de referência e o que aconteceu.","Siga as orientações do atendente e mantenha a linha disponível."],link:"https://www.gov.br/saude/pt-br/composicao/saes/samu-192/samu-192",linkTexto:"Acessar informações oficiais do SAMU 192",nota:"O SAMU é um serviço de emergência. Não é canal para consultas, agendamentos ou informações administrativas."},
 {id:"vacina",pergunta:"Onde encontro informações sobre vacinação?",icone:"vaccine",resumo:"A vacinação é uma das principais estratégias de prevenção de doenças. O calendário e as recomendações variam conforme idade, condições de saúde e histórico vacinal.",quem:"As vacinas disponíveis e as recomendações dependem do calendário vigente e da avaliação da equipe de vacinação.",etapas:["Consulte o Calendário Nacional de Vacinação nos canais oficiais do Ministério da Saúde.","Leve a caderneta de vacinação e um documento de identificação à sala de vacinação.","Converse com a equipe da UBS para conferir doses, intervalos e orientações adequadas ao seu caso."],link:"https://www.gov.br/saude/pt-br/vacinacao",linkTexto:"Consultar o portal de vacinação do Ministério da Saúde",nota:"Não altere seu esquema vacinal com base apenas nesta página. Confirme as recomendações com a equipe de saúde."},
 {id:"prevencao",pergunta:"Como encontrar orientações de prevenção?",icone:"leaf",resumo:"Prevenção inclui vacinação, acompanhamento de saúde, informação confiável e hábitos que favoreçam o bem-estar. As recomendações dependem de cada pessoa e contexto.",quem:"As orientações preventivas podem ser úteis para toda a população. A UBS pode ajudar a identificar ações adequadas a cada fase da vida.",etapas:["Procure informações em canais oficiais de saúde.","Mantenha o acompanhamento de rotina conforme orientação da equipe de saúde.","Converse com profissionais habilitados antes de iniciar, interromper ou modificar tratamentos."],link:"https://www.gov.br/saude/pt-br",linkTexto:"Consultar o portal do Ministério da Saúde",nota:"O conteúdo é educativo e não substitui avaliação individual de um profissional de saúde."},
 {id:"conectesus",pergunta:"Como acessar meus registros de saúde?",icone:"mobile",resumo:"O Meu SUS Digital é o canal digital do Ministério da Saúde que permite consultar informações e serviços de saúde disponíveis para o cidadão.",quem:"Pessoas com conta gov.br podem acessar os recursos digitais disponíveis para seu perfil.",etapas:["Acesse o Meu SUS Digital pelo aplicativo oficial ou pelo portal do Governo Federal.","Entre utilizando sua conta gov.br.","Confira os serviços e registros disponíveis e procure suporte oficial se encontrar divergências."],link:"https://meususdigital.saude.gov.br/",linkTexto:"Acessar o Meu SUS Digital",nota:"A disponibilidade de informações pode variar. Proteja sua senha e não compartilhe códigos de acesso."},
 {id:"ouvidoria",pergunta:"Como registrar uma manifestação sobre o SUS?",icone:"message",resumo:"A Ouvidoria-Geral do SUS recebe manifestações, como solicitações, reclamações, denúncias, sugestões e elogios relacionados aos serviços de saúde.",quem:"Qualquer pessoa pode buscar os canais oficiais de ouvidoria para registrar uma manifestação.",etapas:["Acesse o canal oficial da Ouvidoria do SUS ou ligue 136.","Escolha o tipo de manifestação e descreva os fatos com clareza.","Guarde o protocolo para acompanhar a resposta pelos canais informados."],link:"https://www.gov.br/saude/pt-br/canais-de-atendimento/ouvsus",linkTexto:"Acessar a Ouvidoria do SUS",nota:"Não inclua dados pessoais sensíveis em computadores compartilhados. Em emergência, ligue 192 em vez de registrar manifestação."},
 {id:"cartao",pergunta:"Preciso do Cartão SUS para ser atendido?",icone:"id",resumo:"O Cartão Nacional de Saúde ajuda a identificar usuários e organizar informações no SUS. Se não tiver o cartão em mãos, procure a unidade e peça orientação sobre o atendimento.",quem:"Qualquer pessoa pode buscar atendimento no SUS. A unidade orientará sobre identificação e atualização cadastral conforme o serviço.",etapas:["Se tiver, leve documento de identificação e o Cartão Nacional de Saúde.","Se não tiver o cartão, informe seus dados à equipe e peça orientação.","Para informações digitais disponíveis, consulte o Meu SUS Digital."],link:"https://meususdigital.saude.gov.br/",linkTexto:"Acessar o Meu SUS Digital",nota:"A unidade de saúde orienta sobre cadastro e procedimentos locais. Não deixe de buscar atendimento necessário por não ter o cartão em mãos."},
 {id:"saudemental",pergunta:"Onde buscar apoio em saúde mental?",icone:"support",resumo:"A rede pública de saúde oferece pontos de atenção em saúde mental, incluindo UBS e serviços especializados como os Centros de Atenção Psicossocial (CAPS), conforme a organização local.",quem:"Pessoas que precisam de acolhimento ou acompanhamento podem procurar a UBS de referência para orientação sobre a rede disponível.",etapas:["Procure a UBS para acolhimento e orientação inicial.","A equipe pode avaliar a necessidade de acompanhamento ou encaminhamento para um serviço da rede, como o CAPS.","Em situação de risco imediato à vida, procure emergência ou ligue 192."],link:"https://www.gov.br/saude/pt-br/composicao/saes/desmad/raps",linkTexto:"Conhecer a Rede de Atenção Psicossocial",nota:"Este conteúdo não substitui atendimento profissional. Se houver perigo imediato, busque ajuda de emergência."}
];
const faqGrid=document.querySelector("#faq-grid"), answerPanel=document.querySelector("#orientacao");
const iconSvg={heart:"♡",hospital:"✚",alert:"!",phone:"☎",vaccine:"✚",leaf:"❋",mobile:"▣",message:"☏",id:"▤",support:"♡"};
if(faqGrid&&answerPanel){
 orientacoesSaude.forEach(item=>{const b=document.createElement("button");b.type="button";b.className="faq-card";b.dataset.questionId=item.id;b.innerHTML='<span class="faq-icon" aria-hidden="true"></span><span class="faq-label"></span>';b.querySelector(".faq-icon").textContent=iconSvg[item.icone]||"✚";b.querySelector(".faq-label").textContent=item.pergunta;b.addEventListener("click",()=>mostrarOrientacao(item.id));faqGrid.appendChild(b);});
 function section(title,content){const el=document.createElement("section");el.className="answer-section";const h=document.createElement("h3");h.textContent=title;const p=document.createElement("p");p.textContent=content;el.append(h,p);return el;}
 function mostrarOrientacao(id){const item=orientacoesSaude.find(x=>x.id===id);if(!item)return;document.querySelectorAll(".faq-card").forEach(b=>b.setAttribute("aria-pressed",String(b.dataset.questionId===id)));document.querySelector("#answer-title").textContent=item.pergunta;const content=document.querySelector("#answer-content");content.replaceChildren();const intro=document.createElement("p");intro.className="answer-summary";intro.textContent=item.resumo;content.append(intro,section("Para quem é esta orientação?",item.quem));const steps=document.createElement("section");steps.className="answer-section";const h=document.createElement("h3");h.textContent="Caminhos possíveis";const ol=document.createElement("ol");item.etapas.forEach(t=>{const li=document.createElement("li");li.textContent=t;ol.appendChild(li);});steps.append(h,ol);content.append(steps,section("Atenção",item.nota));const link=document.createElement("a");link.className="answer-official-link";link.href=item.link;link.target="_blank";link.rel="noopener noreferrer";link.textContent=item.linkTexto+" ↗";content.append(link);answerPanel.hidden=false;answerPanel.scrollIntoView({behavior:"smooth",block:"start"});}
 document.querySelector("#close-answer")?.addEventListener("click",()=>{answerPanel.hidden=true;faqGrid.querySelectorAll(".faq-card").forEach(b=>b.setAttribute("aria-pressed","false"));});
}

// Dez registros demonstrativos para testar filtro e renderização de resultados no DOM.
 // O município digitado pelo visitante personaliza a simulação; os locais não são reais.
const unidadesDemo=[
 {nome:"Unidade Básica de Saúde Central",tipo:"UBS",descricao:"Exemplo de atendimento de atenção primária e acompanhamento de rotina."},
 {nome:"Unidade Básica de Saúde Jardim",tipo:"UBS",descricao:"Exemplo de orientação, prevenção e acompanhamento familiar."},
 {nome:"Unidade Básica de Saúde Norte",tipo:"UBS",descricao:"Exemplo de serviço de atenção básica."},
 {nome:"Unidade de Pronto Atendimento Central",tipo:"UPA",descricao:"Exemplo de unidade para situações de urgência."},
 {nome:"Unidade de Pronto Atendimento Norte",tipo:"UPA",descricao:"Exemplo de atendimento de urgência e emergência."},
 {nome:"Sala de Vacinação Central",tipo:"Vacinação",descricao:"Exemplo de ponto de vacinação."},
 {nome:"Sala de Vacinação Jardim",tipo:"Vacinação",descricao:"Exemplo de serviço de imunização."},
 {nome:"Centro de Saúde Bucal",tipo:"Odontologia",descricao:"Exemplo de atendimento odontológico público."},
 {nome:"Unidade Odontológica Comunitária",tipo:"Odontologia",descricao:"Exemplo de orientação e cuidado em saúde bucal."},
 {nome:"Polo de Promoção da Saúde",tipo:"Prevenção",descricao:"Exemplo de ações educativas e preventivas."}
];
const searchForm=document.querySelector("#health-search-form");
if(searchForm){
 searchForm.addEventListener("submit",e=>{
  e.preventDefault();
  const city=document.querySelector("#health-city").value.trim();
  const type=document.querySelector("#health-type").value;
  const feedback=document.querySelector("#search-feedback");
  const results=document.querySelector("#health-results");
  results.replaceChildren();
  if(city.length<2){
   feedback.textContent="Digite o nome de um município com pelo menos 2 caracteres.";
   return;
  }
  const matches=unidadesDemo.filter(unit=>type==="todos"||unit.tipo===type);
  feedback.textContent=`${matches.length} resultado(s) demonstrativo(s) para ${city}. Os locais exibidos são fictícios.`;
  matches.forEach(unit=>{
   const card=document.createElement("article");
   card.className="health-result-card";
   const tag=document.createElement("span");
   tag.className="health-tag";
   tag.textContent=unit.tipo;
   const heading=document.createElement("h3");
   heading.textContent=unit.nome;
   const description=document.createElement("p");
   description.textContent=unit.descricao;
   const location=document.createElement("small");
   location.textContent=`Município informado: ${city} · REGISTRO FICTÍCIO`;
   card.append(tag,heading,description,location);
   results.appendChild(card);
  });
 });
}

// Formulário local: validação de campos sem envio nem armazenamento de dados pessoais.
const contactToggle=document.querySelector("#contact-toggle"),contactPanel=document.querySelector("#contact-form-panel"),contactForm=document.querySelector("#contact-form");
if(contactToggle&&contactPanel&&contactForm){contactToggle.addEventListener("click",()=>{const open=contactToggle.getAttribute("aria-expanded")==="true";contactToggle.setAttribute("aria-expanded",String(!open));contactPanel.hidden=open;contactToggle.querySelector("span").textContent=open?"＋":"−";});const rules={"contact-name":v=>v.trim().length>=3?"":"Informe pelo menos 3 caracteres.","contact-email":v=>/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim())?"":"Informe um e-mail válido.","contact-subject":v=>v?"":"Selecione um assunto.","contact-message":v=>v.trim().length>=10?"":"Escreva pelo menos 10 caracteres."};const errors={"contact-name":"name-error","contact-email":"email-error","contact-subject":"subject-error","contact-message":"message-error"};const validate=(id)=>{const field=document.getElementById(id),msg=rules[id](field.value),error=document.getElementById(errors[id]);error.textContent=msg;field.setAttribute("aria-invalid",String(Boolean(msg)));return !msg;};Object.keys(rules).forEach(id=>{const f=document.getElementById(id);f.addEventListener("blur",()=>validate(id));f.addEventListener("input",()=>{if(f.getAttribute("aria-invalid")==="true")validate(id);});});contactForm.addEventListener("submit",e=>{e.preventDefault();const valid=Object.keys(rules).map(validate).every(Boolean),feedback=document.querySelector("#form-feedback");feedback.textContent=valid?"Validação concluída! Esta demonstração não envia nem armazena sua mensagem.":"Revise os campos destacados antes de continuar.";feedback.classList.toggle("is-success",valid);if(valid)contactForm.reset();});}

// Preferências de acessibilidade: fonte e alto contraste.
const root=document.documentElement;let fontScale=1;
document.querySelectorAll("[data-font]").forEach(button=>button.addEventListener("click",()=>{const action=button.dataset.font;fontScale=action==="reset"?1:Math.min(1.25,Math.max(.9,fontScale+(action==="up"?.1:-.1)));root.style.fontSize=`${fontScale*100}%`;}));
const contrastButton=document.querySelector("#theme-toggle");if(contrastButton)contrastButton.addEventListener("click",()=>{const active=document.body.classList.toggle("high-contrast");contrastButton.setAttribute("aria-pressed",String(active));contrastButton.setAttribute("aria-label",active?"Desativar alto contraste":"Ativar modo de alto contraste");});
