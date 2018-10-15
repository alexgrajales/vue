<template>
  <div>
    <div class="jumbotron">
        <h1>PROTOTIPO PARA LA TRANSFORMACIÓN BIDIRECCIONAL DE CÓDIGO ALICE Y JAVA</h1>
        <p class="lead">En la actualidad existen estudiantes de ingeniería de software y desarrolladores de que sufren de dislexia, esta patología puede generar menor rendimiento en dichos programadores generando deserción y problemas emocionales, debido a que no pueden mostrar todo su potencial en lenguajes de desarrollo basados en texto como Java, C#, Python, entre otros; sin embargo en lenguajes de programación visuales se desempeñan mejor debido a que es más simple y tienen que digitar menos, logrando un desempeño mayor. Por otra parte, vemos que en las empresas y universidades estos lenguajes visuales no son enseñados y usados para proyectos de desarrollo de software, son más usados java y c#, esto lo podemos ver en varios rankings en los cuales aparece java como el más usado y Alice aparece en el puesto 45, por esta razón no es viable que los programadores con dislexia puedan usar Alice en un entorno productivo o académico, debido a que no es muy comercial y perderían oportunidades a nivel laboral.
Es por esto que se necesita una herramienta que permita a los desarrolladores con dislexia, convertir el código de Alice a Java y de Java a Alice, logrando así  trabajar e interactuar sin ningún problema.
</p>
        
      </div>

      <div class="row marketing">
        <div class="col-lg-6">
          <h4>Objetivo 1</h4>
          <p>Identificar las características de los principales elementos de ambos lenguajes, revisando el comportamiento de cada una de sus estructuras, para la definición de reglas de funcionamiento de éstas, en cada uno de los lenguajes.</p>

          <h4>Objetivo 2</h4>
          <p>Analizar la relación entre los elementos de Alice y Java, mediante los diferentes diagramas UML, estableciendo niveles de comparación y relación que permitan el diseño de los algoritmos</p>

          <h4>Objetivo 3</h4>
          <p>Diseñar algoritmos basados en la relación de ambos lenguajes, utilizando diagramas que surgen de los artefactos anteriores, con la finalidad de que éstos sean funcionales en la implementación de un prototipo de software.</p>
        </div>

        <div class="col-lg-6">
          <h4>Objetivo 4</h4>
          <p>Desarrollar un prototipo de software con un lenguaje de programación moderno y bajo el uso de metodologías ágiles, que a través de una Interfaz Gráfica de Usuario (IGU) facilite la transformación bidireccional de código Alice y Java.</p>

          <h4>Objetivo 5</h4>
          <p>Validar la experiencia de los programadores con y sin dislexia a la hora de trabajar en equipos y usando el prototipo desarrollado, mediante un plan de pruebas y el acompañamiento de expertos, que establezcan niveles de satisfacción y desempeño a la hora de programar.</p>

          
        </div>
      </div>
  </div>
</template>

<script>
  export default{
    created(){
      this.$http.get("https:\\jsonplaceholder.typicode.com/users").then(response=>{
        console.log(response.data)
      })      
      .catch(e=>{
        console.log('error');
      })
    }
  }

</script>

<style>

</style>
