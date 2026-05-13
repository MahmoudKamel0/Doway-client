export default {
    extends: ["@commitlint/config-conventional"],
    // Enforce commit message format: type(scope): subject
    formatter: {
        // Example of correct schema: "type(scope): body message"
        // Example: "fix(api): handle null values in user endpoint"
    },
    rules: {
        // Allowable commit types for enterprise maintainability
        "type-enum": [
            2,
            "always",
            [
                "feat", // New features
                "fix", // Bug fixes
                "docs", // Documentation only changes
                "style", // Code style changes (formatting, missing semi colons, etc)
                "refactor", // Code changes that neither fixes a bug nor adds a feature
                "perf", // Performance improvements
                "test", // Adding missing tests or correcting existing ones
                "build", // Changes that affect the build system or external dependencies
                "ci", // Continuous integration related changes
                "chore", // Other changes that don’t modify src or test files
                "revert", // Reverts a previous commit
                "release", // Release version changes
                "security", // Security related changes
            ],
        ],
        // Ensure subject is not empty and starts with lowercase
        "subject-empty": [2, "never"],
        "subject-case": [2, "always", "lower-case"],
        // Require scope for clarity and traceability
        "scope-empty": [2, "never"],
        // Prevent breaking changes commit except for feat or fix type
        "body-leading-blank": [2, "always"],
        "footer-leading-blank": [2, "always"],
        "header-max-length": [2, "always", 72],
        // Scopes for maintainability (customize as needed for your mono-repo)
        "scope-enum": [2, "always", ["api", "web", "mobile", "docs", "deps", "infra", "config", "ui", "db", "tests"]],
        // No WIP or temp commits on main branch
        "subject-disallowed-words": [2, "always", ["wip", "temp", "test"]],
        // Enforce the general commit schema: type(scope): subject
        // Example: "fix(api): handle null values in user endpoint"
        "header-pattern": [2, "always", "^(\\w+)(\\(\\w+\\))?:\\s.+$"],
        "header-pattern-examples": [0, "always", ["fix(api): handle null values in user endpoint"]],
    },
};
