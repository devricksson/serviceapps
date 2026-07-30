import React, { useState } from 'react';
import { 
  Briefcase, TrendingUp, ShieldCheck, Smartphone, 
  PieChart, Users, Target, ChevronRight, CheckCircle2, 
  MapPin, Wrench, Zap, Baby, Home, Star, PlayCircle, Search,
  Lock, CreditCard, Calendar, MessageCircle, ArrowLeft, Check
} from 'lucide-react';

const PITCH_DATA = {
  market: [
    { label: 'Población GT', value: '18M+', desc: 'Mercado total direccionable' },
    { label: 'Penetración Móvil', value: '115%', desc: 'Más celulares que habitantes' },
    { label: 'Sector Informal', value: '71%', desc: 'Técnicos sin digitalizar' },
    { label: 'Crec. Comercio Elec.', value: '35%', desc: 'Crecimiento anual en GT' }
  ],
  budget: [
    { category: 'Desarrollo y Tech (IA + Dev Senior)', amount: 12000, percent: 40, color: 'bg-blue-600' },
    { category: 'Marketing y Adquisición B2C/B2B', amount: 9000, percent: 30, color: 'bg-emerald-500' },
    { category: 'Legal (S.A., Licencias) y Admin', amount: 4500, percent: 15, color: 'bg-amber-500' },
    { category: 'Fondo de Contingencia', amount: 4500, percent: 15, color: 'bg-slate-400' }
  ],
  projections: [
    { month: 'Mes 6', users: '1,500', providers: '250', revenue: '$1,200', phase: 'Capital' },
    { month: 'Mes 12', users: '5,000', providers: '800', revenue: '$4,500', phase: 'Xela + Escuintla' },
    { month: 'Mes 18', users: '12,000', providers: '2,000', revenue: '$12,000', phase: 'Nacional' },
    { month: 'Mes 24', users: '25,000', providers: '4,500', revenue: '$28,000', phase: 'Exp. Regional' },
  ]
};

const AppDemo = () => {
  const [step, setStep] = useState('home');
  
  return (
    <div className="w-[320px] h-[650px] bg-slate-900 rounded-[2.5rem] p-3 shadow-2xl relative border-[6px] border-slate-800 mx-auto transform transition-all hover:scale-105">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-xl z-20"></div>
      
      {/* Screen */}
      <div className="bg-slate-50 w-full h-full rounded-[2rem] overflow-hidden relative shadow-inner flex flex-col">
        {step === 'home' && (
          <div className="animate-in fade-in h-full flex flex-col">
            <div className="bg-blue-900 text-white p-5 pt-8 rounded-b-2xl">
              <p className="text-xs text-blue-200">Ubicación actual</p>
              <p className="font-bold text-sm flex items-center mb-4"><MapPin className="w-3 h-3 mr-1"/> Guatemala, Zona 10</p>
              <h2 className="text-xl font-bold mb-3">¿Qué necesitas <span className="text-emerald-400">resolver</span>?</h2>
              <div className="bg-white rounded-full p-2 flex items-center text-slate-800 text-sm shadow-sm cursor-pointer">
                <Search className="w-4 h-4 ml-2 mr-2 text-slate-400" />
                Buscar servicio...
              </div>
            </div>
            <div className="p-4 flex-1 overflow-y-auto" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
              <h3 className="font-bold text-slate-800 text-sm mb-3">Servicios Rápidos</h3>
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="bg-white p-3 rounded-xl border border-slate-100 flex flex-col items-center justify-center shadow-sm cursor-pointer hover:border-blue-300 transition" onClick={() => setStep('profile')}>
                  <Wrench className="w-6 h-6 text-blue-700 mb-1" />
                  <span className="text-xs font-bold text-slate-700">Plomería</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-100 flex flex-col items-center justify-center shadow-sm cursor-pointer hover:border-blue-300 transition" onClick={() => setStep('profile')}>
                  <Zap className="w-6 h-6 text-blue-700 mb-1" />
                  <span className="text-xs font-bold text-slate-700">Electricidad</span>
                </div>
              </div>
              <h3 className="font-bold text-slate-800 text-sm mb-3">Top Expertos</h3>
              <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm cursor-pointer hover:shadow-md transition" onClick={() => setStep('profile')}>
                <div className="flex items-center mb-2">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" className="w-10 h-10 rounded-full object-cover mr-3" alt="José Morales"/>
                  <div>
                    <h4 className="font-bold text-sm text-slate-800 flex items-center">José M. <ShieldCheck className="w-3 h-3 text-emerald-500 ml-1"/></h4>
                    <p className="text-[10px] text-slate-500">Plomero Experto • 4.9 <Star className="w-2 h-2 inline text-amber-400 fill-current"/></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white border-t border-slate-200 p-3 flex justify-around text-slate-400">
               <Home className="w-5 h-5 text-blue-700" />
               <Calendar className="w-5 h-5" />
               <MessageCircle className="w-5 h-5" />
               <Users className="w-5 h-5" />
            </div>
          </div>
        )}

        {}
        {step === 'profile' && (
          <div className="animate-in slide-in-from-right h-full flex flex-col">
            <div className="bg-white p-4 pt-8 flex items-center border-b border-slate-100">
              <ChevronRight className="w-5 h-5 rotate-180 mr-2 text-slate-600 cursor-pointer" onClick={() => setStep('home')}/>
              <span className="font-bold text-sm">Perfil del Experto</span>
            </div>
            <div className="p-4 flex-1 overflow-y-auto">
              <div className="flex flex-col items-center text-center mb-4">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" className="w-16 h-16 rounded-full object-cover mb-2 shadow-sm" alt="José Morales"/>
                <h2 className="font-bold text-lg text-slate-800 flex items-center">José Morales <ShieldCheck className="w-4 h-4 text-emerald-500 ml-1"/></h2>
                <span className="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2 py-1 rounded mt-1">DPI Verificado</span>
              </div>
              <h3 className="font-bold text-slate-800 text-sm mb-2">Paquetes Disponibles</h3>
              <div className="space-y-2">
                <div className="border-2 border-blue-700 rounded-xl p-3 bg-blue-50/50 relative cursor-pointer hover:shadow-md transition" onClick={() => setStep('checkout')}>
                  <div className="absolute top-0 right-0 bg-blue-700 text-white text-[9px] font-bold px-2 py-0.5 rounded-bl-lg rounded-tr-lg">POPULAR</div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-sm text-slate-800">Reparación Menor</span>
                    <span className="font-extrabold text-blue-700">Q350</span>
                  </div>
                  <p className="text-[10px] text-slate-600">Reparación de fugas simples, cambio de grifería.</p>
                </div>
                <div className="border border-slate-200 rounded-xl p-3 bg-white cursor-pointer hover:border-blue-300 transition" onClick={() => setStep('checkout')}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-sm text-slate-800">Diagnóstico</span>
                    <span className="font-extrabold text-slate-700">Q150</span>
                  </div>
                  <p className="text-[10px] text-slate-600">Visita técnica para evaluación.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {}
        {step === 'checkout' && (
           <div className="animate-in slide-in-from-right h-full flex flex-col bg-slate-50">
             <div className="bg-white p-4 pt-8 flex items-center border-b border-slate-100">
              <ChevronRight className="w-5 h-5 rotate-180 mr-2 text-slate-600 cursor-pointer" onClick={() => setStep('profile')}/>
              <span className="font-bold text-sm">Pago en Garantía</span>
            </div>
            <div className="p-4 flex-1">
               <div className="bg-white p-3 rounded-xl shadow-sm mb-4">
                 <p className="text-[10px] text-slate-500 uppercase">Servicio a contratar</p>
                 <p className="font-bold text-sm">Reparación Menor</p>
                 <div className="flex justify-between mt-2 pt-2 border-t border-slate-100 font-bold">
                   <span>Total</span>
                   <span className="text-blue-700">Q350</span>
                 </div>
               </div>

               <div className="bg-emerald-50 border border-emerald-500 rounded-xl p-4 relative overflow-hidden shadow-sm">
                 <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[8px] font-bold px-2 py-1 rounded-bl">Pagalo®</div>
                 <h4 className="font-bold text-emerald-900 text-sm mb-2 flex items-center"><ShieldCheck className="w-4 h-4 mr-1"/> Pago Seguro</h4>
                 <p className="text-[10px] text-emerald-700 mb-4">El dinero se libera hasta que el experto finalice el trabajo.</p>
                 <button className="w-full bg-emerald-500 text-white font-bold py-2 rounded-lg text-sm shadow-md hover:bg-emerald-600 transition" onClick={() => setStep('home')}>
                   Pagar Q350
                 </button>
               </div>
            </div>
           </div>
        )}
      </div>
    </div>
  );
};

const ResuelvePitchDeck = () => {
  const [activeSection, setActiveSection] = useState('vision');

  const navItems = [
    { id: 'vision', icon: Target, label: 'Visión & Problema' },
    { id: 'market', icon: PieChart, label: 'Mercado (Guatemala)' },
    { id: 'business', icon: Briefcase, label: 'Modelo de Negocio' },
    { id: 'financials', icon: TrendingUp, label: 'Finanzas ($30K)' },
    { id: 'legal', icon: ShieldCheck, label: 'Estructura Legal S.A.' },
  ];

  const renderContent = () => {
    switch(activeSection) {
      case 'vision':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 h-full overflow-y-auto pr-2 pb-10">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">El Problema y La Solución</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3 text-lg">⚠️</span> 
                  Status Quo (El Problema)
                </h3>
                <ul className="space-y-4 text-slate-700">
                  <li className="flex items-start"><span className="mr-2 text-red-500 font-bold">✖</span> Contratar técnicos en Guatemala es un riesgo de seguridad. Meter desconocidos a casa sin garantías.</li>
                  <li className="flex items-start"><span className="mr-2 text-red-500 font-bold">✖</span> El mercado es 100% informal; no hay garantías formales si el trabajo queda mal.</li>
                  <li className="flex items-start"><span className="mr-2 text-red-500 font-bold">✖</span> Los técnicos dependen del boca a boca y Grupos de Facebook sin filtros.</li>
                </ul>
              </div>
              
              <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                <h3 className="text-xl font-bold text-emerald-800 mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mr-3 text-lg">💡</span> 
                  Resuelve App (La Solución)
                </h3>
                <ul className="space-y-4 text-slate-700">
                  <li className="flex items-start"><span className="mr-2 text-emerald-500 font-bold">✔</span> Marketplace curado con verificación de DPI y antecedentes penales automatizada.</li>
                  <li className="flex items-start"><span className="mr-2 text-emerald-500 font-bold">✔</span> <strong>Pagos en garantía (Escrow vía Pagalo):</strong> el dinero se retiene hasta que el cliente aprueba el trabajo.</li>
                  <li className="flex items-start"><span className="mr-2 text-emerald-500 font-bold">✔</span> Precios estandarizados mediante "Paquetes de Servicio" transparentes.</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'market':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 h-full overflow-y-auto pr-2 pb-10">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Oportunidad de Mercado (Guatemala)</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {PITCH_DATA.market.map((item, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm text-center">
                  <div className="text-3xl font-extrabold text-blue-700 mb-1">{item.value}</div>
                  <div className="font-bold text-slate-800 text-sm mb-1">{item.label}</div>
                  <div className="text-xs text-slate-500">{item.desc}</div>
                </div>
              ))}
            </div>
            
            <div className="bg-blue-900 text-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-3 flex items-center"><Target className="w-6 h-6 mr-2 text-emerald-400"/> Estrategia "Islas de Liquidez"</h3>
              <p className="text-blue-100 mb-4 text-sm leading-relaxed">Implementaremos una adquisición progresiva para no quemar el presupuesto de marketing a nivel nacional de golpe:</p>
              <div className="space-y-3">
                <div className="bg-white/10 p-3 rounded-lg flex items-center justify-between border border-white/20">
                  <span className="font-bold">Fase 1 (Mes 1-6)</span>
                  <span className="text-right text-sm">Capital y Mixco (Tracción y pruebas)</span>
                </div>
                <div className="bg-white/10 p-3 rounded-lg flex items-center justify-between border border-white/20">
                  <span className="font-bold">Fase 2 (Mes 6-12)</span>
                  <span className="text-right text-sm">Xela y Escuintla (Expansión)</span>
                </div>
                <div className="bg-white/10 p-3 rounded-lg flex items-center justify-between border border-white/20">
                  <span className="font-bold">Fase 3 (Mes 12+)</span>
                  <span className="text-right text-sm">Apertura Nacional (100% departamentos)</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'business':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 h-full overflow-y-auto pr-2 pb-10">
             <h2 className="text-3xl font-bold text-slate-800 mb-6">Modelo de Monetización</h2>
             <p className="text-slate-600 mb-6">Modelo híbrido (SaaS + Marketplace) diseñado para maximizar LTV y reducir dependencia de altas comisiones por servicio.</p>
             
             <div className="grid md:grid-cols-3 gap-6 mb-8">
               <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
                 <div className="h-2 w-full bg-slate-300 absolute top-0 left-0"></div>
                 <h3 className="font-bold text-lg text-slate-800 mt-2 mb-1">Plan Básico</h3>
                 <p className="text-sm text-slate-500 mb-4">Masa crítica inicial</p>
                 <div className="text-3xl font-extrabold text-slate-800 mb-4">Q0<span className="text-sm text-slate-400 font-normal">/mes</span></div>
                 <ul className="text-sm space-y-2 text-slate-600 font-medium">
                   <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2"/> 1 Categoría</li>
                   <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2"/> 12% Comisión Transaccional</li>
                 </ul>
               </div>
               
               <div className="bg-white p-6 rounded-2xl border-2 border-blue-600 shadow-lg relative overflow-hidden transform md:-translate-y-2">
                 <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
                 <div className="h-2 w-full bg-blue-600 absolute top-0 left-0"></div>
                 <h3 className="font-bold text-lg text-slate-800 mt-2 mb-1">Resuelve Pro</h3>
                 <p className="text-sm text-slate-500 mb-4">Técnicos Regulares</p>
                 <div className="text-3xl font-extrabold text-blue-700 mb-4">Q49<span className="text-sm text-slate-400 font-normal">/mes</span></div>
                 <ul className="text-sm space-y-2 text-slate-600 font-medium">
                   <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2"/> 3 Categorías de servicio</li>
                   <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2"/> <strong>8%</strong> Comisión</li>
                   <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2"/> Sello "Verificado Plus"</li>
                 </ul>
               </div>

               <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
                 <div className="h-2 w-full bg-emerald-500 absolute top-0 left-0"></div>
                 <h3 className="font-bold text-lg text-slate-800 mt-2 mb-1">Premium</h3>
                 <p className="text-sm text-slate-500 mb-4">Agencias y Contratistas</p>
                 <div className="text-3xl font-extrabold text-slate-800 mb-4">Q99<span className="text-sm text-slate-400 font-normal">/mes</span></div>
                 <ul className="text-sm space-y-2 text-slate-600 font-medium">
                   <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2"/> Destacado global</li>
                   <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2"/> <strong>5%</strong> Comisión</li>
                 </ul>
               </div>
             </div>
          </div>
        );

      case 'financials':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 h-full overflow-y-auto pr-2 pb-10">
            <h2 className="text-3xl font-bold text-slate-800 mb-2">Presupuesto ($30K) & Finanzas</h2>
            <p className="text-slate-500 mb-6">Runway proyectado: 12 a 15 meses operando Lean.</p>
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm mb-8">
              <h3 className="font-bold text-slate-800 mb-4">Distribución de Capital</h3>
              
              <div className="h-6 w-full rounded-full overflow-hidden flex mb-4 shadow-inner">
                {PITCH_DATA.budget.map((item, idx) => (
                  <div key={idx} className={`${item.color} h-full transition-all`} style={{ width: `${item.percent}%` }} title={item.category}></div>
                ))}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {PITCH_DATA.budget.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full mr-2 ${item.color}`}></div>
                      <span className="text-slate-600 font-medium">{item.category}</span>
                    </div>
                    <span className="font-bold text-slate-800">${item.amount.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm overflow-x-auto">
              <h3 className="font-bold text-slate-800 mb-4">Proyecciones a 24 Meses</h3>
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead>
                  <tr className="border-b-2 border-slate-100 text-slate-500">
                    <th className="pb-3 font-semibold pr-4">Hito</th>
                    <th className="pb-3 font-semibold pr-4">Usuarios Act.</th>
                    <th className="pb-3 font-semibold pr-4">Técnicos</th>
                    <th className="pb-3 font-semibold pr-4">Ingreso Recurrente</th>
                  </tr>
                </thead>
                <tbody>
                  {PITCH_DATA.projections.map((row, idx) => (
                    <tr key={idx} className="border-b border-slate-50 last:border-0">
                      <td className="py-4 font-bold text-slate-800 pr-4">{row.month}</td>
                      <td className="py-4 text-slate-600 pr-4">{row.users}</td>
                      <td className="py-4 text-slate-600 pr-4">{row.providers}</td>
                      <td className="py-4 font-extrabold text-emerald-600 pr-4">{row.revenue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'legal':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 h-full overflow-y-auto pr-2 pb-10">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Estructura Legal y Cumplimiento</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
               <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                 <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center mb-4">
                   <Briefcase className="w-6 h-6" />
                 </div>
                 <h3 className="font-bold text-lg text-slate-800 mb-2">Constitución: Resuelve S.A.</h3>
                 <p className="text-sm text-slate-600 leading-relaxed mb-4">
                   Protege el capital y patrimonio personal, permitiendo la inyección de inversión futura (emisión de acciones preferentes). Ya en proceso con firma contable.
                 </p>
                 <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded border border-emerald-200">Plataforma Intermediaria (No patronos)</span>
               </div>
               
               <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                 <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center mb-4">
                   <ShieldCheck className="w-6 h-6" />
                 </div>
                 <h3 className="font-bold text-lg text-slate-800 mb-2">Protección y KYC</h3>
                 <ul className="text-sm text-slate-600 space-y-3">
                   <li><strong className="text-slate-800">Cero Riesgo Laboral:</strong> T&C claros bajo Código Civil y mercantil, sin pasivos laborales con los técnicos.</li>
                   <li><strong className="text-slate-800">Prevención (AML):</strong> Cumplimiento de identificación estricta vinculada a la pasarela Pagalo.</li>
                 </ul>
               </div>
            </div>

            <div className="bg-slate-800 text-white p-6 rounded-2xl shadow-lg">
              <h3 className="font-bold text-lg mb-3 flex items-center"><CreditCard className="w-5 h-5 mr-2 text-emerald-400"/> Flujo de Fondos (Garantía)</h3>
              <p className="text-slate-300 text-sm mb-4">
                Operamos modelo de retención para garantizar satisfacción.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-between text-sm font-medium bg-slate-900 p-4 rounded-xl text-center gap-4">
                <div className="flex-1">
                  <span className="block text-emerald-400 mb-1 font-bold">1. Pago</span>
                  <span className="text-xs text-slate-400">Cliente deposita</span>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-500 hidden md:block shrink-0" />
                <div className="flex-1">
                  <span className="block text-blue-400 mb-1 font-bold">2. Bóveda</span>
                  <span className="text-xs text-slate-400">Resuelve retiene</span>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-500 hidden md:block shrink-0" />
                <div className="flex-1">
                  <span className="block text-emerald-400 mb-1 font-bold">3. Liquidación</span>
                  <span className="text-xs text-slate-400">Pago a técnico - fee</span>
                </div>
              </div>
            </div>
          </div>
        );
      
      default: return null;
    }
  };

  return (
    <div className="flex-1 order-1 lg:order-2 flex flex-col min-w-0">
      {/* Pestañas de Navegación del Deck */}
      <div className="flex overflow-x-auto gap-2 mb-6 bg-white p-2 rounded-2xl shadow-sm border border-slate-200" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`flex items-center px-4 py-3 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
              activeSection === item.id 
                ? 'bg-blue-900 text-white shadow-md' 
                : 'text-slate-500 hover:bg-slate-50 hover:text-blue-700'
            }`}
          >
            <item.icon className={`w-4 h-4 mr-2 ${activeSection === item.id ? 'text-emerald-400' : ''}`} />
            {item.label}
          </button>
        ))}
      </div>

      {/* Contenido Dinámico de la Presentación */}
      <div className="bg-white/50 rounded-3xl p-2 h-[600px] overflow-hidden">
        {renderContent()}
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans selection:bg-blue-200">
      
      {/* Header */}
      <header className="bg-blue-900 text-white px-6 py-4 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-3 shadow-sm">
              <span className="text-blue-900 font-extrabold text-2xl">R</span>
            </div>
            <div>
              <h1 className="text-xl font-extrabold tracking-tight leading-none">Resuelve S.A.</h1>
              <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">Investor Portal 2026</span>
            </div>
          </div>
          <button className="hidden sm:inline-block bg-white/10 hover:bg-white/20 transition px-4 py-2 rounded-full text-sm font-semibold border border-white/20">
            Contactar Fundador
          </button>
        </div>
      </header>

      {/* Grid Principal: Celular a la izquierda, Deck a la derecha */}
      <div className="flex-1 max-w-7xl mx-auto w-full flex flex-col lg:flex-row p-4 lg:p-8 gap-8">
        
        {/* Columna Izquierda (Celular) */}
        <div className="w-full lg:w-[380px] shrink-0 order-2 lg:order-1 flex flex-col items-center">
          <div className="bg-white w-full max-w-[320px] p-4 rounded-2xl shadow-sm border border-slate-200 mb-6 text-center">
            <h3 className="font-bold text-slate-800 text-sm mb-1 flex justify-center items-center">
               <Smartphone className="w-4 h-4 mr-1 text-blue-700"/> Demo Interactiva
            </h3>
            <p className="text-xs text-slate-500">Interactúa con el prototipo de la app</p>
          </div>
          
          <AppDemo />
        </div>

        {/* Columna Derecha (Presentación) */}
        <ResuelvePitchDeck />

      </div>
    </div>
  );
}
