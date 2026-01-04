# Estate Agent App

A client-side React application inspired by Rightmove that allows users to search and view property listings.

## Features
- Search properties by type, price, bedrooms, date added, and postcode area
- View property details with image gallery and tabs
- Add and remove properties from favourites
- Responsive design for desktop and mobile
- Unit testing with Vitest

## Tech Stack
- React
- Vite
- React Router
- Vitest

## Deployment
- Hosted using GitHub Pages

## Security

This application implements basic client-side security measures:

- Content Security Policy (CSP) is applied via a meta tag to restrict
  scripts, images, and frames to trusted sources only.
- React automatically escapes rendered content, preventing XSS attacks.
- No unsafe HTML rendering methods (e.g. dangerouslySetInnerHTML) are used.
- All user inputs are handled via controlled React components.

These measures help protect the application from common client-side attacks.
