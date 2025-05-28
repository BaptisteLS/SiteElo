# Site Code Indice

## Description
This project is a simple web application consisting of four pages. Each of the first three pages contains a hint and an input field for users to enter a code. If the entered code is correct, users can navigate to the next page. The final page allows users to download a PDF document.

## Project Structure
```
site-code-indice
├── public
│   ├── index.html        # First page of the website
│   ├── page2.html       # Second page of the website
│   ├── page3.html       # Third page of the website
│   ├── page4.html       # Final page with PDF download
│   └── styles
│       └── main.css     # CSS styles for the website
├── src
│   ├── scripts
│   │   ├── page1.js     # JavaScript for the first page
│   │   ├── page2.js     # JavaScript for the second page
│   │   ├── page3.js     # JavaScript for the third page
│   │   └── page4.js     # JavaScript for the final page
│   └── assets
│       └── background.png # Background image for the website
├── pdf
│   └── document.pdf      # PDF document for download
├── package.json          # npm configuration file
└── README.md             # Project documentation
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd site-code-indice
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
To run the website, open the `public/index.html` file in a web browser. Follow the instructions on each page to navigate through the application and reach the final page for the PDF download.

## License
This project is licensed under the MIT License.