/**
 * Bilingual editorial content. Values are plain text and must be escaped by renderers.
 * Draft policies and articles require review before publication. Nothing here is a
 * verification of a qualification, regulated status, testimonial or legal outcome.
 */
const bi = (en, fa) => ({ en, fa });

export { copy } from "./interface.js";

export const brand = {
  name: "UKLawPersian",
  company: "Parthian Peak Group Ltd",
  tradingName: "Parthian Consulting",
};

export const navigation = [
  { path: "", label: bi("Home", "خانه") },
  { path: "about/", label: bi("About us", "درباره ما") },
  { path: "services/", label: bi("Services", "خدمات") },
  { path: "insights/", label: bi("Legal insights", "دانستنی‌های حقوقی") },
  { path: "contact/", label: bi("Contact us", "تماس با ما") },
];

export const services = [
  {
    id: "immigration",
    icon: "globe2",
    title: bi(
      "Immigration & nationality information",
      "اطلاعات عمومی مهاجرت و تابعیت",
    ),
    shortTitle: bi("Immigration & nationality", "مهاجرت و تابعیت"),
    summary: bi(
      "Understand official information and prepare for a conversation with an authorised adviser.",
      "شناخت منابع رسمی و آمادگی برای گفت‌وگو با مشاور دارای مجوز.",
    ),
    intro: bi(
      "Immigration information can feel difficult to navigate, particularly in a second language. This service is limited to general education, finding official resources and identifying when an authorised immigration adviser is needed.",
      "دسترسی به اطلاعات مهاجرتی، به‌ویژه به زبان دوم، همیشه آسان نیست. این بخش صرفاً به آموزش عمومی، معرفی منابع رسمی و شناخت موارد نیاز به مشاور مهاجرت دارای مجوز اختصاص دارد.",
    ),
    topics: bi(
      [
        "Finding official government information",
        "Understanding common immigration terminology",
        "Preparing questions for an authorised adviser",
        "Organising information before a regulated consultation",
        "Understanding the difference between general information and personal advice",
      ],
      [
        "پیدا کردن اطلاعات در منابع رسمی دولتی",
        "آشنایی با اصطلاحات رایج مهاجرتی",
        "آماده کردن پرسش‌ها برای مشاور دارای مجوز",
        "مرتب کردن اطلاعات پیش از مشاوره تخصصی",
        "شناخت تفاوت اطلاعات عمومی با مشاوره درباره شرایط فردی",
      ],
    ),
    scope: bi(
      "We do not offer case-specific immigration advice, assess eligibility, recommend an application route, complete immigration applications or represent applicants. Matters requiring regulated advice must be referred to an appropriately authorised professional. Service suitability must be checked before payment.",
      "ما درباره پرونده مهاجرتی اشخاص مشاوره نمی‌دهیم، واجد شرایط بودن را ارزیابی نمی‌کنیم، مسیر درخواست پیشنهاد نمی‌دهیم و تکمیل درخواست مهاجرت یا نمایندگی متقاضی را بر عهده نمی‌گیریم. موضوعات نیازمند مشاوره تحت نظارت باید به فرد دارای مجوز مربوط ارجاع شوند. مناسب بودن خدمت باید پیش از پرداخت بررسی شود.",
    ),
    process: bi(
      [
        "Tell us the general topic without sharing sensitive documents.",
        "We check whether the enquiry fits an educational service.",
        "Receive general information and pointers to official or authorised sources.",
      ],
      [
        "موضوع کلی را بدون ارسال مدارک حساس مطرح کنید.",
        "بررسی می‌کنیم که درخواست در چارچوب آموزش عمومی باشد.",
        "اطلاعات عمومی و راهنمای دسترسی به منابع رسمی یا افراد دارای مجوز را دریافت کنید.",
      ],
    ),
    faqs: [
      {
        question: bi(
          "Can you tell me which visa to apply for?",
          "آیا می‌توانید بگویید برای کدام ویزا اقدام کنم؟",
        ),
        answer: bi(
          "No. Recommending a route for your circumstances is case-specific immigration advice. Speak to an appropriately authorised immigration adviser.",
          "خیر. پیشنهاد مسیر مناسب با توجه به شرایط شما، مشاوره مهاجرتی درباره پرونده شخصی محسوب می‌شود. برای این موضوع با مشاور مهاجرت دارای مجوز مربوط صحبت کنید.",
        ),
      },
      {
        question: bi(
          "Should I upload my passport before asking a question?",
          "آیا پیش از طرح سؤال باید گذرنامه‌ام را ارسال کنم؟",
        ),
        answer: bi(
          "No. Do not send passports, immigration records or other sensitive documents through the general enquiry form or booking questions.",
          "خیر. گذرنامه، سوابق مهاجرتی یا دیگر مدارک حساس را از طریق فرم تماس عمومی یا پرسش‌های رزرو ارسال نکنید.",
        ),
      },
    ],
  },
  {
    id: "housing",
    icon: "house-door",
    title: bi(
      "Housing, tenancy & landlord–tenant matters",
      "مسکن، اجاره و مسائل میان موجر و مستأجر",
    ),
    shortTitle: bi("Housing & tenancy", "مسکن و اجاره"),
    summary: bi(
      "Bring clarity to your housing concerns, records and the questions you need to ask.",
      "به دغدغه‌های مسکن، مدارک و پرسش‌های خود نظم و وضوح بدهید.",
    ),
    intro: bi(
      "A clear record of what happened is a useful starting point for a housing concern. We offer general information and permitted practical support to help you organise tenancy paperwork, correspondence and the issues you want to discuss.",
      "ثبت روشن اتفاقات، نقطه شروع مناسبی برای بررسی مسائل مسکن است. اطلاعات عمومی و پشتیبانی عملی مجاز ارائه می‌کنیم تا قرارداد اجاره، مکاتبات و موضوعاتی را که می‌خواهید بررسی شوند، منظم کنید.",
    ),
    topics: bi(
      [
        "Organising tenancy agreements and correspondence",
        "Creating a chronology of repairs or maintenance concerns",
        "Preparing questions about deposits and end-of-tenancy records",
        "Keeping a clear record of landlord–tenant communications",
        "Preparing for an appointment with a suitable housing professional",
      ],
      [
        "مرتب کردن قرارداد اجاره و مکاتبات",
        "تنظیم خط زمانی مشکلات تعمیر و نگهداری",
        "آماده کردن پرسش‌ها درباره ودیعه و مدارک پایان اجاره",
        "ثبت منظم ارتباطات میان موجر و مستأجر",
        "آمادگی برای جلسه با متخصص مناسب در امور مسکن",
      ],
    ),
    scope: bi(
      "The service provides general education and agreed administrative support. It does not include conducting litigation, court advocacy or a guarantee of any outcome. Housing rules depend on the location and circumstances; urgent notices or deadlines should be taken promptly to an appropriately qualified adviser.",
      "این خدمت شامل آموزش عمومی و پشتیبانی اداری توافق‌شده است؛ پیگیری قضایی، دفاع در دادگاه یا تضمین نتیجه را در بر نمی‌گیرد. مقررات مسکن به محل و شرایط موضوع بستگی دارد. اخطارها یا مهلت‌های فوری را بدون تأخیر با مشاور دارای صلاحیت مربوط مطرح کنید.",
    ),
    process: bi(
      [
        "Outline the concern and identify the location of the property.",
        "Agree the scope and organise the relevant chronology and records.",
        "Discuss general information and identify appropriate next sources of help.",
      ],
      [
        "موضوع و محل ملک را به‌اختصار مشخص کنید.",
        "حدود خدمت را تعیین و خط زمانی و مدارک مرتبط را مرتب کنید.",
        "اطلاعات عمومی را مرور و منابع مناسب برای کمک بعدی را شناسایی کنید.",
      ],
    ),
    faqs: [
      {
        question: bi(
          "Can you represent me in a housing claim?",
          "آیا در دعوای مربوط به مسکن نماینده من می‌شوید؟",
        ),
        answer: bi(
          "Court representation and conducting litigation are outside this service. If these are needed, seek an appropriately authorised professional.",
          "نمایندگی در دادگاه و پیگیری قضایی در محدوده این خدمت نیست. در صورت نیاز، به فرد دارای مجوز مربوط مراجعه کنید.",
        ),
      },
      {
        question: bi("What should I prepare?", "چه چیزهایی را آماده کنم؟"),
        answer: bi(
          "Start with a short timeline, the main questions and a list of relevant records. Do not send confidential documents until an appropriate secure channel has been confirmed.",
          "با یک خط زمانی کوتاه، پرسش‌های اصلی و فهرست مدارک مرتبط شروع کنید. مدارک محرمانه را تا زمانی که مسیر امن مناسبی تأیید نشده، ارسال نکنید.",
        ),
      },
    ],
  },
  {
    id: "employment",
    icon: "briefcase",
    title: bi(
      "Employment rights & workplace disputes",
      "حقوق شغلی و اختلافات محیط کار",
    ),
    shortTitle: bi("Employment & workplace", "اشتغال و محیط کار"),
    summary: bi(
      "Organise workplace concerns and prepare for informed conversations about your next steps.",
      "مسائل محیط کار را منظم کنید و برای گفت‌وگویی آگاهانه درباره گام بعد آماده شوید.",
    ),
    intro: bi(
      "Workplace issues are easier to explain when the facts, documents and questions are organised. Our educational and administrative support helps you prepare a clear account of your concern and understand where specialist assistance may be needed.",
      "وقتی واقعیت‌ها، مدارک و پرسش‌ها مرتب باشند، توضیح مسائل کاری آسان‌تر می‌شود. پشتیبانی آموزشی و اداری ما به شما کمک می‌کند شرح روشنی از موضوع تهیه کنید و موارد نیاز به کمک تخصصی را بشناسید.",
    ),
    topics: bi(
      [
        "Preparing a workplace chronology",
        "Organising contracts, policies and relevant correspondence",
        "Preparing for internal workplace conversations",
        "Clarifying the questions you want to ask about pay or working arrangements",
        "Identifying sources of employment information and specialist help",
      ],
      [
        "تهیه خط زمانی اتفاقات محیط کار",
        "مرتب کردن قرارداد، دستورالعمل‌ها و مکاتبات مرتبط",
        "آمادگی برای گفت‌وگوهای داخلی در محیط کار",
        "روشن کردن پرسش‌های مربوط به دستمزد یا شرایط کار",
        "شناخت منابع اطلاعات شغلی و کمک تخصصی",
      ],
    ),
    scope: bi(
      "We do not promise a legal outcome or provide tribunal representation as part of this service. Any issue involving a deadline, settlement agreement or proposed legal action should be reviewed promptly by an appropriately qualified professional. A consultation does not pause a deadline.",
      "در این خدمت نتیجه حقوقی تضمین نمی‌شود و نمایندگی در مرجع رسیدگی به اختلافات کار ارائه نمی‌گردد. موضوعات دارای مهلت، توافق سازش یا اقدام قضایی پیشنهادی باید سریعاً با فرد دارای صلاحیت مربوط بررسی شوند. رزرو مشاوره موجب توقف مهلت‌ها نمی‌شود.",
    ),
    process: bi(
      [
        "Describe the workplace issue briefly and mention any known deadline.",
        "Agree the permitted scope and prepare a factual record.",
        "Explore general information and questions for the appropriate specialist.",
      ],
      [
        "موضوع کاری را کوتاه توضیح دهید و مهلت‌های شناخته‌شده را ذکر کنید.",
        "حدود مجاز خدمت را تعیین و گزارشی از واقعیت‌ها آماده کنید.",
        "اطلاعات عمومی و پرسش‌های مناسب برای متخصص مربوط را مرور کنید.",
      ],
    ),
    faqs: [
      {
        question: bi(
          "Will a consultation protect a time limit?",
          "آیا رزرو مشاوره از گذشت مهلت جلوگیری می‌کند؟",
        ),
        answer: bi(
          "No. Do not wait for a consultation if a deadline may be approaching. Seek timely help from an appropriately qualified adviser.",
          "خیر. اگر ممکن است مهلتی نزدیک باشد، منتظر جلسه مشاوره نمانید و به‌موقع از مشاور دارای صلاحیت مربوط کمک بگیرید.",
        ),
      },
      {
        question: bi(
          "Can I share a complete personnel file?",
          "آیا می‌توانم کل پرونده پرسنلی را ارسال کنم؟",
        ),
        answer: bi(
          "Please do not send it through ordinary enquiries. First establish which information is necessary and how it can be shared securely.",
          "لطفاً آن را از طریق ارتباطات عمومی ارسال نکنید. ابتدا مشخص شود چه اطلاعاتی لازم است و چگونه باید به‌صورت امن به اشتراک گذاشته شود.",
        ),
      },
    ],
  },
  {
    id: "civil-disputes",
    icon: "chat-square-text",
    title: bi(
      "Civil disputes, small claims & debt recovery",
      "اختلافات مدنی، دعاوی کوچک و پیگیری مطالبات",
    ),
    shortTitle: bi("Civil disputes & claims", "اختلافات مدنی و مطالبات"),
    summary: bi(
      "Make sense of your records and prepare a clear account of a dispute or unpaid invoice.",
      "مدارک خود را منظم کنید و شرح روشنی از اختلاف یا صورتحساب پرداخت‌نشده تهیه کنید.",
    ),
    intro: bi(
      "Before deciding how to approach a dispute, it helps to know what was agreed, what happened and what outcome you are seeking. We provide general information and permitted assistance with organising those facts and documents.",
      "پیش از تصمیم‌گیری درباره یک اختلاف، بهتر است روشن باشد چه توافقی صورت گرفته، چه اتفاقی افتاده و چه نتیجه‌ای می‌خواهید. در زمینه اطلاعات عمومی و کمک مجاز به تنظیم این واقعیت‌ها و مدارک همراه شما هستیم.",
    ),
    topics: bi(
      [
        "Organising agreements, invoices and correspondence",
        "Preparing a factual timeline and schedule of amounts",
        "Clarifying the outcome you want to discuss",
        "Understanding general dispute-resolution terminology",
        "Preparing questions for a qualified dispute-resolution professional",
      ],
      [
        "مرتب کردن توافق‌ها، صورتحساب‌ها و مکاتبات",
        "تهیه خط زمانی و فهرست مبالغ",
        "روشن کردن نتیجه‌ای که می‌خواهید درباره آن گفت‌وگو کنید",
        "آشنایی با اصطلاحات عمومی حل اختلاف",
        "آماده کردن پرسش‌ها برای متخصص دارای صلاحیت در حل اختلاف",
      ],
    ),
    scope: bi(
      "This is not a debt-collection agency or a litigation service. We do not conduct proceedings, act as your court representative or guarantee recovery. Any procedural steps, court documents or limitation questions require appropriate professional advice.",
      "این خدمت، وصول مطالبات به‌عنوان مؤسسه وصول بدهی یا خدمات پیگیری قضایی نیست. ما دادرسی را اداره نمی‌کنیم، نماینده شما در دادگاه نمی‌شویم و وصول طلب را تضمین نمی‌کنیم. اقدامات دادرسی، اسناد دادگاه یا پرسش‌های مربوط به مهلت‌ها نیازمند مشاوره حرفه‌ای مناسب هستند.",
    ),
    process: bi(
      [
        "Explain the disagreement in a short, factual summary.",
        "Agree the scope and organise the supporting record.",
        "Review general information and identify questions for further assistance.",
      ],
      [
        "اختلاف را در یک خلاصه کوتاه و مبتنی بر واقعیت توضیح دهید.",
        "حدود خدمت را تعیین و مدارک پشتیبان را مرتب کنید.",
        "اطلاعات عمومی را مرور و پرسش‌های لازم برای دریافت کمک بیشتر را مشخص کنید.",
      ],
    ),
    faqs: [
      {
        question: bi(
          "Do you guarantee that a debt will be recovered?",
          "آیا وصول طلب را تضمین می‌کنید؟",
        ),
        answer: bi(
          "No. No outcome is guaranteed. The service is limited to the agreed educational and administrative support.",
          "خیر. هیچ نتیجه‌ای تضمین نمی‌شود. خدمت به پشتیبانی آموزشی و اداری توافق‌شده محدود است.",
        ),
      },
      {
        question: bi(
          "Can you file a claim on my behalf?",
          "آیا از طرف من دادخواست ثبت می‌کنید؟",
        ),
        answer: bi(
          "Conducting litigation is outside the scope of this service. Seek an appropriately authorised professional if you need someone to act for you in proceedings.",
          "پیگیری قضایی خارج از محدوده این خدمت است. اگر برای اقدام در دادرسی به نماینده نیاز دارید، به فرد دارای مجوز مربوط مراجعه کنید.",
        ),
      },
    ],
  },
  {
    id: "business",
    icon: "buildings",
    title: bi(
      "Business & commercial consultancy",
      "مشاوره کسب‌وکار و امور تجاری",
    ),
    shortTitle: bi("Business & commercial", "کسب‌وکار و تجارت"),
    summary: bi(
      "Practical, structured thinking for clearer business processes and commercial decisions.",
      "نگاهی عملی و منظم برای شفاف‌تر شدن فرایندها و تصمیم‌های تجاری.",
    ),
    intro: bi(
      "Good business decisions start with clearly defined objectives and reliable information. Our consultancy helps you organise your priorities, review administrative processes and prepare focused questions for the professional specialists your business may need.",
      "تصمیم‌های مناسب تجاری با اهداف روشن و اطلاعات قابل اتکا آغاز می‌شوند. مشاوره ما کمک می‌کند اولویت‌ها را مرتب کنید، فرایندهای اداری را مرور کنید و پرسش‌های مشخصی برای متخصصان موردنیاز کسب‌وکارتان آماده سازید.",
    ),
    topics: bi(
      [
        "Clarifying business objectives and practical next steps",
        "Reviewing administrative processes and record keeping",
        "Organising commercial correspondence and documentation",
        "Preparing for conversations with accountants or legal advisers",
        "Identifying operational questions before a new project or agreement",
      ],
      [
        "روشن کردن اهداف کسب‌وکار و گام‌های عملی بعدی",
        "مرور فرایندهای اداری و نگهداری سوابق",
        "تنظیم مکاتبات و مستندات تجاری",
        "آمادگی برای گفت‌وگو با حسابدار یا مشاور حقوقی",
        "شناسایی پرسش‌های اجرایی پیش از پروژه یا توافق جدید",
      ],
    ),
    scope: bi(
      "This service provides business consultancy within an agreed scope. It does not include regulated financial advice, tax advice, reserved legal work or certification of an agreement. Specialist legal, accounting and regulatory questions should be taken to the relevant qualified professional.",
      "این خدمت در چارچوب توافق‌شده، مشاوره کسب‌وکار ارائه می‌کند. مشاوره مالی تحت نظارت، مشاوره مالیاتی، خدمات حقوقی نیازمند مجوز یا تأیید اعتبار قرارداد را شامل نمی‌شود. پرسش‌های تخصصی حقوقی، حسابداری و مقرراتی باید با فرد دارای صلاحیت مربوط مطرح شوند.",
    ),
    process: bi(
      [
        "Share the business objective and the decision you are preparing to make.",
        "Agree a focused agenda and the information needed.",
        "Discuss practical priorities and identify any specialist input required.",
      ],
      [
        "هدف کسب‌وکار و تصمیمی را که در پیش دارید مطرح کنید.",
        "دستور جلسه و اطلاعات موردنیاز را مشخص کنید.",
        "اولویت‌های عملی و نیاز احتمالی به نظر متخصص را بررسی کنید.",
      ],
    ),
    faqs: [
      {
        question: bi(
          "Can you review my tax position?",
          "آیا وضعیت مالیاتی من را بررسی می‌کنید؟",
        ),
        answer: bi(
          "Tax advice is not included. We can help you organise your questions for a qualified tax adviser or accountant.",
          "مشاوره مالیاتی در این خدمت ارائه نمی‌شود. می‌توانیم در مرتب کردن پرسش‌ها برای مشاور مالیاتی یا حسابدار دارای صلاحیت کمک کنیم.",
        ),
      },
      {
        question: bi(
          "Is this suitable for a new business?",
          "آیا این خدمت برای کسب‌وکار تازه مناسب است؟",
        ),
        answer: bi(
          "An initial enquiry can help establish whether your practical planning or administrative needs fit the service. The scope is agreed before any paid work begins.",
          "طرح درخواست اولیه کمک می‌کند مشخص شود نیاز شما در برنامه‌ریزی عملی یا امور اداری با این خدمت سازگار است یا نه. حدود خدمت پیش از شروع کار با هزینه توافق می‌شود.",
        ),
      },
    ],
  },
  {
    id: "property",
    icon: "key",
    title: bi(
      "Property purchasing & related guidance",
      "اطلاعات و راهنمایی عمومی خرید ملک",
    ),
    shortTitle: bi("Property purchasing", "خرید ملک"),
    summary: bi(
      "Prepare for the property journey with organised information and the right questions.",
      "با اطلاعات منظم و پرسش‌های مناسب، برای فرایند خرید ملک آماده شوید.",
    ),
    intro: bi(
      "Buying a property involves several different professionals and many unfamiliar terms. General information and practical preparation can help you understand who to speak to, keep your records in order and make better use of specialist appointments.",
      "خرید ملک با حضور متخصصان مختلف و اصطلاحات ناآشنا همراه است. اطلاعات عمومی و آمادگی عملی کمک می‌کند بدانید با چه کسی صحبت کنید، مدارک را منظم نگه دارید و از جلسات تخصصی استفاده بهتری ببرید.",
    ),
    topics: bi(
      [
        "Understanding the general roles of property professionals",
        "Organising a property search and viewing questions",
        "Preparing questions for a conveyancer or surveyor",
        "Keeping a checklist of information requested by your advisers",
        "Understanding general purchase-process terminology",
      ],
      [
        "آشنایی کلی با نقش متخصصان امور ملک",
        "تنظیم جست‌وجوی ملک و پرسش‌های هنگام بازدید",
        "آماده کردن پرسش‌ها برای متخصص انتقال مالکیت یا ارزیاب ساختمان",
        "تهیه فهرست اطلاعات درخواستی مشاوران شما",
        "آشنایی با اصطلاحات عمومی فرایند خرید",
      ],
    ),
    scope: bi(
      "We do not provide conveyancing, prepare transfer instruments, undertake title investigations, give mortgage advice or carry out property surveys. These tasks should be handled by appropriately qualified or authorised professionals. Our involvement is limited to general education and permitted administrative support.",
      "خدمات انتقال مالکیت، تنظیم اسناد انتقال، بررسی حقوقی مالکیت، مشاوره وام مسکن یا ارزیابی فنی ساختمان ارائه نمی‌کنیم. این امور باید توسط افراد دارای صلاحیت یا مجوز مربوط انجام شوند. نقش ما به آموزش عمومی و پشتیبانی اداری مجاز محدود است.",
    ),
    process: bi(
      [
        "Tell us which stage of the property process you are considering.",
        "Identify the general information and organisational support you need.",
        "Prepare questions and a practical record for the relevant property professionals.",
      ],
      [
        "مشخص کنید در کدام مرحله از فرایند خرید ملک هستید.",
        "اطلاعات عمومی و پشتیبانی موردنیاز برای نظم‌دهی را شناسایی کنید.",
        "پرسش‌ها و سوابق کاربردی را برای متخصصان مربوط آماده کنید.",
      ],
    ),
    faqs: [
      {
        question: bi(
          "Can you act as my conveyancer?",
          "آیا امور حقوقی انتقال ملک را برای من انجام می‌دهید؟",
        ),
        answer: bi(
          "No. Conveyancing and reserved property work are not included. You will need an appropriately authorised conveyancer or solicitor.",
          "خیر. انتقال حقوقی ملک و خدمات اختصاصی نیازمند مجوز در این خدمت ارائه نمی‌شود. برای این کار به متخصص انتقال مالکیت یا وکیل دارای مجوز مربوط نیاز دارید.",
        ),
      },
      {
        question: bi(
          "Can you recommend a mortgage for me?",
          "آیا می‌توانید وام مسکن مناسب من را پیشنهاد دهید؟",
        ),
        answer: bi(
          "No. Personal mortgage recommendations require appropriate regulated advice. We can help you prepare general questions for a qualified mortgage adviser.",
          "خیر. پیشنهاد وام مسکن متناسب با شرایط شخصی به مشاوره تحت نظارت مربوط نیاز دارد. می‌توانیم برای آماده کردن پرسش‌های عمومی جهت گفت‌وگو با مشاور واجد صلاحیت کمک کنیم.",
        ),
      },
    ],
  },
  {
    id: "document-assistance",
    icon: "file-earmark-text",
    title: bi(
      "Document preparation & administrative assistance",
      "آماده‌سازی مدارک و پشتیبانی اداری",
    ),
    shortTitle: bi("Documents & administration", "مدارک و امور اداری"),
    summary: bi(
      "Clearer records, well-organised paperwork and practical administrative support.",
      "سوابق روشن‌تر، مدارک منظم و پشتیبانی کاربردی در امور اداری.",
    ),
    intro: bi(
      "Paperwork is easier to manage when its purpose and structure are clear. We can assist with permitted administrative tasks such as formatting, organising records and preparing factual summaries using information you provide, within an agreed scope.",
      "وقتی هدف و ساختار مدارک روشن باشد، مدیریت آن‌ها آسان‌تر می‌شود. در چارچوب توافق‌شده، به امور اداری مجاز مانند قالب‌بندی، مرتب کردن سوابق و تهیه خلاصه‌های مبتنی بر اطلاعات ارائه‌شده از سوی شما کمک می‌کنیم.",
    ),
    topics: bi(
      [
        "Organising and indexing existing documents",
        "Preparing factual timelines from your records",
        "Formatting ordinary business correspondence",
        "Creating checklists of information to gather",
        "Administrative preparation for a professional appointment",
      ],
      [
        "مرتب کردن و فهرست‌گذاری مدارک موجود",
        "تهیه خط زمانی بر اساس سوابق شما",
        "قالب‌بندی مکاتبات عادی تجاری",
        "تهیه فهرست اطلاعاتی که باید جمع‌آوری شوند",
        "آمادگی اداری برای جلسه با متخصص",
      ],
    ),
    scope: bi(
      "We do not prepare reserved legal instruments, complete immigration applications, provide certified translations, notarise documents or certify their legal effect. We cannot confirm a document is legally sufficient. Any task requiring legal judgement or professional authorisation must be referred appropriately.",
      "تنظیم اسناد حقوقی اختصاصی نیازمند مجوز، تکمیل درخواست مهاجرت، ترجمه رسمی، تصدیق اسناد یا تأیید اثر حقوقی آن‌ها انجام نمی‌دهیم. نمی‌توانیم کفایت حقوقی یک مدرک را تأیید کنیم. هر کاری که به تشخیص حقوقی یا مجوز حرفه‌ای نیاز داشته باشد باید به متخصص مناسب ارجاع شود.",
    ),
    process: bi(
      [
        "Describe the administrative task without attaching confidential documents.",
        "Agree what can be done and which information is necessary.",
        "Share only the agreed documents through a confirmed secure channel.",
      ],
      [
        "کار اداری موردنظر را بدون پیوست مدارک محرمانه توضیح دهید.",
        "مشخص کنید چه کاری قابل انجام است و چه اطلاعاتی ضرورت دارد.",
        "فقط مدارک توافق‌شده را از طریق مسیر امن تأییدشده به اشتراک بگذارید.",
      ],
    ),
    faqs: [
      {
        question: bi(
          "Do you provide certified translations?",
          "آیا ترجمه رسمی ارائه می‌کنید؟",
        ),
        answer: bi(
          "No certified translation service is advertised. Where certification is required, use a suitable qualified provider and check the receiving organisation’s requirements.",
          "خدمات ترجمه رسمی ارائه نمی‌شود. اگر تأیید ترجمه لازم است، به ارائه‌دهنده واجد صلاحیت مراجعه و الزامات سازمان دریافت‌کننده را بررسی کنید.",
        ),
      },
      {
        question: bi(
          "How will I submit my documents?",
          "چگونه مدارکم را ارسال کنم؟",
        ),
        answer: bi(
          "Once the external document workflow is connected and tested, eligible paid bookings will receive an individual secure file-request link. This automation is not yet active. Do not use the general contact form to send sensitive documents.",
          "پس از اتصال و آزمایش فرایند خارجی دریافت مدارک، برای رزروهای پرداخت‌شده واجد شرایط، لینک اختصاصی و امن ارسال فایل فرستاده خواهد شد. این فرایند خودکار هنوز فعال نیست. از فرم تماس عمومی برای ارسال مدارک حساس استفاده نکنید.",
        ),
      },
    ],
  },
];

export const consultationOptions = [
  {
    id: "video",
    icon: "camera-video",
    price: 100,
    title: bi("Video consultation", "مشاوره تصویری"),
    summary: bi(
      "A focused conversation to discuss your enquiry, clarify the available support and consider practical next steps.",
      "گفت‌وگویی متمرکز برای بررسی درخواست شما، روشن شدن پشتیبانی قابل ارائه و مرور گام‌های عملی بعدی.",
    ),
    duration: bi("60 minutes", "۶۰ دقیقه"),
    features: bi(
      [
        "A 60-minute online conversation",
        "English or Persian",
        "Microsoft Teams, once configured",
        "Agreed consultancy scope before booking",
      ],
      [
        "گفت‌وگوی آنلاین ۶۰ دقیقه‌ای",
        "به زبان فارسی یا انگلیسی",
        "از طریق مایکروسافت تیمز، پس از راه‌اندازی",
        "تعیین حدود خدمت پیش از رزرو",
      ],
    ),
  },
  {
    id: "written",
    icon: "file-earmark-text",
    price: 50,
    title: bi("Written preliminary assessment", "ارزیابی مقدماتی کتبی"),
    summary: bi(
      "A structured written response to your enquiry. After payment, send your details by email or WhatsApp.",
      "پاسخی منظم و کتبی به درخواست شما. پس از پرداخت، جزئیات درخواست را از طریق ایمیل یا واتساپ ارسال کنید.",
    ),
    duration: bi(
      "Written response · no video meeting",
      "پاسخ کتبی، بدون جلسه تصویری",
    ),
    features: bi(
      [
        "A written preliminary response",
        "English or Persian",
        "No video appointment required",
        "Response timeframe confirmed before payment",
      ],
      [
        "پاسخ مقدماتی به‌صورت کتبی",
        "به زبان فارسی یا انگلیسی",
        "بدون نیاز به جلسه تصویری",
        "تأیید زمان پاسخ‌گویی پیش از پرداخت",
      ],
    ),
  },
];

export const faqs = [
  {
    question: bi(
      "Which consultation is right for me?",
      "کدام نوع مشاوره برای من مناسب است؟",
    ),
    answer: bi(
      "Choose the £100 video consultation for a 60-minute conversation, or the £50 written preliminary assessment for a response to a focused enquiry without a meeting. The service must fit the permitted scope; ask a general question first if you are unsure.",
      "برای گفت‌وگوی ۶۰ دقیقه‌ای، مشاوره تصویری ۱۰۰ پوندی و برای پاسخ به یک درخواست مشخص بدون جلسه، ارزیابی مقدماتی کتبی ۵۰ پوندی را انتخاب کنید. موضوع باید در محدوده مجاز خدمات باشد؛ اگر مطمئن نیستید، ابتدا درخواست خود را به‌صورت کلی مطرح کنید.",
    ),
  },
  {
    question: bi("Can I speak in Persian?", "آیا می‌توانم به فارسی صحبت کنم؟"),
    answer: bi(
      "Yes. Both consultation options are intended to be available in English and Persian. Select or state your preferred language when booking.",
      "بله. هر دو نوع خدمت برای ارائه به فارسی و انگلیسی در نظر گرفته شده‌اند. هنگام رزرو، زبان موردنظر خود را انتخاب یا اعلام کنید.",
    ),
  },
  {
    question: bi(
      "How do booking and payment work?",
      "رزرو و پرداخت چگونه انجام می‌شود؟",
    ),
    answer: bi(
      "Once the business accounts are connected, booking will take place through Cal.com and payment through its Stripe integration. Card details are handled by the payment provider, not by this website. Booking is currently awaiting configuration.",
      "پس از اتصال حساب‌های کسب‌وکار، رزرو از طریق Cal.com و پرداخت از طریق اتصال آن به Stripe انجام می‌شود. اطلاعات کارت در اختیار ارائه‌دهنده پرداخت قرار می‌گیرد و این وب‌سایت آن را دریافت نمی‌کند. رزرو در حال حاضر در انتظار راه‌اندازی است.",
    ),
  },
  {
    question: bi(
      "Does a written assessment include a meeting?",
      "آیا ارزیابی کتبی شامل جلسه هم می‌شود؟",
    ),
    answer: bi(
      "No. Any selected review slot allocates time for the written work; it is not a video appointment. The response timeframe must be confirmed by the business before you pay.",
      "خیر. بازه‌ای که برای بررسی انتخاب می‌شود، زمان انجام کار کتبی است و جلسه تصویری محسوب نمی‌شود. کسب‌وکار باید زمان پاسخ‌گویی را پیش از پرداخت به شما اعلام کند.",
    ),
  },
  {
    question: bi(
      "How do I send supporting documents?",
      "چگونه مدارک پشتیبان را ارسال کنم؟",
    ),
    answer: bi(
      "The planned process sends an individual secure file-request link after a booking and payment have been verified. That external workflow is not yet active. Never send passports or confidential case documents through the general enquiry form or ordinary booking questions.",
      "در فرایند پیش‌بینی‌شده، پس از تأیید رزرو و پرداخت، لینک اختصاصی و امن ارسال مدارک فرستاده می‌شود. این فرایند خارجی هنوز فعال نیست. گذرنامه یا مدارک محرمانه پرونده را از طریق فرم تماس عمومی یا پرسش‌های عادی رزرو ارسال نکنید.",
    ),
  },
  {
    question: bi(
      "Are you a regulated law firm?",
      "آیا این مجموعه یک مؤسسه حقوقی تحت نظارت است؟",
    ),
    answer: bi(
      "The website presents consultancy, legal education and permitted administrative support. It does not present Parthian Consulting as an SRA-regulated law firm or an authorised immigration adviser. Reserved or regulated work is outside the advertised scope and requires an appropriately authorised professional.",
      "این وب‌سایت خدمات مشاوره، آموزش حقوقی و پشتیبانی اداری مجاز را معرفی می‌کند. پارتین کانسالتینگ در این وب‌سایت به‌عنوان مؤسسه حقوقی تحت نظارت SRA یا مشاور مهاجرت دارای مجوز معرفی نمی‌شود. خدمات اختصاصی یا تحت نظارت، خارج از محدوده خدمات معرفی‌شده هستند و به فرد دارای مجوز مربوط نیاز دارند.",
    ),
  },
  {
    question: bi(
      "What if I need to cancel or complain?",
      "برای لغو رزرو یا ثبت شکایت چه کنم؟",
    ),
    answer: bi(
      "The cancellation, refund and complaints pages are currently drafts awaiting business and professional approval. The final applicable terms and contact details must be available before paid bookings are enabled.",
      "صفحات لغو رزرو، بازپرداخت و رسیدگی به شکایات در حال حاضر پیش‌نویس هستند و به تأیید کسب‌وکار و بررسی حرفه‌ای نیاز دارند. شرایط نهایی و اطلاعات تماس مربوط باید پیش از فعال شدن رزرو با پرداخت در دسترس باشند.",
    ),
  },
];

// Deliberately empty: publish only genuine, permissioned testimonials.
export const testimonials = [];

export const articles = [
  {
    slug: "prepare-for-a-housing-conversation",
    imageAlt: bi("A row of terraced houses in Notting Hill, London", "ردیفی از خانه‌های به‌هم‌پیوسته در ناتینگ هیل لندن"),
    category: "housing",
    image: "/src/assets/images/articles/housing.webp",
    title: bi(
      "Before a housing conversation: put the facts in order",
      "پیش از گفت‌وگو درباره مسکن، واقعیت‌ها را مرتب کنید",
    ),
    excerpt: bi(
      "A practical way to organise your timeline, correspondence and questions before seeking appropriate help.",
      "روشی کاربردی برای مرتب کردن خط زمانی، مکاتبات و پرسش‌ها پیش از دریافت کمک مناسب.",
    ),
    date: "2026-11-17",
    updated: "2026-11-17",
    draft: true,
    sections: [
      {
        heading: bi(
          "Start with a short chronology",
          "با یک خط زمانی کوتاه شروع کنید",
        ),
        paragraphs: bi(
          [
            "Write down the main events in date order. Include when an issue first arose, who you contacted and what response you received. Keep the wording factual, and distinguish what you remember from what a document confirms.",
            "A concise timeline makes it easier to explain your concern without having to search through every message during an appointment.",
          ],
          [
            "اتفاقات اصلی را به‌ترتیب تاریخ بنویسید: مشکل چه زمانی شروع شد، با چه کسی تماس گرفتید و چه پاسخی دریافت کردید. متن را بر اساس واقعیت‌ها تنظیم کنید و میان خاطره خود و آنچه در مدرک ثبت شده تفاوت بگذارید.",
            "یک خط زمانی کوتاه کمک می‌کند موضوع را بدون جست‌وجو در میان همه پیام‌ها در طول جلسه توضیح دهید.",
          ],
        ),
      },
      {
        heading: bi(
          "Make an index, not a document dump",
          "فهرست بسازید؛ همه مدارک را یک‌جا نفرستید",
        ),
        paragraphs: bi(
          [
            "List the records that may be relevant, such as an agreement, correspondence or dated photographs. Keep originals and name working copies clearly. Avoid adding unrelated information about other people.",
            "Before sharing anything confidential, ask which documents are necessary and confirm the secure channel to use. A general contact form is not a place for sensitive case documents.",
          ],
          [
            "مدارکی را که ممکن است مرتبط باشند، مانند قرارداد، مکاتبات یا عکس‌های دارای تاریخ، فهرست کنید. نسخه‌های اصلی را نگه دارید و نام نسخه‌های کاری را روشن انتخاب کنید. اطلاعات نامرتبط درباره دیگران را اضافه نکنید.",
            "پیش از به اشتراک گذاشتن اطلاعات محرمانه، بپرسید چه مدارکی لازم است و مسیر امن ارسال را تأیید کنید. فرم تماس عمومی محل ارسال مدارک حساس پرونده نیست.",
          ],
        ),
      },
      {
        heading: bi(
          "Decide what you need to ask",
          "مشخص کنید چه می‌خواهید بپرسید",
        ),
        paragraphs: bi(
          [
            "Choose the main questions you want the appointment to address. You might need help understanding terminology, organising a record or identifying an appropriate specialist. State the property location because the applicable framework may differ.",
            "If a notice, hearing or deadline is involved, mention it immediately and seek timely advice from an appropriately qualified professional. Preparing your records does not replace that advice.",
          ],
          [
            "پرسش‌های اصلی جلسه را انتخاب کنید. ممکن است به توضیح اصطلاحات، نظم دادن به سوابق یا شناسایی متخصص مناسب نیاز داشته باشید. محل ملک را مشخص کنید، زیرا چارچوب قابل اعمال می‌تواند متفاوت باشد.",
            "اگر اخطار، جلسه رسیدگی یا مهلتی در میان است، آن را از ابتدا مطرح کنید و به‌موقع از فرد دارای صلاحیت مربوط مشاوره بگیرید. آماده کردن مدارک جایگزین آن مشاوره نیست.",
          ],
        ),
      },
    ],
  },
  {
    slug: "organise-your-workplace-records",
    imageAlt: bi("A person taking notes beside a laptop at a desk", "فردی در حال یادداشت‌برداری کنار لپ‌تاپ روی میز کار"),
    category: "employment",
    image: "/src/assets/images/articles/employment.webp",
    title: bi(
      "A clearer record of a workplace concern",
      "ثبت روشن‌تر یک مسئله در محیط کار",
    ),
    excerpt: bi(
      "Separate facts, documents and questions so your next professional conversation can stay focused.",
      "واقعیت‌ها، مدارک و پرسش‌ها را از هم جدا کنید تا گفت‌وگوی تخصصی بعدی متمرکزتر باشد.",
    ),
    date: "2026-11-17",
    updated: "2026-11-17",
    draft: true,
    sections: [
      {
        heading: bi(
          "Record events while they are clear",
          "اتفاقات را زمانی ثبت کنید که جزئیات روشن است",
        ),
        paragraphs: bi(
          [
            "Create a brief record of the events you want to discuss. Include dates, the people involved and the exact question or concern. Where you do not remember something precisely, say so rather than filling in the gap.",
            "Separate your account of what happened from your interpretation of it. This makes the record easier for another person to follow.",
          ],
          [
            "از اتفاقاتی که می‌خواهید مطرح کنید گزارشی کوتاه تهیه کنید. تاریخ، افراد مرتبط و پرسش یا دغدغه مشخص را بنویسید. اگر جزئیاتی را دقیق به یاد ندارید، همان را بیان کنید و جای خالی را با حدس پر نکنید.",
            "شرح اتفاقات را از برداشت خود جدا کنید. به این ترتیب، دنبال کردن گزارش برای فرد دیگر آسان‌تر می‌شود.",
          ],
        ),
      },
      {
        heading: bi(
          "Gather only relevant information",
          "فقط اطلاعات مرتبط را گردآوری کنید",
        ),
        paragraphs: bi(
          [
            "Make a list of relevant records you already hold legitimately, such as your contract, workplace policies or correspondence addressed to you. Do not access or copy restricted material to prepare for a consultation.",
            "Keep sensitive information about colleagues out of an ordinary enquiry. Agree what needs to be shared, and how, before sending any documents.",
          ],
          [
            "از مدارک مرتبطی که به‌طور مجاز در اختیار دارید، مانند قرارداد، دستورالعمل‌های محل کار یا مکاتبات خطاب به خودتان، فهرست تهیه کنید. برای آمادگی مشاوره به اطلاعات با دسترسی محدود دسترسی پیدا نکنید یا از آن‌ها کپی نگیرید.",
            "اطلاعات حساس همکاران را در درخواست عمومی مطرح نکنید. پیش از ارسال مدارک، درباره اطلاعات ضروری و روش ارسال آن‌ها توافق کنید.",
          ],
        ),
      },
      {
        heading: bi(
          "Make the next conversation purposeful",
          "برای گفت‌وگوی بعدی هدف مشخص داشته باشید",
        ),
        paragraphs: bi(
          [
            "Write down the outcome you want to explore and the questions you need answered. Explain whether an internal conversation, formal process or professional appointment has already been arranged.",
            "Do not assume that making an enquiry or booking a consultation changes a deadline. Where timing may matter, obtain prompt assistance from an appropriately qualified employment professional.",
          ],
          [
            "نتیجه‌ای را که می‌خواهید بررسی شود و پرسش‌هایی را که به پاسخ نیاز دارند بنویسید. توضیح دهید آیا گفت‌وگوی داخلی، فرایند رسمی یا جلسه تخصصی از قبل تعیین شده است.",
            "فرض نکنید که ارسال درخواست یا رزرو مشاوره، مهلت را تغییر می‌دهد. هرجا زمان اهمیت دارد، سریعاً از متخصص دارای صلاحیت در امور کار کمک بگیرید.",
          ],
        ),
      },
    ],
  },
  {
    slug: "prepare-a-useful-business-brief",
    imageAlt: bi("The reflective glass facade of a London office building", "نمای شیشه‌ای و بازتابنده یک ساختمان اداری در لندن"),
    category: "business",
    image: "/src/assets/images/articles/business.webp",
    title: bi(
      "Turn a business question into a useful brief",
      "پرسش تجاری خود را به یک شرح مسئله کاربردی تبدیل کنید",
    ),
    excerpt: bi(
      "Define the decision, identify what is known and make room for the specialist input you need.",
      "تصمیم موردنظر را تعریف کنید، دانسته‌ها را مشخص سازید و نیاز به نظر متخصص را در نظر بگیرید.",
    ),
    date: "2026-11-17",
    updated: "2026-11-17",
    draft: true,
    sections: [
      {
        heading: bi("Name the decision", "تصمیم را مشخص کنید"),
        paragraphs: bi(
          [
            "Begin with one sentence describing what you are trying to decide. A focused question is easier to work with than a large bundle of background information without a clear purpose.",
            "Explain the practical context: what your business does, the stage of the project and who needs to make the decision. Keep confidential commercial detail to what is necessary.",
          ],
          [
            "با یک جمله شروع کنید که نشان دهد درباره چه چیزی می‌خواهید تصمیم بگیرید. کار روی یک پرسش مشخص آسان‌تر از بررسی انبوهی از اطلاعات زمینه‌ای بدون هدف روشن است.",
            "زمینه عملی را توضیح دهید: کسب‌وکار چه می‌کند، پروژه در چه مرحله‌ای است و چه کسی باید تصمیم بگیرد. اطلاعات محرمانه تجاری را به میزان ضروری محدود کنید.",
          ],
        ),
      },
      {
        heading: bi(
          "Separate facts from assumptions",
          "واقعیت‌ها را از فرض‌ها جدا کنید",
        ),
        paragraphs: bi(
          [
            "List the information you can support with records, then list what is still uncertain. This helps prevent an assumption from becoming the basis for an important decision without being checked.",
            "If figures or dates are estimates, label them that way. Identify who can confirm the missing information and what you need before progressing.",
          ],
          [
            "ابتدا اطلاعاتی را که با مدارک قابل پشتیبانی هستند و سپس موارد نامشخص را فهرست کنید. این کار کمک می‌کند فرض تأییدنشده، مبنای یک تصمیم مهم قرار نگیرد.",
            "اگر عدد یا تاریخی تخمینی است، آن را مشخص کنید. بنویسید چه کسی می‌تواند اطلاعات ناقص را تأیید کند و پیش از ادامه به چه چیزی نیاز دارید.",
          ],
        ),
      },
      {
        heading: bi(
          "Recognise where specialist advice belongs",
          "جایگاه مشاوره تخصصی را بشناسید",
        ),
        paragraphs: bi(
          [
            "Business consultancy can help structure priorities and practical processes. Legal, tax, accounting or regulated financial questions may require separate advice from appropriately qualified professionals.",
            "A useful brief ends with the questions for each adviser, the records you may need and any known timing constraints. It is a preparation tool, not approval of a transaction or agreement.",
          ],
          [
            "مشاوره کسب‌وکار می‌تواند به ساختار دادن به اولویت‌ها و فرایندهای عملی کمک کند. پرسش‌های حقوقی، مالیاتی، حسابداری یا مالی تحت نظارت ممکن است به مشاوره جداگانه از افراد دارای صلاحیت مربوط نیاز داشته باشند.",
            "یک شرح مسئله کاربردی با پرسش‌های مربوط به هر مشاور، مدارک احتمالی موردنیاز و محدودیت‌های زمانی شناخته‌شده تکمیل می‌شود. این متن ابزار آمادگی است و به معنای تأیید معامله یا قرارداد نیست.",
          ],
        ),
      },
    ],
  },
];

export const legal = [
  {
    id: "privacy",
    title: bi("Privacy policy", "سیاست حفظ حریم خصوصی"),
    updated: "2026-11-17",
    draft: true,
    sections: [
      {
        id: "status",
        heading: bi(
          "Draft status and business identity",
          "وضعیت پیش‌نویس و هویت کسب‌وکار",
        ),
        paragraphs: bi(
          [
            "This is a draft privacy notice awaiting approval. Parthian Peak Group Ltd, trading as Parthian Consulting, is the business identified in the project brief. Its registered address, company number, privacy contact and any applicable registration details must be confirmed before launch.",
            "The final notice must identify the responsible organisation and explain the actual personal-data processing carried out by the business.",
          ],
          [
            "این متن پیش‌نویس اطلاعیه حریم خصوصی است و به تأیید نیاز دارد. Parthian Peak Group Ltd با نام تجاری Parthian Consulting، کسب‌وکار معرفی‌شده در شرح پروژه است. نشانی ثبت‌شده، شماره شرکت، راه ارتباطی حریم خصوصی و اطلاعات ثبت مربوط، در صورت لزوم، باید پیش از انتشار تأیید شوند.",
            "نسخه نهایی باید سازمان مسئول را مشخص کند و نحوه واقعی پردازش داده‌های شخصی توسط کسب‌وکار را توضیح دهد.",
          ],
        ),
      },
      {
        id: "information",
        heading: bi(
          "Information and purposes to confirm",
          "اطلاعات و اهدافی که باید تأیید شوند",
        ),
        paragraphs: bi(
          [
            "The planned enquiry form asks for a name, email address, optional phone number, enquiry category and a short message. Booking, payment and document collection will be handled by separately configured providers. Do not include passports, sensitive case documents or unnecessary information about other people in an ordinary enquiry.",
            "Before activation, document the purpose and lawful basis for each processing activity, any conditions relevant to sensitive information, and whether information is necessary or optional. Do not use this draft as a substitute for that assessment.",
          ],
          [
            "فرم تماس پیش‌بینی‌شده شامل نام، نشانی ایمیل، شماره تلفن اختیاری، دسته‌بندی درخواست و پیام کوتاه است. رزرو، پرداخت و دریافت مدارک از طریق ارائه‌دهندگان جداگانه انجام خواهند شد. گذرنامه، مدارک حساس پرونده یا اطلاعات غیرضروری درباره دیگران را در درخواست عمومی وارد نکنید.",
            "پیش از فعال‌سازی، هدف و مبنای قانونی هر فعالیت پردازش، شرایط مرتبط با اطلاعات حساس و ضروری یا اختیاری بودن داده‌ها را مستند کنید. این پیش‌نویس جایگزین آن ارزیابی نیست.",
          ],
        ),
      },
      {
        id: "providers",
        heading: bi(
          "Providers, access and transfers",
          "ارائه‌دهندگان، دسترسی و انتقال داده",
        ),
        paragraphs: bi(
          [
            "The intended providers include Vercel for hosting, Cal.com for bookings, Stripe through Cal.com for payments, Microsoft Teams for video consultations, and Make.com with a secure file-request provider for document collection. The contact-form provider remains to be configured.",
            "The approved notice must describe the providers actually used, their roles, relevant international transfers, safeguards and who can access client information. External providers have their own notices, which must be reviewed alongside the business’s arrangements.",
          ],
          [
            "ارائه‌دهندگان در نظر گرفته‌شده عبارت‌اند از Vercel برای میزبانی، Cal.com برای رزرو، Stripe از طریق Cal.com برای پرداخت، مایکروسافت تیمز برای مشاوره تصویری و Make.com همراه با ارائه‌دهنده امن درخواست فایل برای دریافت مدارک. ارائه‌دهنده فرم تماس هنوز باید تنظیم شود.",
            "اطلاعیه تأییدشده باید ارائه‌دهندگان واقعاً مورد استفاده، نقش آن‌ها، انتقال‌های بین‌المللی مرتبط، تدابیر حفاظتی و افراد دارای دسترسی به اطلاعات مشتری را توضیح دهد. ارائه‌دهندگان خارجی اطلاعیه‌های خود را دارند که باید در کنار ترتیبات کسب‌وکار بررسی شوند.",
          ],
        ),
      },
      {
        id: "retention",
        heading: bi(
          "Retention and individual requests",
          "مدت نگهداری و درخواست‌های افراد",
        ),
        paragraphs: bi(
          [
            "Retention periods for enquiries, bookings, payment records, correspondence and documents are not yet approved. The business must set and document appropriate schedules, deletion arrangements and any justified exceptions before processing begins.",
            "The final notice must explain applicable rights, how to make a request, identity checks where needed and the route for raising a data-protection concern. Approved privacy contact: to be supplied.",
          ],
          [
            "مدت نگهداری درخواست‌ها، رزروها، سوابق پرداخت، مکاتبات و مدارک هنوز تأیید نشده است. کسب‌وکار باید پیش از شروع پردازش، برنامه مناسب نگهداری، روش حذف و استثناهای موجه را تعیین و مستند کند.",
            "نسخه نهایی باید حقوق قابل اعمال، روش ثبت درخواست، بررسی هویت در صورت نیاز و مسیر طرح نگرانی درباره حفاظت از داده را توضیح دهد. راه ارتباطی تأییدشده حریم خصوصی: در انتظار ارائه.",
          ],
        ),
      },
    ],
  },
  {
    id: "cookies",
    title: bi("Cookie policy", "سیاست کوکی‌ها"),
    updated: "2026-11-17",
    draft: true,
    sections: [
      {
        id: "status",
        heading: bi(
          "A draft based on the current website",
          "پیش‌نویس بر اساس نسخه فعلی وب‌سایت",
        ),
        paragraphs: bi(
          [
            "This draft must be checked against the deployed website and all enabled providers before publication. Cookies and similar browser storage can remember choices or support third-party features. The details depend on what is actually configured.",
            "No optional analytics or marketing service is intended to be active in the initial configuration. Enabling one requires a fresh review of the notice and consent behaviour.",
          ],
          [
            "این پیش‌نویس باید پیش از انتشار با نسخه مستقر وب‌سایت و همه ارائه‌دهندگان فعال تطبیق داده شود. کوکی‌ها و ابزارهای مشابه ذخیره‌سازی مرورگر می‌توانند انتخاب‌ها را به خاطر بسپارند یا امکانات شخص ثالث را پشتیبانی کنند. جزئیات به تنظیمات واقعی بستگی دارد.",
            "در تنظیمات اولیه قرار نیست سرویس اختیاری تحلیل بازدید یا بازاریابی فعال باشد. فعال کردن چنین سرویسی مستلزم بازبینی اطلاعیه و نحوه دریافت رضایت است.",
          ],
        ),
      },
      {
        id: "preferences",
        heading: bi(
          "Language and privacy preferences",
          "ترجیحات زبان و حریم خصوصی",
        ),
        paragraphs: bi(
          [
            "The website uses browser storage to remember your language preference and, where applicable, your cookie choices. A language explicitly selected in the URL takes precedence over a saved preference. Client documents, payment details and case information must not be kept in this storage.",
            "Browser settings can clear stored preferences. The final policy should list the exact storage names, purposes and retention behaviour used by the released version.",
          ],
          [
            "وب‌سایت برای به خاطر سپردن زبان ترجیحی و، در موارد مرتبط، انتخاب‌های مربوط به کوکی از فضای ذخیره‌سازی مرورگر استفاده می‌کند. زبان مشخص‌شده در نشانی صفحه بر ترجیح ذخیره‌شده اولویت دارد. مدارک مشتری، اطلاعات پرداخت و اطلاعات پرونده نباید در این فضا نگهداری شوند.",
            "از تنظیمات مرورگر می‌توان ترجیحات ذخیره‌شده را پاک کرد. سیاست نهایی باید نام دقیق موارد ذخیره‌شده، هدف و نحوه نگهداری آن‌ها را در نسخه منتشرشده فهرست کند.",
          ],
        ),
      },
      {
        id: "optional",
        heading: bi("Optional technologies", "فناوری‌های اختیاری"),
        paragraphs: bi(
          [
            "If consent-requiring analytics or marketing is introduced, it must remain inactive until the visitor gives the relevant consent. Acceptance and rejection must both be clear, and preferences must be changeable later.",
            "A preference choice must not be used to claim that a third-party service is compliant or to bypass a review of its actual behaviour.",
          ],
          [
            "اگر ابزار تحلیل بازدید یا بازاریابی نیازمند رضایت اضافه شود، باید تا دریافت رضایت مربوط از بازدیدکننده غیرفعال بماند. پذیرش و رد هر دو باید روشن باشند و امکان تغییر ترجیحات در آینده فراهم شود.",
            "ثبت انتخاب کاربر نباید مبنای ادعای انطباق یک سرویس شخص ثالث با مقررات یا جایگزین بررسی رفتار واقعی آن شود.",
          ],
        ),
      },
      {
        id: "external",
        heading: bi(
          "External booking and payment services",
          "خدمات خارجی رزرو و پرداخت",
        ),
        paragraphs: bi(
          [
            "Following a booking link or deliberately loading a third-party interface may involve that provider’s own browser technologies. Review the relevant provider notice before continuing.",
            "The business must review the configured booking and contact services and update this policy with the technologies actually used before enabling them.",
          ],
          [
            "باز کردن لینک رزرو یا بارگذاری آگاهانه یک رابط شخص ثالث ممکن است با فناوری‌های مرورگرِ همان ارائه‌دهنده همراه باشد. پیش از ادامه، اطلاعیه مربوط را بررسی کنید.",
            "کسب‌وکار باید خدمات رزرو و تماس تنظیم‌شده را بررسی و پیش از فعال‌سازی، این سیاست را بر اساس فناوری‌های واقعاً مورد استفاده به‌روز کند.",
          ],
        ),
      },
    ],
  },
  {
    id: "terms",
    title: bi("Terms & conditions", "شرایط و مقررات"),
    updated: "2026-11-17",
    draft: true,
    sections: [
      {
        id: "status",
        heading: bi("Terms awaiting approval", "شرایط در انتظار تأیید"),
        paragraphs: bi(
          [
            "These are draft terms, not a complete approved service agreement. The business and an appropriately qualified adviser must approve the final wording before paid services are offered. Registered company details and contact information must also be added.",
            "UKLawPersian is the educational brand. The commercial services described are intended to be offered by Parthian Peak Group Ltd, trading as Parthian Consulting.",
          ],
          [
            "این متن پیش‌نویس شرایط است و قرارداد کامل و تأییدشده ارائه خدمت محسوب نمی‌شود. کسب‌وکار و مشاور دارای صلاحیت مربوط باید پیش از ارائه خدمات با هزینه، متن نهایی را تأیید کنند. مشخصات ثبت شرکت و اطلاعات تماس نیز باید افزوده شوند.",
            "UKLawPersian نام تجاری آموزشی است. خدمات تجاری معرفی‌شده برای ارائه توسط Parthian Peak Group Ltd با نام تجاری Parthian Consulting در نظر گرفته شده‌اند.",
          ],
        ),
      },
      {
        id: "scope",
        heading: bi("Service scope", "محدوده خدمات"),
        paragraphs: bi(
          [
            "The website describes consultancy, legal education and permitted administrative assistance. It does not offer reserved legal activities or case-specific regulated immigration advice. No professional qualification or regulatory authorisation should be inferred from a service title or educational article.",
            "Each enquiry must be checked for suitability, and the work, deliverables and exclusions must be agreed before payment. Matters outside the permitted scope require an appropriately authorised or qualified professional.",
          ],
          [
            "این وب‌سایت مشاوره، آموزش حقوقی و کمک اداری مجاز را معرفی می‌کند. خدمات حقوقی اختصاصی نیازمند مجوز یا مشاوره مهاجرتی تحت نظارت درباره پرونده اشخاص ارائه نمی‌شود. از عنوان خدمت یا مقاله آموزشی نباید صلاحیت حرفه‌ای یا مجوز نظارتی استنباط شود.",
            "مناسب بودن هر درخواست باید بررسی شود و کار، خروجی و موارد خارج از محدوده، پیش از پرداخت توافق شوند. موضوعات خارج از محدوده مجاز به فرد دارای مجوز یا صلاحیت مربوط نیاز دارند.",
          ],
        ),
      },
      {
        id: "booking",
        heading: bi("Booking and fees", "رزرو و هزینه‌ها"),
        paragraphs: bi(
          [
            "The proposed options are a £100, 60-minute video consultation and a £50 written preliminary assessment. Tax treatment, any additional charges, the final scope and the written-response timeframe must be confirmed before booking is enabled.",
            "Bookings are intended to use Cal.com with Stripe payments. The business’s own approved terms and cancellation policy must be available and acknowledged; the platform’s terms do not replace them. The contract-formation process must be confirmed in the final wording.",
          ],
          [
            "گزینه‌های پیشنهادی شامل مشاوره تصویری ۶۰ دقیقه‌ای به مبلغ ۱۰۰ پوند و ارزیابی مقدماتی کتبی به مبلغ ۵۰ پوند است. وضعیت مالیات، هزینه‌های احتمالی دیگر، محدوده نهایی و زمان پاسخ کتبی باید پیش از فعال شدن رزرو تأیید شوند.",
            "رزرو برای انجام از طریق Cal.com و پرداخت از طریق Stripe در نظر گرفته شده است. شرایط تأییدشده کسب‌وکار و سیاست لغو رزرو باید در دسترس باشند و پذیرش آن‌ها ثبت شود؛ شرایط پلتفرم جایگزین آن‌ها نیست. فرایند انعقاد قرارداد باید در متن نهایی مشخص شود.",
          ],
        ),
      },
      {
        id: "responsibilities",
        heading: bi(
          "Information and practical limits",
          "اطلاعات و محدودیت‌های عملی",
        ),
        paragraphs: bi(
          [
            "Provide accurate information relevant to the agreed service and identify any known deadline promptly. Do not send confidential documents through ordinary enquiry forms. A booking or enquiry does not extend a legal deadline or guarantee an outcome.",
            "The final terms must address communication, confidentiality, intellectual property, liability, complaints and applicable law using wording suitable for the actual service and without excluding rights that cannot lawfully be excluded. These provisions remain to be professionally reviewed.",
          ],
          [
            "اطلاعات دقیق و مرتبط با خدمت توافق‌شده ارائه دهید و هر مهلت شناخته‌شده را سریعاً مطرح کنید. مدارک محرمانه را از طریق فرم‌های تماس عمومی نفرستید. رزرو یا ارسال درخواست، مهلت قانونی را تمدید نمی‌کند و نتیجه را تضمین نمی‌کند.",
            "شرایط نهایی باید ارتباطات، محرمانگی، مالکیت فکری، مسئولیت، شکایات و قانون قابل اعمال را با متنی متناسب با خدمت واقعی توضیح دهد و حقوقی را که قانوناً قابل سلب نیستند محدود نکند. این موارد همچنان به بررسی حرفه‌ای نیاز دارند.",
          ],
        ),
      },
    ],
  },
  {
    id: "refunds",
    title: bi("Cancellation & refund policy", "سیاست لغو رزرو و بازپرداخت"),
    updated: "2026-11-17",
    draft: true,
    sections: [
      {
        id: "status",
        heading: bi("Policy awaiting approval", "سیاست در انتظار تأیید"),
        paragraphs: bi(
          [
            "This draft does not set a cancellation period, refund entitlement, exemption or business promise. The final policy must be approved for the actual service and booking process before payments are accepted.",
            "The policy must clearly distinguish the video consultation from the written preliminary assessment and explain the effect of work starting on each service.",
          ],
          [
            "این پیش‌نویس مهلت لغو، حق بازپرداخت، استثنا یا تعهدی از سوی کسب‌وکار تعیین نمی‌کند. سیاست نهایی باید پیش از پذیرش پرداخت، متناسب با خدمت و فرایند واقعی رزرو تأیید شود.",
            "سیاست باید میان مشاوره تصویری و ارزیابی مقدماتی کتبی تفاوت روشنی قائل شود و اثر شروع کار در هر خدمت را توضیح دهد.",
          ],
        ),
      },
      {
        id: "changes",
        heading: bi("Cancellation and rescheduling", "لغو و تغییر زمان"),
        paragraphs: bi(
          [
            "Before launch, confirm how a client requests cancellation or a change of time, the contact route, any applicable notice requirements and how the business confirms the request.",
            "Any conditions for late changes, missed appointments or cancellation by the business must be stated transparently in the approved policy. No such conditions are established by this draft.",
          ],
          [
            "پیش از انتشار، روش درخواست لغو یا تغییر زمان، راه ارتباطی، الزامات احتمالی اطلاع‌رسانی و نحوه تأیید درخواست از سوی کسب‌وکار را مشخص کنید.",
            "هر شرط مربوط به تغییر دیرهنگام، عدم حضور یا لغو از سوی کسب‌وکار باید در سیاست تأییدشده شفاف بیان شود. این پیش‌نویس هیچ‌یک از این شروط را تعیین نمی‌کند.",
          ],
        ),
      },
      {
        id: "written",
        heading: bi(
          "Written work and early commencement",
          "کار کتبی و شروع پیش از موعد",
        ),
        paragraphs: bi(
          [
            "A written review slot reserves working time and does not require the client to attend a meeting. The response timeframe and the point at which work begins must be made clear before payment.",
            "If a client requests that work start during any applicable cancellation period, the business must obtain the legally appropriate request and acknowledgements after professional review. Do not assume a checkbox automatically removes cancellation rights.",
          ],
          [
            "بازه ارزیابی کتبی برای اختصاص زمان کار است و نیاز به حضور مشتری در جلسه ندارد. زمان پاسخ‌گویی و نقطه شروع کار باید پیش از پرداخت روشن شود.",
            "اگر مشتری بخواهد کار در دوره احتمالی حق لغو آغاز شود، کسب‌وکار باید پس از بررسی حرفه‌ای، درخواست و تأییدهای لازم از نظر قانونی را دریافت کند. نباید فرض کرد که یک تیک به‌تنهایی حقوق لغو را از بین می‌برد.",
          ],
        ),
      },
      {
        id: "refund-process",
        heading: bi(
          "Refund handling and contact",
          "رسیدگی به بازپرداخت و تماس",
        ),
        paragraphs: bi(
          [
            "The final policy must explain how refund decisions are communicated, the payment route used, any relevant processing expectations and how to raise a concern. Do not publish an unverified processing time or non-refundable fee.",
            "Approved cancellation and refund contact: to be supplied. This draft does not restrict any rights that apply to a client under the law.",
          ],
          [
            "سیاست نهایی باید نحوه اعلام تصمیم بازپرداخت، مسیر پرداخت، زمان‌بندی مرتبط و روش طرح نگرانی را توضیح دهد. زمان پردازش تأییدنشده یا هزینه غیرقابل بازپرداختِ تأییدنشده منتشر نکنید.",
            "راه ارتباطی تأییدشده برای لغو و بازپرداخت: در انتظار ارائه. این پیش‌نویس هیچ حق قانونی قابل اعمال به مشتری را محدود نمی‌کند.",
          ],
        ),
      },
    ],
  },
  {
    id: "complaints",
    title: bi("Complaints procedure", "روش رسیدگی به شکایات"),
    updated: "2026-11-17",
    draft: true,
    sections: [
      {
        id: "status",
        heading: bi(
          "Procedure awaiting approval",
          "روش رسیدگی در انتظار تأیید",
        ),
        paragraphs: bi(
          [
            "This is a draft procedure. The business must appoint a responsible contact, confirm a review process and approve realistic response times before launch. No response deadline or external dispute-resolution membership is claimed here.",
            "The final procedure should be available in English and Persian and should explain how clients can raise a concern about the service.",
          ],
          [
            "این متن پیش‌نویس روش رسیدگی است. کسب‌وکار باید پیش از انتشار، مسئول پاسخ‌گویی را تعیین کند، روند بررسی را مشخص سازد و زمان‌های واقع‌بینانه پاسخ را تأیید کند. در این متن هیچ مهلت پاسخ یا عضویت در مرجع خارجی حل اختلاف ادعا نمی‌شود.",
            "روش نهایی باید به فارسی و انگلیسی در دسترس باشد و توضیح دهد مشتری چگونه می‌تواند نگرانی خود درباره خدمت را مطرح کند.",
          ],
        ),
      },
      {
        id: "raising",
        heading: bi(
          "Information for a complaint",
          "اطلاعات لازم برای طرح شکایت",
        ),
        paragraphs: bi(
          [
            "A useful complaint describes the service concerned, what happened, relevant dates and the outcome being requested. A booking reference may help identify the matter; payment-card details are not needed.",
            "Do not send sensitive case material through a general enquiry form. An appropriate secure method should be arranged where supporting documents are necessary. Approved complaints contact: to be supplied.",
          ],
          [
            "شرح مناسب شکایت شامل خدمت موردنظر، اتفاق رخ‌داده، تاریخ‌های مرتبط و نتیجه درخواستی است. شماره مرجع رزرو ممکن است برای شناسایی موضوع کمک کند؛ اطلاعات کارت پرداخت لازم نیست.",
            "مدارک حساس پرونده را از طریق فرم تماس عمومی ارسال نکنید. اگر مدارک پشتیبان ضرورت داشته باشند، باید روش امن مناسبی هماهنگ شود. راه ارتباطی تأییدشده شکایات: در انتظار ارائه.",
          ],
        ),
      },
      {
        id: "review",
        heading: bi("Review and response", "بررسی و پاسخ"),
        paragraphs: bi(
          [
            "The approved process must set out acknowledgement, impartial review where practicable, requests for necessary information, and a clear written response. Any proposed remedy should be explained.",
            "The business must determine how complaints are recorded, who has access and how long records are retained. These arrangements must be consistent with the approved privacy notice.",
          ],
          [
            "روند تأییدشده باید دریافت شکایت، بررسی بی‌طرفانه تا حد امکان، درخواست اطلاعات ضروری و پاسخ روشن کتبی را مشخص کند. هر راه‌حل پیشنهادی باید توضیح داده شود.",
            "کسب‌وکار باید روش ثبت شکایات، افراد دارای دسترسی و مدت نگهداری سوابق را تعیین کند. این ترتیبات باید با اطلاعیه تأییدشده حریم خصوصی سازگار باشند.",
          ],
        ),
      },
      {
        id: "escalation",
        heading: bi("Further review", "بررسی بیشتر"),
        paragraphs: bi(
          [
            "Any internal escalation route and relevant external options must be verified before they are published. Do not infer access to a solicitor-specific ombudsman or regulator from the UKLawPersian name.",
            "The final procedure must preserve any applicable rights and clearly distinguish a service complaint from a separate data-protection concern.",
          ],
          [
            "هر مسیر داخلی پیگیری بیشتر و گزینه خارجی مرتبط باید پیش از انتشار تأیید شود. از نام UKLawPersian نباید دسترسی به نهاد رسیدگی یا ناظر ویژه وکلا استنباط شود.",
            "روش نهایی باید حقوق قابل اعمال را حفظ کند و میان شکایت درباره خدمت و نگرانی جداگانه درباره حفاظت از داده تفاوت روشنی قائل شود.",
          ],
        ),
      },
    ],
  },
];

export const pages = {
  home: {
    title: bi(
      "Clearer understanding. Confident next steps.",
      "درک روشن‌تر، گام بعدی آگاهانه‌تر.",
    ),
    description: bi(
      "Bilingual consultancy, legal education and practical support from UKLawPersian and Parthian Consulting.",
      "مشاوره دوزبانه، آموزش حقوقی و پشتیبانی عملی با UKLawPersian و پارتین کانسالتینگ.",
    ),
  },
  about: {
    title: bi(
      "Clarity begins with understanding.",
      "شفافیت از درک درست آغاز می‌شود.",
    ),
    description: bi(
      "Discover the relationship between UKLawPersian, Parthian Consulting and Parthian Peak Group Ltd, and our approach to clear, practical support.",
      "با ارتباط UKLawPersian، پارتین کانسالتینگ و Parthian Peak Group Ltd و رویکرد ما به پشتیبانی روشن و کاربردی آشنا شوید.",
    ),
  },
  services: {
    title: bi(
      "Support for the questions that matter.",
      "همراهی برای پرسش‌های مهم شما.",
    ),
    description: bi(
      "Explore seven areas of consultancy, legal education and permitted administrative support, with a clearly defined scope.",
      "هفت حوزه مشاوره، آموزش حقوقی و پشتیبانی اداری مجاز را با حدود مشخص بررسی کنید.",
    ),
  },
  insights: {
    title: bi("Knowledge for your next step.", "آگاهی برای گام بعدی شما."),
    description: bi(
      "Practical English and Persian reading on preparing for housing, workplace and business conversations. Draft articles awaiting review.",
      "مطالب کاربردی به فارسی و انگلیسی برای آمادگی گفت‌وگو درباره مسکن، محیط کار و کسب‌وکار. مقالات پیش‌نویس در انتظار بررسی.",
    ),
  },
  booking: {
    title: bi("Choose how we can help.", "شیوه دریافت همراهی را انتخاب کنید."),
    description: bi(
      "Compare a £100 video consultation and a £50 written preliminary assessment. Online booking awaits account configuration.",
      "مشاوره تصویری ۱۰۰ پوندی و ارزیابی مقدماتی کتبی ۵۰ پوندی را مقایسه کنید. رزرو آنلاین در انتظار تنظیم حساب‌ها است.",
    ),
  },
  contact: {
    title: bi("Start with a conversation.", "با یک گفت‌وگو شروع کنید."),
    description: bi(
      "Ask a general question about Parthian Consulting services. Keep confidential documents out of ordinary enquiries.",
      "پرسش عمومی خود درباره خدمات پارتین کانسالتینگ را مطرح کنید. مدارک محرمانه را در درخواست‌های عادی ارسال نکنید.",
    ),
  },
  "from-instagram": {
    title: bi(
      "From your feed to your next step.",
      "از آگاهی در اینستاگرام تا گام بعدی.",
    ),
    description: bi(
      "Find consultancy options, service information and useful guides from UKLawPersian and Parthian Consulting.",
      "گزینه‌های مشاوره، اطلاعات خدمات و راهنماهای کاربردی UKLawPersian و پارتین کانسالتینگ را پیدا کنید.",
    ),
  },
};
