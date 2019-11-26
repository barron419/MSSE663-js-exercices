import { of } from 'rxjs';


export const source = of(["Ford", "GMC", "Dodge", "Porsche"]);

source.subscribe(cars => console.log(cars));