import { IContent } from "@/types/contentType";

export const ContentData: IContent[] = [
    {
        thumbnail: null,
        title: "Counter Application",
        desc: "This beginner-level project introduces users to the fundamental concepts of state management. By building a simple counter, users will learn how to manipulate state using basic techniques, which is essential for developing interactive applications. This foundational knowledge can be applied to various scenarios, such as tracking user interactions in larger applications.",
        degree: "Basic",
        url: "counter"
    },
    {
        thumbnail: null,
        title: "Modal Open/Close",
        desc: "In this beginner-level project, users will create a modal that can be opened and closed through effective state management. This practical example demonstrates how to manage UI components efficiently. Modals are essential in web applications for displaying notifications, forms, and additional information without navigating away from the current page. Understanding this concept is crucial for developing user-friendly interfaces.",
        degree: "Basic",
        url: "modal"
    },
    {
        thumbnail: null,
        title: "To Do List Application",
        desc: "This intermediate-level project allows users to build a Todo List application with functionality for adding, deleting, and editing items. Similar to the earlier counter system, todos are added in a similar way, and a modal is used for editing. This project demonstrates handling dynamic data and efficient data management, applicable to other projects like task trackers and management tools.",
        degree: "Intermediate",
        url: "todo"
    },
];
