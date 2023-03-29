# TaGET - Group Assignment of KIT502

* Aaron John
* Ahmed All Razi
* Dongyi Guo
* Sachin Johnson

## Project structure

```
kit502-group-asm
├── components <- where reusable html elements stay.
│   ├── footer.js // Componentized Footer.
│   ├── header.js // Componentized Navigation Bar.
│   ├── manager-side-menu.js // Componentized Slide Menu for Managers.
│   └── user-side-menu.js // Componentized Slide Menu for Normal Users.
├── css <- where stylesheets stay.
│   └── main.css // Used CSS stylesheets.
├── img <- where images stay.
│   ├── green-tas.jpg // Picture used in Carousel.
│   ├── solar.jpg // Picture used in Carousel.
│   ├── tas-parliament.jpg // Picture used in Carousel.
│   └── utas-sandy-bay.jpg // Picture used in Carousel.
├── js <- where scripts stay.
│   └── detailCheck.js // Javascripts handling Empty Check, Email Validation, Password Validation, Password Confirmation Check for both Register and Login Modal, and Credential Checking for Login Modal.
├── README.md // This file in Markdown.
├── README.pdf // This file in PDF.
├── about-us.html // About Us Page Placeholder.
├── buy-dummy.html // The Buying form for User.
├── create-dummy.html // The Energy Creating Form for Manager.
├── edit-dummy.html // The Energy Editing Form for Manager.
├── master-trading.html // The logged in Manager's Console for managing market entries.
├── pricing.html // The Market Form for Users who are not logged in.
├── privacy.html // Privacy Page Placeholder.
├── index.html // Home Page
├── sell-dummy.html // The Selling Form for User.
├── terms-conditions.html // Terms and Conditions Page Placeholder.
├── trading.html // The logged in User's Console for buying and selling.
└── .gitignore # For Git Collaboration.
```
*Please keep .gitignore as it is, for ease of working on different IDEs.*

## Assignment 1 Login Credentials & Forms

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