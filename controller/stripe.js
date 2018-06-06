let stripe = require('stripe')('sk_test_bs5DYygkPeG1BfMfiadn8quI');

let confirmPayment = (req, res, next) => {
    console.log('Payment in on progress');
    // const amount = 100;

    let stripeEmail = req.body.stripeEmail,
        stripeToken = req.body.stripeToken,
        stripeAmout = req.body.stripeAmount*100;

    console.log('Stripe Amount: ' +stripeAmout);

    console.log(req.body);
    console.log('mail: ' + stripeEmail);
    console.log('token: ' + stripeToken);

    stripe.customers.create({
        email: stripeEmail
    }).then(function(customer){
        return stripe.customers.createSource(customer.id, {
            source: 'tok_visa'
        });
    }).then(function(source) {
        return stripe.charges.create({
            amount: stripeAmout,
            currency: 'usd',
            customer: source.customer
        });
    }).then(function(charge) {
        //return res.send(true);
        // New charge created on a new customer

        return res.status(200).json({
            success: true,
            message: 'You have successfully paid $' + stripeAmout
        });

    }).catch(function(err) {
        return res.status(401).json({
            success: false,
            message: 'Failed to make the payment: ' + err
        });
        // Deal with an error
    });
};

module.exports = {
    confirmPayment
};