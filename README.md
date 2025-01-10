# React Like Button

This project is a simple **Like Button** implemented in React. It demonstrates how to use React's state management in a class-based component to create an interactive button.

## Features

- Interactive UI: The button dynamically toggles between "Liked" and "Not Liked."
- State Management: Demonstrates the use of `state` in React class components.
- Minimal and Reusable: A straightforward component that can be reused in various applications.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **CSS**: For basic styling.
- **Node.js & npm**: For managing dependencies and running the development server.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- Basic understanding of React.

### Installation Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/SQUADRON-LEADER/Like-Button.git
   ```

2. Navigate to the project directory:
   ```bash
   cd react-state-class
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

### Deployment

The project has been deployed and is accessible online. Check it out here:
[React Like Button Demo]

https://squadron-leader.github.io/Like-Button/


## How It Works

The **Like Button** component uses React's `state` to track whether the button is "liked" or "not liked." When the button is clicked, the `handleClick` method toggles the state and updates the text displayed on the button.

### Example Code

```jsx
import React, { Component } from 'react';

class LikeButton extends Component {
  constructor() {
    super();
    this.state = { liked: false };
  }

  handleClick = () => {
    this.setState({ liked: !this.state.liked });
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.liked ? 'Liked' : 'Not Liked'}
      </button>
    );
  }
}

export default LikeButton;
```

## Screenshots

![Screenshot 2025-01-10 182839](https://github.com/user-attachments/assets/aa0bd486-ed96-4cbe-bc58-6e5ab7ea35a9)


## Folder Structure

```
react-state-class/
├── public/
├── src/
│   ├── components/
│   │   └── LikeButton.jsx
│   ├── App.js
│   ├── index.js
│   └── styles.css
├── package.json
└── README.md
```

## Future Enhancements

- Add animations or transitions for better UI.
- Implement a counter to display the total number of likes.
- Convert to a functional component using React hooks.

## Contributing

Contributions are welcome! If you'd like to contribute, fork the repository and create a pull request with your changes.

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to reach out for any suggestions or improvements!

