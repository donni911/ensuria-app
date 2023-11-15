export const gridCellColSize = (num: number | string) => {
    if (num) return `span ${num} / span ${num}`
    else return ''
}