import Freecurrencyapi from '@everapi/freecurrencyapi-js';



const freecurrencyapi = new Freecurrencyapi('fca_live_ZQlKZvMRrKKyh2fvnEQMo4OmlwOwCrkofSXplvXj');

 convertcurrency( "INR","USD",3)
 export async function convertcurrency( fromcurrency,tocurrency,units){

 const res = await freecurrencyapi.latest({
    base_currency: fromcurrency,
    currencies: tocurrency


});
const multiplier = res.data [tocurrency];
return multiplier*units; 
}