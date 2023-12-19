const conta = {
    id: '1',
    email: 'erica@dio.bank',
    password: '123456',
    name: 'Erica Daikawa',
    balance: 2000.00
}

export const api = new Promise((resolve) => {
    setTimeout(()=> {
        resolve(conta)
    }, 3000)
})