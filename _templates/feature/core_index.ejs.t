---
inject: true
append: true
to: src/<%= h.changeCase.camel(name) %>/index.tsx
---
export * from './<%=name%>';