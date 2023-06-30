import React from 'react'
import profilePicture from "../4e3e0b93-b7a4-4cb4-b89c-030a79589800.jpg";
export default function about() {
  return (
    <div className="content-pagre-wrapper">
     <div className="left-column" 
     style={{
      background: "url(" + profilePicture + ") no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center"
     }}
     />
     <div className="right-column">
     La programación informática es el arte del proceso por el cual se limpia, codifica,
      traza y protege el código fuente de programas computacionales, en otras palabras, 
      es indicarle a la computadora lo que tiene que hacer.  
      La programación informática es una de las habilidades esenciales que aprendes cuando estudias informática.
     Detrás de todos los programas informáticos que conocemos y usamos de manera cotidiana para facilitarnos diversas actividades de nuestro día con día, existe todo un proceso para poderlos crear. Este proceso es conocido como programación, conozcamos un poco más sobre lo que conlleva este proceso.
     Por medio de la programación se establecen los pasos a seguir para la creación del código fuente de los diversos programas informáticos.
     Este código le indicara al programa informático que tiene que hacer y como realizarlo.
     </div>
    </div>
  );
}
