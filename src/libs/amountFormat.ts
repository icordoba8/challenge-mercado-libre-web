
const amountFormat = (amount:number) => {
    return amount ? amount.toLocaleString('en-US').replace(/[,]/gi, '.'):0
}
export default amountFormat
