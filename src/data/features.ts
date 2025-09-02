import { Battery, BatteryCharging, Car, CheckCircle, Cloud, FileText, HardHat, Lightbulb, Plug, Settings, Sun, Wrench, Zap } from 'lucide-astro';

// Define the LucideIcon type based on the structure of Lucide icons
type LucideIcon = typeof Zap;

export interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface FeatureList {
    id: string;
    features: Feature[];
}

// Feature lists for electrical installations
export const electricalFeatures: Feature[] = [
    {
        icon: Zap,
        title: 'Instalaciones eléctricas completas',
        description: 'Obra nueva, reformas de viviendas, locales y pequeños espacios industriales. Diseño e instalación adaptados a normativa vigente.'
    },
    {
        icon: Wrench,
        title: 'Reformas y actualizaciones eléctricas',
        description: 'Actualización de instalaciones antiguas para cumplir con seguridad, eficiencia y nuevos consumos.'
    },
    {
        icon: Settings,
        title: 'Reparación de averías eléctricas',
        description: 'Atendemos cortes, fallos, derivaciones, sobrecargas y cualquier problema eléctrico, con diagnóstico y solución rápida.'
    },
    {
        icon: FileText,
        title: 'Boletines eléctricos (CIE)',
        description: 'Certificados de instalación para altas, ampliaciones de potencia o modificaciones.'
    },
    {
        icon: CheckCircle,
        title: 'Firma como instalador autorizado',
        description: 'Alta de suministro eléctrico. Gestión completa para nuevas conexiones con la compañía distribuidora.'
    },
    {
        icon: Plug,
        title: 'Cuadros eléctricos y automatismos',
        description: 'Montaje, mantenimiento y mejora de cuadros eléctricos, protecciones y sistemas automáticos.'
    },
    {
        icon: Lightbulb,
        title: 'Iluminación interior y exterior',
        description: 'Diseño e instalación de iluminación eficiente para hogares, jardines, galpones, locales y comunidades.'
    },
    {
        icon: Car,
        title: 'Puntos de recarga para vehículos eléctricos',
        description: 'Soluciones seguras y adaptadas a normativas para particulares, garajes comunitarios o empresas.'
    },
    {
        icon: HardHat,
        title: 'Mantenimiento preventivo y correctivo',
        description: 'Planes de mantenimiento para viviendas, locales y comunidades. Revisiones periódicas y asistencia técnica.'
    }
];

// Feature lists for photovoltaic installations
export const photovoltaicFeatures: Feature[] = [
    {
        icon: Sun,
        title: 'Instalaciones fotovoltaicas de autoconsumo conectadas a red',
        description: 'Genera tu propia energía y reduce tu factura eléctrica. Soluciones a medida para viviendas y empresas conectadas a la red eléctrica.'
    },
    {
        icon: BatteryCharging,
        title: 'Instalaciones fotovoltaicas de autoconsumo aisladas de la red',
        description: 'Genera, almacena y gestiona tu propia energía de forma segura, eficiente y sostenible. Soluciones a medida para viviendas y proyectos fuera de red.'
    },
    {
        icon: Settings,
        title: 'Mantenimiento',
        description: 'Confía en profesionales para que tu sistema fotovoltaico funcione como el primer día.'
    },
    {
        icon: Battery,
        title: 'Baterías y sistemas de respaldo',
        description: '¿Ya tienes una instalación fotovoltaica? Aumenta tu independencia energética instalando baterías y sistemas de respaldo.'
    },
    {
        icon: Cloud,
        title: 'Ampliaciones',
        description: 'Si tu instalación fotovoltaica ya no cubre tu consumo actual, te ayudamos a ampliarla para que vuelvas a maximizar tu ahorro.'
    },
    {
        icon: FileText,
        title: 'Legalización',
        description: '¿Tu actual instalación fotovoltaica está sin legalizar? Te ayudamos a ponerla en regla con documentación y certificación oficial.'
    }
];

