---
to: "<%= advancedFeature == 'y' ? `src/${directory}/${name}/data/models/${name}.ts` : null %>"
---
import { z } from 'zod';

export const <%= h.changeCase.camel(name) %>DomainSchema = z.object({
  _key: z.string().default(''),
});

export type T<%= h.changeCase.camel(name) %>Domain = z.infer<typeof <%= h.changeCase.camel(name) %>DomainSchema> 
