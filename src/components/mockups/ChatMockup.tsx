import React from "react";
import { ArrowLeft, MoreVertical, Phone, Paperclip, Send, CheckCheck } from "lucide-react";

export default function ChatMockup() {
  return (
    <div className="relative w-full h-full bg-[#f8f9fc] font-sans flex flex-col">
      {/* Header */}
      <div className="bg-white px-4 pt-10 pb-3 flex items-center justify-between shadow-sm z-20">
        <div className="flex items-center gap-3">
          <div className="p-2 -ml-2 rounded-full hover:bg-slate-100">
            <ArrowLeft className="w-5 h-5 text-slate-700" />
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="w-9 h-9 rounded-full bg-slate-200 overflow-hidden border border-slate-100">
                <img src="https://i.pravatar.cc/150?img=11" alt="Worker" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-[13px] font-bold text-slate-800 leading-none mb-1">Carlos Mendoza</span>
              <span className="text-[10px] font-medium text-slate-400 leading-none">Plomero Profesional</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <div className="p-2 rounded-full hover:bg-slate-100">
            <Phone className="w-4 h-4 text-brand-primary" />
          </div>
          <div className="p-2 rounded-full hover:bg-slate-100">
            <MoreVertical className="w-4 h-4 text-slate-600" />
          </div>
        </div>
      </div>

      {/* Job Info Banner */}
      <div className="bg-white border-b border-slate-100 p-3 flex items-center justify-between z-10 shadow-sm relative">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-slate-100 overflow-hidden border border-slate-200 shrink-0">
            {/* Simulated job image */}
            <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400 text-xs">
              🖼️
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-[12px] font-bold text-slate-800">Reparación de tubería</span>
            <span className="text-[10px] text-slate-500">Av. El Trillo 123</span>
          </div>
        </div>
        <div className="bg-brand-primary/10 px-2 py-1 rounded-md">
          <span className="text-[11px] font-bold text-brand-primary">Bs 150</span>
        </div>
      </div>

      {/* Chat Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
        <div className="flex justify-center mb-2">
          <span className="bg-slate-200 text-slate-500 px-3 py-1 rounded-full text-[9px] font-medium">
            Hoy, 10:30 AM
          </span>
        </div>

        {/* Client message (Right) */}
        <div className="flex flex-col items-end gap-1">
          <div className="bg-brand-primary text-white p-3 rounded-2xl rounded-tr-sm max-w-[85%] shadow-sm">
            <p className="text-[12px] leading-relaxed">Hola Carlos, tengo una fuga en la tubería del lavaplatos. ¿Podrías revisarlo hoy?</p>
          </div>
          <div className="flex items-center gap-1 mr-1">
            <span className="text-[9px] text-slate-400">10:32 AM</span>
            <CheckCheck className="w-3 h-3 text-brand-primary" />
          </div>
        </div>

        {/* Worker message (Left) */}
        <div className="flex flex-col items-start gap-1">
          <div className="bg-white text-slate-700 p-3 rounded-2xl rounded-tl-sm max-w-[85%] shadow-sm border border-slate-100">
            <p className="text-[12px] leading-relaxed">¡Claro que sí! Estoy cerca de la zona. Llego en 20 minutos.</p>
          </div>
          <span className="text-[9px] text-slate-400 ml-1">10:35 AM</span>
        </div>

        {/* Notification Bubble */}
        <div className="flex justify-center mt-2 mb-2">
          <div className="bg-orange-50 border border-orange-100 text-orange-600 px-3 py-1.5 rounded-xl text-[10px] font-medium flex items-center gap-1.5 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            Carlos está en camino
          </div>
        </div>
      </div>

      {/* Message Input */}
      <div className="bg-white p-3 border-t border-slate-100 flex items-center gap-2 pb-6">
        <div className="p-2 rounded-full hover:bg-slate-100 bg-slate-50 text-slate-500">
          <Paperclip className="w-5 h-5" />
        </div>
        <div className="flex-1 bg-slate-50 border border-slate-100 rounded-full px-4 py-2.5 flex items-center">
          <span className="text-[12px] text-slate-400">Escribe un mensaje...</span>
        </div>
        <div className="p-2.5 rounded-full bg-brand-primary text-white shadow-md shadow-brand-primary/20">
          <Send className="w-4 h-4 ml-0.5" />
        </div>
      </div>
    </div>
  );
}
