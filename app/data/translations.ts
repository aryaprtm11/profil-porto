import type { Language, NavKey } from "./types";

type HomeCopy = {
  nav: Record<NavKey, string>;
  contactButton: string;
  viewCertificate: string;
  heroTitle: string;
  heroDescription: string;
  aboutTitle: string;
  aboutDescription: string;
  educationTitle: string;
  skillsTitle: string;
  skillsDescription: string;
  projectsTitle: string;
  projectsDescription: string;
  certificateTitle: string;
  certificateDescription: string;
  experienceTitle: string;
  experienceDescription: string;
  contactTitle: string;
  contactDescription: string;
  emailButton: string;
};

export const homeCopy: Record<Language, HomeCopy> = {
  id: {
    nav: {
      about: "Tentang",
      skills: "Keahlian",
      projects: "Proyek",
      certificate: "Sertifikat",
      experience: "Pengalaman",
    },
    contactButton: "Contact Me",
    viewCertificate: "View Certificate",
    heroTitle: "Halo, Saya Arya Pratama",
    heroDescription:
      "Saya membangun tampilan website yang clean, responsif, dan nyaman digunakan di berbagai perangkat.",
    aboutTitle: "Tentang Arya Pratama",
    aboutDescription:
      "Saya adalah web developer yang berfokus pada pembuatan tampilan website yang rapi, responsif, dan mudah digunakan. Saya senang membangun pengalaman digital dengan struktur yang jelas, detail visual yang konsisten, dan performa yang nyaman di berbagai perangkat.",
    educationTitle: "Pendidikan",
    skillsTitle: "Keahlian",
    skillsDescription:
      "Beberapa teknologi dan tools yang saya gunakan untuk membangun website yang responsif, terstruktur, dan nyaman digunakan.",
    projectsTitle: "Proyek",
    projectsDescription:
      "Beberapa project yang saya kerjakan untuk melatih kemampuan membangun tampilan website yang rapi, responsif, dan sesuai kebutuhan pengguna.",
    certificateTitle: "Sertifikat",
    certificateDescription:
      "Kumpulan sertifikat dan catatan belajar yang mendukung proses saya dalam mengembangkan kemampuan web development secara konsisten.",
    experienceTitle: "Pengalaman",
    experienceDescription:
      "Pengalaman saya terbentuk dari proses mengerjakan project web secara langsung, mulai dari menyusun tampilan, membangun komponen, sampai menjaga hasil akhir tetap responsif dan mudah digunakan.",
    contactTitle: "Tertarik membuat sesuatu yang clean dan berguna?",
    contactDescription:
      "Hubungi saya untuk kolaborasi, feedback portfolio, atau project web development.",
    emailButton: "Email Arya",
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      certificate: "Certificate",
      experience: "Experience",
    },
    contactButton: "Contact Me",
    viewCertificate: "View Certificate",
    heroTitle: "Hello, I'm Arya Pratama",
    heroDescription:
      "I build clean, responsive, and comfortable website interfaces across devices.",
    aboutTitle: "About Arya Pratama",
    aboutDescription:
      "I am a web developer focused on building clean, responsive, and easy-to-use website interfaces. I enjoy creating digital experiences with clear structure, consistent visual details, and comfortable performance across devices.",
    educationTitle: "Education",
    skillsTitle: "Skills",
    skillsDescription:
      "Technologies and tools I use to build responsive, structured, and comfortable web experiences.",
    projectsTitle: "Projects",
    projectsDescription:
      "A selection of projects I built to practice creating clean, responsive interfaces that match user needs.",
    certificateTitle: "Certificate",
    certificateDescription:
      "Certificates and learning records that support my process in consistently developing web development skills.",
    experienceTitle: "Experience",
    experienceDescription:
      "My experience comes from hands-on web project work, from composing layouts and building components to keeping the final result responsive and easy to use.",
    contactTitle: "Interested in building something clean and useful?",
    contactDescription:
      "Reach out for collaboration, portfolio feedback, or web development projects.",
    emailButton: "Email Arya",
  },
};

export const projectSubtitleCopy: Record<string, Partial<Record<Language, string>>> = {
  "kemahasiswaan-itera": {
    id: "Website kegiatan dan layanan kemahasiswaan",
    en: "Student Activities Website",
  },
  "ppid-itera": {
    id: "Website layanan keterbukaan informasi publik",
    en: "Website for Public Information Disclosure services",
  },
  posyandu: {
    id: "Website layanan Posyandu dan pencatatan data balita serta lansia",
    en: "Website for Posyandu services and data recording for toddlers and the elderly",
  },
  "hidroponic-system": {
    id: "Sistem monitoring dan kontrol tanaman hidroponik berbasis sensor IoT",
    en: "A system for monitoring and controlling hydroponic plant growth using IoT sensors",
  },
  "agenda-surat": {
    id: "Sistem pengelolaan dan pelacakan surat resmi",
    en: "A system for managing and tracking official correspondence",
  },
};

export const certificateDescriptionCopy: Record<string, Partial<Record<Language, string>>> = {
  "Assistant for Introduction to Computers and Software 1": {
    id: "Menjadi asisten praktikum pada mata kuliah Introduction to Computers and Software 1 dengan mengajarkan keterampilan di bidang Ms. Office.",
  },
  "Assistant for Introduction to Computers and Software 2": {
    id: "Menjadi asisten praktikum pada mata kuliah Introduction to Computers and Software 2 dengan mengajarkan dasar pemrograman C++.",
  },
  "AIESEC Future Leaders": {
    id: "Mengikuti program AIESEC Future Leaders untuk melatih kemampuan leadership dan memperluas relasi dengan peserta lain.",
  },
  "AIESEC Local Project": {
    id: "Menjadi volunteer dalam AIESEC Local Project bertema Widyawiyata yang berfokus pada isu pendidikan di Lampung (SDGs No. 4).",
  },
  "Nusacode Web Development Bootcamp": {
    id: "Mengikuti bootcamp Web Development dari Nusacode, mempelajari pengembangan web, dan membuat project menggunakan Laravel.",
  },
  "HMIF Mengabdi": {
    id: "Mengikuti program HMIF Mengabdi dan mendapatkan pengalaman dalam kegiatan pengabdian masyarakat serta leadership.",
  },
};

export const experienceCopy: Record<
  string,
  Partial<Record<Language, { role?: string; detail?: string }>>
> = {
  "Database Lab Assistant": {
    id: {
      role: "Asisten Laboratorium Basis Data",
      detail:
        "Membantu mahasiswa memahami konsep basis data, query SQL, dan sistem manajemen basis data melalui sesi praktikum.",
    },
  },
  "Assistant for the Capita Selecta Course": {
    id: {
      role: "Asisten Mata Kuliah Kapita Selekta",
      detail:
        "Membimbing mahasiswa dalam diskusi, tugas, dan penyelesaian masalah terkait topik pilihan informatika.",
    },
  },
  "Internship at Public Relations ITERA : Frontend Developer": {
    id: {
      role: "Magang di Humas ITERA: Frontend Developer",
      detail:
        "Berkontribusi dalam pengembangan website PPID dengan fokus pada frontend development dan peningkatan pengalaman pengguna.",
    },
  },
  "Assistant for Introduction to Computers and Software 2": {
    id: {
      role: "Asisten Introduction to Computers and Software 2",
      detail:
        "Menjadi asisten praktikum mata kuliah Introduction to Computers and Software dengan mengajarkan dasar bahasa pemrograman C++.",
    },
  },
  "Assistant for Introduction to Computers and Software 1": {
    id: {
      role: "Asisten Introduction to Computers and Software 1",
      detail:
        "Menjadi asisten praktikum pada mata kuliah Introduction to Computers and Software 1 dengan mengajarkan keterampilan di bidang Ms. Office.",
    },
  },
};
