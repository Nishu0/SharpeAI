# Task Documentation


![Sharpe AI](https://github.com/Nishu0/SharpeAI/assets/89217455/b1da20bf-f948-4638-8e32-c19195347e45)


# Summary

- [About](#about-task)
- [Flow of SharpeAI](#flow-of-task)
- [Built with](#built-with)
- [Local Depolyment](#how-to-run)
- [Reference](#reference)


<a id='about'/>

## About Task

### Home Page
- [x] Be creative with design and content.
- [x] No specific content requirements.

### Transaction Page (Form Input Validation checks)
- [x] Create a form on the Transaction page.
- [x] Include fields for the user's wallet address and amount.
- [x] Implement validation for the wallet address:
  - [x] Should not be empty.
  - [x] Must follow the standard Ethereum address format (0x...).
- [x] Validate the amount:
  - [x] Ensure it is a number.
  - [x] Ensure it is within a specified range (e.g., 0 - 10,000).
- [x] Bonus:
  - [x] Clicking on the submit button sends the data to Google Firestore database (https://firebase.google.com/docs/firestore).

### Data Page
- [x] Fetch data from the open-source API - 'https://jsonplaceholder.typicode.com/posts'.
- [x] The API returns a JSON array of posts with user ID, post ID, title, and body.
- [x] Filter the posts to include only those with a user ID of 1.
- [x] Visualize the filtered data in a table format:
  - [x] Each row represents a post.
  - [x] Each column represents a different attribute of the post (ID, title, body).
- [x] Include a pie chart that represents the number of posts written by user ID 1 out of the total posts.

### Technologies
- [x] Use React JS for development.
- [x] Utilize Axios/Fetch API for data fetching.
- [x] Choose D3.js/Recharts/Highcharts for data visualization.
- [x] Apply CSS for styling.


- [x] Host a demo on [Vercel](https://vercel.com) platform.


## Flow of Task

![Task](https://github.com/Nishu0/SharpeAI/assets/89217455/678262bb-3dd1-4ff5-9561-33f4638c4d65)


## Built With

This project was developed with the following technologies:

#### **Frontend** <sub><sup>React + TypeScript + Next.js</sup></sub>
  - [React](https://pt-br.reactjs.org/)
  - [Axios](https://github.com/axios/axios)
  - [TailwindCSS](https://tailwindcss.com/)
  - [React-Hook-Form](https://react-hook-form.com/)
  - [React-Router](https://reactrouter.com/en/main)

## How to run

- Git Clone or Download Zip
- Run `npm run dev` to start a local development it will be on Port:5173

## Reference

### API

API Link: https://jsonplaceholder.typicode.com/posts

## :mailbox_with_mail: Get in touch!

<p align="center">
<a href="https://www.linkedin.com/in/nisarg-thakkar-08811a21a" target="_blank" >
  <img alt="Linkedin - Nisarg Thakkar" src="https://img.shields.io/badge/Linkedin--%23F8952D?style=social&logo=linkedin">
</a>
<a href="mailto:itsnisargthakkar@gmail.com" target="_blank" >
  <img alt="Email - Nisarg Thakkar" src="https://img.shields.io/badge/Email--%23F8952D?style=social&logo=gmail">
</a> 
<br/>
  Made with :coffee: and ❤️ by <b>Nisarg Thakkar</b>.
<p/>
