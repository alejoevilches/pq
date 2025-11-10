## Tech Debt

- Las contraseñas no estan hasheadas
- Por defecto los usuarios son admins
- Falta tipar varias estructuras
- REGISTER: Faltan validaciones en el front
- REGISTER: Faltan validaciones en el back
- REGISTER: El usuario solo deberia existir una sola vez
- REGISTER: Cuando se crea tiene que aparecer un modal
- API: Todas las apis recorren solo el happy path
- CREAR LOCAL: El modal hace queries a la db constantemente sobre zonas y tipo de lugar, ver de cachear eso
- ARCH: Mover todos los tipos a un solo directorio
- API: Hacer que los services consuman una funcion depende de la accion (update, create, edit, read)
- API DELETE PLACE: No es post el metodo, deberia ser delete
- LOGOUT: Modal que indique que la sesion esta cerrada
- PROFILE: La pagina deberia estar protegida si no iniciaste sesion
- TRIPS: Necesito el toast que diga que se elimino el viaje y que se actualice la pagina.
- DB: Desde la db tiene que haber un bool que diga que debe ser agregado en la portada el local