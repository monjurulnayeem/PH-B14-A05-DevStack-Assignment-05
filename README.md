# Dev Stack Builder

Dev Stack Builder is a responsive web application that allows developers to explore modern development technologies and build their own technology stack.

Users can browse technology cards, view technology information, add technologies to their personal stack, remove individual technologies, or clear the complete stack.

## Live Demo

Netlify live URL:

## GitHub Repository

GitHub repository URL:

---

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS v4
- React Toastify
- JSON
- HTML5
- CSS3

---

## Features

### 1. Technology Explorer

Technology information is loaded dynamically from a local JSON file.

Each technology includes:

- Name
- Category
- Description
- Icon
- Rating
- Difficulty
- Badge

### 2. Build Your Own Stack

Users can add technologies to their stack.

The application:

- Prevents duplicate technologies
- Shows selected technologies
- Allows individual removal
- Allows removing all technologies
- Updates the selected technology count

### 3. Responsive Design

The application works across:

- Desktop
- Tablet
- Mobile

Technology cards use:

- 3 columns on desktop
- 2 columns on tablet
- 1 column on mobile

---

# React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax extension that lets you write HTML-like markup directly inside JavaScript. Under the hood, a tool like Babel compiles it into React.createElement() calls — so <h1>Hello</h1> becomes React.createElement('h1', null, 'Hello'). It's used because writing UI structure as markup is far more readable than nesting createElement calls by hand, and it lets you embed JavaScript expressions right inside the markup using {}.

## 2. What is the difference between props and state?

Props are data passed from a parent component to a child component. Props are read-only and are used to share data or functions between components.
State is data managed inside a component that can change over time. When state changes, React updates the user interface.
For example, in this project, TechnologyCard receives technology data through props:
<TechnologyCard
  technology={technology}
  onAdd={handleAdd}
  isAdded={isAdded}
/>

The selectedStack is stored as state because it changes when users add or remove technologies.




## 3. What does the useState hook do, and where did you use it in this project?

useState is a React Hook used to create and manage state in a functional component.
It gives us a state value and a function that can update that value.
For example:
const [selectedStack, setSelectedStack] =
  useState<Technology[]>([]);

In this project, useState is used in several places.
In TechnologySection.tsx, it manages:
- Technology data
- Selected technologies
- Loading state
- Error state
For example:
const [technologies, setTechnologies] =
  useState<Technology[]>([]);

const [selectedStack, setSelectedStack] =
  useState<Technology[]>([]);

const [loading, setLoading] =
  useState<boolean>(true);

const [error, setError] =
  useState<string>("");

In Navbar.tsx, useState is also used to control whether the mobile navigation menu is open or closed.




## 4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect is a React Hook used to perform side effects in a component.
Side effects can include fetching data, working with APIs, updating the document, or interacting with external systems.
In this project, useEffect is used to load the technology data from technologies.json when the TechnologySection component is loaded.
For example:
useEffect(() => {
  const loadTechnologies = async (): Promise<void> => {
    const response = await fetch("/technologies.json");

    const data: Technology[] =
      await response.json();

    setTechnologies(data);
  };

  loadTechnologies();
}, []);

The empty dependency array [] means the effect runs when the component is mounted.
We used useEffect here because fetching the JSON file is a side effect that should happen after the component renders.



## 5. Why does every item in a .map() list need a unique key prop?

When React renders a list using .map(), each item needs a unique key so React can identify that item.
The key helps React understand which items have been added, removed, or changed. This allows React to update the list efficiently.
In this project, we use the technology's unique id as the key:
{technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))}

Here, technology.id is unique for each technology, so it is suitable for the key prop.


## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different parts of the user interface depending on a condition.
In this project, conditional rendering is used in the StackSidebar.
When the user has not selected any technologies, we display an empty stack message:
{selectedStack.length === 0 ? (
  <div>
    <p>
      Your stack is empty.
      Add technologies to get started.
    </p>
  </div>
) : (
  <div>
    {selectedStack.map((technology) => (
      <StackItem
        key={technology.id}
        technology={technology}
        onRemove={onRemove}
      />
    ))}
  </div>
)}

If selectedStack.length is 0, the empty message is displayed.
If the user has selected technologies, the selected technology items are displayed instead.
Conditional rendering is also used for the loading state, error state, mobile menu, and the Remove All button.




## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

In React, a parent component passes data to a child component using props.
The parent can also pass a function as a prop. The child can call that function to send an event or data back to the parent.
For example, TechnologySection is the parent component and TechnologyCard is the child component.
The parent passes the technology data and the handleAdd function:
<TechnologyCard
  technology={technology}
  onAdd={handleAdd}
  isAdded={isAdded}
/>

The child receives these values through props:
interface TechnologyCardProps {
  technology: Technology;
  onAdd: (technology: Technology) => void;
  isAdded: boolean;
}

When the user clicks the Add button inside the child component, the child calls the function received from the parent:
<button
  type="button"
  onClick={() => onAdd(technology)}
>
  Add to Stack
</button>

This allows the child component to trigger handleAdd() in the parent component.
So, the basic communication pattern is:
Parent → Child: Pass data or functions through props.
Child → Parent: Call a callback function received through props.