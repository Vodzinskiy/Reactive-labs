## Підготовка

Якщо немає npm -> https://nodejs.org/en/download
перевірка: 
- ```npm -v```
- ```node -v``` 

Встановлення Angular CLI

```npm install -g @angular/cli```

##  Частина 1

### 1) “HelloApp”

В корені helloapp ```npm install```

в файлі package.json 5-му рядок напишіть своє ім'я 

В файлі angular.json в методі є рядок:

``` "defaultProject": "helloapp"  ```

З версії Angular CLI v14.0.6 це не потрібно, але якщо в вас старіша версія - залиште цей рядок.

**запуск** ```ng serve --open```

### 2) “Shopping list”

В корені purchaseapp ```npm install```

в файлі package.json 5-му рядок напишіть своє ім'я 

В файлі angular.json в методі є рядок:

``` "defaultProject": "purchaseapp"  ```

З версії Angular CLI v14.0.6 це не потрібно, але якщо в вас старіша версія - залиште цей рядок.

**запуск** ```ng serve --open```

Деплой на [FireBase](https://firebase.google.com/)

Гайд [тут](https://drive.google.com/drive/folders/1l1bSN39wDRPEJdiSkTyg2FFH7HJ9xbKR)


1) для стоврення dist ```ng build```
2) firebase init може трохи відрізнятися від методи. Ось мій
```
? Please select an option: Use an existing project
? Select a default Firebase project for this directory: vodzinskiyio04laba1-1 (VodzinskiyIO04Laba1-1)
i  Using project vodzinskiyio04laba1-1 (VodzinskiyIO04Laba1-1)

=== Hosting Setup
? Detected an existing Angular codebase in the current directory, should we use this? No
? Do you want to use a web framework? (experimental) No

Your public directory is the folder (relative to your project directory) that
will contain Hosting assets to be uploaded with firebase deploy. If you
have a build process for your assets, use your build's output directory.

? What do you want to use as your public directory? dist/purchaseapp
? Configure as a single-page app (rewrite all urls to /index.html)? Yes
? Set up automatic builds and deploys with GitHub? No
? File dist/purchaseapp/index.html already exists. Overwrite? No
i  Skipping write of dist/purchaseapp/index.html
```

