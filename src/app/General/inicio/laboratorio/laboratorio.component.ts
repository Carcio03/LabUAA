import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laboratorio',
  templateUrl: './laboratorio.component.html',
  styleUrls: ['./laboratorio.component.css']
})
export class LaboratorioComponent implements OnInit {
  count = 0;
  seats: NodeListOf<Element> = document.querySelectorAll('.grid-container .seat:not(.occupied)');
  selectedSeats: number[] = [];

  ngOnInit() {
    this.seats = document.querySelectorAll('.grid-container .seat:not(.occupied)');
    this.populateUI();

    const countElement = document.getElementById('count');
    if (countElement) {
      countElement.innerText = this.count.toString();
    }

    this.seats.forEach(seat => {
      seat.addEventListener('click', () => {
        if (!seat.classList.contains('occupied')) {
          seat.classList.toggle('selected');
          this.updateSelectedCount();
        }
      });
    });
  }

  updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.grid-container .seat.selected');

    this.selectedSeats = Array.from(selectedSeats).map(seat => Array.from(this.seats).indexOf(seat));

    localStorage.setItem('selectedSeats', JSON.stringify(this.selectedSeats));

    this.count = selectedSeats.length;

    const countElement = document.getElementById('count');
    if (countElement) {
      countElement.innerText = this.count.toString();
    }
  }

  populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats') || '[]');
    if (selectedSeats !== null && selectedSeats.length > 0) {
      this.seats.forEach((seat, index) => {
        if (selectedSeats.indexOf(index) > -1) {
          seat.classList.add('selected');
        }
      });
    }
  }
}
