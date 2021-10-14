import { Component, OnInit } from '@angular/core';
import { NetflixModel } from './models/netflix-model';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss']
})
export class GlobalComponent implements OnInit {
  public netflixModel : NetflixModel;
  

  constructor() {
    this.netflixModel = {
      nav: {
        title: "Warner Live",
        logo: {
          src: "/assets/wl.png",
          alt: "",
        }
      },
      hero: {
        title: "Los 5 más populares hoy",
        imgGallery: [{
          src: "/assets/ultimobaile.PNG",
          alt: "",
        },
       {
          src: "/assets/atresmetros.PNG",
          alt: "",
        },
        {
          src: "/assets/dangerouslife.PNG",
          alt: "",
        },
        {
          src: "/assets/yonunca.PNG",
          alt: "",
        },
        {
          src: "/assets/thelast.PNG",
          alt: "",
        }
      ]
      },
      comedy: {
        title: "Comedias",
        imgGallery: [{
          src: "/assets/tagppal.jpg",
          alt: "",
        },
       {
          src: "/assets/elgranstan.jpg",
          alt: "",
        },
        {
          src: "/assets/sherlock.jpg",
          alt: "",
        },
        {
          src: "/assets/nochedejuegos.jpg",
          alt: "",
        },
        {
          src: "/assets/salidosdecuentas.jpg",
          alt: "",
        },
        {
          src: "/assets/noviaporcontrato.jpg",
          alt: "",
        }
      ]
      },
      drama: {
    title: "Dramas basados en libros",
    imgGallery: [{
      src: "/assets/loscien.jpg",
      alt: "",
    },
   {
      src: "/assets/americancrimestory.jpg",
      alt: "",
    },
    {
      src: "/assets/mindhunter.jpeg",
      alt: "",
    },
    {
      src: "/assets/alteredcarbon.jpg",
      alt: "",
    },
    {
      src: "/assets/portrecerazones.jpeg",
      alt: "",
    },
    {
      src: "/assets/thewitcher.jpg",
      alt: "",
    }
  ]

      },
    }
  }
 
    
  ngOnInit(): void {}
} 