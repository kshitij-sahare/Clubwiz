import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(events: any[], searchText: string): any[] {
    if (!events) return [];
    if (!searchText) return events;
    
    searchText = searchText.toLowerCase();
    
    return events.filter(event => {
      return event.name.toLowerCase().includes(searchText) || 
             event.location.toLowerCase().includes(searchText);
    });
  }
}
