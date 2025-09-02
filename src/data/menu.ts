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
