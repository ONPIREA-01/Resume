"use client";

import Image from "next/image";
import { useState } from "react";
// หากสร้างไฟล์ css แยกต่างหากในโฟลเดอร์เดียวกัน อย่าลืม import ไฟล์ด้วย
import "../app/globals.css";

export default function Home() {
  const [activeTab, setActiveTab] = useState("ABOUT");
  const [selectedCard, setSelectedCard] = useState<any>(null);

  const handleTabChange = (tab: any) => {
    setActiveTab(tab);
    setSelectedCard(null);
  };

  const experienceData = [
    {
      id: 1,
      title: "Surin Hospital (IT Support)",
      year: "2025 - 2026",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
      ),
      summary: "Managed and maintained workplace technology infrastructure, resolving hardware, software, and network issues. Served as the primary helpdesk contact, delivering prompt technical solutions and user support to optimize system workflow and minimize downtime.",
      sections: [
        {
          title: "Technical Support & Troubleshooting",
          items: [
            "Managed and maintained computer systems, network infrastructure, and internal IT equipment.",
            "Provided helpdesk support, offering technical guidance and troubleshooting assistance to end-users.",
            "Analyzed and resolved real-time user pain points, which sparked my passion for UX/UI"
          ]
        },
        {
          title: "Network Infrastructure Monitoring",
          items: [
            "Network Infrastructure Monitoring: Monitored and troubleshooted network connectivity and internet issues (LAN/Wi-Fi), optimizing network stability and ensuring secure access for users"
          ]
        },
        {
          title: "Incident Management & Documentation",
          items: [
            "Incident Management & Documentation: Logged and tracked technical issues, documented troubleshooting processes, and assisted in managing the organization's IT asset inventory."
          ]
        }
      ],
      images: [
        "/images/work1.jpg",
        "/images/IMG_4370.jpg"
      ]
    },
    {
      id: 2,
      title: "Frontend Developer",
      year: "2024 - 2026",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
      ),
      summary: "Built and optimized high-performance, responsive web interfaces using Tailwind CSS and modern JavaScript frameworks. Focused on turning design concepts into clean, functional code while ensuring seamless integration with backend services.",
      sections: [
        {
          title: "Responsibilities",
          items: [
            "พัฒนาส่วนติดต่อผู้ใช้งาน (UI) ของเว็บแอปพลิเคชันให้เป็น Responsive ใช้งานได้ดีบนทุกอุปกรณ์",
            "ทำงานร่วมกับระบบหลังบ้าน (Backend) เช่น Java Spring Boot ในการพัฒนา POS & LMS Systems"
          ]
        },
        {
          title: "Tech Stack",
          items: [
            "JavaScript, React.js, Next.js",
            "Tailwind CSS, HTML5, CSS3"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "UX/UI Designer",
      year: "2025 - 2026",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
      ),
      summary: "Developed and designed responsive user interfaces (UI) for web applications to ensure an optimal user experience (UX) across all devices. Utilized modern frontend technologies, including HTML, CSS, JavaScript, and Tailwind CSS.",
      sections: [
        {
          title: "Design Projects",
          items: [
            "ออกแบบ Wireframe และ Prototype เน้นความสวยงามและใช้งานง่าย",
            "ปรับปรุงระบบ ITeacher และหน้าเว็บไซต์หลักของวิทยาลัยอาชีวศึกษาสุรินทร์ (SRVC Portal)",
            "ผสมผสานทักษะด้านการออกแบบเข้ากับการเขียนโค้ด เพื่อสร้างระบบที่สมบูรณ์ทั้งภาพลักษณ์และการใช้งานจริง"
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Surin Vocational College",
      year: "2024 - 2026",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6"></path></svg>
      ),
      summary: "Successfully graduated from Surin Vocational College with a Higher Vocational Diploma in Computer Programming, achieving a cumulative GPA of 3.29.",
      sections: [
        {
          title: "Education Profile",
          items: [
            "จบการศึกษาระดับประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)",
            "สาขาวิชา: คอมพิวเตอร์โปรแกรมเมอร์",
            "ผลการเรียนเฉลี่ยสะสม (GPA): 3.29"
          ]
        }
      ]
    }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-emerald-400 via-teal-400 to-green-500 flex justify-center items-center font-sans text-gray-800 transition-all duration-700 ease-in-out ${activeTab === "ABOUT" ? "p-4 md:p-8 lg:p-12" : "p-4 md:p-4 lg:p-6"
      }`}>

      <main className={`w-full flex flex-col lg:flex-row h-auto lg:h-[800px] relative transition-all duration-700 ease-in-out ${activeTab === "ABOUT" ? "max-w-7xl" : "max-w-full"
        }`}>

        <nav className="w-full lg:w-24 bg-white rounded-xl shadow-xl flex lg:flex-col items-center py-6 px-5 lg:px-0 gap-7 lg:gap-9 overflow-x-auto lg:overflow-visible shrink-0 z-20">
          <div className="hidden lg:flex w-full justify-center cursor-pointer mb-2">
            <svg className="w-7 h-7 text-gray-700 hover:text-green-500 hover:scale-110 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </div>

          {[
            { id: "ABOUT", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path> },
            { id: "RESUME", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path> },
            { id: "WORKS", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> },
            { id: "BLOG", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path> },
            { id: "CONTACT", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> }
          ].map((tab) => (
            <div key={tab.id} onClick={() => handleTabChange(tab.id)} className={`group flex flex-col items-center cursor-pointer shrink-0 transition-all duration-300 transform hover:-translate-y-1 ${activeTab === tab.id ? "text-green-500 scale-110" : "text-gray-400 hover:text-green-500"}`}>
              <svg className="w-6 h-6 mb-1 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">{tab.icon}</svg>
              <span className="text-[10px] font-bold tracking-wider">{tab.id}</span>
            </div>
          ))}
        </nav>

        <aside
          className={`transition-all duration-700 ease-in-out shrink-0 overflow-hidden flex flex-col justify-start ${activeTab === "ABOUT"
              ? "max-h-[1500px] lg:max-h-none w-full lg:w-[400px] opacity-100 mt-6 lg:mt-0 lg:ml-8"
              : "max-h-0 lg:max-h-none w-full lg:w-0 opacity-0 mt-0 lg:ml-0 border-0"
            }`}
        >
          <div className="w-full lg:w-[400px] lg:min-w-[400px] min-w-[340px] h-full flex flex-col bg-white rounded-xl shadow-xl overflow-hidden mx-auto">
            {/* เรียกใช้ class .clip-profile ที่เราสร้างไว้ในไฟล์ css แทน */}
            <div className="relative w-full h-[400px] bg-gray-200 overflow-hidden group clip-profile">
              <div className="w-full h-full bg-slate-300 flex items-center justify-center text-slate-500">
                <img src="/images/me.png" alt="Profile Picture" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center pt-4 px-8 text-center">
              <h1 className="text-3xl font-bold text-gray-800 whitespace-nowrap animate-slide-up" style={{ animationDelay: "0.2s" }}>Pannathon Sekegul</h1>
              <p className="text-green-500 font-medium mt-2 whitespace-nowrap animate-slide-up" style={{ animationDelay: "0.3s" }}>Frontend Developer</p>

              <div className="flex gap-5 mt-6 text-gray-500 animate-slide-up" style={{ animationDelay: "0.4s" }}>
                {/* Facebook */}
                <span className="cursor-pointer hover:text-green-500 hover:scale-110 transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                  </svg>
                </span>

                {/* Instagram */}
                <span className="cursor-pointer hover:text-green-500 hover:scale-110 transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
                  </svg>
                </span>

                {/* GitHub */}
                <span className="cursor-pointer hover:text-green-500 hover:scale-110 transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"></path>
                  </svg>
                </span>
              </div>
            </div>

            <div className="border-t border-gray-100 flex h-16 w-full text-xs font-bold text-gray-700 mt-6 tracking-wide animate-slide-up" style={{ animationDelay: "0.5s" }}>
              <button className="flex-1 flex items-center justify-center gap-2 hover:text-green-500 hover:bg-gray-50 transition-colors border-r border-gray-100">
                DOWNLOAD CV
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 hover:text-green-500 hover:bg-gray-50 transition-colors">
                CONTACT ME
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
              </button>
            </div>
          </div>
        </aside>

        <section className="flex-1 bg-white rounded-xl shadow-xl overflow-y-auto p-9 lg:p-14 z-0 relative transition-all duration-700 ease-in-out mt-6 lg:mt-0 lg:ml-8">

          {activeTab === "ABOUT" && (
            <div key="about" className="h-full">
              <h2 className="text-3xl font-bold mb-8 border-b border-gray-100 pb-4 animate-slide-right">
                <span className="text-green-500 text-4xl">A</span>bout Me
              </h2>

              <div className="flex flex-col gap-10">
                <div className="w-full text-gray-500 leading-relaxed text-base animate-slide-up" style={{ animationDelay: "0.2s" }}>
                  <p className="font-bold text-gray-800 text-xl mb-3">Hello! I'm Pannathon Sekegul.</p>
                  <p>
                    Starting my career in IT Support gave me a deep understanding of user pain points. Transitioning into a Frontend Developer & UX/UI Designer, I now blend this user-centric mindset with design and frontend coding skills to build web applications that are business-driven, visually stunning, and intuitive. My ultimate goal is to create self-supporting systems that deliver the seamless, ultimate user experience.
                  </p>
                </div>

                <div className="w-full md:w-1/2">
                  <ul className="space-y-4 text-base">
                    {[
                      { label: "Name", value: "Green" },
                      { label: "Birthday", value: "10 April 2005" },
                      { label: "Age", value: "20" },
                      { label: "Email", value: "foggittv67@gmail.com" },
                      { label: "Phone", value: "098-754-4115" }
                    ].map((info, idx) => (
                      <li key={idx} className="flex justify-between border-b border-gray-100 pb-2 animate-slide-right" style={{ animationDelay: `${0.3 + (idx * 0.1)}s` }}>
                        <span className="bg-green-400 text-white px-2 py-0.5 rounded text-xs font-semibold">{info.label}:</span>
                        <span className="text-gray-700 font-medium">{info.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab !== "ABOUT" && (
            <div key="resume" className="h-full">
              {!selectedCard ? (
                <>
                  <h2 className="text-3xl font-bold mb-8 border-b border-gray-100 pb-4 animate-slide-right">
                    <span className="text-green-500 text-4xl">{activeTab.charAt(0)}</span>{activeTab.slice(1).toLowerCase()} & Details
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                    {experienceData.map((item, index) => (
                      <div
                        key={item.id}
                        onClick={() => setSelectedCard(item)}
                        className="group text-center border border-gray-100 rounded-xl p-8 cursor-pointer hover:shadow-xl hover:-translate-y-2 hover:border-green-300 transition-all duration-500 flex flex-col items-center justify-between min-h-[300px] animate-slide-up"
                        style={{ animationDelay: `${0.1 + (index * 0.15)}s` }}
                      >
                        <div className="w-14 h-14 bg-green-400 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-sm shrink-0 group-hover:scale-110 group-hover:bg-green-500 transition-all duration-300">
                          {item.icon}
                        </div>
                        <h3 className="font-bold text-gray-800">{item.title}</h3>
                        <p className="text-xs font-bold text-green-500 my-2 bg-green-50 px-2 py-1 rounded-full">{item.year}</p>
                        <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
                          {item.summary}
                        </p>
                        <div className="mt-4 text-green-500 text-xs font-bold flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                          Read More <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div key={selectedCard.id}>
                  <button
                    onClick={() => setSelectedCard(null)}
                    className="mb-8 flex items-center text-gray-400 hover:text-green-500 font-bold transition-colors text-base hover:-translate-x-1 animate-slide-right"
                  >
                    <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                    Back to List
                  </button>

                  <div className="border border-gray-100 rounded-2xl p-8 md:p-12 shadow-sm relative overflow-hidden animate-slide-up" style={{ animationDelay: "0.1s" }}>
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-50 rounded-full opacity-50 z-0"></div>

                    <div className="relative z-10">
                      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 mb-8 border-b border-gray-100 pb-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
                        <div className="w-28 h-28 bg-green-400 rounded-full flex items-center justify-center text-white shadow-md shrink-0">
                          <div className="scale-150">{selectedCard.icon}</div>
                        </div>
                        <div className="text-center sm:text-left">
                          <h3 className="text-3xl font-bold text-gray-800">{selectedCard.title}</h3>
                          <span className="inline-block mt-2 px-3 py-1 bg-green-50 text-green-600 text-xs font-bold rounded-full">
                            {selectedCard.year}
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-600 leading-relaxed mb-8 text-base md:text-lg animate-slide-up" style={{ animationDelay: "0.3s" }}>
                        {selectedCard.summary}
                      </p>

                      <div className="flex flex-col gap-6">
                        {selectedCard.sections.map((section, idx) => (
                          <div key={idx} className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:shadow-md transition-shadow animate-slide-up" style={{ animationDelay: `${0.4 + (idx * 0.1)}s` }}>
                            <h4 className="font-bold text-gray-800 text-xl mb-4 flex items-center gap-2">
                              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                              {section.title}
                            </h4>
                            <ul className="space-y-3 text-base text-gray-600">
                              {section.items.map((item, itemIdx) => (
                                <li key={itemIdx} className="flex items-start gap-3">
                                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 shrink-0"></span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      {selectedCard.images && selectedCard.images.length > 0 && (
                        <div className="mt-8 pt-8 border-t border-gray-100 animate-slide-up" style={{ animationDelay: `${0.4 + (selectedCard.sections.length * 0.1)}s` }}>
                          <h4 className="font-bold text-gray-800 mb-6 flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                            Project Gallery
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {selectedCard.images.map((imgUrl, idx) => (
                              <div key={idx} className="relative h-80 md:h-[500px] rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-shadow group bg-gray-100 cursor-pointer">
                                <img
                                  src={imgUrl}
                                  alt={`Project snapshot ${idx + 1}`}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-transparent group-hover:bg-black/10 transition-all duration-300"></div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}