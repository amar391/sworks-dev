import PrimeNumberController from "../services/isPrime";

export default (app) => {

    app.get('/checkPrime', PrimeNumberController.checkForPrime);
}