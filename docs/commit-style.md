# Commit Message Guidelines

A lightweight, structured style for clear and meaningful commit history.

## 1. Format

```
<type>[: <scope>]: <summary>

<body>   ← optional, explain *why*
```

**Required:** type, summary\
**Optional:** scope, body

## 2. Types

Use one of the following:

* feat — new behavior or capability
* fix — bug fix
* refactor — code change that doesn’t alter behavior
* style — formatting, naming, CSS cleanups
* docs — documentation changes
* test — tests and test helpers
* chore — tooling, config, dependencies, setup

## 3. Summary Rules

* Imperative tone (e.g., “Add…”, “Fix…”)
* ~70–90 characters (flexible)
* Describe the **intent**, not the code mechanics
* No trailing period

**Examples**

* `feat(layout): Implement fluid card sizing scale`
* `fix(card): Prevent image overflow on mobile`
* `refactor(utils): Extract size calculation helpers`

## 4. Commit Body (Optional)

Use the body to explain **why** the change was made.

* Don’t repeat the diff
* Include reasoning, constraints, or trade-offs
* One or two short paragraphs max

## 5. Granularity

Make each commit a **single logical unit of work**.

**Good size**

* Implement part of a feature
* Fix a specific bug
* Extract a utility
* Standardize names or styles in a related area

**Avoid**

* Entire features in one commit
* Unrelated changes combined
* Extremely small commits unless necessary

## 6. Scopes (Optional)

Use scopes when they make the commit clearer.

### Good scopes

* Components/modules: `card`, `header`, `layout`, `modal`
* Folders/domains: `utils`, `api`, `styles`, `config`
* Features: `search`, `theme`, `book-list`
* Meta: `deps`, `lint`, `build`, `ci`

### Avoid scopes that are:

* Too generic (`misc`, `code`)
* File names (`card.tsx`)
* Redundant with the type (`fix(bug)`)
* Forced — if you must debate the scope, skip it

**Rule of thumb:**
Use a scope only if it feels immediately obvious.
