## Tech Debt

- Las contraseñas no estan hasheadas
- Por defecto los usuarios son admins
- Falta tipar varias estructuras
- REGISTER: Faltan validaciones en el front
- REGISTER: Faltan validaciones en el back
- REGISTER: El usuario solo deberia existir una sola vez
- REGISTER: Cuando se crea tiene que aparecer un modal y redirigir a la pagina principal
- API: Todas las apis recorren solo el happy path
- CREAR LOCAL: El modal hace queries a la db constantemente sobre zonas y tipo de lugar, ver de cachear eso
- ARCH: Mover todos los tipos a un solo directorio