import { isPrime } from "../helpers/isPrime";

export default class PrimeNumberController {
    static checkForPrime(req, res) {
        const { number } = req.query;
        if(typeof number === "undefined"){
            return res.status(404).send("Incorrect query parameter")
        } else if (isNaN(number)){
            return res.status(404).send("Please enter a number")
        } else {
            if(isPrime(number)){
                return res.status(200).send(`The number ${number} is a Prime number`)
            } else {
                return res.status(200).send(`The number ${number} is not a Prime number`)
            }
        }
    }
}