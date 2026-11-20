/**
 * META IT SCHOOL — PREMIUM MODERN JAVASCRIPT ENGINE
 * Technologies: Pure Vanilla JavaScript (ES6+), Modular Architecture
 * Fully tested, zero external dependencies.
 */

'use strict';

/* ==========================================================================
   1. GLOBAL CONFIGURATION & PLACEHOLDERS
   (Tahrirlash va sozlash uchun qulay konfiguratsiya)
   ========================================================================== */
const CONFIG = {
  // Ijtimoiy tarmoqlar havolalari (Haqiqiy URL bilan almashtiring)
  TELEGRAM_URL: 'https://t.me/YOUR_TELEGRAM_CHANNEL',
  INSTAGRAM_URL: 'https://instagram.com/YOUR_INSTAGRAM_PROFILE',
  
  // Aloqa ma'lumotlari
  PHONE_NUMBER: '+998 (90) 123-45-67',
  PHONE_RAW: '+998901234567',
  EMAIL: 'info@metaitschool.uz',
  ADDRESS: 'Andijon shahri, Yangi bozor, Lenskiy ko‘chasi, O‘zbekiston.',
  
  // Telegram Bot API integratsiyasi (Ixtiyoriy: Telegram botga lidlarni yuborish)
  TELEGRAM_BOT: {
    ENABLED: false, // True ga o'zgartiring va token/chatId kiriting
    TOKEN: 'YOUR_TELEGRAM_BOT_TOKEN',
    CHAT_ID: 'YOUR_TELEGRAM_CHAT_ID'
  },

  // Statistik raqamlar (Oson tahrirlash uchun)
  STATS: {
    students: 1200,
    courses: 8,
    teachers: 15,
    competitions: 25
  }
};

/* ==========================================================================
   2. MULTILINGUAL TRANSLATION DICTIONARY (i18n)
   Tillar: O'zbek (Lotin), O'zbek (Kirill), English, Русский
   ========================================================================== */
const TRANSLATIONS = {
  uz: {
    // Announcement & Nav
    announcement_badge: "Yangi qabul",
    announcement_text: "Yangi guruhlarga qabul ochiq! Bepul sinov darsi va konsultatsiyaga yoziling.",
    announcement_cta: "Ro'yxatdan o'tish",
    nav_home: "Bosh sahifa",
    nav_about: "Biz haqimizda",
    nav_courses: "Kurslar",
    nav_teachers: "Ustozlar",
    nav_schedule: "Dars jadvali",
    nav_competitions: "Musobaqalar",
    nav_gallery: "Galereya",
    nav_contact: "Aloqa",
    nav_register_btn: "Ro'yxatdan o'tish",

    // Hero
    hero_badge: "⚡ Zamonaviy IT Ta'lim Markazi",
    hero_title_1: "Kelajagingni bugundan",
    hero_title_2: "META IT SCHOOL",
    hero_title_3: "bilan yarat!",
    hero_subtitle: "Zamonaviy texnologiyalarni o‘rganing, dasturlashni egallang va kelajak kasbingizni biz bilan yarating. Nazariya emas — 100% amaliyot, real loyihalar va professional mentorlar hamrohligida.",
    hero_btn_courses: "Kurslarni ko‘rish",
    hero_btn_consult: "Bepul konsultatsiya",
    hero_btn_register: "Ro‘yxatdan o‘tish",
    hero_perk_1_title: "Haftasiga 6 kun",
    hero_perk_1_sub: "3 kun asosiy + 3 kun amaliyot",
    hero_perk_2_title: "Rasmiy Sertifikat",
    hero_perk_2_sub: "Xalqaro standartdagi diplom",
    hero_perk_3_title: "Musobaqalar",
    hero_perk_3_sub: "Turnirlar va Hackathonlar",

    // Terminal
    term_connected: "META IT SCHOOL tizimi ishga tushdi...",
    term_loading: "Amaliy mashg'ulotlar faollashtirildi: 100%",

    // Stats
    stat_students: "O‘quvchilar soni",
    stat_students_desc: "Markazimizda muvaffaqiyatli ta'lim olganlar",
    stat_courses: "Kurslar soni",
    stat_courses_desc: "Zamonaviy talab yuqori bo'lgan yo'nalishlar",
    stat_teachers: "Ustozlar soni",
    stat_teachers_desc: "Amaliyotchi professional mentorlar",
    stat_competitions: "O‘tkazilgan musobaqalar",
    stat_competitions_desc: "Turnirlar, hackathonlar va sovrinlar",

    // About
    about_tag: "Bizning missiyamiz",
    about_title_1: "META IT SCHOOL",
    about_title_2: "haqida to‘liq ma'lumot",
    about_intro: "META IT SCHOOL — zamonaviy IT ta'lim markazi bo‘lib, kelajak kasblarini eng ilg‘or metodika va xalqaro tajriba asosida o‘rgatadi.",
    mission_title: "Asosiy maqsadimiz",
    mission_desc: "Yoshlarni zamonaviy axborot texnologiyalari, dasturlash, xorijiy tillar va raqamli savodxonlikka o‘rgatish orqali ularni xalqaro mehnat bozorida raqobatbardosh, yuqori daromadli mutaxassis qilib tayyorlash.",
    adv_title: "Nima uchun aynan META IT SCHOOL?",
    adv_subtitle: "Markazimizda talabalarga yaratilgan 9 ta asosiy ustunlik:",
    adv_1_title: "Tajribali ustozlar",
    adv_1_desc: "Sohasida ko'p yillik amaliy tajribaga ega bo'lgan kuchli dasturchi va mutaxassislar dars beradi.",
    adv_2_title: "Zamonaviy kompyuterlar",
    adv_2_desc: "Barcha xonalar so'nggi rusumdagi tezkor va kuchli kompyuter texnikalari bilan jihozlangan.",
    adv_3_title: "Amaliy mashg‘ulotlar",
    adv_3_desc: "Quruq nazariyadan holi darslar. Har bir dars darhol amaliy mashqlar va kod yozish bilan mustahkamlanadi.",
    adv_4_title: "Individual yondashuv",
    adv_4_desc: "Har bir o'quvchining o'zlashtirish tezligi inobatga olinib, ustozlar tomonidan alohida yordam ko'rsatiladi.",
    adv_5_title: "Real loyihalar",
    adv_5_desc: "O'qish davomida portfoliosi uchun haqiqiy buyurtmalar va ishlab chiqarishdagi loyihalar ustida ishlanadi.",
    adv_6_title: "Haftalik takrorlash darslari",
    adv_6_desc: "Haftasiga 3 kun asosiy darsdan tashqari yana 3 kun amaliyot va mustahkamlash darslari tashkil etiladi.",
    adv_7_title: "Musobaqa va turnirlar",
    adv_7_desc: "Har oy bilimlar bellashuvi, hackathonlar va qimmatbaho sovg'ali turnirlar muntazam o'tkaziladi.",
    adv_8_title: "Sertifikatlar",
    adv_8_desc: "Kursni muvaffaqiyatli yakunlagan bitiruvchilarga xalqaro standartlarga mos rasmiy sertifikat topshiriladi.",
    adv_9_title: "Do‘stona muhit",
    adv_9_desc: "Hamfikrlar, kuchli IT jamoasi, qulay kofebrek hududi va samimiy o'quv atmosferasi sizni kutmoqda.",

    // Courses
    courses_tag: "Bizning yo'nalishlar",
    courses_title_1: "Barcha",
    courses_title_2: "IT Kurslarimiz",
    courses_subtitle: "O'zingizga mos yo'nalishni tanlang, noldan professional darajagacha o'rganing va talabgir mutaxassisga aylaning.",
    filter_all: "Barcha kurslar (8)",
    filter_prog: "Dasturlash",
    filter_lang: "Tillar",
    filter_hard: "Robototexnika & Xavfsizlik",
    filter_office: "Ofis va Informatika",
    search_course_ph: "Kurs nomini qidiring...",
    price_month: "so‘m / oy",
    btn_details: "Batafsil",
    btn_enroll: "Yozilish",
    schedule_badge: "Haftada 6 kun",
    cert_badge: "Sertifikat",

    // Pricing
    pricing_tag: "Shaffof va hamyonbop",
    pricing_title_1: "Kurslar",
    pricing_title_2: "Narxlari",
    pricing_subtitle: "Hech qanday yashirin to‘lovlarsiz: haftada 6 kunlik to‘liq o‘quv tizimi va amaliyot bitta oylik to‘lov ichida!",
    price_lang_badge: "Maxsus narx",
    price_lang_title: "Ingliz tili kursi",
    price_lang_sub: "Grammar, Speaking, Listening va IT English",
    price_all_badge: "Barcha IT Kurslar",
    price_all_title: "Qolgan barcha kurslar",
    price_all_sub: "Frontend, Backend, Robototexnika, Kiberxavfsizlik, Informatika, Word, Excel",
    price_per_month: "/ oyiga",
    price_btn_enroll: "Ro‘yxatdan o‘tish",

    // Schedule
    schedule_tag: "O‘quv tizimi",
    sched_title_1: "Haftalik",
    sched_title_2: "Dars Jadvali",
    sched_subtitle: "META IT SCHOOL haftasiga 6 kun faoliyat yuritadi: 3 kun asosiy yangi dars, 3 kun mustahkamlash va amaliyot. Yakshanba — dam olish kuni.",
    day_mon: "Dushanba",
    day_tue: "Seshanba",
    day_wed: "Chorshanba",
    day_thu: "Payshanba",
    day_fri: "Juma",
    day_sat: "Shanba",
    day_sun: "Yakshanba",
    type_main: "Asosiy dars",
    type_practice: "Takrorlash va amaliyot",
    type_project: "Loyiha & Mustahkamlash",
    type_off: "Dam olish kuni",

    // Teachers
    teachers_tag: "Bizning jamoa",
    teachers_title_1: "Malakali va Tajribali",
    teachers_title_2: "Ustozlarimiz",
    teachers_subtitle: "Har bir sohada chuqur bilim va amaliy tajribaga ega ustozlar o'quvchilarga yo'l ko'rsatadi.",
    teachers_note: "Eslatma: Ustozlar tarkibi va ularning to'liq ma'lumotlari markaz ma'muriyati tomonidan yangilab boriladi.",

    // Competitions
    comp_tag: "Bellashuv va Sovrinlar",
    comp_title_1: "Musobaqalar va",
    comp_title_2: "Turnirlar",
    comp_subtitle: "O'z bilim va salohiyatingizni sinovdan o'tkazing, sovrinli o'rinlarni egallang va nufuzli diplomlarga ega bo'ling.",
    status_active: "Tez kunda",
    status_flagship: "Eng nufuzli",
    rules_title: "Ishtirok shartlari:",
    comp_date_placeholder: "[Sana belgilanmagan / Tez kunda]",
    comp_btn_reg: "Musobaqaga yozilish",
    winners_badge: "G'oliblar shon-sharafi",
    winners_title: "Natijalar va G‘oliblar",
    winners_subtitle: "O‘tgan turnirlarda yuqori natijalarni qayd etgan iqtidorli o‘quvchilarimiz",

    // Gallery
    gallery_tag: "Foto-hisobot",
    gallery_title_1: "Markaz Hayotidan",
    gallery_title_2: "Galereya",
    gallery_subtitle: "O‘quvchilarimizning dars jarayonlari, laboratoriya amaliyotlari, musobaqalar va yutuqlari aks etgan lahzalar.",
    gal_all: "Barchasi",
    gal_classes: "Dars jarayonlari",
    gal_computers: "Kompyuterda ishlash",
    gal_robotics: "Robototexnika",
    gal_events: "Musobaqalar & Hackathon",
    gal_certs: "Sertifikat topshirish",

    // FAQ
    faq_tag: "Savol-javoblar",
    faq_title_1: "Ko‘p So‘raladigan",
    faq_title_2: "Savollar",
    faq_subtitle: "O'quv jarayoni va qabul bo'yicha eng muhim savollarga aniq javoblar.",

    // Registration Form
    reg_badge: "Karyerangni boshla",
    reg_title: "Kelajak kasbingiz tomon ilk qadamni tashlang!",
    reg_subtitle: "Formani to‘ldiring va biz sizga bepul birinchi sinov darsi va mutaxassis konsultatsiyasini taqdim etamiz.",
    form_heading: "Ro‘yxatdan o‘tish",
    form_desc: "Ma'lumotlaringizni to'ldiring:",
    lbl_name: "Ism",
    lbl_surname: "Familiya",
    lbl_phone: "Telefon raqam",
    lbl_age: "Yoshingiz",
    lbl_course: "Kursni tanlang",
    lbl_format: "Ta'lim shakli",
    lbl_time: "Qulay aloqa vaqti",
    lbl_notes: "Qo‘shimcha izoh yoki savollaringiz",
    opt_choose_course: "-- Kursni tanlang --",
    opt_offline: "Oflayn (O'quv markazida)",
    opt_online: "Onlayn (Masofaviy)",
    opt_morning: "Ertalab (09:00 - 12:00)",
    opt_afternoon: "Tushdan keyin (13:00 - 18:00)",
    opt_evening: "Kechki payt (18:00 - 20:00)",
    btn_submit_reg: "Ro‘yxatdan o‘tish",
    form_privacy: "Ma'lumotlaringiz maxfiy saqlanadi va uchinchi shaxslarga berilmaydi.",

    // Contact
    contact_tag: "Biz bilan bog'lanish",
    contact_title_1: "Manzil va",
    contact_title_2: "Aloqa",
    contact_subtitle: "Savollaringiz bormi? Bizga qo'ng'iroq qiling, telegramda yozing yoki markazimizga tashrif buyuring.",
    addr_title: "Bizning manzil:",
    addr_tip: "Mo'ljal: Yangi bozor yaqinida",
    phone_title: "Telefon raqamimiz:",
    phone_tip: "[Aloqa uchun rasmiy raqam]",
    hours_title: "Ish vaqti:",
    sunday_off: "Yakshanba: Dam olish kuni",
    social_channels_title: "Ijtimoiy tarmoqlarimiz:",
    tg_sub: "Telegram kanal",
    ig_sub: "Instagram sahifa",
    btn_open_gmaps: "Google Maps",

    // Footer
    footer_about: "META IT SCHOOL — zamonaviy IT ta'lim markazi. Yoshlarni axborot texnologiyalari, xalqaro dasturlash ko‘nikmalari va raqamli kasblarga noldan professional darajagacha o‘rgatamiz.",
    footer_links_title: "Sahifalar",
    footer_courses_title: "Bizning Kurslar",
    footer_contact_title: "Bog‘lanish",
    all_rights_reserved: "Barcha huquqlar himoyalangan.",
    privacy_policy: "Maxfiylik siyosati",
    terms_service: "Foydalanish shartlari"
  },

  uz_cyrl: {
    announcement_badge: "Янги қабул",
    announcement_text: "Янги гуруҳларга қабул очиқ! Бепул синов дарси ва консультацияга ёзилинг.",
    announcement_cta: "Рўйхатдан ўтиш",
    nav_home: "Бош саҳифа",
    nav_about: "Биз ҳақимизда",
    nav_courses: "Курслар",
    nav_teachers: "Устозлар",
    nav_schedule: "Дарс жадвали",
    nav_competitions: "Мусобақалар",
    nav_gallery: "Галерея",
    nav_contact: "Алоқа",
    nav_register_btn: "Рўйхатдан ўтиш",

    hero_badge: "⚡ Замонавий IT Таълим Маркази",
    hero_title_1: "Келажагингни бугундан",
    hero_title_2: "META IT SCHOOL",
    hero_title_3: "билан ярат!",
    hero_subtitle: "Замонавий технологияларни ўрганинг, дастурлашни эгалланг ва келажак касбингизни биз билан яратинг. Назария эмас — 100% амалиёт, реал лойиҳалар ва профессионал менторлар ҳамроҳлигида.",
    hero_btn_courses: "Курсларни кўриш",
    hero_btn_consult: "Бепул консультация",
    hero_btn_register: "Рўйхатдан ўтиш",
    hero_perk_1_title: "Ҳафтасига 6 кун",
    hero_perk_1_sub: "3 кун асосий + 3 кун амалиёт",
    hero_perk_2_title: "Расмий Сертификат",
    hero_perk_2_sub: "Халқаро стандартдаги диплом",
    hero_perk_3_title: "Мусобақалар",
    hero_perk_3_sub: "Турнирлар ва Ҳакатонлар",

    term_connected: "META IT SCHOOL тизими ишга тушди...",
    term_loading: "Амалий машғулотлар фаоллаштирилди: 100%",

    stat_students: "Ўқувчилар сони",
    stat_students_desc: "Марказимизда муваффақиятли таълим олганлар",
    stat_courses: "Курслар сони",
    stat_courses_desc: "Замонавий талаб юқори бўлган йўналишлар",
    stat_teachers: "Устозлар сони",
    stat_teachers_desc: "Амалиётчи профессионал менторлар",
    stat_competitions: "Ўтказилган мусобақалар",
    stat_competitions_desc: "Турнирлар, ҳакатонлар ва совринлар",

    about_tag: "Бизнинг миссия Scool",
    about_title_1: "META IT SCHOOL",
    about_title_2: "ҳақида тўлиқ маълумот",
    about_intro: "META IT SCHOOL — замонавий IT таълим маркази бўлиб, келажак касбларини энг илғор методика ва халқаро тажриба асосида ўргатади.",
    mission_title: "Асосий мақсадимиз",
    mission_desc: "Ёшларни замонавий ахборот технологиялари, дастурлаш, хорижий тиллар ва рақамли саводхонликка ўргатиш орқали уларни халқаро меҳнат бозорида рақобатбардош мутахассис қилиб тайёрлаш.",
    adv_title: "Нима учун айнан META IT SCHOOL?",
    adv_subtitle: "Марказимизда талабаларга яратилган 9 та асосий устунлик:",
    adv_1_title: "Тажрибали устозлар",
    adv_1_desc: "Соҳасида кўп йиллик амалий тажрибага эга бўлган кучли дастурчи ва мутахассислар дарс беради.",
    adv_2_title: "Замонавий компьютерлар",
    adv_2_desc: "Барча хоналар сўнгги русумдаги тезкор ва кучли компьютер техникалари билан жиҳозланган.",
    adv_3_title: "Амалий машғулотлар",
    adv_3_desc: "Қуруқ назариядан ҳоли дарслар. Ҳар бир дарс дарҳол амалий машқлар ва код ёзиш билан мустаҳкамланади.",
    adv_4_title: "Индивидуал ёндашув",
    adv_4_desc: "Ҳар бир ўқувчининг ўзлаштириш тезлиги инобатга олиниб, устозлар томонидан алоҳида ёрдам кўрсатилади.",
    adv_5_title: "Реал лойиҳалар",
    adv_5_desc: "Ўқиш давомида портфолиоси учун ҳақиқий буюртмалар ва лойиҳалар устида ишланади.",
    adv_6_title: "Ҳафталик такрорлаш дарслари",
    adv_6_desc: "Ҳафтасига 3 кун асосий дарсдан ташқари яна 3 кун амалиёт ва мустаҳкамлаш дарслари ташкил этилади.",
    adv_7_title: "Мусобақа ва турнирлар",
    adv_7_desc: "Ҳар ой билимлар беллашуви, ҳакатонлар ва қимматбаҳо совғали турнирлар мунтазам ўтказилади.",
    adv_8_title: "Сертификатлар",
    adv_8_desc: "Курсни муваффақиятли якунлаган битирувчиларга халқаро стандартларга мос расмий сертификат топширилади.",
    adv_9_title: "Дўстона муҳит",
    adv_9_desc: "Ҳамфикрлар, кучли IT жамоаси, қулай кофебрек ҳудуди ва самимий ўқув атмосфераси сизни кутмоқда.",

    courses_tag: "Бизнинг йўналишлар",
    courses_title_1: "Барча",
    courses_title_2: "IT Курсларимиз",
    courses_subtitle: "Ўзингизга мос йўналишни танланг, нолдан профессионал даражагача ўрганинг.",
    filter_all: "Барча курслар (8)",
    filter_prog: "Дастурлаш",
    filter_lang: "Тиллар",
    filter_hard: "Робототехника & Хавфсизлик",
    filter_office: "Офис ва Информатика",
    search_course_ph: "Курс номини қидиринг...",
    price_month: "сўм / ой",
    btn_details: "Батафсил",
    btn_enroll: "Ёзилиш",
    schedule_badge: "Ҳафтада 6 кун",
    cert_badge: "Сертификат",

    pricing_tag: "Шаффоф ва ҳамёнбоп",
    pricing_title_1: "Курслар",
    pricing_title_2: "Нархлари",
    pricing_subtitle: "Ҳеч қандай яширин тўловларсиз: ҳафтада 6 кунлик тўлиқ ўқув тизими!",
    price_lang_badge: "Махсус нарх",
    price_lang_title: "Инглиз тили курси",
    price_lang_sub: "Grammar, Speaking, Listening ва IT English",
    price_all_badge: "Барча IT Курслар",
    price_all_title: "Қолган барча курслар",
    price_all_sub: "Frontend, Backend, Робототехника, Киберхавфсизлик, Информатика, Word, Excel",
    price_per_month: "/ ойига",
    price_btn_enroll: "Рўйхатдан ўтиш",

    schedule_tag: "Ўқув тизими",
    sched_title_1: "Ҳафталик",
    sched_title_2: "Дарс Жадвали",
    sched_subtitle: "META IT SCHOOL ҳафтасига 6 кун фаолият юритади: 3 кун асосий янги дарс, 3 кун амалиёт. Якшанба — дам олиш куни.",
    day_mon: "Душанба",
    day_tue: "Сешанба",
    day_wed: "Чоршанба",
    day_thu: "Пайшанба",
    day_fri: "Жума",
    day_sat: "Шанба",
    day_sun: "Якшанба",
    type_main: "Асосий дарс",
    type_practice: "Такрорлаш ва амалиёт",
    type_project: "Лойиҳа & Мустаҳкамлаш",
    type_off: "Дам олиш куни",

    teachers_tag: "Бизнинг жамоа",
    teachers_title_1: "Малакали ва Тажрибали",
    teachers_title_2: "Устозларимиз",
    teachers_subtitle: "Ҳар бир соҳада чуқур билим ва амалий тажрибага эга устозлар.",
    teachers_note: "Эслатма: Устозлар таркиби марказ маъмурияти томонидан янгилаб борилади.",

    comp_tag: "Беллашув ва Совринлар",
    comp_title_1: "Мусобақалар ва",
    comp_title_2: "Турнирлар",
    comp_subtitle: "Ўз билим ва салоҳиятингизни синовдан ўтказинг, совринли ўринларни эгалланг.",
    status_active: "Тез кунда",
    status_flagship: "Энг нуфузли",
    rules_title: "Иштирок шартлари:",
    comp_date_placeholder: "[Сана белгиланмаган / Тез кунда]",
    comp_btn_reg: "Мусобақага ёзилиш",
    winners_badge: "Ғолиблар шон-шарафи",
    winners_title: "Натижалар ва Ғолиблар",
    winners_subtitle: "Ўтган турнирларда юқори натижаларни қайд этган ўқувчиларимиз",

    gallery_tag: "Фото-ҳисобот",
    gallery_title_1: "Марказ Ҳаётидан",
    gallery_title_2: "Галерея",
    gallery_subtitle: "Ўқувчиларимизнинг дарс жараёнлари, мусобақалар ва ютуқлари.",
    gal_all: "Барчаси",
    gal_classes: "Дарс жараёнлари",
    gal_computers: "Компьютерда ишлаш",
    gal_robotics: "Робототехника",
    gal_events: "Мусобақалар & Ҳакатон",
    gal_certs: "Сертификат топшириш",

    faq_tag: "Савол-жавоблар",
    faq_title_1: "Кўп Сўраладиган",
    faq_title_2: "Саволлар",
    faq_subtitle: "Ўқув жараёни ва қабул бўйича энг муҳим саволларга аниқ жавоблар.",

    reg_badge: "Карьерангни бошла",
    reg_title: "Келажак касбингиз томон илк қадамни ташланг!",
    reg_subtitle: "Формани тўлдиринг ва биз сизга бепул биринчи синов дарсини тақдим этамиз.",
    form_heading: "Рўйхатдан ўтиш",
    form_desc: "Маълумотларингизни тўлдиринг:",
    lbl_name: "Исм",
    lbl_surname: "Фамилия",
    lbl_phone: "Телефон рақам",
    lbl_age: "Ёшингиз",
    lbl_course: "Курсни танланг",
    lbl_format: "Таълим шакли",
    lbl_time: "Қулай алоқа вақти",
    lbl_notes: "Қўшимча изоҳ ёки саволларингиз",
    opt_choose_course: "-- Курсни танланг --",
    opt_offline: "Офлайн (Ўқув марказида)",
    opt_online: "Онлайн (Масофавий)",
    opt_morning: "Эрталаб (09:00 - 12:00)",
    opt_afternoon: "Тушдан кейин (13:00 - 18:00)",
    opt_evening: "Кечки пайт (18:00 - 20:00)",
    btn_submit_reg: "Рўйхатдан ўтиш",
    form_privacy: "Маълумотларингиз махфий сақланади ва учинчи шахсларга берилмайди.",

    contact_tag: "Биз билан боғланиш",
    contact_title_1: "Манзил ва",
    contact_title_2: "Алоқа",
    contact_subtitle: "Саволларингиз борми? Бизга қўнғироқ қилинг ёки телеграмда ёзинг.",
    addr_title: "Бизнинг манзил:",
    addr_tip: "Мўлжал: Янги бозор яқинида",
    phone_title: "Телефон рақамимиз:",
    phone_tip: "[Алоқа учун расмий рақам]",
    hours_title: "Иш вақти:",
    sunday_off: "Якшанба: Дам олиш куни",
    social_channels_title: "Ижтимоий тармоқларимиз:",
    tg_sub: "Телеграм канал",
    ig_sub: "Инстаграм саҳифа",
    btn_open_gmaps: "Google Maps",

    footer_about: "META IT SCHOOL — замонавий IT таълим маркази. Ёшларни ахборот технологиялари ва дастурлаш касбларига ўргатамиз.",
    footer_links_title: "Саҳифалар",
    footer_courses_title: "Бизнинг Курслар",
    footer_contact_title: "Боғланиш",
    all_rights_reserved: "Барча ҳуқуқлар ҳимояланган.",
    privacy_policy: "Махфийлик сиёсати",
    terms_service: "Фойдаланиш шартлари"
  },

  en: {
    announcement_badge: "New Admission",
    announcement_text: "Admissions open for new groups! Register for a free trial lesson and consultation.",
    announcement_cta: "Register Now",
    nav_home: "Home",
    nav_about: "About Us",
    nav_courses: "Courses",
    nav_teachers: "Teachers",
    nav_schedule: "Schedule",
    nav_competitions: "Competitions",
    nav_gallery: "Gallery",
    nav_contact: "Contact",
    nav_register_btn: "Register Now",

    hero_badge: "⚡ Modern IT Education Center",
    hero_title_1: "Build your future today with",
    hero_title_2: "META IT SCHOOL",
    hero_title_3: "!",
    hero_subtitle: "Learn modern technologies, master programming, and create your future career with us. Not just theory — 100% practice, real projects, and guidance from professional mentors.",
    hero_btn_courses: "View Courses",
    hero_btn_consult: "Free Consultation",
    hero_btn_register: "Register Now",
    hero_perk_1_title: "6 Days a Week",
    hero_perk_1_sub: "3 main lessons + 3 practice sessions",
    hero_perk_2_title: "Official Certificate",
    hero_perk_2_sub: "International standard diploma",
    hero_perk_3_title: "Competitions",
    hero_perk_3_sub: "Tournaments and Hackathons",

    term_connected: "META IT SCHOOL engine initialized...",
    term_loading: "Practical sessions activated: 100%",

    stat_students: "Total Students",
    stat_students_desc: "Students who successfully studied at our center",
    stat_courses: "Total Courses",
    stat_courses_desc: "High-demand modern career paths",
    stat_teachers: "Expert Mentors",
    stat_teachers_desc: "Practicing professional instructors",
    stat_competitions: "Competitions Held",
    stat_competitions_desc: "Tournaments, hackathons, and awards",

    about_tag: "Our Mission",
    about_title_1: "About",
    about_title_2: "META IT SCHOOL",
    about_intro: "META IT SCHOOL is a modern IT training academy dedicated to teaching future tech careers based on cutting-edge methodologies and global standards.",
    mission_title: "Our Main Goal",
    mission_desc: "Empowering youth with cutting-edge IT skills, programming, foreign languages, and digital literacy to make them highly paid, competitive specialists in the global market.",
    adv_title: "Why Choose META IT SCHOOL?",
    adv_subtitle: "9 core advantages created for our students:",
    adv_1_title: "Experienced Mentors",
    adv_1_desc: "Taught by practicing senior developers and field experts with extensive industry experience.",
    adv_2_title: "Modern Workstations",
    adv_2_desc: "All classrooms are equipped with modern high-speed computers and specialized gear.",
    adv_3_title: "Hands-on Practice",
    adv_3_desc: "No dry theory. Every single lesson is instantly reinforced with practical coding exercises.",
    adv_4_title: "Personalized Approach",
    adv_4_desc: "Individual pace and attention is given to ensure every student succeeds.",
    adv_5_title: "Real-world Projects",
    adv_5_desc: "Students build real production-grade applications for their portfolios.",
    adv_6_title: "Weekly Review Sessions",
    adv_6_desc: "3 main lectures plus 3 dedicated lab and reinforcement days every week.",
    adv_7_title: "Competitions & Contests",
    adv_7_desc: "Regular monthly hackathons, challenges, and prize competitions.",
    adv_8_title: "Official Certification",
    adv_8_desc: "Accredited certificate upon successful course graduation.",
    adv_9_title: "Inspiring Community",
    adv_9_desc: "Like-minded peers, vibrant tech community, coworking zone, and friendly atmosphere.",

    courses_tag: "Our Programs",
    courses_title_1: "All",
    courses_title_2: "IT Courses",
    courses_subtitle: "Choose your path, learn from zero to professional level, and become a sought-after specialist.",
    filter_all: "All Courses (8)",
    filter_prog: "Programming",
    filter_lang: "Languages",
    filter_hard: "Robotics & Security",
    filter_office: "Office & Informatics",
    search_course_ph: "Search course name...",
    price_month: "UZS / month",
    btn_details: "Details",
    btn_enroll: "Enroll",
    schedule_badge: "6 Days / Week",
    cert_badge: "Certificate",

    pricing_tag: "Transparent & Affordable",
    pricing_title_1: "Course",
    pricing_title_2: "Pricing",
    pricing_subtitle: "No hidden fees: 6 days a week intensive learning and practice included in one flat monthly tuition!",
    price_lang_badge: "Special Price",
    price_lang_title: "English Language Course",
    price_lang_sub: "Grammar, Speaking, Listening, and Technical IT English",
    price_all_badge: "All IT Courses",
    price_all_title: "All Other Courses",
    price_all_sub: "Frontend, Backend, Robotics, Cyber Security, Informatics, Word, Excel",
    price_per_month: "/ month",
    price_btn_enroll: "Register Now",

    schedule_tag: "Learning System",
    sched_title_1: "Weekly",
    sched_title_2: "Schedule",
    sched_subtitle: "META IT SCHOOL operates 6 days a week: 3 days of new lessons + 3 days of practice. Sunday is a day off.",
    day_mon: "Monday",
    day_tue: "Tuesday",
    day_wed: "Wednesday",
    day_thu: "Thursday",
    day_fri: "Friday",
    day_sat: "Saturday",
    day_sun: "Sunday",
    type_main: "Main Lesson",
    type_practice: "Review & Practice",
    type_project: "Project & Reinforce",
    type_off: "Day Off",

    teachers_tag: "Our Team",
    teachers_title_1: "Qualified & Experienced",
    teachers_title_2: "Instructors",
    teachers_subtitle: "Mentors with deep knowledge and hands-on industry experience guiding students.",
    teachers_note: "Note: Faculty roster and credentials are maintained by the school administration.",

    comp_tag: "Challenges & Prizes",
    comp_title_1: "Competitions &",
    comp_title_2: "Tournaments",
    comp_subtitle: "Test your skills, win valuable prizes, and earn prestigious diplomas.",
    status_active: "Coming Soon",
    status_flagship: "Flagship Event",
    rules_title: "Participation Rules:",
    comp_date_placeholder: "[Date TBD / Coming Soon]",
    comp_btn_reg: "Join Competition",
    winners_badge: "Hall of Fame",
    winners_title: "Results & Winners",
    winners_subtitle: "Our top talented students who excelled in recent tournaments",

    gallery_tag: "Photo Showcase",
    gallery_title_1: "Moments from",
    gallery_title_2: "Our Academy",
    gallery_subtitle: "Classroom activities, coding labs, robotics projects, and student celebrations.",
    gal_all: "All",
    gal_classes: "Classrooms",
    gal_computers: "Computer Labs",
    gal_robotics: "Robotics",
    gal_events: "Contests & Hackathons",
    gal_certs: "Certificates",

    faq_tag: "Q & A",
    faq_title_1: "Frequently Asked",
    faq_title_2: "Questions",
    faq_subtitle: "Clear answers to essential questions regarding our curriculum and admission.",

    reg_badge: "Launch Your Career",
    reg_title: "Take your first step into tech today!",
    reg_subtitle: "Fill out the application to claim your free trial lesson and personalized career consultation.",
    form_heading: "Student Registration",
    form_desc: "Please fill in your details:",
    lbl_name: "First Name",
    lbl_surname: "Last Name",
    lbl_phone: "Phone Number",
    lbl_age: "Age",
    lbl_course: "Select Course",
    lbl_format: "Study Format",
    lbl_time: "Preferred Contact Time",
    lbl_notes: "Additional notes or questions",
    opt_choose_course: "-- Select a Course --",
    opt_offline: "Offline (At Center)",
    opt_online: "Online (Remote)",
    opt_morning: "Morning (09:00 - 12:00)",
    opt_afternoon: "Afternoon (13:00 - 18:00)",
    opt_evening: "Evening (18:00 - 20:00)",
    btn_submit_reg: "Submit Registration",
    form_privacy: "Your information is securely encrypted and never shared with third parties.",

    contact_tag: "Get in Touch",
    contact_title_1: "Location &",
    contact_title_2: "Contact",
    contact_subtitle: "Have questions? Call us, text on Telegram, or visit our campus in person.",
    addr_title: "Our Address:",
    addr_tip: "Landmark: Near Yangi Bozor",
    phone_title: "Phone Number:",
    phone_tip: "[Official School Line]",
    hours_title: "Working Hours:",
    sunday_off: "Sunday: Closed",
    social_channels_title: "Official Social Channels:",
    tg_sub: "Telegram Channel",
    ig_sub: "Instagram Page",
    btn_open_gmaps: "Google Maps",

    footer_about: "META IT SCHOOL — A modern academy for future-proof tech education. Equipping students with high-level software engineering skills.",
    footer_links_title: "Quick Links",
    footer_courses_title: "Our Courses",
    footer_contact_title: "Contact Info",
    all_rights_reserved: "All rights reserved.",
    privacy_policy: "Privacy Policy",
    terms_service: "Terms of Service"
  },

  ru: {
    announcement_badge: "Новый набор",
    announcement_text: "Открыт набор в новые группы! Запишитесь на бесплатный пробный урок и консультацию.",
    announcement_cta: "Регистрация",
    nav_home: "Главная",
    nav_about: "О нас",
    nav_courses: "Курсы",
    nav_teachers: "Преподаватели",
    nav_schedule: "Расписание",
    nav_competitions: "Соревнования",
    nav_gallery: "Галерея",
    nav_contact: "Контакты",
    nav_register_btn: "Регистрация",

    hero_badge: "⚡ Современный IT-учебный центр",
    hero_title_1: "Создай свое будущее сегодня вместе с",
    hero_title_2: "META IT SCHOOL",
    hero_title_3: "!",
    hero_subtitle: "Изучайте современные технологии, освойте программирование и создайте карьеру мечты. 100% практики, реальные проекты и поддержка опытных менторов.",
    hero_btn_courses: "Смотреть курсы",
    hero_btn_consult: "Бесплатная консультация",
    hero_btn_register: "Записаться",
    hero_perk_1_title: "6 дней в неделю",
    hero_perk_1_sub: "3 основных урока + 3 дня практики",
    hero_perk_2_title: "Официальный диплом",
    hero_perk_2_sub: "Сертификат международного образца",
    hero_perk_3_title: "Соревнования",
    hero_perk_3_sub: "Турниры и Хакатоны",

    term_connected: "Система META IT SCHOOL успешно запущена...",
    term_loading: "Практические занятия активированы: 100%",

    stat_students: "Количество учеников",
    stat_students_desc: "Успешно обучились в нашем центре",
    stat_courses: "Количество курсов",
    stat_courses_desc: "Востребованные направления в сфере IT",
    stat_teachers: "Преподаватели",
    stat_teachers_desc: "Практикующие профессиональные менторы",
    stat_competitions: "Проведено соревнований",
    stat_competitions_desc: "Турниры, хакатоны и ценные призы",

    about_tag: "Наша миссия",
    about_title_1: "Полная информация о",
    about_title_2: "META IT SCHOOL",
    about_intro: "META IT SCHOOL — это инновационный центр IT-образования, обучающий востребованным профессиям по передовым международным стандартам.",
    mission_title: "Наша главная цель",
    mission_desc: "Обучение молодежи современным IT-технологиям, программированию и иностранным языкам для подготовки высокооплачиваемых специалистов мирового уровня.",
    adv_title: "Почему выбирают META IT SCHOOL?",
    adv_subtitle: "9 ключевых преимуществ для наших студентов:",
    adv_1_title: "Опытные преподаватели",
    adv_1_desc: "Обучение ведут практикующие разработчики с многолетним стажем.",
    adv_2_title: "Мощные компьютеры",
    adv_2_desc: "Все аудитории оборудованы современными высокоскоростными компьютерами.",
    adv_3_title: "Практические занятия",
    adv_3_desc: "Никакой сухой теории. Каждый урок закрепляется написанием реального кода.",
    adv_4_title: "Индивидуальный подход",
    adv_4_desc: "Уделяется персональное внимание каждому студенту для качественного усвоения.",
    adv_5_title: "Реальные проекты",
    adv_5_desc: "Создание готовых коммерческих проектов и портфолио в процессе учебы.",
    adv_6_title: "Еженедельные повторения",
    adv_6_desc: "Помимо 3 основных уроков, еще 3 дня интенсивной практики каждую неделю.",
    adv_7_title: "Турниры и Хакатоны",
    adv_7_desc: "Ежемесячные соревнования, баттлы кодеров и ценные призы.",
    adv_8_title: "Сертификация",
    adv_8_desc: "Официальный сертификат выпускника международного стандарта.",
    adv_9_title: "Дружеская атмосфера",
    adv_9_desc: "Комьюнити единомышленников, коворкинг и комфортные условия для учебы.",

    courses_tag: "Наши направления",
    courses_title_1: "Все",
    courses_title_2: "IT-Курсы",
    courses_subtitle: "Выберите направление, пройдите путь с нуля до профи и станьте востребованным специалистом.",
    filter_all: "Все курсы (8)",
    filter_prog: "Программирование",
    filter_lang: "Языки",
    filter_hard: "Робототехника & Безопасность",
    filter_office: "Офис и Информатика",
    search_course_ph: "Поиск по названию курса...",
    price_month: "сум / месяц",
    btn_details: "Подробнее",
    btn_enroll: "Записаться",
    schedule_badge: "6 дней в неделю",
    cert_badge: "Сертификат",

    pricing_tag: "Прозрачно и доступно",
    pricing_title_1: "Стоимость",
    pricing_title_2: "Обучения",
    pricing_subtitle: "Никаких скрытых платежей: 6 дней интенсивного обучения в неделю в одном тарифе!",
    price_lang_badge: "Спеццена",
    price_lang_title: "Курс английского языка",
    price_lang_sub: "Grammar, Speaking, Listening и специализированный IT English",
    price_all_badge: "Все IT-курсы",
    price_all_title: "Остальные направления",
    price_all_sub: "Frontend, Backend, Робототехника, Кибербезопасность, Информатика, Word, Excel",
    price_per_month: "/ месяц",
    price_btn_enroll: "Записаться",

    schedule_tag: "Учебный процесс",
    sched_title_1: "Еженедельное",
    sched_title_2: "Расписание",
    sched_subtitle: "META IT SCHOOL работает 6 дней в неделю: 3 дня теории и 3 дня практики. Воскресенье — выходной.",
    day_mon: "Понедельник",
    day_tue: "Вторник",
    day_wed: "Среда",
    day_thu: "Четверг",
    day_fri: "Пятница",
    day_sat: "Суббота",
    day_sun: "Воскресенье",
    type_main: "Основной урок",
    type_practice: "Повторение и практика",
    type_project: "Проект & Закрепление",
    type_off: "Выходной день",

    teachers_tag: "Наша команда",
    teachers_title_1: "Квалифицированные",
    teachers_title_2: "Преподаватели",
    teachers_subtitle: "Опытные эксперты и наставники, готовые передать свои знания.",
    teachers_note: "Примечание: Состав преподавателей обновляется администрацией центра.",

    comp_tag: "Битвы и Призы",
    comp_title_1: "Соревнования и",
    comp_title_2: "Турниры",
    comp_subtitle: "Испытайте свои навыки, займите призовые места и выиграйте ценные подарки.",
    status_active: "Скоро",
    status_flagship: "Главный турнир",
    rules_title: "Условия участия:",
    comp_date_placeholder: "[Дата уточняется / Скоро]",
    comp_btn_reg: "Участвовать",
    winners_badge: "Зал славы",
    winners_title: "Результаты и Победители",
    winners_subtitle: "Наши талантливые студенты, показавшие лучшие результаты",

    gallery_tag: "Фотоотчет",
    gallery_title_1: "Жизнь",
    gallery_title_2: "Центра",
    gallery_subtitle: "Учебные будни, хакатоны, защита проектов и вручение дипломов.",
    gal_all: "Все",
    gal_classes: "Уроки",
    gal_computers: "Компьютерные классы",
    gal_robotics: "Робототехника",
    gal_events: "Турниры & Хакатон",
    gal_certs: "Вручение дипломов",

    faq_tag: "Вопрос-ответ",
    faq_title_1: "Часто Задаваемые",
    faq_title_2: "Вопросы",
    faq_subtitle: "Ответы на главные вопросы об учебном процессе и записи на курсы.",

    reg_badge: "Начни карьеру",
    reg_title: "Сделайте первый шаг к профессии будущего!",
    reg_subtitle: "Заполните форму, и мы запишем вас на бесплатный вводный урок.",
    form_heading: "Регистрация на курс",
    form_desc: "Заполните контактные данные:",
    lbl_name: "Имя",
    lbl_surname: "Фамилия",
    lbl_phone: "Номер телефона",
    lbl_age: "Возраст",
    lbl_course: "Выберите курс",
    lbl_format: "Формат обучения",
    lbl_time: "Удобное время для связи",
    lbl_notes: "Комментарий или вопрос",
    opt_choose_course: "-- Выберите курс --",
    opt_offline: "Офлайн (В учебном центре)",
    opt_online: "Онлайн (Дистанционно)",
    opt_morning: "Утро (09:00 - 12:00)",
    opt_afternoon: "День (13:00 - 18:00)",
    opt_evening: "Вечер (18:00 - 20:00)",
    btn_submit_reg: "Отправить заявку",
    form_privacy: "Ваши данные строго конфиденциальны и защищены.",

    contact_tag: "Свяжитесь с нами",
    contact_title_1: "Адрес и",
    contact_title_2: "Контакты",
    contact_subtitle: "Есть вопросы? Позвоните нам, напишите в Telegram или посетите наш центр.",
    addr_title: "Наш адрес:",
    addr_tip: "Ориентир: Рядом с Новым базаром",
    phone_title: "Наш телефон:",
    phone_tip: "[Официальный номер школы]",
    hours_title: "Время работы:",
    sunday_off: "Воскресенье: Выходной",
    social_channels_title: "Наши социальные сети:",
    tg_sub: "Telegram-канал",
    ig_sub: "Instagram-страница",
    btn_open_gmaps: "Google Maps",

    footer_about: "META IT SCHOOL — современная академия цифрового образования в Андижане.",
    footer_links_title: "Страницы",
    footer_courses_title: "Наши Курсы",
    footer_contact_title: "Контакты",
    all_rights_reserved: "Все права защищены.",
    privacy_policy: "Политика конфиденциальности",
    terms_service: "Условия использования"
  }
};

/* ==========================================================================
   3. DETAILED COURSE DATA (MODAL POPUP)
   8 ta talab qilingan kursning to'liq dasturi va tafsilotlari
   ========================================================================== */
const COURSE_DETAILS = {
  frontend: {
    title: "Frontend dasturlash",
    price: "480 000 so‘m / oy",
    duration: "6 oy (Haftasiga 6 kun: 3 kun asosiy + 3 kun amaliyot)",
    category: "Dasturlash",
    description: "Veb-saytlarning foydalanuvchi ko'radigan barcha vizual va interaktiv qismini noldan professional darajada yaratishni o'rganasiz.",
    syllabus: [
      "HTML5 Semantik teglari, veb-standartlar va SEO asoslari",
      "CSS3 zamonaviy uslublari: Flexbox, CSS Grid, media queries va responsive dizayn",
      "CSS animatsiyalari, gradientlar, transform va zamonaviy UI/UX effektlari",
      "JavaScript (ES6+) asoslari: o'zgaruvchilar, funksiyalar, sikllar, massivlar va obyektlar",
      "DOM manipulyatsiyasi, hodisalar (Events) va dinamik interaktivlik",
      "Asinxron dasturlash: Promise, async/await va REST API bilan ishlash",
      "Git versiyalar nazorati tizimi va GitHub'da portfolio yaratish",
      "Yakuniy real loyiha: to'liq moslashuvchan, ko'p sahifali zamonaviy veb-sayt"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript (ES6+)", "Git / GitHub", "Responsive Design", "REST API"],
    career: "Junior Frontend Developer, Veb-verstalschik, Sayt yaratish bo'yicha frilanser"
  },

  backend: {
    title: "Backend dasturlash",
    price: "480 000 so‘m / oy",
    duration: "6 oy (Haftasiga 6 kun: 3 kun asosiy + 3 kun amaliyot)",
    category: "Dasturlash",
    description: "Veb-ilovalar va mobil dasturlarning server qismi, ma'lumotlar bazasi, xavfsizlik va biznes-mantiq arxitekturasini yaratish.",
    syllabus: [
      "Dasturlash algoritmlari va ma'lumotlar tuzilmasi",
      "Server arxitekturasi va HTTP protokoli ishlash tamoyillari",
      "Node.js / Python dasturlash tili va server yaratish asoslari",
      "Ma'lumotlar bazasi: Relyatsion (PostgreSQL / MySQL) bazalar va SQL so'rovlar",
      "RESTful API arxitekturasi va JSON formati bilan ishlash",
      "Foydalanuvchilarni autentifikatsiya qilish: JWT, sessiyalar va parollarni shifrlash",
      "Server xavfsizligi, xatoliklarni qayta ishlash va ma'lumotlarni tekshirish (Validation)",
      "Serverni bulutga (Cloud/VPS) deploy qilish va doimiy monitoring"
    ],
    technologies: ["Node.js / Python", "PostgreSQL", "REST API", "JWT & Security", "Git", "Docker Basics"],
    career: "Junior Backend Developer, API Engineer, Ma'lumotlar bazasi mutaxassisi"
  },

  english: {
    title: "Ingliz tili (IT English & Speaking)",
    price: "350 000 so‘m / oy",
    duration: "Haftasiga 6 kun (3 kun asosiy dars + 3 kun Speaking Club va amaliyot)",
    category: "Xorijiy tillar",
    description: "Grammar, Speaking, Listening, Reading, Writing va IT sohasiga oid xalqaro texnik muloqot ko'nikmalarini egallash.",
    syllabus: [
      "Grammar essentials: Ingliz tili grammatikasining eng muhim qoidalari",
      "Speaking & Pronunciation: Nutq ravonligi va to'g'ri talaffuz mashqlari",
      "Listening comprehension: Xorijiy IT podkastlar, videoroliklar va intervyularni tinglab tushunish",
      "IT Vocabulary: Dasturchilar uchun maxsus texnik atamalar va hujjatlarni o'qish",
      "Technical Documentation: Veb-saytlar va texnik qo'llanmalarni ingliz tilida erkin o'qish",
      "CV & Resume Writing: Xalqaro kompaniyalar uchun ingliz tilida mukammal rezyume tayyorlash",
      "Job Interview Prep: Xorijiy buyurtmachilar bilan suhbatdan o'tish mahorati",
      "Haftalik erkin muloqot clublari va bahs-munozaralar"
    ],
    technologies: ["Speaking Club", "Grammar Builder", "IT Vocabulary", "IELTS Foundation", "Job Interview Prep"],
    career: "Xalqaro loyihalarda erkin muloqot, masofaviy frilans, chet el kompaniyalari bilan ishlash"
  },

  robotics: {
    title: "Robototexnika",
    price: "480 000 so‘m / oy",
    duration: "4-6 oy (Haftasiga 6 kun: 3 kun asosiy + 3 kun amaliy laboratoriya)",
    category: "Robototexnika",
    description: "Elektronika asoslari, sxemalar yig'ish, datchik va motorlar bilan ishlash hamda avtonom aqlli robotlar yaratish.",
    syllabus: [
      "Elektronika asoslari: tok, kuchlanish, qarshilik, diodlar va tranzistorlar",
      "Arduino mikrokontrolleri platasi va uning ishlash tizimi",
      "C++ dasturlash tili asoslari (mikrokontrollerlar uchun)",
      "Sensorlar va datchiklar: ultratovush, infraqizil, harorat va yorug'lik sensorlari",
      "Motorlar va haydovchilar (Driver): doimiy tok va servo motorlarni boshqarish",
      "Chiziq bo'ylab harakatlanuvchi va to'siqlarni aylanib o'tuvchi robot yaratish",
      "Bluetooth / Wi-Fi orqali smartfondan boshqariladigan mashina yasash",
      "Turnir va musobaqalarga robotlarni tayyorlash va optimallashtirish"
    ],
    technologies: ["Arduino", "Elektronika", "Sensorlar", "C++ asoslari", "IoT", "Sxematexnika"],
    career: "Robototexnik, Elektronika muhandisi, IoT (Internet of Things) mutaxassisi"
  },

  cybersecurity: {
    title: "Kiberxavfsizlik (Ethical Hacking)",
    price: "480 000 so‘m / oy",
    duration: "6 oy (Haftasiga 6 kun: 3 kun asosiy + 3 kun laboratoriya)",
    category: "Kiberxavfsizlik",
    description: "Axborot xavfsizligi, tarmoq arxitekturasi, zaifliklarni topish, kiberhujumlarni bartaraf etish va tizimlarni himoyalash.",
    syllabus: [
      "Axborot xavfsizligi asoslari va kiberxavfsizlik etikasi",
      "Linux operatsion tizimi (Kali Linux / Ubuntu) bilan professional ishlash",
      "Kompyuter tarmoqlari: TCP/IP modeli, DNS, DHCP, portlar va marshrutlash",
      "Tarmoq tahlili vositalari: Wireshark va Nmap bilan ishlash",
      "Veb-zaifliklar: SQL Injection, XSS, CSRF va ulardan himoyalanish",
      "Parollarni shifrlash, xeshlar va kriptografiya tamoyillari",
      "Ijtimoiy muhandislik (Phishing) hujumlarini aniqlash va oldini olish",
      "CTF (Capture The Flag) musobaqalariga tayyorgarlik va amaliy himoya"
    ],
    technologies: ["Kali Linux", "Wireshark", "Nmap", "Web Security", "Cryptography", "CTF Tools"],
    career: "Junior Security Analyst, Tarmoq xavfsizligi administratori, Axborot xavfsizligi mutaxassisi"
  },

  informatics: {
    title: "Informatika va Kompyuter Savodxonligi",
    price: "480 000 so‘m / oy",
    duration: "2-3 oy (Haftasiga 6 kun: 3 kun dars + 3 kun amaliyot)",
    category: "Informatika",
    description: "Kompyuterni noldan boshlab professional darajada boshqarish, tez yozish, internet xavfsizligi va zamonaviy raqamli ko'nikmalar.",
    syllabus: [
      "Kompyuter arxitekturasi: apparat ta'minoti va xotira turlari",
      "Windows operatsion tizimi, boshqaruv paneli va tezkor tugmalar",
      "Fayllar tizimi: to'g'ri tartiblash, arxivlash, qidirish va zaxiralash (Backup)",
      "Klaviatura orqali tez yozish (10 barmoq usuli)",
      "Internet va qidiruv tizimlari: ma'lumotlarni to'g'ri va xavfsiz qidirish",
      "Elektron pochta (Email) bilan professional ishlash va etiket",
      "Bulutli xizmatlar: Google Drive, OneDrive va hujjatlar almashinuvi",
      "Kompyuterni viruslardan himoyalash va raqamli gigiyena"
    ],
    technologies: ["Windows OS", "10 Barmoq usuli", "Google Workspace", "Fayl tizimi", "Internet xavfsizligi"],
    career: "Raqamli savodxon xodim, Ofis menejeri, IT yo'nalishlariga mustahkam poydevor"
  },

  word: {
    title: "Microsoft Word (Professional Hujjat Yuritish)",
    price: "480 000 so‘m / oy",
    duration: "1-2 oy (Haftasiga 6 kun: 3 kun asosiy + 3 kun amaliyot)",
    category: "Ofis dasturlari",
    description: "Har qanday murakkablikdagi rasmiy hujjatlar, shartnomalar, hisobotlar va kitoblarni xalqaro standartda formatlash.",
    syllabus: [
      "Microsoft Word interfeysi va tezkor boshqaruv usullari",
      "Matnlarni professional formatlash: shriftlar, intervallar va abzaslar",
      "Stillar (Styles) bilan ishlash va avtomatik mundarija (Table of Contents) yaratish",
      "Murakkab jadvallar yaratish, formatlash va matn bilan uyg'unlashtirish",
      "Grafik elementlar: SmartArt, diagrammalar, rasmlar va shakllar",
      "Ko'p sahifali hujjatlar: sahifa raqamlari, kolontitullar va bo'limlar (Section Breaks)",
      "Shartnoma, buyruq, xat va rasmiy blankalar shablonlarini tayyorlash",
      "Hujjatlarni chop etishga tayyorlash (Print settings) va PDF eksporti"
    ],
    technologies: ["MS Word 365", "Avtomatik mundarija", "Shablonlar", "Rasmiy blankalar", "PDF eksport"],
    career: "Hujjatlar bo'yicha mutaxassis, Kotibiyat xodimi, Ma'muriy boshqaruvchi"
  },

  excel: {
    title: "Microsoft Excel (Biznes Tahlil & Formulalar)",
    price: "480 000 so‘m / oy",
    duration: "2 oy (Haftasiga 6 kun: 3 kun dars + 3 kun amaliyot)",
    category: "Ofis dasturlari",
    description: "Katta hajmdagi ma'lumotlarni tartiblash, murakkab formulalar, hisob-kitoblar, Pivot jadvallar va interaktiv dashboardlar yaratish.",
    syllabus: [
      "Excel interfeysi, yacheykalar bilan ishlash va ma'lumotlarni kiritish sirlari",
      "Asosiy matematik va mantiqiy funksiyalar: SUM, AVERAGE, COUNT, IF, AND, OR",
      "Murakkab qidiruv funksiyalari: VLOOKUP, HLOOKUP, zamonaviy XLOOKUP va INDEX/MATCH",
      "Matnli va sanali funksiyalar bilan katta ma'lumotlarni tozalash",
      "Shartli formatlash (Conditional Formatting) va qoidalar o'rnatish",
      "Kombinatsiyalangan jadvallar (Pivot Tables) va Pivot Charts bilan chuqur tahlil",
      "Biznes ko'rsatkichlari uchun dinamik Dashboardlar tayyorlash",
      "Katta ma'lumotlar bazasini xatosiz tahlil qilish va hisobotlar topshirish"
    ],
    technologies: ["MS Excel 365", "VLOOKUP & XLOOKUP", "Pivot Tables", "Dashboards", "Data Analysis"],
    career: "Biznes tahlilchi (Data Analyst), Buxgalter yordamchisi, Savdo va moliya hisobchisi"
  }
};

/* ==========================================================================
   4. DOM CONTENT LOADED & INITIALIZATION
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  initNavigation();
  initHeroTyping();
  initStatsCounter();
  initCourseFilters();
  initCourseModals();
  initTeacherModals();
  initCompetitionRegistration();
  initGalleryLightbox();
  initFaqAccordion();
  initRegistrationForm();
  initGlobalSearch();
  initBackToTop();
  initScrollReveal();
  initDynamicPlaceholders();
});

/* ==========================================================================
   5. THEME MANAGER (DARK / LIGHT MODE)
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const htmlRoot = document.documentElement;

  // LocalStorage orqali saqlangan mavzuni olish (Standart holatda: 'dark')
  const savedTheme = localStorage.getItem('meta_theme') || 'dark';
  htmlRoot.setAttribute('data-theme', savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlRoot.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

      htmlRoot.setAttribute('data-theme', newTheme);
      localStorage.setItem('meta_theme', newTheme);

      // Bildirishnoma (Toast)
      const toastMsg = newTheme === 'dark' ? "Tungi rejim faollashtirildi" : "Kunduzgi rejim faollashtirildi";
      showToast(toastMsg, 'info', 2000);
    });
  }
}

/* ==========================================================================
   6. MULTILINGUAL TRANSLATION SYSTEM (i18n)
   ========================================================================== */
function initLanguage() {
  const langDropdown = document.getElementById('langDropdown');
  const langBtn = document.getElementById('langBtn');
  const currentLangText = document.getElementById('currentLangText');
  const langOptions = document.querySelectorAll('.lang-option');

  // Saqlangan tilni olish (Standart: 'uz')
  let currentLang = localStorage.getItem('meta_lang') || 'uz';

  // Menyuni ochish/yopish
  if (langBtn && langDropdown) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
      if (!langDropdown.contains(e.target)) {
        langDropdown.classList.remove('open');
      }
    });
  }

  // Tilni almashtirish funksiyasi
  function applyLanguage(lang) {
    if (!TRANSLATIONS[lang]) return;

    currentLang = lang;
    localStorage.setItem('meta_lang', lang);

    // Barcha data-i18n elementlarini yangilash
    const translatableElements = document.querySelectorAll('[data-i18n]');
    translatableElements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (TRANSLATIONS[lang][key]) {
        el.textContent = TRANSLATIONS[lang][key];
      }
    });

    // Input placeholder'larini yangilash
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(input => {
      const key = input.getAttribute('data-i18n-placeholder');
      if (TRANSLATIONS[lang][key]) {
        input.setAttribute('placeholder', TRANSLATIONS[lang][key]);
      }
    });

    // Tugma matnini yangilash
    if (currentLangText) {
      if (lang === 'uz') currentLangText.textContent = "O'zbek";
      else if (lang === 'uz_cyrl') currentLangText.textContent = "Ўзбек";
      else if (lang === 'en') currentLangText.textContent = "English";
      else if (lang === 'ru') currentLangText.textContent = "Русский";
    }

    // Active klassini ko'chirish
    langOptions.forEach(opt => {
      if (opt.getAttribute('data-lang') === lang) {
        opt.classList.add('active');
      } else {
        opt.classList.remove('active');
      }
    });
  }

  // Option bosilganda
  langOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      const selectedLang = opt.getAttribute('data-lang');
      applyLanguage(selectedLang);
      if (langDropdown) langDropdown.classList.remove('open');
      showToast(`Til o'zgartirildi: ${opt.textContent.trim()}`, 'info', 1800);
    });
  });

  // Boshlang'ich tilni yuklash
  applyLanguage(currentLang);
}

/* ==========================================================================
   7. NAVIGATION, STICKY HEADER & MOBILE DRAWER
   ========================================================================== */
function initNavigation() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  const sections = document.querySelectorAll('section[id]');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const drawerClose = document.getElementById('drawerClose');

  // Sticky Navbar va Scrollspy
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Scrollspy: qaysi bo'limda ekanligini aniqlash
    let scrollPos = window.scrollY + 120;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  });

  // Mobil Menyuni ochish/yopish
  function toggleDrawer(open) {
    if (open) {
      mobileDrawer.classList.add('open');
      drawerBackdrop.classList.add('active');
      hamburgerBtn.classList.add('active');
      document.body.style.overflow = 'hidden';
    } else {
      mobileDrawer.classList.remove('open');
      drawerBackdrop.classList.remove('active');
      hamburgerBtn.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('open');
      toggleDrawer(!isOpen);
    });
  }

  if (drawerClose) {
    drawerClose.addEventListener('click', () => toggleDrawer(false));
  }

  if (drawerBackdrop) {
    drawerBackdrop.addEventListener('click', () => toggleDrawer(false));
  }

  // Havola bosilganda mobil menyuni avtomatik yopish
  navLinks.forEach(link => {
    link.addEventListener('click', () => toggleDrawer(false));
  });
}

/* ==========================================================================
   8. HERO TERMINAL TYPING ANIMATION
   ========================================================================== */
function initHeroTyping() {
  const typedEl = document.getElementById('typedHeroText');
  if (!typedEl) return;

  const phrases = [
    "Kelajak kasbini biz bilan egalla...",
    "Frontend va Backend dasturlash...",
    "Robototexnika va Arduino loyihalari...",
    "Kiberxavfsizlik va Ethical Hacking...",
    "Ingliz tili va xalqaro muloqot..."
  ];

  let phraseIndex = 0;
  let letterIndex = 0;
  let isDeleting = false;
  let typingSpeed = 90;

  function typeLoop() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      typedEl.textContent = currentPhrase.substring(0, letterIndex - 1);
      letterIndex--;
      typingSpeed = 45;
    } else {
      typedEl.textContent = currentPhrase.substring(0, letterIndex + 1);
      letterIndex++;
      typingSpeed = 90;
    }

    if (!isDeleting && letterIndex === currentPhrase.length) {
      isDeleting = true;
      typingSpeed = 1600; // Tugagach kutish
    } else if (isDeleting && letterIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 400;
    }

    setTimeout(typeLoop, typingSpeed);
  }

  typeLoop();
}

/* ==========================================================================
   9. ANIMATED STATS COUNTER
   ========================================================================== */
function initStatsCounter() {
  const counters = document.querySelectorAll('.counter');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counters.forEach(counter => {
          const target = +counter.getAttribute('data-target');
          const duration = 2000; // 2 soniya
          const stepTime = 30;
          const totalSteps = duration / stepTime;
          const increment = target / totalSteps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              counter.textContent = target.toLocaleString();
              clearInterval(timer);
            } else {
              counter.textContent = Math.ceil(current).toLocaleString();
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.getElementById('stats');
  if (statsSection) {
    observer.observe(statsSection);
  }
}

/* ==========================================================================
   10. COURSE FILTERING & LIVE SEARCH
   ========================================================================== */
function initCourseFilters() {
  const filterTabs = document.querySelectorAll('.filter-tab-btn');
  const courseCards = document.querySelectorAll('.course-card');
  const searchInput = document.getElementById('courseSearchInput');
  const clearBtn = document.getElementById('courseSearchClear');

  let activeCategory = 'all';
  let searchTerm = '';

  function filterCards() {
    courseCards.forEach(card => {
      const cardCat = card.getAttribute('data-category');
      const title = card.querySelector('.course-title').textContent.toLowerCase();
      const desc = card.querySelector('.course-desc').textContent.toLowerCase();

      const matchesCat = (activeCategory === 'all' || cardCat === activeCategory);
      const matchesSearch = (title.includes(searchTerm) || desc.includes(searchTerm));

      if (matchesCat && matchesSearch) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeCategory = tab.getAttribute('data-filter');
      filterCards();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value.trim().toLowerCase();
      if (clearBtn) {
        clearBtn.style.display = searchTerm.length > 0 ? 'block' : 'none';
      }
      filterCards();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchTerm = '';
      clearBtn.style.display = 'none';
      filterCards();
      searchInput.focus();
    });
  }
}

/* ==========================================================================
   11. COURSE DETAILS MODAL
   ========================================================================== */
function initCourseModals() {
  const modal = document.getElementById('courseModal');
  const modalContent = document.getElementById('courseModalContent');
  const closeBtn = document.getElementById('courseModalClose');
  const detailButtons = document.querySelectorAll('.btn-course-details');
  const enrollButtons = document.querySelectorAll('.btn-course-enroll, .select-plan-btn');

  function openModal(courseKey) {
    const course = COURSE_DETAILS[courseKey];
    if (!course) return;

    modalContent.innerHTML = `
      <div class="modal-header-icon"><i class="fa-solid fa-graduation-cap"></i></div>
      <span class="section-tag">${course.category}</span>
      <h2 style="font-size: 1.8rem; margin: 8px 0 12px 0;">${course.title}</h2>
      <p style="color: var(--text-muted); line-height: 1.6; margin-bottom: 20px;">${course.description}</p>
      
      <div style="background: var(--bg-input); padding: 16px; border-radius: var(--radius-md); margin-bottom: 24px; display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-size: 0.9rem;">
        <div><strong style="color: var(--primary);"><i class="fa-solid fa-wallet"></i> Oylik narx:</strong> ${course.price}</div>
        <div><strong style="color: var(--primary);"><i class="fa-regular fa-clock"></i> Davomiyligi:</strong> ${course.duration}</div>
        <div style="grid-column: span 2;"><strong style="color: var(--primary);"><i class="fa-solid fa-briefcase"></i> Kelajak kasblari:</strong> ${course.career}</div>
      </div>

      <h4 style="font-size: 1.15rem; margin-bottom: 12px;"><i class="fa-solid fa-list-check" style="color: var(--primary);"></i> Kurs davomida o'rganiladigan mavzular:</h4>
      <ul style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 24px;">
        ${course.syllabus.map(item => `<li style="display: flex; align-items: flex-start; gap: 10px; font-size: 0.92rem;"><i class="fa-solid fa-circle-check" style="color: var(--accent-emerald); margin-top: 4px;"></i> <span>${item}</span></li>`).join('')}
      </ul>

      <div style="display: flex; gap: 12px; margin-top: 24px;">
        <button class="btn btn-primary btn-block glow-effect modal-enroll-action" data-course="${courseKey}">
          <i class="fa-solid fa-user-plus"></i> Ushbu kursga yozilish
        </button>
      </div>
    `;

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Modal ichidagi Yozilish tugmasi
    const actionBtn = modalContent.querySelector('.modal-enroll-action');
    if (actionBtn) {
      actionBtn.addEventListener('click', () => {
        closeModal();
        preselectCourseInForm(courseKey);
      });
    }
  }

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  detailButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const courseId = btn.getAttribute('data-course');
      openModal(courseId);
    });
  });

  enrollButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const courseId = btn.getAttribute('data-course') || btn.getAttribute('data-plan');
      if (courseId) {
        preselectCourseInForm(courseId);
      }
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
  });
}

function preselectCourseInForm(courseId) {
  const courseSelect = document.getElementById('courseSelect');
  if (courseSelect) {
    if (courseId === 'it-standard') {
      courseSelect.value = 'frontend';
    } else if (courseSelect.querySelector(`option[value="${courseId}"]`)) {
      courseSelect.value = courseId;
    }
  }

  const registerSection = document.getElementById('register');
  if (registerSection) {
    registerSection.scrollIntoView({ behavior: 'smooth' });
    showToast(`Tanlangan kurs formaga kiritildi`, 'info', 2500);
  }
}

/* ==========================================================================
   12. TEACHERS SECTION & MODAL
   ========================================================================== */
function initTeacherModals() {
  const modal = document.getElementById('teacherModal');
  const modalContent = document.getElementById('teacherModalContent');
  const closeBtn = document.getElementById('teacherModalClose');
  const teacherBtns = document.querySelectorAll('.btn-teacher-modal');

  const teacherData = {
    t1: {
      name: "[Ustoz Ism-Familiyasi]",
      spec: "Senior Frontend Developer & Mentor",
      exp: "[5+ yillik amaliy tajriba]",
      course: "Frontend dasturlash (HTML, CSS, JavaScript, Git)",
      bio: "[Ushbu qismga ustoz haqidagi to'liq ma'lumot, o'qigan joyi, bajargan real loyihalari va sertifikatlari joylashtiriladi.]",
      skills: ["HTML5 / CSS3", "JavaScript ES6+", "Responsive Design", "UI/UX", "Code Review"]
    },
    t2: {
      name: "[Ustoz Ism-Familiyasi]",
      spec: "Backend Software Engineer & System Architect",
      exp: "[6+ yillik amaliy tajriba]",
      course: "Backend dasturlash (Node.js, PostgreSQL, REST API)",
      bio: "[Ushbu qismga ustoz haqidagi to'liq ma'lumot, server infratuzilmasi bo'yicha tajribasi va loyihalari joylashtiriladi.]",
      skills: ["Server Architecture", "Databases", "REST API", "Microservices", "Security"]
    },
    t3: {
      name: "[Ustoz Ism-Familiyasi]",
      spec: "Cyber Security Specialist & Network Admin",
      exp: "[4+ yillik amaliy tajriba]",
      course: "Kiberxavfsizlik & Ethical Hacking",
      bio: "[Ushbu qismga ustozning kiberxavfsizlik sohasidagi yutuqlari, CTF musobaqalaridagi o'rinlari joylashtiriladi.]",
      skills: ["Kali Linux", "Network Security", "Penetration Testing", "Cryptography"]
    },
    t4: {
      name: "[Ustoz Ism-Familiyasi]",
      spec: "Robotics & IoT Electronics Engineer",
      exp: "[4+ yillik amaliy tajriba]",
      course: "Robototexnika va Arduino loyihalari",
      bio: "[Ushbu qismga ustozning robototexnika sohasidagi yaratgan loyihalari va musobaqa tajribasi yoziladi.]",
      skills: ["Arduino", "Elektronika", "C++", "Avtomatika", "Sensorlar"]
    }
  };

  teacherBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tId = btn.getAttribute('data-teacher-id');
      const t = teacherData[tId];
      if (!t) return;

      modalContent.innerHTML = `
        <div class="modal-header-icon"><i class="fa-solid fa-chalkboard-user"></i></div>
        <span class="section-tag">${t.spec}</span>
        <h2 style="font-size: 1.8rem; margin: 8px 0 6px 0;">${t.name}</h2>
        <p style="color: var(--primary); font-weight: 600; margin-bottom: 16px;"><i class="fa-solid fa-briefcase"></i> Tajriba: ${t.exp}</p>
        
        <div style="background: var(--bg-input); padding: 16px; border-radius: var(--radius-md); margin-bottom: 20px;">
          <strong style="display: block; margin-bottom: 6px; color: var(--text-main);">Dars beradigan yo'nalishi:</strong>
          <p style="color: var(--text-muted); font-size: 0.95rem;">${t.course}</p>
        </div>

        <h4 style="font-size: 1.05rem; margin-bottom: 8px;">Ustoz haqida:</h4>
        <p style="color: var(--text-muted); line-height: 1.6; margin-bottom: 20px;">${t.bio}</p>

        <h4 style="font-size: 1.05rem; margin-bottom: 10px;">Asosiy ko'nikmalari:</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px;">
          ${t.skills.map(s => `<span class="tech-tag" style="padding: 6px 12px; font-size: 0.8rem;">${s}</span>`).join('')}
        </div>

        <a href="#register" class="btn btn-primary btn-block glow-effect" onclick="document.getElementById('teacherModal').classList.remove('active'); document.body.style.overflow='';">
          Ushbu ustoz guruhiga yozilish
        </a>
      `;

      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  });
}

/* ==========================================================================
   13. COMPETITION REGISTRATION MODAL
   ========================================================================== */
function initCompetitionRegistration() {
  const compButtons = document.querySelectorAll('.btn-comp-register');
  const compModal = document.getElementById('compModal');
  const compModalClose = document.getElementById('compModalClose');
  const compModalTitle = document.getElementById('compModalTitle');
  const compSelectedName = document.getElementById('compSelectedName');
  const compRegisterForm = document.getElementById('compRegisterForm');

  compButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const compName = btn.getAttribute('data-comp');
      if (compModal && compModalTitle && compSelectedName) {
        compSelectedName.value = compName;
        compModalTitle.textContent = `${compName} — Ro‘yxatdan o‘tish`;
        compModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (compModalClose) {
    compModalClose.addEventListener('click', () => {
      compModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (compModal) {
    compModal.addEventListener('click', (e) => {
      if (e.target === compModal) {
        compModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  if (compRegisterForm) {
    compRegisterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const userName = document.getElementById('compUserName').value.trim();
      const userPhone = document.getElementById('compUserPhone').value.trim();
      const compName = compSelectedName.value;

      if (!userName || !userPhone) {
        showToast("Iltimos, barcha maydonlarni to'ldiring!", "error");
        return;
      }

      // Saqlash
      const lead = {
        type: 'competition',
        name: userName,
        phone: userPhone,
        competition: compName,
        date: new Date().toISOString()
      };

      const existing = JSON.parse(localStorage.getItem('meta_comp_leads') || '[]');
      existing.push(lead);
      localStorage.setItem('meta_comp_leads', JSON.stringify(existing));

      compModal.classList.remove('active');
      document.body.style.overflow = '';
      compRegisterForm.reset();

      showToast(`Tabriklaymiz, ${userName}! Siz "${compName}" musobaqasiga muvaffaqiyatli ro'yxatdan o'tdingiz.`, "success", 4000);
    });
  }
}

/* ==========================================================================
   14. GALLERY LIGHTBOX & CATEGORY FILTER
   ========================================================================== */
function initGalleryLightbox() {
  const filterTabs = document.querySelectorAll('.gallery-tab');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDesc = document.getElementById('lightboxDesc');
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');

  let currentGalleryList = Array.from(galleryItems);
  let currentIndex = 0;

  // Filtrlar
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.getAttribute('data-gallery');

      galleryItems.forEach(item => {
        if (cat === 'all' || item.getAttribute('data-category') === cat) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });

      // Aktiv elementlar ro'yxatini yangilash
      currentGalleryList = Array.from(galleryItems).filter(item => item.style.display !== 'none');
    });
  });

  // Lightbox ochish
  function openLightbox(index) {
    if (!currentGalleryList[index]) return;
    currentIndex = index;

    const item = currentGalleryList[index];
    const img = item.querySelector('.gallery-img');
    const title = item.getAttribute('data-img-title') || '';
    const desc = item.getAttribute('data-img-desc') || '';

    lightboxImg.src = img.src;
    lightboxImg.alt = title;
    lightboxTitle.textContent = title;
    lightboxDesc.textContent = desc;

    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % currentGalleryList.length;
    openLightbox(currentIndex);
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + currentGalleryList.length) % currentGalleryList.length;
    openLightbox(currentIndex);
  }

  galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
      const idx = currentGalleryList.indexOf(item);
      if (idx !== -1) openLightbox(idx);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (nextBtn) nextBtn.addEventListener('click', showNext);
  if (prevBtn) prevBtn.addEventListener('click', showPrev);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
  });
}

/* ==========================================================================
   15. FAQ ACCORDION
   ========================================================================== */
function initFaqAccordion() {
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const item = question.parentElement;
      const isActive = item.classList.contains('active');

      // Boshqa barcha ochiqlarini yopish
      document.querySelectorAll('.faq-item').forEach(otherItem => {
        otherItem.classList.remove('active');
        otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });

      // Tanlanganni almashtirish
      if (!isActive) {
        item.classList.add('active');
        question.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ==========================================================================
   16. REGISTRATION FORM (VALIDATION, MASKING & BOT API READY)
   ========================================================================== */
function initRegistrationForm() {
  const form = document.getElementById('registrationForm');
  const phoneInput = document.getElementById('phoneNumber');
  const compPhoneInput = document.getElementById('compUserPhone');

  // Telefon raqam formati (+998 (__) ___-__-__)
  function formatPhoneInput(e) {
    let input = e.target;
    let val = input.value.replace(/\D/g, ''); // Faqat raqamlar

    if (val.startsWith('998')) {
      val = val.substring(3);
    }

    // Maksimal 9 ta raqam (operator kodi va raqam)
    val = val.substring(0, 9);

    let formatted = '+998 ';
    if (val.length > 0) formatted += '(' + val.substring(0, 2);
    if (val.length >= 2) formatted += ') ';
    if (val.length > 2) formatted += val.substring(2, 5);
    if (val.length >= 5) formatted += '-';
    if (val.length > 5) formatted += val.substring(5, 7);
    if (val.length >= 7) formatted += '-';
    if (val.length > 7) formatted += val.substring(7, 9);

    input.value = formatted.trim();
  }

  if (phoneInput) {
    phoneInput.addEventListener('input', formatPhoneInput);
    phoneInput.addEventListener('focus', (e) => {
      if (!e.target.value) e.target.value = '+998 (';
    });
  }

  if (compPhoneInput) {
    compPhoneInput.addEventListener('input', formatPhoneInput);
    compPhoneInput.addEventListener('focus', (e) => {
      if (!e.target.value) e.target.value = '+998 (';
    });
  }

  // Formani tekshirish va yuborish
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;

      // Maydonlarni olish
      const firstName = document.getElementById('firstName');
      const lastName = document.getElementById('lastName');
      const phone = document.getElementById('phoneNumber');
      const age = document.getElementById('userAge');
      const course = document.getElementById('courseSelect');
      const format = document.getElementById('studyFormat').value;
      const contactTime = document.getElementById('contactTime').value;
      const notes = document.getElementById('additionalNotes').value.trim();

      // Xatolik xabarlari elementlari
      const fnError = document.getElementById('firstNameError');
      const lnError = document.getElementById('lastNameError');
      const phoneError = document.getElementById('phoneNumberError');
      const ageError = document.getElementById('userAgeError');
      const courseError = document.getElementById('courseSelectError');

      // Tozalash
      [fnError, lnError, phoneError, ageError, courseError].forEach(el => el.textContent = '');
      [firstName, lastName, phone, age, course].forEach(el => el.classList.remove('error'));

      // 1. Ism
      if (!firstName.value.trim() || firstName.value.trim().length < 2) {
        fnError.textContent = "Iltimos, ismingizni to'g'ri kiriting (kamida 2 ta harf).";
        firstName.classList.add('error');
        isValid = false;
      }

      // 2. Familiya
      if (!lastName.value.trim() || lastName.value.trim().length < 2) {
        lnError.textContent = "Iltimos, familiyangizni to'g'ri kiriting.";
        lastName.classList.add('error');
        isValid = false;
      }

      // 3. Telefon
      const phoneRegex = /^\+998 \(\d{2}\) \d{3}-\d{2}-\d{2}$/;
      if (!phoneRegex.test(phone.value.trim())) {
        phoneError.textContent = "Telefon raqami noto'g'ri (+998 (90) 123-45-67 formatida).";
        phone.classList.add('error');
        isValid = false;
      }

      // 4. Yosh
      const userAge = parseInt(age.value.trim(), 10);
      if (isNaN(userAge) || userAge < 7 || userAge > 80) {
        ageError.textContent = "Iltimos, yoshingizni to'g'ri kiriting (7 dan 80 gacha).";
        age.classList.add('error');
        isValid = false;
      }

      // 5. Kurs
      if (!course.value) {
        courseError.textContent = "Iltimos, qiziqqan kursingizni tanlang.";
        course.classList.add('error');
        isValid = false;
      }

      if (!isValid) {
        showToast("Iltimos, shakldagi barcha qizil xatoliklarni to'g'rilang!", "error");
        return;
      }

      // Yuborish obyekti
      const leadData = {
        id: Date.now(),
        firstName: firstName.value.trim(),
        lastName: lastName.value.trim(),
        phone: phone.value.trim(),
        age: userAge,
        course: course.value,
        format: format,
        contactTime: contactTime,
        notes: notes,
        registeredAt: new Date().toISOString()
      };

      // LocalStorage ga saqlash
      const savedLeads = JSON.parse(localStorage.getItem('meta_school_leads') || '[]');
      savedLeads.push(leadData);
      localStorage.setItem('meta_school_leads', JSON.stringify(savedLeads));

      // Ixtiyoriy Telegram Bot API ga yuborish
      if (CONFIG.TELEGRAM_BOT.ENABLED) {
        sendToTelegramBot(leadData);
      }

      // Muvaffaqiyat bildirishnomasi
      showToast(`Tabriklaymiz, ${leadData.firstName}! Sizning arizangiz qabul qilindi. Tez orada mutaxassisimiz siz bilan bog'lanadi.`, "success", 5000);

      // Formani tozalash
      form.reset();
    });
  }
}

// Telegram Bot API ga xabar yo'llash yordamchisi (Backend/Bot integratsiyasi)
async function sendToTelegramBot(data) {
  try {
    const text = `🚀 *Yangi ariza: META IT SCHOOL*\n\n` +
      `👤 *Ism-Familiya:* ${data.firstName} ${data.lastName}\n` +
      `📞 *Telefon:* \`${data.phone}\`\n` +
      `🎂 *Yosh:* ${data.age}\n` +
      `📚 *Kurs:* ${data.course.toUpperCase()}\n` +
      `🏫 *Shakl:* ${data.format}\n` +
      `⏰ *Qulay vaqt:* ${data.contactTime}\n` +
      `💬 *Izoh:* ${data.notes || "Yo'q"}\n` +
      `📅 *Vaqt:* ${new Date().toLocaleString()}`;

    const url = `https://api.telegram.org/bot${CONFIG.TELEGRAM_BOT.TOKEN}/sendMessage`;
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CONFIG.TELEGRAM_BOT.CHAT_ID,
        text: text,
        parse_mode: 'Markdown'
      })
    });
  } catch (err) {
    console.warn("Telegram botga yuborishda xatolik yuz berdi:", err);
  }
}

/* ==========================================================================
   17. GLOBAL QUICK SEARCH (Ctrl + K)
   ========================================================================== */
function initGlobalSearch() {
  const searchTrigger = document.getElementById('searchTrigger');
  const searchModal = document.getElementById('searchModal');
  const searchModalClose = document.getElementById('searchModalClose');
  const searchInput = document.getElementById('globalSearchInput');
  const searchResults = document.getElementById('searchResultsList');

  const searchableIndex = [
    { title: "Frontend dasturlash kursi", cat: "Kurs", link: "#courses", desc: "HTML, CSS, JavaScript, veb-saytlar yaratish (480 000 so'm)" },
    { title: "Backend dasturlash kursi", cat: "Kurs", link: "#courses", desc: "Node.js, PostgreSQL, API, server (480 000 so'm)" },
    { title: "Ingliz tili kursi", cat: "Kurs", link: "#courses", desc: "Speaking club, Grammar, IT English (350 000 so'm)" },
    { title: "Robototexnika kursi", cat: "Kurs", link: "#courses", desc: "Arduino, sensorlar, mikrokontrollerlar (480 000 so'm)" },
    { title: "Kiberxavfsizlik kursi", cat: "Kurs", link: "#courses", desc: "Ethical hacking, axborot xavfsizligi (480 000 so'm)" },
    { title: "Informatika va kompyuter savodxonligi", cat: "Kurs", link: "#courses", desc: "Windows, 10 barmoq, fayllar bilan ishlash (480 000 so'm)" },
    { title: "Microsoft Word kursi", cat: "Kurs", link: "#courses", desc: "Hujjatlar tayyorlash, formatlash (480 000 so'm)" },
    { title: "Microsoft Excel kursi", cat: "Kurs", link: "#courses", desc: "Formulalar, VLOOKUP, Pivot Tables (480 000 so'm)" },
    { title: "Frontend Coding Competition", cat: "Musobaqa", link: "#competitions", desc: "Sayt yasash chempionati" },
    { title: "Backend Challenge", cat: "Musobaqa", link: "#competitions", desc: "Algoritmlar va API bellashuvi" },
    { title: "META IT SCHOOL Hackathon", cat: "Musobaqa", link: "#competitions", desc: "Yillik eng yirik marafon" },
    { title: "Dars jadvali (Haftada 6 kun)", cat: "Jadval", link: "#schedule", desc: "3 kun asosiy dars + 3 kun amaliyot" },
    { title: "Manzil va Xarita", cat: "Aloqa", link: "#contact", desc: "Andijon shahri, Yangi bozor, Lenskiy ko'chasi" },
    { title: "Biz haqimizda va Afzalliklar", cat: "Ma'lumot", link: "#about", desc: "9 ta asosiy ustunligimiz" }
  ];

  function openSearch() {
    searchModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => searchInput.focus(), 100);
  }

  function closeSearch() {
    searchModal.classList.remove('active');
    document.body.style.overflow = '';
    searchInput.value = '';
    searchResults.innerHTML = `
      <div class="search-empty-state">
        <i class="fa-solid fa-keyboard"></i>
        <p>Qidirmoqchi bo'lgan kurs yoki mavzu nomini yozing...</p>
      </div>
    `;
  }

  if (searchTrigger) searchTrigger.addEventListener('click', openSearch);
  if (searchModalClose) searchModalClose.addEventListener('click', closeSearch);

  searchModal.addEventListener('click', (e) => {
    if (e.target === searchModal) closeSearch();
  });

  // Ctrl + K yoki Cmd + K
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      if (searchModal.classList.contains('active')) closeSearch();
      else openSearch();
    }
    if (e.key === 'Escape' && searchModal.classList.contains('active')) {
      closeSearch();
    }
  });

  // Qidiruv algoritmi
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.trim().toLowerCase();
      if (!q) {
        searchResults.innerHTML = `
          <div class="search-empty-state">
            <i class="fa-solid fa-keyboard"></i>
            <p>Qidirmoqchi bo'lgan kurs yoki mavzu nomini yozing...</p>
          </div>
        `;
        return;
      }

      const results = searchableIndex.filter(item => 
        item.title.toLowerCase().includes(q) || 
        item.desc.toLowerCase().includes(q) || 
        item.cat.toLowerCase().includes(q)
      );

      if (results.length === 0) {
        searchResults.innerHTML = `
          <div class="search-empty-state">
            <i class="fa-solid fa-triangle-exclamation"></i>
            <p>"${e.target.value}" bo'yicha hech narsa topilmadi.</p>
          </div>
        `;
      } else {
        searchResults.innerHTML = results.map(item => `
          <div class="search-result-item" onclick="location.href='${item.link}'; document.getElementById('searchModal').classList.remove('active'); document.body.style.overflow='';">
            <div class="search-item-info">
              <strong>${item.title}</strong>
              <small>${item.desc}</small>
            </div>
            <span class="tech-tag">${item.cat}</span>
          </div>
        `).join('');
      }
    });
  }
}

/* ==========================================================================
   18. FLOATING BACK TO TOP BUTTON WITH CIRCULAR PROGRESS
   ========================================================================== */
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTop');
  const progressCircle = document.querySelector('.progress-ring-circle');

  if (!backToTopBtn || !progressCircle) return;

  const radius = progressCircle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;
  progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
  progressCircle.style.strokeDashoffset = circumference;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / docHeight;

    if (scrollTop > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }

    const offset = circumference - scrollPercent * circumference;
    progressCircle.style.strokeDashoffset = offset;
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ==========================================================================
   19. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
   ========================================================================== */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(el => revealObserver.observe(el));
}

/* ==========================================================================
   20. TOAST NOTIFICATION UTILITY
   ========================================================================== */
function showToast(message, type = 'info', duration = 3000) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  let icon = 'fa-circle-info';
  let title = 'Ma\'lumot';

  if (type === 'success') {
    icon = 'fa-circle-check';
    title = 'Muvaffaqiyatli';
  } else if (type === 'error') {
    icon = 'fa-triangle-exclamation';
    title = 'Xatolik';
  }

  toast.innerHTML = `
    <i class="fa-solid ${icon}"></i>
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      <div class="toast-msg">${message}</div>
    </div>
    <button class="toast-close" aria-label="Yopish"><i class="fa-solid fa-xmark"></i></button>
  `;

  container.appendChild(toast);

  const closeBtn = toast.querySelector('.toast-close');
  function removeToast() {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => {
      if (toast.parentElement) toast.parentElement.removeChild(toast);
    }, 300);
  }

  if (closeBtn) closeBtn.addEventListener('click', removeToast);
  setTimeout(removeToast, duration);
}

/* ==========================================================================
   21. DYNAMIC CONFIGURATION & PLACEHOLDER INJECTION
   ========================================================================== */
function initDynamicPlaceholders() {
  // Avtomatik joriy yilni footerga qo'yish
  const yearEl = document.getElementById('copyrightYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Telefon havolasi
  const phoneLink = document.getElementById('contactPhoneLink');
  if (phoneLink) {
    phoneLink.href = `tel:${CONFIG.PHONE_RAW}`;
    phoneLink.textContent = CONFIG.PHONE_NUMBER;
  }

  // Telegram va Instagram tugmalari havolalarini yangilash
  const tgButtons = document.querySelectorAll('a[href*="YOUR_TELEGRAM_CHANNEL"]');
  tgButtons.forEach(btn => btn.href = CONFIG.TELEGRAM_URL);

  const igButtons = document.querySelectorAll('a[href*="YOUR_INSTAGRAM_PROFILE"]');
  igButtons.forEach(btn => btn.href = CONFIG.INSTAGRAM_URL);
}
