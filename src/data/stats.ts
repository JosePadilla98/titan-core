export interface Stat {
    value: number;
    label: string;
    prefix?: string;
    suffix?: string;
}

export interface StatsList {
    id: string;
    stats: Stat[];
    content?: {
        title: string;
        description: string;
        button?: {
            text: string;
            link: string;
            variant?: 'primary' | 'secondary' | 'ghostLight' | 'ghostDark';
        };
    };
}

export const statsLists: Record<string, StatsList> = {
    main: {
        id: 'main',
        stats: [
            {
                value: 250,
                label: 'Instalaciones Completadas',
                prefix: '+'
            },
            {
                value: 15,
                label: 'Años de Experiencia',
            },
            {
                value: 98,
                label: 'Clientes Satisfechos',
                suffix: '%'
            },
            {
                value: 5000,
                label: 'Paneles Instalados',
                prefix: '+'
            }
        ]
    },
    withContent: {
        id: 'withContent',
        stats: [
            {
                value: 70,
                label: 'Ahorro Energético',
                suffix: '%'
            },
            {
                value: 24,
                label: 'Horas de Respuesta',
                suffix: 'h'
            },
            {
                value: 2,
                label: 'Días de Instalación',
                prefix: '<'
            }
        ]
    }
};
