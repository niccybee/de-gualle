# A conversation, composed.

The chat organism combines native headings, an ordered message list, a composer, status text and recovery actions. Its styling does not depend on an AI provider or a JavaScript framework.

```js
import "de-gualle/organisms/chat.css";
```

```html preview 650
<section data-de-gualle data-chat aria-labelledby="chat-title">
  <header><h2 id="chat-title">Assistant</h2></header>
  <ol aria-label="Conversation">
    <li data-speaker="assistant">
      <header><strong>Assistant</strong></header>
      <p>How can I help?</p>
    </li>
    <li data-speaker="user">
      <header><strong>You</strong></header>
      <p>Let's build something useful.</p>
    </li>
  </ol>
  <p role="status" aria-live="polite">Ready for your message.</p>
  <form data-composer>
    <label for="message">Your message</label>
    <textarea id="message" name="message" required></textarea>
    <div data-actions><button type="submit">Send message</button></div>
  </form>
</section>
```

## Interaction recipe

The standalone demo includes separate `chat.js` application code. Messages are inserted with `textContent` (including code examples), never interpreted as HTML. Data lives only in memory and disappears on reload. No analytics, storage, credentials or network calls.

- Start empty, send a message and simulate incremental responses.
- Keep a readable partial response when stopped; cancellation clears the timer.
- Preserve the user's message on errors and retry without duplicating it.
- Keep drafts editable while unavailable, but disable sending.
- Mark the button busy and the composer read-only during generation.
- Announce progress/completion via a separate polite status region. Do not announce each token.
- Follow the message list only while the reader is already near its end.
- Treat Shift/Enter as ordinary textarea input; submit with the send button. No shortcut interferes with input methods.

This demonstrates state handling, not an accessible-chat certification. Screen-reader announcements and the iPhone keyboard/scrolling behaviour require device testing.

<Demo src="/examples/chat.html" title="Interactive local chat" height="800" />

[View the complete HTML](/examples/chat.html) · [View demo JavaScript](/examples/chat.js)
