# State is part of the element.

Use native HTML attributes first, then accurate ARIA, then custom attributes for application concepts that neither covers. There is no universal four-state machine applicable to every input.

| Intent                   | Mechanism                                      | Behaviour / styling                                                                  |
| ------------------------ | ---------------------------------------------- | ------------------------------------------------------------------------------------ |
| Ready                    | Normal enabled element                         | Default appearance; no invented ready attribute                                      |
| Loading                  | `aria-busy="true"`                             | Busy cursor; buttons add a spinner; application must manage work                     |
| Unavailable              | `disabled`                                     | Native controls cannot activate, are unfocusable and excluded from submission        |
| Discoverable unavailable | `aria-disabled="true"`                         | Communicates state; application must prevent activation; button appearance supported |
| Read-only                | `readonly`                                     | Supported inputs and textarea stay focusable/copyable; dashed border                 |
| Required / optional      | `required`; `:required`, `:optional`           | Native validation; no automatic red border on untouched fields                       |
| Explicit error           | `aria-invalid="true"`                          | Error border; connect a visible explanation with `aria-describedby`                  |
| Explicit valid           | `aria-invalid="false"`                         | Optional success border after validation; omit on untouched controls                 |
| Constraint valid/invalid | `:valid`, `:invalid`                           | Browser validation remains; no default eager error skin                              |
| In/out of range          | `min`, `max`; `:in-range`, `:out-of-range`     | Native constraints; validate and explain before setting explicit error               |
| Checked                  | `:checked`                                     | Current checkedness; browser-native check/radio indicator                            |
| Indeterminate            | DOM `indeterminate` property; `:indeterminate` | Native mixed checkbox indicator; no HTML indeterminate attribute                     |
| Selected option          | Current option selection; `:checked`           | Browser renders selection; `[selected]` is only the initial default                  |
| Expanded disclosure      | `open` on `details` / `dialog`                 | Browser state; dialog modal activation needs `showModal()`                           |
| Hidden                   | `hidden`                                       | Removed from layout and accessibility tree; not an unavailable control               |
| Focus / keyboard focus   | `:focus`, `:focus-visible`                     | Visible outline; focus fallback for older browsers                                   |
| Hover / pressed          | `:hover`, `:active`                            | Native interaction; no mirrored state attribute                                      |

`aria-pressed`, `aria-expanded`, `aria-selected`, `aria-current`, and `aria-checked="mixed"` describe specific accessible patterns. Do not add them just to obtain a style. This release does not implement custom tab, listbox or menu keyboard behaviour.

Other native conditions include `:enabled`, `:read-only` / `:read-write`, `:placeholder-shown`, `:default`, and browser autofill. They retain browser behaviour without a separate de-gualle skin. `autofocus` requests initial focus rather than representing an ongoing state. Newer `:user-valid` / `:user-invalid` selectors and `inert` are not baseline dependencies; do not rely on them without checking support and providing the appropriate fallback.

## Explain an error

```html
<div data-field>
  <label for="email">Email address</label>
  <input
    id="email"
    name="email"
    type="email"
    aria-invalid="true"
    aria-describedby="email-error"
  />
  <small id="email-error" role="alert">! Enter a complete email address.</small>
</div>
```

Only announce an error when it becomes relevant. An initial static specimen can show the state, but production forms should set it after validation. Clear stale error messages and attributes when the value is corrected. Errors must not rely solely on colour.

## Loading is not disabled

```html
<button type="submit" aria-busy="true" disabled>Saving changes…</button>
```

Here `aria-busy` describes work, `disabled` prevents duplicate submission, and the text explains what is happening. Neither attribute performs the request. Keep a separate cancel button available when the operation can be cancelled.

## Native validity and current state

`checked` and `selected` attributes describe defaults. Use current properties or state pseudo-classes after user interaction, not `[checked]` or `[selected]` selectors. `readonly` does not apply to selects, checkboxes or radios. Disabled `fieldset` affects most descendant controls; descendants of its first legend are an HTML exception.

A response failure is a service error, not invalid message text. Keep the user's message and offer retry. Announce completed chat responses through a separate polite status region rather than every streamed token.
