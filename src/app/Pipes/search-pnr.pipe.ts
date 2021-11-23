import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPnr'
})
export class SearchPnrPipe implements PipeTransform {

  transform(value: any, filterString: string): any {
    console.warn("Inside of Pipe Search PNR");
    if(value.length === 0 || filterString == ""){
      return value;
    }
    return value.filter(function(search: { pnrNo: string; }){
      return search.pnrNo.toLowerCase().indexOf(filterString.toLowerCase())> -1
    });
  }

}
