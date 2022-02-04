import { v4 as uuidv4 } from 'uuid';

export const PEOPLE=[
    {
        id: uuidv4(),
        numero: '1.',
        texto: 'Pagos en diferentes negocios baz'
    },
    {
        id: uuidv4(),
        numero: '2.',
        texto: 'Recarga mínima: $150'
    },
    {
        id: uuidv4(),
        numero: '3.',
        texto: 'Pago mínimo por transacción: $50'
    },
    {
        id: uuidv4(),
        numero: '4.',
        texto: 'Limitado a un regalo por semana'
    },
    {
        id: uuidv4(),
        numero: '5.',
        texto: 'No tener un negocio baz afiliado a tu cuenta'
    }
];

export const BUSINESS=[
    {
        id: uuidv4(),
        numero: '1.',
        texto: 'En caso de que un cliente pague más de una vez en la misma semana, solo se contará una transacción de ese cliente para el desafío'
    },
    {
        id: uuidv4(),
        numero: '2.',
        texto: 'Cobro mínimo por transacción: $50'
    },
    {
        id: uuidv4(),
        numero: '3.',
        texto: 'Limitado a un regalo por semana'
    },
    {
        id: uuidv4(),
        numero: '4.',
        texto: 'Participan negocios afiliados en baz súperapp'
    }
];

export const PERSONAS=[
    {
        id: uuidv4(),
        imgUrl: './assets/Numero1.svg',
        texto: 'Recarga $150 MXN o más a tu cuenta baz',
        numero: '1',
    },
    {
        id: uuidv4(),
        imgUrl: './assets/Numero2.svg',
        texto: 'Paga 2 o hasta 4 veces con QR, Chat o Cercanía en negocios afiliados baz',
        ganas: 'Ganas $25 MXN',
        numero: '2',
    },
    {
        id: uuidv4(),
        imgUrl: './assets/Numero3.svg',
        texto: 'Paga 5 veces o más con QR, Chat o Cercanía en negocios afiliados baz',
        ganas: 'Ganas $75 MXN',
        numero: '3',
    }
];

export const NEGOCIOS=[
    {
        id: uuidv4(),
        imgUrl: './assets/Numero1Rosa.svg',
        texto: 'Activa tu negocio baz',
        numero: '1',
    },
    {
        id: uuidv4(),
        imgUrl: './assets/Numero2Rosa.svg',
        texto: 'Cobra 2 o hasta 4 veces con QR, Chat o Cercanía',
        ganas: 'Ganas $25 MXN',
        numero: '2',
    },
    {
        id: uuidv4(),
        imgUrl: './assets/Numero3Rosa.svg',
        texto: 'Cobra 5 veces o más con QR, Chat o Cercanía',
        ganas: 'Ganas $100 MXN',
        numero: '3',
    }
];