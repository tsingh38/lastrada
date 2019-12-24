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
      allPizzaSizes.push(new PizzaSizes('F','Family 32'));
      allPizzaSizes.push(new PizzaSizes('P','Party 38'));
       return allPizzaSizes;
   }


   fetchPriceOfAPizzaAdditionsAccordingToSize(selectedSize:String,selectedAddition:String){
    switch(selectedSize){
        case 'Small 26': return 0.50;
        case 'Normal 28': return 1;
        case 'Family 32': return 1.50;
        case 'Party 38': return 2;
        default: return 0.50;
    }

   }
 
fetchPriceOfAPizzaForASelectedSize(selectedPizza:PizzaUnit,selectedSize:String):Number{
 switch(selectedSize){
     case 'Small 26': return 8.99;
     case 'Normal 28': return 11.99;
     case 'Family 32': return 14.99;
     case 'Party 38': return 21.99;
     default: return 4.99;
 }
    
}

   
  

}

