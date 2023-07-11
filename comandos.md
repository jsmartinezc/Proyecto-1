### Git
- git init // Se inicializa el repositorio git
- git status // Mirar el estado de git
- git add [nombre del archivo a añadir] // - - - Agrega cambios al staging area
- git commit -m "[mensaje a poner]" // Se guarda en el repositorio los cambios
- git push origin [nombre de la rama] // empujar los cambios al repositorio remoto

### Node.js
- npm init -y //Comando para inicializar un proyecto con node
- npm install express // Instalar express
- npm install -D typescript // Instalar ts en dependencias de desarollo
- npm install -D nodemon // Instalar nodemon
- npm i --save-dev @types/node // Este comando es igual a este: npm install -D @types/node
- npm run [nombre del script] //Esto es para ejecutar un script personalizado

- npx tsc --init // Inicializar el proyecto con ts
- npx tsc [nombre del archivo] // Transpila código ts a js
npx nodemon [nombre del archivo] // se ejecuta nodemon con el archivo especificado
- npx nodemon -e ts --exec 'ts-node' index.ts // Nodemon esta pendiente de cambios en archivos con extensión .ts y ejecuta ts-nodemon en el archivo indicado, en este caso index.ts 
- npm list -g --depth=0 // Lista los paquetes instalados de forma global.
