# How a Web Request Flows (Browser → Backend → Database)

>A short overview of the typical lifecycle for a web request, from the browser to the backend and database, and back.

## 1. Browser Sends Request
- The user enters a URL or clicks a button.
- The browser creates an HTTP request and sends it to the server.
- DNS resolves the domain to an IP address, then the request travels over the internet.

## 2. Backend Receives the Request
- The server (Node.js/Express, Django, Spring, etc.) accepts the request.
- It passes through middleware (examples below):
  - Logging
  - Authentication
  - Validation
- The backend processes business logic — for example: "Get user info", "Create order", "Show products".

## 3. Backend Queries the Database
- If data is needed, the backend sends a query to a database (MySQL, PostgreSQL, MongoDB).
- The database fetches records, performs filtering, sorting, or joins, and returns the result.

## 4. Backend Prepares the Response
- The backend formats data (usually JSON) and applies business rules.
- It sends an HTTP response back to the browser.

## 5. Browser Renders the Result
- The browser receives the JSON/HTML and updates the UI (React/Vue/etc.).

---

## Quick sequence diagram (Mermaid)
Use this in GitHub (GitHub renders Mermaid in repo files):

```mermaid
flowchart LR
  Browser[Browser] -->|HTTP request| DNS[DNS lookup]
  DNS --> Server[Server (API)]
  Server --> Middleware[Middleware: logging/auth/validation]
  Middleware --> Logic[Business logic]
  Logic --> DB[Database]
  DB --> Logic
  Logic --> Response[Format response (JSON/HTML)]
  Response --> BrowserRender[Browser renders UI]
```

---

## Example: simple HTTP request
```http
GET /api/products/123 HTTP/1.1
Host: example.com
Accept: application/json
```

## Notes & Tips
- Keep one short file per concept or use a `README.md` index for many notes.
- Use headings (`##`) and bullet lists for readability.
- Add links between notes: `[Related Note](../OtherNote.md)`.
- If Mermaid is not enabled in your GitHub rendering settings, you can export a PNG and add it with `![diagram](./diagram.png)`.
- For a documentation site, consider GitHub Pages, MkDocs, or Docsify.

---

*File created from `WebRequestFlows.txt` by automation.*