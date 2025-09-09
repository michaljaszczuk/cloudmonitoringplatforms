# Project: Minted Directory Astro - Cloud Monitoring Platforms

## Project Overview

This project is a directory website listing various cloud monitoring platforms. It is built using the "Minted Directory Astro" template. The site is data-driven, SEO-optimized, and highly customizable through configuration files.

- **Core Technology:** Astro
- **Styling:** Tailwind CSS
- **Frontend Components:** Astro, with support for Vue.js and MDX.
- **Data Source:** The directory listings are primarily loaded from a JSON file (`src/data/directory/directory.json`), as specified in `src/config/settings.toml`. The template also supports loading data from Markdown, CSV, Google Sheets, Notion, and Airtable.

## Building and Running

The project uses `pnpm` as its package manager.

- **Install Dependencies:**
  ```sh
  pnpm install
  ```

- **Run Development Server:**
  ```sh
  pnpm dev
  ```

- **Build for Production:**
  ```sh
  pnpm run build
  ```

## Development Conventions

### Configuration
- **`astro.config.mjs`**: Main Astro configuration file. Manages integrations (Vue, MDX, Sitemap), Vite plugins, and environment variable schemas.
- **`src/config/settings.toml`**: The primary configuration file for the site's content, UI, and behavior. It controls the site title, theme, data source, tag definitions, and layout settings.
- **`tailwind.config.mjs`**: Configures the Tailwind CSS framework, including theme colors, fonts, and plugins like `@tailwindcss/typography`.

### Content Management
- **Data Source:** The live data source is configured in `src/config/settings.toml` under `[directoryData.source]`. It is currently set to `json`.
- **JSON Data:** The directory listings are located in `src/data/directory/directory.json`.
- **Adding Content:** To add or modify listings, edit the `directory.json` file. The `README.md` provides detailed instructions for using other data sources like Markdown or Google Sheets if needed.
- **Taxonomy:** Tags for categorizing listings are defined in `src/config/settings.toml` under the `[[directoryData.tags]]` array.

### Code Structure
- **`src/pages`**: Contains the main pages and routing structure for the Astro application.
- **`src/components`**: Reusable Astro and Vue components for building the UI.
- **`src/layouts`**: Defines the overall page layouts (e.g., `BaseLayout.astro`).
- **`src/styles`**: Global CSS styles and theme definitions.
