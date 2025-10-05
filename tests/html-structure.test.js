/**
 * Unit tests for HTML structure validation
 * Tests ensure all pages have correct structure and required elements
 */

const fs = require('fs');
const path = require('path');

describe('HTML Structure Tests', () => {
  let indexHtml, bodyHtml, mindHtml, soulHtml;

  beforeAll(() => {
    // Read HTML files
    const basePath = path.join(__dirname, '..');
    indexHtml = fs.readFileSync(path.join(basePath, 'index.html'), 'utf-8');
    bodyHtml = fs.readFileSync(path.join(basePath, 'body.html'), 'utf-8');
    mindHtml = fs.readFileSync(path.join(basePath, 'mind.html'), 'utf-8');
    soulHtml = fs.readFileSync(path.join(basePath, 'soul.html'), 'utf-8');
  });

  describe('index.html Structure', () => {
    test('should have DOCTYPE declaration', () => {
      expect(indexHtml).toMatch(/<!DOCTYPE html>/i);
    });

    test('should have html tag with lang attribute', () => {
      expect(indexHtml).toMatch(/<html lang="en">/i);
    });

    test('should have head section with required meta tags', () => {
      expect(indexHtml).toMatch(/<meta charset="UTF-8">/i);
      expect(indexHtml).toMatch(/<meta name="viewport"/i);
      expect(indexHtml).toMatch(/<title>Byom - Body, Mind & Soul<\/title>/);
    });

    test('should include styles.css stylesheet', () => {
      expect(indexHtml).toMatch(/<link rel="stylesheet" href="styles.css">/);
    });

    test('should include script.js', () => {
      expect(indexHtml).toMatch(/<script src="script.js"><\/script>/);
    });

    test('should have main container div', () => {
      expect(indexHtml).toMatch(/<div class="container">/);
    });

    test('should have header with title', () => {
      expect(indexHtml).toMatch(/<h1 class="title">Byom<\/h1>/);
      expect(indexHtml).toMatch(/Journey through Body, Mind & Soul/);
    });

    test('should have Om symbol wrapper', () => {
      expect(indexHtml).toMatch(/<div class="om-symbol-wrapper">/);
    });

    test('should have SVG with interactive zones', () => {
      expect(indexHtml).toMatch(/<svg class="om-overlay"/);
      expect(indexHtml).toMatch(/class="soul-section clickable"/);
      expect(indexHtml).toMatch(/class="mind-section clickable"/);
      expect(indexHtml).toMatch(/class="body-section clickable"/);
    });

    test('should have Om text element', () => {
      expect(indexHtml).toMatch(/<div class="om-text">ॐ<\/div>/);
    });

    test('should have section cards for Body, Mind, and Soul', () => {
      expect(indexHtml).toMatch(/class="section-card soul-card/);
      expect(indexHtml).toMatch(/class="section-card mind-card/);
      expect(indexHtml).toMatch(/class="section-card body-card/);
    });

    test('should have tooltip element', () => {
      expect(indexHtml).toMatch(/<div id="tooltip" class="tooltip"><\/div>/);
    });

    test('should have footer', () => {
      expect(indexHtml).toMatch(/<footer>/);
    });

    test('should have onclick navigation for section cards', () => {
      expect(indexHtml).toMatch(/onclick="window.location.href='soul.html'"/);
      expect(indexHtml).toMatch(/onclick="window.location.href='mind.html'"/);
      expect(indexHtml).toMatch(/onclick="window.location.href='body.html'"/);
    });
  });

  describe('body.html Structure', () => {
    test('should have DOCTYPE declaration', () => {
      expect(bodyHtml).toMatch(/<!DOCTYPE html>/i);
    });

    test('should have correct title', () => {
      expect(bodyHtml).toMatch(/<title>Body - Byom<\/title>/);
    });

    test('should include both stylesheets', () => {
      expect(bodyHtml).toMatch(/<link rel="stylesheet" href="styles.css">/);
      expect(bodyHtml).toMatch(/<link rel="stylesheet" href="page-styles.css">/);
    });

    test('should have navigation menu', () => {
      expect(bodyHtml).toMatch(/<nav class="navigation">/);
      expect(bodyHtml).toMatch(/href="index.html"/);
      expect(bodyHtml).toMatch(/href="body.html"/);
      expect(bodyHtml).toMatch(/href="mind.html"/);
      expect(bodyHtml).toMatch(/href="soul.html"/);
    });

    test('should have page header with title', () => {
      expect(bodyHtml).toMatch(/<h1 class="page-title">Body<\/h1>/);
    });

    test('should have body icon', () => {
      expect(bodyHtml).toMatch(/class="page-icon body-icon"/);
    });

    test('should have content sections', () => {
      expect(bodyHtml).toMatch(/Understanding the Body/);
      expect(bodyHtml).toMatch(/Practices for Body/);
    });

    test('should have footer with navigation links', () => {
      expect(bodyHtml).toMatch(/<footer class="page-footer">/);
      expect(bodyHtml).toMatch(/Explore Mind/);
      expect(bodyHtml).toMatch(/Explore Soul/);
    });
  });

  describe('mind.html Structure', () => {
    test('should have DOCTYPE declaration', () => {
      expect(mindHtml).toMatch(/<!DOCTYPE html>/i);
    });

    test('should have correct title', () => {
      expect(mindHtml).toMatch(/<title>Mind - Byom<\/title>/);
    });

    test('should include both stylesheets', () => {
      expect(mindHtml).toMatch(/<link rel="stylesheet" href="styles.css">/);
      expect(mindHtml).toMatch(/<link rel="stylesheet" href="page-styles.css">/);
    });

    test('should have navigation menu', () => {
      expect(mindHtml).toMatch(/<nav class="navigation">/);
    });

    test('should have page header with title', () => {
      expect(mindHtml).toMatch(/<h1 class="page-title">Mind<\/h1>/);
    });

    test('should have mind icon', () => {
      expect(mindHtml).toMatch(/class="page-icon mind-icon"/);
    });

    test('should have content sections', () => {
      expect(mindHtml).toMatch(/Understanding the Mind/);
      expect(mindHtml).toMatch(/Practices for Mind/);
    });

    test('should have footer with navigation links', () => {
      expect(mindHtml).toMatch(/<footer class="page-footer">/);
    });
  });

  describe('soul.html Structure', () => {
    test('should have DOCTYPE declaration', () => {
      expect(soulHtml).toMatch(/<!DOCTYPE html>/i);
    });

    test('should have correct title', () => {
      expect(soulHtml).toMatch(/<title>Soul - Byom<\/title>/);
    });

    test('should include both stylesheets', () => {
      expect(soulHtml).toMatch(/<link rel="stylesheet" href="styles.css">/);
      expect(soulHtml).toMatch(/<link rel="stylesheet" href="page-styles.css">/);
    });

    test('should have navigation menu', () => {
      expect(soulHtml).toMatch(/<nav class="navigation">/);
    });

    test('should have page header with title', () => {
      expect(soulHtml).toMatch(/<h1 class="page-title">Soul<\/h1>/);
    });

    test('should have soul icon', () => {
      expect(soulHtml).toMatch(/class="page-icon soul-icon"/);
    });

    test('should have content sections', () => {
      expect(soulHtml).toMatch(/Understanding the Soul/);
      expect(soulHtml).toMatch(/Practices for Soul/);
    });

    test('should have footer with navigation links', () => {
      expect(soulHtml).toMatch(/<footer class="page-footer">/);
    });
  });

  describe('Cross-page Consistency', () => {
    test('all pages should use UTF-8 charset', () => {
      expect(indexHtml).toMatch(/charset="UTF-8"/);
      expect(bodyHtml).toMatch(/charset="UTF-8"/);
      expect(mindHtml).toMatch(/charset="UTF-8"/);
      expect(soulHtml).toMatch(/charset="UTF-8"/);
    });

    test('all pages should have viewport meta tag', () => {
      expect(indexHtml).toMatch(/name="viewport"/);
      expect(bodyHtml).toMatch(/name="viewport"/);
      expect(mindHtml).toMatch(/name="viewport"/);
      expect(soulHtml).toMatch(/name="viewport"/);
    });

    test('all pages should include styles.css', () => {
      expect(indexHtml).toMatch(/styles.css/);
      expect(bodyHtml).toMatch(/styles.css/);
      expect(mindHtml).toMatch(/styles.css/);
      expect(soulHtml).toMatch(/styles.css/);
    });

    test('section pages should include page-styles.css', () => {
      expect(bodyHtml).toMatch(/page-styles.css/);
      expect(mindHtml).toMatch(/page-styles.css/);
      expect(soulHtml).toMatch(/page-styles.css/);
    });

    test('all section pages should have navigation back to index', () => {
      expect(bodyHtml).toMatch(/href="index.html"/);
      expect(mindHtml).toMatch(/href="index.html"/);
      expect(soulHtml).toMatch(/href="index.html"/);
    });
  });

  describe('Accessibility', () => {
    test('index.html should have proper heading hierarchy', () => {
      expect(indexHtml).toMatch(/<h1 class="title">/);
      expect(indexHtml).toMatch(/<h3>/);
    });

    test('section pages should have proper heading hierarchy', () => {
      expect(bodyHtml).toMatch(/<h1 class="page-title">/);
      expect(bodyHtml).toMatch(/<h2>/);
      
      expect(mindHtml).toMatch(/<h1 class="page-title">/);
      expect(mindHtml).toMatch(/<h2>/);
      
      expect(soulHtml).toMatch(/<h1 class="page-title">/);
      expect(soulHtml).toMatch(/<h2>/);
    });

    test('interactive elements should have appropriate attributes', () => {
      expect(indexHtml).toMatch(/data-tooltip/);
      expect(indexHtml).toMatch(/clickable/);
    });
  });
});
