# MemeScan Frontend

React-based web dashboard for analyzing memecoin risk.

## Setup

1. Clone or unzip the repo.
2. Install dependencies:

```bash
npm install
```

3. Create .env file from .env.example:

```bash
cp .env.example .env
```

4. Update `VITE_API_BASE_URL` in `.env` to point to your backend API (default: `http://localhost:4000/api`).

5. Start dev server:

```bash
npm run dev
```

Open browser at the URL printed (usually http://localhost:5173).

## Usage

- Enter the domain (e.g., pump.fun).
- Enter the Solana token address.
- Click Analyze to get risk score and details.

## Build

To build a production bundle:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Dependencies

- React
- Vite
- Axios
- TailwindCSS
