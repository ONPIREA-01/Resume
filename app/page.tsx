"use client";

import { useState } from "react";
import "../app/globals.css";

export default function Home() {
  const [activeTab, setActiveTab] = useState("ABOUT");
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
  const [lang, setLang] = useState<"EN" | "TH">("EN");

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setSelectedProjectId(null);
  };

  const content = {
    EN: {
      nav: { ABOUT: "ABOUT", PORTFOLIO: "PORTFOLIO", WORKS: "WORKS", BLOG: "BLOG", CONTACT: "CONTACT" },
      role: "Frontend Developer",
      downloadCv: "DOWNLOAD CV",
      contactMe: "CONTACT ME",
      aboutTitle: "A",
      aboutTitleRest: "bout Me",
      hello: "Hello! I'm Pannathon Sekegul.",
      aboutDesc: "Starting my career in IT Support gave me a deep understanding of user pain points. Transitioning into a Frontend Developer & UX/UI Designer, I now blend this user-centric mindset with design and frontend coding skills to build web applications that are business-driven, visually stunning, and intuitive. My ultimate goal is to create self-supporting systems that deliver the seamless, ultimate user experience.",
      info: [
        { label: "Name", value: "Green" },
        { label: "Birthday", value: "10 April 2005" },
        { label: "Age", value: "20" },
        { label: "Email", value: "foggittv67@gmail.com" },
        { label: "Phone", value: "098-754-4115" },
        { label: "Education", value: "Surin Vocational College" },
        { label: "Major", value: "Computer Programming (High Voc. Cert.)" },
        { label: "GPA", value: "3.29" }
      ],
      detailsTitle: "Project Details",
      backToList: "Back to Portfolio",
      projectGallery: "Project Gallery",
      viewProject: "View Project",
      comingSoon: "Coming Soon...",
      comingSoonDesc: "This section is currently under construction.",
      
      works: [
        {
          id: 1,
          title: "Surin Hospital",
          role: "IT Support",
          year: "Oct 2025 - Feb 2026",
          icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>,
          desc: "Managed workplace technology infrastructure, resolving hardware, software, and network issues. Served as the primary helpdesk contact.",
          tasks: [
            "Provided technical guidance and troubleshooting assistance to end-users.",
            "Monitored network connectivity (LAN/Wi-Fi) to optimize stability.",
            "Logged and tracked technical issues and managed IT asset inventory."
          ]
        },
        {
          id: 2,
          title: "Surin Vocational College",
          role: "Frontend & UX/UI Designer",
          year: "May 2024 - March 2026",
          icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>,
          desc: "Designed and developed responsive web interfaces for internal college systems using Tailwind CSS and modern JavaScript frameworks.",
          tasks: [
            "Revamped the ITeacher system and SRVC Portal for better UX/UI.",
            "Collaborated with backend systems (Java Spring Boot) for integration.",
            "Designed wireframes and prototypes focusing on aesthetics and usability."
          ]
        },
        {
          id: 3,
          title: "Surin Vocational College",
          role: "High Vocational Certificate Student",
          year: "May 2024 - March 2026",
          icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6"></path></svg>,
          desc: "Successfully graduated with a Higher Vocational Diploma (ปวส.) in Computer Programming, achieving a cumulative GPA of 3.29.",
          tasks: [
            "Studied advanced programming concepts, database management, and web development.",
            "Developed various academic projects focusing on full-stack web applications."
          ]
        }
      ],

      portfolio: [
        {
          id: 101,
          title: "IT Support (Surin Hospital)",
          category: "IT Support",
          thumb: "/images/work1.jpg",
          images: [
            "/images/work1.jpg", 
            "/images/it1.jpg",
            "/images/it2.jpg",
            "/images/it3.jpg",
          ],
          summary: "Managed workplace technology infrastructure at Surin Hospital. Served as the primary helpdesk contact, resolving hardware, software, and network issues to ensure smooth daily operations.",
          tech: "Hardware Troubleshooting, Network Maintenance, Helpdesk",
          features: ["Technical Support", "Network Monitoring", "IT Asset Management"]
        },
        {
          id: 102,
          title: "ITA Website for Surin Vocational College",
          category: "UX/UI & Frontend",
          thumb: "/images/ITA.jpg",
          images: [
            "/images/project.png",
            "/images/ITA_2.png",
            "/images/login-ITA.png"
          ],
          summary: "Upgraded the user interface of the internal ITeacher system to streamline the workflow for educators and administrators. Focused on reducing friction in daily tasks and making the dashboard more intuitive.",
          tech: "JavaScript, React, Tailwind CSS",
          features: ["Dashboard Interface", "User-friendly Navigation", "Data Visualization"],
          figmaLink: "https://www.figma.com/design/CLZhx0Xf1tizxxtspRiI5r/ITA-LOGO---WEB?node-id=3-2&t=rfSIqURP9digwqtH-1" 
        },
        {
          id: 103,
          title: "Point of Sale (POS) System",
          category: "Fullstack Integration",
          thumb: "/images/login.png",
          images: [
            "/images/pos_index.png",
            "/images/2.png",
            "/images/3.png",
            "/images/4.png",
            "/images/5.png",
            "/images/6.png",
            "/images/7.png",
            "/images/8.png",
            "/images/9.png",
            "/images/10.png",
            "/images/11.png",
            "/images/12.png",
          ],
          summary: "Developed a responsive frontend for a POS system, integrating seamlessly with a Java Spring Boot backend. The system handles real-time transaction processing and inventory tracking.",
          tech: "Next.js, Java Spring Boot, REST APIs, Tailwind CSS, Laravel",
          features: ["Real-time Sync", "API Integration", "Secure Checkout Flow"]
        }
      ]
    },
    TH: {
      nav: { ABOUT: "เกี่ยวกับฉัน", PORTFOLIO: "ผลงาน", WORKS: "ประสบการณ์", BLOG: "บล็อก", CONTACT: "ติดต่อ" },
      role: "นักพัฒนาฟรอนต์เอนด์",
      downloadCv: "ดาวน์โหลด CV",
      contactMe: "ติดต่อฉัน",
      aboutTitle: "เ",
      aboutTitleRest: "กี่ยวกับฉัน",
      hello: "สวัสดีครับ! ผม ปัณณธร เสขะกุล",
      aboutDesc: "จากจุดเริ่มต้นในการเป็น IT Support ทำให้ผมเข้าใจปัญหาของผู้ใช้งาน (Pain points) อย่างลึกซึ้ง เมื่อก้าวเข้ามาสู่บทบาท Frontend Developer และ UX/UI Designer ผมจึงนำความเข้าใจนี้มาผสานเข้ากับทักษะการออกแบบและการเขียนโค้ด เพื่อสร้างเว็บแอปพลิเคชันที่ตอบโจทย์ธุรกิจ สวยงาม และใช้งานง่าย เป้าหมายสูงสุดของผมคือการสร้างระบบที่ทำงานได้ด้วยตัวเองและมอบประสบการณ์ที่ดีที่สุดให้กับผู้ใช้งาน",
      info: [
        { label: "ชื่อเล่น", value: "กรีน" },
        { label: "วันเกิด", value: "10 เมษายน 2548" },
        { label: "อายุ", value: "20 ปี" },
        { label: "อีเมล", value: "foggittv67@gmail.com" },
        { label: "โทรศัพท์", value: "098-754-4115" },
        { label: "การศึกษา", value: "วิทยาลัยอาชีวศึกษาสุรินทร์" },
        { label: "สาขา", value: "คอมพิวเตอร์โปรแกรมเมอร์ (ปวส.)" },
        { label: "เกรดเฉลี่ย", value: "3.29" }
      ],
      detailsTitle: "รายละเอียดผลงาน",
      backToList: "กลับหน้ารวมผลงาน",
      projectGallery: "รูปภาพโปรเจกต์",
      viewProject: "ดูรายละเอียด",
      comingSoon: "เร็วๆ นี้...",
      comingSoonDesc: "เนื้อหาส่วนนี้กำลังอยู่ในช่วงการพัฒนาครับ",

      works: [
        {
          id: 1,
          title: "โรงพยาบาลสุรินทร์",
          role: "IT Support",
          year: "ต.ค 2568 - ก.พ 2569",
          icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>,
          desc: "ดูแลและบำรุงรักษาระบบเทคโนโลยีสารสนเทศ แก้ไขปัญหาด้านฮาร์ดแวร์ ซอฟต์แวร์ และเครือข่าย เป็นผู้ติดต่อหลักของ Helpdesk ให้บริการช่วยเหลือและแก้ไขปัญหาทางเทคนิคอย่างรวดเร็ว",
          tasks: [
            "ให้คำแนะนำทางเทคนิคและช่วยแก้ไขปัญหาให้กับผู้ใช้งาน (End-users)",
            "ตรวจสอบและแก้ไขปัญหาการเชื่อมต่อเครือข่าย (LAN/Wi-Fi)",
            "บันทึกและติดตามปัญหาทางเทคนิค และช่วยจัดการบัญชีทรัพย์สินไอที"
          ]
        },
        {
          id: 2,
          title: "วิทยาลัยอาชีวศึกษาสุรินทร์",
          role: "นักพัฒนาฟรอนต์เอนด์ & UX/UI",
          year: "พ.ค. 2568 - มี.ค. 2569",
          icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>,
          desc: "ออกแบบและพัฒนาหน้าเว็บแอปพลิเคชันสำหรับระบบภายในของวิทยาลัย โดยใช้ Tailwind CSS และ JavaScript Framework สมัยใหม่",
          tasks: [
            "ออกแบบระบบ Website ITA ด้วยโปรแกรม Figma ให้กับเว็บไซต์หลักของวิทยาลัย (SRVC Portal)",
            "ทำงานร่วมกับระบบหลังบ้าน (Backend) เช่น Java Spring Boot",
            "ออกแบบ Wireframe และ Prototype เน้นความสวยงามและใช้งานง่าย"
          ]
        },
        {
          id: 3,
          title: "วิทยาลัยอาชีวศึกษาสุรินทร์",
          role: "นักศึกษาระดับ ปวส.",
          year: "พ.ค. 2568 - มี.ค. 2569",
          icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6"></path></svg>,
          desc: "สำเร็จการศึกษาระดับประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.) สาขาวิชาคอมพิวเตอร์โปรแกรมเมอร์ ด้วยผลการเรียนเฉลี่ยสะสม 3.29",
          tasks: [
            "ศึกษาแนวคิดการเขียนโปรแกรม การจัดการฐานข้อมูล และการพัฒนาเว็บไซต์",
            "พัฒนาโปรเจกต์เชิงวิชาการต่างๆ โดยเน้นที่การทำ Full-stack Web Application"
          ]
        }
      ],

      portfolio: [
        {
          id: 101,
          title: "IT Support (โรงพยาบาลสุรินทร์)",
          category: "IT Support",
          thumb: "/images/work1.jpg",
          images: [
            "/images/work1.jpg", 
            "/images/it1.jpg",
            "/images/it2.jpg",
            "/images/it3.jpg",
          ],
          summary: "ดูแลและบำรุงรักษาระบบเทคโนโลยีสารสนเทศ แก้ไขปัญหาด้านฮาร์ดแวร์ ซอฟต์แวร์ และเครือข่าย เป็นผู้ติดต่อหลักของ Helpdesk ให้บริการช่วยเหลือและแก้ไขปัญหาทางเทคนิคอย่างรวดเร็ว",
          tech: "ซ่อมบำรุงฮาร์ดแวร์, ระบบเครือข่าย, Helpdesk",
          features: ["บริการช่วยเหลือทางเทคนิค", "ตรวจสอบและดูแลเครือข่าย", "จัดการทรัพยากรไอที"]
        },
        {
          id: 102,
          title: "เว็บไซต์ ITA สำหรับวิทยาลัยอาชีวศึกษาสุรินทร์",
          category: "ออกแบบ UX/UI & ฟรอนต์เอนด์",
          thumb: "/images/ITA.jpg",
          images: ["/images/project.png"],
          summary: "ปรับปรุงส่วนติดต่อผู้ใช้งาน (UI) ของระบบ ITeacher ภายในวิทยาลัย เพื่อลดความซับซ้อนของหน้าจอ และช่วยให้บุคลากรสามารถจัดการงานประจำวันได้อย่างลื่นไหลมากขึ้น",
          tech: "JavaScript, HTML5, CSS3, Tailwind",
          features: ["หน้าต่าง Dashboard", "เมนูนำทางที่ใช้งานง่าย", "การนำเสนอข้อมูลภาพ"],
          figmaLink: "https://www.figma.com/design/CLZhx0Xf1tizxxtspRiI5r/ITA-LOGO---WEB?node-id=3-2&t=rfSIqURP9digwqtH-1",
        },
        {
          id: 103,
          title: "ระบบจัดการหน้าร้าน (POS System)",
          category: "พัฒนา Fullstack",
          thumb: "/images/login.png",
          images: ["/images/pos_index.png"],
          summary: "พัฒนาส่วนหน้าบ้านของระบบจัดการจุดขาย (POS) ให้มีการตอบสนองที่รวดเร็ว พร้อมเชื่อมต่อ API เข้ากับระบบหลังบ้านที่เขียนด้วย Java Spring Boot เพื่อประมวลผลการทำรายการแบบเรียลไทม์",
          tech: "React.js, Java Spring Boot, REST APIs",
          features: ["เชื่อมต่อข้อมูลเรียลไทม์", "การเรียกใช้ API", "ระบบชำระเงินที่ปลอดภัย"]
        }
      ]
    }
  };

  const t = content[lang];
  const selectedProject = selectedProjectId ? t.portfolio.find(p => p.id === selectedProjectId) : null;

  return (
    <div className={`min-h-screen bg-gradient-to-br from-emerald-400 via-teal-400 to-green-500 flex justify-center items-center font-sans text-gray-800 transition-all duration-700 ease-in-out relative ${activeTab === "ABOUT" ? "p-4 md:p-8 lg:p-12" : "p-4 md:p-4 lg:p-6"}`}>

      {/* ปุ่มสลับภาษา */}
      <button
        onClick={() => setLang(lang === "EN" ? "TH" : "EN")}
        className="absolute top-4 right-4 md:top-8 md:right-8 z-50 bg-white shadow-lg rounded-full px-4 py-2 font-bold text-gray-700 hover:text-green-500 hover:scale-105 transition-all flex items-center gap-2 text-sm border border-gray-100"
      >
        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path></svg>
        {lang === "EN" ? "🇹🇭 ภาษาไทย" : "🇬🇧 English"}
      </button>

      <main className={`w-full flex flex-col lg:flex-row h-auto lg:h-[800px] relative transition-all duration-700 ease-in-out ${activeTab === "ABOUT" ? "max-w-7xl" : "max-w-full"}`}>

        {/* Sidebar Nav */}
        <nav className="w-full lg:w-24 bg-white rounded-xl shadow-xl flex lg:flex-col items-center py-6 px-5 lg:px-0 gap-7 lg:gap-9 overflow-x-auto lg:overflow-visible shrink-0 z-20">
          <div className="hidden lg:flex w-full justify-center cursor-pointer mb-2">
            <svg className="w-7 h-7 text-gray-700 hover:text-green-500 hover:scale-110 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </div>

          {[
            { id: "ABOUT", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path> },
            { id: "PORTFOLIO", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path> },
            { id: "WORKS", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> },
            { id: "BLOG", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path> },
            { id: "CONTACT", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> }
          ].map((tab) => (
            <div key={tab.id} onClick={() => handleTabChange(tab.id)} className={`group flex flex-col items-center cursor-pointer shrink-0 transition-all duration-300 transform hover:-translate-y-1 ${activeTab === tab.id ? "text-green-500 scale-110" : "text-gray-400 hover:text-green-500"}`}>
              <svg className="w-6 h-6 mb-1 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">{tab.icon}</svg>
              <span className="text-[10px] font-bold tracking-wider">{t.nav[tab.id as keyof typeof t.nav]}</span>
            </div>
          ))}
        </nav>

        {/* Profile Aside */}
        <aside
          className={`transition-all duration-700 ease-in-out shrink-0 overflow-hidden flex flex-col justify-start ${activeTab === "ABOUT"
            ? "max-h-[1500px] lg:max-h-none w-full lg:w-[400px] opacity-100 mt-6 lg:mt-0 lg:ml-8"
            : "max-h-0 lg:max-h-none w-full lg:w-0 opacity-0 mt-0 lg:ml-0 border-0"
            }`}
        >
          <div className="w-full lg:w-[400px] lg:min-w-[400px] min-w-[340px] h-full flex flex-col bg-white rounded-xl shadow-xl overflow-hidden mx-auto">
            <div className="relative w-full h-[400px] bg-gray-200 overflow-hidden group clip-profile">
              <div className="w-full h-full bg-slate-300 flex items-center justify-center text-slate-500">
                <img src="/images/me.png" alt="Profile Picture" className="w-full h-full object-cover object-top object-[center_10%] group-hover:scale-105 transition-transform duration-700" />              </div>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center pt-4 px-8 text-center">
              <h1 className="text-3xl font-bold text-gray-800 whitespace-nowrap animate-slide-up" style={{ animationDelay: "0.2s" }}>Pannathon Sekegul</h1>
              <p className="text-green-500 font-medium mt-2 whitespace-nowrap animate-slide-up" style={{ animationDelay: "0.3s" }}>{t.role}</p>

              {/* ===== ไอคอน Social Media (กดไปได้จริง) ===== */}
              <div className="flex gap-5 mt-6 text-gray-500 animate-slide-up" style={{ animationDelay: "0.4s" }}>
                
                {/* Facebook */}
                <a href="https://www.facebook.com/pannathorn.sekagun" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-green-500 hover:scale-110 transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path></svg>
                </a>
                
                {/* Instagram */}
                <a href="https://www.instagram.com/onpirea/" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-green-500 hover:scale-110 transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path></svg>
                </a>
                
                {/* GitHub */}
                <a href="https://github.com/ONPIREA-01" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-green-500 hover:scale-110 transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"></path></svg>
                </a>
              </div>
            </div>

            <div className="border-t border-gray-100 flex h-16 w-full text-xs font-bold text-gray-700 mt-6 tracking-wide animate-slide-up" style={{ animationDelay: "0.5s" }}>
              <button className="flex-1 flex items-center justify-center gap-2 hover:text-green-500 hover:bg-gray-50 transition-colors border-r border-gray-100">
                {t.downloadCv}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 hover:text-green-500 hover:bg-gray-50 transition-colors">
                {t.contactMe}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
              </button>
            </div>
          </div>
        </aside>

        <section className="flex-1 bg-white rounded-xl shadow-xl overflow-y-auto p-9 lg:p-14 z-0 relative transition-all duration-700 ease-in-out mt-6 lg:mt-0 lg:ml-8">

          {/* ================= ABOUT TAB ================= */}
          {activeTab === "ABOUT" && (
            <div key="about" className="h-full">
              <h2 className="text-3xl font-bold mb-8 border-b border-gray-100 pb-4 animate-slide-right">
                <span className="text-green-500 text-4xl">{t.aboutTitle}</span>{t.aboutTitleRest}
              </h2>

              <div className="flex flex-col gap-10">
                <div className="w-full text-gray-500 leading-relaxed text-base animate-slide-up" style={{ animationDelay: "0.2s" }}>
                  <p className="font-bold text-gray-800 text-xl mb-3">{t.hello}</p>
                  <p>{t.aboutDesc}</p>
                </div>

                <div className="w-full">
                  <ul className="grid mt-6 grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-base">
                    {t.info.map((info, idx) => (
                      <li key={idx} className="flex justify-between items-start border-b border-gray-100 pb-2 animate-slide-right" style={{ animationDelay: `${0.3 + (idx * 0.1)}s` }}>
                        <span className="bg-green-400 text-white px-2 py-0.5 rounded text-xs font-semibold shrink-0 mt-0.5">{info.label}:</span>
                        <span className="text-gray-700 font-medium text-right ml-4 flex-1 break-words">{info.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* ================= WORKS TAB (Timeline) ================= */}
          {activeTab === "WORKS" && (
            <div key="works" className="h-full">
              <h2 className="text-3xl font-bold mb-10 border-b border-gray-100 pb-4 animate-slide-right">
                <span className="text-green-500 text-4xl">{t.nav.WORKS.charAt(0)}</span>{t.nav.WORKS.slice(1)}
              </h2>

              <div className="relative border-l-2 border-green-200 ml-4 md:ml-6 space-y-10 pb-8">
                {t.works.map((work, idx) => (
                  <div key={work.id} className="relative pl-8 md:pl-10 animate-slide-up" style={{ animationDelay: `${0.1 + (idx * 0.15)}s` }}>
                    {/* วงกลม Icon บนเส้น Timeline */}
                    <div className="absolute -left-[25px] top-0 bg-green-400 w-12 h-12 rounded-full border-4 border-white flex items-center justify-center text-white shadow-sm">
                      {work.icon}
                    </div>

                    <div className="bg-gray-50 p-6 md:p-8 rounded-xl border border-gray-100 hover:shadow-md transition-shadow group">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors">{work.title}</h3>
                          <p className="text-green-500 font-bold text-sm mt-1">{work.role}</p>
                        </div>
                        <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap self-start md:self-auto">
                          {work.year}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">{work.desc}</p>
                      <ul className="space-y-2 text-sm text-gray-500">
                        {work.tasks.map((task, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 shrink-0"></span>
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================= PORTFOLIO TAB (Image Grid) ================= */}
          {activeTab === "PORTFOLIO" && (
            <div key="portfolio" className="h-full">
              {!selectedProject ? (
                <>
                  <h2 className="text-3xl font-bold mb-8 border-b border-gray-100 pb-4 animate-slide-right">
                    <span className="text-green-500 text-4xl">{t.nav.PORTFOLIO.charAt(0)}</span>{t.nav.PORTFOLIO.slice(1)}
                  </h2>

                  {/* เปลี่ยนเป็น 3 คอลัมน์บนจอใหญ่ เพื่อลดขนาดการ์ด */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {t.portfolio.map((proj, idx) => (
                      <div
                        key={proj.id}
                        onClick={() => setSelectedProjectId(proj.id)}
                        className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-slide-up flex flex-col h-full"
                        style={{ animationDelay: `${0.1 + (idx * 0.1)}s` }}
                      >
                        {/* รูปหน้าปก (Thumbnail) เปลี่ยนอัตราส่วนเป็น aspect-video (16:9) ให้ภาพไม่สูงเกินไป */}
                        <div className="w-full aspect-video bg-gray-100 relative overflow-hidden shrink-0">
                          <img
                            src={proj.thumb}
                            alt={proj.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            onError={(e) => { e.currentTarget.src = "/images/work1.jpg"; }}
                          />
                          {/* กล่อง Overlay เวลานำเมาส์ไปชี้ */}
                          <div className="absolute inset-0 bg-green-500/80 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-300">
                            <svg className="w-8 h-8 text-white mb-2 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                            <span className="text-white font-bold tracking-widest text-xs uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{t.viewProject}</span>
                          </div>
                        </div>
                        {/* ข้อมูลใต้รูป (จัดระเบียบใหม่ไม่ให้ตก) */}
                        <div className="p-5 flex-1 flex flex-col justify-between">
                          <div className="w-full overflow-hidden">
                            <span className="text-[10px] font-bold text-green-500 uppercase tracking-wider block truncate">{proj.category}</span>
                            <h3 className="font-bold text-gray-800 text-base mt-1 mb-2 group-hover:text-green-600 transition-colors truncate" title={proj.title}>
                              {proj.title}
                            </h3>
                          </div>
                          <div className="w-8 h-1 bg-green-400 rounded-full group-hover:w-full transition-all duration-500 mt-1"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                // หน้าต่างรายละเอียดโปรเจกต์
                <div key={selectedProject.id} className="animate-slide-right">
                  <button onClick={() => setSelectedProjectId(null)} className="mb-8 flex items-center text-gray-400 hover:text-green-500 font-bold transition-colors text-base hover:-translate-x-1">
                    <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                    {t.backToList}
                  </button>

                  <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{selectedProject.title}</h2>
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded text-xs font-bold">{selectedProject.category}</span>
                      <span className="bg-white border border-gray-200 text-gray-600 px-3 py-1 rounded text-xs font-bold flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                        {selectedProject.tech}
                      </span>

                      {/* ปุ่ม Figma จะแสดงเฉพาะโปรเจกต์ที่มี figmaLink */}
                      {selectedProject.figmaLink && (
                        <a
                          href={selectedProject.figmaLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-800 text-white hover:bg-black px-3 py-1.5 rounded-md text-xs font-bold flex items-center gap-1.5 transition-all hover:-translate-y-0.5 shadow-sm"
                        >
                          <svg className="w-3 h-3" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 28.5C19 33.7467 23.2533 38 28.5 38C33.7467 38 38 33.7467 38 28.5C38 23.2533 33.7467 19 28.5 19C23.2533 19 19 23.2533 19 28.5Z" fill="#1ABCFE" />
                            <path d="M0 47.5C0 52.7467 4.25329 57 9.5 57H19V38H9.5C4.25329 38 0 42.2533 0 47.5Z" fill="#0ACF83" />
                            <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
                            <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
                            <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
                          </svg>
                          {lang === "EN" ? "View in Figma" : "ดูงานออกแบบใน Figma"}
                        </a>
                      )}
                    </div>
                    <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                      {selectedProject.summary}
                    </p>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      Key Features
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-600">
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg text-sm border border-gray-100">
                          <span className="w-2 h-2 rounded-full bg-green-400"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <h4 className="font-bold text-gray-800 mb-6 flex items-center gap-2 border-t border-gray-100 pt-8">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    {t.projectGallery}
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-4">
                    {selectedProject.images.map((imgUrl, idx) => (
                      <div key={idx} className="relative aspect-video rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-gray-100">
                        <img
                          src={imgUrl}
                          alt={`Gallery ${idx + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          onError={(e) => { e.currentTarget.src = "/images/work1.jpg"; }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ================= BLOG / CONTACT (Coming Soon) ================= */}
          {["BLOG", "CONTACT"].includes(activeTab) && (
            <div className="h-full flex flex-col items-center justify-center text-center animate-slide-up">
              <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{t.comingSoon}</h2>
              <p className="text-gray-500">{t.comingSoonDesc}</p>
            </div>
          )}

        </section>
      </main>
    </div>
  );
}