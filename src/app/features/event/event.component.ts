import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit(): void {
    setInterval(() => {
      this.showSlide(this.currentIndex + 1);
    }, 3000);
  }
  isEditModalOpen = false;
  isCoupleFeeExpanded = false;
  isStagFeeExpanded = false;

  currentIndex = 0;

  showSlide(index: number) {
    const sliderWrapper = document.getElementById('slider-wrapper');
    const totalImages = sliderWrapper!.children.length;
    if (index >= totalImages) {
      this.currentIndex = 0;
    } else if (index < 0) {
      this.currentIndex = totalImages - 1;
    } else {
      this.currentIndex = index;
    }
    const offset = -this.currentIndex * 100;
    sliderWrapper!.style.transform = `translateX(${offset}%)`;
  }

  nextSlide() {
    this.showSlide(this.currentIndex + 1);
  }

  prevSlide() {
    this.showSlide(this.currentIndex - 1);
  }

  goToAllEvents() {
    this.router.navigate(['/allEvents'])
  }
  eventData = {
    eventId: 1,
    title: "DABO",
    rating: 4.2,
    images: [
      { src: './../../assets/background-Image.jpg', alt: 'Event 1' },
      { src: './../../assets/background-Image-2.jpg', alt: 'Event 2' },
      { src: './../../assets/background-Image.jpg', alt: 'Event 3' }
    ],
    coupleFee: "$50 per couple",
    stagFee: "$30 per person",
    eventTitle: "Bollywood Night",
    eventSubtitle: "Performing Artist - Nucleya",
    specialOffer: "2+1 on IFML drinks",
    capacity: "200 pax capacity",
    parking: "Dedicated parking Space",
    location: "6, New Manish Nagar, Somalwada, Nagpur 440025",
    iframeLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119065.02905830946!2d78.9901080712679!3d21.161065901903683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31faf13%3A0x19b37d06d0bb3e2b!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1717750853373!5m2!1sen!2sin"
  };


  editData = {
    title: this.eventData.title,
    rating: this.eventData.rating,
    eventTitle: this.eventData.eventTitle,
    eventSubtitle: this.eventData.eventSubtitle,
    coupleFee: this.eventData.coupleFee,
    stagFee: this.eventData.stagFee,
    specialOffer: this.eventData.specialOffer,
    capacity: this.eventData.capacity,
    parking: this.eventData.parking,
    location: this.eventData.location,
    iframeLink: this.eventData.iframeLink,
 
    // details: `${this.eventData.specialOffer}\n${this.eventData.capacity}\n${this.eventData.parking}\n${this.eventData.location}\n${this.eventData.iframeLink}`
  };

  toggleCoupleFee() {
    this.isCoupleFeeExpanded = !this.isCoupleFeeExpanded;
  }

  toggleStagFee() {
    this.isStagFeeExpanded = !this.isStagFeeExpanded;
  }

  openEditModal() {
    this.isEditModalOpen = true;
  }

  closeEditModal() {
    this.isEditModalOpen = false;
    this.editData =  {...this.eventData}
  }

  saveEdits() {
    
    this.eventData.title= this.editData.title;
    this.eventData.rating =this.editData.rating;
    this.eventData.eventTitle = this.editData.eventTitle;
    this.eventData.eventSubtitle = this.editData.eventSubtitle;
    this.eventData.coupleFee = this.editData.coupleFee;
    this.eventData.stagFee = this.editData.stagFee;
    this.eventData.specialOffer = this.editData.specialOffer;
    this.eventData.capacity = this.editData.capacity;
    this.eventData.parking = this.editData.parking;
    this.eventData.location = this.editData.location;
    this.eventData.iframeLink = this.editData.iframeLink;
    this.closeEditModal();

  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const base64String = e.target.result;
        this.eventData.images.push({ src: base64String, alt: 'New Event Image' });
      };
      reader.readAsDataURL(file);
    }
  }
  deleteImage(index: number) {
    this.eventData.images.splice(index, 1);
  }

  bookTable() {
    this.router.navigate(['/bookTable', this.eventData.eventId])
  }
}
