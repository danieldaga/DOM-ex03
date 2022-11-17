Vamos a hacer una aplicación que se encargará de calcular el coste de un viaje. Para ello tendremos una función llamada 'calcularCoste()' que llamará a otras tres funciones.
Cada una de estas tres funciones hará un cálculo de un coste parcial del viaje. La suma de los tres costes será el coste total del viaje.

'calcularCoste()' 
    -Es la única que se conecta con el HTML. Para recuperar datos y pintar los resultados.
    -No tiene return.
    -La activamos al hacer click.


costeHotel(), costeAvion(), costeAlquiler()

    -No tienen contacto con el HTML.
    -Tienen parámetros de entrada.
    -Tienen return.
costeHotel()
Además de la función calcular_coste(), crea una función llamada costeHotel() que recibe como parámetro el número de noches. La función debe devolver cuánto es necesario pagar teniendo en cuenta que cada noche cuesta 140 euros.

costeAlquilerCoche()

La función costeAlquilerCoche() tiene como parámetro de entrada el número de noches y devolverá un coste en función de dicho parámetro, teniendo los siguientes aspectos en cuenta:
    -Cada día de alquiler cuesta 40 €.
    -Si alquilas un coche por 3 días o más, obtienes un descuento de 20€ sobre el total.
    -Si alquilas un coche por 7 días o más, obtienes un descuento de 50€ sobre el total (no acumulable con los 20€ de haber alquilado por más de 3 días).

costeAvion()

La función costeAvion() tiene como parámetro de entrada el nombre de una ciudad y el número de noches. El coste corresponderá al indicado en la siguiente tabla, pero para una estancia de más de tres noches la agencia de viaje nos hará un descuento del 10%.
Los costes por ciudad son los siguientes:
«Oviedo»: 15
«Tokyo»: 700
«Madrid»: 90
«Barcelona»: 90