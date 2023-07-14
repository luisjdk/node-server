¿Qué sucedió al usar async y await?

Al utilizar async y await, podemos escribir el código de manera más sincrónica y legible, evitando el anidamiento excesivo de callbacks y mejorando la estructura del flujo de control. Con await, podemos esperar a que las promesas se resuelvan o se rechacen antes de continuar con la ejecución del código. Esto hace que el código sea más fácil de entender y mantener, ya que se asemeja a un estilo de programación secuencial.

¿Qué sucedió al usar el método then()?

Al utilizar el método then(), se pueden encadenar las promesas y definir callbacks para manejar tanto el resultado exitoso (resuelto) como los errores (rechazados) de la promesa. El método then() se utiliza para manejar el flujo asíncrono y obtener los resultados o errores de las promesas.

¿Qué diferencias encontraste entre async, await y el método then()?

async y await proporcionan una sintaxis más legible y sincrónica para trabajar con promesas, lo que facilita la escritura y comprensión del código asincrónico.
El uso de async en una función nos permite utilizar await para esperar que una promesa se resuelva antes de continuar con la ejecución del código.
El método then() se utiliza para encadenar callbacks y manejar los resultados y errores de una promesa. Proporciona una forma más tradicional de trabajar con promesas y es útil cuando no se puede utilizar await, como en el caso de trabajar con promesas fuera de una función async.
