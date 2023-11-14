export type DataObject = {
    id: number,
    type: 'image' | 'longImg' | 'default';
    title?: string,
    croppedPosition?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
    description?: string,
    visibleLg?: boolean,
    bgColor?: string,
    image?: {
        src: string;
        alt: string;
    };
    cell: {
        row: number,
        col: number,
    }
};

export type TitleDataObject = {
    title?: string,
    description?: string,
};

export const data: DataObject[] = [
    {
        id: 1,
        type: 'image',
        image: { src: "man.jpeg", alt: "smiling man" },
        croppedPosition: 'topLeft',
        visibleLg: true,
        cell: {
            row: 2,
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
            row: 1,
            col: 2
        }
    },
    {
        id: 3,
        type: 'image',
        image: { src: "open-space.webp", alt: "smiling man" },
        visibleLg: true,
        cell: {
            row: 2,
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
            row: 1,
            col: 2
        }
    },
    {
        id: 5,
        type: 'default',
        visibleLg: true,
        bgColor: 'transparent',
        cell: {
            row: 1,
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
            row: 1,
            col: 2
        }
    },
]

export const titleData: TitleDataObject = {
    title: 'Привіт, я Ensuria',
    description: 'Цілковито диджитальний асистент зі страхування життя та здоровʼя. Допомагаю жити на повну, перетворюючи страхування у зручний сервіс.'
}