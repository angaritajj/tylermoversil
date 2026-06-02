"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export type ServiceContextType = "general" | "ikea" | "office" | "studio";

interface ContactFormProps {
  serviceContext?: ServiceContextType;
}

// 1️⃣ PUNTO MODIFICADO: Se añade la propiedad email al tipado estricto
interface FormData {
  type:      string;
  fromZip:   string;
  fromAddress: string;
  toZip:     string;
  toAddress: string;
  name:      string;
  phone:     string;
  email:     string; 
}

// 2️⃣ PUNTO MODIFICADO: Se inicializa el estado del email vacío
const INITIAL_DATA: FormData = { 
  type: "", 
  fromZip: "", 
  fromAddress: "", 
  toZip: "", 
  toAddress: "", 
  name: "", 
  phone: "",
  email: "" 
};

/**
 * 📍 GEO-RESTRICCIÓN DE ORIGEN AMPLIO: Radio de ~60 millas alrededor de Bloomingdale, IL (60108).
 */
const BLOOMINGDALE_60MI_ZIPS: Record<string, string> = {
  "60108": "Bloomingdale", "60148": "Lombard", "60540": "Naperville", "60173": "Schaumburg",
  "60187": "Wheaton", "60137": "Glen Ellyn", "60515": "Downers Grove", "60101": "Addison",
  "60126": "Elmhurst", "60139": "Glendale Heights", "60172": "Roselle", "60193": "Schaumburg",
  "60194": "Hoffman Estates", "60563": "Naperville", "60440": "Bolingbrook", "60181": "Villa Park",
  "60431": "Joliet", "60062": "Northbrook", "60067": "Palatine", "60010": "Barrington",
  "60601": "Chicago (Loop)", "60611": "Chicago (Near North)", "60614": "Chicago (Lincoln Park)",
  "60618": "Chicago (Avondale)", "60625": "Chicago (Albany Park)", "60647": "Chicago (Logan Square)",
  "60201": "Evanston", "60202": "Evanston (South)", "60203": "Evanston (West)",
  "60502": "Aurora", "60505": "Aurora (Downtown)", "60506": "Aurora (West)",
  "60120": "Elgin", "60123": "Elgin (West)", "60804": "Cicero", "60085": "Waukegan", 
  "60016": "Des Plaines", "60025": "Glenview"
};

/**
 * 🗺️ DICCIONARIO DE RESOLUCIÓN PARA DESTINOS DE ILLINOIS (FUERA DEL RADIO DE RECOGIDA)
 */
const ILLINOIS_CITY_LOOKUP: Record<string, string> = {
  "61101": "Rockford", "61107": "Rockford (East)", "61008": "Belvidere", "61021": "Dixon", 
  "61061": "Rochelle", "61032": "Freeport", "62701": "Springfield", "62704": "Springfield (West)", 
  "61602": "Peoria", "61614": "Peoria (North)", "61801": "Urbana", "61820": "Champaign", 
  "61832": "Danville", "61701": "Bloomington", "61761": "Normal", "62521": "Decatur", 
  "62650": "Jacksonville", "62201": "East St. Louis", "62220": "Belleville", 
  "62025": "Edwardsville", "62901": "Carbondale"
};

const isValidIllinoisZip = (zip: string): boolean => {
  const zipNum = parseInt(zip, 10);
  return !isNaN(zipNum) && zipNum >= 60001 && zipNum <= 62999;
};

export function ContactForm({ serviceContext = "general" }: ContactFormProps) {
  const [step,        setStep]        = useState(1);
  const [formData,    setFormData]    = useState<FormData>(INITIAL_DATA);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting,setIsSubmitting]= useState(false);
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");

  const formRef = useRef<HTMLFormElement>(null);

  // 🛡️ CONTROL DE ORIGEN: Radio amplio de 60 Millas
  useEffect(() => {
    const zip = formData.fromZip;
    if (zip.length === 5) {
      const city = BLOOMINGDALE_60MI_ZIPS[zip];
      if (city) {
        setFromCity(`📍 Local Pickup: ${city}, IL`);
        setErrors((prev) => { const { fromZip, ...rest } = prev; return rest; });
      } else if (isValidIllinoisZip(zip)) {
        setFromCity("");
        setErrors((prev) => ({ ...prev, fromZip: "Pickup must be within our 60-mile local area." }));
      } else {
        setFromCity("");
        setErrors((prev) => ({ ...prev, fromZip: "Invalid ZIP. Must be a real local area." }));
      }
    } else {
      setFromCity("");
      if (zip.length > 0 && zip.length < 5) {
        setErrors((prev) => { const { fromZip, ...rest } = prev; return rest; });
      }
    }
  }, [formData.fromZip]);

  // 🗺️ CONTROL DE DESTINO: Todo Illinois Abierto
  useEffect(() => {
    const zip = formData.toZip;
    if (zip.length === 5) {
      if (isValidIllinoisZip(zip)) {
        const cityName = BLOOMINGDALE_60MI_ZIPS[zip] || ILLINOIS_CITY_LOOKUP[zip] || "Illinois Delivery Region";
        setToCity(`📍 Delivery Area: ${cityName}, IL`);
        setErrors((prev) => { const { toZip, ...rest } = prev; return rest; });
      } else {
        setToCity("");
        setErrors((prev) => ({ ...prev, toZip: "Invalid ZIP. Must be a real city within Illinois." }));
      }
    } else {
      setToCity("");
      if (zip.length > 0 && zip.length < 5) {
        setErrors((prev) => { const { toZip, ...rest } = prev; return rest; });
      }
    }
  }, [formData.toZip]);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setTimeout(() => {
      e.target.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 300);
  };

  const handleOptionSelect = (option: string) => {
    setFormData((d) => ({ ...d, type: option }));
    setTimeout(() => setStep(2), 280);
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((d) => ({ ...d, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => { const { [field]: _, ...rest } = prev; return rest; });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (step === 2) {
      const newErrors: Record<string, string> = {};
      if (!BLOOMINGDALE_60MI_ZIPS[formData.fromZip]) newErrors.fromZip = "Local 60-mile ZIP required.";
      if (!isValidIllinoisZip(formData.toZip)) newErrors.toZip = "Valid Illinois ZIP Code required.";
      if (formData.fromAddress.trim().length < 5) newErrors.fromAddress = "Please enter a real pickup street address.";
      if (formData.toAddress.trim().length < 5) newErrors.toAddress = "Please enter a real delivery street address.";

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }
      setStep(3);
      return;
    }

    // 3️⃣ PUNTO MODIFICADO: Validación estricta del formato de email antes del envío final
    if (step === 3) {
      const newErrors: Record<string, string> = {};
      if (formData.name.trim().length < 2) newErrors.name = "Please enter your name.";
      if (formData.phone.trim().length < 7) newErrors.phone = "Please enter a valid phone number.";
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = "Please enter a valid email address.";
      }

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }
    }

    setIsSubmitting(true);
    try {
      const res  = await fetch("/api/contact", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ ...formData, context: serviceContext }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Something went wrong.");
      setIsSubmitted(true);
    } catch (err) {
      setErrors((prev) => ({ ...prev, global: err instanceof Error ? err.message : "Network error." }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const getContextConfig = () => {
    switch (serviceContext) {
      case "ikea":
        return {
          title: "Select IKEA Sub-Service",
          options: ["Full Delivery + Assembly", "Assembly Only (Already Delivered)", "Delivery Only (No Assembly)", "Multiple Items Setup"]
        };
      case "office":
        return {
          title: "Select Office Relocation Type",
          options: ["Corporate Office (Up to 10 Desks)", "Tech & Electronics Heavy Move", "Home Office Relocation", "Office Furniture Only"]
        };
      case "studio":
        return {
          title: "Select Studio Move Scope",
          options: ["Full Studio Move (Furniture + Boxes)", "Large Furniture Items Only", "In-Building / Same Complex Move", "Student / Minimalist Move"]
        };
      default:
        return {
          title: "What are you moving?",
          options: ["Studio / 1-Bedroom", "Single Item / Furniture", "Office Equipment", "Marketplace / Store Pickup"]
        };
    }
  };

  const config = getContextConfig();

  const inputCls = "w-full rounded-xl px-4 py-3 text-sm outline-none transition-all focus:ring-2 focus:ring-amber-500/30 bg-white border border-zinc-200 text-black focus:border-orange-600 placeholder-transparent peer";
  const labelCls = "absolute left-4 top-3 text-sm text-zinc-400 pointer-events-none transition-all peer-focus:opacity-0 peer-[:not(:placeholder-shown)]:opacity-0";
  const extLabel = "block text-xs font-bold uppercase tracking-wide text-white mb-1.5";
  const btnCls   = "flex-1 rounded-xl py-3 text-sm font-black transition-all disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider";

  return (
    <div className="w-full max-w-xl mx-auto font-sans text-left">
      
      {/* CUBIERTA SUPERIOR */}
      <div className="text-center mb-8">
        <span className="text-xs font-black uppercase tracking-widest text-white bg-black/20 backdrop-blur-sm px-4 py-1.5 rounded-full inline-block mb-3">
          ✨ Quick Quote · 3 Steps
        </span>
       <h2 className="text-3xl md:text-4xl font-black tracking-[-0.045em] text-foreground dark:text-white mb-2">
       Let's get moving.
      </h2>
        <p className="text-zinc-700 dark:text-zinc-300 text-sm max-w-sm mx-auto mb-6 font-medium transition-colors duration-300">
          A 60-second wizard. We'll text you back with a flat rate before you finish your coffee.
        </p>

        <div className="flex items-center justify-center gap-4 max-w-xs mx-auto relative">
          <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-black transition-all duration-300 ${step >= 1 ? 'bg-white text-orange-600 shadow-xl scale-110' : 'bg-orange-700/50 text-orange-200 border border-orange-500/30'}`}>1</div>
          <div className={`h-[2px] w-8 transition-colors duration-300 ${step >= 2 ? 'bg-white' : 'bg-orange-700'}`} />
          <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-black transition-all duration-300 ${step >= 2 ? 'bg-white text-orange-600 shadow-xl scale-110' : 'bg-orange-700/50 text-orange-200 border border-orange-500/30'}`}>2</div>
          <div className={`h-[2px] w-8 transition-colors duration-300 ${step === 3 ? 'bg-white' : 'bg-orange-700'}`} />
          <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-black transition-all duration-300 ${step === 3 ? 'bg-white text-orange-600 shadow-xl scale-110' : 'bg-orange-700/50 text-orange-200 border border-orange-500/30'}`}>3</div>
        </div>
      </div>

      {/* CONTENEDOR FORMULARIO */}
      <div className="min-h-[420px] flex flex-col justify-center px-6 py-8 md:px-10 md:py-10 bg-orange-600 border border-orange-500 rounded-[32px] shadow-[0_25px_60px_-15px_rgba(234,88,12,0.4)]">
        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-4 py-8 text-center text-white"
            >
              <CheckCircle2 className="h-16 w-16 text-white drop-shadow-md animate-bounce" />
              <p className="text-2xl font-black tracking-tight">Request Sent Successfully!</p>
              <p className="text-sm text-orange-100 max-w-xs font-medium">We will text you back shortly with a flat, guaranteed rate.</p>
            </motion.div>
          ) : (
            <motion.form
              ref={formRef}
              key={`step-${step}`}
              initial={{ x: 15, opacity: 0 }}
              animate={{ x: 0,  opacity: 1 }}
              exit={{ x: -15,   opacity: 0 }}
              transition={{ duration: 0.2 }}
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
              noValidate
            >
              {/* PASO 1 */}
              {step === 1 && (
                <div>
                  <h3 className="mb-4 text-center text-base font-bold text-white uppercase tracking-wider">
                    {config.title}
                  </h3>
                  <div className="grid gap-3">
                    {config.options.map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => handleOptionSelect(opt)}
                        className={`rounded-2xl border-2 p-4 text-left text-sm font-bold transition-all duration-150 active:scale-[0.99] ${
                          formData.type === opt
                            ? "border-white bg-white text-orange-600 shadow-lg"
                            : "border-orange-500 bg-orange-700/30 text-white hover:bg-orange-700/50 hover:border-orange-400"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* PASO 2 — Ubicaciones Validadas */}
              {step === 2 && (
                <div className="space-y-4">
                  <h3 className="text-center text-base font-bold text-white uppercase tracking-wider mb-2">Locations Validation</h3>
                  
                  {/* SECCIÓN ORIGEN */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="relative">
                      <label className={extLabel}>Zip Start <span className="text-white font-black">*</span></label>
                      <div className="relative flex items-center">
                        <input
                          required
                          type="text"
                          maxLength={5}
                          value={formData.fromZip}
                          onChange={(e) => handleInputChange("fromZip", e.target.value.replace(/\D/g, ""))}
                          onFocus={handleFocus}
                          className={inputCls}
                          placeholder=" "
                        />
                        <span className={labelCls}>e.g. 60108</span>
                      </div>
                      {fromCity && <p className="text-[11px] font-bold text-orange-100 mt-1">{fromCity}</p>}
                      {errors.fromZip && <p className="text-[11px] font-bold text-white bg-red-700/80 px-2 py-0.5 rounded-md mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.fromZip}</p>}
                    </div>

                    <div className="md:col-span-2 relative">
                      <label className={extLabel}>Pickup Address (Must be real) <span className="text-white font-black">*</span></label>
                      <div className="relative flex items-center">
                        <input
                          required
                          type="text"
                          value={formData.fromAddress}
                          onChange={(e) => handleInputChange("fromAddress", e.target.value)}
                          onFocus={handleFocus}
                          className={inputCls}
                          placeholder=" "
                        />
                        <span className={labelCls}>e.g. 184 N Bloomingdale Rd</span>
                      </div>
                      {errors.fromAddress && <p className="text-[11px] font-bold text-white bg-red-700/80 px-2 py-0.5 rounded-md mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.fromAddress}</p>}
                    </div>
                  </div>

                  {/* SECCIÓN DESTINO */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                    <div className="relative">
                      <label className={extLabel}>Zip Delivery <span className="text-white font-black">*</span></label>
                      <div className="relative flex items-center">
                        <input
                          required
                          type="text"
                          maxLength={5}
                          value={formData.toZip}
                          onChange={(e) => handleInputChange("toZip", e.target.value.replace(/\D/g, ""))}
                          onFocus={handleFocus}
                          className={inputCls}
                          placeholder=" "
                        />
                        <span className={labelCls}>e.g. 60201</span>
                      </div>
                      {toCity && <p className="text-[11px] font-bold text-orange-100 mt-1">{toCity}</p>}
                      {errors.toZip && <p className="text-[11px] font-bold text-white bg-red-700/80 px-2 py-0.5 rounded-md mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.toZip}</p>}
                    </div>

                    <div className="md:col-span-2 relative">
                      <label className={extLabel}>Delivery Address (Must be real) <span className="text-white font-black">*</span></label>
                      <div className="relative flex items-center">
                        <input
                          required
                          type="text"
                          value={formData.toAddress}
                          onChange={(e) => handleInputChange("toAddress", e.target.value)}
                          onFocus={handleFocus}
                          className={inputCls}
                          placeholder=" "
                        />
                        <span className={labelCls}>e.g. 500 W Madison St</span>
                      </div>
                      {errors.toAddress && <p className="text-[11px] font-bold text-white bg-red-700/80 px-2 py-0.5 rounded-md mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.toAddress}</p>}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className={`${btnCls} border border-orange-400 bg-orange-700/20 text-white hover:bg-orange-700/50`}
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className={`${btnCls} bg-white text-orange-600 hover:bg-orange-50 shadow-md`}
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}

              {/* PASO 3 — Datos del Cliente */}
              {step === 3 && (
                <div className="space-y-4">
                  <h3 className="text-center text-base font-bold text-white uppercase tracking-wider">Contact Details</h3>
                  
                  {/* Campo Nombre */}
                  <div className="relative">
                    <label className={extLabel}>Full Name <span className="text-white font-black">*</span></label>
                    <div className="relative flex items-center">
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        onFocus={handleFocus}
                        className={inputCls}
                        placeholder=" "
                      />
                      <span className={labelCls}>John Smith</span>
                    </div>
                    {errors.name && <p className="text-[11px] font-bold text-white bg-red-700/80 px-2 py-0.5 rounded-md mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.name}</p>}
                  </div>

                  {/* Campo Teléfono */}
                  <div className="relative">
                    <label className={extLabel}>Phone Number <span className="text-white font-black">*</span></label>
                    <div className="relative flex items-center">
                      <input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        onFocus={handleFocus}
                        className={inputCls}
                        placeholder=" "
                      />
                      <span className={labelCls}>(773) 555-0100</span>
                    </div>
                    {errors.phone && <p className="text-[11px] font-bold text-white bg-red-700/80 px-2 py-0.5 rounded-md mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.phone}</p>}
                  </div>

                  {/* 4️⃣ PUNTO MODIFICADO: Campo Email Inyectado con Estructura UX Profesional */}
                  <div className="relative">
                    <label className={extLabel}>Email Address <span className="text-white font-black">*</span></label>
                    <div className="relative flex items-center">
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        onFocus={handleFocus}
                        className={inputCls}
                        placeholder=" "
                      />
                      <span className={labelCls}>john.smith@example.com</span>
                    </div>
                    {errors.email && <p className="text-[11px] font-bold text-white bg-red-700/80 px-2 py-0.5 rounded-md mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.email}</p>}
                  </div>

                  {errors.global && (
                    <div className="flex items-start gap-3 rounded-xl bg-red-700 p-3 text-white text-xs font-bold">
                      <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                      <p>{errors.global}</p>
                    </div>
                  )}

                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      disabled={isSubmitting}
                      className={`${btnCls} border border-orange-400 bg-orange-700/20 text-white hover:bg-orange-700/50`}
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`${btnCls} bg-white text-orange-600 hover:bg-orange-50 shadow-md inline-flex items-center justify-center gap-2`}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin text-orange-600" />
                          Sending…
                        </>
                      ) : (
                        "Get Flat Rate"
                      )}
                    </button>
                  </div>
                </div>
              )}
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}