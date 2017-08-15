* you have some js files in some folder.
* to migrate these over to TypeScript all you need is a tsconfig.json file 

* You can see it transpiles js files to js files, with the specified target e.g. `const` is fixed, arrow is converted to a plain old es5 function.

* New flag `"checkJs": true` typescript will even typecheck this for you.