La première fois, j'ai eu ceci : 

C:\Users\leopo\Documents\ESGI\3rd_year\tp-eslint-git\app.js
  2:1  warning  Unexpected console statement                  no-console
  4:1  warning  Unexpected console statement                  no-console
  4:1  error    Expected indentation of 2 spaces but found 0  indent

✖ 3 problems (1 error, 2 warnings)
  1 error and 0 warnings potentially fixable with the `--fix` option.

Puis en utilisant l'option fix, ça a corrigé tout seul l'erreur d'indentation, quand j'ai repush, le github action est bien passé.
