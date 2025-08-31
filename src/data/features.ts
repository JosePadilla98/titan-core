import { Battery, Clock, Home, Settings, Shield, Sun, Users, Zap } from 'lucide-astro';

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

// Feature lists for electrical and solar services
export const featureLists: Record<string, FeatureList> = {
    main: {
        id: 'main',
        features: [
            {
                icon: Zap,
                title: 'Instalaciones Eléctricas',
                description: 'Instalaciones eléctricas completas para hogares y empresas con los más altos estándares de seguridad'
            },
            {
                icon: Sun,
                title: 'Placas Solares',
                description: 'Instalación de sistemas fotovoltaicos para ahorrar en tu factura eléctrica y ser más sostenible'
            },
            {
                icon: Shield,
                title: 'Certificados de Instalación',
                description: 'Documentación oficial y certificados para garantizar el cumplimiento normativo'
            },
            {
                icon: Home,
                title: 'Autoconsumo',
                description: 'Sistemas de autoconsumo para maximizar el ahorro energético en tu vivienda'
            },
            {
                icon: Battery,
                title: 'Baterías y Almacenamiento',
                description: 'Sistemas de almacenamiento energético para optimizar tu consumo solar'
            },
            {
                icon: Settings,
                title: 'Mantenimiento',
                description: 'Servicio de mantenimiento y reparación para garantizar el óptimo funcionamiento'
            }
        ]
    },
    benefits: {
        id: 'benefits',
        features: [
            {
                icon: Clock,
                title: 'Rápida Instalación',
                description: 'Instalaciones completas en tiempo récord sin comprometer la calidad'
            },
            {
                icon: Users,
                title: 'Expertos Certificados',
                description: 'Equipo de electricistas profesionales con amplia experiencia'
            },
            {
                icon: Shield,
                title: 'Garantía Total',
                description: 'Garantía en todos nuestros trabajos y materiales utilizados'
            }
        ]
    }
};
