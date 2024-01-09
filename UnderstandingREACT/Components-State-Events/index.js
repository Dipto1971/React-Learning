import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// const javascriptMania = {
//     name: "javascriptMania",
//     libraries: ['React', 'Angular', 'Vue'],
//     printLibraries: function () {
//         this.libraries.forEach((library) => console.log(`${this.name} loves ${library}`));
//     },
//     printLibrariesFunc: function () {
//         this.libraries.forEach(function (library) {
//             console.log(`${this.name} loves ${library}`);
//         }.bind(this));
//     },
// };
// console.log(javascriptMania.printLibraries());
// console.log(javascriptMania.printLibrariesFunc());

createRoot(document.getElementById('root')).render(<App />);
