sequenceDiagram
    participant browser
    participant server
 
    Note right of browser: User writes a note and submits the form.

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    browser->>server: Data is sent as JSON (Content-Type)
    activate server

    Note left of server: Server creates a new_note_spa document in JSON format

    server-->>browser: 201 Created Response
    
    deactivate server

    Note right of browser: Browser adds new string to JSON and renders it without reloading