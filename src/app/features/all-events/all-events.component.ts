import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.css']
})
export class AllEventsComponent {
  constructor(private router: Router) { }
  navigate(eventId: any) {
    this.router.navigate(['/event/' + eventId])
  }
  searchText: string = '';
  isAddModalOpen: boolean = false;
  newEvent = {
    name: '',
    location: '',
    img: '',
    time: ''
  };

  events = [
    {
      id: 1,
      name: 'Dabo',
      location: '6, New Manish Nagar, Somalwada Nagpur',
      img: 'assets/dabo.jpg',
      time: 'Open until 1:30 am'
    },
    {
      id: 2,
      name: 'The Cafe Barrel',
      location: 'Mangalam complex, Dharampeth Nagpur',
      img: 'assets/the-cafe-barrel.jpg',
      time: 'Open until 1:30 am'
    },
    {
      id: 3,
      name: 'Raasta',
      location: '20th Floor, Ved Solitaire, Dharampeth, Nagpur',
      img: 'assets/raasta.jpg',
      time: 'Open until 1:30 am'
    },
    {
      id: 4,
      name: 'Lord of the Drinks',
      location: 'Ground floor, Poonam mall, VIP road',
      img: 'assets/lord-of-the-drinks.jpg',
      time: 'Open until 1:30 am'
    },
    {
      id: 5,
      name: 'The Locals',
      location: 'Second floor, 2, Mount Rd, above Zuree kitchen, Mohan Nagar, Nagpur',
      img: 'assets/the-locals.jpg',
      time: 'Open until 1:30 am'
    },
    {
      id: 6,
      name: 'Lord of the Drinks',
      location: 'Ground floor, Poonam mall, VIP road',
      img: 'assets/lord-of-the-drinks.jpg',
      time: 'Open until 1:30 am'
    },
    {
      id: 7,
      name: 'The Locals',
      location: 'Second floor, 2, Mount Rd, above Zuree kitchen, Mohan Nagar, Nagpur',
      img: 'assets/the-locals.jpg',
      time: 'Open until 1:30 am'
    },
    {
      id: 8,
      name: 'Lord of the Drinks',
      location: 'Ground floor, Poonam mall, VIP road',
      img: 'assets/lord-of-the-drinks.jpg',
      time: 'Open until 1:30 am'
    },
    {
      id: 9,
      name: 'The Locals',
      location: 'Second floor, 2, Mount Rd, above Zuree kitchen, Mohan Nagar, Nagpur',
      img: 'assets/the-locals.jpg',
      time: 'Open until 1:30 am'
    },
    {
      id: 10,
      name: 'Lord of the Drinks',
      location: 'Ground floor, Poonam mall, VIP road',
      img: 'assets/lord-of-the-drinks.jpg',
      time: 'Open until 1:30 am'
    },
    {
      id: 11,
      name: 'The Locals',
      location: 'Second floor, 2, Mount Rd, above Zuree kitchen, Mohan Nagar, Nagpur',
      img: 'assets/the-locals.jpg',
      time: 'Open until 1:30 am'
    },
    {
      id: 12,
      name: 'Lord of the Drinks',
      location: 'Ground floor, Poonam mall, VIP road',
      img: 'assets/lord-of-the-drinks.jpg',
      time: 'Open until 1:30 am'
    },
    {
      id: 13,
      name: 'The Locals',
      location: 'Second floor, 2, Mount Rd, above Zuree kitchen, Mohan Nagar, Nagpur',
      img: 'assets/the-locals.jpg',
      time: 'Open until 1:30 am'
    },
    {
      id: 14,
      name: 'Lord of the Drinks',
      location: 'Ground floor, Poonam mall, VIP road',
      img: 'assets/lord-of-the-drinks.jpg',
      time: 'Open until 1:30 am'
    },
    {
      id: 15,
      name: 'The Locals',
      location: 'Second floor, 2, Mount Rd, above Zuree kitchen, Mohan Nagar, Nagpur',
      img: 'assets/the-locals.jpg',
      time: 'Open until 1:30 am'
    },
    {
      id: 16,
      name: 'Lord of the Drinks',
      location: 'Ground floor, Poonam mall, VIP road',
      img: 'assets/lord-of-the-drinks.jpg',
      time: 'Open until 1:30 am'
    },
    {
      id: 17,
      name: 'The Locals',
      location: 'Second floor, 2, Mount Rd, above Zuree kitchen, Mohan Nagar, Nagpur',
      img: 'assets/the-locals.jpg',
      time: 'Open until 1:30 am'
    }
  ];

  openAddModal() {
    this.isAddModalOpen = true;
  }

  closeAddModal() {
    this.isAddModalOpen = false;
  }

  addEvent() {
    this.events.push({ id: this.events.length, ...this.newEvent });

    console.log(this.events);

    this.newEvent = { name: '', location: '', img: '', time: '' };
    this.closeAddModal();
  }
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const base64String = e.target.result;
        this.newEvent.img = base64String;
      };
      reader.readAsDataURL(file);
    }
  }
}
