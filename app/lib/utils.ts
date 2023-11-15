export const gridCellColSize = (num: number) => {
    if (num) return `span ${num} / span ${num}`
    else return ''
}