---
to: "<%= advancedFeature == 'y' ? `src/${directory}/${name}/data/domains/${name}.domain.tsx` : null %>"
---
import { useMemo } from 'react';
import { <%= h.changeCase.camel(name) %>DomainAtom } from '../hooks/<%=name%>.atoms';
import { <%= h.capitalize( h.changeCase.camel(name) ) %>Props } from "../utils/<%=name%>.constants";
import { T<%= h.changeCase.camel(name) %>Domain } from '../models/<%=name%>';

export function <%= h.capitalize( h.changeCase.camel(name) ) %>({
  children,
}: <%= h.capitalize( h.changeCase.camel(name) ) %>Props) {

  const props = useMemo<T<%= h.changeCase.camel(name) %>Domain>(
    () => ({
      _key: <%= h.changeCase.camel(name) %>DomainAtom.toString(),
    }),
    // [projects, pipelines]
    []
  );
  return typeof children === 'function' ? <>{children(props)}</> : children;
}
