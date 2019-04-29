# LAB - Server Side React

React is great, but it's a client-side application, which has a negative impact on SEO -- only an empty div is actually ever sent to the browser, and your React app fills in the content on the fly.

For content driven sites, such as a Blog or a news site, where its important to have search engines like Google and Bing  properly index your site, you must render full HTML on the server side and send all of that content to the browser.

## Before you begin
Refer to *Getting Started*  in the [lab submission instructions]((../../../reference/submission-instructions/labs/README.md)) for complete setup, configuration, deployment, and submission instructions.

**Visualize the Application**

Evaluate the lab requirements and begin with drawing a **UML** and/or **Data/Process Flow diagram**.  Having a solid visual understanding of the code you have/need and how it connects is critical to properly approaching this assignment.

**Break Down the Assignment**

Once you have a good visual and mental model of how the application works, break down the requirements. For each requirement, ask your self the following questions:

* Where should this new code live in the codebase?
* What existing code needs to be modified?
* What dependencies will I need to install?

**Map your priorities and dependencies before jumping into the code.**

---

## Getting Started

* Create an account at [Netlify](https://www.netlify.com/)
* Create a new repository for your work

## Assignment
Create a 2 page interactive with the **Gatsby** framework and deploy it to Netlify 

* Use the same template/layout for both pages
  * Header with site title and navigation
    * Home links to the home page
    * Counter links to the counter page
  * Body section with content for the page
  * Footer with contact information (email, phone, twitter link)
* Home Page (/)
  * Body section should have a title (your name)
  * Include images, links to projects, your why, etc.
* Counter Page (/counter)
  * Yet another counter!
  
###  Documentation
Complete the standard README.md 
