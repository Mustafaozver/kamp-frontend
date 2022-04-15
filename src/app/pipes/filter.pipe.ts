import { Product } from './../models/product';
import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipe implements PipeTransform {

  transform(value:Product[], filterText:string): Product[] {
    filterText = filterText?filterText.toLocaleLowerCase():""

    return  filterText?value.filter((p:Product)=>p.productName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}


//map,filter
