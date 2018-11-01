import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arraySortPipe'
})
export class ArraySortPipePipe implements PipeTransform {

  transform(array: Array<string>, args: string): Array<string> {
    if(array){
    array.sort((a: any, b: any) => {
      if (a.fortName < b.fortName) {
        return -1;
      } else if (a.fortName > b.fortName) {
        return 1;
      } else {
        return 0;
      }
    });
  }
    return array;
  }

}
