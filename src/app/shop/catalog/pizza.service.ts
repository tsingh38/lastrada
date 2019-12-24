import { PizzaUnit } from './pizzaunit.model'
import { PizzaAdditions } from './pizzaAdditions.model';
import { Subject } from 'rxjs';
import { PizzaSizes } from './Pizzasizes.model';

export class PizzaService {

    priceEmitter=new Subject<Number>();
   
    fetchAllPizzas(): PizzaUnit[] {
        //TODO use REST to fetchPizza data from Server
        //Mock up
        var allPizzasList: PizzaUnit[] = [];
        allPizzasList.push(new PizzaUnit('1', 'Margherita', 'Große Wahl aus Small,Klein Groß Gut gebacken', 6));
        allPizzasList.push(new PizzaUnit('1', 'Indisch', 'Große Wahl aus Small,Klein Groß Gut gebacken', 6));
        allPizzasList.push(new PizzaUnit('1', 'Diavolo', 'Große Wahl aus Small,Klein Groß Gut gebacken', 7));
        allPizzasList.push(new PizzaUnit('1', 'Artischocken', 'Große Wahl aus Small,Klein Groß Gut gebacken', 6));
        allPizzasList.push(new PizzaUnit('1', 'Ananas', 'Große Wahl aus Small,Klein Groß Gut gebacken', 9));
        allPizzasList.push(new PizzaUnit('1', 'Salami', 'Große Wahl aus Small,Klein Groß Gut gebacken', 6));
console.log(allPizzasList);

        return allPizzasList;

    }
    fetchAllPizzaAdditions():PizzaAdditions[] {
        //TODO use REST to fetchPizza data from Server
       //Mock up
       var allPizzasAdditions: PizzaAdditions[] = [];
       allPizzasAdditions.push(new PizzaAdditions('1','Ananas','Bio Ananas with good Quality',1));
       allPizzasAdditions.push(new PizzaAdditions('2','knaubloch','Bio knaubloch with good Quality',0.50));
       allPizzasAdditions.push(new PizzaAdditions('3','Ingewer','Bio Ingewer with good Quality',1));
       allPizzasAdditions.push(new PizzaAdditions('4','Käse','Bio Käse with good Quality',1));
       allPizzasAdditions.push(new PizzaAdditions('5','Broccoli','Bio Broccoli with good Quality',0.50));
       allPizzasAdditions.push(new PizzaAdditions('1','Ananas','Bio Ananas with good Quality',1));
       allPizzasAdditions.push(new PizzaAdditions('2','knaubloch','Bio knaubloch with good Quality',0.50));
       allPizzasAdditions.push(new PizzaAdditions('3','Ingewer','Bio Ingewer with good Quality',1));
       allPizzasAdditions.push(new PizzaAdditions('4','Käse','Bio Käse with good Quality',1));
       allPizzasAdditions.push(new PizzaAdditions('5','Broccoli','Bio Broccoli with good Quality',0.50));
       allPizzasAdditions.push(new PizzaAdditions('1','Ananas','Bio Ananas with good Quality',1));
       allPizzasAdditions.push(new PizzaAdditions('2','knaubloch','Bio knaubloch with good Quality',0.50));
       allPizzasAdditions.push(new PizzaAdditions('3','Ingewer','Bio Ingewer with good Quality',1));
       allPizzasAdditions.push(new PizzaAdditions('4','Käse','Bio Käse with good Quality',1));
       allPizzasAdditions.push(new PizzaAdditions('5','Broccoli','Bio Broccoli with good Quality',0.50));
       allPizzasAdditions.push(new PizzaAdditions('1','Ananas','Bio Ananas with good Quality',1));
       allPizzasAdditions.push(new PizzaAdditions('2','knaubloch','Bio knaubloch with good Quality',0.50));
       allPizzasAdditions.push(new PizzaAdditions('3','Ingewer','Bio Ingewer with good Quality',1));
       allPizzasAdditions.push(new PizzaAdditions('4','Käse','Bio Käse with good Quality',1));
       allPizzasAdditions.push(new PizzaAdditions('5','Broccoli','Bio Broccoli with good Quality',0.50));
       allPizzasAdditions.push(new PizzaAdditions('1','Ananas','Bio Ananas with good Quality',1));
       allPizzasAdditions.push(new PizzaAdditions('2','knaubloch','Bio knaubloch with good Quality',0.50));
       allPizzasAdditions.push(new PizzaAdditions('3','Ingewer','Bio Ingewer with good Quality',1));
       allPizzasAdditions.push(new PizzaAdditions('4','Käse','Bio Käse with good Quality',1));
       allPizzasAdditions.push(new PizzaAdditions('5','Broccoli','Bio Broccoli with good Quality',0.50));
       allPizzasAdditions.push(new PizzaAdditions('1','Ananas','Bio Ananas with good Quality',1));
       allPizzasAdditions.push(new PizzaAdditions('2','knaubloch','Bio knaubloch with good Quality',0.50));
       allPizzasAdditions.push(new PizzaAdditions('3','Ingewer','Bio Ingewer with good Quality',1));
       allPizzasAdditions.push(new PizzaAdditions('4','Käse','Bio Käse with good Quality',1));
       allPizzasAdditions.push(new PizzaAdditions('5','Broccoli','Bio Broccoli with good Quality',0.50));
       allPizzasAdditions.push(new PizzaAdditions('1','Ananas','Bio Ananas with good Quality',1));
       allPizzasAdditions.push(new PizzaAdditions('2','knaubloch','Bio knaubloch with good Quality',0.50));
       allPizzasAdditions.push(new PizzaAdditions('3','Ingewer','Bio Ingewer with good Quality',1));
       allPizzasAdditions.push(new PizzaAdditions('4','Käse','Bio Käse with good Quality',1));
       allPizzasAdditions.push(new PizzaAdditions('5','Broccoli','Bio Broccoli with good Quality',0.50));
       allPizzasAdditions.push(new PizzaAdditions('1','Ananas','Bio Ananas with good Quality',1));
       allPizzasAdditions.push(new PizzaAdditions('2','knaubloch','Bio knaubloch with good Quality',0.50));
       allPizzasAdditions.push(new PizzaAdditions('3','Ingewer','Bio Ingewer with good Quality',1));
       allPizzasAdditions.push(new PizzaAdditions('4','Käse','Bio Käse with good Quality',1));
       allPizzasAdditions.push(new PizzaAdditions('5','Broccoli','Bio Broccoli with good Quality',0.50));
       allPizzasAdditions.push(new PizzaAdditions('1','Ananas','Bio Ananas with good Quality',1));
       allPizzasAdditions.push(new PizzaAdditions('2','knaubloch','Bio knaubloch with good Quality',0.50));
       allPizzasAdditions.push(new PizzaAdditions('3','Ingewer','Bio Ingewer with good Quality',1));
       allPizzasAdditions.push(new PizzaAdditions('4','Käse','Bio Käse with good Quality',1));
       allPizzasAdditions.push(new PizzaAdditions('5','Broccoli','Bio Broccoli with good Quality',0.50));
       allPizzasAdditions.push(new PizzaAdditions('1','Ananas','Bio Ananas with good Quality',1));
       allPizzasAdditions.push(new PizzaAdditions('2','knaubloch','Bio knaubloch with good Quality',0.50));
       allPizzasAdditions.push(new PizzaAdditions('3','Ingewer','Bio Ingewer with good Quality',1));
       allPizzasAdditions.push(new PizzaAdditions('4','Käse','Bio Käse with good Quality',1));
       allPizzasAdditions.push(new PizzaAdditions('5','Broccoli','Bio Broccoli with good Quality',0.50));
       allPizzasAdditions.push(new PizzaAdditions('1','Ananas','Bio Ananas with good Quality',1));
       allPizzasAdditions.push(new PizzaAdditions('2','knaubloch','Bio knaubloch with good Quality',0.50));
       allPizzasAdditions.push(new PizzaAdditions('3','Ingewer','Bio Ingewer with good Quality',1));
       allPizzasAdditions.push(new PizzaAdditions('4','Käse','Bio Käse with good Quality',1));
       allPizzasAdditions.push(new PizzaAdditions('5','Broccoli','Bio Broccoli with good Quality',0.50));
       allPizzasAdditions.push(new PizzaAdditions('1','Ananas','Bio Ananas with good Quality',1));
       allPizzasAdditions.push(new PizzaAdditions('2','knaubloch','Bio knaubloch with good Quality',0.50));
       allPizzasAdditions.push(new PizzaAdditions('3','Ingewer','Bio Ingewer with good Quality',1));
       allPizzasAdditions.push(new PizzaAdditions('4','Käse','Bio Käse with good Quality',1));
       allPizzasAdditions.push(new PizzaAdditions('5','Broccoli','Bio Broccoli with good Quality',0.50));
    
         return allPizzasAdditions;
   }


   fetchAllPizzaSizes():PizzaSizes[]{
      var allPizzaSizes:PizzaSizes[]=[];
      allPizzaSizes.push(new PizzaSizes('S','Small 26'));
      allPizzaSizes.push(new PizzaSizes('N','Normal 28'));
      allPizzaSizes.push(new PizzaSizes('F','Small 32'));
      allPizzaSizes.push(new PizzaSizes('P','Small 38'));
       return allPizzaSizes;
   }

 
fetchPriceOfAPizzaForASelectedSize(selectedPizza:PizzaUnit,selectedSize:String):Number{
    //TODO
    return 10.99;
}

   
  

}

