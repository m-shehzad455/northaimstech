---
to: src/<%=directory%>/<%=name%>/<%=name%>.tsx
---

/* eslint-disable-next-line */
export interface <%= h.capitalize( h.changeCase.camel(name) ) %>Props {}

export function <%= h.capitalize( h.changeCase.camel(name) ) %>(props: <%= h.capitalize( h.changeCase.camel(name) ) %>Props) {
  return (
    <div>
      <h1>Welcome to <%= h.changeCase.camel(name) %>!</h1>
    </div>
  );
}

export default <%= h.capitalize( h.changeCase.camel(name) ) %>;
