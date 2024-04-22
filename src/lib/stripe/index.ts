import Stripe from 'stripe'

export const stripe = new Stripe('sk_test_51P6z5gIJ9U6wZNuBcLKQK6qDFCemZEnVtYkEDYNlNNf6qzhHqxaLIAkkbwVwCKrE4N496GDw4Uljc7kk94AGMdMF00SA1ZEgL2', {
    apiVersion: '2024-04-10',
    appInfo: {
        name: 'Plura MAS App',
        version: '0.1.0'
    },
    typescript: true
});