const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const htmlToText = require('nodemailer-html-to-text').htmlToText;
const { email, password } = require('./config');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass: password,
    }
});

transporter.use('compile', htmlToText());

const sendOrderEmail = data => {
    const options = {
        from: `MRDonald's ${email}`,
        to: data.email,
        subject: `Your order from MRDonald's on its way`,
        html: `
            <div>
                <h2>Dear customer ${data.nameClient}</h2>
                <h3>Your order is:</h3>
                <ul>
                    ${data.order.map(({ name, count, price, topping, choice }) => {
                       const toppings = topping !== 'no topping' ? (' with ' + topping) : '';
                       const choices = choice !== 'no choices' ? ` (${choice})` : '';
                       return `<li>${name}${toppings}${choices} - ${count} item(s), price: ${price*count} rub</li>`;
                    })};
                </ul>
                <p>To pay: ${data.order.reduce((sum, item) => 
                        sum + (item.price + item.count), 0)} rub</p>
                <small>Please wait for delivery</small>
            </div>
        `,
    };

    transporter.sendMail(options);
}

exports.sendUserEmail = functions.database.ref('orders/{pushID}')
    .onCreate(order => sendOrderEmail(order.val()));