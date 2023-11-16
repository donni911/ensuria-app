export const gridCellColSize = (num: number | string | undefined) => {
    if (num) return `span ${num} / span ${num}`
    else return ''
}