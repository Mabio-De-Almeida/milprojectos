# milprojectos


/* Styles for medium-sized screens (768px - 1024px) */
@media (min-width: 769px) and (max-width: 1024px) {
  /* Adjust layout and spacing for medium-sized screens */
  .container {
    max-width: 960px;
    margin: 0 auto;
  }
}

/* Styles for large screens (1024px and above) */
@media (min-width: 1025px) {
  /* Adjust layout and spacing for larger screens */
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
}





.nav-links {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

 @media screen and (min-width: 1300px ) {
  .logo{
    left: 1%;
  }
 }
/* Styles for devices with a screen width between 1200px and 1300px */
@media screen and (max-width: 1300px) {
  /* Add your styles here */
  body {
    font-size: 16px; /* Example style */
  }

  .container {
    width: 90%; /* Example style */
  }

  .logo{
    position: absolute;
    left: -12%;
  }
  
}


/* For devices width a screen width between 961 and 1300 px*/
@media screen and (min-width: 1110px) and (max-width:1200px){
  body{
    overflow-x: hidden;
  }
    .logo{
      position: absolute;
      left: -15%;
    }    

    h1{
      font-size: 70px;
    }

    .hero-img{
      height: 400px;
    }

    .detalhe{
      position: absolute;
      bottom: -25px;
    }

    .container{
      width: 90%;
    }

    /* flip card*/
    
      .title:before {
        left: 23%;
      }

      .title:after {
        right: 23%;
      }

      /*yellow*/
      .yellow{
        padding: 31px;
      }
      /*news*/
      .news-txt{
        padding: 20px 50px 20px 25px;
      }


    }

@media screen and (max-width: 1110px) {

  .logo {

  }
}








/*programacao*/

@media (max-width: 1180px) {
  
  .header{
    height: fit-content;
  }

  .container{
    max-width: 1025px;
    margin: 0 auto;
  }

  .menu{
    display: none;
  }
  

  h1{
    font-size: 52px ;
  }
  /*ETAPAS*/
  .etapas{
    padding-bottom: 10px;
  }
  .title:before{
    left: 30%;
    top: 50%;
    width: 50px;
    }
  
  .title:after{
    right: 30%;
    top: 50%;
    width: 50px;
    }
  
    .yellow{
      padding: 50px 20px 20px 10px;
    }
  /*news*/
  news{
    flex-wrap: wrap;
    max-width:1025px;
    padding: 20px;
    justify-content: space-between;
  }

  .news-txt{
    margin-bottom: 100px;
    padding: 35px 50px 0px 10px;
    margin-right: 100px;
  }
 
.slider-container {
  position: relative;
  margin: 0 auto;
  max-width: 330px;
}

.news .container {
  border-radius: 10px;
  /*box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);*/
}

  .card {
    flex: 0 0 330px;
    padding: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    background-color: var(--cor-preto);
    margin-right: 20px;
    height: 400px;
  }
  
.card-header {
  display: flex;
  align-items: center;
  padding-top: 25px;
  margin-bottom: 10px;
}

.card-header img {
  margin-left: 10px;
  width: 80px;
  height: 80px;
  margin-right: 10px;
}

.card-header h2 {
  font-size: 30px;
  font-weight: 700;
  transform: uppercase;
  line-height: 0.75;
  color: var(--cor-branco);
  margin-bottom: 10px;
}

.card-header h4{
  margin-top: 0;
  color: var(--cor-branco);
  font-weight: 400;
}

.card-body p {
  font-size: 14px;
  color: var(--cor-branco);
  margin: 0;
  width: 95%;
}


.btn-next {
  right: -50px;
}


/*mentores*/

.mentores{
  max-width: 1180px;
}
.sub{
  margin-left: 30px;
  font-size: 42px;
  text-align: left;
}
.sub::after {
  width: 120px;
  left: 8%;
  height: 2px;
  padding: 10px;
  z-index: -1;
}

.mentores-container{
  display: flex;
  justify-content: center;
}
.card-mentores{
  flex-basis: 300px;
  background-color: #fff;
}


}



@media (max-width: 1300px){


  /*header*/
  .menu {
    position: relative;
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items:center;
    align-items: flex-end;
    flex-grow: 1; /* Permite que o menu ocupe todo o espaço disponível */
    margin-left: 300px;
}
  
.logo {
  position: absolute;
  top: -70px;
  left: -23%;
}

.logo img {
  height: 200px; /* Altura da imagem do logo */
}

  .menu a {
    color: #fff;
    text-decoration: none;
    margin-right: 20px;
    font-family: 'Poppins', sans-serif; /* Utiliza a fonte Poppins */
    font-weight: regular; /* Define o estilo "bold" (negrito) para os links */
  }

  .menu a:last-child{
    margin-left: 0px !important;

  }

  .menu a:hover {
    text-decoration: underline;
  }
  
  /* Alinha o botão à direita */
  
  .btn-inscrever:hover {
    background-color: #fbcb2d;
  }

  .header{
    height: fit-content;
  }

  /*header*/


  /*etapas*/

  .etapas{
    padding-bottom: 100px;
  
  }

  /*news*/
.news{
  background-color: var(--cor-rosa);
  padding: 100px 100px 100px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
/*flex: 1;*/

.news-txt {
  position: relative;
  margin: 0 auto;
  background-color: var(--cor-amarelo);
  padding: 20px 150px 20px 100px;
  max-width: 400px;
}
.news-txt::after{
  content:"";
  display: block;
  width: 20px;
  height: 250px;
  background: var(--cor-preto);
  position:absolute;
  right: 0;
  top: 0%;
}

h3{
  font-size: 32px;
  margin: 0 auto;
  font-weight: 900;
}


/*flex: 1;*/
.slider-container {
  position: relative;
  max-width: 500px;
  display: flex;
  justify-content: right;
  align-items: center;
}

.news .container {
  overflow-x: hidden;
  border-radius: 10px;
  /*box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);*/
}

.card-slider {
  display: flex;
  transition: transform 0.5s;
}

.card {
  flex: 0 0 500px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background-color: var(--cor-preto);
  margin-right: 20px;
  height: 400px;
}

.btn-prev,
.btn-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: var(--cor-amarelo);
  color: #fff;
  border: none;
  padding: 10px;
  font-size: 20px;
  border-radius: 50%;
  cursor: pointer;
}

.btn-prev {
  left: -50px;
}

.btn-next {
  right: -50px;
}

.btn-prev:hover,
.btn-next:hover {
  background-color: #fbcb2d;
}

.card-header {
  display: flex;
  align-items: center;
  padding-top: 50px;
  margin-bottom: 10px;
}

.card-header img {
  width: 100px;
  height: 100px;
  margin-right: 10px;
}

.card-header h2 {
  font-size: 36px;
  font-weight: 700;
  transform: uppercase;
  line-height: 0.75;
  color: var(--cor-branco);
  margin-bottom: 10px;
}
.card-header h4{
  margin-top: 0;
  color: var(--cor-branco);
  font-weight: 400;
}

.card-body p {
  font-size: 18px;
  color: var(--cor-branco);
  margin: 0;
  width: 500px;
}

.circle-yellow {
  width: 50px;
  height: 50px;
  background-color: var(--cor-amarelo);
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -30px;
  right: -15px;
  border: 5px solid var(--cor-rosa);
  z-index: 1;
}

.circle-yellow img{
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
}


/**/

/*mentores*/

.mentores{
  max-width: 1300px;
}
.sub{
  margin-left: 30px;
  font-size: 56px;
  text-align: left;
}
.sub::after {
  width: 200px;
  left: 8%;
  height: 2px;
  padding: 15px;
  z-index: -1;
}

.mentores-container{
  display: flex;
}
.card-mentores{
  flex-basis: 260px;
  background-color: #fff;
}

}


  