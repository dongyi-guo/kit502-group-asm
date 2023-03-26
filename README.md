# TaGET - Group Assignment of KIT502

This is the workspace for KIT502 group assignment for group 14.

## Project structure

```
kit502-group-asm
├── components <- where reusable html elements stay
│   ├── some-headers.js
│   ├── some-footers.js
│   ├── some-modals.js
│   └── ...
├── css <- where stylesheets stay
│   ├── some-stylesheet.css
│   └── ...
├── img <- where images stay
│   ├── some-image.jpg
│   └── ...
├── js <- where scripts stay
│   ├── some-script.js
│   └── ...
├── README.md
├── privacy.html
├── index.html
├── forms.html
├── terms.html
└── ...
```
*Please keep .gitignore as it is, for ease of working on different IDEs.*

## Assignment 1 information

There are 2 dummy users created:

* A normal user:
  * Email: dong@yi.guo
  * Password: I@mUser1

Logging in with credential above will result in User Console (Trading Page)

* A manager:
  * Email: dongyi@guo.xyz
  * Password I@mUser2

Logging in with credential above will result in Manager Console (Master Trading Page)

Tourists (not-logged users) can get market information through "Pricing" page, and search bar will work with it while backend joins.