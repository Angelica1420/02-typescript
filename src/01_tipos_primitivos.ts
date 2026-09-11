/**
 * ============================================================================
 * 🥊 RETO 01: Tipos Primitivos, Inferencia y Arrays en TypeScript
 * Módulo: Programación Móvil — 3° Bachillerato Técnico (UETS)
 * Docente: Ing. Milton Velásquez
 * ============================================================================
 * 
 * 📖 CONTEXTO / MISIÓN:
 * El sistema web anterior de la UETS sumaba calificaciones en JavaScript vanilla
 * sin tipos ("10" + "8" = "108"), produciendo errores graves en los promedios.
 * Tu misión es declarar tus variables personales con tipos explícitos, formatear
 * tus datos e implementar el cálculo de promedios con tipado estricto.
 * 
 * 🛠️ INSTRUCCIONES:
 * 1. Lee atentamente cada bloque marcado con `// TODO:`.
 * 2. Escribe o completa el código TypeScript según las especificaciones.
 * 3. Ejecuta en tu terminal: `pnpm run start:01` para verificar los tests.
 */



export const nombreEstudiante: string = "Angelica";       
export const edadEstudiante: number = 17;          
export const promedioObjetivo: number = 9.54;      
export let estaMatriculado: boolean = true;    

export function obtenerResumenPersonal(nombreEstudiante: string,edadEstudiante: number,promedioObjetivo: number,estaMatriculado:boolean): string {
 const cadena:string=`👤 Estudiante: ${nombreEstudiante} | 🎂 Edad: ${edadEstudiante} años | 🎯 Meta: ${promedioObjetivo}/10 | 📋 Estado: ${estaMatriculado}`;
 return cadena;
}

export function calcularPromedio(notas: readonly number[]): number {
  if (notas.length === 0) {
    return 0;
  }

  const suma = notas.reduce((total, nota) => total + nota, 0);

  return Number((suma / notas.length).toFixed(2));
}

export function formatearFichaEstudiante(
  nombre: string,
  edad: number,
  paralelo: "E1" | "E2",
  activo: boolean
): string {
 let formato: string = `[FICHA UETS] ${nombre.toUpperCase()} (${edad} años) - Paralelo: ${paralelo} - Estado: ${activo ? "MATRICULADO" : "RETIRADO"}`;

  return formato;
}
