# EmberTask Dashboard

## Overview

EmberTask is a productivity web application inspired by Notion, one of my favorite productivity tools. This project serves as a task management dashboard where users can add tasks, track due dates, set priorities, and take quick notes. While this is the initial version, I plan to expand the project with additional features in the future.

## Features

- **Task Management:** Users can add tasks, set due dates, and assign priority levels.
- **Quick Notes:** A simple section for jotting down reminders and notes.
- **Motivational Quotes:** A carousel displaying rotating quotes to keep users inspired.
- **FAQs Section:** An accordion-style section to answer common questions.

## Bootstrap Components Used

This project utilizes several Bootstrap components to ensure a responsive and visually appealing layout:

- **Navbar:** A responsive navigation bar for easy access to different sections.
- **Carousel:** Used in the hero section to display motivational quotes.
- **Modals:** Implemented for adding and managing quick notes.
- **Accordions:** Used to structure an FAQ section for common user questions.

## JavaScript Functions

The project includes JavaScript functions to handle dynamic interactions:

1. **`renderTasks()`** - Updates the task table whenever a task is added or deleted.
2. **Task Form Submission** - Captures user input and adds a new task to the list.
3. **Page Load Event Listener (`DOMContentLoaded`)** - Loads pre-set fake tasks when the page is opened.
4. **Quick Notes Section** - Allows users to add and delete quick notes.
5. **Task Deletion Handling** - Ensures users can remove tasks from the list dynamically.

## Future Enhancements

I plan to build upon this project by adding:

- Task categories and filtering options.
- Local storage functionality to save tasks and notes even after refreshing the page.
- A more advanced note-taking system with formatting options.

## Hero Image Credit

Photo by [Doug Bagg](https://unsplash.com/@dougbagg_?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/photos/a-very-tall-mountain-with-a-sky-in-the-background-Cpu8KohQ220?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash).

## Installation & Usage

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/embertask-dashboard.git
   
   ```

2. Open `index.html` in a browser.
