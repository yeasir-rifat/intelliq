/* IntelliQ application script — blocks merged in original execution order */

/* ===== block ===== */
const Utils=(()=>{function e(e){return e<10?`0${e}`:`${e}`}const t=["০","১","২","৩","৪","৫","৬","৭","৮","৯"];function n(e){return(e<10?`0${e}`:`${e}`).split("").map(e=>t[parseInt(e,10)]).join("")}const i=["A","B","C","D","E","F","G","H"],o=["ক","খ","গ","ঘ","ঙ","চ","ছ","জ"];function a(e){const t=document.createElement("div");return t.innerHTML=e||"",(t.textContent||t.innerText||"").trim()}const s=/[\u0980-\u09FF]/;function r(e){return s.test(e||"")}function l(e,t){if(!e)return;const n=t?e.textContent:e.value;e.classList.toggle("has-bn-text",r(n))}return{uid:function(e="id"){return`${e}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,8)}`},toEnglishNumber:e,toBanglaNumber:n,formatQuestionNumber:function(t,i){const o=t+1;return"bn"===i?n(o):e(o)},optionLabel:function(e,t){return("bn"===t?o:i)[e]||String(e+1)},debounce:function(e,t=150){let n=null;return function(...i){clearTimeout(n),n=setTimeout(()=>e.apply(this,i),t)}},sanitizeHtml:function(e){if(window.DOMPurify)return DOMPurify.sanitize(e,{ALLOWED_TAGS:["b","strong","i","em","u","sup","sub","span","br","ul","ol","li","font","div","img"],ALLOWED_ATTR:["style","class","src","alt"]});const t=(new DOMParser).parseFromString("<body>"+e,"text/html").body,A=new Set(["B","STRONG","I","EM","U","SUP","SUB","SPAN","BR","UL","OL","LI","FONT","DIV","IMG"]);(function w(n){[...n.children].forEach(c=>{if(!A.has(c.tagName)){c.replaceWith(document.createTextNode(["SCRIPT","STYLE"].includes(c.tagName)?"":c.textContent));return}[...c.attributes].forEach(a=>{const k=a.name.toLowerCase();if(!["style","class","src","alt"].includes(k))c.removeAttribute(a.name);else if("src"===k&&!/^(data:image\/(png|jpe?g|gif|webp);base64,|https?:)/i.test(a.value.trim()))c.removeAttribute(a.name);else if("style"===k&&/url\s*\(|expression|javascript:/i.test(a.value))c.removeAttribute(a.name)});w(c)})})(t);return t.innerHTML},stripHtml:a,shuffle:function(e){const t=e.slice();for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t},clamp:function(e,t,n){return Math.max(t,Math.min(n,e))},normalizeHex:function(e){if(!e)return null;let t=e.trim();return t.startsWith("#")||(t=`#${t}`),/^#([0-9A-Fa-f]{3})$/.test(t)&&(t="#"+t.slice(1).split("").map(e=>e+e).join("")),/^#([0-9A-Fa-f]{6})$/.test(t)?t.toUpperCase():null},clone:function(e){return JSON.parse(JSON.stringify(e))},isQuestionEmpty:function(e){return window.QTypes?QTypes.isEmpty(e):""===a(e.question.html)&&e.options.every(e=>""===a(e.html))},hasBengali:r,applyAutoFont:l,bindAutoFont:function(e){if(!e||e.dataset.autoFontBound)return;e.dataset.autoFontBound="1";const t=!0===e.isContentEditable;l(e,t),e.addEventListener("input",()=>l(e,t))}}})(),I18n=(()=>{const e={en:{"app.tagline":"Made in Rifatplex","tabs.input":"Input","tabs.preview":"Preview","topbar.aiMode":"AI Mode","field.examTitle":"Examination Title","field.folder":"Folder / Group","field.ungrouped":"Ungrouped","field.subtitle":"Subtitle / Institution","field.marks":"Marks","field.time":"Time","field.note":"Note / Instructions","questions.heading":"Add Questions","download.questionsOnly":"Question Paper Only","download.questionsOnlySub":"No answers included","download.answersOnly":"Answer Key Only","download.answersOnlySub":"Just the answers","download.answerKeyLabel":"Answer key","download.questionPaperLabel":"Question paper","preview.question":"Preview Question","preview.questionSub":"No answers included","preview.answer":"Preview Answer","preview.answerSub":"Correct answers & explanations","settings.title":"Settings","settings.theme":"Theme","settings.light":"Light","settings.dark":"Dark","settings.pageSize":"Page Size","settings.pageColor":"Page Color","settings.fontFamily":"Font Family","settings.fontSize":"Font Size","settings.showMarks":"Show marks in [ ] on the right of each question","settings.setCode":"Set Code","settings.numSets":"Number of Sets","settings.setCodeNames":"Set Code Names","settings.randomization":"Randomization","settings.randomNone":"No Randomization","settings.randomQuestions":"Randomize Questions","settings.randomOptions":"Randomize Options","settings.randomBoth":"Randomize Questions + Options","settings.generateSets":"Generate Sets","settings.needQuestionForSets":"Add at least one question before generating sets.","settings.geminiKey":"Gemini API Key","settings.geminiKeyHint":"Add your API from","settings.model":"Model","settings.modelRecommended":"Gemini 3 Flash (Recommended)","settings.modelFastest":"Gemini 3.1 Flash-Lite (Fastest)","settings.onGenerate":"On Generate","settings.appendQuestions":"Append to existing questions","settings.replaceQuestions":"Replace all questions","common.reset":"Reset","common.save":"Save","common.cancel":"Cancel","common.ok":"OK","comingSoon.googleTitle":"Google Sign-in","comingSoon.googleMessage":"Sign in with Google to sync your data across devices — coming soon!","googleAuth.brand":"Google","googleAuth.title":"Sign in to sync your work","googleAuth.subtitle":"Save question papers to your account and access them on any device.","googleAuth.continue":"Continue with Google","googleAuth.comingSoon":"Coming soon — this feature isn't available yet.","comingSoon.historyTitle":"History","comingSoon.historyMessage":"View a preview of your previously generated question papers and answer keys here — coming soon!","ai.title":"Generate Questions","ai.noFileSelected":"No file selected","ai.capture":"Capture","ai.upload":"Upload","ai.fileHint":"JPG, PNG, PDF, DOCX, PPTX","ai.addMore":"Add more","ai.customPrompt":"Topic mode","ai.customPromptHint":"Topic mode","ai.instructionLabel":"Instructions","ai.instructionLabelTopic":"Topic / Instructions","ai.generateMcqs":"Generate","ai.promptPlaceholderFile":"Add instructions…","ai.promptPlaceholderTopic":'e.g. Photosynthesis, Class 9 biology…',"toast.questionDuplicated":"Question duplicated","toast.questionCleared":"Question cleared","toast.questionDeleted":"Question deleted","toast.documentReset":"Document reset to defaults","toast.savedSuccess":"Saved successfully","toast.restoredProject":"Restored your saved project","toast.pdfError":"Unable to generate PDF. Please try again.","toast.autosaveUnavailable":"Automatic saving is unavailable in this browser.","toast.saveUnavailable":"Unable to save your project.","toast.zipGenerated":"ZIP (all sets) generated successfully","toast.pdfGenerated":"PDF generated successfully","ai.uploading":"Uploading…","ai.fileSelectedSingular":"file selected","ai.fileSelectedPlural":"files selected","ai.pptxExtracted":"PowerPoint · text extracted","ai.docxExtracted":"Word · text extracted","ai.imageLabel":"Image","ai.uploadingPct":"Uploading to Gemini…","ai.analyzingMultiple":"Analyzing {n} files and generating questions…","ai.analyzingSingle":"Analyzing the file and generating questions…","ai.researchingTopic":"Researching the topic and generating questions…","ai.modelUnavailableFull":'"{requested}" is unavailable — used "{used}" instead',"question.countSingular":"question","question.countPlural":"questions","set.countSingular":"set generated","set.countPlural":"sets generated","mcq.countSingular":"MCQ generated","mcq.countPlural":"MCQs generated","history.title":"History","history.emptyTitle":"No history yet","history.emptySub":"Question papers and answer keys you generate will show up here.","history.otherSubject":"Other","history.download":"Download","history.downloadQuestion":"Download Question","history.downloadAnswer":"Download Answer","history.edit":"Edit","history.delete":"Delete","history.deleteConfirm":"Delete this question paper? This cannot be undone.","history.itemsSingular":"question","history.itemsPlural":"questions","history.entrySingular":"paper","history.entryPlural":"papers","history.untitled":"Untitled question paper","history.loadedToast":"Loaded into the editor","history.ungroupedSection":"Ungrouped","history.foldersSection":"Folders","folder.newFolder":"New folder","folder.newFolderPlaceholder":"Folder name","folder.create":"Create","folder.ungroup":"Ungrouped","folder.createdToast":"Folder created","folder.renamedToast":"Folder renamed"},bn:{"app.tagline":"Made in Rifatplex","tabs.input":"ইনপুট","tabs.preview":"প্রিভিউ","topbar.aiMode":"এআই মোড","field.examTitle":"পরীক্ষার শিরোনাম","field.folder":"ফোল্ডার / গ্রুপ","field.ungrouped":"আনগ্রুপড","field.subtitle":"সাব-টাইটেল / প্রতিষ্ঠান","field.marks":"নম্বর","field.time":"সময়","field.note":"নোট / নির্দেশনা","questions.heading":"প্রশ্ন যোগ করুন","download.questionsOnly":"শুধু প্রশ্নপত্র","download.questionsOnlySub":"উত্তর ছাড়া","download.answersOnly":"শুধু উত্তরপত্র","download.answersOnlySub":"শুধুমাত্র উত্তর","download.answerKeyLabel":"উত্তরপত্র","download.questionPaperLabel":"প্রশ্নপত্র","preview.question":"প্রশ্নপত্র প্রিভিউ","preview.questionSub":"উত্তর ছাড়া","preview.answer":"উত্তরপত্র প্রিভিউ","preview.answerSub":"সঠিক উত্তর ও ব্যাখ্যাসহ","settings.title":"সেটিংস","settings.theme":"থিম","settings.light":"লাইট","settings.dark":"ডার্ক","settings.pageSize":"পেজ সাইজ","settings.pageColor":"পেজের রঙ","settings.fontFamily":"ফন্ট ফ্যামিলি","settings.fontSize":"ফন্ট সাইজ","settings.showMarks":"প্রশ্নের ডানে নম্বর নির্দেশক রাখতে চান","settings.setCode":"সেট কোড","settings.numSets":"সেটের সংখ্যা","settings.setCodeNames":"সেট কোড নাম","settings.randomization":"র‍্যান্ডমাইজেশন","settings.randomNone":"র‍্যান্ডমাইজেশন নেই","settings.randomQuestions":"প্রশ্ন র‍্যান্ডমাইজ করুন","settings.randomOptions":"অপশন র‍্যান্ডমাইজ করুন","settings.randomBoth":"প্রশ্ন + অপশন র‍্যান্ডমাইজ করুন","settings.generateSets":"সেট তৈরি করুন","settings.needQuestionForSets":"সেট তৈরি করার আগে অন্তত একটি প্রশ্ন যোগ করুন।","settings.geminiKey":"জেমিনি এপিআই কী","settings.geminiKeyHint":"আপনার এপিআই সংগ্রহ করুন","settings.model":"মডেল","settings.modelRecommended":"জেমিনি ৩ ফ্ল্যাশ (প্রস্তাবিত)","settings.modelFastest":"জেমিনি ৩.১ ফ্ল্যাশ-লাইট (দ্রুততম)","settings.onGenerate":"জেনারেট করার সময়","settings.appendQuestions":"বিদ্যমান প্রশ্নের সাথে যোগ করুন","settings.replaceQuestions":"সব প্রশ্ন প্রতিস্থাপন করুন","common.reset":"রিসেট","common.save":"সেভ করুন","common.cancel":"বাতিল","common.ok":"ঠিক আছে","comingSoon.googleTitle":"গুগল সাইন-ইন","comingSoon.googleMessage":"আপনার ডেটা বিভিন্ন ডিভাইসে সিঙ্ক রাখতে গুগল দিয়ে সাইন-ইন করুন — শীঘ্রই আসছে!","googleAuth.brand":"গুগল","googleAuth.title":"আপনার কাজ সিঙ্ক করতে সাইন ইন করুন","googleAuth.subtitle":"আপনার একাউন্টে প্রশ্নপত্র সংরক্ষণ করুন এবং যেকোনো ডিভাইস থেকে অ্যাক্সেস করুন।","googleAuth.continue":"গুগল দিয়ে চালিয়ে যান","googleAuth.comingSoon":"শীঘ্রই আসছে — এই ফিচারটি এখনও উপলব্ধ নয়।","comingSoon.historyTitle":"হিস্টোরি","comingSoon.historyMessage":"আপনার আগে তৈরি করা প্রশ্নপত্র ও উত্তরপত্রের প্রিভিউ এখানে দেখা যাবে — শীঘ্রই আসছে!","ai.title":"এআই প্রশ্ন তৈরি","ai.noFileSelected":"কোনো ফাইল নির্বাচিত হয়নি","ai.capture":"ক্যাপচার","ai.upload":"আপলোড","ai.fileHint":"JPG, PNG, PDF, DOCX, PPTX","ai.addMore":"আরও যোগ করুন","ai.customPrompt":"টপিক মোড","ai.customPromptHint":"টপিক মোড","ai.instructionLabel":"নির্দেশনা","ai.instructionLabelTopic":"টপিক / নির্দেশনা","ai.generateMcqs":"তৈরি করুন","ai.promptPlaceholderFile":"নির্দেশনা লিখুন…","ai.promptPlaceholderTopic":'যেমন: সালোকসংশ্লেষণ, নবম শ্রেণি…',"toast.questionDuplicated":"প্রশ্ন কপি করা হয়েছে","toast.questionCleared":"প্রশ্ন মুছে ফেলা হয়েছে","toast.questionDeleted":"প্রশ্ন ডিলিট করা হয়েছে","toast.documentReset":"ডকুমেন্ট ডিফল্টে রিসেট হয়েছে","toast.savedSuccess":"সফলভাবে সেভ হয়েছে","toast.restoredProject":"আপনার সংরক্ষিত প্রজেক্ট ফিরিয়ে আনা হয়েছে","toast.pdfError":"পিডিএফ তৈরি করা যায়নি। আবার চেষ্টা করুন।","toast.autosaveUnavailable":"এই ব্রাউজারে স্বয়ংক্রিয় সেভ উপলব্ধ নেই।","toast.saveUnavailable":"আপনার প্রজেক্ট সেভ করা যায়নি।","toast.zipGenerated":"জিপ (সব সেট) সফলভাবে তৈরি হয়েছে","toast.pdfGenerated":"পিডিএফ সফলভাবে তৈরি হয়েছে","ai.uploading":"আপলোড হচ্ছে…","ai.fileSelectedSingular":"টি ফাইল নির্বাচিত","ai.fileSelectedPlural":"টি ফাইল নির্বাচিত","ai.pptxExtracted":"পাওয়ারপয়েন্ট · টেক্সট এক্সট্র্যাক্ট হয়েছে","ai.docxExtracted":"ওয়ার্ড · টেক্সট এক্সট্র্যাক্ট হয়েছে","ai.imageLabel":"ছবি","ai.uploadingPct":"জেমিনিতে আপলোড হচ্ছে…","ai.analyzingMultiple":"{n}টি ফাইল বিশ্লেষণ করে প্রশ্ন তৈরি হচ্ছে…","ai.analyzingSingle":"ফাইল বিশ্লেষণ করে প্রশ্ন তৈরি হচ্ছে…","ai.researchingTopic":"টপিক নিয়ে গবেষণা করে প্রশ্ন তৈরি হচ্ছে…","ai.modelUnavailableFull":'"{requested}" উপলব্ধ নেই — পরিবর্তে "{used}" ব্যবহার করা হয়েছে',"question.countSingular":"টি প্রশ্ন","question.countPlural":"টি প্রশ্ন","set.countSingular":"টি সেট তৈরি হয়েছে","set.countPlural":"টি সেট তৈরি হয়েছে","mcq.countSingular":"টি এমসিকিউ তৈরি হয়েছে","mcq.countPlural":"টি এমসিকিউ তৈরি হয়েছে","history.title":"হিস্টোরি","history.emptyTitle":"এখনো কোনো হিস্টোরি নেই","history.emptySub":"আপনার তৈরি করা প্রশ্নপত্র ও উত্তরপত্র এখানে দেখা যাবে।","history.otherSubject":"অন্যান্য","history.download":"ডাউনলোড","history.downloadQuestion":"প্রশ্নপত্র ডাউনলোড","history.downloadAnswer":"উত্তরপত্র ডাউনলোড","history.edit":"এডিট","history.delete":"ডিলিট","history.deleteConfirm":"এই প্রশ্নপত্রটি ডিলিট করবেন? এটি আর ফিরিয়ে আনা যাবে না।","history.itemsSingular":"টি প্রশ্ন","history.itemsPlural":"টি প্রশ্ন","history.entrySingular":"টি পেপার","history.entryPlural":"টি পেপার","history.untitled":"শিরোনামহীন প্রশ্নপত্র","history.loadedToast":"এডিটরে লোড করা হয়েছে","history.ungroupedSection":"আনগ্রুপড","history.foldersSection":"ফোল্ডারসমূহ","folder.newFolder":"নতুন ফোল্ডার","folder.newFolderPlaceholder":"ফোল্ডারের নাম","folder.create":"তৈরি করুন","folder.ungroup":"আনগ্রুপড","folder.createdToast":"ফোল্ডার তৈরি হয়েছে","folder.renamedToast":"ফোল্ডারের নাম পরিবর্তন হয়েছে"}};let t="en";function n(n,i){let o=(e[t]||e.en)[n]||e.en[n]||n;return i&&Object.keys(i).forEach(e=>{o=o.replace(`{${e}}`,i[e])}),o}function i(){document.querySelectorAll("[data-i18n]").forEach(e=>{e.closest("#previewContainer")||(e.textContent=n(e.dataset.i18n))}),document.body.setAttribute("data-ui-lang",t)}function o(e){"en"!==e&&"bn"!==e||(t=e,i())}return{t:n,get:function(){return t},setLanguage:o,applyToDom:i,init:function(e){o("bn"===e?"bn":"en")}}})(),State=(()=>{function e(){return{id:Utils.uid("q"),question:{html:""},optionsLayout:"vertical",explanationHtml:"",options:[{id:"a",html:"",correct:!1},{id:"b",html:"",correct:!1},{id:"c",html:"",correct:!1},{id:"d",html:"",correct:!1}]}}function t(){return{language:"en",document:{title:"",subtitle:"",marks:"",time:"",note:""},folderId:null,questions:[e()],settings:{theme:"light",pageSize:"A4",pageColor:"#FFFFFF",fontFamily:"Times New Roman",fontSize:10,fontColor:"#111111",zoom:100,fitZoom:100},setCode:{enabled:!1,numberOfSets:1,codeNames:"A, B, C, D, E, F, G, H, I, J",randomization:"both"},generatedSets:[],activeSetIndex:-1}}let n=t();function i(e){const t=e.options.map(e=>Utils.stripHtml(e.html||"")).map(e=>e.length),n=Math.max(0,...t),i=t.reduce((e,t)=>e+t,0);return i>0?n<=6&&i<=20?"horizontal":n<=18&&i<=56?"grid":"vertical":"vertical"}return{get:function(){return n},replaceAll:function(e){n=e},resetToDefault:function(){n=t()},defaultState:t,setLanguage:function(e){n.language=e},setDocField:function(e,t){n.document[e]=t},setSetting:function(e,t){n.settings[e]=t},setSetCodeField:function(e,t){n.setCode[e]=t},addQuestion:function(){return n.questions.push(e()),n.questions.length-1},deleteQuestion:function(t){const i=n.questions.findIndex(e=>e.id===t);-1!==i&&(n.questions.splice(i,1),0===n.questions.length&&n.questions.push(e()))},duplicateQuestion:function(e){const t=n.questions.findIndex(t=>t.id===e);if(-1===t)return;const i=Utils.clone(n.questions[t]);i.id=Utils.uid("q"),n.questions.splice(t+1,0,i)},moveQuestion:function(e,t){const i=n.questions.findIndex(t=>t.id===e);if(-1===i)return;const o=i+t;if(o<0||o>=n.questions.length)return;const[a]=n.questions.splice(i,1);n.questions.splice(o,0,a)},updateQuestionHtml:function(e,t){const i=n.questions.find(t=>t.id===e);i&&(i.question.html=t)},updateOptionHtml:function(e,t,o){const a=n.questions.find(t=>t.id===e);if(!a)return;const s=a.options.find(e=>e.id===t);s&&(s.html=o),a.layoutLocked||(a.optionsLayout=i(a))},setQuestionLayout:function(e,t){const i=n.questions.find(t=>t.id===e);i&&(i.optionsLayout=t,i.layoutLocked=!0)},freshQuestion:e,toggleOptionCorrect:function(e,t){const i=n.questions.find(t=>t.id===e);if(!i)return!1;const o=i.options.find(e=>e.id===t);if(!o)return!1;o.correct=!o.correct;const a=i.options.some(e=>e.correct);return a||(i.explanationHtml=""),a},updateQuestionExplanation:function(e,t){const i=n.questions.find(t=>t.id===e);i&&(i.explanationHtml=t)},computeAutoLayout:i,ensureTrailingEmpty:function(){const t=n.questions;return!(0!==t.length&&Utils.isQuestionEmpty(t[t.length-1])||(t.push(e()),0))}}})(),Editor=(()=>{let e=null,t=null;const n=["²","³","⁴","½","⅓","¼","√","∛","∑","∫","∞","≈","≠","≤","≥","±","×","÷","α","β","γ","δ","θ","π","λ","μ","Ω","Δ","∂","∇","→","⇌","°","‰","·","…","⅔","⅕","⅖","⅗","⅘","⅙","⅚","⅛","⅜","⅝","⅞","∝"];function i(){const e=State.get().questions.filter(e=>!Utils.isQuestionEmpty(e)).length,t=document.getElementById("questionCount");t.textContent=`${e} ${I18n.t(1===e?"question.countSingular":"question.countPlural")}`,"bn"===I18n.get()?t.setAttribute("data-i18n-font",""):t.removeAttribute("data-i18n-font")}function o(e){const t=State.get(),n=t.questions.findIndex(t=>t.id===e);if(-1===n||n!==t.questions.length-1)return;if(!State.ensureTrailingEmpty())return;const o=t.questions[t.questions.length-1];document.getElementById("questionsList").appendChild(a(o,t.questions.length-1,t.language)),i(),window.lucide&&lucide.createIcons()}function a(e,t,i){const c=__a(e,t,i);return window.QTypes?QTypes.decorateCard(c,e,t,i):c}function __a(e,t,i){const a=document.createElement("div");a.className="question-card",a.dataset.id=e.id;const r=Utils.formatQuestionNumber(t,i),d=e.optionsLayout||"vertical",c="bn"===i?"প্রশ্ন":"MCQ",u=document.createElement("div");u.className="question-card__head";const m=document.createElement("span");m.className="question-card__number",m.textContent=`${c} ${r}`,"bn"===i&&m.setAttribute("data-i18n-font",""),u.appendChild(m);const p=document.createElement("div");p.className="question-card__controls";const g=document.createElement("div");g.className="inline-toolbar",g.dataset.qid=e.id,g.setAttribute("role","toolbar"),[{cmd:"bold",icon:"bold",label:"Bold"},{cmd:"italic",icon:"italic",label:"Italic"},{cmd:"underline",icon:"underline",label:"Underline"},{sep:!0},{cmd:"superscript",label:"x²",text:"x²"},{cmd:"subscript",label:"x₂",text:"x₂"},{sep:!0},{cmd:"insertUnorderedList",icon:"list",label:"Bullet list"},{cmd:"insertOrderedList",icon:"list-ordered",label:"Numbered list"},{sep:!0}].forEach(e=>{if(e.sep){const e=document.createElement("span");return e.className="rt-sep",void g.appendChild(e)}const t=document.createElement("button");if(t.type="button",t.className="rt-btn",t.dataset.cmd=e.cmd,t.setAttribute("aria-label",e.label),t.title=e.label,e.icon){const n=document.createElement("i");n.setAttribute("data-lucide",e.icon),t.appendChild(n)}else e.text&&(t.textContent=e.text);g.appendChild(t)});const f=document.createElement("div");f.className="rt-dropdown";const h=document.createElement("button");h.type="button",h.className="rt-btn",h.setAttribute("aria-label","Insert math symbol"),h.title="Math & symbols";const b=document.createElement("i");b.setAttribute("data-lucide","sigma"),h.appendChild(b),f.appendChild(h);const y=document.createElement("div");y.className="rt-dropdown__panel",y.hidden=!0,n.forEach(e=>{const t=document.createElement("button");t.type="button",t.className="rt-math-symbol",t.dataset.symbol=e,t.textContent=e,y.appendChild(t)}),f.appendChild(y),g.appendChild(f);const v=document.createElement("span");v.className="rt-sep",g.appendChild(v);const S=document.createElement("label");S.className="rt-color",S.title="Text color";const E=document.createElement("i");E.setAttribute("data-lucide","palette"),S.appendChild(E);const w=document.createElement("input");w.type="color",w.dataset.cmd="foreColor",w.value="#111111",w.setAttribute("aria-label","Text color"),S.appendChild(w),g.appendChild(S);const x=document.createElement("span");x.className="rt-sep",g.appendChild(x);const I=document.createElement("button");I.type="button",I.className="rt-btn",I.dataset.cmd="removeFormat",I.setAttribute("aria-label","Clear formatting"),I.title="Clear formatting";const C=document.createElement("i");C.setAttribute("data-lucide","eraser"),I.appendChild(C),g.appendChild(I);const q=document.createElement("span");q.className="rt-sep",g.appendChild(q);const A=document.createElement("button");A.type="button",A.className="rt-close",A.setAttribute("aria-label","Close formatting tools"),A.title="Close toolbar",A.textContent="×",g.appendChild(A),p.appendChild(g);const L=document.createElement("button");L.type="button",L.className="format-toggle-btn",L.setAttribute("aria-label","Toggle formatting tools"),L.title="Formatting tools";const P=document.createElement("i");P.setAttribute("data-lucide","pencil"),L.appendChild(P),p.appendChild(L);const $=document.createElement("div");$.className="layout-picker",$.setAttribute("role","group"),[{value:"vertical",icon:"rows-3",label:"Vertical"},{value:"horizontal",icon:"columns-3",label:"Horizontal"},{value:"grid",icon:"grid-2x2",label:"Rectangular"}].forEach(e=>{const t=document.createElement("button");t.type="button",t.className="qc-btn layout-btn"+(d===e.value?" is-active":""),t.dataset.layout=e.value,t.setAttribute("aria-label",e.label),t.title=e.label;const n=document.createElement("i");n.setAttribute("data-lucide",e.icon),t.appendChild(n),$.appendChild(t)}),p.appendChild($);const M=document.createElement("span");M.className="qc-divider",M.setAttribute("aria-hidden","true"),p.appendChild(M);const F=document.createElement("button");F.type="button",F.className="qc-btn",F.dataset.action="move-up",F.setAttribute("aria-label","Move question up"),F.title="Move up";const k=document.createElement("i");k.setAttribute("data-lucide","chevron-up"),F.appendChild(k),p.appendChild(F);const _=document.createElement("button");_.type="button",_.className="qc-btn",_.dataset.action="move-down",_.setAttribute("aria-label","Move question down"),_.title="Move down";const B=document.createElement("i");B.setAttribute("data-lucide","chevron-down"),_.appendChild(B),p.appendChild(_);const N=document.createElement("button");N.type="button",N.className="qc-btn",N.dataset.action="duplicate",N.setAttribute("aria-label","Duplicate question"),N.title="Duplicate";const T=document.createElement("i");T.setAttribute("data-lucide","copy"),N.appendChild(T),p.appendChild(N);const O=document.createElement("button");O.type="button",O.className="qc-btn qc-btn--danger",O.dataset.action="delete",O.setAttribute("aria-label","Delete question"),O.title="Delete";const H=document.createElement("i");H.setAttribute("data-lucide","trash-2"),O.appendChild(H),p.appendChild(O),u.appendChild(p),a.appendChild(u);const z=document.createElement("div");z.className="question-card__body";const U=document.createElement("div");U.className="editor-area question-editor",U.contentEditable="true",U.dataset.role="question",U.dataset.placeholder="bn"===i?"প্রশ্ন লিখুন...":"Type your question...",U.setAttribute("aria-label","Question text"),s(U,e.question.html),z.appendChild(U);const R=document.createElement("div");R.className="options-list";const D=e.options.some(e=>e.correct);e.options.forEach((t,n)=>{R.appendChild(function(e,t,n,i,a){const r=document.createElement("div");r.className="option-row"+(t.correct?" is-correct-row":"");const d=document.createElement("button");d.type="button",d.className="option-row__label option-row__label--pickable"+(t.correct?" is-correct":""),d.textContent=Utils.optionLabel(n,i),"bn"===i&&d.setAttribute("data-i18n-font",""),d.title="bn"===i?"সঠিক উত্তর হিসেবে চিহ্নিত করুন":"Mark as correct answer",d.setAttribute("aria-pressed",t.correct?"true":"false"),d.setAttribute("aria-label",`${"bn"===i?"সঠিক উত্তর নির্বাচন করুন":"Mark correct answer"}: ${Utils.optionLabel(n,i)}`),r.appendChild(d);const c=document.createElement("div");return c.className="editor-area",c.contentEditable="true",c.dataset.role="option",c.dataset.optionId=t.id,c.dataset.placeholder="bn"===i?"অপশন লিখুন...":"Option text...",c.setAttribute("aria-label",`Option ${Utils.optionLabel(n,i)}`),s(c,t.html),r.appendChild(c),l(c,n=>{State.updateOptionHtml(e,t.id,n),function(e){const t=State.get().questions.find(t=>t.id===e);if(!t)return;const n=document.querySelector(`.question-card[data-id="${e}"]`);n&&n.querySelectorAll(".layout-btn").forEach(e=>{e.classList.toggle("is-active",e.dataset.layout===(t.optionsLayout||"vertical"))})}(e),o(e),Preview.update()}),d.addEventListener("click",()=>{const n=State.toggleOptionCorrect(e,t.id),i=d.classList.toggle("is-correct");d.setAttribute("aria-pressed",i?"true":"false"),r.classList.toggle("is-correct-row",i),a&&a(n),Preview.update()}),r}(e.id,t,n,i,e=>{G.hidden=!e,e?setTimeout(()=>j.focus(),0):s(j,"")}))}),z.appendChild(R);const G=document.createElement("div");G.className="option-explanation",G.hidden=!D;const Q=document.createElement("span");Q.className="option-explanation__label",Q.textContent="bn"===i?"ব্যাখ্যা..":"Explanation..","bn"===i&&Q.setAttribute("data-i18n-font",""),G.appendChild(Q);const j=document.createElement("div");function K(){const e=g.getBoundingClientRect(),t=h.getBoundingClientRect();y.style.left="0px",y.style.top="0px",y.style.bottom="auto",y.style.transform="none";const n=Math.min(y.offsetWidth||190,window.innerWidth-16),i=y.offsetHeight||180,o=e.top,a=window.innerHeight-e.bottom;let s;if(y.classList.remove("is-below"),o>=i+8||o>=a)s=e.top-i-8,s<8&&(s=8);else{s=e.bottom+8,y.classList.add("is-below");const t=window.innerHeight-i-8;s>t&&(s=Math.max(8,t))}let r=t.left+t.width/2-n/2;r=Math.max(8,Math.min(r,window.innerWidth-n-8));const l=window.innerHeight-16;y.style.maxHeight=i>l?`${l}px`:"",y.style.left=`${r}px`,y.style.top=`${s}px`}return j.className="editor-area option-explanation__editor",j.contentEditable="true",j.dataset.role="explanation",j.dataset.placeholder="bn"===i?"সঠিক উত্তরের ব্যাখ্যা লিখুন...":"Explain why this answer is correct...",j.setAttribute("aria-label","bn"===i?"ব্যাখ্যা":"Explanation"),s(j,e.explanationHtml),G.appendChild(j),l(j,t=>{State.updateQuestionExplanation(e.id,t),Preview.update()}),z.appendChild(G),a.appendChild(z),l(U,t=>{State.updateQuestionHtml(e.id,t),o(e.id),Preview.update()}),$.querySelectorAll(".layout-btn").forEach(t=>{t.addEventListener("click",()=>{State.setQuestionLayout(e.id,t.dataset.layout),$.querySelectorAll(".layout-btn").forEach(e=>e.classList.toggle("is-active",e===t)),Preview.update()})}),p.querySelectorAll(".qc-btn[data-action]").forEach(t=>{t.addEventListener("click",()=>{const n=t.dataset.action;"delete"!==n?"duplicate"===n?(State.duplicateQuestion(e.id),Editor.renderQuestions(),Preview.update(),App.toast(I18n.t("toast.questionDuplicated"),"success")):"move-up"===n?(State.moveQuestion(e.id,-1),Editor.renderQuestions(),Preview.update()):"move-down"===n&&(State.moveQuestion(e.id,1),Editor.renderQuestions(),Preview.update()):App.requestDeleteQuestion(e.id)})}),L.addEventListener("click",e=>{e.stopPropagation(),g.classList.toggle("is-visible"),L.classList.toggle("is-active"),g.classList.contains("is-visible")||(y.hidden=!0)}),A.addEventListener("click",e=>{e.stopPropagation(),g.classList.remove("is-visible"),L.classList.remove("is-active"),y.hidden=!0}),h.addEventListener("click",e=>{e.stopPropagation(),g.classList.contains("is-visible")||(g.classList.add("is-visible"),L.classList.add("is-active"));const t=y.hidden;y.hidden=!t,!1===y.hidden&&K()}),window.addEventListener("resize",()=>{y.hidden||K()}),window.addEventListener("scroll",()=>{y.hidden||K()},!0),document.addEventListener("click",e=>{f.contains(e.target)||y.contains(e.target)||(y.hidden=!0)}),a.addEventListener("focusin",()=>{document.querySelectorAll(".question-card.is-focused").forEach(e=>e.classList.remove("is-focused")),a.classList.add("is-focused")}),a}function s(e,t){e.innerHTML=t||"",r(e)}function r(e){e.classList.toggle("is-empty",""===Utils.stripHtml(e.innerHTML))}function l(t,n){Utils.bindAutoFont(t);const i=Utils.debounce(()=>{n(Utils.sanitizeHtml(t.innerHTML))},180);t.addEventListener("input",()=>{r(t),i()}),t.addEventListener("focus",()=>{e=t}),t.addEventListener("keyup",()=>d(t)),t.addEventListener("mouseup",()=>d(t)),t.addEventListener("keydown",e=>{if(!e.ctrlKey&&!e.metaKey)return;const t=e.key.toLowerCase();"b"===t?(e.preventDefault(),u("bold")):"i"===t?(e.preventDefault(),u("italic")):"u"===t?(e.preventDefault(),u("underline")):"z"===t?(e.preventDefault(),u("undo")):"y"===t&&(e.preventDefault(),u("redo"))})}function d(e){const n=window.getSelection();n.rangeCount>0&&e.contains(n.anchorNode)&&(t=n.getRangeAt(0).cloneRange())}function c(){if(!t)return;const e=window.getSelection();e.removeAllRanges(),e.addRange(t)}function u(t,n=null){if(e){e.focus(),c();const __bw=function(){try{return document.queryCommandState("bold")}catch(x){return!1}},__was=t==="bold"?__bw():!1;try{document.execCommand(t,!1,n)}catch(e){document.execCommand("styleWithCSS",!1,!0);try{document.execCommand(t,!1,n)}catch(e){}}
if(t==="bold"&&__was&&__bw()){try{const sl=window.getSelection();if(sl.rangeCount&&!sl.isCollapsed){const rg=sl.getRangeAt(0),fr=rg.extractContents();fr.querySelectorAll("b,strong").forEach(x=>{while(x.firstChild)x.parentNode.insertBefore(x.firstChild,x);x.remove()});fr.querySelectorAll("[style]").forEach(x=>{x.style.fontWeight&&x.style.removeProperty("font-weight")});const sp=document.createElement("span");sp.style.fontWeight="400";sp.appendChild(fr);rg.insertNode(sp);const r2=document.createRange();r2.selectNodeContents(sp);sl.removeAllRanges();sl.addRange(r2)}}catch(x){}}
d(e),r(e),e.dispatchEvent(new Event("input",{bubbles:!0})),Preview.update()}}return{bindRich:l,setRich:s,afterEdit:o,updateCount:i,renderQuestions:function(){State.ensureTrailingEmpty();const e=State.get(),t=document.getElementById("questionsList"),n=e.language;t.innerHTML="",e.questions.forEach((e,i)=>{t.appendChild(a(e,i,n))}),i(),window.lucide&&lucide.createIcons()},initToolbar:function(){document.addEventListener("click",t=>{const n=t.target.closest(".inline-toolbar .rt-btn[data-cmd]");if(n){t.preventDefault();const e=n.dataset.cmd;e&&u(e)}const i=t.target.closest(".inline-toolbar .rt-math-symbol[data-symbol]");var o,a;i&&(t.preventDefault(),o=e,a=i.dataset.symbol,o&&(o.focus(),c(),document.execCommand("insertText",!1,a),d(o),r(o),o.dispatchEvent(new Event("input",{bubbles:!0})),Preview.update())),t.target.closest('.inline-toolbar .rt-color input[type="color"]')}),document.addEventListener("input",e=>{const t=e.target.closest('.inline-toolbar .rt-color input[type="color"]');if(t){const e=t.dataset.cmd,n=t.value;document.execCommand("styleWithCSS",!1,!0),u(e,n)}}),document.addEventListener("click",e=>{const t=e.target.closest(".inline-toolbar"),n=e.target.closest(".format-toggle-btn"),i=e.target.closest(".question-card");n||t||i||document.querySelectorAll(".inline-toolbar.is-visible").forEach(e=>{e.classList.remove("is-visible");const t=e.closest(".question-card__controls").querySelector(".format-toggle-btn");t&&t.classList.remove("is-active");const n=e.querySelector(".rt-dropdown__panel");n&&(n.hidden=!0)})})}}})(),DocRenderer=(()=>{function e(e){const t=document.createElement("div");return t.textContent=e,t.innerHTML}function t(t,n,i,ak){t.title||t.subtitle||t.marks||t.time;let o="";i&&(o+=`<div class="doc__setcode">${"bn"===n?"সেট":"Set"}: ${e(i)}</div>`),o+=`<div class="doc__title">${e(t.title||("bn"===n?"শিরোনাম":"Examination Title"))}</div>`,o+=`<div class="doc__subtitle">${e(t.subtitle||("bn"===n?"উপশিরোনাম":"Subtitle"))}</div>`;ak&&(o+=`<div class="doc__anskey">${"bn"===n?"উত্তরমালা":"Answer Sheet"}</div>`);const a=t.marks||("bn"===n?"০":"0"),s=t.time||("bn"===n?"০ মিনিট":"0 Minutes");return o+=`<div class="doc__metarow">\n              <span>${"bn"===n?"মান":"Marks"}: ${e(a)}</span>\n              <span>${"bn"===n?"সময়":"Time"}: ${e(s)}</span>\n            </div>`,o+='<div class="doc__divider"></div>',t.note?o+=`<div class="doc__note">${"bn"===n?"নোট":"Note"}: ${e(t.note)}</div>`:o+=`<div class="doc__note" style="color:#9CA3AF;">${"bn"===n?"নোট যোগ করুন...":"Add a note..."}</div>`,o}function n(e,t,n,i){if(window.QTypes){const r=QTypes.renderQuestionHtml(e,t,n,i);if(null!=r)return r}return __n(e,t,n,i)}function G(items,lang,showAns){let out="",cur=null,buf="",cnt=0,dvKey="";const flush=()=>{if(buf){const k=Math.max(1,Math.min(cur,cnt));const dv=dvKey&&k>=2;out+=`<div class="doc__questions" data-cols="${k}"${dv?' data-divider="1"':""}>${buf}${dv?(2===k?'<i class="doc__coldiv doc__coldiv--2a"></i>':'<i class="doc__coldiv doc__coldiv--3a"></i><i class="doc__coldiv doc__coldiv--3b"></i>'):""}</div>`}buf="",cnt=0};items.forEach(({q:q,index:ix})=>{const b=q._base||q,inf=window.QSec?QSec.info(b):null;inf&&inf.first&&!q._noHead&&(flush(),cur=null,out+=QSec.headingHtml(b,lang));const ty=window.QTypes?QTypes.typeOf(b):"mcq",key=window.QSec&&QSec.divider&&QSec.divider(ty)?ty:"";key!==dvKey&&(flush(),dvKey=key);const c=window.QCols?QCols.colsOf(q):2;c!==cur&&(flush(),cur=c),buf+=n(q,inf?inf.n-1:ix,lang,showAns),cnt++});flush();return out}function __n(e,t,n,i){const o=Utils.formatQuestionNumber(t,n),a=`doc-options--${e.optionsLayout||"vertical"}`;let s=`<div class="doc-question">\n              <div class="doc-question__text">\n                <span class="doc-question__number">${o}.</span>\n                ${e.marks&&String(e.marks).trim()?`<span class="doc-question__marks">[${DocRenderer.escapeHtml("bn"===n?String(e.marks).trim().replace(/[0-9]/g,e=>"০১২৩৪৫৬৭৮৯"[+e]):String(e.marks).trim())}]</span>`:""}<span class="doc-question__content">${e.question.html||""}</span>\n              </div>\n              <div class="doc-options ${a}">`;return e.options.forEach((e,t)=>{const o=!1;s+=`<div class="doc-option${o?" doc-option--correct":""}">\n                <span class="doc-option__label">${Utils.optionLabel(t,n)}</span>\n                <span class="doc-option__content">${e.html||""}</span>\n              </div>`}),s+="</div>",(function(){if(!i)return;const cl=e.options.map((x,k)=>x.correct?"("+Utils.optionLabel(k,n)+")":null).filter(Boolean).join(", "),has=""!==Utils.stripHtml(e.explanationHtml);if(!cl&&!has)return;s+=`<div class="doc-explanation">${cl?`<span class="doc-explanation__label">${cl}</span> `:""}${has?`<span class="doc-explanation__label">${"bn"===n?"ব্যাখ্যা":"Explanation"}:</span> <span class="doc-explanation__text">${e.explanationHtml}</span>`:""}</div>`})(),s+="</div>",s}return{renderFullDocumentHtml:function(e,i,o,a,s,r,l){e=window.QSec?QSec.arrange(e):e;const d=e.some(e=>!Utils.isQuestionEmpty(e));let c=`<div class="doc" data-doc-font="${a}" style="font-family:${s};font-size:${r.fontSize}pt;color:${r.fontColor};">`;return c+=t(o,a,i,l),d?(c+=G(e.map((e,t)=>({q:e,index:t})),a,l)):c+=`<div class="doc--empty-state">${"bn"===a?"প্রশ্ন যোগ করুন প্রিভিউ দেখতে...":"Add a question to see the live preview..."}</div>`,c+="</div>",c},renderHeaderHtml:t,renderQuestionHtml:n,paginate:function(e,i,o,a,s,r,l,d){e=window.QSec?QSec.arrange(e):e;const c=Preview.PAGE_SIZES_MM[l]||Preview.PAGE_SIZES_MM.A4,u=(c.h-19.05*2)*(96/25.4),m=t(o,a,i,d),p=document.createElement("div");p.className="paper",p.style.position="fixed",p.style.left="-99999px",p.style.top="0",p.style.width=`${c.w}mm`,p.style.boxShadow="none",p.style.height="auto",p.style.minHeight="0",document.body.appendChild(p);const g=document.createElement("div");g.className="doc",g.dataset.docFont=a,g.style.fontFamily=s,g.style.fontSize=`${r.fontSize}pt`,g.style.color=r.fontColor,p.appendChild(g),g.innerHTML=m;const f=g.getBoundingClientRect().height,h=document.createElement("div");function b(e){return h.innerHTML=G(e,a,d),h.getBoundingClientRect().height}h.className="doc__qwrap",g.appendChild(h);const y=[];let v=window.__iqExpand?window.__iqExpand(e,d):e.map((e,t)=>({q:e,index:t})),S=!0;for(;v.length>0;){const e=S?Math.max(u-f,.3*u):u;let t=1,n=v.length,i=1;if(b(v)<=e)i=v.length;else{for(;t<=n;){const o=Math.floor((t+n)/2);b(v.slice(0,o))<=e?(i=o,t=o+1):n=o-1}i=Math.max(i,1)}y.push({questions:v.slice(0,i),isFirstPage:S}),v=v.slice(i),S=!1}return 0===y.length&&y.push({questions:[],isFirstPage:!0}),document.body.removeChild(p),y.map(e=>{let t=`<div class="doc" data-doc-font="${a}" style="font-family:${s};font-size:${r.fontSize}pt;color:${r.fontColor};">`;return e.isFirstPage&&(t+=m),e.questions.length>0?(t+=G(e.questions,a,d)):t+=`<div class="doc--empty-state">${"bn"===a?"প্রশ্ন যোগ করুন প্রিভিউ দেখতে...":"Add a question to see the live preview..."}</div>`,t+="</div>",t})},escapeHtml:e}})(),Preview=(()=>{const e={A4:{w:210,h:297},Letter:{w:215.9,h:279.4},Legal:{w:215.9,h:355.6}},t={Calibri:"'Calibri','Carlito',Arial,sans-serif","Times New Roman":"'Times New Roman',Times,serif","Cambria Math":"'Cambria Math','Cambria',serif","Noto Serif Bengali":"'Noto Serif Bengali',serif","Hind Siliguri":"'Hind Siliguri',sans-serif","Shonar Bangla":"'Shonar Bangla','Noto Serif Bengali',sans-serif","Nikosh BAN":"'Nikosh BAN','Noto Serif Bengali',sans-serif"};function n(){const e=State.get();return e.setCode.enabled&&e.activeSetIndex>=0&&e.generatedSets[e.activeSetIndex]?e.generatedSets[e.activeSetIndex].questions:e.questions.filter(e=>!Utils.isQuestionEmpty(e))}function i(){const e=State.get();return e.setCode.enabled&&e.activeSetIndex>=0&&e.generatedSets[e.activeSetIndex]?e.generatedSets[e.activeSetIndex].setCode:null}function o(){const t=State.get(),n=e[t.settings.pageSize]||e.A4;document.querySelectorAll("#paperWrap .paper").forEach(e=>{e.style.width=`${n.w}mm`,e.style.minHeight=`${n.h}mm`,e.style.background=t.settings.pageColor||"#FFFFFF"})}function a(){const t=State.get(),n=e[t.settings.pageSize]||e.A4,i=document.getElementById("previewContainer");if(!i)return 100;if(null===i.offsetParent){const q=State.get().settings.fitZoom;return q>0?q:100}const o=96/25.4,a=n.w*o,s=n.h*o,r=i.getBoundingClientRect(),l=(r.width-40)/a,d=(r.height-40)/s,c=Math.min(r.height<520?l:Math.min(l,d),1.2);return Math.round(100*c)}function s(){const e=State.get(),t=e.settings.fitZoom||a(),n=e.settings.zoom,i=n/100*(t/100);document.getElementById("paperWrap").style.transform=`scale(${i})`,document.getElementById("zoomValue").textContent=`${n}%`}let _showAnswers=!1;function r(e){const r=State.get(),l=r.language,d=r.document,c=n(),u=i(),m=t[r.settings.fontFamily]||t["Times New Roman"],p=(r.settings.pageSize,c.some(e=>!Utils.isQuestionEmpty(e))),g=document.getElementById("paperWrap");let f;f=p?DocRenderer.paginate(c,u,d,l,m,r.settings,r.settings.pageSize,_showAnswers):[DocRenderer.renderFullDocumentHtml(c,u,d,l,m,r.settings,_showAnswers)],g.innerHTML=f.map((e,t)=>`<div class="paper" id="${0===t?"paper":""}" data-page="${t+1}" data-page-label="${"bn"===l?`পৃষ্ঠা ${Utils.toBanglaNumber(t+1)}`:`Page ${Utils.toEnglishNumber(t+1)}`}" role="img" aria-label="Question paper preview, page ${t+1}">${e}</div>`).join(""),g.classList.toggle("paper-wrap--multipage",f.length>1),f.length>0&&g.querySelectorAll(".paper").forEach((e,t)=>{const n=document.createElement("div");n.className="doc__pagenum";const i=t+1,o=f.length;n.textContent="bn"===l?`পৃষ্ঠা ${Utils.toBanglaNumber(i)}/${Utils.toBanglaNumber(o)}`:`Page ${Utils.toEnglishNumber(i)}/${Utils.toEnglishNumber(o)}`,e.appendChild(n)}),o();const h=a();if(r.settings.fitZoom=h,100===r.settings.zoom){const e=h/100;g.style.transform=`scale(${e})`,document.getElementById("zoomValue").textContent="100%"}else s();if(e){const e=document.getElementById("previewContainer");e&&(e.scrollTop=0)}}function l(){const e=State.get(),t=document.getElementById("setSwitch"),n=document.getElementById("setPicker");e.setCode.enabled&&0!==e.generatedSets.length?(t.hidden=!1,n.innerHTML=e.generatedSets.map((t,n)=>`<option value="${n}" ${"bn"===e.language?"data-i18n-font":""}>${"bn"===e.language?"সেট":"Set"} ${DocRenderer.escapeHtml(t.setCode)}</option>`).join(""),(e.activeSetIndex<0||e.activeSetIndex>=e.generatedSets.length)&&(e.activeSetIndex=0),n.value=String(e.activeSetIndex)):t.hidden=!0}return{update:Utils.debounce(e=>{if(null===document.getElementById("previewContainer").offsetParent)return void(window.__iqPrevDirty=1);r(!!e),l()},90),updateImmediate:function(e){r(!!e),l()},applyZoom:s,applyPaperDimensions:o,computeFitZoom:a,PAGE_SIZES_MM:e,FONT_STACKS:t,currentQuestions:n,currentSetCode:i,setShowAnswers:function(e){_showAnswers=!!e},getShowAnswers:function(){return _showAnswers}}})(),Randomizer=(()=>{function e(e,t){const n=(e||"").split(",").map(e=>e.trim()).filter(Boolean),i=[];for(let e=0;e<t;e++)i.push(n[e]||String.fromCharCode(65+e));return i}function t(e){const t=Utils.clone(e);return t.options=Utils.shuffle(t.options),t}function n(e,n){let i=Utils.clone(e);return"questions"!==n&&"both"!==n||(i=Utils.shuffle(i)),"options"!==n&&"both"!==n||(i=i.map(t)),i}return{generateSets:function(){const t=State.get(),i=Utils.clamp(parseInt(t.setCode.numberOfSets,10)||1,1,26),o=e(t.setCode.codeNames,i),a=t.setCode.randomization,s=t.questions.filter(e=>!Utils.isQuestionEmpty(e)),r=o.map(e=>({setCode:e,questions:n(s,a)}));return t.generatedSets=r,t.activeSetIndex=0,r},clearSets:function(){const e=State.get();e.generatedSets=[],e.activeSetIndex=-1},parseSetNames:e}})(),PdfGen=(()=>{const e={};function t(t,n){return window["jspdf"===t?"jspdf":"jszip"===t?"JSZip":"html2canvas"]?Promise.resolve():(e[t]||(e[t]=new Promise((i,o)=>{const a=document.createElement("script");a.src=n,a.onload=()=>i(),a.onerror=()=>{delete e[t],o(new Error(`Failed to load ${t}`))},document.head.appendChild(a)})),e[t])}async function n(){await Promise.all([t("html2canvas","https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"),t("jspdf","https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js")])}function i(){return t("jszip","https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js")}function o(){const e=[];return window.html2canvas||e.push("html2canvas"),window.jspdf&&window.jspdf.jsPDF||e.push("jsPDF"),e}async function a(e,t,n,i){const o=function(e,t){const n=document.createElement("div");return n.className="paper",n.style.position="fixed",n.style.left="-99999px",n.style.top="0",n.style.margin="0",n.style.boxShadow="none",n.style.background=t||"#FFFFFF",n.innerHTML=e,document.body.appendChild(n),n}(e,i);o.style.width=`${t}px`,o.style.minHeight=`${n}px`,await(async()=>{try{await Promise.all([document.fonts.load("12pt 'Noto Serif Bengali'","অআক"),document.fonts.load("700 12pt 'Noto Serif Bengali'","অআক"),document.fonts.load("12pt \"Times New Roman\"","Aa"),document.fonts.ready])}catch(_){}})(),await new Promise(e=>requestAnimationFrame(()=>requestAnimationFrame(e)));const a=Math.max(o.scrollHeight,n),s=await html2canvas(o,{scale:2.5,useCORS:!0,backgroundColor:i||"#FFFFFF",width:t,height:a,windowWidth:t});return document.body.removeChild(o),s}function s(e){e.width=0,e.height=0}async function r(e,t,n){e=e.filter(e=>!Utils.isQuestionEmpty(e));const i=o();if(i.length)throw new Error(`${i.join(" & ")} failed to load`);const r=State.get(),l=r.language,d=r.document,c=r.settings.pageSize,u=Preview.PAGE_SIZES_MM[c]||Preview.PAGE_SIZES_MM.A4,m=Preview.FONT_STACKS[r.settings.fontFamily]||Preview.FONT_STACKS["Times New Roman"],p="A4"===c?"a4":"Letter"===c?"letter":"legal",g=96/25.4,f=Math.round(u.w*g),h=Math.round(u.h*g),b=e.some(e=>""!==Utils.stripHtml(e.question.html)||e.options.some(e=>""!==Utils.stripHtml(e.html)))?DocRenderer.paginate(e,t,d,l,m,r.settings,c,n):[DocRenderer.renderFullDocumentHtml(e,t,d,l,m,r.settings,n)],{jsPDF:y}=window.jspdf,v=new y({orientation:"portrait",unit:"mm",format:p,compress:!0}),S=b.length;for(let e=0;e<b.length;e++){let t=b[e];if(S>1){const n=e+1,i="bn"===l?`পৃষ্ঠা ${Utils.toBanglaNumber(n)}/${Utils.toBanglaNumber(S)}`:`Page ${Utils.toEnglishNumber(n)}/${Utils.toEnglishNumber(S)}`;t+=`<div class="doc__pagenum">${DocRenderer.escapeHtml(i)}</div>`}const n=await a(t,f,h,r.settings.pageColor),i=n.toDataURL("image/jpeg",.8),o=n.height/n.width*u.w;s(n),e>0&&v.addPage(p,"portrait"),v.addImage(i,"JPEG",0,0,u.w,Math.min(o,u.h),void 0,"FAST"),e>0&&e%5==0&&await new Promise(e=>setTimeout(e,0))}return v}function l(e){return(String(e||"").replace(/[\\/:*?"<>|]+/g," ").replace(/[\u0000-\u001F\u007F]+/g," ").trim().replace(/\s+/g,"_")||"Document").slice(0,60)}async function d(e){const t=State.get(),n=function(e){const t=e.language,n="bn"===t?"উপশিরোনাম":"Subtitle",i="bn"===t?"শিরোনাম":"Examination_Title";return`${l(e.document.subtitle||n)}_${l(e.document.title||i)}`}(t),o=function(e,t){return"bn"===t?e?"উত্তরপত্র":"প্রশ্নপত্র":e?"Answer":"Question"}(e,t.language),a=e?I18n.t("download.answerKeyLabel"):I18n.t("download.questionPaperLabel");if(t.setCode.enabled&&t.generatedSets.length>1){if(await i(),!window.JSZip)throw new Error("JSZip failed to load");const s=new JSZip,d=function(){const e=new Map;return t=>{if(!e.has(t))return e.set(t,1),t;const n=e.get(t)+1;return e.set(t,n),`${t}_${n}`}}();for(const i of t.generatedSets){const t=d(l(i.setCode)),a=await r(i.questions,i.setCode,e);s.file(`${n}_Set_${t}_${o}.pdf`,a.output("blob"))}!function(e,t){const n=URL.createObjectURL(e),i=document.createElement("a");i.href=n,i.download=t,document.body.appendChild(i),i.click(),document.body.removeChild(i),setTimeout(()=>URL.revokeObjectURL(n),4e3)}(await s.generateAsync({type:"blob"}),`${n}_All_Sets_${o}.zip`),App.toast(`${a} ${I18n.t("toast.zipGenerated")}`,"success")}else if(t.setCode.enabled&&1===t.generatedSets.length){const i=t.generatedSets[0],s=l(i.setCode);(await r(i.questions,i.setCode,e)).save(`${n}_Set_${s}_${o}.pdf`),App.toast(`${a} ${I18n.t("toast.pdfGenerated")}`,"success")}else(await r(t.questions,null,e)).save(`${n}_${o}.pdf`),App.toast(`${a} ${I18n.t("toast.pdfGenerated")}`,"success")}async function c(e){const t=document.getElementById("btnDownload"),i=t.innerHTML;t.disabled=!0,t.innerHTML='<i data-lucide="loader-2" class="ai-spin-icon"></i>',window.lucide&&lucide.createIcons();try{await n();const t=o();if(t.length)throw new Error(`Required library failed to load: ${t.join(", ")}. Check your internet connection.`);await e()}catch(e){console.error("PDF generation failed:",e),App.toast(I18n.t("toast.pdfError"),"error")}finally{t.disabled=!1,t.innerHTML=i,window.lucide&&lucide.createIcons()}}return{downloadQuestionPaperOnly:function(){return c(()=>d(!1))},downloadAnswerKeyOnly:function(){return c(()=>d(!0))},hasAnswerKey:function(){return State.get().questions.some(e=>window.QTypes?QTypes.hasAnswer(e):e.options.some(e=>e.correct))},prefetchLibsInBackground:function(){n().catch(()=>{}),i().catch(()=>{})},ensureZipLoaded:i}})(),Storage=(()=>{const e="mcqGenerator.project.v1";let t=!0;function n(){try{const e="__mcq_storage_test__";localStorage.setItem(e,"1"),localStorage.removeItem(e),t=!0}catch(e){t=!1}return t}const i="mcqGenerator.ai.v1";return{save:function(){if(!n())return App.toast(I18n.t("toast.autosaveUnavailable"),"error"),!1;try{const t=JSON.stringify(State.get());return localStorage.setItem(e,t),!0}catch(e){return console.error("Save failed:",e),App.toast(I18n.t("toast.saveUnavailable"),"error"),!1}},load:function(){if(!n())return null;try{const t=localStorage.getItem(e);return t?JSON.parse(t):null}catch(e){return console.error("Load failed:",e),null}},clear:function(){if(n())try{localStorage.removeItem(e)}catch(e){}},checkAvailability:n,saveAiSettings:function(e){if(!n())return!1;try{return localStorage.setItem(i,JSON.stringify(e)),!0}catch(e){return!1}},loadAiSettings:function(){if(!n())return null;try{const e=localStorage.getItem(i);return e?JSON.parse(e):null}catch(e){return null}}}})(),Settings=(()=>{const e={en:["Times New Roman","Calibri","Cambria Math"],bn:["Noto Serif Bengali","Hind Siliguri","Shonar Bangla","Nikosh BAN"]},t=[{name:"White",hex:"#FFFFFF"},{name:"Ivory",hex:"#FFFFF0"},{name:"Light Gray",hex:"#F3F4F6"},{name:"Light Blue",hex:"#EFF6FF"}];function n(){const t=State.get(),n=document.getElementById("selFontFamily"),i=e[t.language]||e.en;n.innerHTML=i.map(e=>`<option value="${e}">${e}</option>`).join(""),i.includes(t.settings.fontFamily)?n.value=t.settings.fontFamily:(t.settings.fontFamily=i[0],n.value=i[0])}function i(){const e=State.get();document.querySelectorAll(".color-preset").forEach(t=>{t.classList.toggle("is-active",t.dataset.hex.toUpperCase()===e.settings.pageColor.toUpperCase())})}function o(e){const t=Utils.normalizeHex(e);t&&(State.setSetting("pageColor",t),document.getElementById("selPageColor").value=t,document.getElementById("selPageColorHex").value=t,i(),Preview.update())}function a(){return[document.getElementById("btnSettingsInput")].filter(Boolean)}function s(){document.getElementById("settingsDrawer").classList.add("is-open"),document.getElementById("settingsDrawer").setAttribute("aria-hidden","false"),document.getElementById("drawerOverlay").hidden=!1,a().forEach(e=>{e.setAttribute("aria-expanded","true"),e.classList.add("is-active")})}function r(){document.getElementById("settingsDrawer").classList.remove("is-open"),document.getElementById("settingsDrawer").setAttribute("aria-hidden","true"),document.getElementById("drawerOverlay").hidden=!0,a().forEach(e=>{e.setAttribute("aria-expanded","false"),e.classList.remove("is-active")})}function l(e){State.setSetting("theme",e),document.documentElement.setAttribute("data-theme",e),document.querySelectorAll(".segmented__btn[data-theme]").forEach(t=>{t.classList.toggle("is-active",t.dataset.theme===e)})}return{bindEvents:function(){const e=document.getElementById("btnSettingsInput");e&&e.addEventListener("click",s),document.getElementById("btnCloseSettings").addEventListener("click",r),document.getElementById("drawerOverlay").addEventListener("click",r),document.querySelectorAll(".segmented__btn[data-theme]").forEach(e=>{e.addEventListener("click",()=>l(e.dataset.theme))});const t=document.getElementById("btnThemeToggle");t&&t.addEventListener("click",()=>{l("dark"===State.get().settings.theme?"light":"dark")}),document.getElementById("selPageSize").addEventListener("change",e=>{State.setSetting("pageSize",e.target.value),Preview.update()}),document.getElementById("selPageColor").addEventListener("input",e=>o(e.target.value)),document.getElementById("selPageColorHex").addEventListener("change",e=>o(e.target.value)),document.getElementById("selFontFamily").addEventListener("change",e=>{State.setSetting("fontFamily",e.target.value),Preview.update()}),document.getElementById("selFontSize").addEventListener("change",e=>{State.setSetting("fontSize",parseInt(e.target.value,10)),Preview.update()}),document.getElementById("chkSetCode").addEventListener("change",e=>{State.setSetCodeField("enabled",e.target.checked),document.getElementById("setCodeOptions").hidden=!e.target.checked,e.target.checked||(Randomizer.clearSets(),document.getElementById("setGenStatus").textContent=""),Preview.update()}),document.getElementById("selNumSets").addEventListener("change",e=>{State.setSetCodeField("numberOfSets",parseInt(e.target.value,10))}),document.getElementById("inpSetNames").addEventListener("input",Utils.debounce(e=>{State.setSetCodeField("codeNames",e.target.value)},200)),Utils.bindAutoFont(document.getElementById("inpSetNames")),document.getElementById("selRandomType").addEventListener("change",e=>{State.setSetCodeField("randomization",e.target.value)}),document.getElementById("btnGenerateSets").addEventListener("click",()=>{const e=State.get(),t=e.questions.some(e=>""!==Utils.stripHtml(e.question.html)),n=document.getElementById("setGenStatus");if("bn"===I18n.get()?n.setAttribute("data-i18n-font",""):n.removeAttribute("data-i18n-font"),!t)return void(n.textContent=I18n.t("settings.needQuestionForSets"));Randomizer.generateSets(),Preview.update();const i=e.generatedSets.length;n.textContent=`${i} ${I18n.t(1===i?"set.countSingular":"set.countPlural")}.`,App.toast(`${i} ${I18n.t(1===i?"set.countSingular":"set.countPlural")}`,"success")}),document.getElementById("setPicker").addEventListener("change",e=>{State.get().activeSetIndex=parseInt(e.target.value,10),Preview.updateImmediate()}),document.getElementById("btnDrawerSave").addEventListener("click",()=>App.handleSave()),document.getElementById("btnDrawerReset").addEventListener("click",()=>App.requestReset()),document.addEventListener("keydown",e=>{"Escape"===e.key&&document.getElementById("settingsDrawer").classList.contains("is-open")&&r()});const n=()=>{Storage.saveAiSettings({apiKey:document.getElementById("inpGeminiKey").value.trim(),model:document.getElementById("selGeminiModel").value,insertMode:document.getElementById("selAiInsertMode").value})};document.getElementById("inpGeminiKey").addEventListener("input",Utils.debounce(n,250)),document.getElementById("selGeminiModel").addEventListener("change",n),document.getElementById("selAiInsertMode").addEventListener("change",n)},syncFormFromState:function(){const e=State.get();document.querySelectorAll(".segmented__btn[data-theme]").forEach(t=>{t.classList.toggle("is-active",t.dataset.theme===e.settings.theme)}),document.getElementById("selPageSize").value=e.settings.pageSize,document.getElementById("selPageColor").value=e.settings.pageColor,document.getElementById("selPageColorHex").value=e.settings.pageColor,i(),n(),document.getElementById("selFontSize").value=String(e.settings.fontSize),document.getElementById("chkSetCode").checked=e.setCode.enabled,document.getElementById("setCodeOptions").hidden=!e.setCode.enabled,document.getElementById("selNumSets").value=String(e.setCode.numberOfSets),document.getElementById("inpSetNames").value=e.setCode.codeNames,document.getElementById("selRandomType").value=e.setCode.randomization;const t=Storage.loadAiSettings()||{};document.getElementById("inpGeminiKey").value=t.apiKey||"",document.getElementById("selGeminiModel").value=t.model||"gemini-3-flash-preview",document.getElementById("selAiInsertMode").value=t.insertMode||"append"},buildColorPresets:function(){const e=document.getElementById("colorPresets");e.innerHTML=t.map(e=>`<button type="button" class="color-preset" style="background:${e.hex}" data-hex="${e.hex}" title="${e.name}" aria-label="${e.name}"></button>`).join(""),e.querySelectorAll(".color-preset").forEach(e=>{e.addEventListener("click",()=>o(e.dataset.hex))})},populateFontOptions:n,openDrawer:s,closeDrawer:r,getAiSettings:function(){const e=Storage.loadAiSettings()||{};return{apiKey:e.apiKey||"",model:e.model||"gemini-3-flash-preview",insertMode:e.insertMode||"append"}}}})(),AiGenerator=(()=>{let e=[],t=!1;function n(e){return document.getElementById(e)}function i(){return`f_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,7)}`}function o(e){return 1.37*e/1048576}function a(e){t=e,n("chkAiCustomPrompt").checked=e,n("aiModalBody").classList.toggle("is-custom-prompt-mode",e),n("aiPromptLabel").textContent=I18n.t(e?"ai.instructionLabelTopic":"ai.instructionLabel"),n("aiPromptLabel").dataset.i18n=e?"ai.instructionLabelTopic":"ai.instructionLabel",n("aiPromptInput").placeholder=I18n.t(e?"ai.promptPlaceholderTopic":"ai.promptPlaceholderFile");const i=!n("aiKeyHint").hidden;s(""),i&&(n("aiKeyHint").hidden=!1)}function s(e,t="default"){const i=n("aiStatus");i.classList.toggle("is-error","error"===t),"bn"===I18n.get()?i.setAttribute("data-i18n-font",""):i.removeAttribute("data-i18n-font"),e?"loading"===t?i.innerHTML=`<span class="ai-spinner"></span><span>${r(e)}</span>`:i.textContent=e:i.innerHTML=""}function r(e){const t=document.createElement("div");return t.textContent=e,t.innerHTML}function l(){e.length>=10?s("You can attach up to 10 files.","error"):n("aiCameraInput").click()}function d(t,n){const i=e.find(e=>e.id===t);i&&(i.progress=Math.max(0,Math.min(100,n)),function(e,t){const n=document.querySelector(`.ai-file-chip[data-id="${e}"]`);if(!n)return;const i=n.querySelector(".ai-file-chip__ring-fill");if(i){const e=g*(1-Math.max(0,Math.min(100,t))/100);i.setAttribute("stroke-dashoffset",e)}const o=n.querySelector(".ai-file-chip__pct");o&&(o.textContent=`${Math.round(t)}%`)}(t,i.progress))}function c(t,n){const i=e.find(e=>e.id===t);i&&(Object.assign(i,n,{progress:100,done:!0}),f())}function u(t){const a=Array.from(t||[]);if(0===a.length)return;const r=10-e.length;if(r<=0)return void s("You can attach up to 10 files. Remove one first.","error");const l=a.slice(0,r);a.length>l.length&&s(`Only ${r} more file${1===r?"":"s"} can be added (max 10).`,"error"),n("aiCapturePlaceholder").hidden=!0,l.forEach(t=>function(t){const a=t.type.startsWith("image/"),r="application/pdf"===t.type||/\.pdf$/i.test(t.name),l=/\.docx$/i.test(t.name)||"application/vnd.openxmlformats-officedocument.wordprocessingml.document"===t.type,u=/\.pptx$/i.test(t.name)||"application/vnd.openxmlformats-officedocument.presentationml.presentation"===t.type;if(/\.(doc|ppt|xls|xlsx)$/i.test(t.name))return void s("Older .doc/.ppt/.xls formats aren’t supported — please save as .docx/.pptx/PDF and try again.","error");if(!(a||r||l||u))return void s("Please choose an image, PDF, DOCX, or PPTX file.","error");if(a||r){const n=o(t.size);if(n>60)return void s(`"${t.name}" is too large (~${p=t.size,(p/1048576).toFixed(1)}MB). Please use a file under ~${Math.floor(43.7956204379562)}MB, or split it into smaller files.`,"error");if(e.filter(e=>("image"===e.kind||"pdf"===e.kind)&&e.rawSizeBytes).reduce((e,t)=>e+o(t.rawSizeBytes),0)+n>60)return void s(`Adding "${t.name}" would push your attached files over the size limit for one request. Remove a file or use smaller ones.`,"error")}var p;const g=a?"image":r?"pdf":"text",h=function(t,o,a){const s={id:i(),name:t,kind:o,mimeType:a,data:null,thumb:null,progress:0,done:!1};return e.push(s),n("aiCapturePlaceholder").hidden=!0,f(),s}(t.name,g,t.type);if(h.rawSizeBytes=t.size,l||u){let o=0;const a=setInterval(()=>{o=Math.min(o+12*Math.random()+4,90),d(h.id,o)},140);return void async function(e){if(await PdfGen.ensureZipLoaded(),!window.JSZip)throw new Error("JSZip failed to load");const t=await JSZip.loadAsync(e),n=/\.pptx$/i.test(e.name),i=Object.keys(t.files).filter(e=>n?/^ppt\/slides\/slide\d+\.xml$/i.test(e):/^word\/document\.xml$/i.test(e));if(n&&i.sort((e,t)=>parseInt(e.match(/slide(\d+)\.xml/i)[1],10)-parseInt(t.match(/slide(\d+)\.xml/i)[1],10)),0===i.length)throw new Error("EMPTY_DOC");const o=[];for(const e of i){const n=(await t.files[e].async("string")).replace(/<\/w:p>/gi,"\n").replace(/<\/a:p>/gi,"\n").replace(/<[^>]+>/g,"").replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&apos;/g,"'").replace(/[ \t]{2,}/g," ").replace(/\n{3,}/g,"\n\n").trim();n&&o.push(n)}const a=o.join("\n\n").trim();if(!a)throw new Error("EMPTY_DOC");return a}(t).then(o=>{clearInterval(a),function(t,o,a,s){s?c(s,{kind:"text",sourceKind:a,text:t}):(e.push({id:i(),name:o,kind:"text",sourceKind:a,text:t,progress:100,done:!0}),n("aiCapturePlaceholder").hidden=!0,f())}(o,t.name,u?"pptx":"docx",h.id)}).catch(e=>{clearInterval(a),console.error(e),m(h.id),s(`Couldn’t read ${t.name} — the file may be empty, corrupted, or password-protected.`,"error")})}const b=new FileReader;b.onprogress=e=>{e.lengthComputable&&d(h.id,e.loaded/e.total*100)},b.onload=()=>{r?function(t,o,a){const s=t.split(",")[1];a?c(a,{kind:"pdf",mimeType:"application/pdf",data:s}):(e.push({id:i(),name:o,kind:"pdf",mimeType:"application/pdf",data:s,progress:100,done:!0}),n("aiCapturePlaceholder").hidden=!0,f())}(b.result,t.name,h.id):function(t,o,a,s){const r=t.split(",")[1];s?c(s,{kind:"image",mimeType:o,data:r,thumb:t}):(e.push({id:i(),name:a,kind:"image",mimeType:o,data:r,thumb:t,progress:100,done:!0}),n("aiCapturePlaceholder").hidden=!0,f())}(b.result,t.type||"image/jpeg",t.name,h.id)},b.onerror=()=>{m(h.id),s(`Could not read ${t.name}.`,"error")},b.readAsDataURL(t)}(t))}function m(t){e=e.filter(e=>e.id!==t),f(),0===e.length&&(n("aiCapturePlaceholder").hidden=!1)}const p=15,g=2*Math.PI*p;function f(){const t=n("aiFileList"),i=n("aiFileListItems"),o=n("aiCaptureTitle");if(0===e.length)return t.hidden=!0,i.innerHTML="",void(o&&(o.textContent=I18n.t("ai.noFileSelected")));t.hidden=!1,o&&(o.textContent=`${e.length} ${I18n.t(1===e.length?"ai.fileSelectedSingular":"ai.fileSelectedPlural")}`),i.innerHTML=e.map(e=>{const t=function(e){return"image"===e.kind?null:"pdf"===e.kind?"file-text":"pptx"===e.sourceKind?"presentation":"file-type-2"}(e),n=e.done?"image"===e.kind?`<img src="${e.thumb}" alt="">`:`<i data-lucide="${t}"></i>`:"",i=e.done?"text"===e.kind?"pptx"===e.sourceKind?I18n.t("ai.pptxExtracted"):I18n.t("ai.docxExtracted"):"pdf"===e.kind?"PDF":I18n.t("ai.imageLabel"):I18n.t("ai.uploading"),o=e.done?"":`${function(e){const t=g*(1-Math.max(0,Math.min(100,e))/100);return`<svg class="ai-file-chip__ring"viewBox="0 0 34 34"aria-hidden="true">\n<circle class="ai-file-chip__ring-track"cx="17"cy="17"r="${p}"></circle>\n<circle class="ai-file-chip__ring-fill"cx="17"cy="17"r="${p}"\n stroke-dasharray="${g}"stroke-dashoffset="${t}"></circle>\n</svg>`}(e.progress||0)}<span class="ai-file-chip__pct">${Math.round(e.progress||0)}%</span>`;return`<div class="ai-file-chip${e.done?"":" is-uploading"}" data-id="${e.id}">\n                        <div class="ai-file-chip__icon">${n}${o}</div>\n                        <div class="ai-file-chip__info">\n                            <span class="ai-file-chip__name">${r(e.name)}</span>\n                            <span class="ai-file-chip__meta"${"bn"===I18n.get()?" data-i18n-font":""}>${i}</span>\n                        </div>\n                        <button type="button" class="ai-file-chip__remove" data-remove="${e.id}" aria-label="Remove ${r(e.name)}"><i data-lucide="x"></i></button>\n                    </div>`}).join(""),i.querySelectorAll("[data-remove]").forEach(e=>{e.addEventListener("click",()=>m(e.dataset.remove))}),window.lucide&&lucide.createIcons()}function h({startCameraImmediately:t}={}){e=[],n("aiCapturePlaceholder").hidden=!1,f(),s(""),a(!1),w();const i=Settings.getAiSettings();n("aiKeyHint").hidden=!!i.apiKey,n("aiModalOverlay").hidden=!1,window.lucide&&lucide.createIcons(),t&&l()}function b(){n("aiModalOverlay").hidden=!0}function y(n){
  const allTypes=window.__iqReadAiTypes?window.__iqReadAiTypes():[{type:"mcq",count:20}];
  const types=window.__iqAiOnlyType?allTypes.filter(x=>x.type===window.__iqAiOnlyType&&x.enabled):allTypes.filter(x=>x.enabled);
  const labels={mcq:"MCQ",tf:"True/False",fill:"Gap Filling",short:"Short Answer",desc:"Descriptive/Essay",creative:"Creative Question Sets"};
  const settings={difficulty:(document.getElementById("iqAiDifficulty")||{}).value||"mixed",answers:!document.getElementById("iqAiAnswers")||document.getElementById("iqAiAnswers").checked,explanations:!document.getElementById("iqAiExplanations")||document.getElementById("iqAiExplanations").checked};
  const selected=types.map(x=>({type:x.type,label:labels[x.type],count:x.count}));
  const topicMode=t;
  const sourceNames=e.map(x=>x.name).filter(Boolean);
  const extracted=e.filter(x=>x.kind==="text");
  return `You are an expert exam-question writer. Generate a mixed-type question paper based on the user's subject/topic or attached source material.\n\nUser instruction / subject: ${n}\nMode: ${topicMode?"topic-based generation using your knowledge":"source-based generation; prioritize attached source material"}\nAttached source files: ${sourceNames.length?sourceNames.join(", "):"none"}\nAttached image/PDF files in the order they were sent: ${e.filter(x=>x.kind==="image"||x.kind==="pdf").map((x,i)=>(i+1)+". "+x.name+" ("+x.kind+")").join("; ")||"none"}\nDifficulty: ${settings.difficulty}\nInclude answers: ${settings.answers}\nInclude explanations: ${settings.explanations}\n\nGenerate only these enabled categories, in exactly this order and quantity: ${JSON.stringify(selected)}. The count for creative means complete creative sets, not subquestions. Never add a disabled category.\n${extracted.length?"Extracted document text:\n"+extracted.map(x=>"--- "+x.name+" ---\n"+x.text).join("\n\n"):""}\n\nFORMATTING RULES FOR EVERY TEXT FIELD (question, options, answer, explanation, subQuestion text):\n- Text may contain ONLY these bare tags (no attributes, no quotes inside tags): <sub>, <sup>, <br>, <b>, <i>, <u>, <ul>, <ol>, <li>, <frac>, <over>, <sqrt>. Never use LaTeX, backslashes, dollar signs, Markdown or code blocks.\n- Subscripts and superscripts must always use <sub> and <sup>. Examples: H<sub>2</sub>O, CO<sub>2</sub>, Ca(OH)<sub>2</sub>, x<sup>2</sup>, 10<sup>-3</sup>, SO<sub>4</sub><sup>2-</sup>, Fe<sup>3+</sup>, a<sub>n</sub>.\n- FRACTIONS (mandatory): every fraction, whether numeric like 3/4 or algebraic, must be written as <frac>numerator<over>denominator</frac> so the numerator is shown above and the denominator below. Never write a fraction with a slash or as a/b. A slash is allowed only in units (m/s, km/h), dates and and/or. Mixed numbers: whole part first, then the fraction, e.g. 2<frac>1<over>2</frac>. Fractions can be nested and combined with <sup>, <sub> and <sqrt>. Examples: E = <frac>1<over>2</frac>mv<sup>2</sup>, x = <frac>-b ± <sqrt>b<sup>2</sup> - 4ac</sqrt><over>2a</frac>, <frac>2<over>3</frac> + <frac>1<over>4</frac> = <frac>11<over>12</frac>. Roots: <sqrt>expression</sqrt>. Write symbols such as × ÷ ± ≤ ≥ ≠ ≈ ∞ π θ α β Δ ∑ ∫ ° ∴ ∵ √ → ⇌ directly as characters.\n- Mathematical explanations or solutions must NEVER be written as a running paragraph. Put every step on its own line (separate lines with <br>), one equation per line: formula first, then substitution, then the final result with its unit. Example: v = u + at<br>v = 0 + 2 × 5<br>v = 10 m/s.\n- Chemical reactions must NEVER be embedded inside a sentence. Put every reaction on its own line (use <br> before and after it when other text is present), correctly balanced, with correct formulas, using → for irreversible and ⇌ for reversible reactions, state symbols (s), (l), (g), (aq) where useful, and conditions in brackets after the equation. Example: N<sub>2</sub>(g) + 3H<sub>2</sub>(g) ⇌ 2NH<sub>3</sub>(g) (Fe catalyst, 450°C). For multi-step reactions put each step on a new line.\n- Whenever an explanation, answer or marking guide contains several points, steps, causes, features or examples, write them as a real list: <ul><li>...</li></ul> for bullets or <ol><li>...</li></ol> for numbered items. Never squeeze them into one paragraph and never type list markers such as 1), 2), (i), (ii), - or * inside a sentence.\n- In Bangla content keep ordinary numbers and units in Bangla, but keep chemical formulas, variables and mathematical symbols in English letters.\n- Keep the JSON valid: no raw line breaks inside strings (use <br> instead) and escape any double quotes inside text.\n\nACADEMIC STANDARD FOR QUESTIONS, ANSWERS AND EXPLANATIONS (Bangladesh):\n- Everything must be consistent with the Bangladesh education system. Infer the level from the user instruction or source: Class 1-5 (primary), Class 6-8 (junior), Class 9-10 (SSC), Class 11-12 (HSC), university admission tests (Medical, Engineering/BUET, Public University, GST, Agriculture), university course exams, or job exams (BCS preliminary/written, Bank, Primary teacher, NTRCA, other recruitment tests). If the level is not stated, choose the standard that best fits the topic and keep it uniform. Never mix levels inside one set.\n- Follow NCTB textbook content, definitions, terminology, units (SI), symbols, chapter scope and difficulty for school levels; follow the typical past-paper pattern and depth for admission and recruitment exams. Use Standard Bangla (প্রমিত বাংলা) with the technical terms used in NCTB books and give the English term in brackets once when it helps, e.g. সালোকসংশ্লেষণ (Photosynthesis).\n- Accuracy first: every fact, formula, date, name and number must be correct and verifiable. Never invent statistics, years, book references or board-exam citations. If you are not sure about a fact, do not build a question on it. Each MCQ must have exactly one clearly correct option; distractors must be plausible but definitely wrong.\n- Explanation style by level: Class 1-5: very short, simple words, one or two lines. Class 6-10: textbook-style reasoning, key definition or rule first, then the reason. Class 11-12 and university: precise concept or law, derivation or mechanism in short steps. Admission and BCS/Bank: crisp concept, the shortcut or trick where one exists, and a one-line note on the common trap.\n- MCQ explanation (2 to 5 short lines): first state the correct answer with the core reason; then, only when it adds value, a short <ul> list explaining why the main distractors are wrong or giving a related fact worth remembering. Never repeat the question and never write a long essay.\n- Math and numerical problems: (1) data given and what to find, (2) formula or law, (3) substitution, (4) calculation, (5) final answer with unit, each on its own line as described above. For admission and job exams add a one-line shortcut method after the standard solution when one exists. Keep to the notation and symbols of NCTB books.\n- Physics and Chemistry numericals: write given data, formula, substitution, result with correct SI unit and sensible significant figures. Chemistry: use correct IUPAC and common names as in NCTB, balanced equations, and state conditions. Biology: use correct scientific terms, keep classification and processes in ordered steps or lists. Accounting, Economics, ICT: use the standard terms, formulas and formats taught in the curriculum.\n- English: for grammar or vocabulary items state the rule in one line and give the correct form; for synonyms and antonyms give the meaning of the answer. Bangla language and literature: be precise about grammar rules, authors, works and literary periods.\n- General Knowledge, Bangladesh Affairs, International Affairs, Mental Ability, Everyday Science (BCS and bank style): state the fact with the key context (who, when, where, why) in one to three short lines; use only well-established facts and avoid anything that changes frequently unless the source gives it.\n- True/False: explain in one or two lines why the statement is true or false; for a false statement also give the correct form. Gap Filling: put only the exact missing word or phrase in answer. Short Answer: 2 to 4 sentences or 2 to 4 list points covering the key points the examiner expects. Descriptive/Essay: a structured model answer with short bold sub-headings (<b>) and lists, with an introduction, main points in logical order, and a conclusion; length suited to the level and marks.\n- Creative questions (সৃজনশীল প্রশ্ন, as in SSC/HSC): the stimulus is a short original passage, scenario, data or figure description. For Class 6-12 Bangladeshi curriculum use exactly 4 subQuestions in this order with marks 1, 2, 3, 4: knowledge (জ্ঞানমূলক: what/define/name), comprehension (অনুধাবনমূলক: explain why/how), application (প্রয়োগমূলক: apply to the stimulus, calculate or solve), higher order (উচ্চতর দক্ষতামূলক: analyse, evaluate or justify with a clear conclusion). Do not write the labels ক, খ, গ, ঘ inside the text. Each model answer must match the cognitive level and its marks: 1 mark one line, 2 marks a short explanation, 3 marks application with steps, 4 marks reasoned analysis ending with a judgement.\n- Smart formatting of answers: lead with the answer, then the reason. Put key terms, laws and final results in <b>. Use real lists for multiple points and separate lines for steps, equations and reactions. Keep every answer compact, clean and exam-ready; do not add greetings, filler, disclaimers or sentences like Here is the explanation.\n\nEXAM HEADER AND CONSISTENCY RULES:\n- Always return a meta object written in the same language as the questions. meta.title: a proper examination title built from the subject/class/topic (for example a model test title); meta.subtitle: a short line such as class, subject or chapter; meta.marks: the total of all question marks as a number; meta.time: a sensible duration for the paper (for example 60 Minutes or ৬০ মিনিট); meta.note: one short instruction line for examinees.\n- Every question must have marks: MCQ, True/False and Gap Filling 1 each, Short Answer 2 each, Descriptive/Essay 5 each (adjust to level), Creative sets 10 in total with subQuestion marks 1, 2, 3, 4.\n- Use one consistent technical term for the same concept in every question, option, answer and explanation of the paper, following the NCTB textbook term; never alternate between two names for the same thing.\n- A fraction inside a superscript or subscript must be written with a slash (for example 2<sup>1/2</sup>), never with <frac> inside <sup> or <sub>.\n- A chemical equation, including any heat term such as + তাপ, must stay together on its own line with <br> before and after it; never put an equation in the middle of a sentence.\n\nReturn ONLY valid JSON in this schema: {"meta":{"title":"","subtitle":"","marks":"","time":"","note":""},"questions":[{"type":"mcq|tf|fill|short|desc|creative","question":"question or stimulus text","options":["A","B","C","D"],"correctIndex":0,"tfAnswer":true,"answer":"expected/model answer","explanation":"brief explanation or marking guide","marks":"1","subQuestions":[{"question":"subquestion text","marks":"1","answer":"expected answer"}]}]}\n\nRules:\n- Use type values exactly: mcq, tf, fill, short, desc, creative.\n- MCQ: exactly four options and correctIndex 0-3.\n- True/False: tfAnswer must be boolean true or false.\n- Gap Filling: write a clear sentence with a blank such as ______; put the missing text in answer.\n- Short Answer: put a concise expected answer in answer.\n- Descriptive/Essay: put the question in question and the model answer or key points in answer.\n- Creative: question is the stimulus/context; subQuestions is an array of 2-4 objects with question, marks, and answer (exactly 4 objects with marks 1, 2, 3, 4 for Bangladeshi Class 6-12 creative questions, as described in the academic standard). Keep each set grouped as one question record.\n- Include answer and explanation fields only when requested; otherwise use empty strings or omit them.\n- Follow the source language or the user's explicit language request. Preserve accurate Bangla/English text and Unicode.\n- Avoid duplicates, unsupported claims, and repeated wording. Follow the exact requested quantity for every category.\n- Figures taken from the source (optional field "figure"): when the attached image/PDF itself contains the figure, graph, circuit, map, table-picture or drawing that a question, a creative stimulus or a sub-question depends on, do NOT redraw it. Instead add "figure":{"file":N,"page":P,"box":[ymin,xmin,ymax,xmax]} where N is the 1-based number of the attached image/PDF file listed above, P is the 1-based page (1 for an image), and box is the tight bounding box of ONLY that figure (not the question text around it) in coordinates normalized to 0-1000 (0,0 is the top-left of the page, 1000,1000 the bottom-right). Put it on the question record (or inside the subQuestion object when only that part needs the figure). Use "figure" instead of "diagram" whenever the figure really exists in the source.\n- Diagrams (optional field "diagram", only when the figure is NOT present in the source or there is no source file): when a question, a creative-question stimulus or a single sub-question truly needs a figure (geometry, graph, circuit, apparatus, biology/physics/chemistry drawing, map, or any figure the text refers to, or when the source material contains such a figure), add a "diagram" string holding ONE complete self-contained SVG: <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'> (any ratio, at most 600 units wide), black strokes of width 1.5-2, no fill background, no scripts, no <image>, no external references, no gradients or filters; use ONLY single quotes for SVG attributes; label points and parts with short Latin letters or numbers in <text font-size='16'>; keep the geometry accurate to the given data. Put "diagram" on the question record (for MCQ/True-False/Gap/Short/Descriptive and for the creative stimulus) or inside the subQuestion object when only that part needs the figure. Omit it when no figure is needed.
- Return no markdown, comments, or text outside the JSON object.`;
}
const v=["gemini-3-flash-preview","gemini-3.1-flash-lite","gemini-2.5-flash-lite","gemini-2.0-flash"];async function S(t,n,i){const o=Settings.getAiSettings(),a=`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(t)}:generateContent`,s=e.filter(e=>"image"===e.kind||"pdf"===e.kind).map(e=>({inline_data:{mime_type:e.mimeType,data:e.data}})),r={contents:[{parts:[{text:y(n)},...s]}],generationConfig:{temperature:.4,responseMimeType:"application/json"}};return new Promise((e,t)=>{const n=new XMLHttpRequest;n.open("POST",a,!0),n.setRequestHeader("Content-Type","application/json"),n.setRequestHeader("x-goog-api-key",o.apiKey),n.timeout=18e4,n.upload&&i&&(n.upload.onprogress=e=>{e.lengthComputable&&i(e.loaded/e.total)}),n.onload=()=>{let o=null;try{o=JSON.parse(n.responseText)}catch(e){}if(n.status>=200&&n.status<300)return i&&i(1),void e(o||{});let a=`Request failed (${n.status})`,s=!1;o&&o.error&&o.error.message&&(a=o.error.message,s=404===n.status&&/no longer available/i.test(a));const r=new Error(a);r.retired=s||404===n.status||429===n.status||n.status>=500,r.status=n.status,t(r)},n.ontimeout=()=>{const r=new Error("The request timed out. Try again or request fewer questions.");r.retired=!0,t(r)},n.onerror=()=>{t(new Error("Network error while contacting Gemini. Check your connection and try again."))},n.send(JSON.stringify(r))})}async function E(onlyType){
  if(!Settings.getAiSettings().apiKey)return n("aiKeyHint").hidden=!1,void s("Add your Gemini API key in Settings → AI first.","error");
  if(t){if(!n("aiPromptInput").value.trim())return void s('Type a subject or topic (e.g. "Plant Physiology") first.',"error");}
  else{if(!e.length)return void s("Capture a photo or upload a file first.","error");if(e.some(x=>!x.done))return void s("Please wait for the files to finish uploading.","error");}
  const allTypes=window.__iqReadAiTypes?window.__iqReadAiTypes():[{type:"mcq",count:20}];
  const chosen=onlyType?allTypes.filter(x=>x.type===onlyType&&x.enabled):allTypes.filter(x=>x.enabled);
  if(!chosen.length)return void s("Turn on at least one question category first.","error");
  const counts=chosen.reduce((a,x)=>a+x.count,0);if(counts>120)return void s("Please generate 120 questions or fewer per request to avoid incomplete AI responses.","error");
  const promptBase=n("aiPromptInput").value.trim()||"Generate questions from this source.";
  const prompt=promptBase+"\n\nGeneration configuration: "+JSON.stringify(chosen.map(x=>({type:x.type,count:x.count})))+". Difficulty: "+((n("iqAiDifficulty")||{}).value||"mixed")+". Include answers: "+(!n("iqAiAnswers")||n("iqAiAnswers").checked)+". Include explanations: "+(!n("iqAiExplanations")||n("iqAiExplanations").checked)+". Return the requested types in the exact configured order.";
  const btn=n("btnAiGenerate"),originalLabel=btn.innerHTML;btn.disabled=!0;
  const hasBinary=e.some(x=>x.kind==="image"||x.kind==="pdf"),loading=t?I18n.t("ai.researchingTopic"):(e.length>1?I18n.t("ai.analyzingMultiple",{n:e.length}):I18n.t("ai.analyzingSingle"));s(loading,"loading");
  const progress=hasBinary?x=>{const pct=Math.round(100*x);s(pct>=100?loading:`${I18n.t("ai.uploadingPct")} ${pct}%`,"loading");}:null;
  try{
    const raw=await (async function(request,progressFn){const cfg=Settings.getAiSettings();if(!cfg.apiKey)throw new Error("MISSING_KEY");const models=[cfg.model,...v.filter(x=>x!==cfg.model)];let response=null,lastError=null;for(const model of models){try{response=await S(model,request,progressFn);if(model!==cfg.model)App.toast(I18n.t("ai.modelUnavailableFull",{requested:cfg.model,used:model}),"default");break;}catch(err){lastError=err;if(err.retired)continue;throw err;}}if(!response)throw lastError||new Error("All models are currently unavailable. Please try again later.");const candidate=response.candidates&&response.candidates[0],text=candidate&&candidate.content&&candidate.content.parts?candidate.content.parts.map(p=>p.text||"").join(""):"";if(!text)throw new Error("The model returned an empty response. Try a clearer source or smaller request.");let parsed;let clean=text.trim().replace(/^```json\s*/i,"").replace(/^```\s*/i,"").replace(/```\s*$/i,"");try{parsed=JSON.parse(clean);}catch(err){const match=clean.match(/\{[\s\S]*\}/);if(match)try{parsed=JSON.parse(match[0]);}catch(ignore){}}if(!parsed&&candidate&&"MAX_TOKENS"===candidate.finishReason)throw new Error("The AI response was cut off because it was too long. Request fewer questions and try again.");if(!parsed||!Array.isArray(parsed.questions)||!parsed.questions.length)throw new Error("Could not understand the AI response. Try reducing the requested count or rephrasing the instruction.");window.__iqAiMeta=parsed.meta||{};return parsed.questions;})(prompt,progress);
    const allowed=new Set(chosen.map(x=>x.type)),typeOrder=chosen.map(x=>x.type),labels={mcq:"MCQ",tf:"True/False",fill:"Gap Filling",short:"Short Answer",desc:"Descriptive/Essay",creative:"Creative"};
    function asText(v){if(v==null)return "";if(typeof v==="string"||typeof v==="number")return String(v);if(typeof v==="object"&&typeof v.html==="string")return v.html;return String(v);}
    function fx(v){
      let s=String(v==null?"":v).replace(/\r\n?/g,"\n").trim();
      if(!s)return "";
      /* pseudo tags -> real markup (innermost first) */
      const mapTxt=(str,fn)=>{let depth=0;return str.split(/(<[^>]+>)/).map((seg,i)=>{if(i%2){if(/^<(sup|sub)\b/i.test(seg))depth++;else if(/^<\/(sup|sub)>/i.test(seg))depth=Math.max(0,depth-1);return seg}return depth?seg:fn(seg)}).join("")};
      const FRAC=(a,b)=>'<span class="iq-fr"><span class="iq-fr-n">'+String(a).trim()+'</span><span class="iq-fr-d">'+String(b).trim()+'</span></span>';
      const PO='<span class="iq-par">(</span>',PC='<span class="iq-par">)</span>';
      /* a fraction inside a superscript/subscript must stay inline: 1/2 */
      s=s.replace(/<(sup|sub)>([\s\S]*?)<\/\1>/gi,(m,tg,x)=>'<'+tg+'>'+x.replace(/<frac>([\s\S]*?)<over>([\s\S]*?)<\/frac>/gi,'$1/$2')+'</'+tg+'>');
      const FR=/<frac>((?:(?!<frac>|<\/frac>)[\s\S])*?)<over>((?:(?!<frac>|<\/frac>|<over>)[\s\S])*?)<\/frac>/i;
      const FRP=/\(\s*<frac>((?:(?!<frac>|<\/frac>)[\s\S])*?)<over>((?:(?!<frac>|<\/frac>|<over>)[\s\S])*?)<\/frac>\s*\)/i;
      for(let g=0;g<40&&(FRP.test(s)||FR.test(s));g++){s=FRP.test(s)?s.replace(FRP,(m,a,b)=>PO+FRAC(a,b)+PC):s.replace(FR,(m,a,b)=>FRAC(a,b));}
      const SQ=/<sqrt>((?:(?!<sqrt>|<\/sqrt>)[\s\S])*?)<\/sqrt>/i;
      for(let g=0;g<20&&SQ.test(s);g++)s=s.replace(SQ,(m,a)=>{const t=a.replace(/<[^>]+>/g,'').trim();return '\u221A'+(/[\s+\-\u2212\u00D7\u00F7\u00B1=<>]/.test(t)?'('+a+')':a);});
      s=s.replace(/<\/?(?:frac|over|sqrt)>/gi,"");
      /* parenthesised numerator like (a+b)/2 or (৮ + ৩)/১২ -> stacked */
      s=mapTxt(s,seg=>seg.replace(/(^|[^A-Za-z0-9\u0980-\u09FF])\(([^()<>\/]{1,40})\)\s*\/\s*(\([^()<>\/]{1,40}\)|[0-9\u09E6-\u09EF]+|[A-Za-z])(?![\w\/.\u0980-\u09FF])/g,(m,p,a,b)=>p+FRAC(a,b.replace(/^\(([\s\S]*)\)$/,"$1"))));
      /* plain numeric fractions like 3/4 or ২/৩ -> stacked (skips dates, units, a/b words) */
      s=mapTxt(s,seg=>seg.replace(/(^|[^\w\/.\u0980-\u09FF])([0-9\u09E6-\u09EF]+)\/([0-9\u09E6-\u09EF]+)(?![\w\/.\u0980-\u09FF])/g,(m,p,a,b)=>p+FRAC(a,b)));
      /* light markdown / plain notation fallbacks */
      s=s.replace(/\*\*([^*\n]+)\*\*/g,"<b>$1</b>");
      s=s.replace(/<=>|<->|\u21C4/g,"\u21CC").replace(/-->|->/g,"\u2192");
      s=s.replace(/\^(\d*[+\-])(?![\w])/g,"<sup>$1</sup>").replace(/\^\{([^{}]*)\}/g,"<sup>$1</sup>").replace(/\^(\d+|[A-Za-z])(?![A-Za-z0-9])/g,"<sup>$1</sup>");
      s=s.replace(/_\{([^{}]*)\}/g,"<sub>$1</sub>").replace(/([A-Za-z0-9)\]])_(\d+|[a-z])(?![A-Za-z0-9_])/g,"$1<sub>$2</sub>");
      /* plain ASCII chemical formulas (H2O, CO2, Ca(OH)2 ...) outside tags */
      const CH=/(^|[^A-Za-z])((?:[A-Z][a-z]?\d*|\((?:[A-Z][a-z]?\d*)+\)\d*){2,}|(?:H|O|N|F|Cl|Br)2)(?![A-Za-z0-9])/g;
      s=mapTxt(s,seg=>seg.replace(CH,(m,p,t)=>/\d/.test(t)?p+t.replace(/(\d+)/g,"<sub>$1</sub>"):m));
      /* neutralise stray "<" that is not an allowed bare tag (e.g. a<b) */
      s=s.replace(/<(?!\/?(?:sub|sup|br|ul|ol|li|b|strong|i|em|u|span|font|div)\s*\/?>|span style=|span class=)/gi,"&lt;");
      /* lists + line breaks */
      s=s.replace(/<br\s*\/?>/gi,"\n");
      const bn=/[\u0980-\u09FF]/.test(s);
      if(/<(?:ul|ol|li)\b/i.test(s)){
        s=s.replace(/\s*\n\s*(<\/?(?:ul|ol|li)\b)/gi,"$1").replace(/(<\/?(?:ul|ol|li)\b[^>]*>)\s*\n\s*/gi,"$1").replace(/\n+/g,"<br>");
      }else{
        const BUL=/^(?:[-*\u2022\u25CF\u25AA\u25E6\u2013])\s+(.+)$/,NUM=/^(?:\(?([0-9\u09E6-\u09EF]{1,2})[.)\u0964]|\(([0-9\u09E6-\u09EF]{1,2})\))\s+(.+)$/;
        let out="",mode=null,buf=[],needBr=false,bnNum=false;
        const flush=()=>{if(!buf.length)return;out+=(needBr?"<br>":"")+"<"+mode+(mode==="ol"&&bnNum?' style="list-style-type:bengali"':"")+">"+buf.map(x=>"<li>"+x+"</li>").join("")+"</"+mode+">";buf=[];mode=null;needBr=false;};
        s.split("\n").forEach(line=>{
          const t=line.trim();let m;
          if(m=t.match(BUL)){if(mode!=="ul")flush();mode="ul";buf.push(m[1]);}
          else if(m=t.match(NUM)){if(mode!=="ol")flush();mode="ol";bnNum=/[\u09E6-\u09EF]/.test(m[1]||m[2]||"");buf.push(m[3]);}
          else{flush();if(t){out+=(needBr?"<br>":"")+t;needBr=true;}}
        });
        flush();
        /* a list directly after text needs no extra <br> because lists are blocks */
        s=out.replace(/<br>(<(?:ul|ol)\b)/g,"$1");
      }
      return Utils.sanitizeHtml(s);
    }
    function isTrue(v){return v===true||String(v).toLowerCase()==="true"||String(v).toLowerCase()==="সত্য";}
    const orderedRaw=raw.filter(q=>q&&allowed.has(String(q.type||"mcq").toLowerCase())).sort((a,b)=>typeOrder.indexOf(String(a.type||"mcq").toLowerCase())-typeOrder.indexOf(String(b.type||"mcq").toLowerCase()));
    const FIG=v=>(window.__iqFig?window.__iqFig(v):"");
    try{await window.__iqCropFigures(orderedRaw,e.filter(x=>x.kind==="image"||x.kind==="pdf"));}catch(err){console.warn("Figure extraction skipped:",err);}
    const converted=orderedRaw.map(item=>{
      const type=String(item.type||"mcq").toLowerCase(),question=asText(item.question||item.stimulus||"").trim(),answer=asText(item.answer||item.modelAnswer||item.answerHtml||"").trim(),explanation=asText(item.explanation||item.markingGuide||"").trim();
      const q={id:Utils.uid("q"),question:{html:fx(question)+(item._figHtml||FIG(item.diagram))},optionsLayout:"vertical",explanationHtml:(n("iqAiExplanations")&&n("iqAiExplanations").checked)?fx(explanation):"",options:[],marks:(item.marks==null||String(item.marks).trim()==="")?(({mcq:"1",tf:"1",fill:"1",short:"2",desc:"5"})[type]||""):String(item.marks)};
      if(type==="mcq") {const opts=Array.isArray(item.options)?item.options:[];const correct=Number.isInteger(item.correctIndex)?item.correctIndex:0;q.options=opts.slice(0,8).map((opt,index)=>({id:["a","b","c","d","e","f","g","h"][index]||String(index),html:fx(asText(opt).trim()),correct:index===correct}));if(q.options.length<2||!question)return null;}
      else if(type==="tf"){q.type="tf";q.tfAnswer=typeof item.tfAnswer==="boolean"?item.tfAnswer:isTrue(item.answer);if(typeof item.tfAnswer!=="boolean"&&item.answer==null)q.tfAnswer=null;if(!question)return null;}
      else if(type==="fill"){q.type="fill";q.answer={html:(n("iqAiAnswers")&&n("iqAiAnswers").checked)?fx(answer):""};if(!question)return null;}
      else if(type==="short"){q.type="short";q.answer={html:(n("iqAiAnswers")&&n("iqAiAnswers").checked)?fx(answer||explanation):""};if(!question)return null;}
      else if(type==="desc"){q.type="desc";q.answer={html:(n("iqAiAnswers")&&n("iqAiAnswers").checked)?fx(answer):""};if(!question)return null;}
      else if(type==="creative"){q.type="creative";const subs=Array.isArray(item.subQuestions)?item.subQuestions:[];q.subQuestions=subs.slice(0,8).map(sub=>({id:Utils.uid("sq"),html:fx(asText(sub.question||sub.text||"").trim())+(sub._figHtml||FIG(sub.diagram)),marks:sub.marks==null?"":String(sub.marks),answerHtml:(n("iqAiAnswers")&&n("iqAiAnswers").checked)?fx(asText(sub.answer||"").trim()):""}));if(!question||!q.subQuestions.length)return null;}
      if(window.QTypes&&QTypes.ensure)QTypes.ensure(q);return q;
    }).filter(Boolean);
    if(!converted.length)throw new Error("The AI returned no usable questions for the selected categories. Try again with clearer instructions.");
    const actual=Object.create(null);converted.forEach(q=>{const typ=window.QTypes&&QTypes.typeOf?QTypes.typeOf(q):(q.type||"mcq");actual[typ]=(actual[typ]||0)+1;});
    const expected=chosen.map(x=>`${labels[x.type]}: ${actual[x.type]||0}/${x.count}`).filter((_,i)=>true);
    const current=State.get();
    if(onlyType){current.questions=current.questions.filter(q=>(window.QTypes&&QTypes.typeOf?QTypes.typeOf(q):(q.type||"mcq"))!==onlyType||Utils.isQuestionEmpty(q));current.questions=current.questions.filter(q=>(window.QTypes&&QTypes.typeOf?QTypes.typeOf(q):(q.type||"mcq"))!==onlyType);current.questions.push(...converted);}
    else if(Settings.getAiSettings().insertMode==="replace"){current.questions=converted;}
    else {current.questions=current.questions.filter(q=>!Utils.isQuestionEmpty(q));current.questions.push(...converted);}
    if(converted.some(q=>/\p{Script=Bengali}/u.test(Utils.stripHtml(q.question.html||"")))){if(I18n.get()!=="bn"){I18n.setLanguage("bn");State.setLanguage("bn");document.body.setAttribute("data-doc-lang","bn");document.querySelectorAll(".lang-switch__btn").forEach(x=>x.classList.toggle("is-active",x.dataset.lang==="bn"));Settings.populateFontOptions();current.settings.fontFamily="Noto Serif Bengali";const font=n("selFontFamily");if(font)font.value="Noto Serif Bengali";}}
    (function(){var meta=window.__iqAiMeta||{},d=current.document,tot=0,BD="০১২৩৪৫৬৭৮৯",pm=function(v){var x=parseFloat(String(v==null?"":v).replace(/[০-৯]/g,function(c){return BD.indexOf(c)}));return isFinite(x)?x:0};
      current.questions.forEach(function(q){if(Utils.isQuestionEmpty(q))return;var m=pm(q.marks);if(!m&&q.subQuestions)m=q.subQuestions.reduce(function(a,sq){return a+pm(sq.marks)},0);tot+=m});
      if(tot>0)meta.marks=I18n.get()==="bn"?String(tot).replace(/[0-9]/g,function(c){return BD[+c]}):String(tot);
      [["title","inpTitle"],["subtitle","inpSubtitle"],["marks","inpMarks"],["time","inpTime"],["note","inpNote"]].forEach(function(pr){if(!String(d[pr[0]]||"").trim()&&meta[pr[0]]){d[pr[0]]=String(meta[pr[0]]);var el=n(pr[1]);if(el){el.value=d[pr[0]];Utils.applyAutoFont(el,!1)}}});
    })();
    Editor.renderQuestions();Preview.update(!0);s("");if(!onlyType)b();
    const mismatch=chosen.some(x=>(actual[x.type]||0)!==x.count);const summary=expected.join(" · ");App.toast(`${converted.length} questions added. ${summary}`,mismatch?"default":"success");
    if(mismatch)s(`Generated ${converted.length} usable questions, but some requested counts differ: ${summary}. You can retry the missing category.`,"error");
  }catch(err){console.error(err);if(err.message==="MISSING_KEY"){n("aiKeyHint").hidden=!1;s("Add your Gemini API key in Settings → AI first.","error");}else if(err.message==="MISSING_IMAGE")s("Capture a photo or upload a file first.","error");else if(err.message==="MISSING_TOPIC")s("Type a subject or topic first.","error");else s(err.message||"Something went wrong. Please try again.","error");}
  finally{btn.disabled=!1;btn.innerHTML=originalLabel;window.lucide&&lucide.createIcons();}
}
function w(){Utils.applyAutoFont(n("aiPromptInput"),!1)}return{bindEvents:function(){
  (function initAiTypeControls(){
    const list=n("iqAiTypeList");if(!list)return;
    const storageKey="intelliques.aiQuestionTypes.v1";
    function rows(){return Array.from(list.querySelectorAll(".iq-ai-type"));}function readCount(row){const inp=row.querySelector("[data-ai-count]");return Math.max(1,Math.min(100,parseInt(inp&&inp.value,10)||Number(row.dataset.count)||1));}function updateTotal(){const el=document.getElementById("iqAiTotal");if(!el)return;let tot=0;rows().forEach(r=>{if(r.querySelector("[data-ai-enabled]").checked)tot+=readCount(r);});el.textContent=(I18n.get()==="bn"?"মোট: ":"Total: ")+tot;}
    function syncDisabled(){rows().forEach(row=>{const on=row.querySelector("[data-ai-enabled]").checked;row.classList.toggle("is-disabled",!on);const ci=row.querySelector("[data-ai-count]");if(ci)ci.disabled=!on;});updateTotal();}
    function persist(){try{localStorage.setItem(storageKey,JSON.stringify(rows().map(row=>({type:row.dataset.aiType,enabled:row.querySelector("[data-ai-enabled]").checked,count:readCount(row)}))));}catch(ignore){}}
    try{const saved=JSON.parse(localStorage.getItem(storageKey)||"null");if(Array.isArray(saved)){saved.forEach(item=>{const row=list.querySelector('[data-ai-type="'+item.type+'"]');if(!row)return;row.querySelector("[data-ai-enabled]").checked=!!item.enabled;if(item.count){const ci=row.querySelector("[data-ai-count]");if(ci)ci.value=Math.max(1,Math.min(100,parseInt(item.count,10)||1));}list.appendChild(row);});}}catch(ignore){}
    window.__iqReadAiTypes=function(){return rows().map(row=>({type:row.dataset.aiType,enabled:row.querySelector("[data-ai-enabled]").checked,count:readCount(row)}));};
    list.addEventListener("change",ev=>{if(ev.target.matches("[data-ai-enabled]")){syncDisabled();persist();}});list.addEventListener("input",ev=>{if(ev.target.matches("[data-ai-count]")){updateTotal();persist();}});list.addEventListener("change",ev=>{if(ev.target.matches("[data-ai-count]")){ev.target.value=readCount(ev.target.closest(".iq-ai-type"));updateTotal();persist();}});
    let drag=null;list.addEventListener("pointerdown",ev=>{const handle=ev.target.closest(".iq-ai-drag");if(!handle)return;const row=handle.closest(".iq-ai-type");if(!row)return;drag={row,pointerId:ev.pointerId};row.classList.add("is-dragging");try{handle.setPointerCapture(ev.pointerId);}catch(ignore){}ev.preventDefault();});
    list.addEventListener("pointermove",ev=>{if(!drag)return;const target=document.elementFromPoint(ev.clientX,ev.clientY);const over=target&&target.closest(".iq-ai-type");rows().forEach(row=>row.classList.toggle("is-drop-target",row===over&&row!==drag.row));if(over&&over!==drag.row){const rect=over.getBoundingClientRect();list.insertBefore(drag.row,ev.clientY<rect.top+rect.height/2?over:over.nextSibling);}});
    function finishDrag(){if(!drag)return;drag.row.classList.remove("is-dragging");rows().forEach(row=>row.classList.remove("is-drop-target"));drag=null;persist();}
    list.addEventListener("pointerup",finishDrag);list.addEventListener("pointercancel",finishDrag);syncDisabled();
  })();
  n("btnAiMode").addEventListener("click",()=>h({})),n("btnAiStartCamera").addEventListener("click",l),n("btnAiPickFile").addEventListener("click",()=>n("aiFileInput").click()),n("btnAiAddMore").addEventListener("click",()=>n("aiFileInput").click()),n("btnCloseAiModal").addEventListener("click",b),n("btnAiCancel").addEventListener("click",b),n("btnAiGenerate").addEventListener("click",()=>E()),n("chkAiCustomPrompt").addEventListener("change",e=>a(e.target.checked)),n("aiPromptInput").addEventListener("input",w),n("aiModalOverlay").addEventListener("click",e=>{"aiModalOverlay"===e.target.id&&b()}),n("aiFileInput").addEventListener("change",e=>{u(e.target.files),e.target.value=""}),n("aiCameraInput").addEventListener("change",e=>{u(e.target.files),e.target.value=""}),document.querySelectorAll(".ai-chip").forEach(e=>{e.addEventListener("click",()=>function(e,t){const i=n("aiPromptInput"),o={en:" Write the questions in English. ",bn:" প্রশ্নগুলো বাংলায় লিখুন। ",math:" Focus on mathematical/numerical problems, preserving equations and symbols accurately. ",30:" Generate exactly 30 questions. ",50:" Generate exactly 50 questions. "},a=o[e];if(!a)return;const s=a.trim();if(i.value.includes(s))i.value=i.value.replace(a," ").replace(s,"").replace(/\s{2,}/g," ").trim(),t&&t.classList.remove("is-active");else{const n="en"===e||"bn"===e?["en","bn"]:30==e||50==e?[30,50]:null;n&&n.forEach(e=>{const t=(o[e]||"").trim();t&&i.value.includes(t)&&(i.value=i.value.replace(o[e]," ").replace(t,"").replace(/\s{2,}/g," ").trim());const n=document.querySelector(`.ai-chip[data-chip="${e}"]`);n&&n.classList.remove("is-active")}),i.value=(i.value.trim()+a).trim(),t&&t.classList.add("is-active")}i.focus(),w()}(e.dataset.chip,e))}),document.addEventListener("keydown",e=>{"Escape"!==e.key||n("aiModalOverlay").hidden||b()})},openModal:h,closeModal:b}})(),App=(()=>{function e(e,t="default"){const n=document.getElementById("toastContainer"),i=document.createElement("div");i.className="toast"+("error"===t?" toast--error":"success"===t?" toast--success":""),"bn"===I18n.get()&&i.setAttribute("data-i18n-font","");const o="error"===t?"alert-circle":"success"===t?"check-circle":"info";i.innerHTML=`<i data-lucide="${o}"></i><span>${function(e){const t=document.createElement("div");return t.textContent=e,t.innerHTML}(e)}</span>`,n.appendChild(i),window.lucide&&lucide.createIcons(),setTimeout(()=>{i.classList.add("is-leaving"),setTimeout(()=>i.remove(),200)},2600)}function t(){State.resetToDefault();const t=State.get();t.language="en",t.settings.pageSize="A4",t.settings.pageColor="#FFFFFF",t.settings.zoom=100,t.settings.fontFamily="Times New Roman",t.settings.fontSize=10,t.questions=[State.freshQuestion()],Storage.clear(),o(),e(I18n.t("toast.documentReset"),"success")}function n(){Storage.save()&&e(I18n.t("toast.savedSuccess"),"success")}function i(e){const t="bn"===e?"data-ph-bn":"data-ph-en";document.querySelectorAll(".header-card [data-ph-en]").forEach(e=>{const n=e.getAttribute(t);n&&e.setAttribute("placeholder",n)})}function o(){const e=State.get();document.body.setAttribute("data-doc-lang",e.language),document.documentElement.setAttribute("data-theme",e.settings.theme),document.querySelectorAll(".lang-switch__btn").forEach(t=>{t.classList.toggle("is-active",t.dataset.lang===e.language)}),i(e.language),function(){const e=State.get().document;document.getElementById("inpTitle").value=e.title||"",document.getElementById("inpSubtitle").value=e.subtitle||"",document.getElementById("inpMarks").value=e.marks||"",document.getElementById("inpTime").value=e.time||"",document.getElementById("inpNote").value=e.note||"",["inpTitle","inpSubtitle","inpMarks","inpTime","inpNote"].forEach(e=>{Utils.applyAutoFont(document.getElementById(e),!1)})}(),Settings.syncFormFromState(),Editor.renderQuestions(),Preview.updateImmediate(!0);const t=document.getElementById("previewContainer"),n=e.settings.pageSize,o=Preview.PAGE_SIZES_MM[n]||Preview.PAGE_SIZES_MM.A4;t.style.aspectRatio=`${o.w} / ${o.h}`;const a=Preview.computeFitZoom();e.settings.fitZoom=a,e.settings.zoom=100,document.getElementById("paperWrap").style.transform=`scale(${a/100})`,document.getElementById("zoomValue").textContent="100%",window.lucide&&lucide.createIcons()}return document.addEventListener("DOMContentLoaded",function(){const a=Storage.load();if(a){const e=Object.assign(State.defaultState(),a);State.replaceAll(e)}const s=State.get();I18n.init(s.language);const r=Preview.PAGE_SIZES_MM[s.settings.pageSize]||Preview.PAGE_SIZES_MM.A4,l=document.getElementById("previewContainer");if(l&&(l.style.aspectRatio=`${r.w} / ${r.h}`),Settings.buildColorPresets(),Editor.initToolbar(),[["inpTitle","title"],["inpSubtitle","subtitle"],["inpMarks","marks"],["inpTime","time"],["inpNote","note"]].forEach(([e,t])=>{const n=document.getElementById(e);Utils.bindAutoFont(n),n.addEventListener("input",Utils.debounce(()=>{State.setDocField(t,n.value),Preview.update()},120))}),document.getElementById("btnZoomIn").addEventListener("click",()=>{const e=State.get().settings,t=Utils.clamp(e.zoom+10,50,200);e.zoom=t,Preview.applyZoom()}),document.getElementById("btnZoomOut").addEventListener("click",()=>{const e=State.get().settings,t=Utils.clamp(e.zoom-10,50,200);e.zoom=t,Preview.applyZoom()}),document.getElementById("zoomValue").addEventListener("click",()=>{const e=State.get().settings;e.zoom=100;const t=Preview.computeFitZoom();e.fitZoom=t;const n=t/100;document.getElementById("paperWrap").style.transform=`scale(${n})`,document.getElementById("zoomValue").textContent="100%"}),function(){const e=document.querySelectorAll(".mobile-tabs__btn");e.forEach(t=>{t.addEventListener("click",()=>{e.forEach(e=>e.classList.toggle("is-active",e===t));const n=t.dataset.tab;document.getElementById("panelInput").classList.toggle("is-active-mobile","input"===n),document.getElementById("panelPreview").classList.toggle("is-active-mobile","preview"===n)})}),document.getElementById("panelInput").classList.add("is-active-mobile")}(),document.getElementById("btnSave").addEventListener("click",n),document.getElementById("btnReset").addEventListener("click",t),function(){const e=document.getElementById("comingSoonOverlay"),t=document.getElementById("comingSoonTitle"),n=document.getElementById("comingSoonMessage"),i=document.getElementById("comingSoonIcon");function o(){e.hidden=!0}function a(a,s,r){t.textContent=I18n.t(a),n.textContent=I18n.t(s),i.setAttribute("data-lucide",r),e.hidden=!1,window.lucide&&lucide.createIcons()}document.getElementById("btnHistory").addEventListener("click",()=>a("comingSoon.historyTitle","comingSoon.historyMessage","history")),document.getElementById("btnCloseComingSoon").addEventListener("click",o),document.getElementById("btnCloseComingSoon2").addEventListener("click",o),e.addEventListener("click",t=>{"comingSoonOverlay"===t.target.id&&o()}),document.addEventListener("keydown",t=>{"Escape"!==t.key||e.hidden||o()})}(),function(){const e=document.getElementById("btnDownload"),t=document.getElementById("downloadMenu"),n=document.getElementById("downloadMenuPanel"),i=n.parentElement,o=n.nextSibling;function a(){n.hidden=!0,e.setAttribute("aria-expanded","false"),n.parentElement!==i&&i.insertBefore(n,o)}e.addEventListener("click",t=>{t.stopPropagation(),PdfGen.hasAnswerKey()?n.hidden?function(){document.body.appendChild(n);const t=e.getBoundingClientRect();n.style.top=t.bottom+6+"px",n.style.left="auto",n.style.right=window.innerWidth-t.right+"px",n.hidden=!1,e.setAttribute("aria-expanded","true")}():a():PdfGen.downloadQuestionPaperOnly()}),document.getElementById("btnDownloadQuestionsOnly").addEventListener("click",()=>{a(),PdfGen.downloadQuestionPaperOnly()}),document.getElementById("btnDownloadAnswersOnly").addEventListener("click",()=>{a(),PdfGen.downloadAnswerKeyOnly()}),document.addEventListener("click",e=>{n.hidden||t.contains(e.target)||n.contains(e.target)||a()}),document.addEventListener("keydown",e=>{"Escape"!==e.key||n.hidden||a()})}(),function(){const e=document.getElementById("btnPreviewMode"),t=document.getElementById("previewMenu"),n=document.getElementById("previewMenuPanel"),i=n.parentElement,o=n.nextSibling;function a(){n.hidden=!0,e.setAttribute("aria-expanded","false"),n.parentElement!==i&&i.insertBefore(n,o)}function s(){document.body.appendChild(n);const t=e.getBoundingClientRect();n.style.top=t.bottom+6+"px",n.style.left="auto",n.style.right=window.innerWidth-t.right+"px",n.hidden=!1,e.setAttribute("aria-expanded","true")}function r(t){Preview.setShowAnswers(t),e.classList.toggle("is-active",t),document.getElementById("btnPreviewQuestion").setAttribute("aria-pressed",t?"false":"true"),document.getElementById("btnPreviewAnswer").setAttribute("aria-pressed",t?"true":"false"),Preview.updateImmediate()}e.addEventListener("click",e=>{e.stopPropagation(),n.hidden?s():a()}),document.getElementById("btnPreviewQuestion").addEventListener("click",()=>{a(),r(!1)}),document.getElementById("btnPreviewAnswer").addEventListener("click",()=>{a(),r(!0)}),document.addEventListener("click",e=>{n.hidden||t.contains(e.target)||n.contains(e.target)||a()}),document.addEventListener("keydown",e=>{"Escape"!==e.key||n.hidden||a()})}(),document.querySelectorAll(".lang-switch__btn").forEach(e=>{e.addEventListener("click",()=>{return t=e.dataset.lang,I18n.setLanguage(t),State.setLanguage(t),document.body.setAttribute("data-doc-lang",t),document.querySelectorAll(".lang-switch__btn").forEach(e=>{e.classList.toggle("is-active",e.dataset.lang===t)}),i(t),Settings.populateFontOptions(),Editor.renderQuestions(),void Preview.update();var t})}),Settings.bindEvents(),AiGenerator.bindEvents(),o(),a&&e(I18n.t("toast.restoredProject"),"default"),window.lucide&&lucide.createIcons(),window.ResizeObserver){const e=new ResizeObserver(Utils.debounce(()=>{const e=State.get(),t=Preview.computeFitZoom();e.settings.fitZoom=t,100===e.settings.zoom&&(document.getElementById("paperWrap").style.transform=`scale(${t/100})`)},200)),t=document.getElementById("previewContainer");t&&e.observe(t)}window.requestIdleCallback?requestIdleCallback(()=>PdfGen.prefetchLibsInBackground(),{timeout:4e3}):setTimeout(()=>PdfGen.prefetchLibsInBackground(),2e3)}),{toast:e,requestReset:t,requestDeleteQuestion:function(t){const n=State.get();if(1===n.questions.length)return State.updateQuestionHtml(t,""),window.QTypes&&QTypes.clearExtra(n.questions[0]),n.questions[0].options.forEach(e=>e.html=""),Editor.renderQuestions(),Preview.update(),void e(I18n.t("toast.questionCleared"),"success");State.deleteQuestion(t),Editor.renderQuestions(),Preview.update(),e(I18n.t("toast.questionDeleted"),"success")},handleSave:n}})();
;

/* ===== block ===== */
/*
 * IntelliQues — universal question types (additive module)
 *
 * Loaded AFTER app.js and BEFORE history.js. app.js calls into this file through
 * small, guarded hooks (`window.QTypes && ...`), so if this file fails to load the
 * app keeps working exactly as the original MCQ-only editor.
 *
 * DATA MODEL (backward compatible)
 * --------------------------------
 * Legacy MCQ (unchanged, still valid, no migration needed):
 *   { id, question:{html}, optionsLayout, explanationHtml, options:[{id,html,correct}] }
 *
 * A question with no `type` field is an MCQ. New optional fields:
 *   type          "mcq" | "tf" | "fill" | "short" | "desc" | "creative"
 *   marks         string, optional, per-question marks (any type, incl. MCQ)
 *   tfAnswer      true | false | null           (type "tf")
 *   answer        { html }                      (fill: expected answer, short: expected
 *                                                answer, desc: model answer)
 *   explanationHtml                              (mcq/tf: explanation, short: marking guide)
 *   subQuestions  [{ id, html, marks, answerHtml }]   (type "creative"; question.html = stimulus)
 *
 * Every question keeps an `options` array (empty for non-MCQ types) so older code paths that
 * read `q.options` keep working. Switching type never deletes the other type's data, so
 * switching back restores it.
 */
(function () {
  "use strict";

  var TYPES = ["mcq", "creative", "tf", "fill", "short", "desc"];

  var STR = {
    bn: {
      typeLabel: "প্রশ্নের ধরন",
      marks: "মান",
      types: {
        mcq: "বহুনির্বাচনি (MCQ)",
        tf: "সত্য / মিথ্যা",
        fill: "শূন্যস্থান পূরণ",
        short: "সংক্ষিপ্ত প্রশ্ন",
        desc: "রচনামূলক প্রশ্ন",
        creative: "সৃজনশীল প্রশ্ন"
      },
      qWord: "প্রশ্ন",
      tfTrue: "সত্য",
      tfFalse: "মিথ্যা",
      tfStatement: "বিবৃতি লিখুন...",
      tfAnswerLbl: "সঠিক উত্তর",
      explLbl: "ব্যাখ্যা..",
      explPh: "ব্যাখ্যা লিখুন (ঐচ্ছিক)...",
      questionPh: "প্রশ্ন লিখুন...",
      fillPh: "প্রশ্ন লিখুন — ফাঁকা স্থানের জন্য _____ ব্যবহার করুন...",
      addBlank: "ফাঁকা যোগ করুন",
      fillAnsLbl: "সঠিক উত্তর..",
      fillAnsPh: "ফাঁকা স্থানের উত্তর লিখুন (একাধিক হলে কমা দিয়ে)...",
      shortAnsLbl: "উত্তর..",
      shortAnsPh: "উত্তর লিখুন...",
      markGuideLbl: "ব্যাখ্যা..",
      markGuidePh: "ব্যাখ্যা (ঐচ্ছিক)...",
      descAnsLbl: "উত্তর..",
      descAnsPh: "উত্তর (ঐচ্ছিক)...",
      stimulusPh: "উদ্দীপক লিখুন...",
      stimulusLbl: "উদ্দীপক",
      answerLbl: "উত্তর",
      totalLbl: "মোট নম্বর",
      levels: ["জ্ঞানমূলক", "অনুধাবনমূলক", "প্রয়োগমূলক", "উচ্চতর দক্ষতা"],
      subPh: "উপপ্রশ্ন লিখুন...",
      subAnsPh: "উত্তর (ঐচ্ছিক)...",
      addSub: "উপপ্রশ্ন যোগ করুন",
      delSub: "উপপ্রশ্ন মুছুন",
      docAnswer: "উত্তর",
      docModel: "উত্তর",
      docGuide: "ব্যাখ্যা",
      docExpl: "ব্যাখ্যা"
    },
    en: {
      typeLabel: "Question type",
      marks: "Marks",
      types: {
        mcq: "MCQ",
        creative: "CQ",
        tf: "True/False",
        fill: "Blanks Ques.",
        short: "Short Ques.",
        desc: "Broad Ques."
      },
      qWord: "Q",
      tfTrue: "True",
      tfFalse: "False",
      tfStatement: "Type the statement...",
      tfAnswerLbl: "Correct answer",
      explLbl: "Explanation..",
      explPh: "Explain the answer (optional)...",
      questionPh: "Type your question...",
      fillPh: "Type the question — use _____ where the blank goes...",
      addBlank: "Insert blank",
      fillAnsLbl: "Expected answer..",
      fillAnsPh: "Type the answer for the blank (comma-separated if several)...",
      shortAnsLbl: "Answer..",
      shortAnsPh: "Type the answer...",
      markGuideLbl: "Explanation..",
      markGuidePh: "Explanation (optional)...",
      descAnsLbl: "Answer..",
      descAnsPh: "Answer (optional)...",
      stimulusPh: "Type the stimulus / passage...",
      stimulusLbl: "Stimulus",
      answerLbl: "Answer",
      totalLbl: "Total marks",
      levels: ["Knowledge", "Comprehension", "Application", "Higher-order"],
      subPh: "Type the sub-question...",
      subAnsPh: "Answer (optional)...",
      addSub: "Add sub-question",
      delSub: "Delete sub-question",
      docAnswer: "Answer",
      docModel: "Answer",
      docGuide: "Explanation",
      docExpl: "Explanation"
    }
  };

  function S(lang) {
    return lang === "bn" ? STR.bn : STR.en;
  }

  /* ------------------------------------------------------------------ helpers */

  function strip(html) {
    return Utils.stripHtml(html || "");
  }

  function typeOf(q) {
    return q && TYPES.indexOf(q.type) !== -1 ? q.type : "mcq";
  }

  function findQ(id) {
    return State.get().questions.find(function (q) {
      return q.id === id;
    });
  }

  function esc(s) {
    return DocRenderer.escapeHtml(String(s == null ? "" : s));
  }

  var BN_DIGITS = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  function localizeDigits(str, lang) {
    str = String(str == null ? "" : str);
    if (lang !== "bn") return str;
    return str.replace(/[0-9]/g, function (d) {
      return BN_DIGITS[+d];
    });
  }

  function parseMarks(v) {
    // accepts "5", "৫", "2.5"
    var s = String(v == null ? "" : v).replace(/[০-৯]/g, function (d) {
      return String(BN_DIGITS.indexOf(d));
    });
    var n = parseFloat(s);
    return isFinite(n) ? n : 0;
  }

  function subLabel(i, lang) {
    var l = Utils.optionLabel(i, lang === "bn" ? "bn" : "en");
    return lang === "bn" ? l : String(l).toLowerCase();
  }

  function defaultSubs() {
    return [1, 2, 3, 4].map(function (m) {
      return { id: Utils.uid("sq"), html: "", marks: String(m), answerHtml: "" };
    });
  }

  /* ------------------------------------------------------- model / validation */

  // Fill in missing containers for the question's current type. Never deletes data.
  function ensure(q) {
    if (!q) return q;
    if (!q.question || typeof q.question !== "object") q.question = { html: "" };
    if (!Array.isArray(q.options)) q.options = [];
    var t = typeOf(q);
    if (t === "tf" && q.tfAnswer !== true && q.tfAnswer !== false) q.tfAnswer = null;
    if ((t === "fill" || t === "short" || t === "desc") && (!q.answer || typeof q.answer !== "object")) {
      q.answer = { html: "" };
    }
    if (t === "creative" && !Array.isArray(q.subQuestions)) q.subQuestions = defaultSubs();
    return q;
  }

  function isEmpty(q) {
    switch (typeOf(q)) {
      case "tf":
      case "fill":
      case "short":
      case "desc":
        return strip(q.question && q.question.html) === "";
      case "creative":
        return (
          strip(q.question && q.question.html) === "" &&
          (q.subQuestions || []).every(function (s) {
            return strip(s.html) === "";
          })
        );
      default:
        // legacy MCQ rule, unchanged
        return (
          strip(q.question && q.question.html) === "" &&
          (q.options || []).every(function (o) {
            return strip(o.html) === "";
          })
        );
    }
  }

  function hasAnswer(q) {
    switch (typeOf(q)) {
      case "tf":
        return q.tfAnswer === true || q.tfAnswer === false;
      case "fill":
      case "short":
      case "desc":
        return !!q.answer && strip(q.answer.html) !== "";
      case "creative":
        return (q.subQuestions || []).some(function (s) {
          return strip(s.answerHtml) !== "";
        });
      default:
        return (q.options || []).some(function (o) {
          return o.correct;
        });
    }
  }

  function setType(id, type) {
    var q = findQ(id);
    if (!q || TYPES.indexOf(type) === -1) return;
    if (type === "mcq") {
      // keep legacy shape: a plain MCQ has no `type` field
      delete q.type;
    } else {
      q.type = type;
    }
    ensure(q);
  }

  function setMarks(id, value) {
    var q = findQ(id);
    if (!q) return;
    var v = String(value == null ? "" : value).trim().slice(0, 8);
    if (v) q.marks = v;
    else delete q.marks;
  }

  // Used by "delete" on the only remaining question: blank the non-MCQ fields too.
  function clearExtra(q) {
    if (!q) return;
    if (q.answer) q.answer.html = "";
    if (typeOf(q) !== "mcq") q.explanationHtml = "";
    if (q.tfAnswer !== undefined) q.tfAnswer = null;
    (q.subQuestions || []).forEach(function (s) {
      s.html = "";
      s.answerHtml = "";
    });
    delete q.marks;
  }

  /* ------------------------------------------------------------ editor (cards) */

  function el(tag, cls, attrs) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        n.setAttribute(k, attrs[k]);
      });
    }
    return n;
  }

  function changed(id) {
    Editor.afterEdit(id);
    Editor.updateCount();
    Preview.update();
  }

  // A rich-text field wired to the app's existing editor behaviour (sanitising,
  // auto Bengali font, toolbar target, undo/redo shortcuts).
  function richField(cls, placeholder, html, lang, onChange) {
    var d = el("div", "editor-area " + cls);
    d.contentEditable = "true";
    d.dataset.placeholder = placeholder;
    d.setAttribute("aria-label", placeholder);
    Editor.setRich(d, html || "");
    Editor.bindRich(d, onChange);
    return d;
  }

  function labelledBlock(label, lang) {
    var wrap = el("div", "option-explanation qtype-block");
    var lab = el("span", "option-explanation__label");
    lab.textContent = label;
    if (lang === "bn") lab.setAttribute("data-i18n-font", "");
    wrap.appendChild(lab);
    return wrap;
  }

  function buildTypeBar(card, q, lang) {
    var st = S(lang);
    var bar = el("div", "qtype-bar");

    var sel = el("select", "field-select qtype-select", { "aria-label": st.typeLabel, title: st.typeLabel });
    if (lang === "bn") sel.setAttribute("data-i18n-font", "");
    TYPES.forEach(function (t) {
      var o = el("option");
      o.value = t;
      o.textContent = st.types[t];
      sel.appendChild(o);
    });
    sel.value = typeOf(q);
    sel.addEventListener("change", function () {
      setType(q.id, sel.value);
      Editor.renderQuestions();
      Preview.update();
    });
    bar.appendChild(sel);

    var marks = el("input", "field-input qtype-marks", {
      type: "text",
      inputmode: "decimal",
      maxlength: "8",
      "aria-label": st.marks,
      title: st.marks
    });
    if (lang === "bn") marks.setAttribute("data-i18n-font", "");
    marks.placeholder = st.marks;
    marks.value = q.marks || "";
    if (typeOf(q) === "creative" && !q.marks) {
      var total = (q.subQuestions || []).reduce(function (a, s) {
        return a + parseMarks(s.marks);
      }, 0);
      if (total) marks.placeholder = String(total);
    }
    marks.addEventListener("input", function () {
      setMarks(q.id, marks.value);
      Preview.update();
    });
    bar.appendChild(marks);
    return bar;
  }

  function bodyTf(q, lang) {
    var st = S(lang);
    var frag = document.createDocumentFragment();
    frag.appendChild(
      richField("question-editor", st.tfStatement, q.question.html, lang, function (h) {
        q.question.html = h;
        changed(q.id);
      })
    );

    var row = el("div", "qtype-tf");
    var explBlock = labelledBlock(st.explLbl, lang);
    var expl = richField("option-explanation__editor", st.explPh, q.explanationHtml, lang, function (h) {
      q.explanationHtml = h;
      Preview.update();
    });
    explBlock.appendChild(expl);
    explBlock.hidden = !(q.tfAnswer === true || q.tfAnswer === false);

    var btns = [];
    [
      { v: true, t: st.tfTrue },
      { v: false, t: st.tfFalse }
    ].forEach(function (c) {
      var b = el("button", "qtype-tf__btn", { type: "button", "aria-pressed": String(q.tfAnswer === c.v) });
      b.textContent = c.t;
      if (lang === "bn") b.setAttribute("data-i18n-font", "");
      if (q.tfAnswer === c.v) b.classList.add("is-correct");
      b.addEventListener("click", function () {
        q.tfAnswer = q.tfAnswer === c.v ? null : c.v; // click again to un-select
        btns.forEach(function (x) {
          var on = q.tfAnswer === x.c.v;
          x.b.classList.toggle("is-correct", on);
          x.b.setAttribute("aria-pressed", String(on));
        });
        var has = q.tfAnswer === true || q.tfAnswer === false;
        explBlock.hidden = !has;
        if (has) setTimeout(function () { expl.focus(); }, 0);
        Preview.update();
      });
      btns.push({ b: b, c: c });
      row.appendChild(b);
    });
    frag.appendChild(row);
    frag.appendChild(explBlock);
    return frag;
  }

  function insertBlank(field) {
    field.focus();
    var sel = window.getSelection();
    if (!sel.rangeCount || !field.contains(sel.anchorNode)) {
      var r = document.createRange();
      r.selectNodeContents(field);
      r.collapse(false);
      sel.removeAllRanges();
      sel.addRange(r);
    }
    document.execCommand("insertText", false, " _____ ");
    field.dispatchEvent(new Event("input", { bubbles: true }));
  }

  function bodyFill(q, lang) {
    var st = S(lang);
    var frag = document.createDocumentFragment();
    var qf = richField("question-editor", st.fillPh, q.question.html, lang, function (h) {
      q.question.html = h;
      changed(q.id);
    });
    frag.appendChild(qf);

    var tools = el("div", "qtype-tools");
    var add = el("button", "btn btn--secondary qtype-add", { type: "button" });
    add.textContent = "＋ " + st.addBlank;
    if (lang === "bn") add.setAttribute("data-i18n-font", "");
    add.addEventListener("click", function () {
      insertBlank(qf);
    });
    tools.appendChild(add);
    frag.appendChild(tools);

    var blk = labelledBlock(st.fillAnsLbl, lang);
    blk.appendChild(
      richField("option-explanation__editor", st.fillAnsPh, q.answer.html, lang, function (h) {
        q.answer.html = h;
        Preview.update();
      })
    );
    frag.appendChild(blk);
    return frag;
  }

  function bodyShort(q, lang, isDesc) {
    var st = S(lang);
    var frag = document.createDocumentFragment();
    frag.appendChild(
      richField("question-editor", st.questionPh, q.question.html, lang, function (h) {
        q.question.html = h;
        changed(q.id);
      })
    );
    var blk = labelledBlock(isDesc ? st.descAnsLbl : st.shortAnsLbl, lang);
    blk.appendChild(
      richField("option-explanation__editor", isDesc ? st.descAnsPh : st.shortAnsPh, q.answer.html, lang, function (h) {
        q.answer.html = h;
        Preview.update();
      })
    );
    frag.appendChild(blk);
    return frag;
  }

  function bodyCreative(q, lang, card) {
    var st = S(lang);
    var frag = document.createDocumentFragment();

    // Stimulus section
    var stim = el("div", "cq-stim");
    var sLab = el("div", "cq-sec-label");
    sLab.textContent = st.stimulusLbl;
    if (lang === "bn") sLab.setAttribute("data-i18n-font", "");
    stim.appendChild(sLab);
    stim.appendChild(
      richField("question-editor", st.stimulusPh, q.question.html, lang, function (h) {
        q.question.html = h;
        changed(q.id);
      })
    );
    frag.appendChild(stim);

    var list = el("div", "qtype-subs");
    var totalEl = el("span", "cq-total");
    if (lang === "bn") totalEl.setAttribute("data-i18n-font", "");
    function updTotal() {
      var sum = q.subQuestions.reduce(function (a, x) { return a + parseMarks(x.marks); }, 0);
      sum = Math.round(sum * 100) / 100;
      totalEl.textContent = st.totalLbl + ": " + localizeDigits(String(sum), lang);
    }

    var SUB_PH_BN = ["জ্ঞানমূলক প্রশ্ন", "অনুধাবনমূলক প্রশ্ন", "প্রয়োগ মূলক প্রশ্ন", "উচ্চতর দক্ষতামূলক প্রশ্ন"];
    var SUB_PH_EN = ["Knowledge-based question", "Comprehension question", "Application question", "Higher-order skills question"];
    var subPhList = lang === "bn" ? SUB_PH_BN : SUB_PH_EN;

    function drawSubs() {
      list.innerHTML = "";
      q.subQuestions.forEach(function (s, i) {
        var lv = i % 4;
        var row = el("div", "qtype-sub cq-sub cq-sub--l" + lv);

        // top bar: label chip · level tag · marks · delete
        var bar = el("div", "cq-sub__bar");
        var chip = el("span", "cq-sub__chip");
        chip.textContent = subLabel(i, lang);
        if (lang === "bn") chip.setAttribute("data-i18n-font", "");
        bar.appendChild(chip);
        var tag = el("span", "cq-sub__tag");
        tag.textContent = st.levels[lv];
        if (lang === "bn") tag.setAttribute("data-i18n-font", "");
        bar.appendChild(tag);
        bar.appendChild(el("span", "cq-sub__spacer"));

        var mw = el("label", "cq-sub__marks");
        var mt = el("span", "cq-sub__marks-text");
        mt.textContent = st.marks;
        if (lang === "bn") mt.setAttribute("data-i18n-font", "");
        var m = el("input", "cq-sub__marks-input", {
          type: "text",
          inputmode: "decimal",
          maxlength: "8",
          "aria-label": st.marks,
          title: st.marks
        });
        m.value = s.marks || "";
        m.addEventListener("input", function () {
          s.marks = m.value.trim().slice(0, 8);
          updTotal();
          Preview.update();
        });
        mw.appendChild(mt);
        mw.appendChild(m);
        bar.appendChild(mw);

        var del = el("button", "cq-sub__del", { type: "button", "aria-label": st.delSub, title: st.delSub });
        del.textContent = "×";
        del.addEventListener("click", function () {
          if (q.subQuestions.length <= 1) {
            s.html = "";
            s.answerHtml = "";
          } else {
            q.subQuestions.splice(i, 1);
          }
          drawSubs();
          Editor.updateCount();
          Preview.update();
        });
        bar.appendChild(del);
        row.appendChild(bar);

        // question text
        var qw = el("div", "cq-sub__q");
        qw.appendChild(
          richField("cq-sub__editor qtype-sub__editor", subPhList[lv], s.html, lang, function (h) {
            s.html = h;
            changed(q.id);
          })
        );
        row.appendChild(qw);

        // answer for this sub-question
        var aw = el("div", "cq-sub__a");
        var aLab = el("div", "cq-sec-label");
        aLab.textContent = st.answerLbl;
        if (lang === "bn") aLab.setAttribute("data-i18n-font", "");
        aw.appendChild(aLab);
        aw.appendChild(
          richField("cq-ans__editor", st.subAnsPh, s.answerHtml, lang, function (h) {
            s.answerHtml = h;
            Preview.update();
          })
        );
        row.appendChild(aw);

        list.appendChild(row);
      });
      updTotal();
    }
    drawSubs();
    frag.appendChild(list);

    var add = el("button", "btn btn--secondary qtype-add", { type: "button" });
    add.textContent = "＋ " + st.addSub;
    if (lang === "bn") add.setAttribute("data-i18n-font", "");
    add.addEventListener("click", function () {
      if (q.subQuestions.length >= 8) return;
      q.subQuestions.push({ id: Utils.uid("sq"), html: "", marks: "", answerHtml: "" });
      drawSubs();
      Preview.update();
    });
    var tools = el("div", "qtype-tools cq-foot");
    tools.appendChild(add);
    tools.appendChild(totalEl);
    frag.appendChild(tools);
    return frag;
  }

  // Called by app.js for every freshly built question card.
  function decorateCard(card, q, index, lang) {
    try {
      ensure(q);
      var t = typeOf(q);
      var st = S(lang);

      // header label
      var num = card.querySelector(".question-card__number");
      if (num && t !== "mcq") {
        num.textContent = st.qWord + " " + Utils.formatQuestionNumber(index, lang);
      }

      // type selector + marks, directly after the number
      if (num) num.parentNode.insertBefore(buildTypeBar(card, q, lang), num.nextSibling);

      if (t === "mcq") return card;

      card.classList.add("is-nonmcq", "qt-" + t);
      var body = card.querySelector(".question-card__body");
      if (!body) return card;
      var content;
      if (t === "tf") content = bodyTf(q, lang);
      else if (t === "fill") content = bodyFill(q, lang);
      else if (t === "short") content = bodyShort(q, lang, false);
      else if (t === "desc") content = bodyShort(q, lang, true);
      else content = bodyCreative(q, lang, card);
      body.innerHTML = "";
      body.appendChild(content);
    } catch (err) {
      console.error("QTypes.decorateCard failed; leaving the original card:", err);
    }
    return card;
  }

  /* ----------------------------------------------------------- doc rendering */

  function marksBadge(marks, lang) {
    if (!marks || !String(marks).trim()) return "";
    return '<span class="doc-question__marks">[' + esc(localizeDigits(String(marks).trim(), lang)) + "]</span>";
  }

  function answerLine(label, html) {
    if (strip(html) === "") return "";
    return (
      '<div class="doc-explanation"><span class="doc-explanation__label">' +
      esc(label) +
      ':</span> <span class="doc-explanation__text">' +
      html +
      "</span></div>"
    );
  }

  function head(q, index, lang) {
    var num = Utils.formatQuestionNumber(index, lang);
    return (
      '<div class="doc-question__text"><span class="doc-question__number">' +
      num +
      ".</span>" +
      marksBadge(q.marks, lang) +
      '<span class="doc-question__content">' +
      (q.question.html || "") +
      "</span></div>"
    );
  }

  function creativeAnswers(q, lang, only) {
    var st = S(lang), h = "";
    (q.subQuestions || []).forEach(function (s, i) {
      if (only != null && i !== only) return;
      if (strip(s.answerHtml) === "") return;
      h += '<div class="doc-explanation"><span class="doc-explanation__label">' + esc(st.docAnswer) + " (" + esc(subLabel(i, lang)) + '):</span> <span class="doc-explanation__text">' + s.answerHtml + "</span></div>";
    });
    return h;
  }

  // Returns an HTML string for non-MCQ questions, or null for MCQ (legacy renderer handles it).
  function renderQuestionHtml(q, index, lang, showAnswers) {
    var t = typeOf(q);
    if (t === "mcq") {
      if (window.SmartLayout && !q.layoutLocked) { try { q.optionsLayout = SmartLayout.auto(q); } catch (e) {} }
      return null;
    }
    ensure(q);
    var st = S(lang);
    if (q._ansBlock) return '<div class="doc-question doc-question--cont doc-question--ans' + (q._ansFirst ? " doc-question--ans-first" : "") + (q._more ? " doc-question--more" : "") + '">' + creativeAnswers(q._base || q, lang, q._ansSub) + "</div>";
    var out = '<div class="doc-question doc-question--' + t + (q._noHead ? " doc-question--cont" : "") + (q._more ? " doc-question--more" : "") + '">' + (q._noHead ? "" : head(q, index, lang));

    if (t === "tf") {
      var opts = [
        { v: true, t: st.tfTrue },
        { v: false, t: st.tfFalse }
      ];
      out += '<div class="doc-options doc-options--horizontal">';
      opts.forEach(function (o) {
        var correct = false;
        out +=
          '<div class="doc-option' +
          (correct ? " doc-option--correct" : "") +
          '"><span class="doc-option__label"></span><span class="doc-option__content">' +
          esc(o.t) +
          "</span></div>";
      });
      out += "</div>";
      if (showAnswers) {
        var tfKey = q.tfAnswer === true ? st.tfTrue : q.tfAnswer === false ? st.tfFalse : "";
        var tfEx = q.explanationHtml;
        if (tfKey || strip(tfEx) !== "") {
          out += '<div class="doc-explanation">' +
            (tfKey ? '<span class="doc-explanation__label">(' + esc(tfKey) + ')</span> ' : '') +
            (strip(tfEx) !== "" ? '<span class="doc-explanation__label">' + esc(st.docExpl) + ':</span> <span class="doc-explanation__text">' + tfEx + '</span>' : '') +
            '</div>';
        }
      }
    } else if (t === "fill") {
      if (showAnswers) out += answerLine(st.docAnswer, q.answer.html);
    } else if (t === "short") {
      if (showAnswers) {
        out += answerLine(st.docAnswer, strip(q.answer.html) !== "" ? q.answer.html : q.explanationHtml);
      }
    } else if (t === "desc") {
      if (showAnswers) out += answerLine(st.docModel, q.answer.html);
    } else if (t === "creative") {
      out += '<div class="doc-subs">';
      (q.subQuestions || []).forEach(function (s, i) {
        if (q._subs && q._subs.indexOf(i) < 0) return;
        if (strip(s.html) === "") return;
        out +=
          '<div class="doc-sub"><div class="doc-sub__row"><span class="doc-sub__label">' +
          esc(subLabel(i, lang)) +
          ".</span>" +
          marksBadge(s.marks, lang) +
          '<span class="doc-sub__content">' +
          (s.html || "") +
          "</span></div>" +
          "</div>";
      });
      out += "</div>";
      if (showAnswers && !q._base) out += creativeAnswers(q, lang);
    }
    return out + "</div>";
  }

  window.QTypes = {
    TYPES: TYPES,
    typeOf: typeOf,
    ensure: ensure,
    isEmpty: isEmpty,
    hasAnswer: hasAnswer,
    setType: setType,
    setMarks: setMarks,
    clearExtra: clearExtra,
    decorateCard: decorateCard,
    renderQuestionHtml: renderQuestionHtml,
    label: function (type, lang) {
      return S(lang).types[type];
    }
  };
})();
;

/* ===== block ===== */
/* Question-type tab bar: Mix / MCQ / CQ / T/F / Blanks / SQ / BQ */
(function () {
  "use strict";
  var bar = document.getElementById("qTypeTabs");
  if (!bar || !window.QTypes || typeof Editor === "undefined" || typeof State === "undefined") return;
  var active = "mix";

  function applyFilter() {
    document.body.setAttribute("data-qtab", active);
    var list = document.getElementById("questionsList");
    if (!list) return;
    var types = {};
    State.get().questions.forEach(function (q) { types[q.id] = QTypes.typeOf(q); });
    list.querySelectorAll(".question-card").forEach(function (c) {
      c.classList.toggle("is-qtab-hidden", active !== "mix" && types[c.dataset.id] !== active);
    });
  }

  // Keep the trailing blank question in the active tab's type.
  function syncTrailing() {
    if (active === "mix") return;
    var qs = State.get().questions, last = qs[qs.length - 1];
    if (last && QTypes.isEmpty(last) && QTypes.typeOf(last) !== active) QTypes.setType(last.id, active);
  }

  var origEnsure = State.ensureTrailingEmpty;
  State.ensureTrailingEmpty = function () {
    var pushed = origEnsure.apply(State, arguments);
    syncTrailing();
    return pushed;
  };

  var origRender = Editor.renderQuestions;
  Editor.renderQuestions = function () {
    var r = origRender.apply(this, arguments);
    applyFilter();
    return r;
  };

  var list = document.getElementById("questionsList");
  if (list && window.MutationObserver) {
    new MutationObserver(applyFilter).observe(list, { childList: true });
  }

  function setTab(t) {
    active = t;
    bar.querySelectorAll(".qtabs__btn").forEach(function (b) {
      var on = b.dataset.qtab === t;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-selected", on ? "true" : "false");
    });
    if (t !== "mix") State.ensureTrailingEmpty();
    Editor.renderQuestions();
    Preview.update();
  }

  bar.addEventListener("click", function (e) {
    var b = e.target.closest(".qtabs__btn");
    if (b) setTab(b.dataset.qtab);
  });

  applyFilter();
})();
;

/* ===== block ===== */
/* Column layout: per-category default + per-question override (Mix) */
(function () {
  "use strict";
  var TYPES = ["mcq", "creative", "tf", "fill", "short", "desc"];
  var DEFAULT_COLS = 2;
  var LBL = {
    en: { mix: "Mix — set columns per question, or all at once:", cat: "Columns for", row: "Columns", auto: "Auto",
          types: { mcq: "MCQ", creative: "CQ", tf: "True/False", fill: "Fill in the blanks", short: "Short Q", desc: "Broad Q" } },
    bn: { mix: "মিক্স — প্রতিটি প্রশ্নে আলাদা কলাম, অথবা একসাথে সব:", cat: "কলাম সংখ্যা:", row: "কলাম", auto: "অটো",
          types: { mcq: "এমসিকিউ", creative: "সৃজনশীল", tf: "সত্য/মিথ্যা", fill: "শূন্যস্থান", short: "সংক্ষিপ্ত", desc: "রচনামূলক" } }
  };
  function L() { return LBL[(State.get().language === "bn") ? "bn" : "en"]; }
  function clampCols(n) { n = parseInt(n, 10); return (n === 1 || n === 2 || n === 3) ? n : null; }
  function typeOf(q) { return window.QTypes ? QTypes.typeOf(q) : "mcq"; }
  function typeCols() {
    var st = State.get().settings;
    if (!st.typeCols || typeof st.typeCols !== "object") st.typeCols = {};
    return st.typeCols;
  }
  function colsOf(q) {
    var own = q && clampCols(q.cols);
    if (own) return own;
    return clampCols(typeCols()[typeOf(q)]) || DEFAULT_COLS;
  }
  function persist() { try { Storage.save(); } catch (e) {} }
  function refresh() { Preview.update(); persist(); }

  var activeTab = "mix";
  function bar() { return document.getElementById("qColsBar"); }

  function syncBar() {
    var b = bar(); if (!b) return;
    var t = document.body.getAttribute("data-qtab") || "mix";
    activeTab = t;
    var lbl = L();
    document.getElementById("qColsLabel").textContent = t === "mix" ? lbl.mix : (lbl.cat + " " + lbl.types[t]);
    document.getElementById("qColsAuto").textContent = lbl.auto;
    var cur = t === "mix" ? null : colsOf({ type: t });
    b.querySelectorAll(".qcols__btn[data-cols]").forEach(function (btn) {
      var v = btn.dataset.cols;
      btn.classList.toggle("is-active", v !== "auto" && clampCols(v) === cur);
    });
  }

  function syncRows() {
    document.querySelectorAll(".qcol-row").forEach(function (row) {
      var q = State.get().questions.find(function (x) { return x.id === row.dataset.qid; });
      if (!q) return;
      var own = clampCols(q.cols);
      row.querySelectorAll(".qcols__btn").forEach(function (btn) {
        var v = btn.dataset.cols;
        btn.classList.toggle("is-active", v === "auto" ? !own : clampCols(v) === own);
      });
    });
  }

  // Wrap card decoration: add the per-question column picker (visible in Mix only).
  var origDecorate = window.QTypes && QTypes.decorateCard;
  if (origDecorate) {
    QTypes.decorateCard = function (card, q, index, lang) {
      var c = origDecorate.apply(this, arguments);
      try {
        var body = card.querySelector(".question-card__body");
        if (body && typeOf(q) !== "mcq" && !card.querySelector(".qcol-row")) {
          var lbl = LBL[lang === "bn" ? "bn" : "en"];
          var row = document.createElement("div");
          row.className = "qcol-row"; row.dataset.qid = q.id;
          var sp = document.createElement("span"); sp.className = "qcol-row__label"; sp.textContent = lbl.row + ":";
          row.appendChild(sp);
          ["auto", "1", "2", "3"].forEach(function (v) {
            var b = document.createElement("button");
            b.type = "button"; b.className = "qcols__btn"; b.dataset.cols = v;
            b.textContent = v === "auto" ? lbl.auto : v;
            b.title = v === "auto" ? "Use category default" : (v + (v === "1" ? " column" : " columns"));
            b.addEventListener("click", function () {
              var qq = State.get().questions.find(function (x) { return x.id === q.id; });
              if (!qq) return;
              if (v === "auto") delete qq.cols; else qq.cols = parseInt(v, 10);
              syncRows(); refresh();
            });
            row.appendChild(b);
          });
          body.insertBefore(row, body.firstChild);
        }
      } catch (e) { console.error("QCols row failed:", e); }
      return c;
    };
  }

  // Bar clicks
  var b0 = bar();
  if (b0) b0.addEventListener("click", function (e) {
    var btn = e.target.closest(".qcols__btn[data-cols]"); if (!btn) return;
    var v = btn.dataset.cols;
    if (activeTab === "mix") {
      // bulk: apply to every question
      State.get().questions.forEach(function (q) { if (v === "auto") delete q.cols; else q.cols = parseInt(v, 10); });
      syncRows();
    } else {
      var n = clampCols(v); if (!n) return;
      typeCols()[activeTab] = n;
      // questions of this category follow the category setting again
      State.get().questions.forEach(function (q) { if (typeOf(q) === activeTab) delete q.cols; });
    }
    syncBar(); refresh();
  });

  // Keep UI in sync when tab / language / state changes
  new MutationObserver(syncBar).observe(document.body, { attributes: true, attributeFilter: ["data-qtab", "data-ui-lang", "data-doc-lang"] });
  var origRender = Editor.renderQuestions;
  Editor.renderQuestions = function () { var r = origRender.apply(this, arguments); syncBar(); syncRows(); return r; };
  var origRepl = State.replaceAll;
  State.replaceAll = function () { var r = origRepl.apply(this, arguments); setTimeout(function () { syncBar(); syncRows(); }, 0); return r; };

  window.QCols = { colsOf: colsOf, TYPES: TYPES };
  syncBar(); syncRows();
})();
;

/* ===== block ===== */
/* Section-wise layout for Mix papers: headings, per-section numbering, reorderable sections */
(function () {
  "use strict";
  var TYPES = ["mcq", "creative", "tf", "fill", "short", "desc"];
  var T = {
    bn: { mcq: "বহুনির্বাচনি প্রশ্ন", creative: "সৃজনশীল প্রশ্ন", tf: "সত্য / মিথ্যা", fill: "শূন্যস্থান পূরণ", short: "সংক্ষিপ্ত প্রশ্ন", desc: "রচনামূলক প্রশ্ন" },
    en: { mcq: "Multiple Choice Questions", creative: "Creative Questions", tf: "True / False", fill: "Fill in the Blanks", short: "Short Questions", desc: "Broad / Essay Questions" }
  };
  var UI = {
    bn: { toggle: "সেকশন অনুযায়ী সাজান", up: "উপরে নিন", down: "নিচে নিন", dd: "সেকশন এডিট", one: "একটি ক্যাটাগরি — শিরোনাম দেখানো হবে না।" },
    en: { toggle: "Arrange by section", up: "Move up", down: "Move down", dd: "Edit sections", one: "One category only — no heading shown." }
  };
  var BN = ["০","১","২","৩","৪","৫","৬","৭","৮","৯"];
  function lang() { return State.get().language === "bn" ? "bn" : "en"; }
  function typeOf(q) { return window.QTypes ? QTypes.typeOf(q) : "mcq"; }
  function isEmpty(q) { return window.QTypes ? QTypes.isEmpty(q) : Utils.isQuestionEmpty(q); }
  function enabled() { return State.get().settings.sectionMode !== false; }
  function order() {
    var st = State.get().settings, o = Array.isArray(st.sectionOrder) ? st.sectionOrder.filter(function (t, i, a) { return TYPES.indexOf(t) > -1 && a.indexOf(t) === i; }) : [];
    TYPES.forEach(function (t) { if (o.indexOf(t) < 0) o.push(t); });
    st.sectionOrder = o; return o;
  }
  function num(v) {
    var x = String(v == null ? "" : v).replace(/[০-৯]/g, function (d) { return BN.indexOf(d); });
    var n = parseFloat(x); return isFinite(n) ? n : 0;
  }
  function qMarks(q) {
    var m = num(q.marks);
    if (m) return m;
    if (typeOf(q) === "creative") return (q.subQuestions || []).reduce(function (a, s) { return a + num(s.marks); }, 0);
    return 0;
  }
  function fmt(n, lg) {
    var t = (Math.round(n * 100) / 100).toString();
    return lg === "bn" ? t.replace(/[0-9]/g, function (d) { return BN[+d]; }) : t;
  }
  function distinctTypes(list) { var m = {}; list.forEach(function (q) { if (!isEmpty(q)) m[typeOf(q)] = 1; }); return Object.keys(m); }

  var meta = new WeakMap();
  function arrange(list) {
    meta = new WeakMap();
    if (!enabled() || distinctTypes(list).length < 2) return list;
    var ord = order(), out = [];
    ord.forEach(function (t) {
      var grp = list.filter(function (q) { return typeOf(q) === t; });
      grp.forEach(function (q, i) { meta.set(q, { n: i + 1, first: i === 0, type: t }); out.push(q); });
    });
    return out;
  }
  function info(q) { return meta.get(q) || null; }
  function secMeta(t) { var sm = State.get().settings.sectionMeta; return (sm && sm[t]) || {}; }
  function layoutOf() { return State.get().settings.sectionLayout === "center" ? "center" : "left"; }
  function dividerOn(t) { var sd = State.get().settings.sectionDivider; return !(sd && sd[t] === false); }
  function lineOn(l) { var sl = State.get().settings.sectionLine; return !(sl && sl[l] === false); }
  function titleOf(t, l) { var c = (secMeta(t).title || "").trim(); return c || T[l][t]; }
  function headingHtml(q, lg) {
    var m = meta.get(q); if (!m) return "";
    var l = lg === "bn" ? "bn" : "en", lay = layoutOf(), ins = (secMeta(m.type).instruction || "").trim();
    var h = '<div class="doc__section doc__section--' + lay + (lineOn(lay) ? " doc__section--line" : "") + '">' +
      '<span class="doc__section-title">' + DocRenderer.escapeHtml(titleOf(m.type, l)) + "</span>";
    if (ins) h += '<span class="doc__section-instr">' + DocRenderer.escapeHtml(ins) + "</span>";
    return h + "</div>";
  }

  /* ---------- editor side: section order + local numbering on cards (Mix) */
  function applyEditor() {
    var list = document.getElementById("questionsList"); if (!list) return;
    var S = State.get(), qs = S.questions, byId = {};
    qs.forEach(function (q) { byId[q.id] = q; });
    var on = enabled() && distinctTypes(qs).length >= 2;
    var ord = order(), cnt = {}, last = qs[qs.length - 1];
    list.querySelectorAll(".question-card").forEach(function (card) {
      var q = byId[card.dataset.id]; if (!q) return;
      if (!on) { card.style.order = ""; return; }
      var t = typeOf(q), empty = isEmpty(q);
      var n = (cnt[t] || 0) + 1;
      if (!empty) cnt[t] = n;
      card.style.order = (q === last && empty) ? 99 : ord.indexOf(t) + 1;
      var lab = card.querySelector(".question-card__number");
      if (lab) lab.textContent = lab.textContent.replace(/[0-9০-৯]+\s*$/, Utils.formatQuestionNumber(n - 1, S.language));
    });
  }

  /* ---------- section bar */
  var UI2 = {
    bn: { divLbl: "২ / ৩ কলামে ডিভাইডার লাইন", line: "নিচে লাইন দিন", ins: "নির্দেশিকা (ঐচ্ছিক)", nm: "সেকশনের নাম", insLbl: "নির্দেশিকা", mName: "সেকশনের নাম", mInstr: "সেকশনের নির্দেশিকা" },
    en: { divLbl: "Column divider line (2 / 3 columns)", line: "Line below", ins: "Instruction (optional)", nm: "Section name", insLbl: "Instruction", mName: "Section name", mInstr: "Section instruction" }
  };
  var ICON_UP = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 15l7-7 7 7"/></svg>';
  var ICON_DOWN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 9l7 7 7-7"/></svg>';
  var lastSig = "", saveT = null, listOpen = false;
  function saveSoon() { clearTimeout(saveT); saveT = setTimeout(function () { try { Storage.save(); } catch (e) {} }, 300); }
  function syncLayoutUI() {
    var l = lang(), u2 = UI2[l], lay = layoutOf();
    document.querySelectorAll("#qSecLayouts .qsec__lay").forEach(function (box) {
      var k = box.dataset.lay;
      box.classList.toggle("is-active", k === lay);
      box.setAttribute("aria-checked", k === lay ? "true" : "false");
      box.querySelector('[data-role=mname]').textContent = u2.mName;
      box.querySelector('[data-role=minstr]').textContent = u2.mInstr;
      box.querySelector('[data-role=line]').textContent = u2.line;
      var chk = box.querySelector('input[data-line]'); chk.checked = lineOn(k);
      box.querySelector(".qsec__mock").classList.toggle("has-line", lineOn(k));
    });
  }
  function syncDd() {
    var dd = document.getElementById("qSecDd"), list = document.getElementById("qSecList");
    dd.setAttribute("aria-expanded", listOpen ? "true" : "false");
    list.hidden = !listOpen;
  }
  function renderBar() {
    var bar = document.getElementById("qSecBar"); if (!bar) return;
    var l = lang(), u = UI[l], S = State.get();
    var on = enabled();
    bar.classList.toggle("is-off", !on);
    var tg = document.getElementById("qSecToggle"); tg.checked = on;
    document.getElementById("qSecToggleLbl").textContent = u.toggle;
    document.getElementById("qSecDdLbl").textContent = u.dd + " (" + fmt(TYPES.length, l) + ")";
    syncLayoutUI(); syncDd();
    var counts = {};
    S.questions.forEach(function (q) { if (!isEmpty(q)) { var t = typeOf(q); counts[t] = (counts[t] || 0) + 1; } });
    var ord = order();
    var presentN = ord.filter(function (t) { return counts[t] > 0; }).length;
    document.getElementById("qSecHint").textContent = (on && presentN < 2) ? u.one : "";
    var sig = l + "|" + ord.map(function (t) { return t + ":" + (counts[t] || 0) + (dividerOn(t) ? "d" : ""); }).join(",");
    if (sig === lastSig) return;     // keep inputs (and focus) intact while typing
    lastSig = sig;
    var box = document.getElementById("qSecList"); box.innerHTML = "";
    ord.forEach(function (t, i) {
      var row = document.createElement("div"); row.className = "qsec__item";
      var top = document.createElement("div"); top.className = "qsec__item-top";
      var pos = document.createElement("span"); pos.className = "qsec__pos"; pos.textContent = fmt(i + 1, l);
      var ty = document.createElement("span"); ty.className = "qsec__type"; ty.textContent = T[l][t];
      var c = document.createElement("span"); c.className = "qsec__count"; c.textContent = fmt(counts[t] || 0, l) + (l === "bn" ? " টি" : "");
      var mvs = document.createElement("span"); mvs.className = "qsec__mvs";
      [[ICON_UP, -1, u.up], [ICON_DOWN, 1, u.down]].forEach(function (d) {
        var b = document.createElement("button"); b.type = "button"; b.className = "qsec__mv"; b.innerHTML = d[0]; b.title = d[2]; b.setAttribute("aria-label", d[2] + ": " + T[l][t]);
        b.disabled = (d[1] < 0 && i === 0) || (d[1] > 0 && i === ord.length - 1);
        b.addEventListener("click", function () { move(t, d[1]); });
        mvs.appendChild(b);
      });
      top.appendChild(pos); top.appendChild(ty); top.appendChild(c); top.appendChild(mvs);
      row.appendChild(top);

      var f1 = document.createElement("label"); f1.className = "qsec__field";
      var l1 = document.createElement("span"); l1.className = "qsec__flabel"; l1.textContent = UI2[l].nm;
      var nm = document.createElement("input"); nm.type = "text"; nm.className = "qsec__nameinput"; nm.value = titleOf(t, l); nm.setAttribute("aria-label", UI2[l].nm + ": " + T[l][t]);
      nm.addEventListener("input", function () {
        var sm = S.settings.sectionMeta = S.settings.sectionMeta || {}; var e = sm[t] = sm[t] || {};
        var v = nm.value.trim(); if (v && v !== T[lang()][t]) e.title = nm.value; else delete e.title;
        Preview.update(); saveSoon();
      });
      nm.addEventListener("blur", function () { if (!nm.value.trim()) nm.value = T[lang()][t]; });
      f1.appendChild(l1); f1.appendChild(nm);

      var f2 = document.createElement("label"); f2.className = "qsec__field";
      var l2 = document.createElement("span"); l2.className = "qsec__flabel"; l2.textContent = UI2[l].insLbl;
      var ta = document.createElement("textarea"); ta.className = "qsec__instr"; ta.rows = 2; ta.placeholder = UI2[l].ins; ta.value = secMeta(t).instruction || "";
      ta.addEventListener("input", function () {
        var sm = S.settings.sectionMeta = S.settings.sectionMeta || {}; var e = sm[t] = sm[t] || {};
        if (ta.value.trim()) e.instruction = ta.value; else delete e.instruction;
        Preview.update(); saveSoon();
      });
      f2.appendChild(l2); f2.appendChild(ta);
      if (window.Utils && Utils.bindAutoFont) { Utils.bindAutoFont(nm); Utils.bindAutoFont(ta); }
      row.appendChild(f1); row.appendChild(f2);
      var f3 = document.createElement("label"); f3.className = "qsec__linechk qsec__divchk";
      var cb = document.createElement("input"); cb.type = "checkbox"; cb.checked = dividerOn(t);
      cb.setAttribute("aria-label", UI2[l].divLbl + ": " + T[l][t]);
      var cl = document.createElement("span"); cl.textContent = UI2[l].divLbl;
      cb.addEventListener("change", function () {
        var sd = S.settings.sectionDivider = S.settings.sectionDivider || {};
        sd[t] = !!cb.checked;
        Preview.update(); saveSoon();
      });
      f3.appendChild(cb); f3.appendChild(cl);
      row.appendChild(f3);
      box.appendChild(row);
    });
  }
  function move(t, dir) {
    var ord = order(), i = ord.indexOf(t), j = i + dir; if (i < 0 || j < 0 || j >= ord.length) return;
    var other = ord[j]; ord[j] = t; ord[i] = other;
    State.get().settings.sectionOrder = ord;
    changed();
  }
  function changed() { lastSig = ""; renderBar(); applyEditor(); Preview.update(); try { Storage.save(); } catch (e) {} }

  document.getElementById("qSecToggle").addEventListener("change", function (e) {
    State.get().settings.sectionMode = !!e.target.checked;
    Editor.renderQuestions();   // restores / re-applies card numbering
    changed();
  });

  document.getElementById("qSecDd").addEventListener("click", function () { listOpen = !listOpen; syncDd(); });

  function pickLayout(k) {
    var st = State.get().settings;
    if (st.sectionLayout === k) return;
    st.sectionLayout = k; syncLayoutUI(); Preview.update(); saveSoon();
  }
  document.getElementById("qSecLayouts").addEventListener("change", function (e) {
    if (!e.target.matches('input[data-line]')) return;
    var st = State.get().settings; st.sectionLine = st.sectionLine || {}; st.sectionLine[e.target.dataset.line] = !!e.target.checked;
    syncLayoutUI(); Preview.update(); saveSoon();
  });
  document.getElementById("qSecLayouts").addEventListener("click", function (e) {
    var box = e.target.closest(".qsec__lay"); if (!box || e.target.closest(".qsec__linechk")) return;
    pickLayout(box.dataset.lay);
  });
  document.getElementById("qSecLayouts").addEventListener("keydown", function (e) {
    if (e.key !== "Enter" && e.key !== " ") return;
    var box = e.target.closest(".qsec__lay"); if (!box || e.target !== box) return;
    e.preventDefault(); pickLayout(box.dataset.lay);
  });
  var origRender = Editor.renderQuestions;
  Editor.renderQuestions = function () { var r = origRender.apply(this, arguments); applyEditor(); renderBar(); return r; };
  var origRepl = State.replaceAll;
  State.replaceAll = function () { var r = origRepl.apply(this, arguments); setTimeout(function () { lastSig = ""; renderBar(); applyEditor(); }, 0); return r; };
  var tmr = null, origUpd = Preview.update;
  Preview.update = function () {
    origUpd.apply(this, arguments);
    clearTimeout(tmr); tmr = setTimeout(function () { renderBar(); applyEditor(); }, 200);
  };
  new MutationObserver(function () { renderBar(); }).observe(document.body, { attributes: true, attributeFilter: ["data-ui-lang", "data-doc-lang"] });
  var lst = document.getElementById("questionsList");
  if (lst && window.MutationObserver) new MutationObserver(function () { applyEditor(); }).observe(lst, { childList: true });

  window.QSec = { divider: dividerOn, arrange: arrange, info: info, headingHtml: headingHtml, order: order, enabled: enabled };
  renderBar(); applyEditor();
})();
;

/* ===== block ===== */
/* Smart MCQ option layout: Horizontal (short) / Rectangular (medium) / Vertical (long), measured against the real column width */
(function () {
  "use strict";
  var ctx = null;
  function getCtx() { if (!ctx) { var c = document.createElement("canvas"); ctx = c.getContext("2d"); } return ctx; }
  var MM = 96 / 25.4;
  var GAP_H = 16, GAP_G = 14, LABEL_GAP = 8, SAFETY = 1.05;

  function colWidthPx(cols, st) {
    var pg = (window.Preview && Preview.PAGE_SIZES_MM[st.pageSize]) || { w: 210 };
    var inner = pg.w - 32;                         // 16mm padding each side
    var w = cols === 1 ? inner : cols === 3 ? (inner - 12) / 3 : (inner - 9) / 2;
    return w * MM;
  }

  function auto(q) {
    var S = State.get(), st = S.settings;
    var texts = (q.options || []).map(function (o) {
      return Utils.stripHtml(o.html || "").replace(/\s+/g, " ").trim();
    });
    var filled = texts.filter(function (t) { return t; });
    if (!filled.length) return "vertical";

    var cols = window.QCols ? QCols.colsOf(q) : 2;
    var colW = colWidthPx(cols, st);
    var f = (st.fontSize || 10) * 96 / 72 * 0.96;   // .doc-option font size in px
    var stack = (Preview.FONT_STACKS[st.fontFamily] || Preview.FONT_STACKS["Times New Roman"]);
    var c = getCtx();
    c.font = f + "px " + stack;
    var overhead = 1.2 * f + LABEL_GAP;             // option circle + gap
    var ws = texts.map(function (t) { return overhead + c.measureText(t || " ").width * SAFETY; });

    var n = ws.length;
    var rowW = ws.reduce(function (a, b) { return a + b; }, 0) + GAP_H * (n - 1);
    if (rowW <= colW) return "horizontal";
    if (cols < 3) {
      var cell = (colW - GAP_G) / 2;
      if (ws.every(function (w) { return w <= cell; })) return "grid";
    }
    return "vertical";
  }

  window.SmartLayout = { auto: auto };

  var AUTO_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/></svg>';

  function findQ(id) { return State.get().questions.find(function (x) { return x.id === id; }); }
  function isMcq(q) { return !window.QTypes || QTypes.typeOf(q) === "mcq"; }

  function syncCard(card) {
    var q = findQ(card.dataset.id); if (!q || !isMcq(q)) return;
    var pick = card.querySelector(".layout-picker"); if (!pick) return;
    var locked = !!q.layoutLocked;
    var eff = locked ? (q.optionsLayout || "vertical") : auto(q);
    var ab = pick.querySelector(".layout-auto");
    if (ab) { ab.classList.toggle("is-active", !locked); ab.setAttribute("aria-pressed", locked ? "false" : "true"); }
    pick.querySelectorAll(".layout-btn").forEach(function (b) {
      var same = b.dataset.layout === eff;
      b.classList.toggle("is-active", locked && same);
      b.classList.toggle("is-auto", !locked && same);
    });
  }
  function syncAll() {
    document.querySelectorAll("#questionsList .question-card").forEach(syncCard);
  }

  var origDecorate = window.QTypes && QTypes.decorateCard;
  if (origDecorate) {
    QTypes.decorateCard = function (card, q, index, lang) {
      var r = origDecorate.apply(this, arguments);
      try {
        var pick = card.querySelector(".layout-picker");
        if (pick && !pick.querySelector(".layout-auto") && isMcq(q)) {
          var b = document.createElement("button");
          b.type = "button"; b.className = "qc-btn layout-auto";
          var label = lang === "bn" ? "অটো (স্মার্ট লেআউট)" : "Auto (smart layout)";
          b.title = label; b.setAttribute("aria-label", label);
          b.innerHTML = AUTO_ICON;
          b.addEventListener("click", function () {
            var qq = findQ(q.id); if (!qq) return;
            qq.layoutLocked = false;
            Preview.update(); setTimeout(function () { syncCard(card); }, 0);
          });
          pick.insertBefore(b, pick.firstChild);
          pick.querySelectorAll(".layout-btn").forEach(function (lb) {
            lb.addEventListener("click", function () { setTimeout(function () { syncCard(card); }, 0); });
          });
          setTimeout(function () { syncCard(card); }, 0);
        }
      } catch (e) { console.error("SmartLayout card hook failed:", e); }
      return r;
    };
  }

  var t = null, origUpd = Preview.update;
  Preview.update = function () {
    origUpd.apply(this, arguments);
    clearTimeout(t); t = setTimeout(syncAll, 260);
  };
})();
;

/* ===== block ===== */
(function(){'use strict';var HISTORY_KEY='mcqGenerator.history.v1';var FOLDERS_KEY='mcqGenerator.folders.v1';function loadJson(key,fallback){if(!Storage.checkAvailability())return fallback;try{var raw=localStorage.getItem(key);return raw?JSON.parse(raw):fallback;}catch(e){return fallback;}}function saveJson(key,value){if(!Storage.checkAvailability())return false;try{localStorage.setItem(key,JSON.stringify(value));return true;}catch(e){return false;}}function loadEntries(){return loadJson(HISTORY_KEY,[]);}function saveEntries(entries){return saveJson(HISTORY_KEY,entries);}function loadFolders(){return loadJson(FOLDERS_KEY,[]);}function saveFolders(folders){return saveJson(FOLDERS_KEY,folders);}function findFolder(id){return loadFolders().find(function(f){return f.id===id;});}function createFolder(name){var folders=loadFolders();var folder={id:Utils.uid('folder'),name:name,createdAt:new Date().toISOString()};folders.push(folder);saveFolders(folders);return folder;}function renameFolder(id,name){var folders=loadFolders();var folder=folders.find(function(f){return f.id===id;});if(folder){folder.name=name;saveFolders(folders);}return folder;}function questionCount(doc){return(doc.questions||[]).filter(function(q){return!Utils.isQuestionEmpty(q);}).length;}function escapeHtml(str){var div=document.createElement('div');div.textContent=str||'';return div.innerHTML;}function bnAwareSpan(text){var safe=escapeHtml(text);return Utils.hasBengali(text)?'<span class="has-bn-text">'+safe+'</span>':safe;}function recordEntry(){var doc=Utils.clone(State.get());var count=questionCount(doc);if(count===0)return;var entries=loadEntries();var title=(doc.document&&doc.document.title||'').trim();var subtitle=(doc.document&&doc.document.subtitle||'').trim();var folderId=doc.folderId||null;var nowIso=new Date().toISOString();var existingIdx=entries.findIndex(function(e){return e.title===title&&e.subtitle===subtitle&&e.folderId===folderId;});var entry={id:existingIdx>=0?entries[existingIdx].id:Utils.uid('hist'),title:title,subtitle:subtitle,folderId:folderId,language:doc.language,questionCount:count,createdAt:existingIdx>=0?entries[existingIdx].createdAt:nowIso,updatedAt:nowIso,hasAnswerKey:(doc.questions||[]).some(function(q){return window.QTypes?QTypes.hasAnswer(q):q.options.some(function(o){return o.correct;});}),state:doc};if(existingIdx>=0){entries.splice(existingIdx,1);}entries.unshift(entry);if(entries.length>200)entries.length=200;saveEntries(entries);}function formatDateTime(iso,lang){try{var d=new Date(iso);if(lang==='bn'){var bnMonths=['জানুয়ারি','ফেব্রুয়ারি','মার্চ','এপ্রিল','মে','জুন','জুলাই','আগস্ট','সেপ্টেম্বর','অক্টোবর','নভেম্বর','ডিসেম্বর'];var day=Utils.toBanglaNumber(d.getDate());var month=bnMonths[d.getMonth()];var year=Utils.toBanglaNumber(d.getFullYear());var hours24=d.getHours();var period=hours24<12?'সকাল':(hours24<17?'দুপুর':(hours24<20?'সন্ধ্যা':'রাত'));var hours12=hours24%12;if(hours12===0)hours12=12;var hoursStr=Utils.toBanglaNumber(hours12);var minutesStr=Utils.toBanglaNumber(d.getMinutes());var timeStr=period+' '+hoursStr+':'+minutesStr;return day+' '+month+' '+year+' \u00b7 '+timeStr;}var dateStr=d.toLocaleDateString('en-US',{day:'2-digit',month:'short',year:'numeric'});var timeStrEn=d.toLocaleTimeString('en-US',{hour:'2-digit',minute:'2-digit'});return dateStr+' \u00b7 '+timeStrEn;}catch(e){return'';}}function findEntry(id){return loadEntries().find(function(e){return e.id===id;});}function deleteEntry(id){var entries=loadEntries().filter(function(e){return e.id!==id;});saveEntries(entries);renderHistoryList();}function renderHistoryItem(entry,lang){var displayTitle=entry.title||I18n.t('history.untitled');var displaySub=entry.subtitle||'';var qCountDisplay=lang==='bn'?Utils.toBanglaNumber(entry.questionCount):entry.questionCount;var qLabel=qCountDisplay+' '+I18n.t(entry.questionCount===1?'history.itemsSingular':'history.itemsPlural');var when=formatDateTime(entry.updatedAt,lang);var html='<div class="history-item" data-id="'+entry.id+'">';html+='<div class="history-item__meta">';html+='<span class="history-item__badge">'+bnAwareSpan(qLabel)+'</span>';html+='<span class="history-item__badge">'+bnAwareSpan(when)+'</span>';html+='</div>';html+='<div class="history-item__divider"></div>';html+='<div class="history-item__row">';html+='<div class="history-item__icon"><i data-lucide="file-text"></i></div>';html+='<div class="history-item__main">';html+='<div class="history-item__title">'+bnAwareSpan(displayTitle)+'</div>';if(displaySub)html+='<div class="history-item__subtitle">'+bnAwareSpan(displaySub)+'</div>';html+='</div>';html+='<div class="history-item__actions">';html+='<div class="history-download">';html+='<button type="button" class="icon-btn history-download-btn" data-id="'+entry.id+'" aria-label="'+escapeHtml(I18n.t('history.download'))+'" title="'+escapeHtml(I18n.t('history.download'))+'"><i data-lucide="download"></i></button>';html+='</div>';html+='<button type="button" class="icon-btn history-edit-btn" data-id="'+entry.id+'" aria-label="'+escapeHtml(I18n.t('history.edit'))+'" title="'+escapeHtml(I18n.t('history.edit'))+'"><i data-lucide="pencil"></i></button>';html+='<button type="button" class="icon-btn icon-btn--danger history-delete-btn" data-id="'+entry.id+'" aria-label="'+escapeHtml(I18n.t('history.delete'))+'" title="'+escapeHtml(I18n.t('history.delete'))+'"><i data-lucide="trash-2"></i></button>';html+='</div>';html+='</div>';html+='</div>';return html;}function renderHistoryList(){var body=document.getElementById('historyModalBody');var entries=loadEntries();var folders=loadFolders();var lang=I18n.get();if(entries.length===0){body.innerHTML='<div class="history-empty">'+'<div class="history-empty__icon"><i data-lucide="inbox"></i></div>'+'<div class="history-empty__title">'+escapeHtml(I18n.t('history.emptyTitle'))+'</div>'+'<div class="history-empty__sub">'+escapeHtml(I18n.t('history.emptySub'))+'</div>'+'</div>';if(window.lucide)lucide.createIcons();return;}var ungrouped=entries.filter(function(e){return!e.folderId||!findFolder(e.folderId);});var byFolder={};folders.forEach(function(f){byFolder[f.id]=[];});entries.forEach(function(e){if(e.folderId&&byFolder[e.folderId])byFolder[e.folderId].push(e);});var html='';var nonEmptyFolders=folders.filter(function(f){return byFolder[f.id].length>0;});if(nonEmptyFolders.length>0){html+='<div class="history-section">';html+='<div class="history-section__label">'+escapeHtml(I18n.t('history.foldersSection'))+'</div>';nonEmptyFolders.forEach(function(folder){var items=byFolder[folder.id];html+='<div class="history-folder" data-folder-id="'+folder.id+'">';html+='<button type="button" class="history-folder__head">';html+='<i data-lucide="chevron-right" class="history-folder__chevron"></i>';html+='<div class="history-folder__icon"><i data-lucide="folder"></i></div>';html+='<span class="history-folder__name">'+bnAwareSpan(folder.name)+'</span>';html+='<span class="history-folder__count">'+(lang==='bn'?Utils.toBanglaNumber(items.length):items.length)+' '+I18n.t(items.length===1?'history.entrySingular':'history.entryPlural')+'</span>';html+='</button>';html+='<div class="history-folder__body"><div class="history-folder__body-inner">';items.forEach(function(entry){html+=renderHistoryItem(entry,lang);});html+='</div></div></div>';});html+='</div>';}if(ungrouped.length>0){html+='<div class="history-section">';if(nonEmptyFolders.length>0){html+='<div class="history-section__label">'+escapeHtml(I18n.t('history.ungroupedSection'))+'</div>';}html+='<div class="history-list">';ungrouped.forEach(function(entry){html+=renderHistoryItem(entry,lang);});html+='</div></div>';}body.innerHTML=html;if(window.lucide)lucide.createIcons();}var downloadPanel=null;function closeDownloadPanel(){if(downloadPanel&&downloadPanel.parentNode){downloadPanel.parentNode.removeChild(downloadPanel);}downloadPanel=null;}function openDownloadPanel(btn,entry){closeDownloadPanel();var panel=document.createElement('div');panel.className='history-download__panel';panel.innerHTML='<button type="button" class="history-download__item" data-action="question"><i data-lucide="file-text"></i><span>'+escapeHtml(I18n.t('history.downloadQuestion'))+'</span></button>'+'<button type="button" class="history-download__item" data-action="answer"><i data-lucide="check-circle"></i><span>'+escapeHtml(I18n.t('history.downloadAnswer'))+'</span></button>';document.body.appendChild(panel);var rect=btn.getBoundingClientRect();var top=rect.bottom+6;var panelWidth=210;var left=Math.min(Math.max(8,rect.right-panelWidth),window.innerWidth-panelWidth-8);panel.style.visibility='hidden';panel.style.top=top+'px';panel.style.left=left+'px';if(window.lucide)lucide.createIcons();requestAnimationFrame(function(){var panelHeight=panel.offsetHeight||90;if(top+panelHeight>window.innerHeight-8){panel.style.top=Math.max(8,rect.top-panelHeight-6)+'px';}panel.style.visibility='visible';});downloadPanel=panel;panel.addEventListener('click',function(evt){var actionBtn=evt.target.closest('[data-action]');if(!actionBtn)return;var wantsAnswer=actionBtn.dataset.action==='answer';downloadEntry(entry,wantsAnswer);closeDownloadPanel();});}document.addEventListener('click',function(evt){if(downloadPanel&&!downloadPanel.contains(evt.target)&&!evt.target.closest('.history-download-btn')){closeDownloadPanel();}},true);document.addEventListener('keydown',function(evt){if(evt.key==='Escape'&&downloadPanel)closeDownloadPanel();});function downloadEntry(entry,wantsAnswer){var liveState=State.get();var snapshot=Utils.clone(entry.state);State.replaceAll(snapshot);var restore=function(){State.replaceAll(liveState);};var task=wantsAnswer?PdfGen.downloadAnswerKeyOnly():PdfGen.downloadQuestionPaperOnly();if(task&&typeof task.then==='function'){task.then(restore,restore);}else{restore();}}function editEntry(entry){var snapshot=Utils.clone(entry.state);if(snapshot.folderId===undefined)snapshot.folderId=entry.folderId||null;State.replaceAll(snapshot);Storage.save();closeHistoryModal();document.body.setAttribute('data-doc-lang',snapshot.language);document.documentElement.setAttribute('data-theme',snapshot.settings.theme);document.querySelectorAll('.lang-switch__btn').forEach(function(b){b.classList.toggle('is-active',b.dataset.lang===snapshot.language);});var docFields=document.getElementById('inpTitle');if(docFields){document.getElementById('inpTitle').value=snapshot.document.title||'';document.getElementById('inpSubtitle').value=snapshot.document.subtitle||'';document.getElementById('inpMarks').value=snapshot.document.marks||'';document.getElementById('inpTime').value=snapshot.document.time||'';document.getElementById('inpNote').value=snapshot.document.note||'';['inpTitle','inpSubtitle','inpMarks','inpTime','inpNote'].forEach(function(id){Utils.applyAutoFont(document.getElementById(id),false);});}Settings.syncFormFromState();Editor.renderQuestions();Preview.updateImmediate(true);refreshFolderFieldUI();var previewContainer=document.getElementById('previewContainer');var pageSize=Preview.PAGE_SIZES_MM[snapshot.settings.pageSize]||Preview.PAGE_SIZES_MM.A4;if(previewContainer)previewContainer.style.aspectRatio=pageSize.w+' / '+pageSize.h;var fitZoom=Preview.computeFitZoom();snapshot.settings.fitZoom=fitZoom;document.getElementById('paperWrap').style.transform='scale('+(fitZoom/100)+')';document.getElementById('zoomValue').textContent='100%';var mobileTabs=document.querySelectorAll('.mobile-tabs__btn');if(mobileTabs.length){mobileTabs.forEach(function(b){b.classList.toggle('is-active',b.dataset.tab==='input');});var panelInput=document.getElementById('panelInput');var panelPreview=document.getElementById('panelPreview');if(panelInput)panelInput.classList.add('is-active-mobile');if(panelPreview)panelPreview.classList.remove('is-active-mobile');}if(window.lucide)lucide.createIcons();App.toast(I18n.t('history.loadedToast'),'success');}function openHistoryModal(){renderHistoryList();document.getElementById('historyOverlay').hidden=false;}function closeHistoryModal(){closeDownloadPanel();closeFolderDropdown();document.getElementById('historyOverlay').hidden=true;}var folderPanel=null;var folderPanelReposition=null;function closeFolderDropdown(){if(folderPanelReposition){window.removeEventListener('scroll',folderPanelReposition,true);window.removeEventListener('resize',folderPanelReposition);folderPanelReposition=null;}if(folderPanel&&folderPanel.parentNode){folderPanel.parentNode.removeChild(folderPanel);}folderPanel=null;var btn=document.getElementById('btnFolderSelect');if(btn)btn.setAttribute('aria-expanded','false');}function refreshFolderFieldUI(){var label=document.getElementById('folderSelectLabel');if(!label)return;var folderId=State.get().folderId;var folder=folderId?findFolder(folderId):null;if(folder){label.textContent=folder.name;label.classList.add('has-value');Utils.applyAutoFont(label,true);}else{label.textContent=I18n.t('field.ungrouped');label.classList.remove('has-value');label.classList.remove('has-bn-text');}}function setFolder(folderId){State.get().folderId=folderId;refreshFolderFieldUI();Storage.save();}function openFolderDropdown(){closeFolderDropdown();var btn=document.getElementById('btnFolderSelect');if(!btn)return;btn.setAttribute('aria-expanded','true');var folders=loadFolders();var currentFolderId=State.get().folderId;var panel=document.createElement('div');panel.className='folder-dropdown__panel';var html='';html+='<button type="button" class="folder-option'+(!currentFolderId?' is-selected':'')+'" data-folder-id="">'+'<i data-lucide="inbox"></i><span>'+escapeHtml(I18n.t('folder.ungroup'))+'</span></button>';if(folders.length>0){html+='<div class="folder-dropdown__sep"></div>';folders.forEach(function(f){html+='<button type="button" class="folder-option'+(f.id===currentFolderId?' is-selected':'')+'" data-folder-id="'+f.id+'">'+'<i data-lucide="folder"></i><span>'+bnAwareSpan(f.name)+'</span></button>';});}html+='<div class="folder-dropdown__sep"></div>';html+='<button type="button" class="folder-option folder-option--new" id="btnShowNewFolder"><i data-lucide="folder-plus"></i><span>'+escapeHtml(I18n.t('folder.newFolder'))+'</span></button>';html+='<div class="folder-new-row" id="folderNewRow" hidden>'+'<input type="text" id="folderNewInput" placeholder="'+escapeHtml(I18n.t('folder.newFolderPlaceholder'))+'" maxlength="60">'+'<button type="button" id="folderNewCreate">'+escapeHtml(I18n.t('folder.create'))+'</button>'+'</div>';panel.innerHTML=html;document.body.appendChild(panel);function positionPanel(){if(!panel.parentNode)return;var r=btn.getBoundingClientRect();if(r.bottom<0||r.top>window.innerHeight){closeFolderDropdown();return;}var margin=8;var width=Math.min(r.width,window.innerWidth-margin*2);panel.style.width=width+'px';var left=r.left;var maxLeft=window.innerWidth-width-margin;left=Math.max(margin,Math.min(left,maxLeft));panel.style.left=left+'px';var panelHeight=panel.offsetHeight;var spaceBelow=window.innerHeight-r.bottom-margin;var spaceAbove=r.top-margin;var top;if(spaceBelow>=panelHeight||spaceBelow>=spaceAbove){top=r.bottom+6;if(top+panelHeight>window.innerHeight-margin){panel.style.maxHeight=Math.max(120,window.innerHeight-top-margin)+'px';}else{panel.style.maxHeight='';}}else{panel.style.maxHeight=Math.min(panelHeight,spaceAbove)+'px';top=Math.max(margin,r.top-6-panel.offsetHeight);}panel.style.top=top+'px';}positionPanel();folderPanelReposition=Utils.debounce(positionPanel,30);window.addEventListener('scroll',folderPanelReposition,true);window.addEventListener('resize',folderPanelReposition);if(window.lucide)lucide.createIcons();folderPanel=panel;panel.addEventListener('click',function(evt){var opt=evt.target.closest('.folder-option[data-folder-id]');if(opt){setFolder(opt.dataset.folderId||null);closeFolderDropdown();return;}if(evt.target.closest('#btnShowNewFolder')){document.getElementById('folderNewRow').hidden=false;document.getElementById('btnShowNewFolder').hidden=true;var input=document.getElementById('folderNewInput');input.focus();Utils.bindAutoFont(input);return;}if(evt.target.closest('#folderNewCreate')){submitNewFolder();}});panel.addEventListener('keydown',function(evt){if(evt.key==='Enter'&&evt.target.id==='folderNewInput'){evt.preventDefault();submitNewFolder();}});function submitNewFolder(){var input=document.getElementById('folderNewInput');var name=(input.value||'').trim();if(!name){input.focus();return;}var folder=createFolder(name);setFolder(folder.id);closeFolderDropdown();App.toast(I18n.t('folder.createdToast'),'success');}}document.addEventListener('click',function(evt){if(folderPanel&&!folderPanel.contains(evt.target)&&!evt.target.closest('#btnFolderSelect')){closeFolderDropdown();}},true);document.addEventListener('keydown',function(evt){if(evt.key==='Escape'&&folderPanel)closeFolderDropdown();});document.addEventListener('DOMContentLoaded',function(){var historyBtn=document.getElementById('btnHistory');if(historyBtn){var freshBtn=historyBtn.cloneNode(true);historyBtn.parentNode.replaceChild(freshBtn,historyBtn);freshBtn.addEventListener('click',openHistoryModal);}document.getElementById('btnCloseHistory').addEventListener('click',closeHistoryModal);document.getElementById('historyOverlay').addEventListener('click',function(evt){if(evt.target.id==='historyOverlay')closeHistoryModal();});document.addEventListener('keydown',function(evt){if(evt.key==='Escape'&&!document.getElementById('historyOverlay').hidden)closeHistoryModal();});document.getElementById('historyModalBody').addEventListener('click',function(evt){var downloadBtn=evt.target.closest('.history-download-btn');if(downloadBtn){var entry1=findEntry(downloadBtn.dataset.id);if(entry1)openDownloadPanel(downloadBtn,entry1);return;}var editBtn=evt.target.closest('.history-edit-btn');if(editBtn){var entry2=findEntry(editBtn.dataset.id);if(entry2)editEntry(entry2);return;}var deleteBtn=evt.target.closest('.history-delete-btn');if(deleteBtn){if(window.confirm(I18n.t('history.deleteConfirm'))){deleteEntry(deleteBtn.dataset.id);}return;}var folderHead=evt.target.closest('.history-folder__head');if(folderHead){folderHead.closest('.history-folder').classList.toggle('is-open');}});var saveBtn=document.getElementById('btnSave');if(saveBtn)saveBtn.addEventListener('click',recordEntry);var resetBtn=document.getElementById('btnReset');if(resetBtn)resetBtn.addEventListener('click',function(){setTimeout(refreshFolderFieldUI,0);});var dlQuestionsOnly=document.getElementById('btnDownloadQuestionsOnly');if(dlQuestionsOnly)dlQuestionsOnly.addEventListener('click',function(){setTimeout(recordEntry,0);});var dlAnswersOnly=document.getElementById('btnDownloadAnswersOnly');if(dlAnswersOnly)dlAnswersOnly.addEventListener('click',function(){setTimeout(recordEntry,0);});var downloadBtnMain=document.getElementById('btnDownload');if(downloadBtnMain)downloadBtnMain.addEventListener('click',function(){if(!PdfGen.hasAnswerKey())setTimeout(recordEntry,0);});document.querySelectorAll('.lang-switch__btn').forEach(function(b){b.addEventListener('click',function(){setTimeout(refreshFolderFieldUI,0);});});var folderBtn=document.getElementById('btnFolderSelect');if(folderBtn){folderBtn.addEventListener('click',function(evt){evt.stopPropagation();if(folderPanel)closeFolderDropdown();else openFolderDropdown();});}refreshFolderFieldUI();window.__mcqRenderHistoryList=renderHistoryList;});})();
;

/* ===== block ===== */
(function(){'use strict';var LS_HISTORY_KEY='mcqGenerator.history.v1';var LS_FOLDERS_KEY='mcqGenerator.folders.v1';var LS_AI_KEY='mcqGenerator.ai.v1';var MIGRATION_FLAG_PREFIX='mcqGenerator.migrated.';var uid=null;var paperSigs={},folderSigs={};var unsubscribers=[];var applyingRemote=false;function readLocalJson(key,fallback){try{var raw=localStorage.getItem(key);return raw?JSON.parse(raw):fallback;}catch(e){return fallback;}}function writeLocalJson(key,value){try{localStorage.setItem(key,JSON.stringify(value));}catch(e){}}function stopWatchers(){paperSigs={};folderSigs={};unsubscribers.forEach(function(fn){try{fn();}catch(e){}});unsubscribers=[];}function setHeaderSignedIn(user){var glyph=document.getElementById('googleAuthGlyph');var avatar=document.getElementById('googleAuthAvatar');var btn=document.getElementById('btnGoogleAuth');if(user){if(user.photoURL){avatar.src=user.photoURL;avatar.hidden=false;glyph.style.display='none';}else{avatar.hidden=true;glyph.style.display='';}btn.title=user.displayName||user.email||'Signed in';btn.setAttribute('aria-label','Account: '+(user.displayName||user.email||''));}else{avatar.hidden=true;glyph.style.display='';btn.title='Sign in with Google';btn.setAttribute('aria-label','Sign in with Google');}}function setModalSignedIn(user){var outView=document.getElementById('googleAuthSignedOutView');var inView=document.getElementById('googleAuthSignedInView');if(user){outView.hidden=true;outView.style.display='none';inView.hidden=false;inView.style.display='flex';var avatar=document.getElementById('googleAuthSignedInAvatar');avatar.src=user.photoURL||'';document.getElementById('googleAuthSignedInEmail').textContent=user.email||'';}else{outView.hidden=false;outView.style.display='flex';inView.hidden=true;inView.style.display='none';}}function setAuthHint(message,isError){var hint=document.getElementById('googleAuthStatusHint');if(!hint)return;hint.textContent=message||'';hint.style.color=isError?'var(--danger)':'';}function openGoogleModal(){document.getElementById('googleAuthOverlay').hidden=false;window.lucide&&lucide.createIcons();}function closeGoogleModal(){document.getElementById('googleAuthOverlay').hidden=true;}function watchUserDoc(){var unsub=window.FirebaseSync.watchUserDoc(uid,function(data){if(!data)return;applyingRemote=true;try{var current=readLocalJson(LS_AI_KEY,{})||{};var merged=Object.assign({},current,{apiKey:typeof data.geminiApiKey==='string'?data.geminiApiKey:current.apiKey,model:data.geminiModel||current.model,insertMode:data.aiInsertMode||current.insertMode});writeLocalJson(LS_AI_KEY,merged);var keyInput=document.getElementById('inpGeminiKey');var modelSelect=document.getElementById('selGeminiModel');var modeSelect=document.getElementById('selAiInsertMode');if(keyInput&&document.activeElement!==keyInput)keyInput.value=merged.apiKey||'';if(modelSelect)modelSelect.value=merged.model||modelSelect.value;if(modeSelect)modeSelect.value=merged.insertMode||modeSelect.value;}finally{applyingRemote=false;}});unsubscribers.push(unsub);}function pushUserDocFromLocal(){if(applyingRemote||!uid)return;var ai=readLocalJson(LS_AI_KEY,{})||{};window.FirebaseSync.setUserDoc(uid,{geminiApiKey:ai.apiKey||'',geminiModel:ai.model||'',aiInsertMode:ai.insertMode||''}).catch(function(e){console.error('Failed to sync settings:',e);});}function watchPapers(){var unsub=window.FirebaseSync.watchPapers(uid,function(papers){applyingRemote=true;try{var mapped=papers.map(function(p){var copy=Object.assign({},p);if(copy.updatedAt&&typeof copy.updatedAt.toDate==='function'){copy.updatedAt=copy.updatedAt.toDate().toISOString();}else if(typeof copy.updatedAt!=='string'){copy.updatedAt=copy.createdAt||new Date().toISOString();}return copy;});if(pendingDeletePaperIds.size){mapped=mapped.filter(function(e){return!e||!e.id||!pendingDeletePaperIds.has(e.id);});}mapped.sort(function(a,b){return new Date(b.updatedAt||b.createdAt||0)-new Date(a.updatedAt||a.createdAt||0);});lastKnownPaperIds=mapped.filter(function(e){return e&&e.id;}).map(function(e){return e.id;});writeLocalJson(LS_HISTORY_KEY,mapped);if(typeof window.__mcqRenderHistoryList==='function'){window.__mcqRenderHistoryList();}}finally{applyingRemote=false;}});unsubscribers.push(unsub);}function watchFolders(){var unsub=window.FirebaseSync.watchFolders(uid,function(folders){applyingRemote=true;try{var mapped=folders.map(function(f){var copy=Object.assign({},f);delete copy.updatedAt;return copy;});if(pendingDeleteFolderIds.size){mapped=mapped.filter(function(f){return!f||!f.id||!pendingDeleteFolderIds.has(f.id);});}lastKnownFolderIds=mapped.filter(function(f){return f&&f.id;}).map(function(f){return f.id;});writeLocalJson(LS_FOLDERS_KEY,mapped);if(typeof window.__mcqRenderHistoryList==='function'){window.__mcqRenderHistoryList();}}finally{applyingRemote=false;}});unsubscribers.push(unsub);}var lastKnownPaperIds=null;var lastKnownFolderIds=null;var pendingDeletePaperIds=new Set();var pendingDeleteFolderIds=new Set();function pushHistoryFromLocal(newValue){if(applyingRemote||!uid)return;var entries;try{entries=JSON.parse(newValue)||[];}catch(e){return;}var currentIds=entries.filter(function(e){return e&&e.id;}).map(function(e){return e.id;});if(lastKnownPaperIds){lastKnownPaperIds.forEach(function(oldId){if(currentIds.indexOf(oldId)===-1){pendingDeletePaperIds.add(oldId);window.FirebaseSync.deletePaper(uid,oldId).then(function(){pendingDeletePaperIds.delete(oldId);}).catch(function(e){pendingDeletePaperIds.delete(oldId);console.error('Failed to delete a history entry:',e);});}});}lastKnownPaperIds=currentIds;entries.forEach(function(entry){if(!entry||!entry.id)return;var sig=null;try{sig=JSON.stringify(entry);}catch(e){}if(sig!==null&&paperSigs[entry.id]===sig)return;paperSigs[entry.id]=sig;window.FirebaseSync.setPaper(uid,entry.id,entry).catch(function(e){delete paperSigs[entry.id];console.error('Failed to sync a history entry:',e);});});}function pushFoldersFromLocal(newValue){if(applyingRemote||!uid)return;var folders;try{folders=JSON.parse(newValue)||[];}catch(e){return;}var currentIds=folders.filter(function(f){return f&&f.id;}).map(function(f){return f.id;});if(lastKnownFolderIds){lastKnownFolderIds.forEach(function(oldId){if(currentIds.indexOf(oldId)===-1){pendingDeleteFolderIds.add(oldId);window.FirebaseSync.deleteFolder(uid,oldId).then(function(){pendingDeleteFolderIds.delete(oldId);}).catch(function(e){pendingDeleteFolderIds.delete(oldId);console.error('Failed to delete a folder:',e);});}});}lastKnownFolderIds=currentIds;folders.forEach(function(folder){if(!folder||!folder.id)return;var sig=null;try{sig=JSON.stringify(folder);}catch(e){}if(sig!==null&&folderSigs[folder.id]===sig)return;folderSigs[folder.id]=sig;window.FirebaseSync.setFolder(uid,folder.id,folder).catch(function(e){delete folderSigs[folder.id];console.error('Failed to sync a folder:',e);});});}var nativeSetItem=localStorage.setItem.bind(localStorage);localStorage.setItem=function(key,value){nativeSetItem(key,value);if(!uid)return;if(key===LS_AI_KEY)pushUserDocFromLocal();else if(key===LS_HISTORY_KEY)pushHistoryFromLocal(value);else if(key===LS_FOLDERS_KEY)pushFoldersFromLocal(value);};function migrateIfNeeded(){var flagKey=MIGRATION_FLAG_PREFIX+uid;if(localStorage.getItem(flagKey))return Promise.resolve();var ai=readLocalJson(LS_AI_KEY,{})||{};var papers=readLocalJson(LS_HISTORY_KEY,[])||[];var folders=readLocalJson(LS_FOLDERS_KEY,[])||[];return window.FirebaseSync.migrateLocalData(uid,{userDocPatch:{geminiApiKey:ai.apiKey||'',geminiModel:ai.model||'',aiInsertMode:ai.insertMode||''},papers:papers,folders:folders}).then(function(){localStorage.setItem(flagKey,'1');}).catch(function(e){console.error('Initial data migration to Firestore failed:',e);});}var LS_LAST_UID_KEY='mcqGenerator.lastUid';function clearLocalAppData(){writeLocalJson(LS_HISTORY_KEY,[]);writeLocalJson(LS_FOLDERS_KEY,[]);try{localStorage.removeItem(LS_AI_KEY);}catch(e){}lastKnownPaperIds=null;lastKnownFolderIds=null;pendingDeletePaperIds.clear();pendingDeleteFolderIds.clear();if(typeof window.__mcqRenderHistoryList==='function'){window.__mcqRenderHistoryList();}}function handleSignedIn(user){uid=user.uid;var lastUid=null;try{lastUid=localStorage.getItem(LS_LAST_UID_KEY);}catch(e){}setHeaderSignedIn(user);setModalSignedIn(user);function afterOwnershipCheck(){try{localStorage.setItem(LS_LAST_UID_KEY,uid);}catch(e){}migrateIfNeeded().then(function(){watchUserDoc();watchPapers();watchFolders();});}if(lastUid&&lastUid!==uid){applyingRemote=true;try{clearLocalAppData();}finally{applyingRemote=false;}afterOwnershipCheck();}else{afterOwnershipCheck();}}function handleSignedOut(){uid=null;stopWatchers();applyingRemote=true;try{clearLocalAppData();}finally{applyingRemote=false;}try{localStorage.removeItem(LS_LAST_UID_KEY);}catch(e){}setHeaderSignedIn(null);setModalSignedIn(null);}function initDevInfoModal(){var DEV_INFO={name:'RIFAT HOSSAIN',avatar:'data:image/jpeg;base64,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',facebook:'https://www.facebook.com/share/1DNatqf5gi/',instagram:'https://www.instagram.com/rifatplex?stkn=MWhyaHE3bW90cXNkMQ==',whatsapp:'https://wa.me/8801838301818',phone:'+8801838301818',email:'rifatplex@gmail.com'};var btn=document.getElementById('btnDevInfo');var overlay=document.getElementById('devInfoOverlay');if(!btn||!overlay)return;var avatarImg=document.getElementById('devInfoAvatar');var fbLink=document.getElementById('devInfoFacebook');var igLink=document.getElementById('devInfoInstagram');var waLink=document.getElementById('devInfoWhatsapp');var callLink=document.getElementById('devInfoCall');var emailLink=document.getElementById('devInfoEmail');function applyDevInfo(){if(DEV_INFO.avatar)avatarImg.src=DEV_INFO.avatar;if(DEV_INFO.facebook)fbLink.href=DEV_INFO.facebook;if(DEV_INFO.instagram)igLink.href=DEV_INFO.instagram;if(DEV_INFO.whatsapp)waLink.href=DEV_INFO.whatsapp;if(DEV_INFO.phone)callLink.href='tel:'+DEV_INFO.phone;if(DEV_INFO.email)emailLink.href='mailto:'+DEV_INFO.email;}function openDevInfo(){overlay.hidden=false;window.lucide&&lucide.createIcons();}function closeDevInfo(){overlay.hidden=true;}applyDevInfo();btn.addEventListener('click',openDevInfo);var closeBtn=document.getElementById('btnCloseDevInfo');closeBtn&&closeBtn.addEventListener('click',closeDevInfo);overlay.addEventListener('click',function(evt){if(evt.target.id==='devInfoOverlay')closeDevInfo();});document.addEventListener('keydown',function(evt){if(evt.key==='Escape'&&!overlay.hidden)closeDevInfo();});}function initAuthUi(){var btnGoogleAuth=document.getElementById('btnGoogleAuth');var btnContinue=document.getElementById('btnGoogleContinue');var btnSignOut=document.getElementById('btnGoogleSignOut');var btnClose=document.getElementById('btnCloseGoogleAuth');var overlay=document.getElementById('googleAuthOverlay');var freshBtn=btnGoogleAuth.cloneNode(true);btnGoogleAuth.parentNode.replaceChild(freshBtn,btnGoogleAuth);freshBtn.addEventListener('click',openGoogleModal);btnClose.addEventListener('click',closeGoogleModal);overlay.addEventListener('click',function(evt){if(evt.target.id==='googleAuthOverlay')closeGoogleModal();});btnContinue.addEventListener('click',function(){setAuthHint('Signing in…',false);window.FirebaseSync.signInWithGoogle().then(function(user){setAuthHint('');if(user)closeGoogleModal();}).catch(function(err){console.error('Google sign-in failed:',err);setAuthHint('Sign-in failed. Please try again.',true);});});btnSignOut.addEventListener('click',function(){window.FirebaseSync.signOut().then(function(){closeGoogleModal();if(typeof App!=='undefined')App.toast('Signed out','default');}).catch(function(err){console.error('Sign out failed:',err);});});}function boot(){if(!window.FirebaseSync)return;initAuthUi();window.FirebaseSync.onAuthChange(function(user){if(user)handleSignedIn(user);else handleSignedOut();});window.FirebaseSync.completeRedirectSignIn();}if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',function(){initDevInfoModal();if(window.FirebaseSync)boot();else window.addEventListener('firebasesync:ready',boot,{once:true});});}else{initDevInfoModal();if(window.FirebaseSync)boot();else window.addEventListener('firebasesync:ready',boot,{once:true});}})();
;

/* ===== block ===== */
(function(){
  "use strict";
  function setup(){
    var list=document.getElementById("questionsList");
    if(!list||list.dataset.iqDragReady)return;
    list.dataset.iqDragReady="1";
    function addHandles(){
      list.querySelectorAll(".question-card").forEach(function(card){
        if(card.querySelector(".iq-question-drag"))return;
        var head=card.querySelector(".question-card__head");if(!head)return;
        var handle=document.createElement("button");handle.type="button";handle.className="iq-question-drag";handle.textContent="⠿";handle.title="Drag to reorder question";handle.setAttribute("aria-label","Drag to reorder question");
        var number=head.querySelector(".question-card__number");if(number&&number.parentNode===head)head.insertBefore(handle,number);else head.insertBefore(handle,head.firstChild);
      });
    }
    var observer=new MutationObserver(addHandles);observer.observe(list,{childList:true,subtree:true});addHandles();
    var drag=null;
    list.addEventListener("pointerdown",function(ev){var handle=ev.target.closest(".iq-question-drag");if(!handle)return;var card=handle.closest(".question-card");if(!card)return;drag={card:card,id:ev.pointerId};card.classList.add("iq-is-dragging");try{handle.setPointerCapture(ev.pointerId);}catch(ignore){}ev.preventDefault();});
    list.addEventListener("pointermove",function(ev){if(!drag)return;var target=document.elementFromPoint(ev.clientX,ev.clientY);var over=target&&target.closest(".question-card");list.querySelectorAll(".question-card").forEach(function(c){c.classList.toggle("iq-drop-target",c===over&&c!==drag.card);});if(over&&over!==drag.card){var rect=over.getBoundingClientRect();list.insertBefore(drag.card,ev.clientY<rect.top+rect.height/2?over:over.nextSibling);}});
    function finish(){if(!drag)return;drag.card.classList.remove("iq-is-dragging");list.querySelectorAll(".question-card").forEach(function(c){c.classList.remove("iq-drop-target");});drag=null;var state=(typeof State!=="undefined"&&State.get)?State.get():null;if(state&&Array.isArray(state.questions)){var byId=new Map(state.questions.map(function(q){return[q.id,q];}));var ordered=Array.from(list.querySelectorAll(".question-card[data-id]")).map(function(c){return byId.get(c.dataset.id);}).filter(Boolean);if(ordered.length===state.questions.length){state.questions=ordered;try{Storage.save();}catch(ignore){}if(typeof Preview!=="undefined"&&Preview.update)Preview.update();if(typeof Editor!=="undefined"&&Editor.updateCount)Editor.updateCount();}}}
    list.addEventListener("pointerup",finish);list.addEventListener("pointercancel",finish);
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",setup);else setup();
})();
;

/* ===== block ===== */
/* Toggle compact header class from the actual question-list width (works for any panel split / viewport). */
(function(){
  var list = document.getElementById('questionsList');
  if (!list || !window.ResizeObserver) return;
  var ro = new ResizeObserver(function(entries){
    var w = entries[0].contentRect.width;
    if (w <= 0) return;
    list.classList.toggle('is-compact', w < 640);
  });
  ro.observe(list);
})();
;

/* ===== block ===== */
/* Split creative questions into stimulus+sub-question pieces so pages and columns fill without blank gaps */
window.__iqExpand=function(list,showAns){
  var out=[];
  list.forEach(function(q,index){
    if(window.QTypes&&QTypes.typeOf(q)==="creative"){
      var subs=q.subQuestions||[],vis=[],hasAns=false;
      subs.forEach(function(s,i){if(Utils.stripHtml(s.html||"")!=="")vis.push(i);if(Utils.stripHtml(s.answerHtml||"")!=="")hasAns=true;});
      var ans=!!showAns&&hasAns;
      if(vis.length>1||ans){
        vis.forEach(function(si,k){var c=Object.assign({},q);c._base=q;c._subs=[si];c._noHead=k>0;c._more=k<vis.length-1||ans;out.push({q:c,index:index});});
        if(ans){
          var av=vis.filter(function(si){return Utils.stripHtml(subs[si].answerHtml||"")!=="";});
          av.forEach(function(si,k){var a=Object.assign({},q);a._base=q;a._subs=[];a._noHead=true;a._ansBlock=true;a._ansSub=si;a._ansFirst=(k===0);a._more=k<av.length-1;out.push({q:a,index:index});});
        }
        return;
      }
    }
    out.push({q:q,index:index});
  });
  return out;
};
;

/* ===== block ===== */
/* Setting: show / hide the [marks] indicator on the right of each question */
(function () {
  "use strict";
  var chk = document.getElementById("chkShowMarks");
  if (!chk || typeof State === "undefined" || typeof Preview === "undefined") return;
  function on() { return State.get().settings.showMarks !== false; }
  function apply() {
    document.body.toggleAttribute("data-hide-marks", !on());
    chk.checked = on();
  }
  var origUpd = Preview.update;
  Preview.update = function () { apply(); return origUpd.apply(this, arguments); };
  chk.addEventListener("change", function () {
    State.get().settings.showMarks = !!chk.checked;
    Preview.update();
    try { Storage.save(); } catch (e) {}
  });
  apply();
})();
;

/* ===== iq-frac-tool-js ===== */
(function(){
  "use strict";
  var lastEd=null,lastRange=null,target=null,kind="simple",rstyle="dot",tab="frac";
  var BN="০১২৩৪৫৬৭৮৯";
  function esc(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");}
  function bn(t){return document.body.getAttribute("data-doc-lang")==="bn"?String(t).replace(/[0-9]/g,function(d){return BN[+d];}):String(t);}
  function v(id){return bn((document.getElementById(id).value||"").trim());}
  document.addEventListener("selectionchange",function(){
    var sel=window.getSelection();if(!sel||!sel.rangeCount)return;
    var n=sel.anchorNode;n=n&&(n.nodeType===1?n:n.parentElement);
    var ed=n&&n.closest&&n.closest(".editor-area");
    if(ed){lastEd=ed;lastRange=sel.getRangeAt(0).cloneRange();}
  });
  var m=document.createElement("div");m.id="iqFracModal";m.className="iqf";m.hidden=true;
  m.innerHTML='<div class="iqf__sheet" role="dialog" aria-modal="true" aria-label="ভগ্নাংশ ও পৌনঃপুনিক সংখ্যা">'+
   '<div class="iqf__tabs"><button type="button" data-tab="frac" class="is-on">ভগ্নাংশ</button><button type="button" data-tab="rec">পৌনঃপুনিক সংখ্যা</button></div>'+
   '<div data-pane="frac"><div class="iqf__seg"><button type="button" data-kind="simple" class="is-on">সাধারণ</button><button type="button" data-kind="mixed">মিশ্র</button></div>'+
   '<div class="iqf__row"><label id="iqfWL" hidden>পূর্ণ সংখ্যা<input id="iqfW" inputmode="numeric" autocomplete="off"></label><label>লব<input id="iqfN" autocomplete="off"></label><label>হর<input id="iqfD" autocomplete="off"></label></div></div>'+
   '<div data-pane="rec" hidden><div class="iqf__row"><label>পূর্ণ অংশ<input id="iqfI" placeholder="০" autocomplete="off"></label><label>অপৌনঃ অংশ<input id="iqfX" placeholder="৩" autocomplete="off"></label><label>পৌনঃপুনিক অংশ<input id="iqfR" placeholder="১২" autocomplete="off"></label></div>'+
   '<div class="iqf__seg"><button type="button" data-style="dot" class="is-on">ডট চিহ্ন</button><button type="button" data-style="bar">বার চিহ্ন</button></div></div>'+
   '<div class="iqf__prev"><span class="iqf__plabel">প্রিভিউ</span><div class="iqf__pv" id="iqfPv"></div></div>'+
   '<div class="iqf__act"><button type="button" class="iqf__cancel">বাতিল</button><button type="button" class="iqf__ok" id="iqfOk">বসান</button></div></div>';
  document.body.appendChild(m);
  function build(){
    if(tab==="frac"){
      var n=v("iqfN"),d=v("iqfD"),w=v("iqfW");
      if(!n||!d||(kind==="mixed"&&!w))return "";
      var f='<span class="iq-fr"><span class="iq-fr-n">'+esc(n)+'</span><span class="iq-fr-d">'+esc(d)+'</span></span>';
      return (kind==="mixed"?'<span class="iq-mx">'+esc(w)+'</span>':"")+f;
    }
    var r=v("iqfR");if(!r)return "";
    var i=v("iqfI")||bn("0"),x=v("iqfX"),ds=Array.from(r),out;
    if(rstyle==="bar")out='<span class="iq-rcb">'+esc(r)+'</span>';
    else out=ds.map(function(c,k){return (k===0||k===ds.length-1)?'<span class="iq-rc">'+esc(c)+'</span>':esc(c);}).join("");
    return esc(i)+"."+esc(x)+out;
  }
  function refresh(){var h=build();document.getElementById("iqfPv").innerHTML=h||'<span style="font-size:13px;color:var(--text-faint)">মান লিখুন</span>';document.getElementById("iqfOk").disabled=!h;}
  function setActive(sel,attr,val){m.querySelectorAll(sel).forEach(function(b){b.classList.toggle("is-on",b.getAttribute(attr)===val);});}
  function open(ed){target=ed;tab="frac";kind="simple";rstyle="dot";
    m.querySelectorAll("input").forEach(function(i){i.value="";});
    setActive("[data-tab]","data-tab","frac");setActive("[data-kind]","data-kind","simple");setActive("[data-style]","data-style","dot");
    m.querySelector('[data-pane="frac"]').hidden=false;m.querySelector('[data-pane="rec"]').hidden=true;document.getElementById("iqfWL").hidden=true;
    m.hidden=false;refresh();setTimeout(function(){document.getElementById("iqfN").focus();},30);}
  function close(){m.hidden=true;}
  function insert(){
    var h=build();if(!h||!target)return;
    target.focus();
    var sel=window.getSelection();sel.removeAllRanges();
    if(lastRange&&target.contains(lastRange.commonAncestorContainer))sel.addRange(lastRange);
    else{var r=document.createRange();r.selectNodeContents(target);r.collapse(false);sel.addRange(r);}
    document.execCommand("insertHTML",false,h);
    target.dispatchEvent(new Event("input",{bubbles:true}));
    if(window.Preview&&Preview.update)Preview.update();
    close();
  }
  m.addEventListener("click",function(e){
    var t=e.target;
    if(t===m||t.closest(".iqf__cancel")){close();return;}
    if(t.closest(".iqf__ok")){insert();return;}
    var b;
    if((b=t.closest("[data-tab]"))){tab=b.dataset.tab;setActive("[data-tab]","data-tab",tab);m.querySelector('[data-pane="frac"]').hidden=tab!=="frac";m.querySelector('[data-pane="rec"]').hidden=tab!=="rec";refresh();}
    else if((b=t.closest("[data-kind]"))){kind=b.dataset.kind;setActive("[data-kind]","data-kind",kind);document.getElementById("iqfWL").hidden=kind!=="mixed";refresh();}
    else if((b=t.closest("[data-style]"))){rstyle=b.dataset.style;setActive("[data-style]","data-style",rstyle);refresh();}
  });
  m.addEventListener("input",refresh);
  document.addEventListener("keydown",function(e){if(!m.hidden&&e.key==="Escape")close();});
  /* add the button to every formatting toolbar (the one the pencil opens), right after the Σ symbols button */
  function inject(){
    document.querySelectorAll(".inline-toolbar").forEach(function(tb){
      if(tb.querySelector(".rt-frac"))return;
      var dd=tb.querySelector(".rt-dropdown");if(!dd)return;
      var b=document.createElement("button");b.type="button";b.className="rt-btn rt-frac";
      b.title="ভগ্নাংশ ও পৌনঃপুনিক সংখ্যা";b.setAttribute("aria-label",b.title);b.textContent="½";
      dd.parentNode.insertBefore(b,dd.nextSibling);
    });
  }
  var pend=false;
  new MutationObserver(function(){if(pend)return;pend=true;requestAnimationFrame(function(){pend=false;inject();});}).observe(document.body,{childList:true,subtree:true});
  inject();
  document.addEventListener("mousedown",function(e){if(e.target.closest&&e.target.closest(".rt-frac"))e.preventDefault();});
  document.addEventListener("click",function(e){
    var b=e.target.closest&&e.target.closest(".rt-frac");if(!b)return;
    e.preventDefault();e.stopPropagation();
    var card=b.closest(".question-card"),ed=null;
    if(lastEd&&card&&card.contains(lastEd))ed=lastEd;
    else if(card)ed=card.querySelector(".question-editor")||card.querySelector(".editor-area");
    if(ed)open(ed);
  },true);
})();
;

/* ===== iq-img-tool-js ===== */
(function(){
  "use strict";
  var lastEd=null,lastRange=null,target=null,files=[],size="M",align="c",addFig=null,limit=3,cur=null;
  var ICON='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="1.6"/><path d="M21 15l-5-5L5 21"/></svg>';
  /* ---- AI diagrams: SVG string -> safe <img> figure ---- */
  window.__iqFig=function(svg){
    try{
      svg=String(svg||"").trim();
      if(!/^<svg[\s>]/i.test(svg))return "";
      if(window.DOMPurify)svg=DOMPurify.sanitize(svg,{USE_PROFILES:{svg:true},FORBID_TAGS:["foreignObject","script","image","a"]});
      if(!/^<svg/i.test(svg))return "";
      if(!/xmlns\s*=/.test(svg))svg=svg.replace(/^<svg/i,'<svg xmlns="http://www.w3.org/2000/svg"');
      var w=300,h=200,vb=svg.match(/viewBox\s*=\s*["']\s*(-?[\d.]+)[ ,]+(-?[\d.]+)[ ,]+([\d.]+)[ ,]+([\d.]+)/i);
      if(vb){w=+vb[3];h=+vb[4];}
      else{var ww=svg.match(/\swidth\s*=\s*["']([\d.]+)/i),hh=svg.match(/\sheight\s*=\s*["']([\d.]+)/i);if(ww&&hh){w=+ww[1];h=+hh[1];}svg=svg.replace(/^<svg/i,'<svg viewBox="0 0 '+w+' '+h+'"');}
      if(!(w>0&&h>0))return "";
      var b64=btoa(unescape(encodeURIComponent(svg)));
      return '<div class="iq-fig"><img class="iq-img" alt="" style="width:'+(w>=h*1.6?70:55)+'%;aspect-ratio:'+Math.round(w)+'/'+Math.round(h)+'" src="data:image/svg+xml;base64,'+b64+'"></div>';
    }catch(e){return "";}
  };
  /* ---- size / alignment helpers ---- */
  function sizeW(key,n){if(n===1)return {S:35,M:60,L:100}[key];return Math.floor({S:60,M:85,L:100}[key]/n-1);}
  function imgs(fig){return fig.querySelectorAll("img.iq-img");}
  function sizeOf(fig){var im=imgs(fig),n=im.length;if(!n)return "M";var w=parseFloat(im[0].style.width)||60;if(n===1)return w<=45?"S":w<=80?"M":"L";var t=w*n+n;return t<=72?"S":t<=92?"M":"L";}
  function applySize(fig,key){var im=imgs(fig),n=im.length;fig.classList.toggle("iq-row",n>1);im.forEach(function(i){i.style.width=sizeW(key,n)+"%";});}
  function alignOf(fig){return fig.classList.contains("iq-al-l")?"l":fig.classList.contains("iq-al-r")?"r":"c";}
  function setAlign(fig,a){fig.classList.remove("iq-al-l","iq-al-r");if(a==="l")fig.classList.add("iq-al-l");if(a==="r")fig.classList.add("iq-al-r");}
  function imgHtml(f,w){return '<img class="iq-img" alt="" style="width:'+w+'%;aspect-ratio:'+f.ratio+'" src="'+f.data+'">';}
  function changed(ed){if(!ed)return;ed.dispatchEvent(new Event("input",{bubbles:true}));if(window.Preview&&Preview.update)Preview.update();}
  document.addEventListener("selectionchange",function(){
    var sel=window.getSelection();if(!sel||!sel.rangeCount)return;
    var n=sel.anchorNode;n=n&&(n.nodeType===1?n:n.parentElement);
    var ed=n&&n.closest&&n.closest(".editor-area");
    if(ed){lastEd=ed;lastRange=sel.getRangeAt(0).cloneRange();}
  });
  /* ---- modal ---- */
  var m=document.createElement("div");m.className="iqf";m.hidden=true;
  m.innerHTML='<div class="iqf__sheet" role="dialog" aria-modal="true" aria-label="ছবি বা ডায়াগ্রাম">'+
    '<label class="iqi__pick"><input type="file" accept="image/*" multiple id="iqiFile">'+ICON.replace('<svg','<svg width="20" height="20"')+'<span id="iqiPickT">ছবি বাছাই করুন (একসাথে ৩টি পর্যন্ত)</span></label>'+
    '<div class="iqi__pv" id="iqiPv">কোনো ছবি বাছাই করা হয়নি</div>'+
    '<div class="iqi__row" id="iqiSizeRow"><div class="iqf__seg" id="iqiSize"><button type="button" data-w="S">ছোট</button><button type="button" data-w="M" class="is-on">মাঝারি</button><button type="button" data-w="L">বড়</button></div></div>'+
    '<div class="iqi__row" id="iqiAlignRow"><div class="iqf__seg" id="iqiAlign"><button type="button" data-a="l">বাম</button><button type="button" data-a="c" class="is-on">মাঝখানে</button><button type="button" data-a="r">ডান</button></div></div>'+
    '<div class="iqi__note" id="iqiNote">একাধিক ছবি বাছলে সেগুলো পাশাপাশি বসবে। বসানোর পর ছবিতে ক্লিক করে আকার, অ্যালাইনমেন্ট বদলানো, পাশে ছবি যোগ বা মুছে ফেলা যায়।</div>'+
    '<div class="iqf__act"><button type="button" class="iqf__cancel">বাতিল</button><button type="button" class="iqf__ok" id="iqiOk" disabled>বসান</button></div></div>';
  document.body.appendChild(m);
  var pop=document.createElement("div");pop.className="iqimg-pop";pop.hidden=true;
  pop.innerHTML='<button type="button" data-sz="S">ছোট</button><button type="button" data-sz="M">মাঝারি</button><button type="button" data-sz="L">বড়</button><span class="sep"></span>'+
    '<button type="button" class="ic" data-al="l" title="বাম" aria-label="বাম"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6h18"/><path d="M3 12h11"/><path d="M3 18h15"/></svg></button><button type="button" class="ic" data-al="c" title="মাঝখানে" aria-label="মাঝখানে"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6h18"/><path d="M7 12h10"/><path d="M5 18h14"/></svg></button><button type="button" class="ic" data-al="r" title="ডান" aria-label="ডান"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6h18"/><path d="M10 12h11"/><path d="M6 18h15"/></svg></button><span class="sep"></span>'+
    '<button type="button" class="ic" data-crop="1" title="ক্রপ করুন" aria-label="ক্রপ করুন"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 2v14a2 2 0 0 0 2 2h14"/><path d="M18 22V8a2 2 0 0 0-2-2H2"/></svg></button><button type="button" class="ic" data-clean="1" title="ডায়াগ্রাম পরিষ্কার (ব্যাকগ্রাউন্ড রিমুভ)" aria-label="ডায়াগ্রাম পরিষ্কার"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"/><path d="m14 7 3 3"/><path d="M5 6v4"/><path d="M19 14v4"/><path d="M10 2v2"/><path d="M7 8H3"/><path d="M21 16h-4"/><path d="M11 3H9"/></svg></button><button type="button" class="ic" data-add="1" title="পাশে ছবি যোগ করুন" aria-label="পাশে ছবি যোগ করুন"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 5v14"/><path d="M5 12h14"/></svg></button><button type="button" class="ic d" data-del="1" title="মুছুন" aria-label="মুছুন"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/></svg></button>';
  document.body.appendChild(pop);
  function compress(file,cb){
    var url=URL.createObjectURL(file),im=new Image();
    im.onload=function(){
      var W=im.naturalWidth,H=im.naturalHeight,k=Math.min(1,1000/Math.max(W,H)),q=0.86,out="";
      for(var t=0;t<5;t++){
        var c=document.createElement("canvas");c.width=Math.max(1,Math.round(W*k));c.height=Math.max(1,Math.round(H*k));
        var x=c.getContext("2d");x.fillStyle="#fff";x.fillRect(0,0,c.width,c.height);x.drawImage(im,0,0,c.width,c.height);
        out=c.toDataURL("image/jpeg",q);
        if(out.length<260000)break;
        k*=0.82;q=Math.max(0.6,q-0.06);
      }
      URL.revokeObjectURL(url);cb(out,Math.round(W*k)+"/"+Math.round(H*k));
    };
    im.onerror=function(){URL.revokeObjectURL(url);cb("","");};
    im.src=url;
  }
  function mark(sel,attr,val){m.querySelectorAll(sel).forEach(function(b){b.classList.toggle("is-on",b.getAttribute(attr)===val);});}
  function open(ed,fig){
    target=ed;addFig=fig||null;files=[];size="M";align="c";
    limit=addFig?Math.max(0,3-imgs(addFig).length):3;
    document.getElementById("iqiFile").value="";
    document.getElementById("iqiPv").textContent="কোনো ছবি বাছাই করা হয়নি";
    document.getElementById("iqiOk").disabled=true;
    document.getElementById("iqiOk").textContent=addFig?"যোগ করুন":"বসান";
    document.getElementById("iqiPickT").textContent=addFig?"পাশে বসানোর ছবি বাছাই করুন (আর "+limit+"টি পর্যন্ত)":"ছবি বাছাই করুন (একসাথে ৩টি পর্যন্ত)";
    document.getElementById("iqiSizeRow").hidden=!!addFig;document.getElementById("iqiAlignRow").hidden=!!addFig;document.getElementById("iqiNote").hidden=!!addFig;
    mark("#iqiSize button","data-w","M");mark("#iqiAlign button","data-a","c");
    m.hidden=false;
  }
  function close(){m.hidden=true;}
  function insert(){
    if(!files.length||!target)return;
    if(addFig){
      if(!target.contains(addFig)){close();return;}
      var key=sizeOf(addFig);
      files.forEach(function(f){var t=document.createElement("template");t.innerHTML=imgHtml(f,50);addFig.appendChild(t.content.firstChild);});
      applySize(addFig,key);changed(target);close();return;
    }
    target.focus();
    var sel=window.getSelection();sel.removeAllRanges();
    if(lastRange&&target.contains(lastRange.commonAncestorContainer))sel.addRange(lastRange);
    else{var r=document.createRange();r.selectNodeContents(target);r.collapse(false);sel.addRange(r);}
    var n=files.length,w=sizeW(size,n);
    var html='<div class="iq-fig'+(n>1?" iq-row":"")+(align==="l"?" iq-al-l":align==="r"?" iq-al-r":"")+'">'+files.map(function(f){return imgHtml(f,w);}).join("")+'</div><br>';
    document.execCommand("insertHTML",false,html);
    changed(target);close();
  }
  m.addEventListener("change",function(e){
    if(e.target.id!=="iqiFile")return;
    var list=Array.prototype.slice.call(e.target.files||[],0,limit),pv=document.getElementById("iqiPv");
    files=[];document.getElementById("iqiOk").disabled=true;
    if(!list.length)return;
    pv.textContent="প্রস্তুত হচ্ছে...";
    (function next(i){
      if(i>=list.length){
        if(!files.length){pv.textContent="ছবি পড়া যায়নি";return;}
        pv.innerHTML="";files.forEach(function(f){var im=new Image();im.src=f.data;pv.appendChild(im);});
        document.getElementById("iqiOk").disabled=false;return;
      }
      compress(list[i],function(url,r){if(url)files.push({data:url,ratio:r});next(i+1);});
    })(0);
  });
  m.addEventListener("click",function(e){
    var t=e.target,b;
    if(t===m||t.closest(".iqf__cancel")){close();return;}
    if(t.closest("#iqiOk")){insert();return;}
    if((b=t.closest("#iqiSize button"))){size=b.dataset.w;mark("#iqiSize button","data-w",size);}
    else if((b=t.closest("#iqiAlign button"))){align=b.dataset.a;mark("#iqiAlign button","data-a",align);}
  });
  document.addEventListener("keydown",function(e){if(e.key==="Escape"){if(!m.hidden)close();if(cm&&!cm.hidden)cclose();if(km&&!km.hidden)kclose();pop.hidden=true;}});
  /* ---- crop an inserted image ---- */
  var cm=document.createElement("div");cm.className="iqf iqc";cm.hidden=true;
  cm.innerHTML='<div class="iqf__sheet iqc__sheet" role="dialog" aria-modal="true" aria-label="ছবি ক্রপ করুন">'+
    '<div class="iqc__title">যে অংশটুকু রাখতে চান সেটি বেছে নিন</div>'+
    '<div class="iqc__wrap"><div class="iqc__stage" id="iqcStage"><img id="iqcImg" alt="" draggable="false"><div class="iqc__box" id="iqcBox"></div></div></div>'+
    '<div class="iqf__act"><button type="button" class="iqc__cancel">বাতিল</button><button type="button" class="iqc__reset">রিসেট</button><button type="button" class="iqf__ok iqc__ok">ক্রপ করুন</button></div></div>';
  document.body.appendChild(cm);
  var cImg=cm.querySelector("#iqcImg"),cBox=cm.querySelector("#iqcBox"),cTarget=null,cEd=null,CR={fx:.06,fy:.06,fw:.88,fh:.88},cMode=null,cStart=null;
  ["nw","n","ne","e","se","s","sw","w"].forEach(function(h){var d=document.createElement("span");d.className="iqc__h iqc__h--"+h;d.dataset.h=h;cBox.appendChild(d);});
  function cdraw(){var r=cImg.getBoundingClientRect();cBox.style.left=CR.fx*r.width+"px";cBox.style.top=CR.fy*r.height+"px";cBox.style.width=CR.fw*r.width+"px";cBox.style.height=CR.fh*r.height+"px";}
  function creset(){CR={fx:.06,fy:.06,fw:.88,fh:.88};cdraw();}
  function openCrop(img,ed){
    if(!img)return;cTarget=img;cEd=ed;
    cImg.onload=function(){creset();};
    cImg.src=img.src;cm.hidden=false;
    if(cImg.complete&&cImg.naturalWidth)setTimeout(creset,0);
  }
  function cclose(){cm.hidden=true;cImg.removeAttribute("src");cTarget=null;cEd=null;}
  function clamp(v,a,b){return Math.max(a,Math.min(b,v));}
  cBox.addEventListener("pointerdown",function(e){
    var h=e.target.dataset&&e.target.dataset.h;cMode=h||"move";
    cStart={x:e.clientX,y:e.clientY,c:{fx:CR.fx,fy:CR.fy,fw:CR.fw,fh:CR.fh}};
    try{cBox.setPointerCapture(e.pointerId);}catch(x){}
    e.preventDefault();
  });
  cBox.addEventListener("pointermove",function(e){
    if(!cMode)return;
    var r=cImg.getBoundingClientRect(),dx=(e.clientX-cStart.x)/r.width,dy=(e.clientY-cStart.y)/r.height,c=cStart.c;
    var mx=Math.min(.5,28/r.width),my=Math.min(.5,28/r.height),x0=c.fx,y0=c.fy,x1=c.fx+c.fw,y1=c.fy+c.fh;
    if(cMode==="move"){x0=clamp(c.fx+dx,0,1-c.fw);y0=clamp(c.fy+dy,0,1-c.fh);x1=x0+c.fw;y1=y0+c.fh;}
    else{
      if(cMode.indexOf("w")>-1)x0=clamp(x0+dx,0,x1-mx);
      if(cMode.indexOf("e")>-1)x1=clamp(x1+dx,x0+mx,1);
      if(cMode.indexOf("n")>-1)y0=clamp(y0+dy,0,y1-my);
      if(cMode.indexOf("s")>-1)y1=clamp(y1+dy,y0+my,1);
    }
    CR={fx:x0,fy:y0,fw:x1-x0,fh:y1-y0};cdraw();
  });
  function cend(e){cMode=null;try{cBox.releasePointerCapture(e.pointerId);}catch(x){}}
  cBox.addEventListener("pointerup",cend);cBox.addEventListener("pointercancel",cend);
  window.addEventListener("resize",function(){if(!cm.hidden)cdraw();});
  function capply(){
    if(!cTarget||!cImg.naturalWidth){cclose();return;}
    var r=cImg.getBoundingClientRect(),isSvg=/^data:image\/svg/i.test(cImg.src);
    var bw=cImg.naturalWidth,bh=cImg.naturalHeight;
    if(isSvg){bw=1400;bh=Math.max(1,Math.round(1400*r.height/r.width));}
    var base=document.createElement("canvas");base.width=bw;base.height=bh;
    var bx=base.getContext("2d");bx.fillStyle="#fff";bx.fillRect(0,0,bw,bh);bx.drawImage(cImg,0,0,bw,bh);
    var sx=Math.round(CR.fx*bw),sy=Math.round(CR.fy*bh),sw=Math.max(1,Math.round(CR.fw*bw)),sh=Math.max(1,Math.round(CR.fh*bh));
    var k=Math.min(1,1400/Math.max(sw,sh)),q=0.9,out="",W=0,H=0;
    for(var t=0;t<6;t++){
      var c=document.createElement("canvas");W=Math.max(1,Math.round(sw*k));H=Math.max(1,Math.round(sh*k));c.width=W;c.height=H;
      var x=c.getContext("2d");x.fillStyle="#fff";x.fillRect(0,0,W,H);x.drawImage(base,sx,sy,sw,sh,0,0,W,H);
      out=c.toDataURL("image/jpeg",q);if(out.length<300000)break;k*=0.85;q=Math.max(0.6,q-0.06);
    }
    var img=cTarget,ed=cEd;
    img.src=out;img.style.aspectRatio=W+"/"+H;
    cclose();changed(ed);
  }
  cm.addEventListener("click",function(e){
    var t=e.target;
    if(t===cm||t.closest(".iqc__cancel")){cclose();return;}
    if(t.closest(".iqc__reset")){creset();return;}
    if(t.closest(".iqc__ok")){capply();}
  });
  /* ---- clean a scanned diagram: remove paper background / shadows, keep the lines ---- */
  var km=document.createElement("div");km.className="iqf iqk";km.hidden=true;
  km.innerHTML='<div class="iqf__sheet iqc__sheet" role="dialog" aria-modal="true" aria-label="ডায়াগ্রাম পরিষ্কার">'+
    '<div class="iqc__title">ছবির ধূসর/ছায়াযুক্ত ব্যাকগ্রাউন্ড মুছে দাগগুলো স্পষ্ট করা হবে</div>'+
    '<div class="iqc__wrap"><div class="iqk__prev"><canvas id="iqkCv"></canvas></div></div>'+
    '<label class="iqk__row"><span>পরিষ্কারের মাত্রা</span><input type="range" id="iqkRange" min="0" max="100" value="40"></label>'+
    '<label class="iqk__chk"><input type="checkbox" id="iqkAlpha" checked><span>স্বচ্ছ ব্যাকগ্রাউন্ড (না চাইলে সাদা হবে)</span></label>'+
    '<div class="iqf__act"><button type="button" class="iqk__cancel">বাতিল</button><button type="button" class="iqf__ok iqk__ok" disabled>প্রয়োগ করুন</button></div></div>';
  document.body.appendChild(km);
  var kCv=km.querySelector("#iqkCv"),kRange=km.querySelector("#iqkRange"),kAlpha=km.querySelector("#iqkAlpha"),kOk=km.querySelector(".iqk__ok"),kT=null,kEd=null,K=null,kTimer=null;
  function kclose(){km.hidden=true;K=null;kT=null;kEd=null;}
  function prepare(im,rw,rh,isSvg){
    var W=im.naturalWidth,H=im.naturalHeight,cap=1100;
    if(isSvg){W=cap;H=Math.max(1,Math.round(cap*rh/rw));}
    var k=Math.min(1,cap/Math.max(W,H));W=Math.max(1,Math.round(W*k));H=Math.max(1,Math.round(H*k));
    var c=document.createElement("canvas");c.width=W;c.height=H;var x=c.getContext("2d");x.fillStyle="#fff";x.fillRect(0,0,W,H);x.drawImage(im,0,0,W,H);
    var d=x.getImageData(0,0,W,H).data,N=W*H,b=Math.max(6,Math.round(Math.max(W,H)/50)),gw=Math.ceil(W/b),gh=Math.ceil(H/b);
    var grid=[new Float32Array(gw*gh),new Float32Array(gw*gh),new Float32Array(gw*gh)];
    for(var ch=0;ch<3;ch++){var g=grid[ch];for(var by=0;by<gh;by++)for(var bx=0;bx<gw;bx++){var m=0,y1=Math.min(H,(by+1)*b),x1=Math.min(W,(bx+1)*b);for(var yy=by*b;yy<y1;yy++){var row=yy*W;for(var xx=bx*b;xx<x1;xx++){var v=d[(row+xx)*4+ch];if(v>m)m=v;}}g[by*gw+bx]=m;}}
    var G=[0,0,0];
    for(var q=0;q<3;q++){var srt=Array.prototype.slice.call(grid[q]).sort(function(a,b2){return a-b2;});G[q]=srt[Math.floor(srt.length*0.6)]||255;}
    for(var q2=0;q2<3;q2++){var gg=grid[q2],lo=G[q2]*0.6;for(var i0=0;i0<gg.length;i0++)if(gg[i0]<lo)gg[i0]=lo;
      for(var pass=0;pass<2;pass++){var tmp=new Float32Array(gg.length);for(var by2=0;by2<gh;by2++)for(var bx2=0;bx2<gw;bx2++){var sum=0,cn=0;for(var oy=-1;oy<=1;oy++)for(var ox=-1;ox<=1;ox++){var ny=by2+oy,nx=bx2+ox;if(ny<0||nx<0||ny>=gh||nx>=gw)continue;sum+=gg[ny*gw+nx];cn++;}tmp[by2*gw+bx2]=sum/cn;}gg.set(tmp);}}
    var nr=new Float32Array(N),ng=new Float32Array(N),nb=new Float32Array(N),av=new Float32Array(N);
    for(var y=0;y<H;y++){
      var fy=Math.min(gh-1,Math.max(0,y/b-0.5)),y0=Math.floor(fy),y1b=Math.min(gh-1,y0+1),wy=fy-y0;
      for(var xq=0;xq<W;xq++){
        var fx=Math.min(gw-1,Math.max(0,xq/b-0.5)),x0=Math.floor(fx),x1b=Math.min(gw-1,x0+1),wx=fx-x0,idx=y*W+xq,vals=[0,0,0];
        for(var cc=0;cc<3;cc++){var gr=grid[cc],bgv=(gr[y0*gw+x0]*(1-wx)+gr[y0*gw+x1b]*wx)*(1-wy)+(gr[y1b*gw+x0]*(1-wx)+gr[y1b*gw+x1b]*wx)*wy;var nv=d[idx*4+cc]/Math.max(1,bgv);vals[cc]=nv>1?1:nv;}
        nr[idx]=vals[0];ng[idx]=vals[1];nb[idx]=vals[2];av[idx]=1-(0.299*vals[0]+0.587*vals[1]+0.114*vals[2]);
      }
    }
    return {W:W,H:H,nr:nr,ng:ng,nb:nb,a:av};
  }
  function ss(t0,t1,v){if(v<=t0)return 0;if(v>=t1)return 1;var t=(v-t0)/(t1-t0);return t*t*(3-2*t);}
  function render(target){
    if(!K)return;
    var sl=(+kRange.value)/100,t0=0.05+0.25*sl,t1=t0+0.25,transp=kAlpha.checked,W=K.W,H=K.H;
    target.width=W;target.height=H;var x=target.getContext("2d"),im=x.createImageData(W,H),o=im.data,N=W*H;
    for(var i=0;i<N;i++){
      var al=ss(t0,t1,K.a[i]),r=K.nr[i],g=K.ng[i],b=K.nb[i];r*=r;g*=g;b*=b;var j=i*4;
      if(transp){o[j]=r*255;o[j+1]=g*255;o[j+2]=b*255;o[j+3]=al*255;}
      else{o[j]=255*((1-al)+al*r);o[j+1]=255*((1-al)+al*g);o[j+2]=255*((1-al)+al*b);o[j+3]=255;}
    }
    x.putImageData(im,0,0);
  }
  function krender(){render(kCv);}
  kRange.addEventListener("input",function(){clearTimeout(kTimer);kTimer=setTimeout(krender,40);});
  kAlpha.addEventListener("change",krender);
  function openClean(img,ed){
    if(!img)return;kT=img;kEd=ed;K=null;kOk.disabled=true;
    var r=img.getBoundingClientRect(),isSvg=/^data:image\/svg/i.test(img.src),im=new Image();
    kCv.width=1;kCv.height=1;km.hidden=false;
    im.onload=function(){if(km.hidden||kT!==img)return;try{K=prepare(im,r.width||1,r.height||1,isSvg);krender();kOk.disabled=false;}catch(e){console.error(e);kclose();}};
    im.onerror=function(){kclose();};
    im.src=img.src;
  }
  function kapply(){
    if(!K||!kT){kclose();return;}
    var transp=kAlpha.checked,out=document.createElement("canvas");render(out);
    var data=transp?out.toDataURL("image/png"):out.toDataURL("image/jpeg",0.9),W=out.width,H=out.height;
    for(var t=0;t<5&&data.length>450000;t++){
      var c=document.createElement("canvas");W=Math.max(1,Math.round(W*0.8));H=Math.max(1,Math.round(H*0.8));c.width=W;c.height=H;
      var cx=c.getContext("2d");if(!transp){cx.fillStyle="#fff";cx.fillRect(0,0,W,H);}cx.drawImage(out,0,0,W,H);
      out=c;data=transp?c.toDataURL("image/png"):c.toDataURL("image/jpeg",0.85);
    }
    var img=kT,ed=kEd;img.src=data;img.style.aspectRatio=out.width+"/"+out.height;kclose();changed(ed);
  }
  km.addEventListener("click",function(e){
    var t=e.target;
    if(t===km||t.closest(".iqk__cancel")){kclose();return;}
    if(t.closest(".iqk__ok")&&!kOk.disabled)kapply();
  });
  /* ---- click an inserted image: size / align / add beside / delete ---- */
  function syncPop(){
    var fig=cur&&cur.closest(".iq-fig");if(!fig)return;
    var sz=sizeOf(fig),al=alignOf(fig);
    pop.querySelectorAll("[data-sz]").forEach(function(b){b.classList.toggle("is-on",b.dataset.sz===sz);});
    pop.querySelectorAll("[data-al]").forEach(function(b){b.classList.toggle("is-on",b.dataset.al===al);});
    var add=pop.querySelector("[data-add]");add.hidden=imgs(fig).length>=3;
  }
  function place(){
    if(pop.hidden||!cur||!document.body.contains(cur)){return;}
    var vv=window.visualViewport,vw=vv?vv.width:window.innerWidth,vh=vv?vv.height:window.innerHeight,ox=vv?vv.offsetLeft:0,oy=vv?vv.offsetTop:0;
    var r=cur.getBoundingClientRect(),pw=pop.offsetWidth,ph=pop.offsetHeight;
    var left=Math.min(Math.max(ox+8,r.left),ox+vw-pw-8),top=r.bottom+6;
    if(top+ph>oy+vh-8)top=r.top-ph-6;
    if(top<oy+8)top=oy+8;
    pop.style.left=left+"px";pop.style.top=top+"px";
  }
  function fitModals(){
    var vv=window.visualViewport;if(!vv)return;
    document.querySelectorAll(".iqf").forEach(function(el){el.style.top=vv.offsetTop+"px";el.style.height=vv.height+"px";});
    place();
  }
  if(window.visualViewport){window.visualViewport.addEventListener("resize",fitModals);window.visualViewport.addEventListener("scroll",fitModals);}
  fitModals();
  document.addEventListener("click",function(e){
    var im=e.target.closest&&e.target.closest(".editor-area img.iq-img");
    if(im){
      cur=im;syncPop();pop.hidden=false;
      var ae=document.activeElement;if(ae&&ae.blur&&ae!==document.body)ae.blur();
      place();setTimeout(place,220);return;
    }
    var pb=e.target.closest&&e.target.closest(".iqimg-pop button");
    if(pb&&cur){
      var fig=cur.closest(".iq-fig"),ed=cur.closest(".editor-area");
      if(!fig){pop.hidden=true;return;}
      if(pb.dataset.sz){applySize(fig,pb.dataset.sz);}
      else if(pb.dataset.al){setAlign(fig,pb.dataset.al);}
      else if(pb.dataset.crop){pop.hidden=true;openCrop(cur,ed);return;}
      else if(pb.dataset.clean){pop.hidden=true;openClean(cur,ed);return;}
      else if(pb.dataset.add){pop.hidden=true;open(ed,fig);return;}
      else if(pb.dataset.del){
        var key=sizeOf(fig);cur.remove();
        if(!imgs(fig).length)fig.remove();else applySize(fig,key);
        pop.hidden=true;cur=null;changed(ed);return;
      }
      syncPop();changed(ed);return;
    }
    pop.hidden=true;
  });
  window.addEventListener("scroll",function(){place();},true);
  /* ---- toolbar button (the one the pencil opens), after the fraction button ---- */
  function inject(){
    document.querySelectorAll(".inline-toolbar").forEach(function(tb){
      if(tb.querySelector(".rt-img"))return;
      var anchor=tb.querySelector(".rt-frac")||tb.querySelector(".rt-dropdown");if(!anchor)return;
      var b=document.createElement("button");b.type="button";b.className="rt-btn rt-img";
      b.title="ছবি / ডায়াগ্রাম যোগ করুন";b.setAttribute("aria-label",b.title);b.innerHTML=ICON;
      anchor.parentNode.insertBefore(b,anchor.nextSibling);
    });
  }
  var pend=false;
  new MutationObserver(function(){if(pend)return;pend=true;requestAnimationFrame(function(){pend=false;inject();});}).observe(document.body,{childList:true,subtree:true});
  inject();
  document.addEventListener("mousedown",function(e){if(e.target.closest&&e.target.closest(".rt-img"))e.preventDefault();});
  document.addEventListener("click",function(e){
    var b=e.target.closest&&e.target.closest(".rt-img");if(!b)return;
    e.preventDefault();e.stopPropagation();
    var card=b.closest(".question-card"),ed=null;
    if(lastEd&&card&&card.contains(lastEd))ed=lastEd;
    else if(card)ed=card.querySelector(".question-editor")||card.querySelector(".editor-area");
    if(ed)open(ed,null);
  },true);
})();
;

/* ===== iq-figure-extract-js ===== */
/* Crop real figures out of the uploaded image / PDF using the bounding boxes the AI returns */
(function(){
  "use strict";
  var PDFJS_URL="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js",PDFJS_WORKER="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js",pdfLoad=null;
  function loadPdfJs(){
    if(window.pdfjsLib)return Promise.resolve(window.pdfjsLib);
    if(!pdfLoad)pdfLoad=new Promise(function(res,rej){var sc=document.createElement("script");sc.src=PDFJS_URL;sc.onload=function(){try{window.pdfjsLib.GlobalWorkerOptions.workerSrc=PDFJS_WORKER;res(window.pdfjsLib);}catch(e){rej(e);}};sc.onerror=function(){pdfLoad=null;rej(new Error("pdf.js failed to load"));};document.head.appendChild(sc);});
    return pdfLoad;
  }
  function loadImg(src){return new Promise(function(res,rej){var im=new Image();im.onload=function(){res(im);};im.onerror=rej;im.src=src;});}
  function b64ToBytes(b){var bin=atob(b),n=bin.length,u=new Uint8Array(n);for(var i=0;i<n;i++)u[i]=bin.charCodeAt(i);return u;}
  var cache=new Map();
  function sourceCanvas(file,page){
    var key=file.id+"#"+page;
    if(cache.has(key))return cache.get(key);
    var p;
    if(file.kind==="image"){
      p=loadImg("data:"+file.mimeType+";base64,"+file.data).then(function(im){var c=document.createElement("canvas");c.width=im.naturalWidth;c.height=im.naturalHeight;c.getContext("2d").drawImage(im,0,0);return c;});
    }else{
      p=loadPdfJs().then(function(lib){
        var docKey=file.id+"#doc";
        if(!cache.has(docKey))cache.set(docKey,lib.getDocument({data:b64ToBytes(file.data)}).promise);
        return cache.get(docKey);
      }).then(function(doc){
        var pn=Math.max(1,Math.min(doc.numPages,page|0||1));
        return doc.getPage(pn).then(function(pg){
          var base=pg.getViewport({scale:1}),scale=Math.min(3,Math.max(1.5,1800/Math.max(base.width,base.height)));
          var vp=pg.getViewport({scale:scale}),c=document.createElement("canvas");
          c.width=Math.round(vp.width);c.height=Math.round(vp.height);
          var ctx=c.getContext("2d");ctx.fillStyle="#fff";ctx.fillRect(0,0,c.width,c.height);
          return pg.render({canvasContext:ctx,viewport:vp}).promise.then(function(){return c;});
        });
      });
    }
    cache.set(key,p);return p;
  }
  function validBox(b){
    if(!Array.isArray(b)||b.length!==4)return null;
    var v=b.map(Number);if(v.some(function(x){return !isFinite(x);}))return null;
    var y0=Math.max(0,Math.min(v[0],v[2])),x0=Math.max(0,Math.min(v[1],v[3])),y1=Math.min(1000,Math.max(v[0],v[2])),x1=Math.min(1000,Math.max(v[1],v[3]));
    if(y1-y0<25||x1-x0<25)return null;
    if((y1-y0)*(x1-x0)>0.85*1000*1000)return null;   // whole page, not a figure
    var pad=12;return [Math.max(0,y0-pad),Math.max(0,x0-pad),Math.min(1000,y1+pad),Math.min(1000,x1+pad)];
  }
  function crop(file,fig){
    var box=validBox(fig&&fig.box);if(!box)return Promise.resolve("");
    return sourceCanvas(file,parseInt(fig.page,10)||1).then(function(src){
      var sx=Math.round(box[1]/1000*src.width),sy=Math.round(box[0]/1000*src.height),sw=Math.round((box[3]-box[1])/1000*src.width),sh=Math.round((box[2]-box[0])/1000*src.height);
      if(sw<20||sh<20)return "";
      var k=Math.min(1,1000/Math.max(sw,sh)),q=0.86,out="",W=0,H=0;
      for(var t=0;t<5;t++){
        var c=document.createElement("canvas");W=Math.max(1,Math.round(sw*k));H=Math.max(1,Math.round(sh*k));c.width=W;c.height=H;
        var x=c.getContext("2d");x.fillStyle="#fff";x.fillRect(0,0,W,H);x.drawImage(src,sx,sy,sw,sh,0,0,W,H);
        out=c.toDataURL("image/jpeg",q);if(out.length<260000)break;k*=0.82;q=Math.max(0.6,q-0.06);
      }
      var wide=W>=H*1.6;
      return '<div class="iq-fig"><img class="iq-img" alt="" style="width:'+(wide?70:55)+'%;aspect-ratio:'+W+'/'+H+'" src="'+out+'"></div>';
    });
  }
  window.__iqCropFigures=function(items,files){
    cache=new Map();
    if(!files||!files.length)return Promise.resolve();
    var jobs=[];
    function add(target,fig){
      if(!fig||typeof fig!=="object")return;
      var f=files[(parseInt(fig.file,10)||1)-1];if(!f)return;
      jobs.push(crop(f,fig).then(function(h){if(h)target._figHtml=h;}).catch(function(e){console.warn("Figure crop failed:",e);}));
    }
    (items||[]).forEach(function(it){add(it,it.figure);(Array.isArray(it.subQuestions)?it.subQuestions:[]).forEach(function(sq){add(sq,sq.figure);});});
    return Promise.all(jobs);
  };
})();
;

/* ===== iq-v5-swipe ===== */
(function(){
'use strict';
var nav=document.querySelector('.mobile-tabs'),shell=document.querySelector('.app-shell'),
    pIn=document.getElementById('panelInput'),pPr=document.getElementById('panelPreview');
if(!nav||!shell||!pIn||!pPr)return;
var btns={};[].forEach.call(nav.querySelectorAll('.mobile-tabs__btn'),function(b){btns[b.getAttribute('data-tab')]=b;});
if(!btns.input||!btns.preview)return;
btns.input.setAttribute('aria-pressed','true');btns.preview.setAttribute('aria-pressed','false');

function tabMode(){return getComputedStyle(nav).display!=='none';}
function cur(){return pPr.classList.contains('is-active-mobile')?'preview':'input';}
function pv(){return document.getElementById('previewContainer');}
function inScroll(){return pIn.querySelector('.panel__scroll');}

var saved={i:0,pt:0,pl:0},prevTab='input',pendingDir=0;

/* keep each tab's scroll position (display:none resets it) */
function save(){
  prevTab=cur();
  if(prevTab==='input'){var a=inScroll();if(a)saved.i=a.scrollTop;}
  else{var c=pv();if(c){saved.pt=c.scrollTop;saved.pl=c.scrollLeft;}}
}
function restore(tab){
  var el=tab==='preview'?pv():inScroll();if(!el)return;
  el.style.scrollBehavior='auto';
  if(tab==='preview'){el.scrollTop=saved.pt;el.scrollLeft=saved.pl;}else{el.scrollTop=saved.i;}
  requestAnimationFrame(function(){el.style.scrollBehavior='';});
}
/* render anything that was skipped while the preview was hidden */
function flush(){
  var c=pv();
  if(window.__iqPrevDirty&&c&&c.offsetParent!==null){window.__iqPrevDirty=0;try{Preview.updateImmediate(false);}catch(e){}}
}
function refit(){
  try{
    var c=pv();if(!c||c.offsetParent===null)return;
    var st=State.get(),z=Preview.computeFitZoom();st.settings.fitZoom=z;
    if(st.settings.zoom===100)document.getElementById('paperWrap').style.transform='scale('+(z/100)+')';else Preview.applyZoom();
  }catch(e){}
}
function animate(tab,dir){
  var p=tab==='preview'?pPr:pIn;
  p.classList.remove('iq-pan-in-r','iq-pan-in-l');
  void p.offsetWidth;
  p.classList.add(dir>0?'iq-pan-in-r':'iq-pan-in-l');
  setTimeout(function(){p.classList.remove('iq-pan-in-r','iq-pan-in-l');},320);
}
nav.addEventListener('click',save,true);
nav.addEventListener('click',function(e){
  var b=e.target.closest&&e.target.closest('.mobile-tabs__btn');if(!b)return;
  var tab=b.getAttribute('data-tab');
  if(tab===prevTab){pendingDir=0;return;}
  var dir=pendingDir||(tab==='preview'?1:-1);pendingDir=0;
  btns.input.setAttribute('aria-pressed',tab==='input'?'true':'false');
  btns.preview.setAttribute('aria-pressed',tab==='preview'?'true':'false');
  if(tab==='preview'){flush();refit();}
  restore(tab);animate(tab,dir);
},false);
nav.addEventListener('keydown',function(e){
  if(e.key==='ArrowRight'&&cur()==='input'){btns.preview.click();btns.preview.focus();}
  else if(e.key==='ArrowLeft'&&cur()==='preview'){btns.input.click();btns.input.focus();}
});

/* ---- swipe gesture ---- */
var g=null,SKIP='input[type=range],input[type=color],.iq-ai-drag,.iq-question-drag,.iqc__stage,.iqimg-pop,.iqf,[draggable=true],.color-presets';
function blocked(){
  return !!document.querySelector('.ai-modal-overlay:not([hidden]),.iqf:not([hidden]),.drawer-overlay:not([hidden]),.settings-drawer.is-open,.download-menu__panel:not([hidden]),.rt-dropdown__panel:not([hidden]),.folder-dropdown__panel:not([hidden]),.history-download__panel:not([hidden])');
}
function hasSel(){var s=window.getSelection&&window.getSelection();return !!(s&&!s.isCollapsed&&String(s).length);}
function canScrollH(el,dx){
  for(var n=el;n&&n!==shell&&n!==document.body;n=n.parentElement){
    if(n.nodeType!==1)continue;
    if(n.scrollWidth>n.clientWidth+2){
      var ox=getComputedStyle(n).overflowX;
      if(ox==='auto'||ox==='scroll'){
        if(dx<0&&n.scrollLeft+n.clientWidth<n.scrollWidth-2)return true;
        if(dx>0&&n.scrollLeft>2)return true;
      }
    }
  }
  return false;
}
shell.addEventListener('touchstart',function(e){
  g=null;
  if(e.touches.length!==1||!tabMode()||blocked())return;
  var t=e.touches[0];
  if(t.clientX<20||t.clientX>window.innerWidth-20)return;           /* leave browser edge-back gesture alone */
  if(e.target.closest&&e.target.closest(SKIP))return;
  g={x:t.clientX,y:t.clientY,t:Date.now(),dx:0,m:0,tab:cur(),el:e.target};
},{passive:true});
shell.addEventListener('touchmove',function(e){
  if(!g)return;
  if(e.touches.length!==1){settle(false);return;}
  var t=e.touches[0],dx=t.clientX-g.x,dy=t.clientY-g.y;
  if(!g.m){
    if(Math.abs(dx)<10&&Math.abs(dy)<10)return;
    if(Math.abs(dx)>Math.abs(dy)*1.5&&!hasSel()&&!canScrollH(g.el,dx)){g.m=1;}else{g=null;return;}
  }
  g.dx=dx;
  var p=g.tab==='preview'?pPr:pIn,ok=g.tab==='input'?dx<0:dx>0,x=dx*(ok?.4:.1);
  if(x>110)x=110;if(x<-110)x=-110;
  p.style.transition='none';
  p.style.transform='translate3d('+x+'px,0,0)';
  p.style.opacity=String(1-Math.min(Math.abs(x)/440,.25));
},{passive:true});
function settle(commit){
  if(!g)return;
  var gg=g;g=null;
  if(gg.m!==1)return;
  var p=gg.tab==='preview'?pPr:pIn,dx=gg.dx,dt=Math.max(1,Date.now()-gg.t),v=Math.abs(dx)/dt,
      want=gg.tab==='input'?dx<0:dx>0,
      go=commit&&want&&(Math.abs(dx)>=70||(Math.abs(dx)>=36&&v>.5));
  if(go){
    p.style.transition='';p.style.transform='';p.style.opacity='';
    pendingDir=gg.tab==='input'?1:-1;
    btns[gg.tab==='input'?'preview':'input'].click();
  }else{
    p.style.transition='transform 180ms ease,opacity 180ms ease';
    p.style.transform='';p.style.opacity='';
    setTimeout(function(){p.style.transition='';},220);
  }
}
shell.addEventListener('touchend',function(){settle(true);},{passive:true});
shell.addEventListener('touchcancel',function(){settle(false);},{passive:true});

/* layout change (rotate / resize): render + refit if the preview became visible */
var rt;function onR(){clearTimeout(rt);rt=setTimeout(function(){flush();refit();},150);}
window.addEventListener('resize',onR);window.addEventListener('orientationchange',onR);
window.addEventListener('beforeprint',function(){if(window.__iqPrevDirty){window.__iqPrevDirty=0;try{Preview.updateImmediate(false);}catch(e){}}});
})();
;

/* ===== iq-autosave ===== */
/* Autosave: the project was only written to localStorage on explicit Save, so typed work was lost on refresh or tab kill. */
(function () {
  "use strict";
  if (typeof Preview === "undefined" || typeof State === "undefined" || typeof Preview.update !== "function") return;
  var KEY = "mcqGenerator.project.v1", timer = null, dirty = false, warned = false;
  function flush() {
    clearTimeout(timer); timer = null;
    if (!dirty) return;
    try { localStorage.setItem(KEY, JSON.stringify(State.get())); dirty = false; }
    catch (e) {
      if (!warned) { warned = true; try { App.toast(I18n.t("toast.saveUnavailable"), "error"); } catch (ignore) {} }
    }
  }
  function schedule() { dirty = true; clearTimeout(timer); timer = setTimeout(flush, 800); }
  var orig = Preview.update;
  Preview.update = function () { schedule(); return orig.apply(this, arguments); };
  document.addEventListener("visibilitychange", function () { if (document.visibilityState === "hidden") flush(); });
  window.addEventListener("pagehide", flush);
})();
;

/* ===== iq-aiedit ===== */
(function () {
  "use strict";
  if (typeof QTypes === "undefined" || typeof State === "undefined" || typeof Editor === "undefined" || typeof Utils === "undefined") return;

  var MODELS = ["gemini-3-flash-preview", "gemini-3.1-flash-lite", "gemini-2.5-flash-lite", "gemini-2.0-flash"];
  var LETTERS = ["a", "b", "c", "d", "e", "f", "g", "h"];
  var ACTIONS = ["fix", "polish", "change", "explain"];
  var ACT_ICON = { fix: "check-check", polish: "pen-line", change: "refresh-cw", explain: "book-open" };

  /* ------------------------------------------------------------------ strings */
  var STR = {
    bn: {
      btnTitle: "AI দিয়ে সম্পাদনা করুন",
      title: "AI Edit",
      sub: "প্রশ্ন",
      whatTodo: "কী করতে চান?",
      acts: {
        fix: ["ভুল সংশোধন", "বানান, তথ্য, হিসাব ও উত্তর ঠিক করবে"],
        polish: ["পরিমার্জন", "ভাষা ও উপস্থাপনা আরও পরিষ্কার করবে"],
        change: ["পরিবর্তন", "আপনার নির্দেশ অনুযায়ী প্রশ্ন বদলাবে"],
        explain: ["বিস্তারিত ব্যাখ্যা", "ধাপে ধাপে ব্যাখ্যা / বিস্তারিত উত্তর যোগ করবে"]
      },
      instrLabel: "নির্দেশনা (ঐচ্ছিক)",
      instrPh: "যেমন: অপশনগুলো আরও কঠিন করো · সংখ্যা বদলে নতুন করো · ইংরেজিতে অনুবাদ করো",
      current: "বর্তমান প্রশ্ন",
      run: "AI দিয়ে সম্পাদনা করুন",
      cancel: "বাতিল",
      close: "বন্ধ করুন",
      loading: "AI প্রশ্নটি সম্পাদনা করছে…",
      loadingSub: "সাধারণত কয়েক সেকেন্ড সময় লাগে",
      resTitle: "AI-এর প্রস্তাবিত সংস্করণ",
      resHint: "প্রয়োগ করার আগে দেখে নিন। নীল চিহ্নিত অংশগুলো বদলেছে।",
      changes: "কী বদলেছে",
      changed: "পরিবর্তিত",
      before: "আগের সংস্করণ",
      noChange: "AI কোনো পরিবর্তনের প্রয়োজন খুঁজে পায়নি।",
      retry: "আবার চেষ্টা",
      apply: "প্রয়োগ করুন",
      applied: "প্রশ্নটি আপডেট হয়েছে",
      undo: "পূর্বাবস্থায় ফেরান",
      undone: "আগের অবস্থায় ফেরানো হয়েছে",
      question: "প্রশ্ন",
      statement: "বিবৃতি",
      stimulus: "উদ্দীপক",
      option: "অপশন",
      answer: "উত্তর",
      explanation: "ব্যাখ্যা",
      sub2: "উপপ্রশ্ন",
      correct: "সঠিক",
      tfTrue: "সত্য",
      tfFalse: "মিথ্যা",
      errNoKey: "আগে Settings → AI-তে আপনার Gemini API key যোগ করুন।",
      errEmpty: "প্রশ্নটি ফাঁকা। আগে কিছু লিখুন, তারপর AI Edit ব্যবহার করুন।",
      errNeed: "কমপক্ষে একটি কাজ বেছে নিন অথবা নির্দেশনা লিখুন।",
      errBad: "AI-এর উত্তর বোঝা যায়নি। আবার চেষ্টা করুন বা নির্দেশনা সহজ করুন।",
      errCut: "AI-এর উত্তর মাঝপথে কেটে গেছে। আবার চেষ্টা করুন।",
      errTimeout: "অনুরোধের সময় শেষ হয়ে গেছে। আবার চেষ্টা করুন।",
      errNet: "নেটওয়ার্ক সমস্যা। ইন্টারনেট সংযোগ দেখে আবার চেষ্টা করুন।",
      errAll: "এই মুহূর্তে কোনো AI মডেল পাওয়া যাচ্ছে না। একটু পরে চেষ্টা করুন।",
      langName: "Bangla"
    },
    en: {
      btnTitle: "Edit with AI",
      title: "AI Edit",
      sub: "Question",
      whatTodo: "What would you like to do?",
      acts: {
        fix: ["Fix mistakes", "Corrects spelling, facts, calculations and the answer"],
        polish: ["Polish", "Makes the wording and presentation clearer"],
        change: ["Change", "Rewrites the question as you instruct"],
        explain: ["Detailed explanation", "Adds a step-by-step explanation / fuller answer"]
      },
      instrLabel: "Instruction (optional)",
      instrPh: "e.g. make the options harder · use new numbers · translate to Bangla",
      current: "Current question",
      run: "Edit with AI",
      cancel: "Cancel",
      close: "Close",
      loading: "AI is editing the question…",
      loadingSub: "This usually takes a few seconds",
      resTitle: "AI's suggested version",
      resHint: "Review before applying. Blue blocks have changed.",
      changes: "What changed",
      changed: "Changed",
      before: "Previous version",
      noChange: "The AI found nothing that needed changing.",
      retry: "Try again",
      apply: "Apply",
      applied: "Question updated",
      undo: "Undo",
      undone: "Restored the previous version",
      question: "Question",
      statement: "Statement",
      stimulus: "Stimulus",
      option: "Option",
      answer: "Answer",
      explanation: "Explanation",
      sub2: "Sub-question",
      correct: "Correct",
      tfTrue: "True",
      tfFalse: "False",
      errNoKey: "Add your Gemini API key in Settings → AI first.",
      errEmpty: "This question is empty. Write something first, then use AI Edit.",
      errNeed: "Pick at least one action or write an instruction.",
      errBad: "Could not understand the AI response. Try again or simplify the instruction.",
      errCut: "The AI response was cut off. Please try again.",
      errTimeout: "The request timed out. Please try again.",
      errNet: "Network error. Check your connection and try again.",
      errAll: "No AI model is available right now. Please try again shortly.",
      langName: "English"
    }
  };

  /* ------------------------------------------------------------------ helpers */
  function lg() { return State.get().language === "bn" ? "bn" : "en"; }
  function L() { return STR[lg()]; }
  function strip(h) { return Utils.stripHtml(h || ""); }
  function typeOf(q) { return QTypes.typeOf ? QTypes.typeOf(q) : q.type || "mcq"; }
  function findQ(id) { return State.get().questions.find(function (q) { return q.id === id; }); }
  function esc(s) { var d = document.createElement("div"); d.textContent = String(s == null ? "" : s); return d.innerHTML; }
  function isEmptyQ(q) { return (QTypes.isEmpty || Utils.isQuestionEmpty)(q); }
  function txt(v) {
    if (v == null) return "";
    if (typeof v === "string" || typeof v === "number" || typeof v === "boolean") return String(v);
    if (typeof v === "object" && typeof v.html === "string") return v.html;
    return String(v);
  }
  function subLabel(i, l) {
    var x = Utils.optionLabel(i, l);
    return l === "bn" ? x : String(x).toLowerCase();
  }

  /* The app's own AI-text -> editor-HTML converter (fractions, sub/sup, lists ...) */
      function fx(v){
      let s=String(v==null?"":v).replace(/\r\n?/g,"\n").trim();
      if(!s)return "";
      /* pseudo tags -> real markup (innermost first) */
      const mapTxt=(str,fn)=>{let depth=0;return str.split(/(<[^>]+>)/).map((seg,i)=>{if(i%2){if(/^<(sup|sub)\b/i.test(seg))depth++;else if(/^<\/(sup|sub)>/i.test(seg))depth=Math.max(0,depth-1);return seg}return depth?seg:fn(seg)}).join("")};
      const FRAC=(a,b)=>'<span class="iq-fr"><span class="iq-fr-n">'+String(a).trim()+'</span><span class="iq-fr-d">'+String(b).trim()+'</span></span>';
      const PO='<span class="iq-par">(</span>',PC='<span class="iq-par">)</span>';
      /* a fraction inside a superscript/subscript must stay inline: 1/2 */
      s=s.replace(/<(sup|sub)>([\s\S]*?)<\/\1>/gi,(m,tg,x)=>'<'+tg+'>'+x.replace(/<frac>([\s\S]*?)<over>([\s\S]*?)<\/frac>/gi,'$1/$2')+'</'+tg+'>');
      const FR=/<frac>((?:(?!<frac>|<\/frac>)[\s\S])*?)<over>((?:(?!<frac>|<\/frac>|<over>)[\s\S])*?)<\/frac>/i;
      const FRP=/\(\s*<frac>((?:(?!<frac>|<\/frac>)[\s\S])*?)<over>((?:(?!<frac>|<\/frac>|<over>)[\s\S])*?)<\/frac>\s*\)/i;
      for(let g=0;g<40&&(FRP.test(s)||FR.test(s));g++){s=FRP.test(s)?s.replace(FRP,(m,a,b)=>PO+FRAC(a,b)+PC):s.replace(FR,(m,a,b)=>FRAC(a,b));}
      const SQ=/<sqrt>((?:(?!<sqrt>|<\/sqrt>)[\s\S])*?)<\/sqrt>/i;
      for(let g=0;g<20&&SQ.test(s);g++)s=s.replace(SQ,(m,a)=>{const t=a.replace(/<[^>]+>/g,'').trim();return '\u221A'+(/[\s+\-\u2212\u00D7\u00F7\u00B1=<>]/.test(t)?'('+a+')':a);});
      s=s.replace(/<\/?(?:frac|over|sqrt)>/gi,"");
      /* parenthesised numerator like (a+b)/2 or (৮ + ৩)/১২ -> stacked */
      s=mapTxt(s,seg=>seg.replace(/(^|[^A-Za-z0-9\u0980-\u09FF])\(([^()<>\/]{1,40})\)\s*\/\s*(\([^()<>\/]{1,40}\)|[0-9\u09E6-\u09EF]+|[A-Za-z])(?![\w\/.\u0980-\u09FF])/g,(m,p,a,b)=>p+FRAC(a,b.replace(/^\(([\s\S]*)\)$/,"$1"))));
      /* plain numeric fractions like 3/4 or ২/৩ -> stacked (skips dates, units, a/b words) */
      s=mapTxt(s,seg=>seg.replace(/(^|[^\w\/.\u0980-\u09FF])([0-9\u09E6-\u09EF]+)\/([0-9\u09E6-\u09EF]+)(?![\w\/.\u0980-\u09FF])/g,(m,p,a,b)=>p+FRAC(a,b)));
      /* light markdown / plain notation fallbacks */
      s=s.replace(/\*\*([^*\n]+)\*\*/g,"<b>$1</b>");
      s=s.replace(/<=>|<->|\u21C4/g,"\u21CC").replace(/-->|->/g,"\u2192");
      s=s.replace(/\^(\d*[+\-])(?![\w])/g,"<sup>$1</sup>").replace(/\^\{([^{}]*)\}/g,"<sup>$1</sup>").replace(/\^(\d+|[A-Za-z])(?![A-Za-z0-9])/g,"<sup>$1</sup>");
      s=s.replace(/_\{([^{}]*)\}/g,"<sub>$1</sub>").replace(/([A-Za-z0-9)\]])_(\d+|[a-z])(?![A-Za-z0-9_])/g,"$1<sub>$2</sub>");
      /* plain ASCII chemical formulas (H2O, CO2, Ca(OH)2 ...) outside tags */
      const CH=/(^|[^A-Za-z])((?:[A-Z][a-z]?\d*|\((?:[A-Z][a-z]?\d*)+\)\d*){2,}|(?:H|O|N|F|Cl|Br)2)(?![A-Za-z0-9])/g;
      s=mapTxt(s,seg=>seg.replace(CH,(m,p,t)=>/\d/.test(t)?p+t.replace(/(\d+)/g,"<sub>$1</sub>"):m));
      /* neutralise stray "<" that is not an allowed bare tag (e.g. a<b) */
      s=s.replace(/<(?!\/?(?:sub|sup|br|ul|ol|li|b|strong|i|em|u|span|font|div)\s*\/?>|span style=|span class=)/gi,"&lt;");
      /* lists + line breaks */
      s=s.replace(/<br\s*\/?>/gi,"\n");
      const bn=/[\u0980-\u09FF]/.test(s);
      if(/<(?:ul|ol|li)\b/i.test(s)){
        s=s.replace(/\s*\n\s*(<\/?(?:ul|ol|li)\b)/gi,"$1").replace(/(<\/?(?:ul|ol|li)\b[^>]*>)\s*\n\s*/gi,"$1").replace(/\n+/g,"<br>");
      }else{
        const BUL=/^(?:[-*\u2022\u25CF\u25AA\u25E6\u2013])\s+(.+)$/,NUM=/^(?:\(?([0-9\u09E6-\u09EF]{1,2})[.)\u0964]|\(([0-9\u09E6-\u09EF]{1,2})\))\s+(.+)$/;
        let out="",mode=null,buf=[],needBr=false,bnNum=false;
        const flush=()=>{if(!buf.length)return;out+=(needBr?"<br>":"")+"<"+mode+(mode==="ol"&&bnNum?' style="list-style-type:bengali"':"")+">"+buf.map(x=>"<li>"+x+"</li>").join("")+"</"+mode+">";buf=[];mode=null;needBr=false;};
        s.split("\n").forEach(line=>{
          const t=line.trim();let m;
          if(m=t.match(BUL)){if(mode!=="ul")flush();mode="ul";buf.push(m[1]);}
          else if(m=t.match(NUM)){if(mode!=="ol")flush();mode="ol";bnNum=/[\u09E6-\u09EF]/.test(m[1]||m[2]||"");buf.push(m[3]);}
          else{flush();if(t){out+=(needBr?"<br>":"")+t;needBr=true;}}
        });
        flush();
        /* a list directly after text needs no extra <br> because lists are blocks */
        s=out.replace(/<br>(<(?:ul|ol)\b)/g,"$1");
      }
      return Utils.sanitizeHtml(s);
    }


  /* editor HTML -> the plain pseudo-tag text the AI works with */
  function toAi(html, key, ctx) {
    html = html || "";
    ctx.tokens[key] = [];
    if (!strip(html) && !/<img/i.test(html)) return "";
    var d = document.createElement("div");
    d.innerHTML = html;
    d.querySelectorAll("img").forEach(function (img) {
      ctx.imgs.push(img.outerHTML);
      var n = ctx.imgs.length;
      ctx.tokens[key].push(n);
      img.parentNode.replaceChild(document.createTextNode("\u27E6fig-" + n + "\u27E7"), img);
    });
    Array.prototype.slice.call(d.querySelectorAll(".iq-fr")).reverse().forEach(function (fr) {
      var num = null, den = null;
      Array.prototype.forEach.call(fr.children, function (c) {
        if (c.classList.contains("iq-fr-n")) num = c;
        else if (c.classList.contains("iq-fr-d")) den = c;
      });
      var f = document.createElement("frac");
      if (num) while (num.firstChild) f.appendChild(num.firstChild);
      f.appendChild(document.createElement("over"));
      if (den) while (den.firstChild) f.appendChild(den.firstChild);
      fr.parentNode.replaceChild(f, fr);
    });
    d.querySelectorAll(".iq-par").forEach(function (p) {
      p.parentNode.replaceChild(document.createTextNode(p.textContent), p);
    });
    return d.innerHTML.replace(/<over><\/over>/g, "<over>");
  }

  function fromAi(text, key, ctx) {
    var s = fx(text);
    var used = {};
    s = s.replace(/\u27E6fig-(\d+)\u27E7/g, function (m, n) {
      used[n] = 1;
      return ctx.imgs[n - 1] || "";
    });
    (ctx.tokens[key] || []).forEach(function (n) {
      if (!used[n]) s += ctx.imgs[n - 1];
    });
    return s;
  }

  // Never silently wipe existing content: an empty AI field keeps the original.
  function newField(aiVal, key, origHtml, ctx) {
    var s = txt(aiVal);
    if (!s.trim()) return origHtml || "";
    return fromAi(s, key, ctx);
  }

  /* --------------------------------------------------- question <-> AI payload */
  function snapshotForAi(q, type, ctx) {
    var T = function (k, h) { return toAi(h, k, ctx); };
    if (type === "mcq") {
      return {
        type: "mcq",
        question: T("q", q.question.html),
        options: q.options.map(function (o, i) { return T("o" + i, o.html); }),
        correctIndexes: q.options.map(function (o, i) { return o.correct ? i : -1; }).filter(function (i) { return i >= 0; }),
        explanation: T("expl", q.explanationHtml)
      };
    }
    if (type === "tf") {
      return {
        type: "tf",
        question: T("q", q.question.html),
        answer: q.tfAnswer === true ? true : q.tfAnswer === false ? false : null,
        explanation: T("expl", q.explanationHtml)
      };
    }
    if (type === "creative") {
      return {
        type: "creative",
        stimulus: T("q", q.question.html),
        subQuestions: (q.subQuestions || []).map(function (s, i) {
          return { question: T("s" + i, s.html), marks: s.marks || "", answer: T("a" + i, s.answerHtml) };
        })
      };
    }
    return { type: type, question: T("q", q.question.html), answer: T("ans", q.answer && q.answer.html) };
  }

  function applyEdit(t, d, ctx) {
    var type = typeOf(t);
    var qv = d.question != null ? d.question : d.stimulus != null ? d.stimulus : d.statement;
    t.question = t.question || { html: "" };
    t.question.html = newField(qv, "q", t.question.html, ctx);

    if (type === "mcq") {
      var opts = Array.isArray(d.options) ? d.options : null;
      if (opts && opts.length >= 2) {
        var old = t.options || [];
        var n = Math.min(opts.length, 8);
        var idx = Array.isArray(d.correctIndexes) ? d.correctIndexes : Number.isInteger(d.correctIndex) ? [d.correctIndex] : null;
        if (idx) {
          idx = idx.map(Number).filter(function (i) { return Number.isInteger(i) && i >= 0 && i < n; });
          if (!idx.length) idx = null;
        }
        t.options = opts.slice(0, n).map(function (o, i) {
          var prev = old[i];
          return {
            id: prev ? prev.id : LETTERS[i] || String(i),
            html: newField(o, "o" + i, prev && prev.html, ctx),
            correct: idx ? idx.indexOf(i) !== -1 : !!(prev && prev.correct)
          };
        });
        if (!t.layoutLocked && State.computeAutoLayout) t.optionsLayout = State.computeAutoLayout(t);
      }
      t.explanationHtml = newField(d.explanation, "expl", t.explanationHtml, ctx);
    } else if (type === "tf") {
      var a = d.answer;
      if (a === true || a === false) t.tfAnswer = a;
      else if (typeof a === "string") {
        var l = a.trim().toLowerCase();
        if (l === "true" || l === "\u09B8\u09A4\u09CD\u09AF") t.tfAnswer = true;
        else if (l === "false" || l === "\u09AE\u09BF\u09A5\u09CD\u09AF\u09BE") t.tfAnswer = false;
      }
      t.explanationHtml = newField(d.explanation, "expl", t.explanationHtml, ctx);
    } else if (type === "creative") {
      var subs = Array.isArray(d.subQuestions) ? d.subQuestions : null;
      if (subs && subs.length) {
        var oldS = t.subQuestions || [];
        t.subQuestions = subs.slice(0, 8).map(function (s, i) {
          s = s || {};
          var p = oldS[i];
          var m = s.marks != null && String(s.marks).trim() !== "" ? String(s.marks).trim().slice(0, 8) : (p && p.marks) || "";
          return {
            id: p ? p.id : Utils.uid("sq"),
            html: newField(s.question != null ? s.question : s.text, "s" + i, p && p.html, ctx),
            marks: m,
            answerHtml: newField(s.answer, "a" + i, p && p.answerHtml, ctx)
          };
        });
      }
    } else {
      t.answer = { html: newField(d.answer, "ans", t.answer && t.answer.html, ctx) };
    }
    return t;
  }

  /* --------------------------------------------------------- result description */
  function describe(q, type, l) {
    var X = STR[l], out = [];
    var add = function (key, label, html, extra) {
      out.push(Object.assign({ key: key, label: label, html: html || "" }, extra || {}));
    };
    add("q", type === "tf" ? X.statement : type === "creative" ? X.stimulus : X.question, q.question && q.question.html);
    if (type === "mcq") {
      (q.options || []).forEach(function (o, i) {
        add("o" + i, X.option + " " + Utils.optionLabel(i, l), o.html, { correct: !!o.correct, opt: true });
      });
      add("expl", X.explanation, q.explanationHtml);
    } else if (type === "tf") {
      add("ans", X.answer, q.tfAnswer === true ? X.tfTrue : q.tfAnswer === false ? X.tfFalse : "", { plain: true });
      add("expl", X.explanation, q.explanationHtml);
    } else if (type === "creative") {
      (q.subQuestions || []).forEach(function (s, i) {
        add("s" + i, X.sub2 + " " + subLabel(i, l) + (s.marks ? " [" + s.marks + "]" : ""), s.html);
        add("a" + i, X.answer + " (" + subLabel(i, l) + ")", s.answerHtml);
      });
    } else {
      add("ans", X.answer, q.answer && q.answer.html);
    }
    return out;
  }
  function norm(b) {
    var h = b.plain ? esc(b.html) : toAi(b.html, "_c", { imgs: [], tokens: {} });
    return h.replace(/\s+/g, " ").trim() + "|" + (b.correct ? 1 : 0);
  }

  /* ------------------------------------------------------------------- AI call */
  function formattingRules() {
    return [
      "FORMATTING RULES for every text field:",
      "- Use ONLY these bare tags (no attributes): <sub>, <sup>, <br>, <b>, <i>, <u>, <ul>, <ol>, <li>, <frac>, <over>, <sqrt>. No LaTeX, Markdown, dollar signs or code blocks. Keep any <span ...> / <font ...> tags that already exist in the given text exactly as they are.",
      "- Subscripts/superscripts always use <sub>/<sup> (H<sub>2</sub>O, x<sup>2</sup>, Fe<sup>3+</sup>).",
      "- Every fraction must be written <frac>numerator<over>denominator</frac> (never a/b, except in units such as m/s). Roots: <sqrt>expression</sqrt>. Write symbols such as × ÷ ± ≤ ≥ ≠ ≈ π θ α β Δ ∑ ∫ ° ∴ ∵ → ⇌ directly.",
      "- Mathematical solutions: one step per line separated by <br> (formula, substitution, result with unit). Chemical reactions go on their own line, balanced, with → or ⇌.",
      "- Several points, steps or causes must be written as a real <ul>/<ol> list.",
      "- Keep figure placeholders such as \u27E6fig-1\u27E7 exactly as written, in the field where they appear."
    ].join("\n");
  }

  function buildPrompt(type, snap, acts, instr) {
    var X = L();
    var typeName = {
      mcq: "MCQ (multiple choice)",
      tf: "True / False",
      fill: "Fill in the blanks",
      short: "Short answer",
      desc: "Descriptive / broad question",
      creative: "Creative question (stimulus + sub-questions)"
    }[type] || type;
    var explainHint = {
      mcq: "write or expand the \"explanation\" field with a detailed, accurate, step-by-step explanation of why the correct option is right and, briefly, why the other options are wrong.",
      tf: "write or expand the \"explanation\" field with a detailed, accurate explanation of why the statement is true or false.",
      fill: "expand the \"answer\" field into a complete answer that also states the reasoning in one or two lines.",
      short: "expand the \"answer\" field into a complete, detailed answer with reasoning.",
      desc: "expand the \"answer\" field into a complete, well-structured, detailed model answer.",
      creative: "expand every sub-question \"answer\" into a detailed, well-structured answer."
    }[type];
    var ACT = {
      fix: "FIX MISTAKES: carefully verify facts, calculations, formulas, units, spelling, grammar and punctuation. Correct every error you find, including a wrong marked answer (update the answer key to match). Leave anything that is already correct untouched.",
      polish: "POLISH: improve wording, clarity, grammar and exam-paper tone WITHOUT changing the meaning, difficulty or correct answer.",
      change: "CHANGE: modify the question as described in the user's instruction. Keep the answer key, explanation and every dependent part consistent with the changed question.",
      explain: "ADD DETAILED EXPLANATION: " + explainHint
    };
    var specific = {
      mcq: "- \"options\": array of option texts (keep the same number unless the instruction asks otherwise; 2 to 8). Keep empty options empty unless asked. \"correctIndexes\": zero-based indexes of the correct option(s); keep exactly one unless the original has several. Distractors must be plausible and exactly one option must be unambiguously correct.",
      tf: "- \"answer\" must be true or false and the statement must be unambiguously true or false.",
      fill: "- Keep \"_____\" for each blank in the question. \"answer\" lists the blank answer(s), comma-separated if several.",
      short: "",
      desc: "",
      creative: "- Keep the number of sub-questions and their marks unless the instruction says otherwise. The sub-questions are in order: knowledge, comprehension, application, higher-order."
    }[type] || "";
    var schema = {
      mcq: '{"question":"...","options":["...","..."],"correctIndexes":[0],"explanation":"...","changes":"..."}',
      tf: '{"question":"...","answer":true,"explanation":"...","changes":"..."}',
      fill: '{"question":"...","answer":"...","changes":"..."}',
      short: '{"question":"...","answer":"...","changes":"..."}',
      desc: '{"question":"...","answer":"...","changes":"..."}',
      creative: '{"stimulus":"...","subQuestions":[{"question":"...","marks":"1","answer":"..."}],"changes":"..."}'
    }[type];
    return [
      "You are an expert exam-question editor and subject specialist. Edit exactly ONE existing question and return the COMPLETE revised question as JSON.",
      "",
      "Question type: " + typeName,
      "Write the \"changes\" note in " + X.langName + ". Keep the question's own language unless the user explicitly asks to translate it.",
      "",
      "Requested actions:",
      acts.map(function (a) { return "- " + ACT[a]; }).join("\n") || "- Follow the user's instruction below.",
      "Extra instruction from the user: " + (instr || "none"),
      "",
      "CURRENT QUESTION (JSON):",
      JSON.stringify(snap),
      "",
      "RULES:",
      "- Never change the question type. Return every field of the schema with the full revised text (not a diff). Fields that need no change must be returned exactly as given.",
      "- Leave empty fields empty unless a requested action needs them filled.",
      "- Do not invent facts. If you are unsure, be conservative and keep the original.",
      specific,
      "- \"changes\": 1 to 3 short sentences saying exactly what you changed, or that no change was needed.",
      "",
      formattingRules(),
      "",
      "OUTPUT: return ONLY one JSON object shaped like " + schema + " — no markdown fences, no comments, no text outside the JSON."
    ].filter(function (x) { return x !== ""; }).join("\n");
  }

  function parseJson(text) {
    var clean = text.trim().replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/```\s*$/i, "");
    try { return JSON.parse(clean); } catch (e) {}
    var m = clean.match(/\{[\s\S]*\}/);
    if (m) { try { return JSON.parse(m[0]); } catch (e2) {} }
    return null;
  }

  async function callAi(prompt, signal) {
    var cfg = Settings.getAiSettings();
    if (!cfg.apiKey) { var k = new Error("NO_KEY"); k.code = "noKey"; throw k; }
    var list = [cfg.model].concat(MODELS.filter(function (m) { return m !== cfg.model; }));
    var last = null;
    for (var i = 0; i < list.length; i++) {
      try {
        var res = await fetch(
          "https://generativelanguage.googleapis.com/v1beta/models/" + encodeURIComponent(list[i]) + ":generateContent",
          {
            method: "POST",
            headers: { "Content-Type": "application/json", "x-goog-api-key": cfg.apiKey },
            body: JSON.stringify({
              contents: [{ parts: [{ text: prompt }] }],
              generationConfig: { temperature: 0.3, responseMimeType: "application/json" }
            }),
            signal: signal
          }
        );
        var raw = await res.text(), j = null;
        try { j = JSON.parse(raw); } catch (e) {}
        if (!res.ok) {
          var er = new Error((j && j.error && j.error.message) || "Request failed (" + res.status + ")");
          er.retired = res.status === 404 || res.status === 429 || res.status >= 500;
          throw er;
        }
        var cand = j && j.candidates && j.candidates[0];
        var text = cand && cand.content && cand.content.parts ? cand.content.parts.map(function (p) { return p.text || ""; }).join("") : "";
        var data = text ? parseJson(text) : null;
        if (!data || typeof data !== "object" || Array.isArray(data)) {
          var be = new Error("bad");
          be.code = cand && cand.finishReason === "MAX_TOKENS" ? "cut" : "bad";
          throw be;
        }
        return data;
      } catch (e) {
        if (e && e.name === "AbortError") throw e;
        if (e instanceof TypeError) { var ne = new Error("net"); ne.code = "net"; throw ne; }
        last = e;
        if (e && e.retired) continue;
        throw e;
      }
    }
    var ae = last || new Error("all");
    if (!ae.code && !ae.message) ae.code = "all";
    throw ae;
  }

  /* ------------------------------------------------------------------- the UI */
  var M = null, cur = null, seq = 0, snackTimer = null;

  function ensureModal() {
    if (M) return M;
    M = document.createElement("div");
    M.className = "iq-aie-overlay";
    M.hidden = true;
    M.setAttribute("role", "dialog");
    M.setAttribute("aria-modal", "true");
    M.setAttribute("aria-labelledby", "iqAieTitle");
    M.innerHTML =
      '<div class="iq-aie" tabindex="-1">' +
      '<div class="iq-aie__head"></div>' +
      '<div class="iq-aie__body"></div>' +
      '<div class="iq-aie__foot"></div>' +
      "</div>";
    document.body.appendChild(M);
    M.addEventListener("mousedown", function (e) { M.__down = e.target === M; });
    M.addEventListener("click", function (e) {
      if (e.target === M && M.__down) { cancelAll(); return; }
      var b = e.target.closest("[data-aie]");
      if (!b) return;
      var a = b.getAttribute("data-aie");
      if (a === "act") {
        var k = b.getAttribute("data-k");
        cur.sel[k] = !cur.sel[k];
        b.classList.toggle("is-on", !!cur.sel[k]);
        b.setAttribute("aria-pressed", String(!!cur.sel[k]));
        cur.err = "";
        var er = M.querySelector(".iq-aie-err");
        if (er) er.remove();
      } else if (a === "run") run();
      else if (a === "cancel" || a === "close") cancelAll();
      else if (a === "retry") { cur.view = "form"; cur.err = ""; render(); }
      else if (a === "apply") applyResult();
    });
    M.addEventListener("input", function (e) {
      if (e.target.classList.contains("iq-aie-instr")) cur.instr = e.target.value;
    });
    M.addEventListener("keydown", function (e) {
      if (e.key === "Enter" && (e.ctrlKey || e.metaKey) && e.target.classList.contains("iq-aie-instr")) { e.preventDefault(); run(); }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && M && !M.hidden) { e.preventDefault(); cancelAll(); }
    });
    return M;
  }

  function toast(msg, type) { try { App.toast(msg, type || "default"); } catch (e) {} }

  function openFor(id) {
    var q = findQ(id);
    if (!q) return;
    QTypes.ensure && QTypes.ensure(q);
    if (isEmptyQ(q)) { toast(L().errEmpty, "error"); return; }
    ensureModal();
    cur = {
      id: id,
      type: typeOf(q),
      sel: { fix: true, polish: false, change: false, explain: false },
      instr: "",
      view: "form",
      err: ""
    };
    seq++;
    M.hidden = false;
    render();
    var box = M.querySelector(".iq-aie");
    if (box) box.focus({ preventScroll: true });
  }

  function cancelAll() {
    seq++;
    if (cur && cur.ac) { try { cur.ac.abort(); } catch (e) {} }
    if (M) M.hidden = true;
    cur = null;
  }

  function render() {
    if (!M || !cur) return;
    var X = L(), l = lg(), q = findQ(cur.id);
    if (!q) { cancelAll(); return; }
    var box = M.querySelector(".iq-aie");
    if (l === "bn") box.setAttribute("data-i18n-font", ""); else box.removeAttribute("data-i18n-font");
    var idx = State.get().questions.findIndex(function (x) { return x.id === cur.id; });
    var typeLabel = QTypes.label ? QTypes.label(cur.type, l) : cur.type;
    var head = M.querySelector(".iq-aie__head"), body = M.querySelector(".iq-aie__body"), foot = M.querySelector(".iq-aie__foot");

    head.innerHTML =
      '<span class="iq-aie__logo"><i data-lucide="sparkles"></i></span>' +
      '<div class="iq-aie__titles"><h2 id="iqAieTitle">' + esc(X.title) + '</h2><p>' +
      esc(X.sub + " " + Utils.formatQuestionNumber(idx, l) + " · " + typeLabel) +
      '</p></div><button type="button" class="iq-aie__x" data-aie="close" aria-label="' + esc(X.close) + '" title="' + esc(X.close) + '">×</button>';

    var bodyHtml = "", footHtml = "";
    if (cur.view === "form") {
      var snippet = strip(q.question && q.question.html).replace(/\s+/g, " ").trim();
      if (!snippet && q.subQuestions && q.subQuestions[0]) snippet = strip(q.subQuestions[0].html);
      bodyHtml +=
        '<div class="iq-aie-cur"><span>' + esc(X.current) + "</span>" + esc(snippet.slice(0, 160)) + (snippet.length > 160 ? "…" : "") + "</div>" +
        '<div class="iq-aie-lab">' + esc(X.whatTodo) + '</div><div class="iq-aie-chips">';
      ACTIONS.forEach(function (k) {
        bodyHtml +=
          '<button type="button" class="iq-aie-chip' + (cur.sel[k] ? " is-on" : "") + '" data-aie="act" data-k="' + k + '" aria-pressed="' + !!cur.sel[k] + '">' +
          '<i data-lucide="' + ACT_ICON[k] + '"></i><span><strong>' + esc(X.acts[k][0]) + "</strong><small>" + esc(X.acts[k][1]) + "</small></span></button>";
      });
      bodyHtml +=
        '</div><label class="iq-aie-lab" for="iqAieInstr">' + esc(X.instrLabel) + "</label>" +
        '<textarea id="iqAieInstr" class="iq-aie-instr" rows="3" placeholder="' + esc(X.instrPh) + '">' + esc(cur.instr) + "</textarea>";
      if (cur.err) bodyHtml += '<div class="iq-aie-err" role="alert">' + esc(cur.err) + "</div>";
      footHtml =
        '<button type="button" class="btn btn--ghost" data-aie="cancel">' + esc(X.cancel) + "</button>" +
        '<button type="button" class="btn btn--primary" data-aie="run"><i data-lucide="sparkles"></i>' + esc(X.run) + "</button>";
    } else if (cur.view === "loading") {
      bodyHtml =
        '<div class="iq-aie-load"><div class="iq-aie-spin" aria-hidden="true"></div><strong>' + esc(X.loading) + "</strong><small>" + esc(X.loadingSub) + "</small></div>";
      footHtml = '<button type="button" class="btn btn--ghost" data-aie="cancel">' + esc(X.cancel) + "</button>";
    } else {
      var before = describe(q, cur.type, l), after = describe(cur.prop, cur.type, l);
      var map = {};
      before.forEach(function (b) { map[b.key] = b; });
      var changedCount = 0, blocks = "";
      after.forEach(function (b) {
        var o = map[b.key];
        var empty = !strip(b.html) && !/<img/i.test(b.html) && !b.correct && !(o && (strip(o.html) || o.correct));
        if (empty && !b.plain) return;
        if (b.plain && !b.html && !(o && o.html)) return;
        var ch = !o || norm(o) !== norm(b);
        if (ch) changedCount++;
        blocks +=
          '<div class="iq-aie-blk' + (ch ? " is-changed" : "") + (b.correct ? " is-correct" : "") + '">' +
          '<div class="iq-aie-blk__lab"><span>' + esc(b.label) + "</span>" +
          (b.correct ? '<em class="iq-aie-tag iq-aie-tag--ok">✓ ' + esc(X.correct) + "</em>" : "") +
          (ch ? '<em class="iq-aie-tag">' + esc(X.changed) + "</em>" : "") + "</div>" +
          '<div class="iq-aie-blk__body">' + (b.plain ? esc(b.html) : b.html || "—") + "</div>";
        if (ch && o && (strip(o.html) || (o.plain && o.html))) {
          blocks +=
            '<details class="iq-aie-old"><summary>' + esc(X.before) + '</summary><div class="iq-aie-blk__body">' +
            (o.plain ? esc(o.html) : o.html) + "</div></details>";
        }
        blocks += "</div>";
      });
      bodyHtml = '<div class="iq-aie-res-title">' + esc(X.resTitle) + "</div>";
      var note = cur.summary || (changedCount ? "" : X.noChange);
      if (changedCount === 0 && cur.summary) note = cur.summary;
      if (note) bodyHtml += '<div class="iq-aie-sum"><i data-lucide="sparkles"></i><div><strong>' + esc(X.changes) + "</strong>" + esc(note) + "</div></div>";
      bodyHtml += '<p class="iq-aie-hint">' + esc(X.resHint) + "</p>" + blocks;
      cur.changedCount = changedCount;
      footHtml =
        '<button type="button" class="btn btn--ghost" data-aie="cancel">' + esc(X.cancel) + "</button>" +
        '<button type="button" class="btn btn--secondary" data-aie="retry"><i data-lucide="refresh-cw"></i>' + esc(X.retry) + "</button>" +
        (changedCount ? '<button type="button" class="btn btn--primary" data-aie="apply"><i data-lucide="check"></i>' + esc(X.apply) + "</button>" : "");
    }
    body.innerHTML = bodyHtml;
    foot.innerHTML = footHtml;
    body.scrollTop = 0;
    if (window.lucide && lucide.createIcons) lucide.createIcons();
  }

  async function run() {
    var X = L();
    var acts = ACTIONS.filter(function (k) { return cur.sel[k]; });
    var instr = (cur.instr || "").trim();
    if (!acts.length && !instr) { cur.err = X.errNeed; render(); return; }
    var q = findQ(cur.id);
    if (!q) { cancelAll(); return; }
    if (!Settings.getAiSettings().apiKey) { cur.err = X.errNoKey; render(); return; }
    QTypes.ensure && QTypes.ensure(q);
    var ctx = { imgs: [], tokens: {} };
    var snap = snapshotForAi(q, cur.type, ctx);
    var prompt = buildPrompt(cur.type, snap, acts, instr);
    var my = ++seq, ac = new AbortController(), timedOut = false;
    cur.ac = ac; cur.view = "loading"; cur.err = ""; render();
    var timer = setTimeout(function () { timedOut = true; ac.abort(); }, 150000);
    try {
      var data = await callAi(prompt, ac.signal);
      if (my !== seq || !cur) return;
      var q2 = findQ(cur.id);
      if (!q2) { cancelAll(); return; }
      var prop = Utils.clone(q2);
      QTypes.ensure && QTypes.ensure(prop);
      applyEdit(prop, data, ctx);
      cur.prop = prop;
      cur.summary = txt(data.changes).replace(/<[^>]+>/g, "").trim();
      cur.view = "result";
      render();
    } catch (e) {
      if (my !== seq || !cur) return;
      var m;
      if (e && e.name === "AbortError") m = timedOut ? X.errTimeout : null;
      else if (e && e.code === "noKey") m = X.errNoKey;
      else if (e && e.code === "bad") m = X.errBad;
      else if (e && e.code === "cut") m = X.errCut;
      else if (e && e.code === "net") m = X.errNet;
      else if (e && e.code === "all") m = X.errAll;
      else m = (e && e.message) || X.errBad;
      if (m === null) return;
      cur.view = "form"; cur.err = m; render();
    } finally {
      clearTimeout(timer);
    }
  }

  var KEYS = ["question", "options", "optionsLayout", "explanationHtml", "tfAnswer", "answer", "subQuestions"];

  function applyResult() {
    if (!cur || !cur.prop) return;
    var q = findQ(cur.id), id = cur.id;
    if (!q) { cancelAll(); return; }
    var backup = Utils.clone(q), p = cur.prop;
    KEYS.forEach(function (k) { if (p[k] !== undefined) q[k] = p[k]; });
    cancelAll();
    Editor.renderQuestions();
    Preview.update();
    flash(id);
    snack(L().applied, L().undo, function () {
      var arr = State.get().questions, i = arr.findIndex(function (x) { return x.id === id; });
      if (i === -1) return;
      arr[i] = backup;
      Editor.renderQuestions();
      Preview.update();
      flash(id);
      toast(L().undone, "success");
    });
  }

  function flash(id) {
    var card = document.querySelector('#questionsList .question-card[data-id="' + id + '"]');
    if (!card) return;
    try { card.scrollIntoView({ block: "nearest", behavior: "smooth" }); } catch (e) {}
    card.classList.add("iq-aie-flash");
    setTimeout(function () { card.classList.remove("iq-aie-flash"); }, 1700);
  }

  function snack(msg, label, fn) {
    var old = document.querySelector(".iq-aie-snack");
    if (old) old.remove();
    clearTimeout(snackTimer);
    var s = document.createElement("div");
    s.className = "iq-aie-snack";
    if (lg() === "bn") s.setAttribute("data-i18n-font", "");
    s.setAttribute("role", "status");
    s.innerHTML = '<span>' + esc(msg) + '</span><button type="button">' + esc(label) + "</button>";
    s.querySelector("button").addEventListener("click", function () { s.remove(); fn(); });
    document.body.appendChild(s);
    snackTimer = setTimeout(function () { s.remove(); }, 9000);
  }

  /* ----------------------------------------------- the button in each card's 1st row */
  function addBtn(card, id, lang) {
    var bar = card.querySelector(".question-card__head .qtype-bar");
    if (!bar || bar.querySelector(".iq-aiedit-btn")) return;
    var X = STR[lang === "bn" ? "bn" : "en"];
    var b = document.createElement("button");
    b.type = "button";
    b.className = "iq-aiedit-btn";
    b.setAttribute("data-qid", id);
    b.setAttribute("aria-label", X.btnTitle);
    b.title = X.btnTitle;
    b.innerHTML = '<i data-lucide="sparkles"></i><span class="iq-aiedit-label">AI Edit</span>';
    bar.appendChild(b);
  }

  var prevDecorate = QTypes.decorateCard;
  QTypes.decorateCard = function (card, q, index, lang) {
    var c = prevDecorate.apply(this, arguments);
    try { addBtn(c, q.id, lang); } catch (e) { console.error("AI Edit button failed:", e); }
    return c;
  };

  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest(".iq-aiedit-btn");
    if (!b) return;
    e.preventDefault();
    e.stopPropagation();
    openFor(b.getAttribute("data-qid"));
  });

  // cards that were rendered before this module loaded
  function backfill() {
    var any = false;
    document.querySelectorAll("#questionsList .question-card[data-id]").forEach(function (card) {
      if (!card.querySelector(".iq-aiedit-btn")) { addBtn(card, card.getAttribute("data-id"), lg()); any = true; }
    });
    if (any && window.lucide && lucide.createIcons) lucide.createIcons();
  }
  backfill();
  window.addEventListener("load", backfill);
})();
;
