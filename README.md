# note-taker

## Description

- Note Taker application allows the user to write and add notes, delete notes and retrieve all the notes created and saved by the user.
- The note data is added, retrieved and deleted from a JSON file and will use Express.js for backend.
- During this implementation, I was able to apply my knowledge on Express.js, API-HTML Routes, Different HTTP Requests, Modular routing, custom middleware , data persistance and deployment on Render.

## Table of Contents 

- [Installation](#installation)
- [User Story](#user-story)
- [Usage](#usage)
- [Usage & Tests](#usageandtest-screenshots)
- [Acceptance Criteria](#acceptance-criteria)
- [Tests](#tests)
- [Credits](#credits)
- [License](#license)

## Installation

Follow these instructions to create your project and deploy it to GitHub Pages:

1. Create a new repository on your GitHub account and clone it to your computer.

2. When you're ready to deploy, use the git add, git commit, and git push commands to save and push your code to your GitHub repository.

3. To ensure that the node_modules folder is not pushed in the GITHUB, the .gitignore has to be updated and included.

3. Navigate to your Render.com, create New Web Service, Select Build and Deploy from a Git Repository

4. Connect to the respository created in above Steps 1 -2. (https://github.com/shwetakadam5/note-taker)

5. Provide Name of the webservice : (note-taker), Select Region : (Singapore), Branch : (main), Build Command : (npm i) , Start Command : (npm start), Auto-deploy : (Yes)

6. Once the settings are saved, the application is deployed and the url will be (https://note-taker-kx8y.onrender.com)


## User-Story 
```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Usage


**Link for the repository :** 

https://github.com/shwetakadam5/note-taker

**Link for the deployed application:**

https://note-taker-kx8y.onrender.com


## UsageAndTest Screenshots :

#### 1. ****Note Taker Appplication :Landing Page ****

![Image Unavailable](./assets/images/logo_generator_Circle.jpg) 



## Acceptance-Criteria

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a "Save Note" button and a "Clear Form" button appear in the navigation at the top of the page
WHEN I click on the Save button
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes and the buttons in the navigation disappear
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column and a "New Note" button appears in the navigation
WHEN I click on the "New Note" button in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column and the button disappears
```


## Tests 



## Credits



## License

MIT

