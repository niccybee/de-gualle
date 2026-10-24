# A reference you can hand to an agent.

[Copy or download the complete plain-text guide](/llms-full.txt). [Entry-point index](/llms.txt).

## Working rules

1. Use semantic HTML. Atoms are native elements, molecules have one coherent job, organisms compose them.
2. Do not invent classes. Use documented component/variant attributes only when native structure is insufficient.
3. Global CSS styles the document. Scoped imports require `data-de-gualle` on a containing element or the element itself.
4. For scoped whole-page styling, use `<body data-de-gualle data-size="natural">`.
5. Use native state attributes before ARIA. ARIA communicates state; it does not implement behaviour.
6. Ready is the normal enabled state. Loading is `aria-busy`; unavailability is normally `disabled`; read-only is `readonly`; explicit validation is `aria-invalid` plus an explanation.
7. Do not mark untouched required fields erroneous. A service failure is not an invalid input.
8. Keep labels, descriptions, keyboard focus and minimum control dimensions. Errors need text, not colour alone.
9. Include organism dependencies through package exports. Do not manually reconstruct dependency ordering.
10. Generate a theme from a seed colour; copy both mode palettes. Changing `--dg-brand` alone does not regenerate exported shades.
11. Sizing modes are `sm`, `md`, `lg`, and default `natural`, set on a styling boundary.
12. Optional behaviour belongs to the app or recipe. Do not assume CSS sends requests, cancels work, filters tables or manages custom keyboard patterns.
13. Preserve iOS 15/Safari 15.4 compatibility. Document any new CSS feature and its fallback in the feature ledger.
14. Use `ni`, `nr`, and `nlx` for package-manager commands in this project.

## Attribute vocabulary

| Attribute        | Values / use                                                                                |
| ---------------- | ------------------------------------------------------------------------------------------- |
| `data-de-gualle` | Presence opts into scoped CSS                                                               |
| `data-theme`     | `light`, `dark`; omit for system                                                            |
| `data-size`      | `sm`, `md`, `lg`, `natural`; on boundary                                                    |
| `data-variant`   | Button `secondary` or `danger`; anchor `primary` or `secondary`; buttons default to primary |
| `data-grid`      | Responsive composition                                                                      |
| `data-stack`     | Vertical spacing                                                                            |
| `data-actions`   | Wrapping action row                                                                         |
| `data-overflow`  | Local horizontal scrolling                                                                  |
| `data-field`     | Label/control/help composition                                                              |
| `data-chat`      | On named chat section                                                                       |
| `data-speaker`   | Message `user` or `assistant`                                                               |
| `data-composer`  | On message form                                                                             |
| `data-dashboard` | On named dashboard section                                                                  |
| `data-tooltip`   | Optional nonessential decoration; not a full accessible tooltip                             |

Documentation-only `data-doc-*`, `data-intro`, preview and swatch attributes are not component exports. Prefer the canonical recipes linked below.

## Canonical recipes

- [Forms and elements](/elements.md)
- [State semantics](/states.md)
- [Chat](/chat.md)
- [Dashboard](/dashboard.md)
- [Theme generation](/themes.md)
- [Compatibility constraints](/compatibility.md)
