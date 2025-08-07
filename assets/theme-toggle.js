(function() {
  // Get saved theme from localStorage or default to system preference
  function getThemePreference() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    return 'light';
  }
  
  // Apply theme to document
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }
  
  // Toggle between light and dark themes
  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
  }
  
  // Initialize theme on page load
  document.addEventListener('DOMContentLoaded', function() {
    // Apply saved or default theme
    const theme = getThemePreference();
    applyTheme(theme);
    
    // Add click handler to toggle button
    const toggleButton = document.getElementById('theme-toggle');
    if (toggleButton) {
      toggleButton.addEventListener('click', toggleTheme);
    }
    
    // Listen for system theme changes
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
        // Only apply system theme if user hasn't manually selected one
        if (!localStorage.getItem('theme')) {
          applyTheme(e.matches ? 'dark' : 'light');
        }
      });
    }
  });
  
  // Prevent flash of unstyled content by applying theme immediately
  const theme = getThemePreference();
  document.documentElement.setAttribute('data-theme', theme);
})();