// =========================================================
// DATOS DE EVENTOS — se usan en Inicio (carrusel), Eventos e Histórico.
//
// Para pasar un evento al histórico:
//   1. Corta su bloque de PROXIMOS y pégalo arriba del todo en HISTORICO
//      (adaptando los campos: anio, fecha, lugar, cartel, fotos).
//   2. Mueve su cartel de la raíz a la carpeta fotos-historico/.
// =========================================================

// ===== Próximos eventos (ordenados por fecha, el más cercano primero) =====
// El cartel va en la raíz de la web (p.ej. cartel-halloween.jpg).
const PROXIMOS = [
  { nombre:'Halloween Fest', dia:'31', mes:'OCT',
    lugar:'Peña El Patio · Torremolinos', cartel:'cartel-halloween.jpg',
    alt:'Halloween Fest — Stitched, Nihility, Abysser, Prophane, Swordlaek',
    descripcion:'Stitched + Nihility + Abysser + Prophane + Swordlaek. Anticipadas 15&euro; / Taquilla 20&euro;.',
    entradas:'https://entradium.com/es/events/halloween-fest-torremolinos' }
];

// ===== Eventos del histórico (ordenados del más reciente al más antiguo) =====
// Para añadir fotos de un evento: mételas en la carpeta fotos-historico/
// y añade sus nombres de archivo al array "fotos", p.ej. fotos: ['mhf2-1.jpg','mhf2-2.jpg']
const HISTORICO = [
  { anio:2026, nombre:'Fatal Move + Self Made', fecha:'8 Octubre 2026', dia:'08', mes:'OCT',
    lugar:'Sala Core · Málaga', cartel:'fatalmove.jpg', fotos:[] },
  { anio:2026, nombre:'Fully Alive Fest', fecha:'12 Septiembre 2026', dia:'12', mes:'SEP',
    lugar:'Sala Trinchera · Málaga', cartel:'fullyalive.jpg', fotos:[] },
  { anio:2026, nombre:'Fulminar España Tour', fecha:'22 Agosto 2026', dia:'22', mes:'AGO',
    lugar:'Ciberpunk Club · Fuengirola', cartel:'fulminar.jpg', fotos:[] },
  { anio:2026, nombre:'Verbal Behavior + P.Human', fecha:'30 Mayo 2026', dia:'30', mes:'MAY',
    lugar:'Sala Core · Málaga', cartel:'verbalbehavior.jpg', fotos:[] },
  { anio:2026, nombre:'Málaga Hardcore Fest II', fecha:'15–18 Abril 2026', dia:'15', mes:'ABR',
    lugar:'Peña El Patio · Torremolinos', cartel:'mhf2.jpg', fotos:[] },
  { anio:2026, nombre:'Málaga Hardcore Meeting', fecha:'23 Enero 2026', dia:'23', mes:'ENE',
    lugar:'El Taller · Málaga', cartel:'meeting.jpg', fotos:[] },
  { anio:2025, nombre:'Winter Ritual', fecha:'12 Diciembre 2025', dia:'12', mes:'DIC',
    lugar:'Peña El Patio · Torremolinos', cartel:'winterritual.jpg', fotos:[] },
  { anio:2025, nombre:'Fear The Lord + Clericbeast + Times of War', fecha:'8 Noviembre 2025', dia:'08', mes:'NOV',
    lugar:'Sala Marte · Málaga', cartel:'feartelord.jpg', fotos:[] },
  { anio:2025, nombre:'El Nueve Once + Hall of Blame + Pachydermo Scato', fecha:'6 Agosto 2025', dia:'06', mes:'AGO',
    lugar:'Sala Core · Málaga', cartel:'elnueveonce.jpg', fotos:[] },
  { anio:2025, nombre:'Push! + Selfmade', fecha:'11 Julio 2025', dia:'11', mes:'JUL',
    lugar:'Sala Core · Málaga', cartel:'push.jpg', fotos:[] },
  { anio:2025, nombre:'Málaga HXC Sessions', fecha:'23 Mayo 2025', dia:'23', mes:'MAY',
    lugar:'Sala Marte · Málaga', cartel:'sessions.jpg', fotos:[] },
  { anio:2025, nombre:'Málaga Hardcore Fest', fecha:'11–12 Abril 2025', dia:'11', mes:'ABR',
    lugar:'Carretera de Cádiz · Málaga', cartel:'mhf1.jpg', fotos:[] }
];

// ===== Traducción para las páginas en inglés (/en/) =====
// Traduce meses y palabras sueltas de los datos de arriba. Si añadís texto nuevo
// en "descripcion", podéis poner también "descripcion_en" con la versión en inglés.
const TRADUCCION_EN = {
  Enero:'January', Febrero:'February', Marzo:'March', Abril:'April', Mayo:'May', Junio:'June',
  Julio:'July', Agosto:'August', Septiembre:'September', Octubre:'October', Noviembre:'November', Diciembre:'December',
  ENE:'JAN', ABR:'APR', AGO:'AUG', DIC:'DEC',
  Anticipadas:'Presale', Taquilla:'At the door'
};
function enIngles(texto) {
  return String(texto).replace(/[A-Za-z]+/g, p => TRADUCCION_EN[p] || p);
}
