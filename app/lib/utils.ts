export const gridCellColSize = (num: number) => {
    switch (num) {
        case 2:
            return "span 2 / span 2";
        case 4:
            return "span 4 / span 4";
        default:
            return "span 2 / span 2";
    }
}