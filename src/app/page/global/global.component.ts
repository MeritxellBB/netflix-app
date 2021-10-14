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
          src: "",
          alt: "",
        }
      },
      hero: {
        title: "Los 5 más populares hoy",
        imgGallery: [{
          src: "",
          alt: "",
        },
       {
          src: "",
          alt: "",
        },
        {
          src: "",
          alt: "",
        },
        {
          src: "",
          alt: "",
        },
        {
          src: "",
          alt: "",
        }
      ]
      },
      comedy: {
        title: "Comedias",
        imgGallery: [{
          src: "",
          alt: "",
        },
       {
          src: "",
          alt: "",
        },
        {
          src: "",
          alt: "",
        },
        {
          src: "",
          alt: "",
        },
        {
          src: "",
          alt: "",
        }
      ]
      },
      drama: {
    title: "Dramas basados en libros",
    imgGallery: [{
      src: "",
      alt: "",
    },
   {
      src: "",
      alt: "",
    },
    {
      src: "",
      alt: "",
    },
    {
      src: "",
      alt: "",
    },
    {
      src: "",
      alt: "",
    }
  ]
      },
    }
  }
 
    
  ngOnInit(): void {}
} 