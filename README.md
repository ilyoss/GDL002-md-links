# Markdown Links
#### por Ily Trevino

![Funcionalidad básica de md-links](https://i.postimg.cc/kg4NZ7s9/2019-05-01-22h16-33.png)

## Breakdown del proyecto

![Funcionalidad básica de md-links](https://i.postimg.cc/Bngy5Z60/2019-05-01-21h32-33.png)

Para comenzar con el proyecto decidí generar un cuadro semántico para poder seguir, de manera visual, el flujo del programa en su forma más básica y ver dónde empezar.

Busqué empezar el proyecto con el siguiente formato: md-links <path>
Quité de consideración las opciones de validación y quise lograr el funcionamiento más basico, que incluyera:
- Obtener un path por parte del usuario
- Comprobar si es absoluto, o en dado caso convertirlo a absoluto para usarlo más adelante
- Si el path existe y es válido, se procede a buscar el archivo de tipo .md
- Una vez que se encuentra el archivo: se lee la información, se buscan los links,
se guardan en un arreglo y se muestran una vez cumplida la promesa.

Si bien este progreso no es muy significativo comparado con el tamaño del proyecto, es un avance del que me siento orgullosa, y me siento entusiasmada de poder retomar este proyecto pronto para terminarlo.

## Instrucciones de uso

El módulo md-links puede instalarse de la siguiente manera:
**npm install ilyoss/md-links**

## Milestones personales

Para el segundo sprint del proyecto pude comenzar un curso en línea de Node, ya que sentía que no estaba entendiendo bien lo más básico. Había comenzado el proyecto con los tests y sentía que iba por buen camino, pero preferí dar unos pasos atrás y empezar de cero.
Con el curso pude entender mejor lo que son los módulos de Node, lo que representa el package.json y los exports e imports, lo cuál me facilitó mucho poder avanzar lo que pude.
Si bien me quedé con ganas de mucho más, estos son algunos de los logros importantes para mí durante el proyecto:

- Se puede correr el código desde la terminal con el comando de md-Links
- Pude usar módulos para dar mejor formato a mi codigo y a mi CLI
- Al usar una ruta válida, como la de prueba, el archivo .md se lee correctamente
- Se muestran enlistados en forma de arreglo los datos de cada link

## Issues

El issue más grande para mi fue querer abordar muchas cosas sin poder entender lo básico. Sentía que me ahogaba con Node, pero con el curso me di cuenta que lo que necesitaba era tomarme el tiempo de empezar con unos ejercicios básicos.
Algunos de los issues actuales son:

- Los tests no han sido modificados para el código actual
- Falta implementar opciones en el código

## Checklist

### General

- [ ] Puede instalarse via `npm install --global <github-user>/md-links`

### `README.md`

- [x] Colocar el pseudo código o diagrama de flujo con el algoritmo que soluciona el problema.
- [ ] Un board con el backlog para la implementación de la librería.
- [ ] Documentación técnica de la librería.
- [ ] Guía de uso e instalación de la librería

### API `mdLinks(path, opts)`

- [ ] El módulo exporta una función con la interfaz (API) esperada.
- [ ] Implementa soporte para archivo individual
- [ ] Implementa soporte para directorios
- [ ] Implementa `options.validate`

### Pruebas / tests

- [ ] Pruebas unitarias cubren un mínimo del 70% de statements, functions,
      lines, y branches.
- [ ] Pasa tests (y linters) (`npm test`).

### CLI

- [x] Expone ejecutable `md-links` en el path (configurado en `package.json`)
- [x] Se ejecuta sin errores / output esperado
- [ ] Implementa `--validate`
- [ ] Implementa `--stats`
