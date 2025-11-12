import { Wrench, Home, FileText, Shield, Clock, Sun } from 'lucide-astro';

export interface FaqItem {
    question: string;
    answer: string;
    icon?: any;
}

export interface FaqList {
    id: string;
    faqs: FaqItem[];
}

export const faqLists: Record<string, FaqList> = {
    electricity: {
        id: 'electricity',
        faqs: [
            {
                question: '¿Realizáis instalaciones eléctricas en viviendas y negocios?',
                answer: 'Sí, diseñamos y ejecutamos instalaciones eléctricas tanto en viviendas particulares como en locales comerciales, oficinas e industrias. Todas nuestras instalaciones cumplen la normativa vigente y se entregan con certificado oficial.',
                icon: Home,
            },
            {
                question: '¿Podéis revisar o reparar una instalación eléctrica existente?',
                answer: 'Por supuesto. Diagnosticamos averías, realizamos reparaciones y actualizamos instalaciones antiguas para mejorar su seguridad y eficiencia.',
                icon: Wrench,
            },
            {
                question: '¿Tramitáis los boletines o certificados eléctricos?',
                answer: 'Sí. Como instaladores autorizados, emitimos boletines eléctricos (CIE) y gestionamos toda la documentación necesaria ante la compañía distribuidora.',
                icon: FileText,
            },
            {
                question: '¿Ofrecéis servicio de mantenimiento eléctrico?',
                answer: 'Sí. Realizamos mantenimientos preventivos y correctivos para comunidades, empresas y particulares, asegurando que la instalación funcione correctamente y sin riesgos.',
                icon: Shield,
            },
        ],
    },
    solar: {
        id: 'solar',
        faqs: [
            {
                question: '¿Qué ventajas tiene una instalación solar de autoconsumo?',
                answer: 'Con un diseño solar personalizado puedes llegar a pagar cero en tu factura eléctrica. En Ampereon dimensionamos cada instalación para que produzca justo lo que necesitas y consigas la máxima independencia energética.',
                icon: Sun,
            },
            {
                question: '¿Qué tipo de instalaciones solares realizáis?',
                answer: 'Diseñamos e instalamos sistemas conectados a red y aislados, adaptándonos a cada necesidad: viviendas, negocios, comunidades o entornos rurales. Principalmente en Sevilla, aunque abarcamos toda Andalucía.',
                icon: Home,
            },
            {
                question: '¿Tramitáis las ayudas y la legalización ante Industria?',
                answer: 'Sí. Nos encargamos de todo el proceso administrativo, desde la solicitud de subvenciones hasta la legalización y registro de la instalación.',
                icon: FileText,
            },
            {
                question: '¿Cuánto tiempo se tarda en realizar una instalación fotovoltaica?',
                answer: 'Depende del tamaño del proyecto, pero en la mayoría de los casos la instalación completa se realiza en 1 a 3 días, más el tiempo de tramitación administrativa.',
                icon: Clock,
            },
            {
                question: '¿Qué mantenimiento requiere una instalación solar?',
                answer: 'El mantenimiento es mínimo: recomendamos una limpieza de paneles una o dos veces al año y una revisión periódica para garantizar el máximo rendimiento.',
                icon: Shield,
            },
        ],
    },
};
