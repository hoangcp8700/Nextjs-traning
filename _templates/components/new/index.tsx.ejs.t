---
to: src/components/<%= level %>/<%= h.toPascalCase(name) %>/index.tsx
---
import React from "react";
// import styles from "./<%= h.toCamelCase(name) %>.module.css";

export interface <%= h.toPascalCase(name) %>Props {};

const <%= h.toPascalCase(name) %>: React.FC<<%= h.toPascalCase(name) %>Props> = () => <div>Component <%= h.toPascalCase(name) %></div>;

export default <%= h.toPascalCase(name) %>;