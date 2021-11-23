import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchUser'
})
export class SearchUserPipe implements PipeTransform {

  transform(value: any, filterString: string): any {
    console.warn("Inside of Pipe ");
    if(value.length === 0 || filterString == ""){
      return value;
    }
    return value.filter(function(search: { user: { userEmail: string; }; }){
      return search.user.userEmail.toLowerCase().indexOf(filterString.toLowerCase())> -1
    });
  }

}
