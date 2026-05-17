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
      "Mahasiswa semester akhir dengan program studi Teknik Informatika di Institut Teknologi Sumatera. Memiliki pengalaman dalam pengerjaan project dan ingin menjadi seorang software engineer.",
    aboutTitle: "Tentang Arya Pratama",
    aboutDescription:
      "Mahasiswa Teknik Informatika semester 8 di Institut Teknologi Sumatera dengan IPK 3.22/4.00, dengan pengalaman PKL selama 3 bulan sebagai frontend web developer yang berhasil mengembangkan website Pejabat Pengelola Informasi dan Dokumentasi (PPID) di ITERA dengan menggunakan teknologi Next JS dan Typescript. Memiliki portofolio proyek tugas besar mata kuliah seperti website pemantauan tanaman hidroponik dengan integrasi IoT. Dikenal sebagai fast learner dan kemampuan adaptasi yang baik. Memiliki tujuan untuk dapat mengembangkan skill fullstack development agar dapat berkontribusi pada beberapa project besar.",
    educationTitle: "Pendidikan",
    skillsTitle: "Keahlian",
    skillsDescription:
      "Beberapa teknologi dan tools yang saya gunakan untuk membangun website yang responsif, terstruktur, dan nyaman digunakan.",
    projectsTitle: "Proyek",
    projectsDescription:
      "Beberapa project yang saya kerjakan untuk melatih kemampuan membangun tampilan website yang rapi, responsif, dan sesuai kebutuhan pengguna.",
    certificateTitle: "Sertifikat",
    certificateDescription:
      "Kumpulan sertifikat, pelatihan, dan pencapaian yang mendukung proses belajar serta pengembangan kemampuan saya di bidang teknologi dan pengembangan diri.",
    experienceTitle: "Pengalaman",
    experienceDescription:
      "Kumpulan pengalaman saya dalam kegiatan akademik, organisasi, asistensi, dan praktik kerja yang membentuk kemampuan teknis, komunikasi, serta adaptasi di berbagai lingkungan.",
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
      "A final-year Informatics Engineering student at Institut Teknologi Sumatera. Experienced in project development and aspiring to become a software engineer.",
    aboutTitle: "About Arya Pratama",
    aboutDescription:
      "An 8th-semester Informatics Engineering student at Institut Teknologi Sumatera with a GPA of 3.22/4.00. Completed a 3-month internship as a frontend web developer and successfully developed the Pejabat Pengelola Informasi dan Dokumentasi (PPID) website at ITERA using Next JS and Typescript. Has a portfolio of major coursework projects, including a hydroponic plant monitoring website with IoT integration. Known as a fast learner with strong adaptability, with the goal of developing fullstack development skills to contribute to larger-scale projects.",
    educationTitle: "Education",
    skillsTitle: "Skills",
    skillsDescription:
      "Technologies and tools I use to build responsive, structured, and comfortable web experiences.",
    projectsTitle: "Projects",
    projectsDescription:
      "A selection of projects I built to practice creating clean, responsive interfaces that match user needs.",
    certificateTitle: "Certificate",
    certificateDescription:
      "A collection of certificates, training records, and achievements that support my learning journey and skill development in technology and personal growth.",
    experienceTitle: "Experience",
    experienceDescription:
      "A collection of my experiences across academic activities, organizations, assistant roles, and internships that shaped my technical, communication, and adaptability skills in different environments.",
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
