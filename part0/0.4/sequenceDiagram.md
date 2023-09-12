sequenceDiagram 
  participant browser
	participant server

	browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
	activate server
	server->>browser: The JSON FILE

	browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
	activate server
	server->>browser: The main.js FILE

	browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
	activate server
	server->>browser: The main.css FILE
	
	browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
	activate server
	server->>browser: Return HTML FILE

	browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
	activate server
	server->>browser: Create a new element in Json File