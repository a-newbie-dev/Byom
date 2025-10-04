# Byom - Interactive Om Symbol Website

🕉️ **A spiritual journey through Body, Mind, and Soul**

## Overview

Byom is an interactive website featuring the sacred Om (ॐ) symbol where different portions represent the three fundamental aspects of human existence:
    
- **Body** (lower curve) - The physical vessel
- **Mind** (upper curves) - The conscious awareness  
- **Soul** (dot above) - The eternal essence

## Features

### Interactive Om Symbol
- **Clickable sections** that navigate to dedicated pages
- **Hover effects** with color changes and glowing animations
- **Tooltips** indicating which part represents Body, Mind, or Soul
- **Responsive design** that works on all devices

### Navigation
- **Visual navigation** through the Om symbol
- **Keyboard shortcuts** (1 = Body, 2 = Mind, 3 = Soul)
- **Clean page transitions** between sections

### Content
Each section provides:
- Understanding and philosophy
- Practical exercises and practices
- Inspirational wisdom and quotes
- Daily cultivation methods

## Vision

Byom is a place where we share knowledge and wisdom in a simple way. This is for any person who is looking for a guide to understand anything in life in an easy way. This is a spiritual guide which can be used at any stage of life.

**Goals:**
- Share awareness with people
- Give them new perspective in life
- Ultimate goal is to share happiness

## Technology

- **HTML5** - Semantic structure
- **CSS3** - Modern styling with gradients and animations
- **JavaScript** - Interactive functionality
- **SVG** - Scalable Om symbol graphics

## Getting Started

1. Clone the repository
2. Open `index.html` in your web browser
3. Click on different parts of the Om symbol to explore

## Running Tests

This project includes comprehensive unit tests to ensure all features work correctly.

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

Install the testing dependencies:

```bash
npm install
```

### Running Tests

To run all tests once:

```bash
npm test
```

To run tests in watch mode (automatically re-runs tests when files change):

```bash
npm run test:watch
```

To generate a code coverage report:

```bash
npm run test:coverage
```

The coverage report will be generated in the `coverage/` directory. Open `coverage/index.html` in your browser to see detailed coverage information.

### Test Suite

The test suite includes:

- **DOM Element Tests**: Verify all required HTML elements are present and correctly structured
- **Navigation Tests**: Test click-based navigation to Body, Mind, and Soul pages
- **Tooltip Tests**: Verify tooltip functionality including show, hide, and positioning
- **Style Change Tests**: Test Om text color and shadow changes on hover
- **Keyboard Navigation Tests**: Verify keyboard shortcuts (1, 2, 3) work correctly
- **Animation Tests**: Test initialization of Om symbol and section card animations
- **HTML Structure Tests**: Validate proper HTML structure across all pages
- **Accessibility Tests**: Ensure proper heading hierarchy and interactive attributes
- **Edge Cases**: Handle missing elements gracefully

All tests use Jest with jsdom for DOM testing, ensuring high-quality code and preventing regressions.

## Project Structure

```
├── index.html          # Main interactive page
├── body.html           # Body section page
├── mind.html           # Mind section page
├── soul.html           # Soul section page
├── styles.css          # Main stylesheet
├── page-styles.css     # Individual page styles
├── script.js           # Interactive functionality
├── tests/              # Test directory
│   ├── setup.js        # Test configuration and setup
│   ├── script.test.js  # Unit tests for interactive functionality
│   └── html-structure.test.js  # Tests for HTML structure validation
├── package.json        # Node.js dependencies and scripts
└── README.md           # This file
```

## Future Enhancements

- **Meditation** guides and practices
- **Exercise** routines and yoga sequences
- **Walking** and mindfulness exercises
- **Dance** and movement therapy
- **Love** and compassion practices
- **Empathy** development exercises

## Contributing

This project welcomes contributions that align with its spiritual mission of sharing wisdom and promoting well-being.

## License

Open source - feel free to use and adapt for spreading positivity and wisdom.

---

*"Understanding the harmony between Body, Mind, and Soul leads to true wisdom"*
