export interface FaqItem {
    question: string;
    answer: string;
}

export interface FaqList {
    id: string;
    faqs: FaqItem[];
}

export const faqLists: Record<string, FaqList> = {
    solar: {
        id: 'solar',
        faqs: [
            {
                question: '¿Cuánto tiempo tarda una instalación de placas solares?',
                answer: 'Una instalación residencial típica de placas solares puede completarse en 2-3 días hábiles, dependiendo del tamaño del sistema y las condiciones del tejado.',
            },
            {
                question: '¿Necesito algún permiso para instalar placas solares?',
                answer: 'Nosotros nos encargamos de toda la tramitación necesaria, incluyendo permisos municipales y la comunicación con la compañía eléctrica. Solo necesitamos tu autorización.',
            },
            {
                question: '¿Qué mantenimiento requieren las placas solares?',
                answer: 'Las placas solares requieren muy poco mantenimiento. Recomendamos una limpieza anual y revisiones periódicas del inversor para garantizar el máximo rendimiento.',
            },
            {
                question: '¿Ofrecen garantía en las instalaciones?',
                answer: 'Sí, ofrecemos garantía de 2 años en la mano de obra y hasta 25 años en los paneles solares, dependiendo del fabricante.',
            },
            {
                question: '¿Puedo financiar la instalación?',
                answer: 'Sí, trabajamos con varias entidades financieras que ofrecen planes de financiación adaptados a instalaciones de energías renovables.',
            },
            {
                question: '¿Qué ahorro puedo esperar con placas solares?',
                answer: 'Depende de tu consumo, pero la mayoría de nuestros clientes ahorran entre 50-70% en su factura eléctrica desde el primer mes.',
            },
        ],
    },
    electricity: {
        id: 'electricity',
        faqs: [
            {
                question: '¿Cuánto cuesta una instalación eléctrica completa?',
                answer: 'El costo depende del tamaño de la vivienda y la complejidad de la instalación. Ofrecemos presupuestos gratuitos y detallados.',
            },
            {
                question: '¿Necesito permisos para reformas eléctricas?',
                answer: 'Sí, todas las reformas eléctricas requieren permisos municipales. Nos encargamos de toda la tramitación por ti.',
            },
            {
                question: '¿Qué incluye una instalación eléctrica?',
                answer: 'Incluye cableado, interruptores, enchufes, iluminación, sistema de protección contra sobrecargas y certificación oficial.',
            },
            {
                question: '¿Ofrecen garantía en instalaciones eléctricas?',
                answer: 'Sí, garantizamos la instalación por 5 años y los materiales según normativa. Además, realizamos revisiones periódicas.',
            },
            {
                question: '¿Trabajan con instalaciones antiguas?',
                answer: 'Sí, somos especialistas en renovar instalaciones eléctricas antiguas para adaptarlas a la normativa actual y mejorar la seguridad.',
            },
            {
                question: '¿Cuánto tiempo dura una instalación eléctrica?',
                answer: 'Una instalación completa puede tomar de 3-7 días hábiles, dependiendo del tamaño y complejidad del proyecto.',
            },
        ],
    },
};
