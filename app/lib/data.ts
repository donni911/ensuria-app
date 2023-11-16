
type ImageType = {
    src: string;
    alt: string;
}

export type DataObjectType = {
    id: number,
    type: 'image' | 'longImg' | 'centerImg' | 'rightImage' | 'default';
    title?: string,
    croppedPosition?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
    description?: string,
    visibleLg?: boolean,
    bgColor?: string,
    image?: ImageType,
    cell: {
        row?: number,
        col: number,
    }
};

export const dataShortCards: DataObjectType[] = [
    {
        id: 1,
        type: 'image',
        image: { src: "man.jpeg", alt: "smiling man" },
        croppedPosition: 'topLeft',
        visibleLg: true,
        cell: {
            col: 2
        }
    },
    {
        id: 2,
        type: 'default',
        title: '2020 рік',
        description: 'Естонсько-український іншуртех-стартап',
        bgColor: '#C6F3F8',
        cell: {
            col: 2
        }
    },
    {
        id: 3,
        type: 'image',
        image: { src: "open-space.webp", alt: "smiling man" },
        visibleLg: true,
        cell: {

            col: 4
        }
    },
    {
        id: 4,
        type: 'default',
        title: '70+',
        description: 'людей у команді',
        bgColor: '#C0F3CA',
        cell: {

            col: 2
        }
    },
    {
        id: 5,
        type: 'default',
        visibleLg: true,
        bgColor: 'transparent',
        cell: {
            col: 4
        }
    },
    {
        id: 6,
        type: 'default',
        title: '24/7',
        croppedPosition: 'topLeft',
        description: 'сапорт на звʼязку',
        bgColor: '#FFFFAF',
        cell: {
            col: 2
        }
    },
]

export const dataLongCards: DataObjectType[] = [
    {
        id: 1,
        type: 'rightImage',
        title: '100+',
        description: 'компаній обрали нас',
        bgColor: '#E0D3FF',
        image: {
            src: 'about-4.webp',
            alt: 'men-with-beard'
        },
        cell: {
            col: 3
        }
    },
    {
        id: 2,
        type: 'default',
        title: '97%',
        description: 'клієнтів продовжують співпрацю з нами',
        bgColor: '#FFFFAF',
        cell: {
            col: 4
        }
    },
    {
        id: 3,
        type: 'centerImg',
        title: '30 000+',
        description: 'хлопців та дівчат яких ми заеншурили',
        bgColor: '#C6F3F8',
        croppedPosition: 'topLeft',
        image: {
            src: 'about-chart.webp',
            alt: 'chart'
        },
        cell: {
            col: 3,
            row: 4,
        }
    },
    {
        id: 4,
        type: 'default',
        title: '10 000+',
        description: 'разів прикрили своїх клієнтів',
        croppedPosition: 'topLeft',
        bgColor: '#C0F3CA',
        cell: {
            col: 4,
        }
    },
    {
        id: 5,
        type: 'default',
        title: '2хв',
        description: 'найшвидша компенсація',
        bgColor: '#E0D3FF',
        cell: {
            col: 3,
        }
    },

]

export type TitleDataType = {
    title?: string,
    description?: string,
};

export const titleData: TitleDataType = {
    title: 'Привіт, я Ensuria',
    description: 'Цілковито диджитальний асистент зі страхування життя та здоровʼя. Допомагаю жити на повну, перетворюючи страхування у зручний сервіс.'
}

export type IconType = {
    id: number | string,
    type: string,
    color: string,
    sum: string,
    image: ImageType
}

export const icons: IconType[] = [
    {
        id: 1,
        type: "bigLeft",
        color: '#D6E3FF',
        sum: '+ ₴18 500',
        image: {
            src: "compensation-person-1.webp",
            alt: 'person-1'
        }
    },
    {
        id: 2,
        type: "bigRight",
        color: '#C0F3CA',
        sum: '+ ₴15 000',
        image: {
            src: "compensation-person-2.webp",
            alt: 'person-2'
        }
    },
    {
        id: 3,
        type: "smallLeft",
        color: '#FFFFAF',
        sum: '+ ₴15 000',
        image: {
            src: "compensation-person-3.webp",
            alt: 'person-3'
        }
    },
    {
        id: 4,
        type: "smallRight",
        color: '#FFFFAF',
        sum: '+ ₴6 500',
        image: {
            src: "compensation-person-4.webp",
            alt: 'person-4'
        }
    }
]