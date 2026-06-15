import React from "react";
import { Search, MapPin, Menu, Compass, MessageSquare, User, Briefcase, Zap } from "lucide-react";

export default function ExploreMockup() {
  return (
    <div className="relative w-full h-full bg-[#f8f9fc] font-sans flex flex-col">
      {/* Map Background Simulation */}
      <div className="absolute inset-0 z-0 bg-[#e5e9ea] overflow-hidden">
        {/* Simple grid lines to simulate map */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
        {/* Fake roads */}
        <div className="absolute top-[20%] left-[-10%] w-[120%] h-4 bg-white/60 transform rotate-12"></div>
        <div className="absolute top-[-10%] left-[40%] w-3 h-[120%] bg-white/60 transform -rotate-12"></div>
        
        {/* Map Marker */}
        <div className="absolute top-[45%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <div className="bg-brand-primary p-2 rounded-full shadow-lg relative">
            <div className="w-4 h-4 bg-white rounded-full"></div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-brand-primary"></div>
          </div>
          <div className="mt-3 bg-white px-3 py-1 rounded-full text-[10px] font-bold shadow-md text-slate-800">
            Tú estás aquí
          </div>
        </div>
      </div>

      {/* Top Header */}
      <div className="relative z-10 pt-10 px-4 pb-2 bg-gradient-to-b from-white/90 to-transparent">
        <div className="flex items-center justify-between">
          <div className="bg-white p-2 rounded-full shadow-sm">
            <Menu className="w-5 h-5 text-slate-700" />
          </div>
          <div className="flex flex-col items-center bg-white px-4 py-1.5 rounded-full shadow-sm">
            <span className="text-[9px] text-slate-400 font-medium">Ubicación actual</span>
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-brand-primary" />
              <span className="text-[11px] font-bold text-slate-700">Av. El Trillo 123</span>
            </div>
          </div>
          <div className="bg-white p-2 rounded-full shadow-sm">
            <div className="w-5 h-5 rounded-full bg-slate-200 overflow-hidden">
              <User className="w-5 h-5 text-slate-500 mt-0.5" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sheet Area */}
      <div className="relative z-10 mt-auto bg-white rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.05)] flex flex-col">
        <div className="w-12 h-1 bg-slate-200 rounded-full mx-auto mt-3 mb-4"></div>
        
        <div className="px-5">
          <h2 className="text-xl font-bold text-slate-800 tracking-tight leading-tight">
            ¿Qué necesitas resolver<br />hoy?
          </h2>
          
          {/* Search Bar */}
          <div className="mt-4 flex items-center bg-slate-50 border border-slate-100 rounded-2xl px-4 py-3 shadow-inner">
            <Search className="w-5 h-5 text-slate-400 mr-3" />
            <span className="text-sm text-slate-400 flex-1">Ej. Pintar mi casa, Plomería...</span>
            <div className="bg-brand-primary p-1.5 rounded-xl text-white">
              <Zap className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mt-5 pb-6">
          <div className="px-5 mb-3 flex justify-between items-center">
            <span className="text-sm font-bold text-slate-700">Categorías Populares</span>
          </div>
          
          <div className="flex gap-3 px-5 overflow-x-auto no-scrollbar">
            {[
              { icon: "🧹", name: "Limpieza", color: "bg-blue-50 text-blue-600" },
              { icon: "🔧", name: "Plomería", color: "bg-orange-50 text-orange-600" },
              { icon: "⚡", name: "Electricidad", color: "bg-yellow-50 text-yellow-600" },
              { icon: "🎨", name: "Pintura", color: "bg-purple-50 text-purple-600" },
            ].map((cat, i) => (
              <div key={i} className="flex flex-col items-center gap-2 min-w-[70px]">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl ${cat.color} shadow-sm`}>
                  {cat.icon}
                </div>
                <span className="text-[11px] font-medium text-slate-600">{cat.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="relative z-20 bg-white border-t border-slate-100 flex justify-around items-center py-3 pb-6">
        <div className="flex flex-col items-center gap-1 text-brand-primary">
          <Compass className="w-6 h-6" />
          <span className="text-[10px] font-bold">Explorar</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-slate-400">
          <Briefcase className="w-6 h-6" />
          <span className="text-[10px] font-medium">Solicitudes</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-slate-400">
          <MessageSquare className="w-6 h-6" />
          <span className="text-[10px] font-medium">Chats</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-slate-400">
          <User className="w-6 h-6" />
          <span className="text-[10px] font-medium">Perfil</span>
        </div>
      </div>
    </div>
  );
}
