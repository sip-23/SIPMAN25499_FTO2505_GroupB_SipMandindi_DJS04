# DSJ04 React Podcast App: Search, Sort, Filter, and Pagination

## Project Overview

In this project, I built an advanced podcast browsing experience that allows users to dynamically 
- **search**, 
- **sort**, 
- **filter**, and 
- **paginate** a list of podcast shows. 

The goal was to create an intuitive interface that responds to user input in real time and maintains a consistent, seamless experience throughout navigation.

This project tested my ability to 
- manage complex UI state, 
- synchronise multiple user interactions, and 
- maintain clean, scalable code.

## Core Objectives

### Search Functionality

- I implemented a flexible search that matches any part of the podcast title.
- The Results updates dynamically as the user types or upon submission.
- I ensured that the search results integrate with current filters, sorts, and pagination without resetting them.

### Sorting Options

- I also made sorting podcasts by:
  - Newest first (based on last updated date).
  - Oldest to new.
  - Title A–Z and Z–A.
- Sorting is working in tandem with any search or filter criteria.

### Filtering

- I enabled genre-based filtering using a dropdown or multi-select input.
- I ensure filters work alongside current search, sort, and pagination state.
- It is able to maintain selected filters when navigating between pages or updating the list.

### Pagination

- I Displayed podcasts in manageable chunks using pagination, load-more, or infinite scroll.
- I ensured that pagination respects the currently active search, filter, and sort state.
- I Keep all UI selections intact while navigating pages.

### State Synchronisation

- I maintained a centralised and cleanly organised state using React state, context, or a state management library.
- I ensure that all controls (search, sort, filter, pagination) reflect changes immediately and stay in sync.

### Code Quality & Maintainability

- I used JSDoc to document all major functions and modules.
- I applied consistent formatting and naming conventions.
- Keep logic modular and components reusable.

### API Endpoints

Data is called via a `fetch` request to the following endpoint.

| URL                               |                             |
| --------------------------------- | --------------------------- |
| `https://podcast-api.netlify.app` | Returns an array of PREVIEW |

### Genre Titles

Since the podcast preview information fetched from the API only exposes genres by their IDs, the actual genre details (such as titles) are not included in the API response. These details are instead provided in the `data.js` file found in this repository. Therefore, I have included the mapping between genre ID values and their corresponding titles in your code using the file.

## Project Deliverables
The following is what I have been able to implement

- A fully functional React app that:

  - It Fetches and displays podcast data.
  - Allows live searching, sorting, filtering, and pagination.
  - Maintains consistent state across all UI interactions.

- **Clean Codebase** with:

  - Reusable, modular components.
  - Clear and consistent formatting across all files.
  - JSDoc comments for functions/modules.

- **README.md** with:

  - Project overview and purpose.
  - Setup and usage instructions.
  - Descriptions of key features (search, filter, sort, pagination).

- **Version Control (GitHub)**:
  - Clear, meaningful commit messages.
  - Incremental commits reflecting development progress.


## Assets / Wireframe references

![Sippi-Cup Podcasts DeskTop](</Snapshots/Desktop_view.png>)
![Sippi-Cup Podcasts Functionality](</Snapshots/filter_sort_search.png>)
![Sippi-Cup Podcasts Tablet](</Snapshots/Tablet_view.png>)
![Sippi-Cup Podcasts Tablet Pagination](</Snapshots/Tablet_pagination.png>)
![Sippi-Cup Podcasts Mobile](</Snapshots/Mobile_view.png>)
![Sippi-Cup Podcasts Mobile Pagination](</Snapshots/Mobile_pagination.png>)

---
