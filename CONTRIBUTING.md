# Contributing to Long-Pooler

Thank you for your interest in contributing to Long-Pooler! This document provides guidelines and information for contributors.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Contributing Guidelines](#contributing-guidelines)
- [Pull Request Process](#pull-request-process)
- [Code Style](#code-style)
- [Testing](#testing)
- [Documentation](#documentation)
- [Release Process](#release-process)

## Code of Conduct

This project adheres to the Contributor Covenant Code of Conduct. By participating, you are expected to uphold this code.

### Our Standards

- Use welcoming and inclusive language
- Be respectful of differing viewpoints and experiences
- Gracefully accept constructive criticism
- Focus on what is best for the community
- Show empathy towards other community members

### Unacceptable Behavior

- The use of sexualized language or imagery
- Trolling, insulting/derogatory comments, and personal or political attacks
- Public or private harassment
- Publishing others' private information without explicit permission
- Other conduct which could reasonably be considered inappropriate

## Getting Started

### Prerequisites

- Node.js 16+ and npm 8+
- Git
- Basic knowledge of JavaScript/TypeScript and React

### Fork and Clone

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/Long-Pooler.git
   cd Long-Pooler
   ```
3. Add the upstream remote:
   ```bash
   git remote add upstream https://github.com/padinitz-code/Long-Pooler.git
   ```

## Development Setup

### Installation

```bash
# Install dependencies
npm install

# Create environment file
cp env.example .env

# Start development server
npm run dev
```

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm test` - Run tests (when implemented)
- `npm run lint` - Run linting (when implemented)

## Contributing Guidelines

### What We're Looking For

- **Bug fixes** - Help us squash bugs
- **Feature enhancements** - Improve existing functionality
- **New features** - Add new capabilities
- **Documentation** - Improve docs and examples
- **Performance improvements** - Make things faster
- **Security enhancements** - Improve security posture

### Before You Start

1. **Check existing issues** - Your idea might already be discussed
2. **Create an issue first** - For significant changes, discuss before coding
3. **Keep it focused** - One feature/fix per pull request
4. **Follow the roadmap** - Check our project roadmap for priorities

### Issue Labels

- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Improvements or additions to documentation
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention is needed
- `priority: high` - High priority issues
- `priority: low` - Low priority issues

## Pull Request Process

### 1. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

### 2. Make Your Changes

- Write clean, readable code
- Follow the code style guidelines
- Add tests for new functionality
- Update documentation as needed

### 3. Commit Your Changes

Use conventional commit format:

```bash
git commit -m "feat: add new long-polling endpoint"
git commit -m "fix: resolve memory leak in polling loop"
git commit -m "docs: update API documentation"
git commit -m "test: add unit tests for LongPollingClient"
```

**Commit Types:**
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation changes
- `style` - Code style changes (formatting, etc.)
- `refactor` - Code refactoring
- `test` - Adding or updating tests
- `chore` - Maintenance tasks

### 4. Push and Create PR

```bash
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub with:
- Clear description of changes
- Link to related issues
- Screenshots (if UI changes)
- Test results

### 5. PR Review Process

- Maintainers will review your code
- Address feedback and requested changes
- Ensure all CI checks pass
- Squash commits if requested

## Code Style

### JavaScript/JSX

- Use ES6+ features (arrow functions, destructuring, etc.)
- Prefer `const` and `let` over `var`
- Use meaningful variable and function names
- Add JSDoc comments for public APIs
- Follow ESLint configuration (when implemented)

### React Components

- Use functional components with hooks
- Keep components focused and single-purpose
- Use proper prop types and default props
- Implement proper error boundaries
- Follow React best practices

### File Organization

```
src/
├── components/          # React components
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── types/              # TypeScript types (when implemented)
└── server.jsx          # Server implementation
```

### Naming Conventions

- **Files**: kebab-case (`long-polling-client.jsx`)
- **Components**: PascalCase (`LongPollingClient`)
- **Functions**: camelCase (`startPolling`)
- **Constants**: UPPER_SNAKE_CASE (`MAX_RETRY_ATTEMPTS`)
- **CSS Classes**: kebab-case (`.long-polling-client`)

## Testing

### Test Structure

- Unit tests for utility functions
- Component tests for React components
- Integration tests for API endpoints
- E2E tests for critical user flows

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run specific test file
npm test -- --grep "LongPollingClient"
```

### Writing Tests

- Test both success and failure cases
- Mock external dependencies
- Use descriptive test names
- Follow AAA pattern (Arrange, Act, Assert)

## Documentation

### Code Documentation

- Add JSDoc comments for all public functions
- Include examples in comments
- Document complex algorithms
- Keep comments up-to-date with code changes

### User Documentation

- Update README.md for new features
- Add examples and use cases
- Include migration guides for breaking changes
- Keep API documentation current

### API Documentation

- Document all endpoints
- Include request/response examples
- Document error codes and messages
- Provide authentication requirements

## Release Process

### Versioning

We use [Semantic Versioning](https://semver.org/):
- **Major** (1.0.0) - Breaking changes
- **Minor** (1.1.0) - New features, backward compatible
- **Patch** (1.0.1) - Bug fixes, backward compatible

### Release Checklist

- [ ] All tests passing
- [ ] Documentation updated
- [ ] Changelog updated
- [ ] Version bumped
- [ ] Release notes written
- [ ] GitHub release created
- [ ] npm package published (if applicable)

### Creating a Release

1. Update version in `package.json`
2. Update `CHANGELOG.md`
3. Create release branch
4. Submit PR for review
5. Merge and tag release
6. Create GitHub release

## Getting Help

### Questions and Discussion

- **GitHub Issues** - For bugs and feature requests
- **GitHub Discussions** - For questions and general discussion
- **Discord/Slack** - For real-time chat (if available)

### Mentorship

New contributors can:
- Look for issues labeled `good first issue`
- Ask for help in GitHub Discussions
- Request code review from maintainers
- Join community calls (if available)

## Recognition

Contributors will be recognized through:
- GitHub contributor graph
- Release notes and changelog
- Contributor hall of fame (when implemented)
- Special thanks in documentation

## License

By contributing to Long-Pooler, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to Long-Pooler! Your contributions help make this project better for everyone.
