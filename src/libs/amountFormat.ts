
const amountFormat = (amount:number) => {
    return amount.toLocaleString('en-US').replace(/[,]/gi,'.')
}
export default amountFormat
