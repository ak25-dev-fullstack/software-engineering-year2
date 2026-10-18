# Software Engineering – Year 2

My weekly work for the Software Engineering unit, written in JavaScript and later React.

## How it's organised

Each week has its own folder with two parts:

- **`index.html`**: the overview page. It explains the week's topic and what I learned.
- **The lab** (`lab.js`, or `lab.html` in Week 1): the exercises I work through step by step, with my solutions written under each step.

All pages share one stylesheet, `style.css`, in the root folder.

```
SOFTWARE_ENGINEERING/
├── style.css          # shared styles for every week
├── Week1/
│   ├── index.html     # overview
│   └── lab.html       # lab, with the JS inside a <script> tag
├── Week2/
│   ├── index.html
│   └── lab.js         # loaded by index.html
└── Week3/
    ├── index.html
    └── lab.js
```

## Topics

| Week | Topic |
|------|-------|
| 1 | JavaScript fundamentals: variables, types, string interpolation, functions, loops, objects and arrays |
| 2 | JSON and array methods: `map()`, `filter()`, `find()`, `reduce()`, `sort()`, `JSON.parse()`, working with nested data |
| 3 | React basics: rendering lists in JSX and embedding JavaScript with `{ }` |

## Running it

There's nothing to install. Open a week's `index.html` in a browser, then open the developer console to see the lab's output:

- Chrome: `Cmd + Option + J` (Mac) / `Ctrl + Shift + J` (Windows)
- Safari: `Cmd + Option + C` (turn on the Develop menu in Settings first)

## Resources

- [MDN JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
- [React Docs: Rendering Lists](https://react.dev/learn/rendering-lists)
