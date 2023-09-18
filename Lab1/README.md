## Підготовка

Якщо немає npm -> https://nodejs.org/en/download
перевірка: 
- ```npm -v```
- ```node -v``` 

Встановлення Angular CLI

```npm install -g @angular/cli```

1) “HelloApp”

В корені HelloApp ```npm install```

в файлі package.json 5-му рядок напишіть своє ім'я 

В файлі angular.json в методі є рядок:

``` "defaultProject": "helloapp"  ```

З версії Angular CLI v14.0.6 це не потрібно, але якщо в вас старіша версія - залиште цей рядок.

**запуск** ```ng serve --open```