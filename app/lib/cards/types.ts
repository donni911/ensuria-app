export type ImageType = {
    src: string;
    alt: string;
}

export type CardType = {
    id: number,
    type: 'image' | 'centerImg' | 'rightImage' | 'default';
    title?: string,
    croppedPosition?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
    description?: string,
    visibleLg?: boolean,
    bgColor?: string,
    image?: ImageType,
    display?: string,
    cell: {
        row?: number,
        col: number,
    }
};

export type CardsType = {
    dataShortCards: CardType[],
    dataLongCards: CardType[],
}