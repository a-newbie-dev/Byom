# Byom Test Suite Documentation

This directory contains comprehensive unit tests for the Byom project.

## Test Files

### 1. `script.test.js`
Tests for the interactive JavaScript functionality of the main page.

**Test Categories:**

- **DOM Elements** (3 tests)
  - Verifies all required elements (soul-section, mind-section, body-section, om-text, tooltip) are present
  - Checks correct number of section cards
  - Validates footer element exists

- **Navigation Functions** (3 tests)
  - Tests click navigation to body.html
  - Tests click navigation to mind.html
  - Tests click navigation to soul.html

- **Tooltip Functionality** (3 tests)
  - Shows tooltip with correct text and positioning
  - Hides tooltip when mouse leaves
  - Updates tooltip position on mouse move

- **Om Text Style Changes** (4 tests)
  - Tests color change on soul section hover
  - Tests color change on mind section hover
  - Tests color change on body section hover
  - Tests style reset to default

- **Keyboard Navigation** (4 tests)
  - Tests navigation with key "1" → body.html
  - Tests navigation with key "2" → mind.html
  - Tests navigation with key "3" → soul.html
  - Tests that other keys don't trigger navigation

- **Animation Initialization** (3 tests)
  - Tests Om symbol initialization with opacity 0 and scale 0.8
  - Tests section cards initialization with opacity 0 and translateY
  - Tests transition styles after animation starts

- **Keyboard Hint** (1 test)
  - Verifies keyboard hint is added to footer with correct styling

- **Section Interactions** (3 tests)
  - Tests complete interaction flow on soul section
  - Tests complete interaction flow on mind section
  - Tests complete interaction flow on body section

- **Edge Cases** (3 tests)
  - Handles missing elements gracefully
  - Works when footer exists
  - Works when om-symbol exists

**Total: 27 tests**

### 2. `html-structure.test.js`
Tests for HTML structure validation across all pages.

**Test Categories:**

- **index.html Structure** (15 tests)
  - DOCTYPE declaration
  - HTML lang attribute
  - Meta tags (charset, viewport)
  - Title
  - Stylesheet inclusion
  - Script inclusion
  - Main container
  - Header elements
  - SVG interactive zones
  - Om text element
  - Section cards
  - Tooltip element
  - Footer
  - Onclick navigation attributes

- **body.html Structure** (8 tests)
  - DOCTYPE, title, stylesheets
  - Navigation menu
  - Page header and icon
  - Content sections
  - Footer navigation

- **mind.html Structure** (8 tests)
  - DOCTYPE, title, stylesheets
  - Navigation menu
  - Page header and icon
  - Content sections
  - Footer navigation

- **soul.html Structure** (8 tests)
  - DOCTYPE, title, stylesheets
  - Navigation menu
  - Page header and icon
  - Content sections
  - Footer navigation

- **Cross-page Consistency** (5 tests)
  - All pages use UTF-8 charset
  - All pages have viewport meta tag
  - All pages include styles.css
  - Section pages include page-styles.css
  - Section pages have navigation back to index

- **Accessibility** (3 tests)
  - Proper heading hierarchy on all pages
  - Interactive elements have appropriate attributes

**Total: 46 tests**

## Running Tests

### Run all tests
```bash
npm test
```

### Watch mode (auto-rerun on file changes)
```bash
npm run test:watch
```

### Generate coverage report
```bash
npm run test:coverage
```

## Test Framework

- **Jest**: JavaScript testing framework
- **jsdom**: DOM implementation for Node.js
- **@testing-library/jest-dom**: Custom Jest matchers for DOM assertions
- **@testing-library/dom**: DOM testing utilities

## Test Configuration

Tests are configured in `package.json` under the `jest` key:

- `testEnvironment`: "jsdom" - Simulates browser environment
- `setupFilesAfterEnv`: Loads test setup file
- `testMatch`: Looks for `*.test.js` files in tests directory
- `collectCoverageFrom`: Collects coverage from script.js

## Adding New Tests

1. Create a new `.test.js` file in the `tests/` directory
2. Import required testing utilities
3. Write test suites using `describe()` and `test()` blocks
4. Use Jest matchers (`expect()`) to make assertions
5. Run tests to verify they pass

## Best Practices

- Keep tests focused and isolated
- Use descriptive test names
- Test one thing per test
- Mock external dependencies
- Clean up after tests (use `beforeEach` and `afterEach`)
- Maintain high test coverage
- Update tests when functionality changes

## Current Test Coverage

**Total Tests: 73**
- Functionality Tests: 27
- Structure Tests: 46
- All tests passing ✓

The test suite provides comprehensive coverage of:
- Interactive features
- Navigation (click and keyboard)
- Visual feedback (tooltips, style changes)
- Animations
- HTML structure
- Cross-page consistency
- Accessibility features
