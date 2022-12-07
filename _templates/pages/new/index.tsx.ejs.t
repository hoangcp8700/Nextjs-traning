---
to: src/pages/<%= h.toCamelCase(name) %>.tsx
---
import { NextPageWithLayout } from "@/types/page";
import <%= h.toPascalCase(name) %>Container, { <%= h.toPascalCase(name) %>Props } from "@/containers/<%= h.toPascalCase(name) %>";

const <%= h.toPascalCase(name) %>Page: NextPageWithLayout<<%= h.toPascalCase(name) %>Props> = () => <<%= h.toPascalCase(name) %>Container />;

export default <%= h.toPascalCase(name) %>Page;

// <%= h.toPascalCase(name) %>Page.layout = Layout.Primary;