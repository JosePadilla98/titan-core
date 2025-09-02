export interface MenuItem {
    name: string;
    link: string;
    children?: MenuItem[];
    showArrow?: boolean;
}

export const headerMenu: MenuItem[] = [
    {
        name: 'Inicio',
        link: '/',
        showArrow: false
    },
    {
        name: 'Servicios',
        link: '/',
        showArrow: true,
        children: [
            {
                name: 'Instalaciones eléctricas',
                link: '/instalaciones-electricas',
                showArrow: false
            },
            {
                name: 'Energía solar',
                link: '/instalaciones-fotovoltaicas',
                showArrow: false
            }
        ]
    },
    {
        name: 'Sobre nosotros',
        link: '/about',
        showArrow: false
    }
];

export const footerMenu: MenuItem[] = [
    {
        name: 'Inicio',
        link: '/',
        showArrow: false
    },
    {
        name: 'Instalaciones eléctricas',
        link: '/instalaciones-electricas',
        showArrow: false
    },
    {
        name: 'Instalaciones fotovoltaicas',
        link: '/instalaciones-fotovoltaicas',
        showArrow: false
    },
    {
        name: 'Sobre nosotros',
        link: '/about',
        showArrow: false
    }
];

export const legalMenu: MenuItem[] = [
    {
        name: 'Política de Privacidad',
        link: '/privacy-policy',
        showArrow: false
    },
    {
        name: 'Términos de Servicio',
        link: '/terms-of-service',
        showArrow: false
    }
];
