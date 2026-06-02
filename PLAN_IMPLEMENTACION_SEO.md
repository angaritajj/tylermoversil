# 📋 Plan de Implementación SEO - Tyler Movers IL

## 🔍 Análisis del Proyecto Actual

### ✅ **Lo que ya tienes (y funciona bien):**

1. **Schema.org LocalBusiness** ✓
   - Implementado correctamente en `page.tsx` (líneas 33-98)
   - Incluye `areaServed` con ciudades clave
   - Rating y servicios estructurados

2. **Arquitectura Next.js moderna** ✓
   - App Router con estructura `src/app/[lang]/`
   - TypeScript estricto
   - Tailwind CSS configurado
   - Sistema de i18n con diccionarios

3. **Diseño profesional** ✓
   - UI pulida con gradientes y glassmorphism
   - Mobile-first responsive
   - Modo oscuro/claro

### 🚨 **Errores críticos encontrados:**

| Archivo | Línea | Error | Debe ser |
|---------|-------|-------|----------|
| `layout.tsx` | 18 | "Brownfield" | **Bloomingdale** |
| `en.json` | 10, 16, 19, 56, 60 | "Brownfield" | **Bloomingdale** |
| `es.json` | (todos) | "Brownfield" | **Bloomingdale** |

---

## 📁 Estructura Actual del Proyecto

```
src/
├── app/
│   ├── [lang]/
│   │   ├── layout.tsx          ⚠️ MODIFICAR (metadata)
│   │   └── page.tsx            ✅ Ya tiene Schema.org
│   ├── api/
│   │   └── contact/
│   │       └── route.ts        ✅ OK
│   ├── favicon.ico
│   └── globals.css
├── components/
│   ├── accordion-services.tsx
│   ├── contact-form.tsx
│   ├── lang-toggle.tsx
│   ├── navbar.tsx
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── dictionaries/
│   ├── en.json                 ⚠️ MODIFICAR
│   ├── es.json                 ⚠️ MODIFICAR
│   └── index.ts
└── middleware.ts
```

---

## 🎯 Plan de Implementación (3 Fases)

### **FASE 1: Correcciones Críticas** (15 min)

#### 1.1 Corregir `layout.tsx`
**Archivo:** `src/app/[lang]/layout.tsx`  
**Línea 17-18:**
```typescript
// ANTES (❌):
title: "Tyler Movers IL - Small Moves in Brownfield",
description: "Fast & reliable micro-moves, same-day delivery, and small office relocations in Brownfield, Illinois.",

// DESPUÉS (✅):
title: "Tyler Movers IL - Micro-Moves & Same-Day Delivery | Bloomingdale, IL",
description: "Specialized minivan service for studio moves, IKEA/Facebook Marketplace delivery, and small office relocations. Serving Bloomingdale, Schaumburg & Chicagoland.",
```

#### 1.2 Corregir diccionarios
**Archivo:** `src/dictionaries/en.json`  
Buscar/Reemplazar: `"Brownfield"` → `"Bloomingdale"`

**Archivo:** `src/dictionaries/es.json`  
Buscar/Reemplazar: `"Brownfield"` → `"Bloomingdale"`

---

### **FASE 2: Landing Pages SEO** (2-3 horas)

Crear **3 páginas de servicio por localidad** para atacar keywords de cola larga:

#### 2.1 Estructura de directorios a crear:

```
src/app/[lang]/
├── ikea-furniture-delivery-schaumburg/
│   └── page.tsx                    🆕 CREAR
├── studio-apartment-movers-chicago/
│   └── page.tsx                    🆕 CREAR
└── small-office-movers-naperville/
    └── page.tsx                    🆕 CREAR
```

#### 2.2 Keywords objetivo por página:

| Página | Keywords | Búsquedas/mes estimadas |
|--------|----------|-------------------------|
| `ikea-furniture-delivery-schaumburg` | "IKEA delivery Schaumburg", "same day furniture pickup", "Woodfield Mall delivery" | 150-300 |
| `studio-apartment-movers-chicago` | "studio movers Chicago", "small apartment moving", "man with van Chicago" | 400-800 |
| `small-office-movers-naperville` | "small office movers Naperville", "business relocation DuPage", "office moving service" | 100-250 |

#### 2.3 Componente reutilizable (DRY):

**Crear:** `src/components/seo/ServicePageTemplate.tsx`

Este componente será la plantilla base para las 3 landing pages, evitando duplicación de código.

---

### **FASE 3: Optimización Técnica** (1 hora)

#### 3.1 Crear configuración SEO centralizada

**Archivo nuevo:** `src/lib/seo-config.ts`

Contendrá:
- Lista de ciudades servidas
- Keywords por servicio
- Metadata compartida
- URLs canónicas

#### 3.2 Componentes Schema.org reutilizables

**Archivos nuevos:**
- `src/components/seo/ServiceAreaSchema.tsx`
- `src/components/seo/BreadcrumbSchema.tsx`

#### 3.3 Sitemap dinámico

**Archivo nuevo:** `src/app/sitemap.ts`

Generará automáticamente:
```xml
/en
/es
/en/ikea-furniture-delivery-schaumburg
/es/ikea-furniture-delivery-schaumburg
...etc
```

---

## 📊 Archivos a Crear/Modificar - Resumen

### ⚠️ **A MODIFICAR** (3 archivos):
1. `src/app/[lang]/layout.tsx` - Metadata global
2. `src/dictionaries/en.json` - Brownfield → Bloomingdale
3. `src/dictionaries/es.json` - Brownfield → Bloomingdale

### 🆕 **A CREAR** (10 archivos):
1. `src/app/[lang]/ikea-furniture-delivery-schaumburg/page.tsx`
2. `src/app/[lang]/studio-apartment-movers-chicago/page.tsx`
3. `src/app/[lang]/small-office-movers-naperville/page.tsx`
4. `src/components/seo/ServicePageTemplate.tsx`
5. `src/components/seo/ServiceAreaSchema.tsx`
6. `src/components/seo/BreadcrumbSchema.tsx`
7. `src/lib/seo-config.ts`
8. `src/lib/service-areas.ts`
9. `src/app/sitemap.ts`
10. `src/app/robots.txt` (opcional pero recomendado)

---

## ⚡ Priorización (Si tienes tiempo limitado)

### 🔥 **AHORA (Impacto inmediato):**
- Corregir "Brownfield" → "Bloomingdale" (3 archivos)
- Crear 1 landing page: `ikea-furniture-delivery-schaumburg` (mina de oro)

### 📈 **ESTA SEMANA:**
- Completar las otras 2 landing pages
- Implementar sitemap.ts

### 🎯 **PRÓXIMO MES:**
- Crear componentes Schema.org reutilizables
- A/B testing de CTAs en landing pages

---

## 🛠️ Comandos de Desarrollo

```bash
# Verificar que todo compila antes de hacer cambios
npm run build

# Desarrollo local con Turbopack
npm run dev

# Verificar TypeScript
npx tsc --noEmit

# Formatear código
npx prettier --write "src/**/*.{ts,tsx}"
```

---

## 📝 Notas Técnicas

### TypeScript estricto:
- Todas las nuevas páginas deben tipar `params: Promise<{ lang: "en" | "es" }>`
- Usar `await params` antes de destructurar

### Tailwind:
- Mantener el sistema de diseño existente (gradientes, glassmorphism)
- No introducir nuevas librerías de iconos (usar Lucide-react ya instalado)

### i18n:
- Cada nueva página necesita entradas en `en.json` y `es.json`
- Seguir la estructura de diccionarios anidados actual

---

## ✅ Checklist de Implementación

- [ ] **FASE 1:** Corregir Brownfield → Bloomingdale
- [ ] **FASE 2.1:** Crear landing page IKEA Schaumburg
- [ ] **FASE 2.2:** Crear landing page Studio Chicago
- [ ] **FASE 2.3:** Crear landing page Office Naperville
- [ ] **FASE 3.1:** Crear seo-config.ts
- [ ] **FASE 3.2:** Crear componentes Schema
- [ ] **FASE 3.3:** Crear sitemap.ts
- [ ] **TEST:** Verificar build sin errores
- [ ] **DEPLOY:** Subir a producción

---

**Tiempo estimado total:** 4-5 horas de desarrollo  
**Impacto SEO esperado:** +30-50% tráfico orgánico en 2-3 meses  
**ROI:** Alto (páginas de alta intención de compra)
