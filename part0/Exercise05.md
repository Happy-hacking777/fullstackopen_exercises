sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document 
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the CSS file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: the JavaScript file 
        deactivate server

    Note right of browser: The browser starts executing JavaScript code that fetches the JSON from the server 

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "single page app does not reload the whole page", "date": "2024-10-8" }, ... ]
    deactivate server

    Note right of browser: JavaScript dynamically updates the DOM with the fetched data, no page reload happens