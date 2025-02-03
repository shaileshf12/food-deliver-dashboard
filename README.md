
# Food Delivery Dashboard

A food delivery dashboard webpage that showcases all the data related to food orders from the past few days. The information is presented in an intuitive and visually appealing format using graphs, allowing users to easily analyze trends, order frequency, and popular items. The dashboard provides insights into delivery times, customer preferences, and overall order performance, helping businesses optimize their services and improve customer satisfaction.
## Tech Stack

**Client:** React, TailwindCSS, Recharts, Lucide icons, framer-motion


## Run Locally

Clone the project

```bash
  git clone https://github.com/shaileshf12/food-deliver-dashboard
```

Go to the project directory

```bash
  cd food-delivery-dashboard
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```



## Folder Descriptions:
- `/src`: Contains all the source code of the app.
  - `/assets`: Contains images.
  - `/components`: Holds React components (e.g., `Navbar`, `Sidebar`).
  - `/layout`: Layout of the entire page.
  - `/pages`: Contains page components (e.g., `Dashboard`, `Order list`).
    - `/dashboard`: Dashboard page.
        - `/components`: Components associated with Dashboard
  - `/utils`: Required data for the page, e.g., `ordersData, customerMapData`.
  - `App.jsx`: The root React component. Routes are defined.
  - `index.js`: The entry point for React rendering.
  - `index.css`: Global styles for the project.
- `package.json`: Defines project dependencies and scripts.
- `README.md`: This documentation file.

