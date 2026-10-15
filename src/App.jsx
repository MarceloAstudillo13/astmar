import React, { useState } from 'react';
import { Bug, User, Globe, Activity, ShieldCheck, AlertTriangle, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function TriadaEcologica() {
  const [activeNode, setActiveNode] = useState(null);

  // Data configuration for the Triad
  const triadData = {
    agente: {
      id: 'agente',
      title: 'Agente Causal',
      subtitle: 'El factor desencadenante',
      icon: Bug,
      color: 'text-rose-400',
      bgColor: 'bg-rose-500/10',
      borderColor: 'border-rose-500',
      glow: 'shadow-[0_0_30px_rgba(244,63,94,0.5)]',
      lineColor: 'stroke-rose-500',
      position: { top: '15%', left: '50%' },
      description: 'Es cualquier elemento biológico, físico o químico cuya presencia (o a veces ausencia, como en carencias nutricionales) es indispensable para que la enfermedad se presente.',
      examples: [
        'Bacterias, virus, hongos y parásitos.',
        'Factores físicos como radiación o traumatismos.',
        'Sustancias químicas, toxinas o venenos.'
      ]
    },
    huesped: {
      id: 'huesped',
      title: 'Huésped Susceptible',
      subtitle: 'El organismo receptor',
      icon: User,
      color: 'text-sky-400',
      bgColor: 'bg-sky-500/10',
      borderColor: 'border-sky-500',
      glow: 'shadow-[0_0_30px_rgba(14,165,233,0.5)]',
      lineColor: 'stroke-sky-500',
      position: { top: '85%', left: '15%' },
      description: 'Es cualquier ser vivo (humano o animal) que en circunstancias naturales permite la subsistencia o el alojamiento de un agente causal de enfermedad.',
      examples: [
        'Factores genéticos y hereditarios.',
        'Edad, sexo y estado fisiológico.',
        'Estado del sistema inmunológico y nutricional.'
      ]
    },
    ambiente: {
      id: 'ambiente',
      title: 'Medio Ambiente',
      subtitle: 'El entorno facilitador',
      icon: Globe,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500',
      glow: 'shadow-[0_0_30px_rgba(16,185,129,0.5)]',
      lineColor: 'stroke-emerald-500',
      position: { top: '85%', left: '85%' },
      description: 'Es el conjunto de condiciones o factores físicos, biológicos y socioculturales que rodean al huésped y al agente, facilitando o previniendo su interacción.',
      examples: [
        'Clima, temperatura y humedad.',
        'Geografía y características del suelo.',
        'Condiciones de vivienda, saneamiento y nivel socioeconómico.'
      ]
    }
  };

  const activeInfo = activeNode ? triadData[activeNode] : null;

  // Helper to determine line highlights
  const isLineActive = (node1, node2) => {
    return activeNode === node1 || activeNode === node2;
  };

  const getLineColor = (node1, node2) => {
    if (activeNode === node1 || activeNode === node2) {
      return activeInfo?.lineColor || 'stroke-slate-500';
    }
    return 'stroke-slate-700';
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans p-6 md:p-12 flex flex-col items-center">
      
      {/* Header Section */}
      <header className="text-center max-w-3xl mb-12 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-sm font-medium text-slate-400 mb-6">
          <Activity className="w-4 h-4 text-indigo-400" />
          <span>Epidemiología Básica</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          La Tríada <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Ecológica</span>
        </h1>
        <p className="text-lg text-slate-400 leading-relaxed">
          El modelo tradicional de causalidad de las enfermedades. Haz clic en los nodos para descubrir cómo la interacción y el desequilibrio entre estos tres elementos provocan una enfermedad.
        </p>
      </header>

      {/* Main Content: Triangle Graphic and Details Panel */}
      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl gap-12 lg:gap-24">
        
        {/* LEFT: Interactive Graphic */}
        <div className="relative w-80 h-80 md:w-96 md:h-96 shrink-0 mt-8 lg:mt-0">
          
          {/* SVG Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            {/* Agente to Huesped */}
            <line 
              x1="50%" y1="15%" x2="15%" y2="85%" 
              strokeWidth="3" 
              strokeDasharray={isLineActive('agente', 'huesped') ? "0" : "8,8"}
              className={`transition-all duration-700 ${getLineColor('agente', 'huesped')}`}
            />
            {/* Huesped to Ambiente */}
            <line 
              x1="15%" y1="85%" x2="85%" y2="85%" 
              strokeWidth="3" 
              strokeDasharray={isLineActive('huesped', 'ambiente') ? "0" : "8,8"}
              className={`transition-all duration-700 ${getLineColor('huesped', 'ambiente')}`}
            />
            {/* Ambiente to Agente */}
            <line 
              x1="85%" y1="85%" x2="50%" y2="15%" 
              strokeWidth="3" 
              strokeDasharray={isLineActive('ambiente', 'agente') ? "0" : "8,8"}
              className={`transition-all duration-700 ${getLineColor('ambiente', 'agente')}`}
            />
          </svg>

          {/* Central Balance/Imbalance Indicator */}
          <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-10 transition-all duration-500">
            {activeNode ? (
              <div className="flex flex-col items-center animate-pulse">
                <AlertTriangle className="w-10 h-10 text-amber-500 mb-2 drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]" />
                <span className="text-xs font-bold uppercase tracking-widest text-amber-500">Desequilibrio</span>
              </div>
            ) : (
              <div className="flex flex-col items-center text-slate-500 hover:text-indigo-400 transition-colors">
                <ShieldCheck className="w-12 h-12 mb-2" />
                <span className="text-xs font-bold uppercase tracking-widest">Salud (Equilibrio)</span>
              </div>
            )}
          </div>

          {/* Render Nodes */}
          {Object.values(triadData).map((node) => {
            const Icon = node.icon;
            const isActive = activeNode === node.id;
            
            return (
              <div 
                key={node.id}
                onClick={() => setActiveNode(isActive ? null : node.id)}
                className="absolute z-20 cursor-pointer group"
                style={{
                  top: node.position.top,
                  left: node.position.left,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <div className="relative flex flex-col items-center">
                  {/* Node Title (Desktop) */}
                  <span className={`absolute -top-8 whitespace-nowrap text-sm font-bold tracking-wider uppercase transition-all duration-300 ${isActive ? node.color : 'text-slate-500 group-hover:text-slate-300'}`}>
                    {node.title}
                  </span>
                  
                  {/* Node Button */}
                  <button 
                    className={`
                      w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center 
                      transition-all duration-500 transform border-4
                      ${isActive ? `scale-110 ${node.glow} ${node.bgColor} ${node.borderColor}` : `bg-slate-900 border-slate-700 hover:border-slate-500 hover:scale-105`}
                    `}
                    aria-label={node.title}
                  >
                    <Icon className={`w-8 h-8 md:w-10 md:h-10 transition-colors duration-500 ${isActive ? node.color : 'text-slate-400'}`} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT: Details Panel */}
        <div className="w-full lg:w-[480px] h-[450px] relative perspective-1000">
          
          {/* Default state (No active node) */}
          <div 
            className={`absolute inset-0 flex flex-col items-center justify-center text-center p-8 border border-dashed border-slate-800 rounded-3xl bg-slate-900/50 transition-all duration-500 ${activeNode ? 'opacity-0 pointer-events-none scale-95' : 'opacity-100 scale-100'}`}
          >
            <ShieldCheck className="w-16 h-16 text-slate-700 mb-6" />
            <h3 className="text-2xl font-semibold text-slate-300 mb-4">Estado de Equilibrio</h3>
            <p className="text-slate-500 leading-relaxed mb-6">
              La salud es un estado de equilibrio dinámico entre el agente, el huésped y el medio ambiente. Selecciona uno de los nodos para explorar su rol en este ecosistema.
            </p>
            <div className="flex items-center gap-2 text-indigo-400 text-sm font-medium animate-pulse">
              <span>Selecciona un nodo para comenzar</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Active Node Details Card */}
          {Object.values(triadData).map((node) => {
            const isActive = activeNode === node.id;
            const Icon = node.icon;
            
            return (
              <div 
                key={`card-${node.id}`}
                className={`
                  absolute inset-0 bg-slate-900 border border-slate-800 rounded-3xl p-8 
                  shadow-2xl flex flex-col
                  transition-all duration-500 ease-out transform
                  ${isActive ? 'opacity-100 translate-x-0 pointer-events-auto z-10' : 'opacity-0 translate-x-8 pointer-events-none z-0'}
                `}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-4 rounded-2xl ${node.bgColor} border ${node.borderColor}`}>
                    <Icon className={`w-8 h-8 ${node.color}`} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-1">{node.title}</h2>
                    <p className={`${node.color} font-medium`}>{node.subtitle}</p>
                  </div>
                </div>

                <div className={`w-full h-px mb-6 bg-gradient-to-r from-transparent via-${node.borderColor.split('-')[1]}-500/50 to-transparent`} />

                <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                  <p className="text-slate-300 leading-relaxed mb-8 text-lg">
                    {node.description}
                  </p>

                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">
                    Ejemplos Comunes
                  </h4>
                  <ul className="space-y-4">
                    {node.examples.map((example, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${node.color}`} />
                        <span className="text-slate-400">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(30, 41, 59, 0.5); 
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(71, 85, 105, 0.8); 
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(100, 116, 139, 1); 
        }
      `}} />
    </div>
  );
}