* you have some js files in some folder.
* to migrate these over to TypeScript all you need is a tsconfig.json file 

* You can see it transpiles js files to js files, with the specified target e.g. `const` is fixed, arrow is converted to a plain old es5 function.

* New flag `"checkJs": true` typescript will even typecheck this for you.
* Now we get errors for magic code. Another new feature with TypeScript is *code fixes*. What I am using here is literally something that is provided by the TypeScript team as a part of the compiler that anyone can use. Ofcourse its there is VSCode / Visual Studio by default as well as in alm which is the IDE you see here.

* So you can ignore errors for the whole file or just these two errors one by one.