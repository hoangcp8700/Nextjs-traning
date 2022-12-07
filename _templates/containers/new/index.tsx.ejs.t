---
to: src/containers/<%= h.toPascalCase(name) %>/index.tsx
---
import type { NextPage } from "next";

export interface <%= h.toPascalCase(name) %>ContainerProps {}

const <%= h.toPascalCase(name) %>Container: NextPage<<%= h.toPascalCase(name) %>ContainerProps> = () => (
  <div className="p-<%= name%>">
    <p>Container <%= h.toPascalCase(name) %></p>
  </div>
);

export default <%= h.toPascalCase(name) %>Container;
