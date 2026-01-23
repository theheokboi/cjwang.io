import nextra from "nextra";

// Set up Nextra with its configuration
// Nextra 4 automatically detects the 'content' directory in src/ or root
const withNextra = nextra({
  // Add Nextra-specific options here if needed
});

// Export the final Next.js config with Nextra included
export default withNextra({
  // ... Add regular Next.js options here
});
