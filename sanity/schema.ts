import { type SchemaTypeDefinition } from "sanity";
import { blogs } from "@/sanity/lib/schemas/blog";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogs],
};
