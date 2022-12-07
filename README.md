# Hi, I'm so glad you're here <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="25px">

## About Project

Next.js + Tailwind CSS + TypeScript starter packed with useful development features.

## Features

- ⚡️ NextJS v13
- ⚛️ React 18
- ✨ TypeScript
- 💨 Tailwind CSS 3 — Configured with CSS Variables to extend the primary color
- 📈 Absolute Import and Path Alias — Import components using @/ prefix
- 📏 ESLint — Find and fix problems in your code, also will auto sort your imports
- 💖 Prettier — Format your code consistently
- 🐶 Husky & Lint Staged — Run scripts on your staged files before they are committed
- ⚡️ Hygen: create fast is a Feature, component
- ⚡️ Atomic Design Pattern: atoms - molecules - organisms - templates

#### To active `Prettier`

```
Step 1: install Prettier - Code formatter
Step 2: set format default with Prettier
```

#### To run storybook

```
Change branch `develop-db`, default branch is `develop`
#### yarn && yarn sb
```

#### To create `component`, `container`, `page`

```
yarn gen:component,
yarn gen:container,
yarn gen:page
```

## Files/Directories

| Path             | Purpose                                                             |
| ---------------- | ------------------------------------------------------------------- |
| /\_templates/    | contains scaffolding templates based on `Hygen`                     |
| /.vscode/        | settings for `Visual Studio Code` workspace                         |
| /public/         | root folder that gets served up as our next app.                    |
| /src/api/        | contains api services                                               |
| /src/components/ | contains Atomic Design components                                   |
| /src/container/  | contains Logic handler                                              |
| /src/pages/      | handle fetching data api                                            |
| /src/assets/     | contains images, icons, fonts, dummyData                            |
| /src/store/      | contains shared store (Redux, Recoil,...)                           |
| /src/types/      | contains shared types                                               |
| /src/hooks/      | contains custom hooks                                               |
| /src/utils/      | contains functions, schemas, constants, ...others                   |
| /src/styles/     | contains styles: breakpoints, colors, font, mixin, function, global |

## Command Line

| Path          | Purpose                 |
| ------------- | ----------------------- |
| yarn start    | start the project       |
| gen:page      | generate new page       |
| gen:component | generate new component  |
| gen:container | generate new container  |
| yarn sb       | run the storybook       |
| yarn lint     | run to check the syntax |
| yarn lint:fix | run to fix the syntax   |
| yarn prettier | run to format code      |

---

### `Components`

- Use only `React-Hook`
- Follow the `rules of hook` (<https://reactjs.org/docs/hooks-rules.html>)

**Note: Use `// eslint-disable-next-line react-hooks/exhaustive-deps` when you want to avoid checking of the `useEffect` syntax (also on `useMemo & useCallback`)**

```tsx
  useEffect(() => {
    Todo Something...
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
```

**Note: Use simple syntax when the component has no properties.**

```tsx
//GOOD 🏆🏆🏆
export const Component = () => <div>Without children...</div>;

export const Component: React.FC = ({ children }) => <div>{children}</div>;

//NOT GOOD 💩💩💩
export const Component: React.FC = () => <div>Without children...</div>;
```

**Note: Clearly define the data type of the property.**

```tsx
//GOOD 🏆🏆🏆
interface Props {
  title: string;
}

//NOT GOOD 💩💩💩
interface Props {
  title: any;
}
```

**Note: Please leave TODO when you encounter some unresolved issues immediately.**

```tsx
export const Component = () => {
  // TODO: bla...bla...bla
  const Problems = "Problems";

  return <div>Todo Something...</div>;
};
```

**Note: Use the filename as the component name. For example, Example.tsx should have a reference name of Example. However, for root components of a directory, use index.jsx as the filename and use the directory name as the component name:**

```tsx
//GOOD 🏆🏆🏆
import Example from "@/components/atoms/Example";

//NOT GOOD 💩💩💩
import Example from "@/components/atoms/Example/index";
```
