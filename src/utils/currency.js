export const currency = (num) => {
    return new Intl.NumberFormat('vi-vn', {
        style: 'currency', currency: 'VND'
    }).format(num)
}