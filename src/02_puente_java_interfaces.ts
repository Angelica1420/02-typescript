/**
 * ============================================================================
 * 🥊 RETO 02: De Clases Java POO a Interfaces TypeScript & Duck Typing
 * Módulo: Programación Móvil — 3° Bachillerato Técnico (UETS)
 * Docente: Ing. Milton Velásquez
 * ============================================================================
 * 
 * 📖 CONTEXTO / MISIÓN:
 * En 2° de Bachillerato aprendiste Java con clases de 35 líneas llenas de getters,
 * setters y constructores. En desarrollo móvil moderno con React Native, modelamos
 * las entidades usando `interface` limpias y seguras.
 * 
 * 🛠️ INSTRUCCIONES:
 * 1. Define la interface `PerfilUsuario` para reemplazar la clase Java antigua.
 * 2. Implementa `formatearPerfilUsuario` para visualizar el perfil en pantalla.
 * 3. Define la interface `ProductoItem` y programa el cálculo de precios con descuento.
 * 4. Ejecuta en tu terminal: `pnpm run start:02` para verificar los tests.
 */

// ============================================================================
// ☕ CÓDIGO JAVA ANTIGUO DE REFERENCIA (OBSERVA EL BOILERPLATE):
// ============================================================================
/*
public class UsuarioJava {
    private final String id;
    private String nombreCompleto;
    private String correo;
    private String telefono; // Opcional
    private String rol; // "ADMIN" | "DOCENTE" | "ESTUDIANTE"

    public UsuarioJava(String id, String n, String c, String r) {
        this.id = id; this.nombreCompleto = n; this.correo = c; this.rol = r;
    }
    // + 25 líneas de Getters y Setters...
}
    */

export interface PerfilUsuario {
  readonly id: string;
  nombreCompleto: string;
  correo: string;
  telefono?: string;
  rol: "ADMIN" | "DOCENTE" | "ESTUDIANTE";
}

export const usuarioEjemplo: PerfilUsuario = {
  id: "UETS-2026-001",
  nombreCompleto: "Angélica Cristina Durán Ordonez",                  
  correo: "angelica.durano.est@uets.edu.ec",
  rol: "ESTUDIANTE"
};


export function formatearPerfilUsuario(usuario: PerfilUsuario): string {
  return `[PERFIL] ${usuario.id} (${usuario.rol}): ${usuario.nombreCompleto} - ${usuario.correo}`;
}



export interface ProductoItem {
  readonly id: string;
titulo: string
precio: number
disponible: boolean
descuentoPorcentaje?: number
}


export function calcularPrecioFinal(producto: ProductoItem): number {
  if (!producto.disponible) {
    return 0;
  }

  let precioFinal: number = producto.precio;

  if (producto.descuentoPorcentaje && producto.descuentoPorcentaje > 0) {
    const descuento = producto.precio * (producto.descuentoPorcentaje / 100);
    precioFinal = producto.precio - descuento;
  }

  return Number(precioFinal.toFixed(2));
}
