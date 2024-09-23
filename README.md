# News App

This is a Next.js-based news application that fetches and displays news articles from various sources.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Design Decisions

1. **Tailwind CSS for Styling**: We chose Tailwind CSS for its utility-first approach, which allows for rapid UI development and easy customization. The configuration in `tailwind.config.ts` extends the default theme with custom colors and screen sizes, providing a consistent design system throughout the app.

2. **Server-Side Rendering with Next.js**: We leveraged Next.js for its built-in server-side rendering capabilities, which improves initial page load times and SEO. This is particularly important for a news application where content freshness is crucial.

3. **Custom Hooks for Data Fetching**: We created custom hooks like `useGetTopStories` and `useGetSearchArticles` to encapsulate the logic for fetching news data. This approach promotes reusability and separation of concerns, making it easier to manage and test data fetching logic.

4. **Responsive Design**: The application is designed to be fully responsive, with different layouts for mobile and desktop views. We used Tailwind's responsive classes and custom components like `MobileButton` and `MobileMenu` to ensure a seamless experience across all device sizes.

5. **Local Storage for Bookmarks**: We implemented a bookmarking feature using local storage, allowing users to save and retrieve their favorite articles even after closing the browser. This enhances user experience by providing persistence without the need for a backend database.

6. **Dynamic Routing**: We utilized Next.js's dynamic routing capabilities to create category-specific pages (`[category]/page.tsx`), allowing for a scalable and maintainable way to handle different news categories.

7. **Error Handling and Loading States**: Throughout the application, we've implemented proper error handling and loading states to provide feedback to users during data fetching operations, enhancing the overall user experience.

These design decisions were made to create a performant, scalable, and user-friendly news application that can easily adapt to future requirements and scale as needed.

## Notes

- Ensure you have the necessary API keys set up in your environment variables for the news APIs used in the application.
- The application uses Next.js 14 with the App Router, so make sure you're familiar with the latest Next.js features and best practices.
