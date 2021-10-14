export interface NetflixModel {   
    nav: Nav;
    hero; Hero;
    drama: Drama;
    comedy: Comedy; 
}

export interface Nav {
    title: string;
    logo: Img;
}

export interface Img {
    src: string;
    alt: string;
}

export interface Hero {
    title: string;
    imgGallery: Img[];
}


export interface Comedy {
    title: string;
    imgGallery: Img[];
}

export interface Drama {
    title: string;
    imgGallery: Img[];
