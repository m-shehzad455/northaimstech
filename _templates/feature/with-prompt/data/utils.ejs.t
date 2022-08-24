---
to: "<%= advancedFeature == 'y' ? `src/${directory}/${name}/data/utils/${name}.constants.ts` : null %>"
---
import { T<%= h.changeCase.camel(name) %>Domain } from '../models/<%=name%>';

export interface <%= h.capitalize( h.changeCase.camel(name) ) %>Props{
  children: (props: T<%= h.changeCase.camel(name) %>Domain) => React.ReactNode;
}