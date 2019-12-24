import { PizzaUnit } from './pizzaunit.model'
import { PizzaAdditions } from './pizzaAdditions.model';
import { Subject } from 'rxjs';
import { PizzaSizes } from './Pizzasizes.model';

export class PizzaGroupService {


    fetchAllPizzas(): PizzaUnit[] {
        //TODO use REST to fetchPizza data from Server
        //Mock up
        var allPizzasList: PizzaUnit[] = [];
        allPizzasList.push(new PizzaUnit('1', 'Margherita', 'Große Wahl aus Small,Klein Groß Gut gebacken', 6, 7, 14, 18));
        allPizzasList.push(new PizzaUnit('1', 'Indisch', 'Große Wahl aus Small,Klein Groß Gut gebacken', 6, 9, 11, 18));
        allPizzasList.push(new PizzaUnit('1', 'Diavolo', 'Große Wahl aus Small,Klein Groß Gut gebacken', 7, 9, 11, 19));
        allPizzasList.push(new PizzaUnit('1', 'Artischocken', 'Große Wahl aus Small,Klein Groß Gut gebacken', 6, 8, 9, 16));
        allPizzasList.push(new PizzaUnit('1', 'Ananas', 'Große Wahl aus Small,Klein Groß Gut gebacken', 9, 6, 9, 13));
        allPizzasList.push(new PizzaUnit('1', 'Salami', 'Große Wahl aus Small,Klein Groß Gut gebacken', 6, 7, 9, 45));
        console.log(allPizzasList);

        return allPizzasList;

    }
   
}

