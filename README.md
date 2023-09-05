# DiningHall--
This project focuses on extracting daily menu items from the university dining website and updating them into a MongoDB database. The aim is to offer real-time access to daily menus, store historical food data, and allow user feedback on various dishes.

## Table of Contents

1. [Features](#features)
2. [Technical Stack](#technical-stack)
3. [Collaborators](#collaborators)

## Features

- **Web Scraping**: Efficiently extracts daily menu items from the university dining website.
  
- **Database Integration**: Stores the scraped data into MongoDB, ensuring data consistency.

- **Historical Data**: Maintains a record of all past menu items, enabling data-driven insights and trends analysis.
  
- **User Reviews**: Allows users to provide feedback on dishes, with the feature to aggregate and analyze user reviews.

- **Automation**: Uses Cron jobs to ensure the scraper runs daily without manual intervention, offering up-to-date information for users.

## Technical Stack

- **Languages & Frameworks**: JavaScript (Node.js, Express.js, React.js)
  
- **Tools & Libraries**: MongoDB, Axios, Cron
  
- **Database**: MongoDB for data storage and data modeling.

## Collaborators

- **Timothy Kurniawan**: Lead developer, focusing on backend routing, database integration, and Cron job automation.
  
- **David Nguyen**: Backend developer, backend architecture, designed and managed the database schemas, job automation, and implemented the web scraper for automated data extraction.
