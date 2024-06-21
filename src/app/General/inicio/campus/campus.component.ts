import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campus',
  templateUrl: './campus.component.html',
  styleUrls: ['./campus.component.css']
})
export class CampusComponent implements OnInit {
  buildings: { [key: number]: string[] } = {
    1: [
      "Edificio 2",
      "Edificio 23",
      "Edificio 59",
      "Edificio 10",
      "Edificio 40",
      "Edificio 65",
      "Edificio 12",
      "Edificio 43",
      "Edificio 69",
      "Edificio 15",
      "Edificio 54",
      "Edificio 70",
      "Edificio 19",
      "Edificio 56",
      "Edificio 72"
    ],
    2: [
      "Edificio 3",
      "Edificio 24",
      "Edificio 60",
      "Edificio 11",
      "Edificio 41",
      "Edificio 66",
      "Edificio 13",
      "Edificio 44",
      "Edificio 70",
      "Edificio 16",
      "Edificio 55",
      "Edificio 71",
      "Edificio 20",
      "Edificio 57",
      "Edificio 73"
    ],
    3: [
      "Edificio 4",
      "Edificio 25",
      "Edificio 61",
      "Edificio 14",
      "Edificio 42",
      "Edificio 67",
      "Edificio 17",
      "Edificio 45",
      "Edificio 71",
      "Edificio 18",
      "Edificio 58",
      "Edificio 72",
      "Edificio 21",
      "Edificio 59",
      "Edificio 74"
    ]
  };

  currentPage = 1;

  ngOnInit() {
    this.loadPage(this.currentPage);
    this.setActivePage(this.currentPage);

    document.querySelectorAll('.page-number').forEach(button => {
      button.addEventListener('click', () => {
        const page = button.getAttribute('data-page');
        if (page) {
          this.currentPage = parseInt(page);
          this.loadPage(this.currentPage);
          this.setActivePage(this.currentPage);
        }
      });
    });

    const prevPageButton = document.getElementById('prev-page');
    if (prevPageButton) {
      prevPageButton.addEventListener('click', () => {
        if (this.currentPage > 1) {
          this.currentPage--;
          this.loadPage(this.currentPage);
          this.setActivePage(this.currentPage);
        }
      });
    }

    const nextPageButton = document.getElementById('next-page');
    if (nextPageButton) {
      nextPageButton.addEventListener('click', () => {
        if (this.currentPage < Object.keys(this.buildings).length) {
          this.currentPage++;
          this.loadPage(this.currentPage);
          this.setActivePage(this.currentPage);
        }
      });
    }
  }

  loadPage(page: number) {
    const gridContainer = document.getElementById('grid-container');
    if (gridContainer) {
      gridContainer.innerHTML = '';
      if (this.buildings[page]) {
        this.buildings[page].forEach((building: string) => {
          const button = document.createElement('button');
          button.className = 'building-button';
          button.textContent = building;
          gridContainer.appendChild(button);
        });
      }
    }
  }

  setActivePage(page: number) {
    document.querySelectorAll('.page-number').forEach(button => {
      button.classList.remove('active');
      const pageNumber = button.getAttribute('data-page');
      if (pageNumber && parseInt(pageNumber) === page) {
        button.classList.add('active');
      }
    });
  }
}
