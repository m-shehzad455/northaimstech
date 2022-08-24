---
to: "<%= advancedFeature == 'y' ? `src/${directory}/${name}/data/hooks/${name}.atoms.ts` : null %>"
---
import {
  T<%= h.changeCase.camel(name) %>Domain,
  <%= h.changeCase.camel(name) %>DomainSchema,
} from '../models/<%=name%>';
import { atom, useAtom } from 'jotai';

export const <%= h.changeCase.camel(name) %>DomainAtom = atom<T<%= h.changeCase.camel(name) %>Domain>(
  <%= h.changeCase.camel(name) %>DomainSchema.parse({}) as T<%= h.changeCase.camel(name) %>Domain
);

export const <%= h.changeCase.camel(name) %> = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [viewProjectSummaryDomain] = useAtom(<%= h.changeCase.camel(name) %>DomainAtom);
  return viewProjectSummaryDomain;
};
