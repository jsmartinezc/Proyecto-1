### Node.js
npm init -y //Comando para inicializar un proyecto con node
npm install express // Instalar express
npm install -D typescript // Instalar ts en dependencias de desarollo
npm install -D nodemon // Instalar nodemon
npm i --save-dev @types/node // Este comando es igual a este: npm install -D @types/node

npx tsc --init // Inicializar el proyecto con ts
npx tsc [nombre del archivo] // Transpila código ts a js
npx nodemon [nombre del archivo] // se ejecuta nodemon con el archivo especificado
npx nodemon -e ts --exec 'ts-node' index.ts // Nodemon esta pendiente de cambios en archivos con extensión .ts y ejecuta ts-nodemon en el archivo indicado, en este caso index.ts

git push origin main -f, forzar